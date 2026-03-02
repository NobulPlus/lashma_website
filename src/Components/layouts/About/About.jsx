import React from 'react';
import about_img from '../../../assets/All/import/backdrop.png';
import play_icon from '../../../assets/All/import/play-icon.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — Image */}
          <div className="relative w-full lg:w-5/12 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={about_img}
                alt="About LASHMA"
                className="w-full h-auto object-cover"
              />
              {/* Play button overlay */}
              <Link
                to="https://youtu.be/ZfI8Qo8E7U8"
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="#f28201">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(242,130,1,0.15), rgba(245,158,11,0.15))' }} />
          </div>

          {/* Right — Text */}
          <div className="flex-1">
            <span className="section-label">Who We Are</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 font-heading" style={{ lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              About LASHMA
            </h2>

            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                Lagos State Health Management Agency (LASHMA) was established by the enabling act No. 14 of 25 May, 2015 to ensure that all residents of Lagos State including Public Servants have access to affordable and quality health care.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Through the Scheme, people living in Lagos can be protected from financial distress resulting from huge medical bills.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our Vision is to improve the overall health indices of Lagos State through Universal Health Coverage for all residents.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 text-white font-semibold rounded-full no-underline transition-all duration-300 hover:-translate-y-0.5 text-sm"
              style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
            >
              Read More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
