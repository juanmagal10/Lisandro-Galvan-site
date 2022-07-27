import React, { useState, useContext, useRef } from 'react';
import { createRef } from 'react';
import { DataContext } from '../../context/context';
import logo from './logo-ambiente.png';
import {FiMenu} from 'react-icons/fi'
import './header.css'
import Form from '../Form/Form';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context';


const Header = () => {
    const headerRef=useRef()
    const [assideNav, setAssideNave] = useState(false)
    const [headerScroll, setHeaderScroll]=useState(false)
    const handleNav = () => {
        setAssideNave(!assideNav)
    }
    const handleScroll = () => {
        setHeaderScroll(true)
    }
    // const headerHeight = headerRef.current.getBoundingClientRect()
    // console.log(headerHeight.height)
    
    
    
  

  return (
      <>
          <div id="inicio"></div>
          <div id='header-container' className='header-container'>
              <div className={assideNav ? "modal" : "modal-hiden"} onClick={() => handleNav()}></div>
              
          <header ref={headerRef} id='header' className={headerScroll?'header-scrolling header':'header'} onScroll={()=>handleScroll()}>
              <div className="logo-container">
                  <a href="#inicio"><img src={logo} alt="logo" className='logo' /></a>
              </div>
              <div className="titulo-container">
                  <h1 className="titulo"><a href="#inicio">Lisandro <br/> Galván</a></h1>
                  <h3 className='subtitulo'><a href="#inicio">Consultor Ambiental</a></h3>
              </div>
              <div className="nav-container">
                  <nav className="nav">
                      <ul>
                          <li><a href="#inicio">Inicio</a></li>
                          <li><a href="#contact">Contacto</a></li>
                          <li><a href='#projects'>Proyectos</a></li>
                          <li><a href="#about">Sobre Mi</a></li>
                      </ul>
                      </nav>
                      {/* <Routes>
                          <Route path='/#projects' element={<Projects/>}></Route>
                      </Routes> */}
              </div>
                <div className='menu-logo-container'>
                <FiMenu className='menu-logo' onClick={()=>handleNav()}></FiMenu>
            </div>
              <div className={assideNav ? 'aside-nav-container' : 'aside-nav-hiden'}>
                <nav className='aside-nav'>
                   <ul>
                          <li onClick={() => handleNav()}><a href="#inicio">Inicio</a></li>
                          
                          <li onClick={() => handleNav()}><a href="#contact">Contacto</a></li>
                          
                          <li onClick={() => handleNav()}><a href="#projects">Proyectos</a></li>
                          
                          <li onClick={()=>handleNav()}><a href="#about">Sobre Mi</a></li>
                      </ul>
                </nav>
              </div>
            
              </header>
              </div>
      </>
  )
}

export default Header
