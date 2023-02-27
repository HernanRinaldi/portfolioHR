import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Portafolio</h2>
      <span class="section__subtitle">Trabajos recientes</span>

      <Works />
    </section>
  );
};

export default Work;
