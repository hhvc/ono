import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Desarrollo de Software a Medida</h1>
          <p>
            Soluciones web innovadoras que impulsan tu negocio. Creamos
            aplicaciones escalables y eficientes adaptadas a tus necesidades
            específicas.
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">
              Solicitar Presupuesto
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
