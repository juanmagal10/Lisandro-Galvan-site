import React, { useState, useContext, useRef } from 'react';
import { createRef } from 'react';

import logo from './logo-ambiente.png';
import {FiMenu} from 'react-icons/fi'
import './header.css'
import Form from '../Form/Form';
import Projects from '../Projects/Projects';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HashLink, NavHashLink } from 'react-router-hash-link';



const Header = () => {
    const headerRef=useRef()
    const [assideNav, setAssideNave] = useState(false)
    const [headerScroll, setHeaderScroll]=useState(false)
    const handleNav = () => {
        setAssideNave(!assideNav)
    }

    // const headerHeight = headerRef.current.getBoundingClientRect()
    // console.log(headerHeight.height)
    const addShadow = () => {
        if (window.scrollY === 0) {
            setHeaderScroll(false)
        } else {
            setHeaderScroll(true)
        }
    }
    
    window.addEventListener('scroll', addShadow)
    
    
    
  

  return (
      <>
          <div id="inicio"></div>
          <div id='header-container' className={'header-container'}>
              <div className={assideNav ? "modal" : "modal-hiden"} onClick={() => handleNav()}></div>
              
          <header ref={headerRef} id='header' className={headerScroll?'header-scrolling header':'header'}>
              <div className="logo-container">
                  <HashLink to="/#inicio"><img src={logo} alt="logo" className='logo' /></HashLink>
              </div>
              <div className="titulo-container">
                  <h1 className="titulo"><a href="/#inicio">Lisandro <br/> Galván</a></h1>
                  <h3 className='subtitulo'><a href="#inicio">Consultor Ambiental</a></h3>
              </div>
              <div className="nav-container">
                  <nav className="nav">
                      <ul>
                          <NavHashLink to='/#inicio' style={{textDecoration:'none'}}><li>Inicio</li></NavHashLink>
                              <NavHashLink to='/#contact' style={{ textDecoration: 'none' }}><li>Contacto</li></NavHashLink>
                          <NavHashLink to='/#projects' style={{ textDecoration: 'none' }}><li>Proyectos</li></NavHashLink>
                          <NavHashLink to='/#about' style={{ textDecoration: 'none' }}><li>Sobre Mi</li></NavHashLink>
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
                          <HashLink to='/#inicio' style={{textDecoration:'none'}}><li onClick={() => handleNav()}>Inicio</li></HashLink>
                          
                          <HashLink to='/#contact' style={{textDecoration:'none'}}><li onClick={() => handleNav()}>Contacto</li></HashLink>
                          
                          <HashLink to='/#projects' style={{textDecoration:'none'}}><li onClick={() => handleNav()}>Proyectos</li></HashLink>
                          
                          <HashLink to='/#about' style={{textDecoration:'none'}}><li onClick={()=>handleNav()}>Sobre Mi</li></HashLink>
                      </ul>
                </nav>
              </div>
            
              </header>
              </div>
      </>
  )
}

export default Header
