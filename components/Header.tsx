"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = ["Home", "Sobre", "Serviços", "Cases", "Contato"];

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span><span></span><span></span>
        </button>

        <a href="/" className="logo">
          <img src="/img/Logo_JN.png" alt="Jordão Neto" className="logo-img" />
        </a>

        <nav className={`main-nav${menuOpen ? " open" : ""}`}>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`nav-link${link === "Home" ? " active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
