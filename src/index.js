import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@madzadev/audio-player/dist/index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

reportWebVitals();
