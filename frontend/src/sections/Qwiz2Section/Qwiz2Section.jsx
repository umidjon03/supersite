import React, { useState } from "react";
import { Link } from "react-router-dom";

import Img1 from "../../assets/images/image 71qwiz2-1.png";
import Img2 from "../../assets/images/img_blockqwiz2-2.png";
import Img3 from "../../assets/images/image 71qwiz2-3.png";
import Prev from "../../assets/images/Vector 15 (Stroke)left.png";
import Next from "../../assets/images/Vector 15 (Stroke)right.png";

import { Button } from "../../components";

import "./qwiz2-section.scss";

function Qwiz2Section() {
  const [logo, setLogo] = useState("logo");
  return (
    <div className="qwiz2-section">
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={Img1} alt="" />
          </div>
          <div className="input">
            <input
              type="radio"
              name="logo"
              id="style"
              onChange={() => {
                setLogo("style");
              }}
            />
            <label htmlFor="style">Есть фир.стиль</label>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Img2} alt="" />
          </div>
          <div className="input">
            <input
              type="radio"
              name="logo"
              id="logo"
              onChange={() => {
                setLogo("logo");
              }}
            />
            <label htmlFor="logo">Есть логотип</label>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Img3} alt="" />
          </div>
          <div className="input">
            <input
              type="radio"
              name="logo"
              id="dont"
              onChange={() => {
                setLogo("nothing");
              }}
            />
            <label htmlFor="dont">Нет ничего</label>
          </div>
        </div>
      </div>
      <div className="btns">
        <Link to="/qwiz1" className="link">
          <Button className="prev">
            <img src={Prev} alt="" /> Назад
          </Button>
        </Link>
        <Link
          to="/qwiz3"
          className="link"
          onClick={() => {
            sessionStorage.setItem("logo", logo);
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

export default Qwiz2Section;
