import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
        setIsClicked(false);
    },1000); 
};


  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading/>
        <h1 className="headtext__cormorant">Bültenimize Abone Olun!</h1>
        <p className="p__opensans"></p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Mail adresinizi giriniz" />
        <div className="wrap">
          <button 
            className={`button ${isClicked ? 'clicked' : ''}`} 
            onClick={handleClick}
           
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
