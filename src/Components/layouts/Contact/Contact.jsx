import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    contact_head_subtitle: 'Office Address',
    contact_head_text_icon: <i class="fa-solid fa-map-pin"></i>,
    contact_head_body: '17/19 Kafi St, Oregun, Lagos',
    contact_head_button: <Link to='https://maps.app.goo.gl/NCT5rVk365iwaQ5Z9'>Find Us</Link>
  },
  {
    id: 2,
    contact_head_subtitle: 'Place A Call !',
    contact_head_text_icon: <i class="fa-solid fa-headset"></i>,
    contact_head_body: '(234) 0800-4537-2356',
    contact_head_button:<Link to='tel:+234080045372356'>Make A Call</Link>
  },
  {
    id: 3,
    contact_head_subtitle: 'Send A Message',
    contact_head_text_icon: <i class="fa-solid fa-user-gear"></i>,
    contact_head_body: '(234) 0800-4537-2356',
    contact_head_button:<Link to='https://wa.me/234080045372356'>Say Hi!</Link>
  },
  {
    id: 4,
    contact_head_subtitle: 'Email Address',
    contact_head_text_icon: <i class="fa-solid fa-hospital-user"></i>,
    contact_head_body: 'ileraeko@lashma.com.',
    contact_head_button:<Link to='mailto:ileraeko.lashma.com'>Email Us</Link>
  }
]

const Contact = () => {
  return (
    <>
      <div className="contact_container contact_section">
        {
          data.map(({id, contact_head_body, contact_head_subtitle, contact_head_text_icon, contact_head_button}) =>{
            return (
              <div className="card-section" key={id}>
                <div className="section_1 card">
                  <div className="contact_head">
                    {contact_head_text_icon}
                    <h3>{contact_head_subtitle}</h3>
                  </div>
                  <div className="contact_head-body">
                    {contact_head_body}
                  </div>
                </div>
                <div className="contact_head-button">
                  <button className='primary-btn contact-btn'>{contact_head_button}</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Contact
