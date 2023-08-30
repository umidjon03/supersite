import React from "react";

import { Button } from "../../components";

import HeroImg from "../../assets/images/image 76 1marketing-hero.png";

import "./marketing_hero.scss";

function Marketing_Hero() {
  return (
    <div className="marketing-hero">
      <div className="marketing-hero-info">
        <h4 className="info-top">PERFORMANCE MARKETING</h4>
        <h1 className="info-title">Попадем в цель?</h1>
        <p className="info-txt">
          Мы понимаем, что для успешного продвижения в интернет-среде требуется
          комплексный подход. Для каждого клиента мы подбираем инструменты
          исходя из особенностей его бизнеса.
        </p>
        <Button>Заказать услуги</Button>
      </div>
      <div className="marketing-hero-img">
        <img src={HeroImg} alt="hero image" />
      </div>
    </div>
  );
}

export default Marketing_Hero;
