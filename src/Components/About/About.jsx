import React from 'react'
import './About.css'
import about_img from '../../assets/All/import/backdrop.png'
import play_icon from '../../assets/All/import/play-icon.png'

const About = () => {
  return (
    <>
      <div className="abou">
        <div className="about-left">
            <img src={about_img} alt="" className='about-image'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right"></div>
      </div>
    </>
  )
}

export default About
