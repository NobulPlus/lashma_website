import React, { useState } from 'react';
import Head from './Head';
import './Header.css';
import logo from '../../assets/lashma-logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flex justify-between items-center w-[100%] mx-auto fixed z-10 bg-slate-100'>
          <div className="ml-4">
            <img src={logo} alt="Lashma Logo" className='logo_pics w-16' />
          </div>
          <div className={`md:static absolute bg-slate-100 md:bg-slate-100 md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[92%]' : 'top-[-80vh]'} w-full flex items-center md:justify-start justify-center px-5 transition-all duration-300 ease-in-out`}>
            <ul className='flex md:flex-row flex-col items-center md:items-start md:gap-[4vw] gap-8'>
              <li><Link to='/' className='hover:text-[#495057]'>Home</Link></li>
              <li><Link to='/plan' className='hover:text-[#495057]'>Plans</Link></li>
              <li><Link to='/about' className='hover:text-[#495057]'>About</Link></li>
              <li className='relative group'>
                <Link to='#' className='hover:text-[#495057]'>Our Network</Link>
                <ul className='absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-2 w-56 space-y-4'>
                  <li><Link to='https://ileraeko.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>ILERA EKO</Link></li>
                  <li><Link to='https://lagosstate.gov.ng/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Lagos State</Link></li>
                  <li><Link to='https://lshsregulations.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LSHS Regulation</Link></li>
                  <li><Link to='https://lshs-paypolicy.com:8082/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Payment Channel</Link></li>
                  <li><Link to='https://ekosha.org' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>EKOSHA</Link></li>
                </ul>
              </li>
              <li><Link to='/contact' className='hover:text-[#495057]'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex items-center gap-6'>
            <button className='bg-[#f28201] text-white px-12 py-2 clip-custom hover:bg-[#d46c00] transition duration-300'>
              Enroll ILERA EKO
            </button>
            <FontAwesomeIcon icon={faBars} className='text-3xl text-slate-900 px-4 cursor-pointer md:hidden' onClick={toggleMenu} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
