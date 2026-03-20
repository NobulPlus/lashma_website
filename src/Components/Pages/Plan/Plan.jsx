/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from './head';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import diaspora from '../../../assets/doc/diaspora.pdf';
import jaara from '../../../assets/doc/jaara2.pdf';
import jaaraNew from '../../../assets/doc/jaaraNew.pdf';
import seniors from '../../../assets/doc/seniors.pdf';
import PlanComparison from './PlanComparison';

// ─── Plan data ────────────────────────────────────────────────────────────────
const plansData = [
  {
    id: 1,
    name: 'Standard Jaara',
    tagline: 'Essential coverage, great value',
    price: '₦15,000',
    priceNote: 'per individual / year',
    pdf: jaara,
    gradient: 'from-violet-500 to-indigo-600',
    glow: 'rgba(139,92,246,0.12)',
    borderActive: 'border-violet-200',
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-700',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    highlights: ['4 specialist visits per year', '15 hospital days/year', 'Maternity & newborn care'],
    popular: false,
    enrollLink: 'https://lashma.myclinify.com/register',
  },
  {
    id: 2,
    name: 'Standard Jaara Plus',
    tagline: 'More coverage, more peace of mind',
    price: '₦40,000',
    priceNote: 'per individual / year',
    pdf: jaaraNew,
    gradient: 'from-orange-500 to-amber-500',
    glow: 'rgba(249,115,22,0.12)',
    borderActive: 'border-orange-200',
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-700',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    highlights: ['8 specialist visits per year', '21 hospital days — semi-private ward', 'Virtual Booth + Telemedicine'],
    popular: true,
    enrollLink: 'https://lashma.myclinify.com/register',
  },
  {
    id: 3,
    name: "Senior's Plan",
    tagline: 'Dedicated care for the over-60s',
    price: '₦60,000',
    priceNote: 'per individual / year',
    pdf: seniors,
    gradient: 'from-cyan-500 to-sky-600',
    glow: 'rgba(6,182,212,0.12)',
    borderActive: 'border-cyan-200',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-700',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    highlights: ['15 physiotherapy sessions', 'Home care nursing included', 'Cancer cover up to ₦2.5M'],
    popular: false,
    enrollLink: 'https://lashma.myclinify.com/register',
  },
  {
    id: 4,
    name: 'Diaspora Plan',
    tagline: 'Cover your family from anywhere',
    price: 'Flexible',
    priceNote: 'sponsor loved ones in Lagos',
    pdf: diaspora,
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.12)',
    borderActive: 'border-emerald-200',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlights: ['For Nigerians living abroad', 'Online enrollment & payment', 'Full LASHMA benefits for family'],
    popular: false,
    enrollLink: 'https://lashma.myclinify.com/register',
  },
];

// ─── Who Is This For ──────────────────────────────────────────────────────────
const audiences = [
  {
    icon: '👤',
    title: 'Individuals',
    desc: 'Self-employed, gig workers, market traders, and anyone without employer-backed health insurance.',
    tag: 'Standard Jaara',
    color: 'from-violet-500 to-indigo-600',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Families',
    desc: 'Cover your entire household — spouse and up to 4 children — under a single affordable plan.',
    tag: 'Jaara Plus',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: '🧓',
    title: 'Seniors (60+)',
    desc: 'Specialised coverage including physiotherapy, home nursing, and enhanced specialist access.',
    tag: "Senior's Plan",
    color: 'from-cyan-500 to-sky-600',
  },
  {
    icon: '✈️',
    title: 'Diaspora',
    desc: 'Living abroad? Sponsor quality healthcare for your parents, siblings, or family in Lagos.',
    tag: 'Diaspora Plan',
    color: 'from-emerald-500 to-teal-600',
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Who can enroll in the ILERA EKO scheme?',
    a: 'Any resident of Lagos State can enroll — whether you are employed, self-employed, a trader, a student, or a senior citizen. The Diaspora Plan also allows Nigerians abroad to sponsor family members in Lagos.',
  },
  {
    q: 'What does the annual premium cover?',
    a: 'Your premium covers all services listed in your chosen benefit package — consultations, specialist visits, hospital stays, maternity care, eye care, and more. There are no hidden co-payments for listed services.',
  },
  {
    q: 'Can I change my hospital after enrolling?',
    a: 'Yes. You can change your designated healthcare provider through the LASHMA portal or by calling our helpline. The option is available once per policy year or in exceptional circumstances.',
  },
  {
    q: 'Is there a waiting period before I can use my benefits?',
    a: 'For most benefits, coverage is instant upon premium payment. Annual medical screening begins from Year 2. Cancer treatment coverage also activates from the second year of continuous enrollment.',
  },
  {
    q: 'Does the plan cover pre-existing conditions?',
    a: 'LASHMA covers a broad range of conditions. Pre-existing conditions are generally covered after a defined waiting period and are subject to the terms of your selected plan. Please review your benefit package PDF for specifics.',
  },
  {
    q: 'How do I pay my premium?',
    a: 'You can pay online via the Myclinify portal (card, bank transfer, USSD), or visit any LASHMA accredited payment point. Corporate groups can arrange direct debit. Visit lashma.myclinify.com/paypolicy for details.',
  },
];

