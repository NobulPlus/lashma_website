/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/lashma-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="LASHMA logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>Plans</li>
        <li>Our Network</li>
        <li>Contact Us</li>
        <li><Link to='https://selfregistration.lshsportal.com:467/'>Enroll ILERA EKO</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
