import React from "react";

import "./portfolio_top.scss";

function Portfolio_Top() {
  return (
    <div className="portfolio-top">
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
