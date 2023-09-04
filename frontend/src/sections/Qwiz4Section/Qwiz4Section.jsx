import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "../../components";

import Img1 from "../../assets/images/image 71qwiz4-1.png";
import Img2 from "../../assets/images/image 71qwiz4-2.png";
import Img3 from "../../assets/images/image 71qwiz4-3.png";
import Prev from "../../assets/images/Vector 15 (Stroke)left.png";
import Next from "../../assets/images/Vector 15 (Stroke)right.png";

function Qwiz4Section() {
  const [creativity, setCreativity] = useState("simple");
  return (
    <div className="qwiz2-section qwiz3-section">
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={Img1} alt="" />
          </div>
          <div className="input">
            <input
              type="radio"
              name="functionality"
              id="style"
              onChange={() => {
                setCreativity("simple");
              }}
            />
            <label htmlFor="style">
              Минимум.
              <p>
                Заявки на почту, звонки на телфон. Яндекс метрика и сертификат
                безопасности
              </p>
            </label>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Img2} alt="" />
          </div>
          <div className="input">
            <input
              type="radio"
              name="functionality"
              id="logo"
              onChange={() => {
                setCreativity("medium");
              }}
            />
            <label htmlFor="logo">
              Средний
              <p>
                + Админинстрирование с возможностью изменять контент и вести
                блог
              </p>
            </label>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Img3} alt="" />
          </div>
          <div className="input">
            <input
              type="radio"
              name="functionality"
              id="dont"
              onChange={() => {
                setCreativity("excelent");
              }}
            />
            <label htmlFor="dont">
              Максимум
              <p>
                + Интеграции калькуляторов, платежных систем, личный кабинет,
                чаты, отзывы и др...
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className="btns">
        <Link to="/qwiz3" className="link">
          <Button className="prev">
            <img src={Prev} alt="" /> Назад
          </Button>
        </Link>
        <Link
          to="/qwiz5"
          className="link"
          onClick={() => {
            sessionStorage.setItem("functionality", creativity);
          }}
        >
          <Button className="next">
            Продолжить <img src={Next} alt="" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Qwiz4Section;
