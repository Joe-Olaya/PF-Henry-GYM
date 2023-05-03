import React from "react";
import "../../container/Services/Services.css";

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
const Services = () => (

<section className="hero-section" id="services">
  <div className="card1-grid">
    <a className="card1" href="/exercises">
      <div className="card__background1"></div>
      <div className="card1__content">
        <p className="card1__category">Category</p>
        <h3 className="card1__heading">Exercises</h3>
      </div>
    </a>
    <a className="card1" href="/routines">
      <div className="card__background2"></div>
      <div className="card1__content">
        <p className="card1__category">Category</p>
        <h3 className="card1__heading">Routines</h3>
      </div>
    </a>
    <a className="card1" href="/store">
      <div className="card__background3"></div>
      <div className="card1__content">
        <p className="card1__category">Category</p>
        <h3 className="card1__heading">Store</h3>
      </div>
    </a>
    <a className="card1" href="#contact">
      <div className="card__background4"></div>
      <div className="card1__content">
        <p className="card1__category">Category</p>
        <h3 className="card1__heading">Support</h3>
      </div>
    </a>
  </div>
</section>
);

export default Services;

