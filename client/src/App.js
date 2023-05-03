import React from "react";
import {Home} from "./views/Home/Home";
import {Error} from './views/Error/Error'
import { Services, Header, Footer } from "./container";
import { Navbar, Contact } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";
import  images  from "../src/assets/card4.png";
import Pagination from "./components/Pagination/Pagination";
import Exercises from "./components/Exercises/Exercises";
import Login from "./components/Login/Login";
// import CardsContainer from "./components/CardsContainer/CardsContainer";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/register" && <Navbar />}
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
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/exercises" element={<Exercises/>}/>
        <Route path="/*" element={<Error />} />
        <Route path="/register" element={<div className=" flex w-full h-screen"><div className=" w-full flex items-center lg:w-1/2" ><Registration/></div><div className="hidden bg-neutral-900 lg:flex w-1/2 h-full items-center justify-center">
        <img src={images} alt="" className="object-cover w-full h-full" />
        </div></div>} />
   
      </Routes>
    </div>
  );
};

export default App;
