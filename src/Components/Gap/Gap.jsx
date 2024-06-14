import React from 'react'
import './Gap.css'

const Gap = () => {
  return (
    <>
        <div className="gap">
            <div className="gap-container">
                <div className="right-gap">
                    <p className='right-text'>We leverage technology to redefine ‘‘quality healthcare’’ by making it simple, affordable, flexible and wholistic.</p>
                    <div className="gap-button">
                        <button className='get_started'>Get Started</button>
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
