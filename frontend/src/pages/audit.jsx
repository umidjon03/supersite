import React from "react";

import AuditHero from "../sections/AuditHero/AuditHero";
import Process from "../sections/Process/Process";
import Offers from "../sections/Offers/Offers";
import Travel from "../sections/Travel/Travel";

function Audit() {
  return (
    <div>
      <AuditHero />
      <Process />
      <Offers />
      <Travel />
    </div>
  );
}

export default Audit;
