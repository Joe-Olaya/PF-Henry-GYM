import React from "react";

import { Services, Header, Footer } from "./container";
import { Navbar, Contact,  } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => (
  <Routes>
    <Route
      exact path="/"
      element={
        <div>
          <Navbar />
          <Header />
          <Services />
          <Footer />
        </div>
      }
    />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
);

export default App;
