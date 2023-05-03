import React from "react";
import images from "../../constants/images";
import "./NavSec.css";

const Navbar = () => {
  return (
    <nav className="app__navbarsec">
      <div className="app__navbarsec-logo">
        <a href="/">
        <img src={images.logoy} alt="app__logo" />
        </a>
      </div>
      <div className="app__navbarsec-login">
        <a href="/home" className="p__opensans">
          Home
        </a>
        <a href="/store" className="p__opensans">
          Store
        </a>
        <a href="/exercises" className="p__opensans">
          Exercises
        </a>
        <a href="/rutines" className="p__opensans">
          Routines
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
