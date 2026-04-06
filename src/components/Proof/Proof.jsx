import "./Proof.css";

const Proof = () => {
    const portfolioItems = [
        {
            name: "financialo.ar",
            href: "https://financialo.ar",
            label: "Servicios financieros",
            scope: "Desarrollo completo: diseno de negocio, diseno de procesos, frontend y backend.",
            description:
                "Proyecto integral con web comercial y CRM a medida para operar propuestas de credito, cotizaciones, alta de clientes, catalogo de productos y seguimiento comercial desde un mismo tablero.",
            highlights: [
                "Definicion del modelo de negocio y flujo comercial",
                "Panel para propuestas de credito y cotizador financiero",
                "Diseno de procesos internos y arquitectura funcional",
                "Implementacion completa de frontend y backend",
            ],
            images: [
                {
                    src: "/portfolio/financialo-admin-1.jpg",
                    alt: "Panel de administracion de Financialo con propuestas de credito, cotizador y modulos de seguimiento.",
                },
            ],
        },
        {
            name: "canadaallago.com",
            href: "https://canadaallago.com",
            label: "Turismo y reservas",
            scope: "Desarrollo completo: diseno de negocio, diseno de procesos, frontend y backend.",
            description:
                "Proyecto integral para complejo turistico, con sitio de captacion y backoffice propio para reservas, cabanas, contactos, galeria, comentarios, usuarios y reportes.",
            highlights: [
                "Definicion de propuesta comercial y proceso de reservas",
                "Diseno de operacion interna para gestion diaria del complejo",
                "Implementacion completa de frontend y backend",
            ],
            images: [
                {
                    src: "/portfolio/canada-al-lago-admin-1.jpg",
                    alt: "Panel de administracion de Canada al Lago con metricas, reservas y gestion de cabanas.",
                },
                {
                    src: "/portfolio/canada-al-lago-admin-2.jpg",
                    alt: "Modulos de administracion de Canada al Lago para calendario, comentarios, galeria y reportes.",
                },
            ],
        },
    ];

    const outcomes = [
        {
            title: "Menos friccion para vender",
            description:
                "Una oferta mejor explicada, llamados a la accion mas claros y una pagina pensada para convertir visitas en conversaciones utiles.",
        },
        {
            title: "Menos trabajo manual",
            description:
                "Procesos, datos y seguimientos reunidos en un solo flujo para evitar planillas paralelas, mensajes sueltos y errores repetidos.",
        },
        {
            title: "Decisiones mas rapidas",
            description:
                "Proyectos recortados con criterio para salir antes, medir antes y ajustar con informacion real en vez de especular durante meses.",
        },
        {
            title: "Una base que no obliga a rehacer todo",
            description:
                "Arquitectura simple, mantenible y pensada para crecer por etapas cuando el negocio realmente lo justifica.",
        },
    ];

    const scenarios = [
        {
            eyebrow: "Caso frecuente 01",
            title: "Landing para servicios que hoy dependen de explicar todo por WhatsApp",
            description:
                "Ordeno la propuesta, priorizo el mensaje comercial y dejo una estructura lista para captar consultas mejor calificadas.",
            points: ["Oferta mas clara", "CTA y formulario con mejor filtro", "Base lista para SEO y anuncios"],
        },
        {
            eyebrow: "Caso frecuente 02",
            title: "Panel interno para dejar de operar con planillas y mensajes dispersos",
            description:
                "Centralizo estados, datos y tareas para que el seguimiento comercial u operativo dependa menos de memoria manual.",
            points: ["Seguimiento visible", "Menos errores de coordinacion", "Informacion ordenada para crecer"],
        },
        {
            eyebrow: "Caso frecuente 03",
            title: "MVP bien recortado para validar una idea sin quemar presupuesto",
            description:
                "Defino la version minima que permite aprender rapido, lanzar antes y decidir si conviene escalar con datos reales.",
            points: ["Alcance controlado", "Lanzamiento mas rapido", "Aprendizaje antes de sobredesarrollar"],
        },
    ];

    return (
        <section id="resultados" className="proof">
            <div className="container">
                <div id="portfolio" className="portfolio-block surface-card fade-in">
                    <div className="portfolio-heading">
                        <span>Portfolio</span>
                        <h2>Algunos proyectos publicados que muestran el tipo de trabajo que puedo construir.</h2>
                        <p>
                            Cada proyecto responde a un negocio distinto, pero comparten el mismo criterio: mensaje claro, estructura util y tecnologia al servicio de un objetivo concreto.
                        </p>
                    </div>

                    <div className="portfolio-grid">
                        {portfolioItems.map((item) => (
                            <article key={item.name} className="portfolio-card">
                                <div className="portfolio-card-media">
                                    {item.images.map((image) => (
                                        <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                                    ))}
                                </div>
                                <div className="portfolio-card-top">
                                    <span>{item.label}</span>
                                    <a href={item.href} target="_blank" rel="noreferrer">
                                        Visitar sitio
                                    </a>
                                </div>
                                <h3>{item.name}</h3>
                                <p className="portfolio-scope">{item.scope}</p>
                                <p>{item.description}</p>
                                <ul>
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="section-heading fade-in">
                    <span>Resultados</span>
                    <h2>La mejora no es solo tecnica. Tiene que sentirse en ventas, tiempos y claridad operativa.</h2>
                    <p>
                        Cuando el proyecto esta bien planteado, se nota rapido: menos ida y vuelta innecesaria, mas foco comercial y una base mas estable para crecer.
                    </p>
                </div>

                <div className="outcomes-grid">
                    {outcomes.map((item) => (
                        <article key={item.title} className="outcome-card fade-in">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>

                <div className="scenario-grid">
                    {scenarios.map((scenario) => (
                        <article key={scenario.title} className="scenario-card surface-card fade-in">
                            <span>{scenario.eyebrow}</span>
                            <h3>{scenario.title}</h3>
                            <p>{scenario.description}</p>
                            <ul>
                                {scenario.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proof;