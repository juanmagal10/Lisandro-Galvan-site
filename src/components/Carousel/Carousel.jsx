import { useState } from "react";
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
// import img4 from '../../assets/img/img4.jpg'
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'

// css
import './Carousel.css'
import { useEffect } from "react";







const Carousel = () => {
    const images = [img1, img2, img3]
    const [photos, setPhotos] = useState(images)
    const [index, setIndex]=useState(0)

    useEffect(() => {
        const lastIndex = photos.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, photos])

    useEffect(() => {
       let slider= setInterval(() => {
            setIndex(index+1)
       }, 3000);
        return ()=> clearInterval(slider)
    }, [index])

  return (
      <section className="carousel-container">
          {photos.map((photo, photoIndex) => {
              let position = 'carousel-img right-img'
              if (photoIndex === index) {
                  position='carousel-img center-img'
              } else if (photoIndex === index - 1 || (index === 0 && photoIndex=== photo.length)){
              position='carousel-img left-img'
              }
              return (
                  <article className='img-container'  key={photoIndex}>
                      <img src={photo} alt="img" className={position}  key={photoIndex} />
                  </article>
              )
          })}
          <button className="prev-button" onClick={()=>setIndex(index-1)}><GrPrevious/></button>
          <button className="next-button" onClick={()=>setIndex(index+1)}><GrNext/></button>
      </section>
      
     
    
  )
}

export default Carousel
