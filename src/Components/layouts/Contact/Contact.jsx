import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const contactItems = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office Address',
    value: 'Good Shepherd House, Opposite Secretariat Gate, Alausa, Ikeja, Lagos.',
    action: { text: 'Get Directions', href: 'https://maps.app.goo.gl/NCT5rVk365iwaQ5Z9', external: true },
    gradient: 'from-orange-500 to-amber-500',
    glow: 'rgba(249,115,22,0.12)',
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.037 11.037 0 005 5l1.127-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '0800-ILERAEKO (0800-453-72356)\n0800-ASKLASHMA (0800-2755-27462)\n0700-ILERAEKO — Sales Hotline',
    action: { text: 'Call Now', href: 'tel:+2348004537235', external: false },
    gradient: 'from-violet-500 to-indigo-600',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51A12.1 12.1 0 008.5 6c-.65 0-1.3.085-1.944.254-.643.169-1.243.456-1.763.847C3.273 8.007 3 9.303 3 10.65c0 3.53 2.85 7.006 4.139 8.587.21.257.46.548.766.832.307.284.651.544 1.027.766.375.222.78.394 1.2.508.42.114.854.172 1.284.172 1.083 0 2.133-.27 2.992-.804.86-.534 1.486-1.29 1.841-2.22.355-.93.453-1.95.285-2.928l-.062-.181z M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.386a.5.5 0 00.602.634l5.784-1.459A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.508-5.21-1.394l-.374-.22-3.434.866.892-3.327-.243-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat with our support team directly on WhatsApp for fast responses.',
    action: { text: 'Chat With Us', href: 'https://wa.me/2347045358275', external: true },
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.12)',
  },
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'ileraeko@lashma.com',
    action: { text: 'Send Email', href: 'mailto:ileraeko@lashma.com', external: false },
    gradient: 'from-cyan-500 to-sky-600',
    glow: 'rgba(6,182,212,0.12)',
  },
  {
    id: 5,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    label: 'Facebook',
    value: 'Follow us for news, updates, and health awareness campaigns.',
    action: { text: 'Follow Us', href: 'https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL', external: true },
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.12)',
  },
  {
    id: 6,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
    label: 'Instagram',
    value: 'See our events, stories, and community milestones.',
    action: { text: 'Visit Page', href: 'https://www.instagram.com/lashma__?igsh=MTdlMm5zYWVqNzN5MA==', external: true },
    gradient: 'from-rose-500 to-pink-600',
    glow: 'rgba(244,63,94,0.12)',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ContactUs = () => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #0b0f1a 0%, #111827 60%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #f28201, transparent)' }} />
          <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #f28201, #06b6d4, transparent)' }} />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: 'rgba(242,130,1,0.12)', color: '#f59e0b', border: '1px solid rgba(242,130,1,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
              We Are Here To Help
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 font-heading" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Get in{' '}
            <span style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #f28201, #f59e0b)' }}>
              Touch
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            Whether you have questions about enrollment, our health plans, or need support — our team is ready to assist you.
          </motion.p>
        </div>

        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 64L1440 64L1440 0C1200 48 960 64 720 56C480 48 240 16 0 0L0 64Z" fill="#f8f9fc" />
          </svg>
        </div>
      </section>

      {/* ── Contact Cards ────────────────────────────────────────── */}
      <section style={{ background: '#f8f9fc' }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <span className="section-label">Reach Out</span>
            <h2 className="section-heading">Ways to Connect</h2>
            <p className="section-subheading">Choose the channel most convenient for you.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactItems.map((item) => (
              <motion.div key={item.id} variants={cardVariants}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                {/* Content */}
                <h3 className="font-bold text-gray-900 font-heading text-base mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 whitespace-pre-line">{item.value}</p>
                {/* Action */}
                <div className="mt-5">
                  {item.action.external ? (
                    <a href={item.action.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all duration-200"
                      style={{ color: '#f28201' }}>
                      {item.action.text}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </a>
                  ) : (
                    <a href={item.action.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all duration-200"
                      style={{ color: '#f28201' }}>
                      {item.action.text}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
