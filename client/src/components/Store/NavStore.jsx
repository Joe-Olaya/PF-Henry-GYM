import React, { useState, useEffect } from "react";
import images from "../../constants/images";
import "./NavStore.css";
import SearchStore from "../SearchStore/SearchStore";

const Navbar = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [actualCart, setActualCart] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [cartItemCount, setCartItemCount] = useState(actualCart.length);
  
  useEffect(() => {
    setCartItemCount(actualCart.length);
  }, [actualCart]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartMenu = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
  };

  const ids=[];
  const repetidos = {};
  let totalPrice = 0
  const filteredCart = actualCart.filter((e)=>{
    const id = e.product.id;
    totalPrice = totalPrice + e.product.price
    ids.push(id);
    if (!repetidos[id]) {
      repetidos[id] = 1;
      return true;
    } else {
      repetidos[id]++;
      return false;
    }
  })

  const handleDeleteItem = (id) => {
    const itemDeletedCart = actualCart.filter(e => e.product.id !== id)
    localStorage.setItem('carrito', JSON.stringify(itemDeletedCart));
    setActualCart(itemDeletedCart);
    console.log('deleted');
  }

  return (
    <nav className="app__navbarstore">
      <div className="app__navbarstore-logo">
        <a href="/">
          <img src={images.logoy} alt="app__logo" />
        </a>
      </div>
      <SearchStore />
      <div className="app__navbarstore-login">
        <a href="/home" className="navstore_font">
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
          <span className="cartStoreNumber">{cartItemCount}</span>
        </button>
        {isCartMenuOpen && (
          <div className="cartMenuContainer">
            <ul className="cartMenu">
              {actualCart.length ? (
                <> <button className="cartCloseBtn" onClick={toggleCartMenu} >Hide</button>
                {filteredCart.map((e, index) => (
                  <React.Fragment key={index}>
                    
                    <li><button onClick={() => handleDeleteItem(e.product.id)}>❌</button>{e.product.name} x {repetidos[e.product.id]} - ${(e.product.price)*repetidos[e.product.id]}🛒</li>
                  </React.Fragment>
                ))}
                <button className="cartPayAllButton">Buy: usd {totalPrice}</button>
                </>) : (
                  <li className="cart_TextNoItems">
                  No items here! Check the<a href="/store">products</a>at the
                  store
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
