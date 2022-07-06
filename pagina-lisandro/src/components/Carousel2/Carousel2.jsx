import React from 'react';
import { useRef } from 'react';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Carousel.css'



import { Autoplay, Pagination, Navigation } from "swiper";



const Carousel2 = () => {
  return (
  <>
      <Swiper
       spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel-container"
      >
                  <SwiperSlide ><img /*className='carousel-img'*/ src={img1} alt="img1" /></SwiperSlide>
            
                  <SwiperSlide ><img /*className='carousel-img'*/ src={img2} alt="img2" /></SwiperSlide>

                  <SwiperSlide><img  /*className='carousel-img'*/ src={img3} alt="img3" /></SwiperSlide>

   
      </Swiper>
    </>
  )
}



export default Carousel2
