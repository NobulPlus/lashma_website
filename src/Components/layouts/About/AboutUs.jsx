import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PSPhoto from '../../../assets/All/Mgt/ps.png';
import adetoroPhoto from '../../../assets/All/Mgt/adetoro.jpg';
import uchePhoto from '../../../assets/All/Mgt/uche.jpeg';
import aramidePhoto from '../../../assets/All/Mgt/IMG2.png';
import tawaPhoto from '../../../assets/All/Mgt/img9.png';

// ─── Images ───────────────────────────────────────────────────────────────────
const genericAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='100%25' height='100%25'%3E%3Crect width='24' height='24' fill='%23e2e8f0'/%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' fill='%2394a3b8'/%3E%3C/svg%3E";

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

// Real photo when available; otherwise a refined studio placeholder with an executive avatar disc
const PersonPhoto = ({ person, className }) =>
  person.photo === genericAvatar ? (
    <div className={`relative flex items-center justify-center bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 overflow-hidden ${className}`}>
      {/* Soft ambient background accent glow */}
      <div
        className={`absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${person.accent}`}
      />
      <div
        className={`absolute -bottom-10 -left-10 w-44 h-44 rounded-full opacity-20 blur-2xl bg-gradient-to-tr ${person.accent}`}
      />

      {/* Refined Executive Avatar Disc */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`w-24 h-24 rounded-2xl shadow-md border-2 border-white/90 flex items-center justify-center bg-gradient-to-br ${person.accent} transition-transform duration-500 group-hover:scale-105`}>
          <span className="text-2xl font-black text-white tracking-wider">
            {getInitials(person.name)}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <img
      src={person.photo}
      alt={person.name}
      className={`object-cover object-[center_15%] ${className}`}
    />
  );

// ─── LinkedIn SVG icon ────────────────────────────────────────────────────────
const LinkedInIcon = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// ─── Leadership / PS ──────────────────────────────────────────────────────────
const leadership = {
  name: 'Dr. Emmanuella Zamba',
  role: 'Permanent Secretary',
  badge: 'PS',
  tagline: 'Championing universal health coverage and healthcare equity for every Lagos resident.',
  bio: "Dr. Emmanuella Zamba is a seasoned public health administrator and policy leader who provides strategic oversight across all LASHMA operations. With a distinguished career in healthcare governance and policy reform, she has led the Agency through significant milestones — expanding enrollment across formal and informal sectors, deepening healthcare provider networks, and anchoring LASHMA's digital transformation agenda. Under her leadership, ILERA EKO has grown into one of Nigeria's most impactful and innovative state-level health insurance programmes.",
  photo: PSPhoto,
  linkedin: 'https://www.linkedin.com/in/dr-emmanuella-zamba-19aaa433/',
  accent: 'from-orange-500 to-amber-500',
};

