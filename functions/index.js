const admin = require("firebase-admin");
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret, defineString } = require("firebase-functions/params");

admin.initializeApp();

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const CONTACT_TO_EMAIL = defineString("CONTACT_TO_EMAIL", {
  default: "hectorvazquez.laboral@gmail.com",
});
const CONTACT_FROM_EMAIL = defineString("CONTACT_FROM_EMAIL", {
  default: "ono.ar <onboarding@resend.dev>",
});
const CONTACT_ALLOWED_ORIGIN = defineString("CONTACT_ALLOWED_ORIGIN", {
  default: "*",
});

const db = admin.firestore();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setCorsHeaders(req, res) {
  const configuredOrigin = CONTACT_ALLOWED_ORIGIN.value();
  const requestOrigin = req.get("origin") || "";
  const allowOrigin = configuredOrigin === "*" ? "*" : configuredOrigin;

  if (allowOrigin === "*" || requestOrigin === configuredOrigin) {
    res.set("Access-Control-Allow-Origin", allowOrigin === "*" ? "*" : requestOrigin);
  }

  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

function normalizePayload(body = {}) {
  return {
    name: `${body.name || ""}`.trim(),
    email: `${body.email || ""}`.trim().toLowerCase(),
    projectType: `${body.projectType || ""}`.trim(),
    message: `${body.message || ""}`.trim(),
    website: `${body.website || ""}`.trim(),
    pageUrl: `${body.pageUrl || ""}`.trim(),
  };
}

function validatePayload(payload) {
  if (!payload.name || payload.name.length < 2) {
    return "Ingresa un nombre valido.";
  }

  if (!emailPattern.test(payload.email)) {
    return "Ingresa un email valido.";
  }

  if (!payload.projectType) {
    return "Selecciona el tipo de proyecto.";
  }

  if (!payload.message || payload.message.length < 20) {
    return "Describe la necesidad con un poco mas de detalle.";
  }

  if (payload.website) {
    return "Solicitud rechazada.";
  }

  return null;
}

async function sendResendEmail(payload) {
  const apiKey = `${RESEND_API_KEY.value() || ""}`.trim();

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is empty or unavailable");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL.value(),
      to: [CONTACT_TO_EMAIL.value()],
      reply_to: payload.email,
      subject: `Nueva consulta web - ${payload.projectType}`,
      text: [
        `Nombre: ${payload.name}`,
        `Email: ${payload.email}`,
        `Tipo de proyecto: ${payload.projectType}`,
        `Pagina: ${payload.pageUrl || "No informada"}`,
        "",
        "Mensaje:",
        payload.message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1e1b18;max-width:640px">
          <h2 style="margin-bottom:16px">Nueva consulta desde ono.ar</h2>
          <p><strong>Nombre:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>Tipo de proyecto:</strong> ${payload.projectType}</p>
          <p><strong>Pagina:</strong> ${payload.pageUrl || "No informada"}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${payload.message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorText}`);
  }

  return response.json();
}

exports.contactForm = onRequest({
  cors: false,
  secrets: [RESEND_API_KEY],
}, async (req, res) => {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
    return;
  }

  const payload = normalizePayload(req.body);
  const validationError = validatePayload(payload);

  if (validationError) {
    res.status(400).json({ success: false, error: validationError });
    return;
  }

  const submissionRef = db.collection("contactSubmissions").doc();

  try {
    await submissionRef.set({
      ...payload,
      status: "received",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const resendResult = await sendResendEmail(payload);

    await submissionRef.update({
      status: "emailed",
      provider: "resend",
      providerMessageId: resendResult.id || null,
      deliveredAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info("Consulta enviada correctamente", {
      submissionId: submissionRef.id,
      email: payload.email,
      projectType: payload.projectType,
    });

    res.status(200).json({
      success: true,
      message: "Mensaje enviado correctamente. Te respondere pronto.",
    });
  } catch (error) {
    logger.error("Error procesando formulario de contacto", error);

    await submissionRef.set({
      ...payload,
      status: "error",
      errorMessage: error.message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    res.status(500).json({
      success: false,
      error: "No pude enviar tu mensaje en este momento. Prueba por WhatsApp o email directo.",
    });
  }
});

exports.helloWorld = onRequest((req, res) => {
  res.json({ message: "Hola desde Firebase Functions" });
});