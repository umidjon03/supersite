import React from "react";

export const MenuContext = React.createContext(null);

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
