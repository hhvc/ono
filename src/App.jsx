import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Proof from "./components/Proof/Proof";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    document.documentElement.lang = "es";
    document.title = "ono.ar | Desarrollo web y software a medida";

    const upsertMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    upsertMeta(
      "description",
      "Desarrollo landing pages, sitios, sistemas internos y MVPs para negocios que necesitan vender mejor, automatizar procesos y lanzar rapido."
    );
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <Hero />
      <Services />
      <Proof />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
