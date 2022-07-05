import { useState } from "react";
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
// import img4 from '../../assets/img/img4.jpg'

// css
import './Carousel.css'







const Carousel = () => {
    const images=[img1, img2, img3]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (index, images) => {

              const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
        const nextIndex = next ?
            (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex) 
        }
      
            
    
    
    const previous = () => {
        selectNewImage(selectedImage, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
    }
     setTimeout(() => {
        next()
      },5000);
  return (
        <div className="carousel-container">
          <img src={selectedImage} className='carousel-img' alt="img"/>
          <button onClick={()=>previous()} className='prev-button'>{'<'}</button>
          <button onClick={() => next()} className='next-button'>{'>'}</button>
      </div>
      
     
    
  )
}

export default Carousel
