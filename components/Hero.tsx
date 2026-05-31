export default function Hero() {
  return (
    <section className="hero" id="main">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <span className="hero-badge">Especialista em Produtos Digitais</span>
        <h1 className="hero-title">
          Juntos,<br />nós <em>transformamos</em>.
        </h1>
        <p className="hero-subtitle">
          Equipes de alta performance começam com propósito. Agile, Produto e
          Otimização de Processos para resultados que impactam.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary">
            Quero transformar minha equipe
          </a>
          <a href="#" className="btn btn-outline">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
