import React from 'react'
import refugio from './imgs/img-refugio.jpg';
import reciclaje from './imgs/img-reciclaje.jpg';
import vivero from './imgs/img-vivero.jpg';
import basuraElectronica from './imgs/img-basura-electronica.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Projects.css'

const Projects = () => {
    return (
        <>
        <h2 id='projects'  className='projects-title'>Proyectos...</h2>
      <div className='grid-container'>
          <div className='projects-container'>
                    <HashLink to='project1#inicio' style={{textDecoration:'none'}}>

                    <div className="project-card">
                  <h3 className='project-title' id='project-title'>Titulo</h3>
                  
                  <img className='project-img' src={refugio} alt="refugio" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div>
                    </HashLink>
                    <HashLink to='project2#inicio' style={{textDecoration:'none'}}>
              <div className="project-card">
                  <h3 className='project-title' id='project-title2'>Titulo</h3>
                  <img className='project-img' src={reciclaje} alt="reciclaje" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div>
                    </HashLink>
                    <HashLink to='project3#inicio' style={{textDecoration:'none'}}>
              <div className="project-card">
                  <h3 className='project-title'>Titulo</h3>
                  <img className='project-img' src={vivero} alt="vivero" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div>
                    </HashLink>
                    <HashLink to='project4#inicio' style={{textDecoration:'none'}}>
              <div className="project-card">
                  <h3 className='project-title'>Titulo</h3>
                  <img className='project-img' src={basuraElectronica} alt="basura-electronica" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div> 
                    </HashLink>
              </div>
      </div>
      </>
  )
}

export default Projects
