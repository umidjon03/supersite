import React from "react";

import { MarketingHero } from "../sections";
import HowWeWork from "../sections/HowWeWork/HowWeWork";
import MarketingService from "../sections/MarketingService/Services";

function Marketing() {
  return (
    <>
      <MarketingHero />
      <HowWeWork />
      <MarketingService />
    </>
  );
}

export default Marketing;
