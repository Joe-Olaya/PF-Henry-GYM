import React from "react";
import {useState} from 'react'
import { Home } from "./views/Home/Home";
import { Error } from "./views/Error/Error";
import { Services, Header, Footer } from "./container";
import { Navbar, Contact } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";
import images from "../src/assets/card4.png";
import Pagination from "./components/Pagination/Pagination";
import Exercises from "./components/Exercises/Exercises";
import NavSec from "../src/components/NavSec/NavSec";
import Login from "./components/Login/Login";
import Store from "./components/Store/Store";
import FormProducts from "./components/FormProducts/FormProducts";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./components/Dashbard/Sidebar";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Nav from "./components/Dashbard/Nav";
import HomeDash from "./components/Dashbard/HomeDash";


useState




const App = () => {
  const location = useLocation();
  const [toggle, setToggle]=useState(true)
  const Toggle =() => {
    setToggle(!toggle)
  }
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              
              <Navbar />
              <Header />
              <Services />
              <Footer />
              
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/home" element={<div>
            <NavSec />
            <Home />
          </div>} />
          <Route path="/Dashboard" element={<><div className='container-fluid bg-secondary min-vh-100'>
          <div className='row'>
          {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
          <Sidebar />
          </div>}
        
          {toggle &&<div className='col-2 col-md-2'></div>}
        <div className='col-9 col-md-10'>
          <HomeDash Toggle={Toggle}/>
        </div>
        
        </div>  
          </div></>} />
        <Route
          path="/exercises"
          element={
            <div>
              <NavSec />
              <Exercises />
            </div>
          }
        />
        <Route exact path="/formProducts" element={<FormProducts/>}/>
        <Route path="/*" element={<Error />} />
        <Route path="/create" element={<FormProducts/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route
          path="/register"
          element={
            <div className=" flex w-full h-screen">
              <div className=" w-full flex items-center lg:w-1/2">
                <Registration />
              </div>
              <div className="hidden bg-neutral-900 lg:flex w-1/2 h-full items-center justify-center">
                <img
                  src={images}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
