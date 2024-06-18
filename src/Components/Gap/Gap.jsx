import React from 'react'
import './Gap.css'
import { Link } from 'react-router-dom'

const Gap = () => {
  return (
    <>
        <div className="gap">
            <div className="gap-container">
                <div className="right-gap">
                    <p className='right-text'>We leverage technology to redefine ‘‘quality healthcare’’ by making it simple, affordable, flexible and wholistic.</p>
                    <div className="gap-button">
                        <button className='get_started'><Link to='https://selfregistration.lshsportal.com:467/'>Get Started</Link></button>
                        <button className="contact">Contact Us</button>
                    </div>
                </div>
                <div className="left-gap">
                    <h3 className='left-text'>Get Health Insurance. <br/>Get Wealth Bonus.<br/>Get Living.</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gap
