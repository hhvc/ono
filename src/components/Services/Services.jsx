import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web a Medida",
      description:
        "Aplicaciones web modernas con React, Vue y tecnologías de vanguardia. PWAs, SPAs y aplicaciones empresariales escalables.",
      icon: "🌐",
    },
    {
      title: "Aplicaciones Móviles",
      description:
        "Apps nativas e híbridas para iOS y Android. Desarrollo cross-platform con React Native y Flutter.",
      icon: "📱",
    },
    {
      title: "APIs y Backend Services",
      description:
        "Sistemas robustos de backend, APIs RESTful/GraphQL, microservicios y bases de datos escalables.",
      icon: "⚙️",
    },
    {
      title: "Registración de Dominios",
      description:
        "Gestión completa de registro y configuración de nombres de dominio. Asesoramiento en estrategia de marca digital.",
      icon: "🔗",
    },
    {
      title: "Hosting y Cloud Google",
      description:
        "Soluciones de hosting en Google Cloud Platform. Storage, Compute Engine, App Engine y Cloud Run.",
      icon: "☁️",
    },
    {
      title: "Ecosistema Firebase",
      description:
        "Firestore, Authentication, Cloud Functions, Hosting, Storage y Analytics. Desarrollo serverless.",
      icon: "🔥",
    },
    {
      title: "Infraestructura como Código",
      description:
        "Configuración automatizada de infraestructura con Terraform y Deployment Manager.",
      icon: "🔧",
    },
    {
      title: "Consultoría Técnica",
      description:
        "Asesoramiento especializado en arquitectura cloud, escalabilidad y mejores prácticas.",
      icon: "💡",
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Servicios Integrales de Desarrollo</h2>
        <p className="services-subtitle">
          Ofrecemos soluciones completas desde el dominio hasta la aplicación en
          producción
        </p>
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
