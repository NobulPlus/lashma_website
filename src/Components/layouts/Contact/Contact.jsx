import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    contact_head_subtitle: 'Office Address',
    contact_head_text_icon: <i className="text-3xl text-orange-500 fa-solid fa-map-pin"></i>,
    contact_head_body: 'Good Shepherd House, Opposite Secretariat Gate, Alausa, Ikeja, Lagos.',
    contact_head_button: <Link to="https://maps.app.goo.gl/NCT5rVk365iwaQ5Z9" target="_blank" rel="noopener noreferrer" className="text-white no-underline">Find Us</Link>
  },
  {
    id: 2,
    contact_head_subtitle: 'Call Us',
    contact_head_text_icon: <i className="text-3xl text-orange-500 fa-solid fa-phone"></i>,
    contact_head_body: '(+234) 0800-4537-2356',
    contact_head_button: <Link to="tel:+234080045372356" className="text-white no-underline">Make A Call</Link>
  },
  {
    id: 3,
    contact_head_subtitle: 'WhatsApp',
    contact_head_text_icon: <i className="text-3xl text-orange-500 fa-brands fa-whatsapp"></i>,
    contact_head_body: 'Chat with us on WhatsApp!',
    contact_head_button: <Link to="https://wa.me/234080045372356" target="_blank" rel="noopener noreferrer" className="text-white no-underline">Say Hi!</Link>
  },
  {
    id: 4,
    contact_head_subtitle: 'Email Us',
    contact_head_text_icon: <i className="text-3xl text-orange-500 fa-solid fa-envelope-open-text"></i>,
    contact_head_body: 'ileraeko@lashma.com',
    contact_head_button: <Link to="mailto:ileraeko@lashma.com" className="text-white no-underline">Email Us</Link>
  },
  {
    id: 5,
    contact_head_subtitle: 'Follow on Twitter',
    contact_head_text_icon: <i className="text-3xl text-orange-500 fa-brands fa-twitter"></i>,
    contact_head_body: 'Stay updated with our latest news!',
    contact_head_button: <Link to="https://twitter.com/lashma" target="_blank" rel="noopener noreferrer" className="text-white no-underline">Follow Us</Link>
  },
  {
    id: 6,
    contact_head_subtitle: 'Like on Facebook',
    contact_head_text_icon: <i className="text-3xl text-orange-500 fa-brands fa-facebook"></i>,
    contact_head_body: 'Join our community on Facebook!',
    contact_head_button: <Link to="https://facebook.com/lashma" target="_blank" rel="noopener noreferrer" className="text-white no-underline">Like Us</Link>
  }
];

const Contact = () => {
  return (
    <div className="max-w-screen-xl pt-[13em] mx-auto px-6">
      <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">Get in Touch</h2>
      <p className="mb-12 text-center text-gray-600">
        We are here to assist you! Choose your preferred way to contact us.
      </p>
      
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.map(({ id, contact_head_body, contact_head_subtitle, contact_head_text_icon, contact_head_button }) => (
          <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl p-6">
            <div className="flex flex-col items-center mb-4">
              {contact_head_text_icon}
              <h3 className="mt-2 text-lg font-semibold text-gray-800">{contact_head_subtitle}</h3>
            </div>
            <p className="mb-6 text-sm text-center text-gray-600">{contact_head_body}</p>
            <div className="text-center">
              <button className="px-4 py-2 text-sm text-white transition duration-300 transform bg-orange-500 rounded-lg hover:scale-105">
                {contact_head_button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
