import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const stats = [
  {
    value: 1409992,
    suffix: '+',
    label: 'Lives Covered',
    icon: 'fa-solid fa-users',
    color: 'from-orange-500 to-amber-400',
  },
  {
    value: 449,
    suffix: '+',
    label: 'Care Providers',
    icon: 'fa-solid fa-hospital',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    value: 78432,
    suffix: '+',
    label: 'Maternal Cases',
    icon: 'fa-solid fa-heart-pulse',
    color: 'from-rose-500 to-pink-400',
  },
];

const Stat = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
      <section className="relative overflow-hidden bg-white">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-50 rounded-full opacity-60" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-50 rounded-full opacity-60" />
        </div>

        <div className="section-container relative">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Impact & Reach</span>
            <h2 className="section-heading">Our Numbers Speak</h2>
            <p className="section-subheading">
              With over 449 healthcare providers and more than 1.4 million lives registered on the scheme
              as of January 2026, and growing.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5`}>
                  <i className={`${stat.icon} text-white text-xl`} style={{ color: 'white' }} />
                </div>

                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 font-heading" style={{ lineHeight: 1.1 }}>
                  {counterState && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </h3>

                {/* Label */}
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider m-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Stat;