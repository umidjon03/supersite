import React from "react";

import "./process.scss";
import { Container } from "../../components";

function Process() {
  return (
    <div className="process">
      <Container>
        <div className="process-top">
          <h1 className="process-top-title">
            Хотим немного <br /> рассказать
          </h1>
          <div className="process-top-txt">О том, как работает наш аудит</div>
        </div>
        <div className="process-list">
          <div className="process-list-item">
            <h3 className="list-item-number">1</h3>
            <h5 className="list-item-title">
              <span>Шаг 1.</span> Поступление заявки
            </h5>
            <p className="list-item-txt">
              Товарищи! укрепление и развитие структуры представляет собой
              интересный эксперимент проверки.
            </p>
          </div>
          <div className="process-list-item">
            <h3 className="list-item-number">2</h3>
            <h5 className="list-item-title">
              <span>Шаг 2.</span> Составление аудита
            </h5>
            <p className="list-item-txt">
              Товарищи! укрепление и развитие структуры представляет собой
              интересный эксперимент проверки.
            </p>
          </div>
          <div className="process-list-item">
            <h3 className="list-item-number">3</h3>
            <h5 className="list-item-title">
              <span>Шаг 3.</span> Подбор рекомендаций
            </h5>
            <p className="list-item-txt">
              Товарищи! укрепление и развитие структуры представляет собой
              интересный эксперимент проверки.
            </p>
          </div>
          <div className="process-list-item">
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
      </Container>
    </div>
  );
}

export default Process;