// ─── FAQ Item component ───────────────────────────────────────────────────────
const FaqItem = ({ item, isOpen, onToggle }) => (
  <div
    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-orange-200 shadow-soft' : 'border-gray-100 bg-white'}`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
    >
      <span className={`font-semibold text-sm sm:text-base leading-snug ${isOpen ? 'text-orange-600' : 'text-gray-800'}`}>
        {item.q}
      </span>
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'text-white' : 'text-gray-400 bg-gray-100'}`}
        style={isOpen ? { background: 'linear-gradient(to bottom right, #f28201, #f59e0b)' } : {}}
      >
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
            {item.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Plan Card ────────────────────────────────────────────────────────────────
const PlanCard = React.memo(({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    {/* Popular badge */}
    {plan.popular && (
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg whitespace-nowrap"
        style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
      >
        ⭐ Most Popular
      </div>
    )}

    <div
      className={`relative h-full bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden flex flex-col ${plan.popular ? 'border-orange-200 shadow-card' : 'border-gray-100'}`}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 bg-gradient-to-r ${plan.gradient}`} />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${plan.glow}, transparent 60%)` }}
      />

      <div className="relative p-7 flex flex-col flex-1">
        {/* Icon + Name */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            {plan.icon}
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-lg font-heading leading-tight">{plan.name}</h3>
            <p className="text-gray-400 text-sm">{plan.tagline}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-5 pb-5" style={{ borderBottom: '1px solid #f1f5f9' }}>
          <div className="text-2xl font-extrabold text-gray-900 font-heading">{plan.price}</div>
          <div className="text-xs text-gray-400 mt-0.5">{plan.priceNote}</div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <a
            href={plan.enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white text-center transition-all duration-200 hover:-translate-y-0.5 no-underline"
            style={{ background: `linear-gradient(to right, var(--from), var(--to))`, backgroundImage: `linear-gradient(135deg, #f28201, #f59e0b)` }}
          >
            Buy Now
          </a>
          <a
            href={plan.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 text-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 no-underline"
          >
            View Plan
          </a>
        </div>
      </div>
    </div>
  </motion.div>
));

// ─── Main Page ────────────────────────────────────────────────────────────────
const Plan = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>LASHMA | Ilera Eko Health Plans | Your Good Health, Our Mandate</title>
        <meta
          name="description"
          content="Explore ILERA EKO health plans by LASHMA — Standard Jaara, Jaara Plus, Seniors, and Diaspora plans. Affordable, quality healthcare coverage for every Lagos resident."
        />
        <link rel="canonical" href="/plan" />
      </Helmet>

      {/* Dark hero */}
      <Head />

      {/* Who Is This For */}
      <section className="bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Find Your Fit</span>
            <h2 className="section-heading">Who Is This For?</h2>
            <p className="section-subheading">Every plan is crafted for a specific need. Find yours.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {audiences.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {a.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 font-heading">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                  {a.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section id="plans" className="bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="section-label">Benefit Packages</span>
            <h2 className="section-heading">Choose Your Plan</h2>
            <p className="section-subheading">All plans include telemedicine, specialist access, and government-regulated benefits.</p>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto items-start">
            {plansData.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <PlanComparison />

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Got Questions?</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">Everything you need to know before enrolling.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-14"
          >
            <p className="text-gray-500 text-sm mb-4">Still have questions? Our team is ready to help.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm no-underline transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Plan;