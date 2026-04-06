import { contactInfo, contactLinks } from "../../data/contactInfo";
import "./Hero.css";

const Hero = () => {
  const highlights = [
    "Landings y sitios que explican mejor tu oferta y convierten visitas en consultas.",
    "Sistemas internos para ordenar operaciones, ventas, turnos, stock o seguimiento.",
    "MVPs y automatizaciones para validar ideas sin perder meses ni presupuesto.",
  ];

  const deliverables = [
    "Diagnostico del problema comercial o operativo",
    "Propuesta tecnica con alcance claro",
    "Iteraciones cortas con feedback real",
    "Base preparada para crecer sin rehacer todo",
  ];

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid fade-in">
          <div className="hero-content">
            <span className="hero-eyebrow">Desarrollo freelance con foco comercial</span>
            <h1>Convierto ideas, procesos lentos y servicios mal explicados en productos digitales que venden.</h1>
            <p className="hero-lead">
              Trabajo con negocios, profesionales y equipos que necesitan una presencia digital seria o una herramienta a medida para operar mejor. Sin humo, sin sobreingenieria y con alcance claro desde el inicio.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn btn-primary">
                Quiero una propuesta
              </a>
              <a href={contactLinks.whatsapp} className="btn btn-secondary" target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </div>
            <ul className="hero-highlights" aria-label="Principales soluciones">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-proof">
              <div>
                <strong>1 interlocutor tecnico</strong>
                <span>Hablas directo con quien piensa y construye el proyecto.</span>
              </div>
              <div>
                <strong>Respuesta inicial en 24 h habiles</strong>
                <span>Ideal para avanzar rapido sin perder traccion comercial.</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel surface-card" aria-label="Enfoque de trabajo">
            <div className="hero-panel-top">
              <span>Sesion inicial</span>
              <strong>30 minutos para ordenar el proyecto</strong>
            </div>
            <p>
              Si ya tienes una idea, una pagina que no convierte o un proceso manual que frena ventas, la primera conversacion apunta a traducirlo en una solucion concreta.
            </p>
            <div className="hero-panel-list">
              {deliverables.map((item, index) => (
                <div key={item} className="hero-panel-item">
                  <span>{`0${index + 1}`}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="hero-contact-card">
              <small>Contacto directo</small>
              <a href={contactLinks.email}>{contactInfo.email}</a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                {contactInfo.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
