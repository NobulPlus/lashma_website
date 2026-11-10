import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, HeartPulse, ArrowRight, Maximize2, X, ShieldCheck } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1222] via-[#111c35] to-[#0b1222] text-white py-14 md:py-20 border-y border-amber-500/20 shadow-2xl">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{ background: '#f28201' }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20"
          style={{ background: '#eab308' }}
        />
        <div
          className="absolute top-1/2 left-3/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: '#f97316' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
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
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-5 self-start bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 shadow-sm">
              <Award className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>A Major Milestone</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse ml-1" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight text-white mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                2 MILLION+ ENROLLEES
              </span>
              <span className="text-white block text-2xl sm:text-3xl md:text-4xl font-extrabold mt-1">
                2 Million Lives. One Healthier Lagos.
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl font-light">
              Together, we are advancing access to affordable, quality healthcare and building a healthier Lagos State.
              With over <strong className="text-white font-semibold">2,000,000+ residents</strong> protected under the <span className="text-orange-400 font-medium">ILERA EKO</span> scheme, we remain steadfast in our promise: <em className="text-amber-300 not-italic font-medium">leaving no one behind</em>.
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 max-w-2xl">
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1 justify-center sm:justify-start">
                  <Users className="w-4 h-4" />
                  <span className="text-xs uppercase font-medium text-slate-400">Enrollees</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">2.0M+</div>
                <div className="text-[11px] text-slate-400 hidden sm:block">Lives Protected</div>
              </div>

              <div className="text-center sm:text-left border-x border-white/10 px-2 sm:px-4">
                <div className="flex items-center gap-1.5 text-orange-400 mb-1 justify-center sm:justify-start">
                  <HeartPulse className="w-4 h-4" />
                  <span className="text-xs uppercase font-medium text-slate-400">Network</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">640+</div>
                <div className="text-[11px] text-slate-400 hidden sm:block">Approved Facilities</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1 justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs uppercase font-medium text-slate-400">Care Quality</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">100%</div>
                <div className="text-[11px] text-slate-400 hidden sm:block">Mandate Driven</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://lashma.myclinify.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white text-sm bg-gradient-to-r from-[#f28201] to-[#e65100] hover:from-[#e65100] hover:to-[#f28201] shadow-lg shadow-orange-900/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Join the 2 Million — Enroll Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/plan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white text-sm bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Health Plans
              </Link>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs font-medium text-amber-300 hover:text-white hover:bg-white/5 transition-colors sm:self-center"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Full Poster</span>
              </button>
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
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 hover:border-amber-400 transition-all duration-500 max-w-sm sm:max-w-md w-full bg-slate-900/60 backdrop-blur-sm"
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

              {/* Badge overlay on top-right */}
              <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#f28201] text-white text-[11px] font-bold shadow-lg uppercase tracking-wider flex items-center gap-1">
                <span>Official Milestone</span>
              </div>
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

