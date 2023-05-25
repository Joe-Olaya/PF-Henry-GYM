import React from "react";
import "../../container/Services/Services.css";

const Services = () => (
  <section className="hero-section" id="services">
    <div className="card1-grid">
      <a className="card1">
        <div className="card__background1"></div>
        <div className="card1__content">
          <p className="card1__category">Category</p>
          <h2 className="card1__heading">Exercises</h2>
          {/* <h3 className="cardDescription">
            Explore our gym exercise section for a variety of effective workouts
            tailored to help you reach your fitness goals.
          </h3> */}
        </div>
      </a>
      <a className="card1">
        <div className="card__background2"></div>
        <div className="card1__content">
          <p className="card1__category">Category</p>
          <h2 className="card1__heading">Routines</h2>
          <div className="backgroundBlack">
            {/* <h3 className="cardDescription">
              Discover our workout routines section, featuring a variety of
              effective exercise plans tailored to help you achieve your fitness
              goals
            </h3> */}
          </div>
        </div>
      </a>
      <a className="card1">
        <div className="card__background3"></div>
        <div className="card1__content">
          <p className="card1__category">Category</p>
          <h2 className="card1__heading">Store</h2>
          {/* <h3 className="cardDescription">
            Power up your workouts with our gym supplements store, offering
            premium products to boost performance and maximize results.
          </h3> */}
        </div>
      </a>
      <a className="card1">
        <div className="card__background4"></div>
        <div className="card1__content">
          <p className="card1__category">Category</p>
          <h2 className="card1__heading">Support</h2>
          {/* <h3 className="cardDescription">
            Expert support for workouts and inquiries available in our help
            section with trainers.
          </h3> */}
        </div>
      </a>
    </div>
  </section>
);

export default Services;
