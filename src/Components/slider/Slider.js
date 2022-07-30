import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider() {
  return (
    <Swiper
    effect={"fade"}
   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img height="400" width="1200" src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
    </SwiperSlide>
  </Swiper>
  )
}



export default Slider

// Import Swiper styles
