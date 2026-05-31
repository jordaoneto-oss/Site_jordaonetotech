export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">Metodologia</span>
            <h2 className="section-title">
              Método que transforma<br />
              equipes em <span className="highlight-text">potências</span>
            </h2>
            <p>
              Com mais de 12 anos de experiência em Produtos Digitais e Agile,
              desenvolvi uma abordagem prática que combina{" "}
              <strong>
                estratégia de produto, metodologias ágeis e gestão de alta
                performance
              </strong>{" "}
              para criar times autônomos e entregadores.
            </p>
            <p>
              Não se trata apenas de treinar — trata-se de{" "}
              <strong>mudar a cultura</strong>. Startups, scale-ups e grandes
              corporações já transformaram suas equipes com aumento médio de{" "}
              <strong>40% na velocidade de entrega</strong> e{" "}
              <strong>60% no engajamento</strong>.
            </p>
            <a href="#" className="btn btn-primary" style={{ marginTop: 8 }}>
              Agende uma conversa
            </a>
          </div>
          <div className="about-image">
            <div className="about-img-placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}
