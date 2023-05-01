import React from "react";
import {Home} from "./views/Home/Home";
import {Error} from './views/Error/Error'
import { Services, Header, Footer } from "./container";
import { Navbar, Contact } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Header />
              <Services />
              <Footer />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/Register" element={<div className=" flex w-full h-screen"><div className=" w-full flex items-center lg:w-1/2" ><Registration/></div><div className="hidden bg-neutral-900 lg:flex w-1/2 h-full items-center justify-center">
  <img src="..assets/imgintro.png" alt="" className="object-cover w-full h-full" />
</div></div>} />
      </Routes>
    </div>
  );
};

export default App;
