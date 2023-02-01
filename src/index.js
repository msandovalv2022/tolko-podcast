import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/scss/main.scss";
import "@madzadev/audio-player/dist/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

reportWebVitals();
