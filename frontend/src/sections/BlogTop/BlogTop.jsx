import React from "react";

import "./blogTop.scss";

function BlogTop() {
  return (
    <div className="portfolio-top blog-top">
      <h1 className="portfolio-top-title">Блог</h1>
      <div className="portfolio-top-links">
        <a className="link" href="#">
          Все 1 534
        </a>
        <a className="link" href="#">
          Проекты 72
        </a>
        <a className="link" href="#">
          Новости 350
        </a>
        <a className="link" href="#">
          Команда 22
        </a>
        <a className="link" href="#">
          Статьи 22
        </a>
        <a className="link" href="#">
          СМИ 22
        </a>
      </div>
    </div>
  );
}

export default BlogTop;
