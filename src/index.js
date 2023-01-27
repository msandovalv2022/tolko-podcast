import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './assets/config/i18next_config' //Se invoca la configuración de i18next que realizamos

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

reportWebVitals();
