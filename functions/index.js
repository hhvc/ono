const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * Función para procesar el formulario de contacto
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.contactForm = functions.https.onRequest(async (req, res) => {
  // Configurar CORS
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const {name, email, message} = req.body;

    // Aquí procesarías el formulario:
    // - Validar datos
    // - Enviar email
    // - Guardar en base de datos

    functions.logger.log("Formulario de contacto recibido:", {name, email, message});

    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.status(200).json({
      success: true,
      message: "Mensaje recibido correctamente. Te contactaremos pronto.",
    });
  } catch (error) {
    functions.logger.error("Error procesando formulario:", error);
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
    });
  }
});

/**
 * Función de prueba básica
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.json({message: "¡Hola desde Firebase Functions!"});
});