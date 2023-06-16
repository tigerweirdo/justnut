import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading/>
      <h1 className="headtext__cormorant">Bültenimize Abone Olun!</h1>
      <p className="p__opensans"></p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Mail adresinizi giriniz" />
      <button type="button" className="custom__button">Gönder</button>
    </div>
  </div>
);

export default Newsletter;