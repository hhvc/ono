import "./FAQ.css";

const FAQ = () => {
  const questions = [
    {
      question: "Cuanto tarda arrancar un proyecto?",
      answer:
        "Depende del alcance, pero la idea es bajar definiciones rapido. Despues del primer intercambio preparo una propuesta aterrizada y, si hay encaje, se puede empezar en pocos dias.",
    },
    {
      question: "Trabajas solo o con equipo?",
      answer:
        "El trabajo tecnico y la coordinacion salen de una sola mano, que es parte del valor de este servicio. Si el proyecto lo necesita, puedo sumar perfiles puntuales sin convertirlo en una estructura pesada.",
    },
    {
      question: "Puedes tomar algo ya empezado?",
      answer:
        "Si, siempre que primero pueda revisar el estado real del proyecto, las dependencias y la calidad de la base actual. A veces conviene continuar; a veces conviene recortar o rehacer una parte especifica.",
    },
    {
      question: "Haces mantenimiento despues del lanzamiento?",
      answer:
        "Si. Puedo dejar una entrega cerrada o seguir con una etapa de mejoras y soporte, segun el tipo de negocio y la criticidad de la herramienta.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-layout surface-card fade-in">
          <div className="faq-intro">
            <span>Preguntas frecuentes</span>
            <h2>Antes de hablar, estas suelen ser las dudas mas comunes.</h2>
            <p>
              Si tu caso es distinto, no hace falta tener todo resuelto para escribir. El primer objetivo es ordenar el problema y ver si tiene sentido avanzar.
            </p>
          </div>

          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;