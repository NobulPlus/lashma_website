/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <header className='bg-white flex justify-between items-center w-[92%] mx-auto'>
          <div>
          <img src={logo} alt="LASHMA logo" className='logo w-16' />
          </div>
          <div className='md:static absolute bg-white md:min-h-fit md:w-auto min-h-[60vh] left-0 top-[-10%] w-full items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
              <li><Link className='hover:text-gray-500'>Home</Link></li>
              <li><Link className='hover:text-gray-500'>Plans</Link></li>
              <li><Link className='hover:text-gray-500'>About</Link></li>
              <li><Link className='hover:text-gray-500'>Our Network</Link></li>
              <li><Link className='hover:text-gray-500'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex items-center gap-6'>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Enroll Now</button>
            <FontAwesomeIcon icon={faBars} className='text-3xl cursor-pointer md:hidden'/>
          </div>
      </header>
    </>
  )
}

export default Navbar
