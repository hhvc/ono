import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Hablemos de tu proyecto</h3>
            <p>
              ¿Tienes una idea que quieres desarrollar? Contáctanos y te
              ayudaremos a hacerla realidad.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>info@ono.ar</span>
              </div>
              <div className="contact-item">
                <strong>Teléfono:</strong>
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="contact-item">
                <strong>Ubicación:</strong>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
