import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas con React, Vue o tecnologías similares, optimizadas para rendimiento y experiencia de usuario.",
      icon: "🌐",
    },
    {
      title: "Aplicaciones Móviles",
      description:
        "Apps nativas e híbridas para iOS y Android que conectan tu negocio con tus clientes en cualquier lugar.",
      icon: "📱",
    },
    {
      title: "APIs y Backend",
      description:
        "Sistemas robustos de backend, APIs RESTful y bases de datos escalables para soportar tu aplicación.",
      icon: "⚙️",
    },
    {
      title: "Consultoría Técnica",
      description:
        "Asesoramiento especializado para tomar las mejores decisiones tecnológicas para tu proyecto.",
      icon: "💡",
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
