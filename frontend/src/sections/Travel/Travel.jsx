import React from "react";

import TravelBag from "../../assets/images/pngfuel 2.png";
import Rocket from "../../assets/images/iconrocket.png";
import { Button } from "../../components";

import "./travel.scss";

function Travel() {
  return (
    <div className="travel">
      <div className="travel-img">
        <img src={TravelBag} alt="" />
      </div>
      <div className="travel-info">
        {/* <img src={Rocket} alt="" className="rocket" /> */}
        <h2 className="info-title">Готовы к взлету?</h2>
        <p className="info-txt">
          Раскажите о проекте вкратце и другие слова оффера
        </p>
        <Button className="travel-button">Начать</Button>
      </div>
    </div>
  );
}

export default Travel;
