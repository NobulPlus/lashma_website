import React from 'react';
import { Link } from 'react-router-dom';

const Break = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏥</span>
          <p className="text-white font-semibold text-base sm:text-lg m-0 leading-snug">
            Need to change your hospital?
          </p>
        </div>
        <Link
          to="https://bit.ly/change-my-ileraeko-provider"
          className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold text-sm px-6 py-2.5 rounded-full no-underline hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
          style={{ color: '#d97306' }}
        >
          Change Provider
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Break;
