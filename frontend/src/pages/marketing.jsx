import React from "react";

import Marketing_Hero from "../sections/Marketing_Hero/Marketing_Hero";
import HowWeWork from "../sections/HowWeWork/HowWeWork";
import { Container } from "../components";

function Marketing() {
  return (
    <div>
      <Container>
        <Marketing_Hero />
      </Container>
      <HowWeWork />
    </div>
  );
}

export default Marketing;
