import React from 'react'
import logo from '../../assets/lashma-logo.png'

const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <img src={logo} alt="" className='logo_pics'/>
            </div>

            <div className="social">
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-tiktok icon'></i>
                <i className='fab fa-youtube icon'></i>
                <i className='fab fa-whatsapp icon'></i>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
