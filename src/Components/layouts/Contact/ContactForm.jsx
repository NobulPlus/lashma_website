import React from 'react'
import './Contact'
import contactImg from '../../../assets/All/import/contact.jpg'

const ContactForm = () => {
  return (
    <>
        <div className="contactForm_container">
            <div className="contactForm">
                <div className="contactForm-head">
                    <h3>Let Us Connect With You</h3>
                </div>
                <div className="contactForm-content">
                    <div className="contactForm-form">
                        <img src={contactImg} alt="" />
                    </div>  
                    <div className="contactForm-image">
                        <form action="#" method="post">
                            <div class="form-group">
                                <label for="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" required/>
                            </div>
                            <div class="form-group">
                                <label for="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" required/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required/>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number:</label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" />
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject:</label>
                                <input type="text" id="subject" name="subject" />
                            </div>
                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default ContactForm
