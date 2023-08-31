import React from "react";

import Portfolio_Top from "../sections/Portfolio_Top/Portfolio_Top";
import Portfolio_Project from "../sections/Portfolio_Project/Portfolio_Project";
import { Container } from "../components";

function Portfolio() {
  return (
    <div>
      <Container>
        <Portfolio_Top />
      </Container>
      <Portfolio_Project
        title="lall"
        order="1"
        type="internet magzin"
        img=""
        txt=""
      />
    </div>
  );
}

export default Portfolio;
