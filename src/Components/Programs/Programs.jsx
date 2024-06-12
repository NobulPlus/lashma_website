import React from 'react'
import './Programs.css'
import ileraeko from '../../assets/All/import/ileraeko-logo.png'
import lshs from '../../assets/All/import/lshs-logo.png'
import ekotelemed from '../../assets/All/import/ekotelemed-logo.jpg'
import ekosha from '../../assets/All/import/ekosha-logo.png'
import { Link } from 'react-router-dom'

const data = [
  {
    id:1,
    image: ileraeko,
    product_text: "The ILERA EKO Insurance Scheme is a social health insurance plan under the Lagos State Health Scheme consisting of basic primary and some secondary care suitable for formal and informal sector workers in Lagos State.",
    more: <button>more <i className='fa fa-long-arrow-alt-right'></i></button>
  },
  {
    id:2,
    image: lshs,
    product_text: "The Lagos State Health Scheme (LSHS) was established by the Lagos State Health Scheme (LSHS) to ensure that all residents of the state have access to healthcare services at affordable rates, thereby protecting families from ...",
    more: <button>more <i className='fa fa-long-arrow-alt-right'></i></button>
  },
  {
    id:3,
    image: ekotelemed,
    product_text: "“EKOTELEMED” provided by LASHMA for the residents to further protect the residents and reduce their risk of contracting coronavirus. The toll free line provides the residents in the state with 24/7 access to care.",
    more: <button>more <i className='fa fa-long-arrow-alt-right'></i></button>
  },
  {
    id:4,
    image: ekosha,
    product_text: "EKOSHA is the resource mobilization arm of LASHMA responsible for identifying the vulnerable, provide additional funds to purchase health insurance for the identified vulnerable, and improve access to healthcare in Lagos State.",
    more: <button>more <i className='fa fa-long-arrow-alt-right'></i></button>
  }
]

const Programs = () => {
  return (
    <>
      <div className="product product-container">
        {
          data.map(({id, image, product_text, more}) =>
          {
            return(
              <div key={id} className="product-content">
                <div className="products">
                  <img src={image} className='product-logo' alt="" />
                  <p className='product-text'>{product_text}</p>
                  <div className="more-about">
                    <Link to='#' className='about-more'>{more}</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Programs
