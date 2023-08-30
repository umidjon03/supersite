import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { MenuProvider } from "./context/menu.context";

import "./styles/general.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <App />
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);
