import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";

import Img1 from "../../assets/images/image 71qwiz3-1.png";
import Img2 from "../../assets/images/image 71qwiz3-2.png";
import Img3 from "../../assets/images/image 71qwiz3-3.png";
import Prev from "../../assets/images/Vector 15 (Stroke)left.png";
import Next from "../../assets/images/Vector 15 (Stroke)right.png";

import "./qwiz3-section.scss";

function Qwiz3Section() {
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
              name="creativity"
              id="style"
              onChange={() => {
                setCreativity("simple");
              }}
            />
            <label htmlFor="style">
              Сдержанно <br />и консервативно
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
              name="creativity"
              id="logo"
              onChange={() => {
                setCreativity("medium");
              }}
            />
            <label htmlFor="logo">
              Умеренный креатив, захватывающий внимание
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
              name="creativity"
              id="dont"
              onChange={() => {
                setCreativity("excelent");
              }}
            />
            <label htmlFor="dont">Смело, дерзко и ярко.</label>
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
          to="/qwiz4"
          className="link"
          onClick={() => {
            sessionStorage.setItem("creativity", creativity);
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

export default Qwiz3Section;
