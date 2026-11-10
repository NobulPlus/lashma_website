import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Maximize2, X } from 'lucide-react';
import milestonePoster from '../../assets/images/200m.jpeg';

const MilestoneBanner = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <section className="relative overflow-hidden bg-[#fff8ef] text-slate-900 py-16 md:py-24 border-y border-orange-100">
      {/* Single soft glow behind the poster */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-[0.15]"
          style={{ background: '#f28201' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Milestone Text & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-orange-700 mb-4">
              <Award className="w-4 h-4" />
              Milestone reached
            </p>

            {/* Headline: one big number, one plain statement */}
            <h2 className="font-heading text-slate-900 mb-5">
              <span className="block text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-orange-600">
                2,000,000+
              </span>
              <span className="block text-2xl sm:text-3xl font-bold leading-snug mt-3">
                Lagos residents now covered by ILERA EKO
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Every enrollee can get affordable, quality care at more than{' '}
              <strong className="text-slate-900 font-semibold">640 approved facilities</strong> across the state.
              If you or your family are not covered yet, there is a plan for you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://lashma.myclinify.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white text-sm bg-gradient-to-r from-[#f28201] to-[#e65100] hover:from-[#e65100] hover:to-[#f28201] shadow-lg shadow-orange-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Join the 2 Million — Enroll Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/plan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-slate-800 text-sm bg-white hover:bg-orange-50 border border-slate-300 hover:border-orange-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Health Plans
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Poster Image Preview (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsLightboxOpen(true)}
              aria-label="View full milestone poster"
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/20 ring-1 ring-slate-900/10 hover:ring-orange-400/60 transition-all duration-300 max-w-sm sm:max-w-md w-full -rotate-1 hover:rotate-0"
              title="Click to view full poster"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  Click to Expand
                </span>
              </div>

              {/* Celebration Image */}
              <img
                src={milestonePoster}
                alt="LASHMA ILERA EKO - 2 Million Enrollees Celebration Poster"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 block"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="2 Million Enrollees Milestone Poster"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-400/40"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close poster"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-2 sm:p-3 bg-slate-950 flex justify-center items-center">
                <img
                  src={milestonePoster}
                  alt="LASHMA ILERA EKO - 2 Million Enrollees Celebration Poster Full Resolution"
                  className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>

              <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <p className="text-white text-sm font-bold font-heading">
                    2 Million Lives. One Healthier Lagos.
                  </p>
                  <p className="text-xs text-slate-400">
                    Lagos State Health Management Agency (LASHMA) &amp; ILERA EKO
                  </p>
                </div>
                <a
                  href="https://lashma.myclinify.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow transition-colors"
                >
                  <span>Enroll Today</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MilestoneBanner;

