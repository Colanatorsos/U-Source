'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './Slider.module.scss';
import './style.css';;

const Slider = React.memo(({ children }) => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Swiper
        spaceBetween={100}
        slidesPerView={'auto'}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {children.map((el, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <div className={styles.slider}>
              <h3>{el.title}</h3>
              <span></span>
              <p>{el.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default Slider;
