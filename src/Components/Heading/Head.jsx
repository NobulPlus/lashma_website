import React from 'react'
import './Header.css'
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'
import { ImOpt } from 'react-icons/im'

const Head = () => {
  return (
    <div>
  <section className='head'>
    <div className="container flex justify-between items-center">
      <div className="logo">
        {/* <img src={logo} alt="" className='logo_pics'/> */}
      </div>

      <div className="social flex space-x-4">
        <a href='https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f icon'></i></a>
        <a href='https://www.instagram.com/lagosstatehealthscheme?igsh=MWNxeXd1cGE4Y2Z5bQ==' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram icon'></i></a>
        <a href='https://www.linkedin.com/company/lagos-state-health-management-agency/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin icon'></i></a>
        <a href='http://www.youtube.com/@ILERA_EKO' target='_blank' rel='noopener noreferrer'><i className='fab fa-youtube icon'></i></a>
        <a href="https://wa.me/2347045358275" target='_blank' rel='noopener noreferrer'><i className='fab fa-whatsapp icon'></i></a>
      </div>
    </div>
  </section>
</div>
  )
}

export default Head
