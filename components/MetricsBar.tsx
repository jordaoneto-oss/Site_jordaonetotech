export default function MetricsBar() {
  const metrics = [
    { num: "12+", label: "Anos de experiência" },
    { num: "150+", label: "Equipes treinadas" },
    { num: "40+", label: "Empresas atendidas" },
    { num: "98%", label: "Satisfação" },
  ];

  return (
    <section className="section metrics-section">
      <div className="container">
        <div className="metrics-bar">
          {metrics.map((m, i) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <div className="metric-divider" />}
              <div className="metric-item">
                <span className="metric-num">{m.num}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
