import { motion } from 'framer-motion';

const surveys = [
  {
    title: 'Public Awareness',
    subtitle: 'Ilera Eko Survey',
    description: 'How well is ILERA EKO known in your community? Your voice shapes our outreach.',
    href: 'https://forms.gle/7GCsckzE2QFyVMGk7',
    accent: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.25)',
    ring: 'group-hover:ring-violet-400/40',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Enrollee Satisfaction',
    subtitle: 'Member Feedback',
    description: 'Share your experience as an ILERA EKO enrollee so we can improve care delivery.',
    href: 'https://forms.gle/nrBCmERivS3pM2NU9',
    accent: 'from-amber-500 to-orange-600',
    glow: 'rgba(242,130,1,0.3)',
    ring: 'group-hover:ring-amber-400/40',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Diagnostic Expansion',
    subtitle: 'Services Survey',
    description: 'Tell us how diagnostic services can better meet your healthcare needs across Lagos.',
    href: 'https://forms.gle/y7jA3M8syNEXtGnt6',
    accent: 'from-cyan-500 to-sky-600',
    glow: 'rgba(6,182,212,0.25)',
    ring: 'group-hover:ring-cyan-400/40',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const SurveyBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f172a]">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20"
          style={{ background: '#f28201' }}
        />
        <div
          className="absolute -bottom-32 right-1/5 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: '#8b5cf6' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-10"
          style={{ background: '#06b6d4' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ background: 'rgba(242,130,1,0.15)', color: '#f59e0b', border: '1px solid rgba(242,130,1,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
              Your Voice Matters
            </span>

            <h2
              className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-3"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              Shape the future of{' '}
              <span
                className="inline-block"
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundImage: 'linear-gradient(to right, #f28201, #f59e0b, #fb923c)',
                }}
              >
                ILERA EKO
              </span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Three quick surveys. Real impact. Help LASHMA improve coverage, care, and services for every Lagos resident.
            </p>
          </div>

          <p className="text-slate-500 text-sm font-medium lg:text-right shrink-0">
            Takes about 2 minutes each
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {surveys.map((survey, index) => (
            <motion.a
              key={survey.href}
              href={survey.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className={`group relative flex flex-col rounded-2xl p-6 md:p-7 no-underline overflow-hidden border border-slate-700/60 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-500/80 hover:bg-slate-800/80 ring-1 ring-transparent ${survey.ring}`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${survey.glow}, transparent 65%)` }}
              />

              <div className="relative flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${survey.accent} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {survey.icon}
                </div>
                <span className="text-4xl font-extrabold text-slate-700/80 font-heading leading-none select-none group-hover:text-slate-600 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="relative text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">
                {survey.subtitle}
              </p>
              <h3 className="relative text-white font-bold text-xl font-heading mb-3 leading-snug">
                {survey.title}
              </h3>
              <p className="relative text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {survey.description}
              </p>

              <div className="relative mt-auto inline-flex items-center gap-2 text-sm font-bold text-white">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 group-hover:shadow-lg"
                  style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
                >
                  Take Survey
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SurveyBanner;
