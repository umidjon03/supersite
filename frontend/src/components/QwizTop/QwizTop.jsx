import React from "react";

import "./qwiz-top.scss";

function QwizTop({ step, num, title }) {
  return (
    <div className="qwiz-top">
      <h1 className="qwiz-top-title">
        Пройдите опрос из {num} <br /> вопросов и получите
      </h1>
      <p className="qwiz-top-txt">
        Стоимость и сроки разработки. Краткий анализ вашей компании и
        рекомендации. План работ и маркетинговую стратегию.
      </p>
      <h3 className="qwiz-top-step">
        <span>Шаг {step}.</span> {title}
      </h3>
    </div>
  );
}

export default QwizTop;
