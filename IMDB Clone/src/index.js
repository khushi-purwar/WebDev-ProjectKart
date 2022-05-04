import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

import "./static/sass/styles.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
