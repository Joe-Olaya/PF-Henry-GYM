import React from "react";
import Home from './views/Home/Home'
import { Services, Header, Footer } from "./container";
import { Navbar, Contact  } from "./components";
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
    <Route path="/home" element={<Home/>} />
  </Routes>
);

export default App;
