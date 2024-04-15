import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import poster1 from "../../assets/images/slide_image_1.jpeg";
import poster2 from "../../assets/images/slide_image_2.jpeg";
import poster3 from "../../assets/images/slide_image_3.jpeg";
import poster4 from "../../assets/images/slide_image_4.png";
import poster5 from "../../assets/images/slide_image_5.png";
import poster6 from "../../assets/images/slide_image_6.jpeg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={poster1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
