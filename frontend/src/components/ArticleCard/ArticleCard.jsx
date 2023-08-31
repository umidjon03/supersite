import React from "react";

function ArticleCard({ img, date, title, txt, yuid }) {
  return (
    <div className="article-card">
      <div className="card-img">
        <img src={img} alt="card img" />
      </div>
      <div className="card-info">
        <h5 className="card-date">{date}</h5>
        <h3 className="card-title">{title}</h3>
        <p className="card-txt">{txt}</p>
        <a href="#" className="card-link">
          Читать подробнее
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
