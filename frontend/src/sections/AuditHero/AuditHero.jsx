import React from "react";

import AuditHeroImg from "../../assets/images/imgrocket.png";
import AuditBg from "../../assets/images/Vectoraudit-hero-bgimg.png";
import { Container } from "../../components";

import "./audit-hero.scss";

function AuditHero() {
  return (
    <div className="audit-hero">
      <Container className="audit-hero__container">
        <img className="hero-bg" src={AuditBg} alt="" />
        <div className="audit-hero-info">
          <h1 className="info-title">Мы знаем как улучшить ваш сайт.</h1>
          <h4 className="info-advice">
            Воспользуйтесь нашим бесплатным аудитом сайта и узнайет как.
          </h4>
          <p className="info-txt">
            Задача организации, в особенности же рамки и место обучения кадров
            представляет собой интересный эксперимент проверки систем массового
            участия.
          </p>
        </div>
        <div className="audit-hero-img">
          <img src={AuditHeroImg} alt="rocket" />
        </div>
      </Container>
    </div>
  );
}

export default AuditHero;
