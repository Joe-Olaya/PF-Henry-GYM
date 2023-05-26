import React, {useState, useEffect} from "react";
import images from "../../constants/images";
import { useLocation } from "react-router-dom";
import "./NavSec.css";

const Navbar = () => {
  const [userType, setUserType] = useState('')
  const user = JSON.parse(localStorage.getItem("userData"))
  useEffect(() => {
    setUserType(user.userType)
  }, [user])

  return (
    <nav className="app__navbarsec">
      <div className="app__navbarsec-logo">
        <a href="/">
          <img src={images.logoy} alt="app__logo" />
        </a>
      </div>
      <div className="app__navbarsec-login">
        {userType == "Superadmin" && (
          <a href="/dashboard" className="p__opensans">
            Dashboard
          </a>
        )}
        {location.pathname !== "/home" && (
          <a href="/home" className="p__opensans">
            Home
          </a>
        )}
        {location.pathname !== "/store" && (
          <a href="/store" className="p__opensans">
            Store
          </a>
        )}
        {location.pathname !== "/exercises" && (
          <a href="/exercises" className="p__opensans">
            Exercises
          </a>
        )}
        {location.pathname !== "/rutines" && (
          <a href="/rutines" className="p__opensans">
            Routines
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
