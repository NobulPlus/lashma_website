import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Head/>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
            <li><img src={logo} alt="" className='logo_pics'/></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/plan'>Plans</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li 
          className="dropdown" 
          onMouseEnter={() => setDropdown(true)} 
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to='/ourNetwork'>Our Network</Link>
          {dropdown && (
            <ul className="dropdown-content">
              <li><Link to='https://www.ileraeko.com'>Ilera Eko</Link></li>
              <li><Link to='https://www.lshsRegulation.com'>LSHS Regulation</Link></li>
              <li><Link to='https://www.ekosha.org'>EKOSHA</Link></li>
              <li><Link to='https://lagosstate.gov.ng'>Lagos State</Link></li>
              <li><Link to='https://lshs-paypolicy.com:8082/'>Payment Channel</Link></li>
            </ul>
          )}
        </li>
            {/* <li><Link to='/gallery'>Resources</Link></li> */}
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
