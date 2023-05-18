import React, { useState } from "react";
import images from "../../constants/images";
import "./NavStore.css";
import SearchStore from "../SearchStore/SearchStore";

const Navbar = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartMenu = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
  };

  return (
    <nav className="app__navbarstore">
      <div className="app__navbarstore-logo">
        <a href="/">
          <img src={images.logoy} alt="app__logo" />
        </a>
      </div>
      <SearchStore />
      <div className="app__navbarstore-login">
        <a href="/store" className="navstore_font">
          Home
        </a>
        <a
          className={`navstore_font ${isMenuOpen ? "active" : ""}`}
          role="button"
          onClick={toggleMenu}
        >
          Categories
        </a>
        {isMenuOpen && (
          <ul className="CategoriesList">
            <li>
              <a href="/category1">Protein</a>
            </li>
            <li>
              <a href="/category2">Pre-Workout</a>
            </li>
            <li>
              <a href="/category3">Performance</a>
            </li>
            <li>
              <a href="/category4">Weight Management</a>
            </li>
            <li>
              <a href="/category5">Vitamins & Health</a>
            </li>
          </ul>
        )}
        <a href="#products" className="navstore_font">
          Products
        </a>
        <button className="cartStoreButton" onClick={toggleCartMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="50"
            viewBox="0 0 24 24"
          >
            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </svg>
        </button>
        {isCartMenuOpen && (
          <ul className="CartMenu">
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
