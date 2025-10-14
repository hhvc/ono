import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
  });

  // Protección contra bots - misma técnica que en Contact
  useEffect(() => {
    const emailParts = ["hectorvazquez.laboral", "gmail", "com"];
    const phoneParts = ["+54", "9", "351", "547", "8785"];

    setContactInfo({
      email: `${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`,
      phone: `${phoneParts[0]} ${phoneParts[1]} ${phoneParts[2]} ${phoneParts[3]}-${phoneParts[4]}`,
    });
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ono.ar</h3>
            <p>¡Impulsá tu negocio con software a medida!</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
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
