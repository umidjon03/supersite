import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components";

import Prev from "../../assets/images/Vector 15 (Stroke)left.png";
import Next from "../../assets/images/Vector 15 (Stroke)right.png";

import "./qwiz5-section.scss";

function Qwiz5Section() {
  const [link, setLink] = useState(true);
  const [linkName, setLinkName] = useState("");
  return (
    <div className="qwiz2-section">
      <div className={`link ${link ? "" : "dnone"}`}>
        <input
          type="text"
          placeholder="Ccылка на сайт"
          value={linkName}
          onChange={(e) => {
            setLinkName(e.target.value);
          }}
        />
      </div>
      <div className="radio">
        <div className="input">
          <input
            type="radio"
            name="link"
            id="yes"
            onChange={() => {
              setLink(true);
            }}
          />
          <label htmlFor="yes">Есть</label>
        </div>
        <div className="input">
          <input
            type="radio"
            name="link"
            id="no"
            onChange={() => {
              setLink(false);
              setLinkName("");
            }}
          />
          <label htmlFor="no">Нет</label>
        </div>
      </div>
      <div className="btns">
        <Link to="/qwiz4" className="link">
          <Button className="prev">
            <img src={Prev} alt="" /> Назад
          </Button>
        </Link>
        <Link
          to="/qwiz6"
          className="link"
          onClick={() => {
            sessionStorage.setItem("link", linkName);
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

export default Qwiz5Section;
