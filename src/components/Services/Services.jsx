import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Landings y sitios con foco en conversion",
      description:
        "Paginas pensadas para explicar mejor tu oferta, filtrar consultas y generar una imagen profesional que sostenga el precio de tus servicios.",
      label: "Captacion",
    },
    {
      title: "Sistemas internos para ordenar operaciones",
      description:
        "Herramientas a medida para ventas, seguimiento, turnos, inventario, gestion de clientes o cualquier flujo que hoy dependa de planillas y mensajes dispersos.",
      label: "Operacion",
    },
    {
      title: "MVPs y productos digitales",
      description:
        "Versiones iniciales bien recortadas para validar una idea, salir al mercado rapido y decidir con datos si conviene escalar.",
      label: "Validacion",
    },
    {
      title: "Integraciones y automatizacion",
      description:
        "Conexion entre formularios, CRM, WhatsApp, email, bases de datos o paneles internos para reducir tareas manuales y errores.",
      label: "Eficiencia",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Diagnostico",
      description:
        "Entiendo tu negocio, donde estas perdiendo tiempo o ventas y que deberia resolver el producto para que tenga impacto.",
    },
    {
      step: "02",
      title: "Alcance claro",
      description:
        "Propongo una solucion aterrizada, con prioridades, tiempos y criterios de avance. Sin paquetes inflados ni promesas vagas.",
    },
    {
      step: "03",
      title: "Construccion iterativa",
      description:
        "Desarrollo por etapas visibles para que puedas revisar avances temprano y corregir rumbo antes de llegar tarde.",
    },
    {
      step: "04",
      title: "Lanzamiento y mejora",
      description:
        "Entrego una base mantenible, acompanada por medicion, ajustes y siguientes pasos si el proyecto necesita crecer.",
    },
  ];

  const fit = [
    "Negocios de servicios que necesitan una pagina mas convincente y profesional.",
    "Equipos que ya venden, pero operan con demasiados pasos manuales.",
    "Emprendimientos o startups que quieren validar un producto antes de invertir de mas.",
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-heading fade-in">
          <span>Servicios</span>
          <h2>No necesitas mas tecnologia. Necesitas que la correcta mueva el negocio.</h2>
          <p>
            Mi trabajo no es sumarte complejidad, sino construir la pieza digital que falta para vender mejor, responder mas rapido o dejar de depender de procesos improvisados.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card surface-card fade-in">
              <span className="service-label">{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div id="proceso" className="services-process">
          <div className="section-heading fade-in">
            <span>Proceso</span>
            <h2>Trabajo con foco, criterio tecnico y decisiones faciles de seguir.</h2>
            <p>
              Una landing o un sistema interno solo sirve si resuelve el problema correcto. Por eso el proceso esta pensado para bajar incertidumbre desde el primer contacto.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step} className="process-card fade-in">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="fit-panel surface-card fade-in">
          <div>
            <span>Encaje ideal</span>
            <h3>Este enfoque funciona especialmente bien si ya existe una necesidad de negocio concreta.</h3>
          </div>
          <div className="fit-list">
            {fit.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
