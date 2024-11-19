import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import contactImg from '../../../assets/All/import/contact.jpg'

const ContactForm = () => {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z7a02jl', 'template_j3qfuva', form.current, {
      publicKey: 'q4Z7gYxrQsvJacZH3',
    })
      .then(
        (result) => {
          console.log('SUCCESS', result.text);
          console.log('message sent successfully')
          // Show success message and confirm reload
          if (confirm("Your message has been sent successfully! Press OK to continue?")) {
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
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
        <div className="bg-orange-600 text-white p-6 text-center">
          <h3 className="text-2xl font-light tracking-wider">Let Us Connect With You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
          <div className="flex justify-center items-center">
            <img src={contactImg} alt="Contact" className="w-full h-auto" />
          </div>
          <div>
            <form ref={form} onSubmit={sendMessage} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="font-bold text-gray-700">FullName:</label>
                <input type="text" name="user_name" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_email" className="font-bold text-gray-700">Email:</label>
                <input type="email" name="user_email" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_phone" className="font-bold text-gray-700">Phone Number:</label>
                <input type="text" name="user_phone" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="font-bold text-gray-700">Subject:</label>
                <input type="text" name="subject" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-bold text-gray-700">Message:</label>
                <textarea name="message" className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
              </div>
              <div className="space-y-2">
                <button type="submit" className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md transition-all duration-300 hover:bg-orange-700 hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
