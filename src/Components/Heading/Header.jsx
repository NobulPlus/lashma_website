import React, { useState } from 'react'
import Head from './Head'
import './Header.css'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head/>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
            <li>Home</li>
            <li>Gallery</li>
            <li>Plans</li>
            <li>About</li>
            <li>Our Network</li>
            <li>Contact Us</li>
          </ul>
          <div className="start">
            <div className="button">Enroll ILERA EKO</div>
          </div>
          <button className='toggle' onClick={()=> setClick(!click)}>
            {click ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
