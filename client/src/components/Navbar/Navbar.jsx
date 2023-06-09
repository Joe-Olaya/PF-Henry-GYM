import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import images from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getUserDB = async (user) => {
  let navigate = useNavigate();
  try {
    let userDB = await axios.post("/login", { email: user.email });
    let userData = userDB.data[0];
    localStorage.setItem("userData", JSON.stringify(userData));
    if (!userData.name) {
      navigate("/register");
    }
  } catch (error) {}
};

const Navbar = () => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    logout({ returnTo: window.location.origin });
  };


getUserDB(user)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.logoy} alt="app__logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {/* <li className="p__opensans">
          <a href="/formProducts">Supplies</a>
        </li> */}
        {/* {( userType == "Superadmin") && (
          <li className="p__opensans">
            <a href="/dashboard">Dashboard</a>
          </li>
        )} */}
        {isAuthenticated && (
          <li className="p__opensans">
            <a href="/home">Home</a>
          </li>
        )}
        <li className="p__opensans">
          <a href="#services">Services</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      {isAuthenticated ? (
        <button className="p__opensans" onClick={handleLogout}>
          Log Out
        </button>
        ) : (
          <div className="app__navbar-login">
            <button
              className="p__opensans LogRegis"
              onClick={() => loginWithRedirect()}
            >
              Log In / Registration
            </button>
            <div />
          </div>
        )}
        {isAuthenticated ? (
          <div>
            <img src={user.picture} alt={user.name} className="userProfile" />
          </div>
        ) : null}
        {isAuthenticated ? (
          <div>
            <h2 className="userName">{user.name}</h2>
            <p className="userEmail">{user.email}</p>
          </div>
        ) : null}
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {isAuthenticated ? (
                <div>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="userProfileSmall"
                  />
                </div>
              ) : null}
              {isAuthenticated ? (
                <div>
                  <h2 className="userNameSmall">{user.name}</h2>
                  <p className="userEmailSmall">{user.email}</p>
                </div>
              ) : null}
              {isAuthenticated && (
                <li className="p__opensans">
                  <a href="/home">Home</a>
                </li>
              )}
              <li>
                <a href="#services" onClick={() => setToggleMenu(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
