import React from "react";
import { useState, useEffect } from "react";
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
import Protectlogin from "./components/ProtectRoutes/Protectlogin";
import FormEditProducts from "./components/FormProducts/FormEditProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./components/Dashbard/Dashboard";
import axios from 'axios';
axios.defaults.baseURL = "https://pf-henry-gym-production-135f.up.railway.app";

const App = () => {
  const [userType, setUserType] = useState("");
  const user = JSON.parse(localStorage.getItem("userData")) || '';

  if (user.userType) {
    useEffect(() => {
      setUserType(user.userType);
    }, [user]);
  }

  return (
    <div>
      <Routes>
        {userType == "Superadmin" && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
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
        <Route element={<Protectlogin />}>
          <Route
            path="/exercises"
            element={
              <div>
                <NavSec />
                <Exercises />
              </div>
            }
          />
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
            path="/formEditProducts"
            element={<FormEditProducts />}
          />
          <Route exact path="/formProducts" element={<FormProducts />} />
          <Route path="/create" element={<FormProducts />} />
        </Route>
        <Route path="/*" element={<Error />} />
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
