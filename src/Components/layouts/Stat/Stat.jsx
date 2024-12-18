/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './Stat.css'

const Stat = () => {
  const [counterState, setCounterState] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
      <div className='container content'>
        <div className='item-more'>
          <div className="item-1">
            <div className="item-head">
              <h1>Statistics</h1>
              <i className="fa-solid fa-square-poll-vertical item-icon"></i>
            </div>
            <p className='item-text'>We have over 400 and still counting Health Care Providers and Over  1.15 million lives registered on the scheme as at the end of <b>September</b> 2024 registered with numbers continuing to grow.</p>
          </div>
        </div>
        <div className='items-container'>
          <div className='item'>
            <div className="item-2">
              <h1 className='stat'>
                {counterState && (
                  <CountUp start={0} end={1152455} duration={5} />
                )}
              </h1>
              <h5>Lives</h5>
            </div>
          </div>
          <div className='item'>
            <div className="item-2">
              <h1 className='stat'>
                {counterState && (
                  <CountUp start={0} end={401} duration={5} />
                )}
              </h1>
              <h5>Care Providers</h5>
            </div>
          </div>
          <div className='item'>
            <div className="item-2">
              <h1 className='stat'>
                {counterState && (
                  <CountUp start={0} end={52260} duration={5} />
                )}
              </h1>
              <h5>Maternal Cases</h5>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Stat