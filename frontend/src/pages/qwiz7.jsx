import React from 'react'

import QwizBg from "../assets/images/Vectorqwiz-bg.png";

import Qwiz7Section from '../sections/Qwiz7Section/Qwiz7Section';

function Qwiz7() {
  return (
    <div className="qwiz">
      <img src={QwizBg} alt="" className="qwiz-bg" />
      <Qwiz7Section />
    </div>
  )
}

export default Qwiz7