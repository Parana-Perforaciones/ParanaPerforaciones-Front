import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; 
import { Pagination, Autoplay } from 'swiper/modules';
import styles from "./Slide.module.scss";

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
                <SwiperSlide>
                    <img src="https://via.placeholder.com/400x300" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/400x300" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slide;
