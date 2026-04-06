import { contactLinks } from "../../data/contactInfo";
import "./Header.css";

const Header = () => {
  const navigationItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="header">
      <div className="container">
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          <img src="/logo.svg" alt="Logo ono.ar" className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-mark">ono.ar</span>
            <span className="brand-note">Software a medida para vender y operar mejor</span>
          </span>
        </a>
        <nav className="nav">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={contactLinks.whatsapp} className="btn btn-primary header-cta" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
