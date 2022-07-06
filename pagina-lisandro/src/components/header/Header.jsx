import React, { useState } from 'react';
import logo from './logo-ambiente.png';
import {FiMenu} from 'react-icons/fi'
import './header.css'


const Header = () => {
    const [assideNav, setAssideNave] = useState(false)
    const handleNav = () => {
        setAssideNave(!assideNav)
    }

  return (
      <>
          <div className={assideNav?"modal":"modal-hiden"} onClick={()=>handleNav()}></div>
          <header className='header'>
              <div className="logo-container">
                  <img src={logo} alt="logo" className='logo' />
              </div>
              <div className="titulo-container">
                  <h1 className="titulo">Lisandro <br/> Galván</h1>
                  <h3 className='subtitulo'>Consultor Ambiental</h3>
              </div>
              <div className="nav-container">
                  <nav className="nav">
                      <ul>
                          <li>Inicio</li>
                          <li>Contacto</li>
                          <li>Proyectos</li>
                          <li>Sobre Mi</li>
                      </ul>
                  </nav>
              </div>
                <div className='menu-logo-container'>
                <FiMenu className='menu-logo' onClick={()=>handleNav()}></FiMenu>
            </div>
              <div className={assideNav ? 'aside-nav-container' : 'aside-nav-hiden'}>
                <nav className='aside-nav'>
                   <ul>
                          <li onClick={() => handleNav()}>Inicio</li>
                          
                          <li onClick={() => handleNav()}>Contacto</li>
                          
                          <li onClick={() => handleNav()}>Proyectos</li>
                          
                          <li onClick={()=>handleNav()}>Sobre Mi</li>
                      </ul>
                </nav>
              </div>
            
          </header>
      </>
  )
}

export default Header
