import React, { useState } from 'react';
import Head from './Head';
import './Header.css';
import logo from '../../assets/lashma-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
    // Close dropdown menu when toggling navigation
    setDropdown(false);
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? 'mobile-nav active' : 'flexSB'}>
            <li><img src={logo} alt="" className='logo_pics' /></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/plan'>Plans</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li className="dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <span onClick={() => setDropdown(!dropdown)}>Our Network</span>
              {dropdown && (
                <ul className="dropdown-content">
                  <li><a href='https://www.ileraeko.com'>Ilera Eko</a></li>
                  <li><a href='https://www.lshsRegulation.com'>LSHS Regulation</a></li>
                  <li><a href='https://www.ekosha.org'>EKOSHA</a></li>
                  <li><a href='https://lagosstate.gov.ng'>Lagos State</a></li>
                  <li><a href='https://lshs-paypolicy.com:8082/'>Payment Channel</a></li>
                </ul>
              )}
            </li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
          <div className="start">
            <div className="enroll"><a href='https://selfregistration.lshsportal.com:467/'>Enroll ILERA EKO</a></div>
          </div>
          <button className='toggle' onClick={handleClick}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
