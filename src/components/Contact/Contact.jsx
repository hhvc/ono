import { useState, useEffect } from "react";
import { contactInfo, contactLinks } from "../../data/contactInfo";
import "./Contact.css";

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

const Contact = () => {
  const nextSteps = [
    "Reviso personalmente el mensaje y respondo por email o WhatsApp.",
    "Si hay encaje, propongo una llamada breve para ordenar alcance, tiempos y prioridad.",
    "Luego recibes una propuesta concreta, sin paquetes inflados ni ambiguedad tecnica.",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    website: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setStatusMessage("");
    setStatusType("idle");
  }, [formData.name, formData.email, formData.projectType, formData.message]);

  const projectOptions = [
    "Landing o sitio comercial",
    "Sistema interno",
    "MVP o producto digital",
    "Automatizacion o integracion",
    "Consultoria tecnica",
  ];

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          website: formData.website,
          pageUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "No pude enviar el mensaje.");
      }

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
        website: "",
      });
      setStatusType("success");
      setStatusMessage(result.message || "Mensaje enviado correctamente.");
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        error.message || "No pude enviar el mensaje en este momento. Usa WhatsApp o email directo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-heading fade-in contact-heading">
          <span>Contacto</span>
          <h2>Si tienes una oportunidad concreta, podemos convertirla en un plan de trabajo.</h2>
          <p>
            Cuanto mas claro sea el problema a resolver, mejor la propuesta. Si aun no tienes todo definido, tambien puedo ayudarte a ordenarlo.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info surface-card fade-in">
            <h3>Hablemos de tu proyecto</h3>
            <p>
              Puedes escribirme por el formulario o ir directo al canal que te resulte mas comodo. Respondo personalmente.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email</strong>
                <a href={contactLinks.email}>{contactInfo.email}</a>
              </div>
              <div className="contact-item">
                <strong>WhatsApp</strong>
                <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  {contactInfo.phoneDisplay}
                </a>
              </div>
              <div className="contact-item">
                <strong>Ubicacion</strong>
                <span>{contactInfo.location}</span>
              </div>
            </div>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary" onClick={() => openLink(contactLinks.whatsapp)}>
                Abrir WhatsApp
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => openLink(contactLinks.email)}>
                Enviar email directo
              </button>
            </div>

            <div className="contact-note">
              <strong>Ideal para el primer mensaje</strong>
              <p>
                Cuenta brevemente que vendes, donde se traba hoy el proceso y que resultado te gustaria obtener.
              </p>
            </div>
          </div>

          <form className="contact-form surface-card fade-in" onSubmit={handleSubmit}>
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tu email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectType">Tipo de proyecto</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opcion</option>
                {projectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Que necesitas resolver</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe el problema, el objetivo comercial o el tipo de sistema que imaginas."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar consulta"}
            </button>
            {statusMessage ? <p className={`form-status form-status-${statusType}`}>{statusMessage}</p> : null}
            <div className="contact-next-steps">
              <strong>Que pasa despues</strong>
              <ul>
                {nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
