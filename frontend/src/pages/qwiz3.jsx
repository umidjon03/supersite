import React from "react";

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

import QwizTop from "../components/QwizTop/QwizTop";
import Qwiz3Section from "../sections/Qwiz3Section/Qwiz3Section";

function Qwiz3() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <QwizTop step="3" num="6" title="Уровень “Креатива”" />
      <Qwiz3Section />
    </div>
  );
}

export default Qwiz3;
