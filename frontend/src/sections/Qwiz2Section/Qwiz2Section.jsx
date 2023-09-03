import React from "react";

import Img1 from "../../assets/images/image 71qwiz2-1.png";
import Img2 from "../../assets/images/img_blockqwiz2-2.png";
import Img3 from "../../assets/images/image 71qwiz2-3.png";

import "./qwiz2-section.scss";

function Qwiz2Section() {
  return (
    <div className="qwiz2-section">
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={Img1} alt="" />
          </div>
          <div className="input">
            <input type="radio" name="logo" id="style" />
            <label htmlFor="style">Есть фир.стиль</label>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Img2} alt="" />
          </div>
          <div className="input">
            <input type="radio" name="logo" id="logo" />
            <label htmlFor="logo">Есть логотип</label>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Img3} alt="" />
          </div>
          <div className="input">
            <input type="radio" name="logo" id="dont" />
            <label htmlFor="dont">Нет ничего</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qwiz2Section;
