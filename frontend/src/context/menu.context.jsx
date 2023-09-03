import React from "react";
import { useLocation } from "react-router-dom";

export const MenuContext = React.createContext(null);

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
