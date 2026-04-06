import { contactInfo, contactLinks } from "../../data/contactInfo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ono.ar</h3>
            <p>Desarrollo web y software a medida para negocios que necesitan vender mejor y operar sin fricciones.</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>
              <a href={contactLinks.email}>{contactInfo.email}</a>
            </p>
            <p>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                {contactInfo.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Navegacion</h4>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#proceso">Proceso</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ono.ar - Cordoba, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
