/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import jaara from '../../../assets/doc/jaara.pdf';
import jaaraNew from '../../../assets/doc/jaaraNew.pdf';
import seniors from '../../../assets/doc/seniors.pdf';

// ─── Plan comparison data (unchanged) ────────────────────────────────────────
const plansData = [
  {
    name: 'Standard Jaara',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    accent: '#7c3aed',
    pdf: jaara,
    benefits: {
      consultation: { visits: 4, physiotherapy: 5, specialists: 'General surgeons, Paediatrician, ENT, Dietician, Gynaecology, Family Physician, Cardiology, Orthopaedics' },
      hospitalCare: { ward: 'Standard', days: 15, meals: '1 meal/day' },
      eyecare: { lensLimit: '₦10,000', pterygium: true, cataract: true },
      cancer: { limit: '₦2,000,000', types: 'Breast, Prostate, Cervix, Colorectal, Burkitt\'s Lymphoma, Retinoblastoma' },
      renalDialysis: { sessions: 3 },
      annualScreening: { startYear: 2, tests: 'Physical exam, Urinalysis, FBS, Cholesterol, Eye exam, CA-125, Stool occult, Chest X-ray, Pap smear, Sono Breasts, HBsAg, PSA' },
      maternalCare: true,
      homeCare: false,
      telemedicine: true,
      virtualBooth: false,
      premiums: { individual: '₦15,000', family4: '₦55,000', family6: '₦80,000' },
    },
  },
  {
    name: 'Jaara Plus',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    accent: '#ea580c',
    popular: true,
    pdf: jaaraNew,
    benefits: {
      consultation: { visits: 8, physiotherapy: 10, specialists: 'General surgeons, Paediatrician, ENT, Dietician, Gynaecology, Family Physician, Cardiology, Orthopaedics' },
      hospitalCare: { ward: 'Semi-private', days: 21, meals: '1 meal/day' },
      eyecare: { lensLimit: '₦10,000', pterygium: true, cataract: true },
      cancer: { limit: '₦2,500,000', types: 'Breast, Prostate, Cervix, Colorectal, Nasopharyngeal, Burkitt\'s Lymphoma, Retinoblastoma' },
      renalDialysis: { sessions: 6 },
      annualScreening: { startYear: 2, tests: 'Physical exam, Urinalysis, FBS, Cholesterol, Eye exam, ALT, Stool occult, Chest X-ray, HBsAg, Creatinine, Pap smear, Albumin, Sono Breasts, Abdomen/Pelvic USS, PSA' },
      maternalCare: true,
      homeCare: false,
      telemedicine: true,
      virtualBooth: true,
      premiums: { individual: '₦40,000', family4: '₦146,000', family6: '₦220,000' },
    },
  },
  {
    name: 'Seniors Plan',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    accent: '#0891b2',
    pdf: seniors,
    benefits: {
      consultation: { visits: 6, physiotherapy: 15, specialists: 'General surgeons, Physiotherapist, ENT, Dietician, Gynaecology, Endocrinologist (diabetics), Cardiology, Orthopaedics, Ophthalmologist' },
      hospitalCare: { ward: 'Standard', days: 20, meals: '1 meal/day' },
      eyecare: { lensLimit: '₦25,000', pterygium: true, cataract: true },
      cancer: { limit: '₦2,500,000', types: 'Breast, Prostate, Cervix, Colorectal, Nasopharyngeal, Burkitt\'s Lymphoma, Retinoblastoma' },
      renalDialysis: { sessions: 6 },
      annualScreening: { startYear: 1, tests: 'Physical exam, Mammography, CA-125, Eye exam, Stool occult, Chest X-ray, HBsAg, Pap smear, Albumin, Abdomen/Pelvic USS, PSA' },
      maternalCare: false,
      homeCare: true,
      telemedicine: true,
      virtualBooth: true,
      premiums: { individual: '₦60,000', couple: '₦100,000' },
    },
  },
];

