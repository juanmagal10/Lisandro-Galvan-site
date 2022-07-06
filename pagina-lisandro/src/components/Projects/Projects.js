import React from 'react'
import refugio from './imgs/img-refugio.jpg';
import reciclaje from './imgs/img-reciclaje.jpg';
import vivero from './imgs/img-vivero.jpg';
import basuraElectronica from './imgs/img-basura-electronica.jpg';

import './Projects.css'

const Projects = () => {
  return (
      <div className='grid-container'>
          <div className='projects-container'>
              <div className="project-card">
                  <h3 className='project-title' id='project-title'>Titulo</h3>
                  
                  <img className='project-img' src={refugio} alt="refugio" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div>
              <div className="project-card">
                  <h3 className='project-title' id='project-title2'>Titulo</h3>
                  <img className='project-img' src={reciclaje} alt="reciclaje" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div>
              <div className="project-card">
                  <h3 className='project-title'>Titulo</h3>
                  <img className='project-img' src={vivero} alt="vivero" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div>
              <div className="project-card">
                  <h3 className='project-title'>Titulo</h3>
                  <img className='project-img' src={basuraElectronica} alt="basura-electronica" />
                  <p className='project-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi enim at autem, beatae doloremque necessitatibus delectus eos voluptate sapiente voluptatibus repellat quas possimus similique quis magni incidunt et sed modi?</p>
              </div> 
              </div>
      </div>
  )
}

export default Projects
