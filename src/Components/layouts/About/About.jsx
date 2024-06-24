import React from 'react'
import './About.css'
import about_img from '../../../assets/All/import/backdrop.png'
import play_icon from '../../../assets/All/import/play-icon.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-image'/>
            <Link to="/#"><img src={play_icon} alt="" className='play-icon'/></Link>
        </div>
        <div className="about-right">
            <div id='about'>
                <h3>ABOUT LASHMA</h3>
                <p className='history'>Lagos State Health Management Agency (LASHMA) was established by the enabling act No. 14 of 25 May, 2015 and registered in Lagos State of Nigeria (Official Gazette No. 32, Vol. 48) dated 5th June 2015 to ensure that all residents of Lagos State including Public Servants have access to affordable and quality health care.</p>
                <p className='more_about'>Through the Scheme, people living in Lagos can be protected from financial distress resulting from huge medical bills.</p>
                <p className='vision'>Our Vision, is to improve the overall health indices of Lagos State through Universal Health Coverage for all residents of the state.</p>
            </div>
            <div className="button read-more">
                <button className="primary-btn about-btn">
                    READ MORE<i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
