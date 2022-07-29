import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import './ProjectPage.css'
// import projectImg from '../../components/Projects/imgs/img-reciclaje.jpg'


const ProjectPage = ({projectName, projectImg}) => {
    return (
        <>
        <Header/>
    <div className='project-page'>
          <div className="img-container">
            <img className='project-img' src={projectImg} alt={projectName} />
          </div>

          <div className="project-description-container"><h2 className='project-title'>{projectName }</h2><p className='project-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore earum, velit autem quaerat, tempore aut quo neque quam vel cumque! Eum nulla officiis recusandae. Earum aliquam cum doloremque officia.lorem
          </p>
          </div>
        <Footer/>
        </div>
      </>
  )
}

export default ProjectPage
