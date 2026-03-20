import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import img1 from '../../../assets/All/import/Partner/bono.png';
import img2 from '../../../assets/All/import/Partner/arfh.png';
import img3 from '../../../assets/All/import/Partner/6334.png';
import img4 from '../../../assets/All/import/Partner/ccsi.png';
import img5 from '../../../assets/All/import/Partner/civic.png';
import img6 from '../../../assets/All/import/Partner/dfaf.png';
import img7 from '../../../assets/All/import/Partner/firstbank1.png';
import img8 from '../../../assets/All/import/Partner/global_fund.png';
import img9 from '../../../assets/All/import/Partner/HP.png';
import img10 from '../../../assets/All/import/Partner/isf.png';
import img11 from '../../../assets/All/import/Partner/lstef.png';
import img12 from '../../../assets/All/import/Partner/mint.png';
import img13 from '../../../assets/All/import/Partner/senator.png';
import img14 from '../../../assets/All/import/Partner/sterling3.png';
import img15 from '../../../assets/All/import/Partner/swipin.png';
import img16 from '../../../assets/All/import/Partner/unicef.png';
import img17 from '../../../assets/All/import/Partner/USAID.png';
import img18 from '../../../assets/All/import/Partner/wema.png';

const rowA = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const rowB = [img10, img11, img12, img13, img14, img15, img16, img17, img18];

const LogoCard = ({ img, index }) => (
  <div
    className="mx-6 flex items-center justify-center bg-white rounded-xl border border-gray-100 shadow-soft px-6 py-4 hover:shadow-card hover:border-orange-100 transition-all duration-300 group"
    style={{ minWidth: '140px', height: '80px' }}
  >
    <img
      src={img}
      alt={`Partner ${index + 1}`}
      className="h-10 w-auto object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

const trustStats = [
  { value: '18+', label: 'Strategic Partners', icon: '🤝' },
  { value: 'Global', label: 'International Funding Bodies', icon: '🌍' },
  { value: '10+', label: 'Financial Institutions', icon: '🏦' },
];

const Partner = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #fff 100%)' }}>
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(to right, #f28201, #8b5cf6, #06b6d4)' }} />

      <div className="section-container pb-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f28201', background: 'rgba(242,130,1,0.1)' }}>
            Our Ecosystem
          </span>
          <h2 className="section-heading">Partners &amp; Stakeholders</h2>
          <p className="section-subheading">
            We collaborate with global health organisations, financial institutions, and civil society bodies to deliver world-class healthcare to every Lagos resident.
          </p>
        </motion.div>
      </div>

      {/* Dual marquee rows */}
      <div className="relative py-2 space-y-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f8f9fc, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f8f9fc, transparent)' }} />

        {/* Row 1 — left to right */}
        <Marquee pauseOnHover speed={35} gradient={false} direction="left">
          {rowA.map((img, i) => <LogoCard key={i} img={img} index={i} />)}
        </Marquee>

        {/* Row 2 — right to left */}
        <Marquee pauseOnHover speed={30} gradient={false} direction="right">
          {rowB.map((img, i) => <LogoCard key={i} img={img} index={i + 9} />)}
        </Marquee>
      </div>

      {/* Trust statistics strip */}
      <div className="section-container pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {trustStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-soft">
              <span className="text-3xl mb-2">{stat.icon}</span>
              <span className="text-2xl font-extrabold text-gray-900 font-heading">{stat.value}</span>
              <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
