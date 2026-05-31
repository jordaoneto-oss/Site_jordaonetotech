"use client";

import { useState } from "react";

const reports = [
  {
    tag: "Fintech",
    title: "Redução de 50% no time-to-market",
    summary:
      "Implementação de Squads ágeis e OKRs em uma fintech de pagamentos. O time passou de entregas trimestrais para releases quinzenais.",
    detail:
      "Com a reestruturação das squads, definição de ritos ágeis e implantação de OKRs, a fintech reduziu o ciclo de entrega de 90 para 15 dias. O engajamento do time subiu de 45% para 85% e a previsibilidade das entregas atingiu 95%.",
  },
  {
    tag: "Varejo",
    title: "Equipe multicanal com +70% de produtividade",
    summary:
      "Reestruturação do time de produto digital com adoção de Scrum e Kanban híbrido em uma grande rede varejista.",
    detail:
      "Entregas passaram de 8 para 28 story points por sprint. O time de 12 pessoas foi reorganizado em 2 squads multidisciplinares com autonomia e alinhamento estratégico. Redução de 60% em retrabalho.",
  },
  {
    tag: "Saúde",
    title: "Transformação cultural em 3 meses",
    summary:
      "Programa de imersão em Agile para 5 squads de uma healthtech. Engajamento saltou de 34% para 82%.",
    detail:
      "Workshops intensivos, acompanhamento semanal e mentoria para líderes. A rotatividade caiu 60% e a velocidade de entrega aumentou 40% em apenas 3 meses. Times completamente autônomos ao final do programa.",
  },
];

export default function ReportCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section reports-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Cases recentes</span>
          <h2 className="section-title">
            Resultados que <span className="highlight-text">inspiram</span>
          </h2>
        </div>
        <div className="reports-grid">
          {reports.map((r, i) => (
            <div
              key={i}
              className={`report-card${openIndex === i ? " open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="report-tag">{r.tag}</div>
              <h3>{r.title}</h3>
              <p className="report-desc">{r.summary}</p>
              <button className="report-toggle" onClick={(e) => { e.stopPropagation(); toggle(i); }}>
                {openIndex === i ? "Fechar ↓" : "Expandir →"}
              </button>
              <div className="report-detail">
                <p>{r.detail}</p>
                <a href="#" className="report-link" onClick={(e) => e.stopPropagation()}>
                  Ler case completo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
