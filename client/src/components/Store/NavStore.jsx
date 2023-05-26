import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import "./NavStore.css";
import SearchStore from "../SearchStore/SearchStore";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const [userType, setUserType] = useState('')
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [actualCart, setActualCart] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [cartItemCount, setCartItemCount] = useState(actualCart.length);
  const products = useSelector((state) => state.products);
  const user = JSON.parse(localStorage.getItem("userData"))

  useEffect(() => {
    setCartItemCount(actualCart.length);
  }, [actualCart]);

  useEffect(() => {
    setUserType(user.userType)
  }, [user]);

  const toggleCartMenu = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
  };

  const ids = [];
  const repetidos = {};
  let totalPrice = 0;
  const filteredCart = actualCart.filter((e) => {
    const id = e.product.id;
    totalPrice = totalPrice + e.product.price;
    ids.push(id);
    if (!repetidos[id]) {
      repetidos[id] = 1;
      return true;
    } else {
      repetidos[id]++;
      return false;
    }
  });

  const handleDeleteItem = (id) => {
    const itemDeletedCart = actualCart.filter((e) => e.product.id !== id);
    localStorage.setItem("carrito", JSON.stringify(itemDeletedCart));
    setActualCart(itemDeletedCart);
    console.log("deleted");
  };

  initMercadoPago("TEST-1a4e511b-8a78-485a-86c8-bc08044345a5");
  const [id, setId] = useState("");
  const [isPaymentReady, setIsPaymentReady] = useState(false);
  
  
  const handlePostGetId = async () => {
    let product = {
      items: [
        {
          title: "Total a pagar:",
          unit_price: totalPrice,
          quantity: 1,
          currency_id: "ARS",
        },
      ],
    };
    const peticion = await axios.post("/mpcompra", product);
    setId(peticion.data);
    setIsPaymentReady(true);
  };
  
  
  const navigate = useNavigate();
  
  useEffect(() => {
    var currentUrl = window.location.href;
    var urlObj = new URL(currentUrl);
    var status = urlObj.searchParams.get("status") || "";

    const handlePayStatus = async () => {
      const userId = JSON.parse(localStorage.getItem("userData"))
      const productsArray = filteredCart.map((e) => {
        return {
          product_id: e.product.id,
          units: repetidos[e.product.id]
        }
      })
      const data = {
        client_id: userId.id,
        product_list: productsArray
      }
      if (status === "approved") {
        const petition = await axios.post("/createSale", data);
      }
    }
    handlePayStatus()

    if (status === "approved") {
      localStorage.setItem("carrito", JSON.stringify([]));
      window.alert("Approved! Thanks for purchasing our products");
      navigate("/home");
    } else if (status === "rejected") {
      window.alert("Rejected, please try again");
      navigate("/store");
    }
  }, [navigate]);


  const customization = {
    texts: {
      action: "buy",
      valueProp: "none"
    },
    visual: {
      buttonBackground: "black",
      borderRadius: "10px",
    },
    checkout: {
      theme: {
        elementsColor: "#fdb813",
        headerColor: "#fdb813",
      },
    },
  };

  return (
    <nav className="app__navbarstore">
      <div className="app__navbarstore-logo">
        <a href="/">
          <img src={images.logoy} alt="app__logo" />
        </a>
      </div>
      <div className="app__navbarstore-login">
        {( userType == "Superadmin") && (
            <a href="/dashboard" className="navstore_font">Dashboard</a>
        )}
        <a href="/home" className="navstore_font">
          Home
        </a>
        <a href="/exercises" className="navstore_font">
          Exercises
        </a>
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
                <>
                  {" "}
                  <button className="cartCloseBtn" onClick={toggleCartMenu}>
                    Hide
                  </button>
                  {filteredCart.map((e, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <button onClick={() => handleDeleteItem(e.product.id)}>
                          ❌
                        </button>
                        {e.product.name} x {repetidos[e.product.id]} - u$d {""}
                        {e.product.price * repetidos[e.product.id]}🛒
                      </li>
                    </React.Fragment>
                  ))}
                  <button className="cartPayAllButton">
                    Total: u$d {totalPrice}
                  </button>
                  {isPaymentReady ? (
                    <button onClick={handlePostGetId}>
                      <Wallet
                        customization={customization}
                        initialization={{ preferenceId: id }}
                      />
                    </button>
                  ) : (
                    <button onClick={handlePostGetId}>Realizar Pago</button>
                  )}
                </>
              ) : (
                <li className="cart_TextNoItems">
                  No items here! Check the products at the store
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
