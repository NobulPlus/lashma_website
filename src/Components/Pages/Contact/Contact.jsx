import React from 'react'
import Gmaps from '../../layouts/GMaps/Gmaps'
import ContactUs from '../../layouts/Contact/Contact'
import ContactForm from '../../layouts/Contact/ContactForm'


const Contact = () => {
  return (
    <>
      <Gmaps />
        <div className="container">
          <ContactUs />
          <ContactForm />
        </div>
    </>
  )
}

export default Contact
