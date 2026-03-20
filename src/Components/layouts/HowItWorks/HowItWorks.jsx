import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Register Online',
    description: 'Create your account on the ILERA EKO portal in minutes. Individual, family, or group enrollment available.',
    color: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Choose a Plan',
    description: 'Browse flexible health plans crafted for every budget — from individuals to large corporate groups.',
    color: 'from-cyan-500 to-sky-600',
    lightBg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Pick a Hospital',
    description: 'Select from 451+ accredited care providers across Lagos State — GPs, specialists & hospitals near you.',
    color: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    number: '04',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Access Quality Care',
    description: 'Walk into any ILERA EKO provider and receive world-class healthcare — no huge bills, no stress.',
    color: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
    border: 'border-rose-100',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f172a]">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f28201, transparent)' }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 px-3 py-1 rounded-full" style={{ color: '#f28201', background: 'rgba(242,130,1,0.12)' }}>
            Getting Started
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-heading" style={{ letterSpacing: '-0.02em' }}>
            How It Works
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Getting covered with ILERA EKO is simple and fast. Follow these four steps and start accessing quality healthcare today.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants} className="relative">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 z-10">
                  <div className="border-t-2 border-dashed border-slate-600 w-full mt-[-1px]" />
                </div>
              )}

              <div className="group bg-slate-800/60 border border-slate-700/60 rounded-2xl p-7 h-full hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                {/* Step number tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <span className="text-5xl font-extrabold text-slate-700 font-heading leading-none select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 font-heading">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://lashma.myclinify.com/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
          >
            Start Enrollment Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
