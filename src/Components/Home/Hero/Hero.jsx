import React from 'react'
import './hero.css'
import Title from '../../Common/Title/Title'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div className='hero-head'>
            <div className="container">
                <div className="row">
                    <Title id subtitle='WELCOME TO LAGOS STATE HEALTH MANAGEMENT AGENCY' title='your good health, our mandate'/>
                    <p className='row_body'>To improve quality of care and provide financial risk protection against catastrophic and impoverishing healthcare spending for all residents of Lagos state through a mandatory health insurance scheme that is based on the principles of equity and solidarity.</p>
                    <div className="button">
                        <button className="primary-btn">
                            <Link to='https://selfregistration.lshsportal.com:467'>REGISTER NOW </Link>
                            <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button className='view-plans'>
                            <Link to='https://ileraeko.com/plan/'>VIEW PLANS</Link>
                            <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="margin"></div>
    </>
  )
}

export default Hero
