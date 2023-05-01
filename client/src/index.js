import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();