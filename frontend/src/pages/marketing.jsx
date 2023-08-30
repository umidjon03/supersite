import React from "react";

import Marketing_Hero from "../sections/Marketing_Hero/Marketing_Hero";
import HowWeWork from "../sections/HowWeWork/HowWeWork";
import MarketingService from "../sections/MarketingService/Services";
import { Container } from "../components";

function Marketing() {
  return (
    <div>
      <Container>
        <Marketing_Hero />
      </Container>
      <HowWeWork />
      <Container>
        <MarketingService />
      </Container>
    </div>
  );
}

export default Marketing;
