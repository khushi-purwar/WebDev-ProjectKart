import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartState from './context/Cart/CartState'

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById("root")
);
