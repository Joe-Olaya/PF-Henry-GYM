import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Header.css";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(true);

      const cambiarEstado = () => {
        setTimeout(() =>
          setLoading(false), 2000);
      }
  return (
    <div
      className="app__header app__wrapper flex__center section__padding"
      id="home"
    >
      <div className="app__wrapper_info">
        <div className="app_titleimg">
          <img src={images.textintro} className="header_img" />
        </div>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          At Supplies & Training, we believe that health and wellbeing are the
          foundation of a fulfilling and happy life. Join us and start
          transforming your body and mind today.{" "}
        </p>
        <button className="custom__button" onClick={() => loginWithRedirect()}>
          Register Here!
        </button>
      </div>

      <div className="app__wrapper_img">
        {loading ? (
          <div className="div_loader">
          <Loading>{cambiarEstado()}</Loading>
          </div>
        ) : (
        <img src={images.imgintro} alt="header_img" />
        )}
      </div>
    </div>
  );
};

export default Header;
