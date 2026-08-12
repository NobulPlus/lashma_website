import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const stats = [
  {
    value: 1607100,
    suffix: '+',
    label: 'Lives Covered',
    icon: 'fa-solid fa-users',
    color: 'from-orange-500 to-amber-400',
  },
  {
    value: 635,
    suffix: '+',
    label: 'Care Providers',
    icon: 'fa-solid fa-hospital',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    value: 89102,
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
              We have over 631 Healthcare Facilities and more than 1.60 million lives registered on the scheme
              as of the end of July 2026, with numbers continuing to grow.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl w-full h-full min-h-[220px] p-6 sm:p-8 text-center border border-gray-100 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-4 overflow-hidden"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${stat.icon} text-white text-xl`} style={{ color: 'white' }} />
                </div>

                {/* Number */}
                <h3 className="w-full max-w-full px-1 text-[clamp(1.9rem,6vw,3.5rem)] sm:text-4xl md:text-5xl font-extrabold text-gray-900 font-heading leading-none tracking-tight whitespace-nowrap tabular-nums">
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
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider m-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Stat;
