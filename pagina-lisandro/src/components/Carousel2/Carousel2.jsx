import React from 'react';
import { useRef } from 'react';

import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import './Carousel2.scss'




import { EffectFade, Autoplay, Pagination, Navigation } from
"swiper";



const Carousel2 = (header) => {
  
//   header=document.getElementById('header')
//  const headerHeight= header.getBoundingClientRect().height

  return (
  <>
      <Swiper 
        // style={{top:`${headerHeight}px`}}
        id='carousel' 
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        speed={1200}
        autoplay={{
        delay:4000,
        disableOnInteraction: false,
        }}
     
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="carousel-container"
      >
        
        <SwiperSlide className='slide'>
          <img className='slide-content' src={img1} alt="img1" />
          <h3 className='slider-title'>titulo del projecto</h3>
          <p className='animation'>prueba de animacion para ver como sale 1</p>  
          <button className='project-btn'><a href="#">Mas...</a></button>
          </SwiperSlide>
        
       
          <SwiperSlide className='slide'>
          <img className='slide-content' src={img2} alt="img2" />
          <h3 className='slider-title'>titulo del projecto</h3>
          <p className='animation'>prueba de animacion para ver como sale 2</p>  
         <button className='project-btn'><a href="#">Mas...</a></button>
          </SwiperSlide>
           
          <SwiperSlide >
          <img src={img3} alt="img3" />
          <h3 className='slider-title'>titulo del projecto</h3>
          <p className='animation'>prueba de animacion para ver como sale 3</p>
          <button className='project-btn'><a href="#">Mas...</a></button>
          </SwiperSlide>
        
        
   
      </Swiper>
      
 
    </>
  )
}



export default Carousel2
