import React from 'react'
import './Telemedicine.css'
import Telemed from '../../assets/All/import/telemedicine.jpg'
import AppStore from '../../assets/All/import/AppStore.png'
import PlayStore from '../../assets/All/import/PlayStore.png'
import { Link } from 'react-router-dom'

const Telemedicine = () => {
  return (
    <>
        <div className="Tmed">
            <div className="right-side">
                <img className='' src={Telemed} alt="" />
            </div>
            <div className="left-side">
                <div className="title"><h1>Telemedicine</h1></div>
                <div className="sub-title">
                    <h3 className='subtitle-text'>Don’t <br/>Google your <br/>symptoms</h3>
                </div>
                <div className="text">
                    <p>Speak to a doctor from the comfort of your home</p>
                </div>
                <div className="telemedicine-button">
                    <Link to="apple.com"><img className='AppStore' src={AppStore} alt="" /></Link>
                    <Link to="google.com"><img className='PlayStore' src={PlayStore} alt="" /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Telemedicine
