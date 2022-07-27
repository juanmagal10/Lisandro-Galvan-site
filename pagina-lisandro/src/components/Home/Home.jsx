import React from 'react'
import { createRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
// import Carousel from '../Carousel/Carousel';
import Description from '../Description/Description';
import Projects from '../Projects/Projects';
import Form from '../Form/Form';
import Carousel2 from '../Carousel2/Carousel2';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
 
  return (
  
       <div> 
        <Header/>
        <div className="container">
          <Carousel2 />
          <Description />
          <Projects/>
          <Form />
          <Footer/>
        </div>  
       </div> 
 
  )
  
}

export default Home

  
    //   <BrowserRouter>
    //   <Routes>
    //   {/* <div> */}
    //    <Route path='/#Inicio' element={<Header />}></Route> 
    //    <Route path='/#Carousel' element={<Carousel2 />}></Route> 
    //    <Route path='/#about' element={<Description />}></Route> 
    //    <Route path='/#projects' element={<Projects />}></Route> 
    //    <Route path='/#contact' element={<Form />}></Route>    
    //   {/* </div> */}
    //   </Routes>
    // </BrowserRouter>
