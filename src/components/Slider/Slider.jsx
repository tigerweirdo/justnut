import React, { useRef } from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css';
import 'swiper/modules/navigation/navigation.min.css'
import "swiper/modules/pagination/pagination.min.css";

import slide_image_1 from '../../assets/fistik.png';
import slide_image_2 from '../../assets/fistik2.png';
import slide_image_3 from '../../assets/fistik3.png';
import slide_image_4 from '../../assets/fistik4.png';
import './Slider.css'

// Swiper'ın modülleri ekleyin
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider() {
  const swiperRef = useRef(null); // Swiper referansını oluşturun

  const handleClick = (index) => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideTo(index); // Tıklanan slayta geçiş yap
    }
  };

  return (
    <div className="container">

      <Swiper
      ref={swiperRef} // Swiper referansını ekleyin
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={0.8}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 4.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        preventClicks={false} // burayı ekledik
  preventClicksPropagation={false} // burayı ekledik
        className="swiper_container"
      >
        <SwiperSlide onClick={() => handleClick(0)}>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleClick(1)}>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleClick(2)}>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleClick(3)}>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
