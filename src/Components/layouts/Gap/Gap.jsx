import React from 'react';
import { Link } from 'react-router-dom';
import GapBackground from '../../../assets/All/import/gap-bg.jpg';

const Gap = () => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${GapBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-heading mb-2" style={{ letterSpacing: '-0.02em' }}>
              Get Health Insurance.<br />
              Get Wealth Bonus.<br />
              <span style={{ color: '#f28201' }}>Get Living.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              We leverage technology to redefine quality healthcare — making it simple, affordable, flexible and holistic for every Lagos resident.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="https://lashma.myclinify.com/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full no-underline hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full no-underline hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gap;
