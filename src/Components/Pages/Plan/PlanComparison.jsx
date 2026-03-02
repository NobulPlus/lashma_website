/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import jaara from '../../../assets/doc/jaara.pdf';
import jaaraNew from '../../../assets/doc/jaaraNew.pdf';
import seniors from '../../../assets/doc/seniors.pdf';

// Plan comparison data
const plansData = [
  {
    name: 'Standard Jaara',
    color: 'text-black',
    bgColor: 'bg-blue-50',
    pdf: jaara,
    benefits: {
      consultation: { visits: 4, physiotherapy: 5, specialists: 'General surgeons, Paediatrician, ENT, Dietician, Gynaecology, Family Physician, Cardiology, Orthopaedics' },
      hospitalCare: { ward: 'Standard', days: 15, meals: '1 meal/day' },
      eyecare: { lensLimit: '₦10,000', pterygium: true, cataract: true },
      cancer: { limit: '₦2,000,000', types: 'Breast, Prostate, Cervix, Colorectal, Burkitt’s Lymphoma, Retinoblastoma' },
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
    pdf: jaaraNew,
    benefits: {
      consultation: { visits: 8, physiotherapy: 10, specialists: 'General surgeons, Paediatrician, ENT, Dietician, Gynaecology, Family Physician, Cardiology, Orthopaedics' },
      hospitalCare: { ward: 'Semi-private', days: 21, meals: '1 meal/day' },
      eyecare: { lensLimit: '₦10,000', pterygium: true, cataract: true },
      cancer: { limit: '₦2,500,000', types: 'Breast, Prostate, Cervix, Colorectal, Nasopharyngeal, Burkitt’s Lymphoma, Retinoblastoma' },
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
    color: 'text-black',
    bgColor: 'bg-blue-50',
    pdf: seniors,
    benefits: {
      consultation: { visits: 6, physiotherapy: 15, specialists: 'General surgeons, Physiotherapist, ENT, Dietician, Gynaecology, Endocrinologist (diabetics), Cardiology, Orthopaedics, Ophthalmologist' },
      hospitalCare: { ward: 'Standard', days: 20, meals: '1 meal/day' },
      eyecare: { lensLimit: '₦25,000', pterygium: true, cataract: true },
      cancer: { limit: '₦2,500,000', types: 'Breast, Prostate, Cervix, Colorectal, Nasopharyngeal, Burkitt’s Lymphoma, Retinoblastoma' },
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
  { name: 'Consultation', key: 'consultation', details: ['Specialist Visits', 'Physiotherapy Sessions', 'Specialists Included'], tooltip: 'Includes general and specialist consultations' },
  { name: 'Hospital Care', key: 'hospitalCare', details: ['Ward Type', 'Days/Year', 'Meals'], tooltip: 'Inpatient care and admission details' },
  { name: 'Eyecare', key: 'eyecare', details: ['Lens/Frames Limit', 'Pterygium Surgery', 'Cataract Surgery'], tooltip: 'Covers eye ailments and surgeries' },
  { name: 'Cancer Treatment', key: 'cancer', details: ['Limit', 'Cancer Types'], tooltip: 'Coverage for specific cancers from year 2' },
  { name: 'Renal Dialysis', key: 'renalDialysis', details: ['Sessions/Year'], tooltip: 'Dialysis for acute renal failure' },
  { name: 'Annual Medical Screening', key: 'annualScreening', details: ['Start Year', 'Tests Included'], tooltip: 'Routine health checks for principal/spouse' },
  { name: 'Maternal & Newborn Care', key: 'maternalCare', details: ['Covered'], tooltip: 'Antenatal and delivery services for principal/spouse' },
  { name: 'Home Care Nursing', key: 'homeCare', details: ['Covered'], tooltip: 'Optional home care for seniors' },
  { name: 'Telemedicine & Virtual Booth', key: 'telemedicine', details: ['Telemedicine', 'Virtual Booth'], tooltip: 'Remote and booth-based services' },
  { name: 'Premiums', key: 'premiums', details: ['Individual', 'Family/Couple'], tooltip: 'Annual premium costs' },
];

// Memoized table row component
// eslint-disable-next-line react/display-name
const TableRow = React.memo(({ category, detail, plans, highlightDiff, showTooltip, hideTooltip }) => {
  const isDifferent = highlightDiff && plans.some((plan, i) => {
    const value = plan.benefits[category.key];
    const display = getDisplayValue(category.key, detail, value, plan);
    return plans.some((otherPlan, j) => i !== j && display !== getDisplayValue(category.key, detail, otherPlan.benefits[category.key], otherPlan));
  });

  return (
    <tr className="border-t border-gray-200">
      <td className="p-4 text-gray-600 sticky left-0 bg-white">
        {detail}
        {(detail === 'Covered' || category.details.length > 1) && (
          <span
            className="ml-2 text-black cursor-help"
            onMouseEnter={(e) => showTooltip(e, category.tooltip)}
            onMouseLeave={hideTooltip}
            aria-label={`Details about ${category.name}`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>
        )}
      </td>
      {plans.map((plan) => {
        const value = plan.benefits[category.key];
        const display = getDisplayValue(category.key, detail, value, plan);
        return (
          <td key={`${plan.name}-${detail}`} className={`p-4 text-center text-gray-600 ${isDifferent ? 'bg-yellow-100 font-bold' : ''}`}>
            {display}
          </td>
        );
      })}
    </tr>
  );
});

// Utility to get display value
const getDisplayValue = (key, detail, value, plan) => {
  if (key === 'consultation') {
    return detail === 'Specialist Visits' ? value.visits : detail === 'Physiotherapy Sessions' ? value.physiotherapy : value.specialists;
  } else if (key === 'hospitalCare') {
    return detail === 'Ward Type' ? value.ward : detail === 'Days/Year' ? value.days : value.meals;
  } else if (key === 'eyecare') {
    return detail === 'Lens/Frames Limit' ? value.lensLimit : value[detail.toLowerCase().replace(/ /g, '')] ? '✔' : '✖';
  } else if (key === 'cancer') {
    return detail === 'Limit' ? value.limit : value.types;
  } else if (key === 'renalDialysis') {
    return value.sessions;
  } else if (key === 'annualScreening') {
    return detail === 'Start Year' ? `Year ${value.startYear}` : value.tests;
  } else if (key === 'maternalCare' || key === 'homeCare') {
    return value ? '✔' : '✖';
  } else if (key === 'telemedicine') {
    return detail === 'Telemedicine' ? value ? '✔' : '✖' : plan.benefits.virtualBooth ? '✔' : '✖';
  } else if (key === 'premiums') {
    return detail === 'Individual' ? value.individual : value.family4 || value.couple;
  }
};

const PlanComparison = () => {
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  const [expanded, setExpanded] = useState({});
  const [visiblePlans, setVisiblePlans] = useState(plansData.map((plan) => plan.name));
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightDiff, setHighlightDiff] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const showTooltip = (e, content) => {
    setTooltip({ show: true, content, x: e.clientX, y: e.clientY });
  };

  const hideTooltip = () => setTooltip({ show: false, content: '', x: 0, y: 0 });

  const toggleSection = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const togglePlan = (planName) => {
    setVisiblePlans((prev) =>
      prev.includes(planName) ? prev.filter((name) => name !== planName) : [...prev, planName]
    );
  };

  const filteredPlans = plansData.filter((plan) => visiblePlans.includes(plan.name));
  const filteredCategories = useMemo(() => {
    if (selectedCategory !== 'all') {
      return categories.filter((cat) => cat.key === selectedCategory);
    }
    if (!searchTerm) return categories;
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.details.some((detail) => detail.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedCategory]);

  return (
    <section id="plan-comparison" className="container px-6 py-20 mx-auto">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Compare Ilera Eko Health Plans</h2>
        <div className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 sm:text-lg">
          Find the plan that best suits your healthcare needs.
        </div>
      </header>

      {/* Interactive Controls */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {plansData.map((plan) => (
            <button
              key={plan.name}
              className={`px-4 py-2 rounded-md ${visiblePlans.includes(plan.name) ? `${plan.color} bg-opacity-20` : 'bg-gray-200 text-gray-600'} focus:outline-none focus:ring-2 focus:ring-black`}
              onClick={() => togglePlan(plan.name)}
              aria-checked={visiblePlans.includes(plan.name)}
              role="checkbox"
            >
              {plan.name}
            </button>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search benefits..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search benefits"
          />
          <select
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.key} value={cat.key}>{cat.name}</option>
            ))}
          </select>
          <button
            className={`px-4 py-2 rounded-md ${highlightDiff ? 'bg-yellow-200 text-gray-800' : 'bg-gray-200 text-gray-600'} focus:outline-none focus:ring-2 focus:ring-black`}
            onClick={() => setHighlightDiff(!highlightDiff)}
            aria-pressed={highlightDiff}
          >
            Highlight Differences
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left text-gray-800 font-bold sticky left-0 bg-gray-100">Benefits</th>
              {filteredPlans.map((plan) => (
                <th key={plan.name} className={`p-4 text-center ${plan.color} font-bold`}>
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <React.Fragment key={category.key}>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td colSpan={filteredPlans.length + 1} className="p-4 text-gray-800 font-bold">{category.name}</td>
                </tr>
                {category.details.map((detail, index) => (
                  <TableRow
                    key={`${category.key}-${index}`}
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

      {/* Mobile View */}
      <div className="md:hidden">
        {filteredCategories.map((category) => (
          <div key={category.key} className="mb-4 rounded-lg shadow-md bg-white">
            <button
              className="w-full p-4 text-left text-gray-800 font-bold bg-gray-50 flex justify-between items-center"
              onClick={() => toggleSection(category.key)}
              aria-expanded={!!expanded[category.key]}
            >
              {category.name}
              <span>{expanded[category.key] ? '−' : '+'}</span>
            </button>
            {expanded[category.key] && (
              <div className="p-4">
                {filteredPlans.map((plan) => (
                  <div key={plan.name} className={`p-4 mb-2 rounded-lg ${plan.bgColor}`}>
                    <h3 className={`text-lg font-bold ${plan.color}`}>{plan.name}</h3>
                    {category.details.map((detail) => {
                      const value = plan.benefits[category.key];
                      const display = getDisplayValue(category.key, detail, value, plan);
                      return (
                        <p key={detail} className="text-gray-600">
                          <strong>{detail}:</strong> {display}
                        </p>
                      );
                    })}
                    <div className="mt-4 flex gap-2">
                      <a
                        href={`https://lashma.myclinify.com/register?plan=${plan.name.toLowerCase().replace(/\s/g, '-')}`}
                        className={`px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700 transition-colors no-underline`}
                        aria-label={`Purchase ${plan.name}`}
                      >
                        Buy Now
                      </a>
                      <a
                        href={plan.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 ${plan.color} border ${plan.color.replace('text-', 'border-')} rounded-md hover:bg-gray-100 transition-colors no-underline`}
                        aria-label={`View ${plan.name} details`}
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
          className="fixed p-2 bg-gray-800 text-white text-sm rounded shadow-lg max-w-xs z-50"
          style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
        >
          {tooltip.content}
        </div>
      )}
    </section>
  );
};

export default PlanComparison;