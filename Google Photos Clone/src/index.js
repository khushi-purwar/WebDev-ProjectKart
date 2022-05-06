import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

import Provider from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
