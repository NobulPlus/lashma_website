import React from 'react'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    contact_head_subtitle: 'Office Address',
    contact_head_text_icon: <i className="fa-solid fa-map-pin"></i>,
    contact_head_body: 'Good Shepherd House, Opposite Secretariat Gate, Alausa, Ikeja Lagos.',
    contact_head_button: <Link to='https://maps.app.goo.gl/NCT5rVk365iwaQ5Z9' className="text-white no-underline">Find Us</Link>
  },
  {
    id: 2,
    contact_head_subtitle: 'Place A Call !',
    contact_head_text_icon: <i className="fa-solid fa-phone"></i>,
    contact_head_body: '(234) 0800-4537-2356',
    contact_head_button: <Link to='tel:+234080045372356' className="text-white no-underline">Make A Call</Link>
  },
  {
    id: 3,
    contact_head_subtitle: 'Send A Message',
    contact_head_text_icon: <i className="fa-brands fa-whatsapp"></i>,
    contact_head_body: '(234) 0800-4537-2356',
    contact_head_button: <Link to='https://wa.me/234080045372356' className="text-white no-underline">Say Hi!</Link>
  },
  {
    id: 4,
    contact_head_subtitle: 'Email Address',
    contact_head_text_icon: <i className="fa-solid fa-envelope-open-text"></i>,
    contact_head_body: 'ileraeko@lashma.com.',
    contact_head_button: <Link to='mailto:ileraeko.lashma.com' className="text-white no-underline">Email Us</Link>
  }
]

const Contact = () => {
  return (
    <div className="max-w-screen-xl pt-[13em] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {data.map(({id, contact_head_body, contact_head_subtitle, contact_head_text_icon, contact_head_button}) => (
        <div key={id} className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
          <div className="p-6 text-center">
            <div className="flex flex-col items-center mb-4">
              {contact_head_text_icon}
              <h3 className="mt-2 text-lg text-gray-800">{contact_head_subtitle}</h3>
            </div>
            <div className="text-sm text-gray-600 mb-6">{contact_head_body}</div>
          </div>
          <div className="text-center mb-6">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm transition duration-300 transform hover:bg-orange-500 hover:scale-105">
              {contact_head_button}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contact
