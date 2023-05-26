import React from "react";
import { useState } from "react";
import { Home } from "./views/Home/Home";
import { Error } from "./views/Error/Error";
import { Services, Header, Footer } from "./container";
import { Navbar, Contact, ProductDetail } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";
import images from "../src/assets/card4.png";
import Exercises from "./components/Exercises/Exercises";
import NavSec from "../src/components/NavSec/NavSec";
import NavStore from "../src/components/Store/NavStore";
import Login from "./components/Login/Login";
import Store from "./components/Store/Store";
import FormProducts from "./components/FormProducts/FormProducts";
import FormEditProducts from "./components/FormProducts/FormEditProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./components/Dashbard/Dashboard";
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/"

const App = () => {

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

        <Route
          path="/home"
          element={
            <div>
              <NavSec />
              <Home />
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/exercises"
          element={
            <div>
              <NavSec />
              <Exercises />
            </div>
          }
        />
         <Route exact path="/formEditProducts" element={<FormEditProducts />} />
        <Route exact path="/formProducts" element={<FormProducts />} />
        <Route path="/*" element={<Error />} />
        <Route path="/create" element={<FormProducts />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/store"
          element={
            <div>
              <NavStore />
              <Store />
            </div>
          }
        />
        <Route
          exact
          path="/products/:productId"
          element={
            <div>
              <NavStore />
              <ProductDetail />
            </div>
          }
        />
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
