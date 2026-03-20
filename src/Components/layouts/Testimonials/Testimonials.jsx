import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Before LASHMA, I spent thousands every time my children fell sick. Now our whole family is covered and I don't worry about hospital bills anymore.",
    name: 'Adaobi Nwosu',
    title: 'Market trader, Alaba',
    initials: 'AN',
    gradient: 'from-violet-500 to-purple-600',
    stars: 5,
  },
  {
    quote: "I delivered my baby at a great hospital and paid nothing out of pocket. LASHMA's maternity cover is a true blessing for mothers in Lagos.",
    name: 'Fatimah Bello',
    title: 'Civil servant, Ikeja',
    initials: 'FB',
    gradient: 'from-rose-500 to-pink-600',
    stars: 5,
  },
  {
    quote: "The telemedicine service saved me a long trip to the hospital. I spoke to a doctor, got a prescription, and was feeling better by evening.",
    name: 'Chukwuemeka Okafor',
    title: 'Entrepreneur, Surulere',
    initials: 'CO',
    gradient: 'from-cyan-500 to-sky-600',
    stars: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f28201, transparent)' }} />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f28201', background: 'rgba(242,130,1,0.12)' }}>
            Beneficiary Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-heading" style={{ letterSpacing: '-0.02em' }}>
            Real People, Real Relief
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Over 1.4 million Lagos residents have experienced the difference LASHMA makes. Here are a few of their stories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Quotation mark */}
              <div className="text-5xl font-serif leading-none mb-4 select-none" style={{ color: 'rgba(242,130,1,0.35)' }}>
                "
              </div>

              <StarRating count={t.stars} />

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm m-0">{t.name}</p>
                  <p className="text-slate-500 text-xs m-0">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
