import React from "react";

import { images } from "../../constants";
import "./Services.css";

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
const Services = () => (

<section className="hero-section" id="services">
  <div className="card-grid">
    <a className="card" href="#">
      <div className="card__background1"></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Exercises</h3>
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background2"></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Routines</h3>
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background3"></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Store</h3>
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background4"></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Support</h3>
      </div>
    </a>
  </div>
</section>
);

export default Services;

