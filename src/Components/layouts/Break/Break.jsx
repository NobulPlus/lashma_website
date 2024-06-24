import React from 'react'
import './Break.css'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const Break = () => {
  return (
    <>
    <div className="break">
        <div className="content container">
          <Marquee speed={60} gradient={false} pauseOnHover>
            <h4>
                Are you a Lagos State civil servant and you have not registered on ILERA EKO health insurance scheme? <Link to='#' className='btn-primary'>Register Now!!! </Link>
            </h4>
          </Marquee>
        </div>        
    </div>
    </>
  )
}

export default Break
