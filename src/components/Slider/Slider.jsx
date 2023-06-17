import React from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css';
import 'swiper/modules/navigation/navigation.min.css'
import "swiper/modules/pagination/pagination.min.css";

import slide_image_1 from '../../assets/fistik.png';
import './Slider.css'

// Swiper'ın modülleri ekleyin
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider() {
  return (
    <div className="container">

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
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
