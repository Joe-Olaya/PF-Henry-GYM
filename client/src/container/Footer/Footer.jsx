import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () =>
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <a href="https://www.linkedin.com">
          <img src={images.linkedin} alt="linkedin" />
        </a>
        <p className="p__opensans">Linkedin</p>
        <p className="p__opensans">Alejandro Martinez</p>
        <p className="p__opensans">Joaquin Bolzon</p>
        <p className="p__opensans">Richard Zamora</p>
        <p className="p__opensans">Abril Daine</p>
      </div>

      <div className="app__footer-links_logo">
        <a href="https://www.soyhenry.com">
          <img src={images.logohenry} alt="henry" />
        </a>
        <p className="p__opensans">Proyecto Grupal.</p>
      </div>

      <div className="app__footer-links_work">
        <img src={images.mail} alt="linkedin" />
        <p className="p__opensans">Correo Electrónico:</p>
        <p className="p__opensansfooter">alejandrofabian00@hotmail.com</p>
        <p className="p__opensansfooter">joaco.bolzon3@gmail.com</p>
        <p className="p__opensansfooter">richardzamora1952@gmail.com</p>
        <p className="p__opensansfooter">abrudaine@gmail.com</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Henry Poyecto Final.</p>
    </div>
  </div>;

export default Footer;
