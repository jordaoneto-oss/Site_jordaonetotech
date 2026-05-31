"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    tag: "Programa",
    title: "Imersão em Alta Performance",
    text: "4 semanas intensivas para alinhar propósito, processos e métricas. Sua equipe sai com plano de ação, ritmo sustentável e entregas aceleradas.",
  },
  {
    tag: "Consultoria",
    title: "Produtos Digitais",
    text: "Discovery, roadmap, OKRs e backlog. Ajudamos seu time a construir o produto certo, da maneira certa.",
  },
  {
    tag: "Mentoria",
    title: "Agile Coaching & Formação",
    text: "Para POs, Scrum Masters e líderes. Scrum, Kanban, Lean e facilitation com certificação e acompanhamento.",
  },
  {
    tag: "Processos",
    title: "Otimização de Processos",
    text: "Mapeamento, gargalos e melhorias. Redução de lead time e aumento da previsibilidade do seu time.",
  },
  {
    tag: "Métricas",
    title: "OKRs & KPIs",
    text: "Indicadores que importam. Conecte estratégia à execução com dashboards e métricas de produto.",
  },
  {
    tag: "Eventos",
    title: "Palestras & Workshops",
    text: "Conteúdo que inspira e gera ação. Produtos Digitais, Agile, Alta Performance e Futuro do Trabalho.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const getSlidesPerView = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const onResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", onResize);
    setSlidesPerView(getSlidesPerView());
    return () => window.removeEventListener("resize", onResize);
  }, [getSlidesPerView]);

  const maxIndex = Math.max(0, slides.length - slidesPerView);

  const prev = () => setIndex(Math.max(0, index - 1));
  const next = () => setIndex(Math.min(maxIndex, index + 1));

  return (
    <section className="section carousel-section">
      <div className="container">
        <div className="carousel-header">
          <div>
            <span className="section-tag" style={{ color: "#00D2A0" }}>
              Serviços
            </span>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Tudo que sua equipe <br />
              precisa para <span className="highlight-text">entregar mais</span>
            </h2>
          </div>
          <div className="carousel-arrows">
            <button className="carousel-arrow" onClick={prev}>
              ←
            </button>
            <button className="carousel-arrow" onClick={next}>
              →
            </button>
          </div>
        </div>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (100 / slidesPerView + 24 / (slidesPerView === 1 ? 1 : slidesPerView === 2 ? 2 : 3))}px)`,
            }}
          >
            {slides.map((s, i) => (
              <div className="carousel-slide" key={i}>
                <div className="carousel-slide-tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="carousel-link">Saiba mais →</span>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${index === i ? " active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
