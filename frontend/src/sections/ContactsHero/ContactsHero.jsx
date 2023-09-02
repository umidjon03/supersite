import React from "react";

import { Button } from "../../components";
import BGImg from "../../assets/images/backgroundcontacts-bg.png";

import "./contacts-hero.scss";

function ContactsHero() {
  return (
    <div className="contacts">
      <div className="contacts-info">
        <h1 className="info-title">Есть проект?</h1>
        <h4 className="info-summary">С нетерпением приступим к нему</h4>
        <p className="info-txt">г.Москва ул. Освобождения, д.3</p>
        <p className="info-txt">+7(066) 364 19 19 / info@DidgiKey</p>
        <Button className="info-btn">Связаться с нами</Button>
      </div>
      <img src={BGImg} alt="" className="contacts-bg" />
    </div>
  );
}

export default ContactsHero;