// ─── Key Management Roles ────────────────────────────────────────────────────
const managementRoles = [
  {
    name: 'Lanre Green',
    acronym: 'HCS',
    role: 'Head, Client Service',
    badge: 'HCS',
    tagline: 'Championing responsive beneficiary support and service excellence across all touchpoints.',
    bio: 'Leads the beneficiary experience team, overseeing the customer service helplines, walk-in service centres, and digital support channels. Champions a culture of empathy, prompt dispute resolution, and continuous responsiveness across every beneficiary engagement.',
    photo: genericAvatar,
    accent: 'from-blue-500 to-indigo-600',
    linkedin: 'https://www.linkedin.com/in/lanre-green-29a93983/',
  },
  {
    name: 'Adetoro Tayo Adetoro',
    acronym: 'HPME',
    role: 'Head, Planning & Monitoring Evaluation',
    badge: 'HPME',
    tagline: 'Driving data-backed policy insights, quality assurance, and continuous program evaluation.',
    bio: "Leads the evaluation of LASHMA's programs and policies, ensuring evidence-based decision making and continuous improvement in service delivery. Oversees data analytics, strategic performance metrics, and compliance across all health insurance schemes.",
    photo: adetoroPhoto,
    accent: 'from-amber-500 to-orange-500',
    linkedin: 'https://www.linkedin.com/in/adetoro-tayo-adetoro-7196ab32/',
  },
  {
    name: 'Olugbenga Fadipe',
    acronym: 'HILM',
    role: 'Head, Ilera Eko Medical',
    badge: 'HILM',
    tagline: 'Ensuring top-tier healthcare quality and robust medical provider coordination statewide.',
    bio: 'Oversees the Ilera Eko Medical operations, managing provider relations, medical audits, and clinical quality assurance. Ensures that all enrolled residents receive dignified, timely, and high-standard clinical care across participating hospitals and clinics.',
    photo: genericAvatar,
    accent: 'from-emerald-500 to-teal-600',
    linkedin: 'https://www.linkedin.com/in/olugbenga-fadipe-52988b1b0/',
  },
  {
    name: 'Uche Igweonyia',
    acronym: 'HSAC',
    role: 'Head, Sales & Agent Coordination',
    badge: 'HSAC',
    tagline: 'Expanding healthcare coverage through grassroots mobilization and agent networks.',
    bio: "Manages LASHMA's sales strategy and field agent distribution network. Drives mass enrollment initiatives across all local government areas through targeted grassroots campaigns, agent capacity building, and innovative field recruitment.",
    photo: uchePhoto,
    accent: 'from-cyan-500 to-sky-600',
    linkedin: 'https://www.linkedin.com/in/uche-igweonyia-377823182/',
  },
  {
    name: 'Olatunji Rotimi',
    acronym: 'HBD',
    role: 'Head, Business Development',
    badge: 'HBD',
    tagline: 'Fostering strategic partnerships, corporate enrollment, and revenue diversification.',
    bio: "Drives LASHMA's growth strategy through strategic partnerships, corporate enrollment campaigns, and institutional collaborations. Leads negotiations with employers, HMOs, diaspora initiatives, and private sector groups to expand coverage under the ILERA EKO scheme.",
    photo: genericAvatar,
    accent: 'from-purple-500 to-indigo-600',
    linkedin: null,
  },
  {
    name: 'Aramide Ojo',
    acronym: 'HOF',
    role: 'Head, Finance',
    badge: 'HOF',
    tagline: 'Safeguarding fiscal discipline, transparent accounting, and prompt claims settlement.',
    bio: 'Oversees all financial planning, budgeting, provider claims processing, and statutory financial reporting for LASHMA. Ensures rigorous fiscal responsibility, audit compliance, and adherence to Lagos State public sector financial management regulations.',
    photo: aramidePhoto,
    accent: 'from-teal-500 to-emerald-600',
    linkedin: 'https://www.linkedin.com/in/aramide-ojo-7b7a8a396/',
  },
  {
    name: 'Oladejo Sefiu',
    acronym: 'HICT',
    role: 'Head, Information and Communication Technology',
    badge: 'HICT',
    tagline: 'Architecting digital health systems, enrollment technology, and cybersecurity.',
    bio: 'Responsible for the strategic direction and operations of all ICT systems and digital infrastructure at LASHMA, including the ILERA EKO digital enrollment portal, telemedicine integration, data pipelines, and IT security.',
    photo: genericAvatar,
    accent: 'from-blue-600 to-cyan-600',
    linkedin: 'https://www.linkedin.com/in/sefiu-oladejo-57799933/',
  },
  {
    name: 'Tawa Oshinowo',
    acronym: 'ETL',
    role: 'Team Lead, EKOSHA',
    badge: 'EKOSHA',
    tagline: 'Advancing social health protection and healthcare equity for vulnerable residents.',
    bio: 'Coordinates the operations, beneficiary verification, and social impact interventions of the EKOSHA programme. Dedicated to ensuring vulnerable and indigent populations across Lagos State receive equitable, dignified healthcare coverage.',
    photo: tawaPhoto,
    accent: 'from-rose-500 to-pink-600',
    linkedin: null,
  },
];

