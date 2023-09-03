import React from "react";

import { Container } from "../components";

import { MarketingHero } from "../sections";
import HowWeWork from "../sections/HowWeWork/HowWeWork";
import MarketingService from "../sections/MarketingService/Services";

function Marketing() {
  return (
    <>
      <MarketingHero />
      <Container>
        <HowWeWork />
        <MarketingService />
      </Container>
    </>
  );
}

export default Marketing;
