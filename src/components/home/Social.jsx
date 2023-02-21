import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/hjrinaldi"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/hernan-javier-rinaldi"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/HernanRinaldi"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://twitter.com/Hernanrinaldi01"
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-twitter"></i>
      </a>
    </div>
  );
};

export default Social;
