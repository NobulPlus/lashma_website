import React from 'react'
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                {/* <img src={logo} alt="" className='logo_pics'/> */}
            </div>

            <div className="social">
                <Link to='https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL'><i className='fab fa-facebook-f icon'></i></Link>
                <Link to='https://www.instagram.com/lagosstatehealthscheme?igsh=MWNxeXd1cGE4Y2Z5bQ=='><i className='fab fa-instagram icon'></i></Link>
                <Link to='https://www.linkedin.com/company/lagos-state-health-management-agency/'><i className='fab fa-linkedin icon'></i></Link>
                <Link to='http://www.youtube.com/@ILERA_EKO'><i className='fab fa-youtube icon'></i></Link>
                <Link to="https://wa.me/2347045358275"><i className='fab fa-whatsapp icon'></i></Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
