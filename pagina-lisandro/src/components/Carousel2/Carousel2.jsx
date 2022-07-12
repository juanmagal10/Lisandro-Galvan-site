import React from 'react';
import { useRef, useState } from 'react';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import './Carousel2.scss'



import { Autoplay, Pagination, Navigation } from "swiper";




const Carousel2 = () => {
  const [animation, setAnimation] = useState(true)

  const addAnimation = () => {
      setTimeout(() => {
    setAnimation(true);
    setTimeout(()=>{
      const removeClass = () => {
        setAnimation(false)
      }
      removeClass()
    }, 2500)

  }, 1200)
  }


  return (
  <>
      <Swiper
        centeredSlides={true}
        
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={addAnimation}

        
     
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel-container"
      >
        
          <SwiperSlide className='slide'>
            <img className='slide-content' src={img1} alt="img1" />
          <p className={animation?'animation slider-text':'slider-text'}>prueba de animacion para ver como sale</p>
          </SwiperSlide>
        
       
          <SwiperSlide className='slide'>
            <img className='slide-content' src={img2} alt="img1" />
            <p className={animation?'animation slider-text':'slider-text'}>prueba de animacion para ver como sale</p>  
          </SwiperSlide>
           
          <SwiperSlide >
            <img src={img3} alt="img3" />
            <p className={animation ? 'animation slider-text' : 'slider-text'}>prueba de animacion para ver como sale</p>
          </SwiperSlide>
        
        
   
      </Swiper>
      
 
    </>
  )
}



export default Carousel2
