import { BrowserRouter,useLocation } from "react-router-dom";
import { React, useEffect } from "react";
import {  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import axios from "axios"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.withCredentials = true;

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

root.render(
  <BrowserRouter>
   <ScrollToTop />
    <App />
  </BrowserRouter>
);
