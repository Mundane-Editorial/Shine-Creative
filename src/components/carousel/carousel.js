import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './carousel.css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const carousel = () => {
    return (
        <div className="carousel-container">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                preventClicks={true}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 80,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true,
                    scale: 1
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        alt="Slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-2.jpg"
                        alt="Slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-3.jpg"
                        alt="Slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default carousel;