import React from "react";

import "./portfolio_top.scss";

import BgImg from "../../assets/images/Vectorportfolio-hero-bg.png";

function Portfolio_Top() {
  return (
    <div className="portfolio-top">
      <img src={BgImg} alt="" className="bg-img" />
      <h1 className="portfolio-top-title">Портфолио</h1>
      <div className="portfolio-top-links">
        <a className="link" href="#">
          Все 1 534
        </a>
        <a className="link" href="#">
          Интернет-магазины 72
        </a>
        <a className="link" href="#">
          Landing pages 350
        </a>
        <a className="link" href="#">
          Корпоративные сайты 22
        </a>
      </div>
    </div>
  );
}

export default Portfolio_Top;
