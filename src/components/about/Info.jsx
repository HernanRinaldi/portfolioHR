import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">2 + años</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Finalizados</h3>
        <span className="about__subtitle">10 + Projectos</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Aprendiendo</h3>
        <span className="about__subtitle">Online</span>
      </div>
    </div>
  );
};

export default Info;