const categories = [
  { name: 'Consultation', key: 'consultation', details: ['Specialist Visits', 'Physiotherapy Sessions', 'Specialists Included'], tooltip: 'Includes general and specialist consultations', color: 'bg-violet-500' },
  { name: 'Hospital Care', key: 'hospitalCare', details: ['Ward Type', 'Days/Year', 'Meals'], tooltip: 'Inpatient care and admission details', color: 'bg-blue-500' },
  { name: 'Eyecare', key: 'eyecare', details: ['Lens/Frames Limit', 'Pterygium Surgery', 'Cataract Surgery'], tooltip: 'Covers eye ailments and surgeries', color: 'bg-cyan-500' },
  { name: 'Cancer Treatment', key: 'cancer', details: ['Limit', 'Cancer Types'], tooltip: 'Coverage for specific cancers from year 2', color: 'bg-rose-500' },
  { name: 'Renal Dialysis', key: 'renalDialysis', details: ['Sessions/Year'], tooltip: 'Dialysis for acute renal failure', color: 'bg-purple-500' },
  { name: 'Annual Medical Screening', key: 'annualScreening', details: ['Start Year', 'Tests Included'], tooltip: 'Routine health checks for principal/spouse', color: 'bg-emerald-500' },
  { name: 'Maternal & Newborn Care', key: 'maternalCare', details: ['Covered'], tooltip: 'Antenatal and delivery services for principal/spouse', color: 'bg-pink-500' },
  { name: 'Home Care Nursing', key: 'homeCare', details: ['Covered'], tooltip: 'Optional home care for seniors', color: 'bg-teal-500' },
  { name: 'Telemedicine & Virtual Booth', key: 'telemedicine', details: ['Telemedicine', 'Virtual Booth'], tooltip: 'Remote and booth-based services', color: 'bg-indigo-500' },
  { name: 'Premiums', key: 'premiums', details: ['Individual', 'Family/Couple'], tooltip: 'Annual premium costs', color: 'bg-amber-500' },
];

// ─── Utility (unchanged logic) ─────────────────────────────────────────────
const getDisplayValue = (key, detail, value, plan) => {
  if (key === 'consultation') {
    return detail === 'Specialist Visits' ? value.visits : detail === 'Physiotherapy Sessions' ? value.physiotherapy : value.specialists;
  } else if (key === 'hospitalCare') {
    return detail === 'Ward Type' ? value.ward : detail === 'Days/Year' ? value.days : value.meals;
  } else if (key === 'eyecare') {
    return detail === 'Lens/Frames Limit' ? value.lensLimit : value[detail.toLowerCase().replace(/ /g, '')] ? true : false;
  } else if (key === 'cancer') {
    return detail === 'Limit' ? value.limit : value.types;
  } else if (key === 'renalDialysis') {
    return value.sessions;
  } else if (key === 'annualScreening') {
    return detail === 'Start Year' ? `Year ${value.startYear}` : value.tests;
  } else if (key === 'maternalCare' || key === 'homeCare') {
    return value;
  } else if (key === 'telemedicine') {
    return detail === 'Telemedicine' ? value : plan.benefits.virtualBooth;
  } else if (key === 'premiums') {
    return detail === 'Individual' ? value.individual : value.family4 || value.couple;
  }
};

// ─── Cell value renderer ───────────────────────────────────────────────────
const CellValue = ({ value }) => {
  if (value === true) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
  if (value === false) return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
  return <span className="text-sm text-gray-600">{value}</span>;
};

