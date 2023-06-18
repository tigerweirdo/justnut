import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
      <img src={images.Info} alt="footer_konum" />
        <p className="p__opensans">05412034766</p>
        <a href="mailto:info@fıstıkezmecim.com" className="p__opensans">info@fıstıkezmecim.com</a>
      </div>

      <div className="app__footer-links_logo">
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <img src={images.Logo2} alt="footer_konum" />
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 JustNut. Tüm hakları saklıdır.</p>
    </div>

  </div>
);

export default Footer;