import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet-async"; // Import Helmet

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
