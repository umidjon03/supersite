import React from "react";

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

import QwizTop from "../components/QwizTop/QwizTop";
import Qwiz4Section from "../sections/Qwiz4Section/Qwiz4Section";

function Qwiz4() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <QwizTop step="4" num="6" title="Уровень функциональности" />
      <Qwiz4Section />
    </div>
  );
}

export default Qwiz4;
