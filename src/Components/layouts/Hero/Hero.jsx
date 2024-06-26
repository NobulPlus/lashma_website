/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/All/import/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lagos State Health Management Agency</h1>
        <p>To improve quality of care and provide financial risk protection against catastrophic and impoverishing healthcare spending for all residents of Lagos state through a mandatory health insurance scheme that is based on the principles of equity and solidarity.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="icon" /> </button>
      </div>
    </div>
  )
}

export default Hero
