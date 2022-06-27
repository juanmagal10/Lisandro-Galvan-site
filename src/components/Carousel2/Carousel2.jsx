import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './Carousel2.css'

import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'


function App() {
    const images=[img1, img2, img3]
    const [people, setPeople] = useState(images);
    const [index, setIndex] = useState(0);
    

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])
  
  useEffect(() => {
  let slider =  setInterval(() => {
      setIndex(index+1)
  }, 3000)
    return()=>clearInterval(slider)
  }, [index])

  

  return (
    <section className='carousel-container'>
      <div className="title">
        <h2><span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
        //   const { id, image, name, title, quote } = person
          // more stuff coming up
          let position = 'nextSlide';
          if (personIndex === index){
            position = 'activeSlide';
          }
          if (personIndex===index-1|| (index===0&&personIndex===people.length-1)) {
            position='lastSlide'
          }
          return (
            <div className='div-img' key={personIndex}>
              <img src={images[personIndex]} alt='img' className="carousel-img" />
              <FaQuoteRight className='icon'/>
          </div>)
        })}

        <button className='prev' onClick={()=>setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={()=>setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>);
}

export default App;