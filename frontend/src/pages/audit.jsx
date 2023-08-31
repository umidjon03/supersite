import React from "react";

import AuditHero from "../sections/AuditHero/AuditHero";
import Proccess from "../sections/Proccess/Proccess";
import Offers from "../sections/Offers/Offers";

function Audit() {
  return (
    <div>
      <AuditHero />
      <Proccess />
      <Offers />
    </div>
  );
}

export default Audit;
