import React from "react";

import { Container } from "../../components";

import "./howWeWork.scss";

function HowWeWork() {
  return (
    <div className="wework">
      <Container>
        <h1 className="wework-title">Как мы работаем</h1>
        <p className="wework-txt">
          Креативная, опытная команда, которая любит решать сложные задачи.
          Делаем то, что другим не под силу. Залог нашего успеха в углубленном
          анализе и желании стать не просто компанией, которая Вам помогает, а
          быть надежным и, самое главное, эффективным партнером на долгие годы.
        </p>
        <div className="wework-list">
          <div className="list-item">
            <h1 className="list-item-number">1</h1>
            <h1 className="list-item-title">Анализ</h1>
            <p className="list-item-txt">
              Товарищи! укрепление и развитие структуры представляет собой
              интересный эксперимент проверки.
            </p>
          </div>
          <div className="list-item">
            <h1 className="list-item-number">2</h1>
            <h1 className="list-item-title">Планирование</h1>
            <p className="list-item-txt">
              Товарищи! укрепление и развитие структуры представляет собой
              интересный эксперимент проверки.
            </p>
          </div>
          <div className="list-item">
            <h1 className="list-item-number">3</h1>
            <h1 className="list-item-title">Реализация</h1>
            <p className="list-item-txt">
              Товарищи! укрепление и развитие структуры представляет собой
              интересный эксперимент проверки.
            </p>
          </div>
          <div className="list-item">
            <h1 className="list-item-number">4</h1>
            <h1 className="list-item-title">Отчет</h1>
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

export default HowWeWork;
