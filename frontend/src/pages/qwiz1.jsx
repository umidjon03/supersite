import React from "react";

import QwizTop from "../components/QwizTop/QwizTop";
import Qwiz1Section from "../sections/Qwiz1Section/Qwiz1Section";

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

function Qwiz1() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <QwizTop step="1" num="7" title="Тип сайта" />
      <Qwiz1Section />
    </div>
  );
}

export default Qwiz1;
