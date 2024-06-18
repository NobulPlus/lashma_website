import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head/>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
            <li><img src={logo} alt="" className='logo_pics'/></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/plans'>Plans</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/ourNetwork'>Our Network</Link></li>
            <li><Link to='/gallery'>Resources</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
          <div className="start">
            <div className="enroll"><Link to='https://selfregistration.lshsportal.com:467/'>Enroll ILERA EKO</Link></div>
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
