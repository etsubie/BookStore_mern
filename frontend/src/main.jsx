import React from "react";
import ReactDOM from "react-dom/client";
import {thunk} from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
