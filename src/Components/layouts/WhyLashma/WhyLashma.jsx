import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Free Drug Access',
    description: 'Enrolled members receive essential medications at zero cost through our community pharmacy network.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '451+ Care Providers',
    description: 'A sprawling network of accredited hospitals, clinics, and specialists spread across all Lagos districts.',
    gradient: 'from-cyan-500 to-sky-600',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Full Maternity Cover',
    description: 'Comprehensive antenatal, delivery, and postnatal care — over 79,000 maternal cases handled and counting.',
    gradient: 'from-rose-500 to-pink-600',
    glow: 'rgba(244,63,94,0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Telemedicine Services',
    description: 'See a licensed doctor from anywhere in Lagos via video or phone — prescriptions and referrals included.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24 / 7 Support',
    description: 'Our dedicated helpdesk is always reachable for claims, complaints, and hospital change requests.',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Government-Backed Security',
    description: 'LASHMA is a Lagos State government agency — your premium and your health are in safe, regulated hands.',
    gradient: 'from-indigo-500 to-blue-600',
    glow: 'rgba(99,102,241,0.15)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const WhyLashma = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Subtle top wave divider */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #f28201, #8b5cf6, #06b6d4)' }} />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f28201', background: 'rgba(242,130,1,0.1)' }}>
            Why LASHMA
          </span>
          <h2 className="section-heading">Built for Every Lagos Resident</h2>
          <p className="section-subheading">
            From free drugs to telemedicine, our scheme is designed around what you actually need — affordable, accessible, quality healthcare.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${feature.glow}, transparent 70%)` }}
              />

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-gray-900 font-bold text-lg mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLashma;
