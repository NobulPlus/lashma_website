import React from 'react';
import { motion } from 'framer-motion';

const trustPills = [
  { icon: '🏛️', text: 'Government Regulated' },
  { icon: '✅', text: 'No Hidden Fees' },
  { icon: '⚡', text: 'Instant Coverage' },
];

const stats = [
  { value: '1.4M+', label: 'Lives Covered' },
  { value: '451+', label: 'Care Providers' },
  { value: '4', label: 'Flexible Plans' },
];

const Head = () => {
  return (
    <section className="relative overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #0b0f1a 0%, #111827 60%, #0f172a 100%)' }}>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #f28201, transparent)' }} />
        <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #f28201, #8b5cf6, transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(242,130,1,0.12)', color: '#f59e0b', border: '1px solid rgba(242,130,1,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
            ILERA EKO Health Scheme
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 font-heading mx-auto max-w-4xl"
          style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Health Insurance{' '}
          <span
            style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(to right, #f28201, #f59e0b, #fb923c)',
            }}
          >
            Built for You
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Cost-effective, flexible healthcare plans designed for every Lagos resident — individuals, families, seniors, and the diaspora. Choose a plan and start accessing quality care today.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {trustPills.map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-slate-300"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span>{p.icon}</span>
              {p.text}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#plans"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
          >
            See All Plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="https://lashma.myclinify.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Enroll Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-16 pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-heading" style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {s.value}
              </div>
              <div className="text-slate-500 text-xs uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave shape */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 64L1440 64L1440 0C1200 48 960 64 720 56C480 48 240 16 0 0L0 64Z" fill="#f8f9fc" />
        </svg>
      </div>
    </section>
  );
};

export default Head;
