import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Bize Ulaşın</h1>
        <p className="p__opensans">05412034766</p>
        <p className="p__opensans">info@fıstıkezmecim.com</p>
        <img src={images.Info} alt="footer_konum" />
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;Vücudunuzu sağlıklı tutun, ruhunuzun yaşayabileceği tek yer orasıdır.&quot;</p>
        <img src={images.spoon} className="spoon__img" alt="footer_img" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <img src={images.Logo} alt="footer_konum" />
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 JustNut. Tüm hakları saklıdır.</p>
    </div>

  </div>
);

export default Footer;