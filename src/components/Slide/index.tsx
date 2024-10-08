import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; 
import { Pagination, Autoplay } from 'swiper/modules';
import styles from "./Slide.module.scss";
import slide from '../../asset/slide.png'

function Slide() {
    return (
        <div style={{ marginBottom: '100px' }}> {/* Adicionando margem inferior aqui */}
            <Swiper
                className={styles.mySwiper}
                slidesPerView={1}
                pagination={{
                    type: 'bullets',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]} 
            >
                <SwiperSlide><img src={slide} alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src={slide} alt="Slide 2" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slide;
