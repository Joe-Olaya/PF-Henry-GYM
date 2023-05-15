import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./redux/store";

// require('dotenv').config()
// const {AUTH0_DOMAIN, AUTH0_CLIENT_ID} = process.env
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-1t1g141oy75zye5l.us.auth0.com"
  clientId="KCpElZ7gAt6cYaJf7012G9DPzIRslNYY"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  > 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
