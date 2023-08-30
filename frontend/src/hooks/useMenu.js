import React from "react";

import { MenuContext } from "../context/menu.context";

export const useMenu = () => {
  return React.useContext(MenuContext);
};
