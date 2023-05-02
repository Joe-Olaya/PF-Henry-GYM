
import React from "react";
import { Link } from 'react-router-dom';
import { images } from "../../constants";
import "./Header.css";
const Header = () => (
  <div className="app__header app__wrapper flex__center section__padding" id="home">
    <div className="app__wrapper_info">
      <div className="app_titleimg">
      <img src={images.textintro} className="header_img"/>
      </div>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        At Supplies & Training, we believe that health and wellbeing are the foundation of a fulfilling and happy life. Join us and start transforming your body and mind today.{" "}
      </p>
      <Link to="/register">
      <button type="button" className="custom__button">
        Register Here!
      </button>
      </Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.imgintro} alt="header_img" />
    </div>
  </div>
);

export default Header;
