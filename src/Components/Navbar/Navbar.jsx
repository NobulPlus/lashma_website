/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/lashma-logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>Plans</li>
        <li>Our Network</li>
        <li>Contact Us</li>
        <li><button className='btn'>Enroll ILERA EKO</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
