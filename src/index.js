import React from "react";
import ReactDoM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import './App.css';
ReactDoM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);