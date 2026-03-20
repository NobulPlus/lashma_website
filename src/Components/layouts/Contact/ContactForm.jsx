import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import contactImg from '../../../assets/All/import/contact.jpg';

const subjects = [
  'Enrollment Enquiry',
  'Plan Information',
  'Provider / Hospital Query',
  'Claims Support',
  'Premium Payment',
  'Technical Issue',
  'Other',
];

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendMessage = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm('service_z7a02jl', 'template_j3qfuva', form.current, { publicKey: 'q4Z7gYxrQsvJacZH3' })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 6000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 6000);
        },
      );
  };

  return (
    <section className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">Send a Message</span>
            <h2 className="section-heading">Let Us Connect With You</h2>
            <p className="section-subheading">Fill the form below and our team will get back to you within 24 hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left — image + quick info */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-card mb-6">
                <img src={contactImg} alt="Contact LASHMA" className="w-full h-56 object-cover" />
              </div>

              {/* Office hours */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 space-y-4">
                <h4 className="font-bold text-gray-900 font-heading text-sm uppercase tracking-wider">Office Hours</h4>
                <div className="space-y-2.5 text-sm text-gray-600">
                  {[
                    { day: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
                    { day: 'Sunday / Public Holidays', hours: 'Closed' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between gap-4">
                      <span className="text-gray-500">{row.day}</span>
                      <span className="font-medium text-gray-800 whitespace-nowrap">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    🕐 24/7 support line available via <span className="font-semibold text-gray-600">0800-ILERAEKO</span> for urgent medical issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-card p-8"
            >
              <form ref={form} onSubmit={sendMessage} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="user_name" className="text-xs font-bold text-gray-600 uppercase tracking-wide">Full Name <span className="text-rose-400">*</span></label>
                    <input
                      id="user_name" type="text" name="user_name" required
                      placeholder="e.g. Amina Bello"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="user_email" className="text-xs font-bold text-gray-600 uppercase tracking-wide">Email Address <span className="text-rose-400">*</span></label>
                    <input
                      id="user_email" type="email" name="user_email" required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all"
                    />
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="user_phone" className="text-xs font-bold text-gray-600 uppercase tracking-wide">Phone Number</label>
                    <input
                      id="user_phone" type="tel" name="user_phone"
                      placeholder="+234 80..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-gray-600 uppercase tracking-wide">Subject</label>
                    <select
                      id="subject" name="subject"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all"
                    >
                      <option value="">Select a topic...</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-600 uppercase tracking-wide">Message <span className="text-rose-400">*</span></label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>

                {/* Feedback */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Message sent! We will get back to you within 24 hours.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
