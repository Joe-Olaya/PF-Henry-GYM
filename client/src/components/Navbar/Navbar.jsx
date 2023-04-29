import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoy} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        {/* <li className="p__opensans">
          <a href="#home">Home</a>
        </li> */}
        <li className="p__opensans">
          <a href="#services">Services</a>
        </li>
        {/* <li className="p__opensans">
          <a href="#blog">Blog</a>
        </li> */}
        {/* <li className="p__opensans">
          <a href="#gallery">Store</a>
        </li> */}
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In
        </a>
        <div />
        <a href="/" className="p__opensans">
          Registration
        </a>
      </div>
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
              <li>
                {/* <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a> */}
              </li>
              <li>
                <a href="#services" onClick={() => setToggleMenu(false)}>
                  Services
                </a>
              </li>
              {/* <li>
                <a href="#blog" onClick={() => setToggleMenu(false)}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setToggleMenu(false)}>
                  Store
                </a>
              </li> */}
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
