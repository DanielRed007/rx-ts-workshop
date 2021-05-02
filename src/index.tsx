import React from "react";
import ReactDOM from "react-dom";
import { rootReducer } from "./store/root-reducer";
import { reducers } from "./reducers/index";
import { createStore, compose } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
