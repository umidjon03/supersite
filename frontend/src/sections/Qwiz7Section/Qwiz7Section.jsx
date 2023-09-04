import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";

import Qwiz7Bg from "../../assets/images/Vectorqwiz7.png";

import "./qwiz7-section.scss";

function Qwiz7Section() {
  return (
    <div className="qwiz7-section">
      <img src={Qwiz7Bg} alt="" className="qwiz7-bg" />
      <h1 className="qwiz7-section-title">Спасибо, что прошли наш квиз!</h1>
      <p className="qwiz7-section-txt">
        Наши менеджеры обработают вашу заявку и свяжуться с вами в ближайшее
        время
      </p>
      <Link to="/" className="link">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
}

export default Qwiz7Section;
