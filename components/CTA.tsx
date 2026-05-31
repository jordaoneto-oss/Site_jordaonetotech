export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <span className="section-tag" style={{ color: "#00D2A0" }}>
          Diagnóstico gratuito
        </span>
        <h2 className="section-title" style={{ color: "#fff" }}>
          Sua equipe pronta para o<br />
          <span className="highlight-text">próximo nível</span>?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: 560,
            margin: "0 auto 32px",
          }}
        >
          Descubra o caminho mais rápido para acelerar seus resultados com uma
          sessão gratuita de diagnóstico.
        </p>
        <a
          href="#"
          className="btn btn-accent btn-lg"
        >
          Quero agendar meu diagnóstico
        </a>
      </div>
    </section>
  );
}