// ─── Table row component ───────────────────────────────────────────────────
const TableRow = React.memo(({ category, detail, plans, highlightDiff, showTooltip, hideTooltip }) => {
  const isDifferent = highlightDiff && plans.some((plan, i) => {
    const value = plan.benefits[category.key];
    const display = getDisplayValue(category.key, detail, value, plan);
    return plans.some((otherPlan, j) => i !== j && display !== getDisplayValue(category.key, detail, otherPlan.benefits[category.key], otherPlan));
  });

  return (
    <tr className={`border-t border-gray-100 ${isDifferent ? 'bg-amber-50/60' : 'hover:bg-gray-50/60'} transition-colors`}>
      <td className="px-5 py-3.5 text-gray-500 text-sm sticky left-0 bg-inherit">
        <div className="flex items-center gap-2">
          {detail}
          {(detail === 'Covered' || category.details.length > 1) && (
            <button
              className="text-gray-300 hover:text-gray-500 transition-colors"
              onMouseEnter={(e) => showTooltip(e, category.tooltip)}
              onMouseLeave={hideTooltip}
              aria-label={`Details about ${category.name}`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </td>
      {plans.map((plan) => {
        const value = plan.benefits[category.key];
        const display = getDisplayValue(category.key, detail, value, plan);
        return (
          <td
            key={`${plan.name}-${detail}`}
            className={`px-5 py-3.5 text-center ${plan.popular ? 'bg-orange-50/30' : ''}`}
          >
            <CellValue value={display} />
          </td>
        );
      })}
    </tr>
  );
});
TableRow.displayName = 'TableRow';

// ─── Main component ───────────────────────────────────────────────────────────
const PlanComparison = () => {
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  const [expanded, setExpanded] = useState({});
  const [visiblePlans, setVisiblePlans] = useState(plansData.map((p) => p.name));
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightDiff, setHighlightDiff] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const showTooltip = (e, content) => setTooltip({ show: true, content, x: e.clientX, y: e.clientY });
  const hideTooltip = () => setTooltip({ show: false, content: '', x: 0, y: 0 });
  const toggleSection = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  const togglePlan = (name) => setVisiblePlans((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);

  const filteredPlans = plansData.filter((p) => visiblePlans.includes(p.name));
  const filteredCategories = useMemo(() => {
    if (selectedCategory !== 'all') return categories.filter((c) => c.key === selectedCategory);
    if (!searchTerm) return categories;
    return categories.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.details.some((d) => d.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedCategory]);

  return (
    <section id="plan-comparison" className="bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label">Side by Side</span>
          <h2 className="section-heading">Compare Plans</h2>
          <p className="section-subheading">Use the filters below to see exactly what each plan covers and find the right fit.</p>
        </motion.div>

        {/* Controls */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-100">
          {/* Plan toggles */}
          <div className="flex gap-2 flex-wrap">
            {plansData.map((plan) => (
              <button
                key={plan.name}
                onClick={() => togglePlan(plan.name)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${visiblePlans.includes(plan.name) ? 'text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500'}`}
                style={visiblePlans.includes(plan.name) ? { background: plan.accent } : {}}
                role="checkbox"
                aria-checked={visiblePlans.includes(plan.name)}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Search + filter + highlight */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search benefits..."
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => <option key={c.key} value={c.key}>{c.name}</option>)}
            </select>
            <button
              onClick={() => setHighlightDiff(!highlightDiff)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${highlightDiff ? 'text-amber-800 border border-amber-300' : 'bg-white border border-gray-200 text-gray-500'}`}
              style={highlightDiff ? { background: '#fef3c7' } : {}}
            >
              {highlightDiff ? '✦ Differences On' : 'Highlight Differences'}
            </button>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-100 shadow-soft">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr style={{ background: '#0f172a' }}>
                <th className="px-5 py-4 text-left text-slate-300 text-sm font-semibold sticky left-0" style={{ background: '#0f172a', minWidth: '200px' }}>
                  Benefits
                </th>
                {filteredPlans.map((plan) => (
                  <th key={plan.name} className="px-5 py-4 text-center font-bold text-sm" style={{ color: plan.accent }}>
                    <div className="flex flex-col items-center gap-1">
                      {plan.name}
                      {plan.popular && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(234,88,12,0.15)', color: '#ea580c' }}>
                          Most Popular
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category) => (
                <React.Fragment key={category.key}>
                  {/* Category header row */}
                  <tr>
                    <td
                      colSpan={filteredPlans.length + 1}
                      className="px-5 py-3 text-white text-xs font-bold uppercase tracking-widest"
                      style={{ background: '#1e293b' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${category.color}`} />
                        {category.name}
                      </div>
                    </td>
                  </tr>
                  {/* Detail rows */}
                  {category.details.map((detail, i) => (
                    <TableRow
                      key={`${category.key}-${i}`}
                      category={category}
                      detail={detail}
                      plans={filteredPlans}
                      highlightDiff={highlightDiff}
                      showTooltip={showTooltip}
                      hideTooltip={hideTooltip}
                    />
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile accordion view */}
        <div className="md:hidden space-y-3">
          {filteredCategories.map((category) => (
            <div key={category.key} className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-soft">
              <button
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-3"
                style={{ background: '#1e293b' }}
                onClick={() => toggleSection(category.key)}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${category.color}`} />
                  <span className="text-white text-sm font-bold">{category.name}</span>
                </div>
                <span className="text-slate-400 text-lg leading-none">{expanded[category.key] ? '−' : '+'}</span>
              </button>
              {expanded[category.key] && (
                <div className="p-4 space-y-3">
                  {filteredPlans.map((plan) => (
                    <div key={plan.name} className={`p-4 rounded-xl ${plan.bgColor} border border-transparent`}>
                      <h3 className={`text-sm font-bold mb-2 ${plan.color}`}>{plan.name}</h3>
                      {category.details.map((detail) => {
                        const value = plan.benefits[category.key];
                        const display = getDisplayValue(category.key, detail, value, plan);
                        return (
                          <div key={detail} className="flex items-start justify-between gap-2 text-sm text-gray-600 py-1">
                            <span className="text-gray-500">{detail}:</span>
                            <span className="font-medium text-right"><CellValue value={display} /></span>
                          </div>
                        );
                      })}
                      <div className="mt-3 flex gap-2">
                        <a
                          href="https://lashma.myclinify.com/register"
                          className="flex-1 py-2 rounded-lg text-xs font-bold text-white text-center no-underline transition-all"
                          style={{ background: plan.accent }}
                        >
                          Buy Now
                        </a>
                        <a
                          href={plan.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded-lg text-xs font-semibold text-center border border-gray-200 text-gray-600 no-underline hover:bg-gray-50"
                        >
                          View Plan
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tooltip */}
        {tooltip.show && (
          <div
            className="fixed p-2.5 text-white text-xs rounded-xl shadow-xl max-w-xs z-50 pointer-events-none"
            style={{ top: tooltip.y + 12, left: tooltip.x + 12, background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanComparison;