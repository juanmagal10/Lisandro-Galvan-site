import React from 'react'
import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import contactImg from '../../assets/img/contact-logo-lisandro.jpg'
import './Form.css'

const Form = () => {
  return (
      <div id='contact' className="form-container">
          <div className='form-card'>
          <div className='form-title-container'>
              <h3 className='form-title'>Contactame</h3>
          </div>
              <img src={contactImg} alt="contact-img" className='form-card-img' />
              <p>Contactame para que podamos hacer algun proyecto juntos!</p>
              <div className='icons-container'>
                  <div className="icon-container"><AiOutlineWhatsApp/></div>
                  <div className="icon-container"><AiOutlineFacebook/></div>
                  <div className="icon-container"><AiOutlineMail/></div>
                  <div className="icon-container"><AiOutlineLinkedin/></div>
              </div>
          </div>
          <form className='form' action="">
              <form-control>
                  <label htmlFor="name" />
                  <input className='form-input'  type="text" name='name' id='name' placeholder='nombre'/>
              </form-control>
              <form-control>
                  <label htmlFor="email" />
                  <input className='form-input'  type="email" name='email' id='email' placeholder='email'/>
              </form-control>
              <form-control>
                  <label htmlFor="tel" />
                  <input className='form-input'  type="text" name='tel' id='tel' placeholder='telefono'/>
              </form-control>
              <form-control>
                  <label htmlFor="city" />
                  <input className='form-input'  type="text" id='city' name='city' placeholder='ciudad'/>
              </form-control>
              <form-control>
                  <label htmlFor="company" />
                  <input className='form-input' type="text" id='company' name='company' placeholder='empresa'/>
              </form-control>
              <form-control>
                  <label htmlFor="message" />
                  <textarea id='message' name='message' rows={window.innerWidth<800?4:10} placeholder='mensaje' className='form-text-area'/>
              </form-control>
              <button type='submit'>Enviar</button>
          </form>
      </div>
  )
}

export default Form
