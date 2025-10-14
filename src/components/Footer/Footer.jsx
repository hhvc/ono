import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ono.ar</h3>
            <p>
              Desarrollo de software a medida para impulsar tu negocio digital.
            </p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>info@ono.ar</p>
            <p>+54 9 11 1234-5678</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ono.ar - Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
