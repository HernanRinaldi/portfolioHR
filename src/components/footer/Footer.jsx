import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__container container">

        <h1 className="footer__title">Hernan Rinaldi</h1>

        <ul className="footer__list">

          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>

        </ul>

        <span className="footer__copy">
          &#169; Todos los derechos reservados.  Creado por Hernan Rinaldi
        </span>
      </div>
    </footer>
  );
};

export default Footer;
