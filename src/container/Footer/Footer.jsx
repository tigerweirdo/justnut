import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import Logo from '../../components/sign';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer__top">
      <div className="footer__social-icons">
        <FiFacebook className="footer__icon" />
        <FiInstagram className="footer__icon" />
      </div>
      <p className="p__opensans">0541 203 47 66</p>
      <a href="mailto:info@fıstıkezmecim.com" className="p__opensans">info@fıstıkezmecim.com</a>
    </div>
    <div className="footer__bottom">
        <div className="footer__logo">
          <Logo/>
      </div>
        <div className="footer__copyright">
          <p className="p__opensans2">© JustNut, 2023</p>
      </div>
    </div>
  </div>
);

export default Footer;
