import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: 'Explore Our Plans',
    icon: 'fa-solid fa-file-medical',
    description: 'Carefully crafted plans to ensure you, your family, or your team have complete coverage for all medical needs.',
    link: '/plan',
    color: 'from-orange-500 to-amber-400',
  },
  {
    id: 2,
    title: '24/7 Support',
    icon: 'fa-solid fa-headset',
    description: 'Our dedicated support team is available around the clock to assist you with anything you need.',
    link: '/contact',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 3,
    title: 'Become A Provider',
    icon: 'fa-solid fa-user-doctor',
    description: 'Join our network and enjoy prompt, paperless settlement of claims with ongoing support.',
    link: 'https://www.ileraeko.com',
    external: true,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 4,
    title: 'Quality Regulation',
    icon: 'fa-solid fa-hospital-user',
    description: 'Ensuring quality health service through effective regulation and expanding access to licensed HMO care.',
    link: '/coming-soon',
    color: 'from-purple-500 to-indigo-400',
  },
];

const Card = () => {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map(({ id, title, icon, description, link, color, external }) => {
            const inner = (
              <>
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${color}`} />
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${icon} text-white text-lg`} style={{ color: 'white' }} />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">{title}</h3>
                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
                  {/* Arrow */}
                  <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-orange-500 transition-colors duration-200">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </>
            );
            return external ? (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 no-underline"
              >
                {inner}
              </a>
            ) : (
              <Link
                key={id}
                to={link}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 no-underline"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
