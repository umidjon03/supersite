import React from "react";

import AuditHero from "../sections/AuditHero/AuditHero";
import Proccess from "../sections/Proccess/Proccess";
import Offers from "../sections/Offers/Offers";
import Travel from "../sections/Travel/Travel";

function Audit() {
  return (
    <div>
      <AuditHero />
      <Proccess />
      <Offers />
      <Travel />
    </div>
  );
}

export default Audit;
