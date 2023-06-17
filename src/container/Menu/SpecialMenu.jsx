import React from 'react';
import { SubHeading } from '../../components';
import './SpecialMenu.css';
import Slider from '../../components/Slider/Slider'

const SpecialMenu = () => {
  
  return (
    
    
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
      <Slider />
      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
   
  );
};

export default SpecialMenu;