import React from "react";

import {
  Services,
  Header,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Services />
  </div>
);

export default App;
