import React from "react";

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

import QwizTop from "../components/QwizTop/QwizTop";
import Qwiz6Section from "../sections/Qwiz6Section/Qwiz6Section";

function Qwiz6() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <QwizTop step="6" num="6" title="Завершение" />
      <Qwiz6Section />
    </div>
  );
}

export default Qwiz6;
