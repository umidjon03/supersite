import React from "react";

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

import QwizTop from "../components/QwizTop/QwizTop";
import Qwiz5Section from "../sections/Qwiz5Section/Qwiz5Section";

function Qwiz5() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <QwizTop step="5" num="6" title="Есть ли у вас существующий сайт?" />
      <Qwiz5Section />
    </div>
  );
}

export default Qwiz5;
