import React from "react";

import { Services, Header } from "./container";
import { Navbar, Contact } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";


const App = () => (
  <Routes>
    <Route
      exact path="/"
      element={
        <div>
          <Navbar />
          <Header />
          <Services />
        </div>
      }
    />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/Register" element={<div className=" flex w-full h-screen"><div className=" w-full flex items-center lg:w-1/2" ><Registration/></div><div className="hidden bg-neutral-900 lg:flex w-1/2 h-full items-center justify-center">
  <img src="..assets/imgintro.png" alt="" className="object-cover w-full h-full" />
</div></div>} />
  </Routes>
);

export default App;
