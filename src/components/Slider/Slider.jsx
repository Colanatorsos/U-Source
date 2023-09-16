import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from './Slider.module.scss'
import 'swiper/css/pagination';
import './style.css'

import { Pagination } from 'swiper/modules';

const Slider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={'auto'}
      centeredSlides={true}
      modules={[Pagination]}
      className="mySwiper">
      {children.map((el, idx) => (
        <SwiperSlide>
          <div className={styles.slider}>
            <h3>{el.title}</h3>
            <span></span>
            <p>{el.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider