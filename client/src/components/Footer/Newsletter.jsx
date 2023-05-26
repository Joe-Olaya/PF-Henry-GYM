import React from "react";
import axios from "axios";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const handleSubmitMail = async (mail) => {
    try {
      const sendMail = await axios.post("/subscription", {
        user_email: mail,
      });
      alert("Thanks for subscribing to our newsletter!");
    } catch (error) {
      alert("Error while trying to subscribe");
    }
  };
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Supplies & Training" />
        <h1 className="headtext__cormorant">Contact with us</h1>
        <p className="p__opensans">
          subscribe with your email for more information
        </p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          id="emailInput"
        />
        <button
          type="button"
          className="custom__button"
          onClick={() =>
            handleSubmitMail(document.getElementById("emailInput").value)
          }
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};


export default Newsletter;
