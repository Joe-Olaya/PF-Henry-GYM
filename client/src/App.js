import React from "react";
import {Home} from "./views/Home/Home";
import {Error} from './views/Error/Error'
import { Services, Header, Footer } from "./container";
import { Navbar, Contact } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

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
      </Routes>
    </div>
  );
};

export default App;
