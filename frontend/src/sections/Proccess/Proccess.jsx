import React from "react";

import "./proccess.scss";

function Proccess() {
  return (
    <div className="proccess">
      <div className="proccess-top">
        <h1 className="proccess-top-title">Хотим немного <br /> расказать </h1>
        <div className="proccess-top-txt">О том, как работет наш аудит</div>
      </div>
      <div className="proccess-list">
        <div className="proccess-list-item">
          <h3 className="list-item-number">1</h3>
          <h5 className="list-item-title">
            <span>Шаг 1.</span> Поступление заявки
          </h5>
          <p className="list-item-txt">
            Товарищи! укрепление и развитие структуры представляет собой
            интересный эксперимент проверки.
          </p>
        </div>
        <div className="proccess-list-item">
          <h3 className="list-item-number">2</h3>
          <h5 className="list-item-title">
            <span>Шаг 2.</span> Составление аудита
          </h5>
          <p className="list-item-txt">
            Товарищи! укрепление и развитие структуры представляет собой
            интересный эксперимент проверки.
          </p>
        </div>
        <div className="proccess-list-item">
          <h3 className="list-item-number">3</h3>
          <h5 className="list-item-title">
            <span>Шаг 3.</span> Подбор рекомендаций
          </h5>
          <p className="list-item-txt">
            Товарищи! укрепление и развитие структуры представляет собой
            интересный эксперимент проверки.
          </p>
        </div>
        <div className="proccess-list-item">
          <h3 className="list-item-number">4</h3>
          <h5 className="list-item-title">
            <span>Шаг 4.</span> Выдача клиенту
          </h5>
          <p className="list-item-txt">
            Товарищи! укрепление и развитие структуры представляет собой
            интересный эксперимент проверки.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Proccess;
