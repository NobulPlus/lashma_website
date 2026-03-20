import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Rich gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1040 40%, #0f172a 100%)' }}
      />

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#f28201' }} />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#8b5cf6' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10" style={{ background: '#06b6d4' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(242,130,1,0.15)', color: '#f59e0b', border: '1px solid rgba(242,130,1,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
            Enrollment Open
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 font-heading" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Ready to Get{' '}
            <span className="inline-block" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #f28201, #f59e0b, #fb923c)' }}>
              Covered?
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join over <strong className="text-white">1.4 million</strong> Lagos residents already protected by the ILERA EKO health scheme. Enrollment is quick, simple, and affordable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://lashma.myclinify.com/register"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
            >
              Enroll Now — It's Free
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <Link
              to="/plan"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
            >
              Explore Plans
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust micro-copy */}
          <p className="text-slate-600 text-xs mt-8 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Government-backed · Secure · Regulated by the Lagos State Government
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
