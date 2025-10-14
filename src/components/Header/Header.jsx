import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>ono.ar</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
