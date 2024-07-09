/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    title: 'Explore our plans',
    title_icon: <i className="fa-solid fa-file title-icon"></i>,
    card_text: 'Our care has gone into crafting each of our plans to ensure that you, your family, or your team will have complete coverage for medical needs.',
    more:<Link to="/plans"><i className='fa fa-long-arrow-alt-right'></i></Link>
  },
  {
    id: 2,
    title: 'Hello!',
    title_icon: <i class="fa-solid fa-headset"></i>,
    card_text: 'Our customer support team is available 24/7 to assist you with anything.',
    more:<Link to="/contact"><i className='fa fa-long-arrow-alt-right'></i></Link>
  },
  {
    id: 3,
    title: 'Become A Provider',
    title_icon: <i class="fa-solid fa-user-gear"></i>,
    card_text: 'Our providers enjoy prompt and paperless settlement of claims and support.',
    more:<Link to="https://ileraeko.com"><i className='fa fa-long-arrow-alt-right'></i></Link>
  },
  {
    id: 4,
    title: 'Regulation',
    title_icon: <i class="fa-solid fa-hospital-user"></i>,
    card_text: 'Ensuring quality health service is provided as agreed by the health facility and expanding access to high-quality care through licensed HMO companies.',
    more:<Link to="https://lshsregulations.com/"><i className='fa fa-long-arrow-alt-right'></i></Link>
  }
]

const Card = () => {
  return (
    <>
      <div className="plans plans_container">
        {
          data.map(({id, title, title_icon, card_text, more}) => {
            return (
              <div key={id} className="card text-align">
                <div className="overflow">
                    <h3 className="text">
                        {title}
                    </h3>
                    <Link to='#' className='link'>{title_icon}</Link>
                </div>
                <div className="card-body text-dark">
                  {card_text}
                </div>
                <div className="more">
                  {more}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Card
