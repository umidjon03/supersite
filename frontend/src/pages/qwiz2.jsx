import React from "react";

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

import QwizTop from "../components/QwizTop/QwizTop";
import Qwiz2Section from "../sections/Qwiz2Section/Qwiz2Section";

function Qwiz2() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <QwizTop step="2" num="6" title="Наличие фир. стиля / логотипа" />
      <Qwiz2Section />
    </div>
  );
}

export default Qwiz2;
