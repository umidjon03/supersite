import React, { useState } from "react";

import { Button } from "../../components";
import BGImg from "../../assets/images/backgroundcontacts-bg.png";

import "./contacts-hero.scss";

function ContactsHero() {
  const [modal, setModal] = useState(false);
  return (
    <div className="contacts">
      <div className="contacts-info">
        <h1 className="info-title">Есть проект?</h1>
        <h4 className="info-summary">С нетерпением приступим к нему</h4>
        <p className="info-txt">г.Москва ул. Освобождения, д.3</p>
        <p className="info-txt">+7(066) 364 19 19 / info@DidgiKey</p>
        <Button
          className="info-btn"
          onClick={() => {
            setModal(true);
          }}
        >
          Связаться с нами
        </Button>
      </div>
      <img src={BGImg} alt="" className="contacts-bg" />
      <div className={`contacts-modal ${modal ? "contacts-modal-open" : ""}`}>
        <div
          className="close"
          onClick={() => {
            setModal(false);
          }}
        >
          x
        </div>
        <h2 className="modal-title">Обратная связь</h2>
        <p className="modal-txt">
          Наши менеджеры с радостью ответят на все ваши попросы
        </p>
        <form>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Телефон" />
          <input type="email" name="" id="" placeholder="E-mail" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Здесь могут быть ваши комментарии"
          ></textarea>
          <Button className="modal-btn">Отправить</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactsHero;
