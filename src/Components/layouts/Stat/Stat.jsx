/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './Stat.css'

const Stat = () => {
  const [counterState, setCounterState] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
      <div className='content container'>
        <div className='item-more'>
          <div className="item-1">
            <div className="item-head">
              <h1>Statistics</h1>
              <i className="fa-solid fa-square-poll-vertical item-icon"></i>
            </div>
            <p className='item-text'>We have over 390 and still counting Health Care Providers and Over  1.13 million lives as at the end of <b>August</b> 2024 registered on the scheme with numbers continuing to grow.</p>
          </div>
        </div>
        <div className='items-container'>
          <div className='item'>
            <div className="item-2">
              <h1 className='stat'>
                {counterState && (
                  <CountUp start={0} end={1130061} duration={5} />
                )}
              </h1>
              <h5>Lives</h5>
            </div>
          </div>
          <div className='item'>
            <div className="item-2">
              <h1 className='stat'>
                {counterState && (
                  <CountUp start={0} end={395} duration={5} />
                )}
              </h1>
              <h5>Care Providers</h5>
            </div>
          </div>
          <div className='item'>
            <div className="item-2">
              <h1 className='stat'>
                {counterState && (
                  <CountUp start={0} end={44301}  duration={5} />
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