// ─── Core Values ──────────────────────────────────────────────────────────────
const values = [
  { icon: '🏥', title: 'Universal Coverage', desc: 'Every Lagos resident deserves access to quality healthcare regardless of income.' },
  { icon: '🤝', title: 'Accountability', desc: 'We are stewards of public trust, operating transparently in every interaction.' },
  { icon: '💡', title: 'Innovation', desc: 'Pioneering modern digital solutions to make healthcare accessible and seamless.' },
  { icon: '❤️', title: 'Empathy', desc: 'Putting residents at the center of every policy, process, and healthcare interaction.' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// ─── Management Photo Card ────────────────────────────────────────────────────
const MgtCard = ({ person, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50"
  >
    {/* Photo area */}
    <div className="relative overflow-hidden bg-slate-50 h-64 border-b border-slate-100">
      <PersonPhoto
        person={person}
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      {/* Acronym badge */}
      <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-sm bg-gradient-to-r ${person.accent}`}>
        {person.badge}
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      {/* Color accent bar */}
      <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${person.accent} mb-3`} />
      
      <h3 className="font-bold text-gray-900 font-heading text-lg mb-0.5 group-hover:text-orange-600 transition-colors">
        {person.name}
      </h3>
      <p className={`text-xs font-semibold mb-3 bg-gradient-to-r ${person.accent} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }}>
        {person.role}
      </p>

      {/* Tagline / Brief description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
        {person.tagline || person.bio}
      </p>

      {/* Card footer with action & LinkedIn */}
      <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-bold text-orange-500 group-hover:text-orange-600 flex items-center gap-1">
          View Profile
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>

        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="View LinkedIn Profile"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white bg-[#0077B5] hover:bg-[#005885] transition-transform hover:scale-110 shadow-sm"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// ─── Profile Modal ────────────────────────────────────────────────────────────
const ProfileModal = ({ person, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!person) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 md:bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close profile modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Left/Top Photo Column */}
        <div className="md:w-64 bg-slate-50 flex-shrink-0 relative flex flex-col items-center justify-start overflow-hidden min-h-[220px] md:min-h-full">
          <PersonPhoto person={person} className="w-full h-full" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 60%)' }} />
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow bg-gradient-to-r ${person.accent || 'from-orange-500 to-amber-500'}`}>
            {person.badge || person.acronym}
          </div>
        </div>

        {/* Modal Right Body Column */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto flex flex-col">
          <div className={`h-1.5 w-12 rounded-full mb-4 bg-gradient-to-r ${person.accent || 'from-orange-500 to-amber-500'}`} />

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1">
            {person.name}
          </h3>

          <p className="text-sm font-bold text-orange-500 mb-4">
            {person.role}
          </p>

          {/* Brief Highlight Box */}
          {person.tagline && (
            <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-3.5 mb-5 text-sm font-medium text-slate-700 italic">
              "{person.tagline}"
            </div>
          )}

          {/* Full Bio */}
          <div className="mb-6 flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">About</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {person.bio}
            </p>
          </div>

          {/* Modal Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
            {person.linkedin ? (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-bold bg-[#0077B5] hover:bg-[#005885] transition-colors shadow-sm"
              >
                <LinkedInIcon className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            ) : (
              <div />
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const AboutUs = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <Helmet>
        <title>LASHMA | Our Team | Your Good Health, Our Mandate</title>
        <meta
          name="description"
          content="Meet the dedicated leadership and management team behind LASHMA — the Lagos State Health Management Agency working to deliver universal healthcare coverage."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #0b0f1a 0%, #111827 60%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #f28201, transparent)' }} />
          <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #f28201, #8b5cf6, transparent)' }} />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(242,130,1,0.12)', color: '#f59e0b', border: '1px solid rgba(242,130,1,0.2)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
              The People Behind LASHMA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 font-heading mx-auto max-w-3xl"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Our{' '}
            <span style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #f28201, #f59e0b, #fb923c)' }}>
              Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Driven by a shared mission — universal health coverage for every Lagos resident. Meet the professionals making it happen every day.
          </motion.p>
        </div>

        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 64L1440 64L1440 0C1200 48 960 64 720 56C480 48 240 16 0 0L0 64Z" fill="#f8f9fc" />
          </svg>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────── */}
      <section style={{ background: '#f8f9fc' }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-heading">Our Core Values</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 font-heading">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Permanent Secretary ───────────────────────────────────── */}
      <section className="bg-white">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <span className="section-label">Executive</span>
            <h2 className="section-heading">Leadership</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedPerson(leadership)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPerson(leadership);
              }
            }}
            className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            {/* Photo */}
            <div
              className="md:w-72 w-full flex-shrink-0 relative bg-orange-50 overflow-hidden"
              style={{ minHeight: '340px' }}
            >
              <img
                src={leadership.photo}
                alt={leadership.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(255,237,213,0.6), transparent)' }} />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm bg-gradient-to-r from-orange-500 to-amber-500">
                {leadership.badge}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="h-1 w-14 rounded-full mb-4" style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }} />
              <h3 className="text-2xl font-extrabold text-gray-900 font-heading mb-1 group-hover:text-orange-600 transition-colors">
                {leadership.name}
              </h3>
              <p className="text-orange-500 font-bold text-sm mb-3">{leadership.role}</p>

              {/* Tagline callout */}
              <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-3 mb-4 text-xs sm:text-sm font-medium text-slate-700 italic">
                "{leadership.tagline}"
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-4">
                {leadership.bio}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                <span className="text-xs font-bold text-orange-500 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  View Full Profile & Bio
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>

                {leadership.linkedin && (
                  <a
                    href={leadership.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View LinkedIn Profile"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white bg-[#0077B5] hover:bg-[#005885] transition-transform hover:scale-110 shadow-sm"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Key Management Roles ──────────────────────────────────── */}
      <section style={{ background: '#f8f9fc' }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <span className="section-label">Management</span>
            <h2 className="section-heading">Key Roles</h2>
            <p className="section-subheading">The department heads driving excellence across every area of LASHMA's operations.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {managementRoles.map((person, i) => (
              <MgtCard
                key={i}
                person={person}
                index={i}
                onClick={() => setSelectedPerson(person)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ── Profile Modal ──────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedPerson && (
          <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutUs;
