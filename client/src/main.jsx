import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "@/assets/styles/index.scss";
import RootStore from "./store/RootStore";

import App from "./App";

const store = new RootStore();

export const Context = createContext({
  store,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>
);
