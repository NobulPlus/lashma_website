import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// ─── Images ───────────────────────────────────────────────────────────────────
const genericAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='100%25' height='100%25'%3E%3Crect width='24' height='24' fill='%23cbd5e1'/%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' fill='%23f8fafc'/%3E%3C/svg%3E";

// ─── Leadership / PS ──────────────────────────────────────────────────────────
const leadership = {
  name: 'Dr. Emmanualla Zamba',
  role: 'Permanent Secretary',
  bio: 'Dr. Emmanualla Zamba provides strategic oversight for LASHMA, championing universal health coverage for all Lagos State residents through innovation, policy reform, and institutional excellence. Under her leadership, the Agency has significantly expanded enrollment and provider coverage across Lagos State.',
  photo: genericAvatar,
  accent: 'from-orange-500 to-amber-500',
};

// ─── Key Management Roles ────────────────────────────────────────────────────
const managementRoles = [
  {
    name: 'Aramide Ojo',
    acronym: 'HOF',
    role: 'Head, Finance',
    bio: 'Oversees all financial planning, budgeting, claims processing, and financial reporting for LASHMA. Ensures fiscal responsibility and compliance with Lagos State Government financial regulations and public sector accounting standards.',
    photo: genericAvatar,
    accent: 'from-emerald-500 to-teal-600',
    badge: 'HOF',
  },
  {
    name: 'Olatunji Rotimi',
    acronym: 'HBD',
    role: 'Head, Business Development',
    bio: 'Drives LASHMA\'s growth strategy through strategic partnerships, corporate enrollment campaigns, and revenue diversification. Leads negotiations with employers, HMOs, and institutional partners to expand the ILERA EKO scheme.',
    photo: genericAvatar,
    accent: 'from-cyan-500 to-sky-600',
    badge: 'HBD',
  },
  {
    name: 'Oladejo Sefiu',
    acronym: 'HICT',
    role: 'Head, Information and Communication Technology',
    bio: 'Responsible for the strategic direction and management of all ICT systems and digital infrastructure at LASHMA, including the ILERA EKO digital enrollment platform, telemedicine integration, and data security.',
    photo: genericAvatar,
    accent: 'from-violet-500 to-indigo-600',
    badge: 'HICT',
  },
  {
    name: 'Tawa Oshinowo',
    acronym: 'ETL',
    role: 'Team Lead, EKOSHA',
    bio: 'Coordinates the operations and strategic initiatives of the EKOSHA programme, ensuring effective stakeholder engagement and program delivery.',
    photo: genericAvatar,
    accent: 'from-rose-500 to-pink-600',
    badge: 'EKOSHA',
  },
  {
    name: 'Tayo-Adetoro Adetoro',
    acronym: 'HPME',
    role: 'Head, Planning Monitoring & Evaluation',
    bio: 'Leads the evaluation of LASHMA\'s programs and policies, ensuring data-driven decision making and continuous improvement in service delivery across all healthcare initiatives.',
    photo: genericAvatar,
    accent: 'from-amber-500 to-orange-500',
    badge: 'PME',
  },
  {
    name: 'Micheal Green',
    acronym: 'HCS',
    role: 'Head, Client Service',
    bio: 'Leads the beneficiary experience team, overseeing the customer service helplines, walk-in service centres, and digital support channels. Champions a culture of empathy and responsiveness across all touchpoints.',
    photo: genericAvatar,
    accent: 'from-blue-500 to-indigo-600',
    badge: 'HCS',
  },
];

// ─── Core Values ──────────────────────────────────────────────────────────────
const values = [
  { icon: '🏥', title: 'Universal Coverage', desc: 'Every Lagos resident deserves access to quality healthcare regardless of income.' },
  { icon: '🤝', title: 'Accountability', desc: 'We are stewards of public trust, operating transparently in every interaction.' },
  { icon: '💡', title: 'Innovation', desc: 'Continuously improving our systems, processes, and care delivery models.' },
  { icon: '❤️', title: 'Compassion', desc: 'Every beneficiary is a person — we lead with empathy in everything we do.' },
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
const MgtCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    {/* Photo area */}
    <div className="relative overflow-hidden bg-gray-50 h-64">
      <img
        src={person.photo}
        alt={person.name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)' }} />
      {/* Acronym badge */}
      <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${person.accent}`}>
        {person.badge}
      </div>
    </div>
    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      {/* Color accent bar */}
      <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${person.accent} mb-4`} />
      <h3 className="font-bold text-gray-900 font-heading text-base mb-0.5">{person.name}</h3>
      <p className={`text-xs font-bold mb-0.5 bg-gradient-to-r ${person.accent} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }}>{person.role}</p>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{person.bio}</p>
    </div>
  </motion.div>
);

// ─── Component ────────────────────────────────────────────────────────────────
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>LASHMA | Our Team | Your Good Health, Our Mandate</title>
        <meta name="description" content="Meet the dedicated leadership and management team behind LASHMA — the Lagos State Health Management Agency working to deliver universal healthcare coverage." />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(242,130,1,0.12)', color: '#f59e0b', border: '1px solid rgba(242,130,1,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
              The People Behind LASHMA
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 font-heading mx-auto max-w-3xl"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Our{' '}
            <span style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #f28201, #f59e0b, #fb923c)' }}>
              Team
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
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
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i} variants={cardVariants}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
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

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-10 items-center max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden">
            {/* Photo */}
            <div className="md:w-72 w-full flex-shrink-0 relative bg-orange-50 overflow-hidden"
              style={{ minHeight: '340px' }}>
              <img
                src={leadership.photo}
                alt={leadership.name}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: '340px' }}
              />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(255,237,213,0.6), transparent)' }} />
            </div>
            {/* Content */}
            <div className="flex-1 p-8 md:p-10">
              {/* Orange accent bar */}
              <div className="h-1 w-14 rounded-full mb-5" style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }} />
              <h3 className="text-2xl font-extrabold text-gray-900 font-heading mb-1">{leadership.name}</h3>
              <p className="text-orange-500 font-bold text-sm mb-5">{leadership.role}</p>
              <p className="text-gray-600 text-base leading-relaxed">{leadership.bio}</p>
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
              <MgtCard key={i} person={person} index={i} />
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8 italic">* Profile photos and names for placeholder roles will be updated. Content provided for layout purposes.</p>
        </div>
      </section>

      {/* ── Join Us CTA ───────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center rounded-3xl p-12"
            style={{ background: 'linear-gradient(135deg, #0b0f1a 0%, #1e293b 100%)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-extrabold text-white font-heading mb-3">Want to Join Our Team?</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We are always looking for passionate healthcare professionals, administrators, and technologists committed to improving lives in Lagos State.
            </p>
            <a href="mailto:ileraeko@lashma.com" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-bold text-sm no-underline transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}>
              Send Your CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
