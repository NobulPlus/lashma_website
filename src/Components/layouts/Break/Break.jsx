import React from 'react';
import { Link } from 'react-router-dom';

const Break = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to right, #7c3aed, #f28201, #f59e0b)' }}>
      {/* Background glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: headline */}
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
          </span>
          <p className="text-white font-semibold text-base sm:text-lg m-0 leading-snug">
            Enrollee Quick Actions
          </p>
        </div>

        {/* Right: two CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="https://bit.ly/change-my-ileraeko-provider"
            className="inline-flex items-center gap-2 bg-white font-bold text-sm px-5 py-2.5 rounded-full no-underline hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
            style={{ color: '#7c3aed' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
            </svg>
            Change Hospital
          </Link>

          <a
            href="https://lashma.myclinify.com/paypolicy"
            className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full no-underline transition-all duration-200 hover:shadow-lg"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Pay Premium
          </a>
        </div>
      </div>
    </section>
  );
};

export default Break;
