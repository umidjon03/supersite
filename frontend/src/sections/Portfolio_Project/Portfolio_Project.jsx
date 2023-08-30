import React from "react";

import { Button } from "../../components";
import ProjectImg from "../../assets/images/macbook-23 1portfolio-project-img.png";

import "./portfolio_project.scss";

function Portfolio_Project({ namee, order }) {
  return (
    <div className="portfolio-project">
      <div className="project-info">
        <p className="project-type">Интернет-магазин</p>
        <h1 className="project-title">Double B</h1>
        <p className="project-summary">
          Задача организации, в особенности же рамки и место обучения кадров
          представляет собой интересный эксперимент проверки систем массового
          участия.
        </p>
        <Button className="project-btn">Перейти на сайт</Button>
      </div>
      <div className="project-img">
        <img src={ProjectImg} alt="project image" />
      </div>
    </div>
  );
}

export default Portfolio_Project;
