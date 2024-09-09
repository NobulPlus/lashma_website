import React, { useState, useEffect } from 'react';
import Head from './Head';
import './Header.css';
import logo from '../../assets/lashma-logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  let timeoutId;
  let prevScrollPos = window.pageYOffset;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 500); // 500ms delay before closing dropdown
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Head Section */}
      <div className={`fixed w-full z-20 transition-transform duration-300 ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <Head />
      </div>

      {/* Header Section */}
      <header className={`fixed w-full z-10 bg-slate-100 transition-transform duration-300 ease-in-out ${showHeader ? 'translate-y-[72px]' : '-translate-y-full'}`}>
        <nav className='flex justify-between items-center w-[100%] mx-auto bg-slate-100'>
          <div className="ml-4">
            <img src={logo} alt="Lashma Logo" className='w-16 logo_pics' />
          </div>
          <div className={`md:static absolute bg-slate-100 md:bg-slate-100 md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[92%]' : 'top-[-80vh]'} w-full flex items-center md:justify-start justify-center px-5 transition-all duration-300 ease-in-out`}>
            <ul className='flex md:flex-row flex-col items-center md:items-start md:gap-[4vw] gap-8'>
              <li><Link to='/' className='hover:text-[#495057]'>Home</Link></li>
              <li><Link to='/plan' className='hover:text-[#495057]'>Plans</Link></li>
              <li><Link to='/about' className='hover:text-[#495057]'>About</Link></li>
              <li
                className='relative group'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='#' className='hover:text-[#495057]' onClick={toggleDropdown}>Our Network</Link>
                <ul className={`absolute left-0 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block flex-col bg-white shadow-lg rounded-md mt-2 w-56 space-y-4 transition-opacity duration-300 ease-in-out`}>
                  <li><Link to='https://ileraeko.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>ILERA EKO</Link></li>
                  <li><Link to='https://lagosstate.gov.ng/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Lagos State</Link></li>
                  <li><Link to='https://lshsregulations.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LSHS Regulation</Link></li>
                  <li><Link to='/resources' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Resources</Link></li>
                  <li><Link to='https://ekosha.org' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>EKOSHA</Link></li>
                  <li><Link to='https://verify.lshsportal.com:8283/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LSHS Verification</Link></li>
                </ul>
              </li>
              <li><Link to='/contact' className='hover:text-[#495057]'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex items-center'>
            <button className='bg-[#f28201] text-white w-51 px-8 py-2 clip-custom-left hover:bg-slate-400 transition duration-300'>
              <Link to='https://selfregistration.lshsportal.com:467/' className='text-white no-underline'>Enroll ILERA EKO</Link>
            </button>
            <button className='bg-[#000000] text-white px-8 py-2 clip-custom-right hover:bg-slate-400 transition duration-300'>
              <Link to='https://lshs-paypolicy.com:8082' className='text-white no-underline'>Pay Now</Link>
            </button>
            <FontAwesomeIcon icon={faBars} className='px-4 text-3xl cursor-pointer text-slate-900 md:hidden' onClick={toggleMenu} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
