export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col brand">
              <img
                src="/img/Logo_JN.png"
                alt="Jordão Neto"
                className="footer-logo"
              />
              <p>
                Especialista em Produtos Digitais, Agile e Alta Performance.
                Transformando equipes para entregar resultados extraordinários.
              </p>
            </div>
            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#">Treinamento de Equipes</a></li>
                <li><a href="#">Consultoria de Produto</a></li>
                <li><a href="#">Agile Coaching</a></li>
                <li><a href="#">Otimização de Processos</a></li>
                <li><a href="#">Palestras</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Conteúdo</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Cases de Sucesso</a></li>
                <li><a href="#">Materiais Gratuitos</a></li>
                <li><a href="#">Newsletter</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <ul>
                <li><a href="#">ola@jordaoneto.com</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Jordão Neto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
