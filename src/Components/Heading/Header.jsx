import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head/>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/plans'>Plans</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/ourNetwork'>Our Network</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
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
