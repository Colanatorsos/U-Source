import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from './Slider.module.scss'
import 'swiper/css/pagination';
import './style.css'

import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";

const Slider = ({ children }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={'auto'}
      modules={[Autoplay, Pagination]}
      className="mySwiper">
      {children.map((el, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.slider}>
            <div>
              {/*<Image src='' width={} height={}/>*/}
            </div>
            <div><h6>{el.name}</h6>
              <p>{el.Specialization}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider