import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/landing">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
