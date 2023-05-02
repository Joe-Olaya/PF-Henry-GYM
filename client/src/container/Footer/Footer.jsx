import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () =>
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <a href="https://www.linkedin.com">
          <img src={images.linkedin} alt="linkedin" />
        </a>
        <p className="p__opensans">Linkedin</p>
        <a href="https://www.linkedin.com/in/joel-olaya-302761263/">
        <p className="p__opensans">Joel Olaya</p>
        </a>
        <a href="https://www.linkedin.com/in/alejandro-martinez-0a536b258/">
        <p className="p__opensans">Alejandro Martinez</p>
        </a>
        <a href="https://www.linkedin.com/in/joaquin-bolzon-b83a9a24a/">
        <p className="p__opensans">Joaquin Bolzon</p>
        </a>
        <a href="https://www.linkedin.com/in/richard-zamora-78b153133">
        <p className="p__opensans">Richard Zamora</p>
        </a>
        <a href="https://www.linkedin.com/in/abril-daine-96047a205/">
        <p className="p__opensans">Abril Daine</p>
        </a>
        <a href="https://www.linkedin.com/in/nury-alejandra-blanco-palomino-8428b0226/">
        <p className="p__opensans">Alejandra Blanco Palomino</p>
        </a> 
        <a href="https://www.linkedin.com/in/kevin-deleon-883285273/">
          <p className="p__opensans">Kevin Deleon</p>
        </a>
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
        <p className="p__opensansfooter">joel.olaya@gmail.com</p>
        <p className="p__opensansfooter">alejandrofabian00@hotmail.com</p>
        <p className="p__opensansfooter">joaco.bolzon3@gmail.com</p>
        <p className="p__opensansfooter">richardzamora1952@gmail.com</p>
        <p className="p__opensansfooter">abrudaine@gmail.com</p>
        <p className="p__opensansfooter">alejandrabp2022@gmail.com</p>
        <p className="p__opensansfooter">kevindeleonsilveira@gmail.com</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Henry Poyecto Final.</p>
    </div>
  </div>;

export default Footer;
