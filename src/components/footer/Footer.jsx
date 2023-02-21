import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__container container">

        <h1 className="footer__title">Hernan Rinaldi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; All rigths reserved, Created by Hernan Rinaldi
        </span>
      </div>
    </footer>
  );
};

export default Footer;
