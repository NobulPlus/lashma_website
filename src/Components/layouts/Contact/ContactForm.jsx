import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Contact'
import contactImg from '../../../assets/All/import/contact.jpg'

const ContactForm = () => {
    const form = useRef();

    const sendMessage = (e) => {
        e.preventDefault ();

        emailjs.sendForm('service_z7a02jl', 'template_j3qfuva', form.current, {
                publicKey: 'q4Z7gYxrQsvJacZH3',
            })
            .then(
                (result) => {
                    console.log('SUCCESS', result.text);
                    console.log('message sent successfully')
                    // Show success message and confirm reload
          if (confirm("Your message has been sent successfully! Press OK to continue?"))
            {
                window.location.reload();
            }
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert("There was an error sending your message. Please try again later");
                },
            );
    };
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
                        <form ref={form} onSubmit={sendMessage} className='form-group'>
                            <div class="form-group">
                                <label for="first_name">FullName:</label>
                                <input type="text" name="user_name" required/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" name="user_email" required/>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number:</label>
                                <input type="text" name="user_phone" />
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject:</label>
                                <input type="text" name="subject" />
                            </div>
                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea name="message" required></textarea>
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
