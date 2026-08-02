import React from 'react';
import { Link } from 'react-router-dom';
import ileraeko from '../../../assets/All/import/ileraeko-logo.png';
import lshs from '../../../assets/All/import/lshs-logo.png';
import ekosha from '../../../assets/All/import/ekosha-logo.png';

const data = [
  {
    id: 1,
    image: ileraeko,
    name: 'ILERA EKO',
    description: 'A social health insurance plan under the Lagos State Health Scheme consisting of basic primary and some secondary care suitable for formal and informal sector workers in Lagos State.',
    link: 'https://ileraeko.com',
    external: true,
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-50',
  },
  {
    id: 2,
    image: lshs,
    name: 'LSHS Regulation',
    description: 'Established to ensure that all residents of the state have access to healthcare services at affordable rates, thereby protecting families from financial distress.',
    link: '/maintenance',
    external: false,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    image: ekosha,
    name: 'EKOSHA',
    description: 'The resource mobilization arm of LASHMA responsible for identifying the vulnerable and providing additional funds to purchase health insurance for them.',
    link: 'https://lashma.com/ekosha',
    external: true,
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-50',
  },
];

const Programs = () => {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">Our Programs</h2>
          <p className="section-subheading">
            Delivering quality healthcare through innovative programs and strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.map(({ id, image, name, description, link, color, bgColor, external }) => {
            const ctaClass =
              'inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors duration-200';
            const cta = (
              <>
                Learn More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            );

            return (
              <div
                key={id}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className={`${bgColor} p-8 flex items-center justify-center`}>
                  <img
                    src={image}
                    alt={name}
                    className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">{name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>

                  {external ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ctaClass}
                      style={{ color: '#d97306' }}
                    >
                      {cta}
                    </a>
                  ) : (
                    <Link to={link} className={ctaClass} style={{ color: '#d97306' }}>
                      {cta}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
