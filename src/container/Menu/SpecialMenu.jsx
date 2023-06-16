import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  
  return (
    <div className="container">
    <h1 className="heading">Flower Gallery</h1>
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={images.fistik} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.fistik} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.fistik} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.fistik} alt="slide_image" />
        </SwiperSlide>
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
    </div>
  );
};

export default SpecialMenu;