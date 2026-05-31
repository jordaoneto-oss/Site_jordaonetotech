"use client";

import { useState } from "react";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#00D2A0" opacity="0.1" />
        <path d="M16 8v16M8 16h16" stroke="#00D2A0" strokeWidth="2" />
      </svg>
    ),
    title: "Treinamento de Equipes",
    summary: "Formação prática em Agile, Scrum, Kanban e OKRs.",
    detail:
      "Programa completo de formação com mentoria individual e em grupo. Sua equipe aprende na prática a aplicar métodos ágeis, definir OKRs, priorizar backlog e entregar com previsibilidade. Inclui certificação e acompanhamento por 3 meses.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#00D2A0" opacity="0.1" />
        <circle cx="16" cy="16" r="6" stroke="#00D2A0" strokeWidth="2" />
      </svg>
    ),
    title: "Produtos Digitais",
    summary: "Estratégia de produto, discovery e delivery contínuo.",
    detail:
      "Do problema à solução com foco em valor. Discovery, definição de roadmap, OKRs de produto, gestão de backlog e métricas de sucesso. Ajudamos seu time a construir o produto certo, da maneira certa, no tempo certo.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#00D2A0" opacity="0.1" />
        <path d="M12 22l8-6-8-6" stroke="#00D2A0" strokeWidth="2" />
      </svg>
    ),
    title: "Otimização de Processos",
    summary: "Diagnóstico, redesenho e eliminação de gargalos.",
    detail:
      "Mapeamento de fluxos de valor, identificação de desperdícios, redesenho de processos e implementação de melhorias contínuas. Resultado: redução média de 40% no lead time, aumento da previsibilidade e times mais produtivos.",
  },
];

export default function ExpandableCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nossas especialidades</span>
          <h2 className="section-title">
            Soluções que geram <span className="highlight-text">resultado real</span>
          </h2>
          <p className="section-desc">
            Da estratégia à execução — programas desenhados para criar times
            autônomos, alinhados e de alta performance.
          </p>
        </div>
        <div className="cards-expand-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card-expand${openIndex === i ? " open" : ""}`}
            >
              <div className="card-expand-inner">
                <div className="card-expand-front">
                  <div className="card-expand-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                  <button className="card-expand-btn" onClick={() => toggle(i)}>
                    {openIndex === i ? "Fechar →" : "Expandir →"}
                  </button>
                </div>
                <div className="card-expand-back">
                  <p>{card.detail}</p>
                  <button
                    className="card-expand-btn close"
                    onClick={() => toggle(i)}
                  >
                    Fechar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
