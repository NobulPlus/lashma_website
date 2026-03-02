/* eslint-disable react/display-name */
import React from 'react';
import Head from './head';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import diaspora from '../../../assets/doc/diaspora.pdf';
// import jaara from '../../../assets/doc/jaara.pdf';
import jaara from '../../../assets/doc/jaara2.pdf';
import jaaraNew from '../../../assets/doc/jaaraNew.pdf';
import seniors from '../../../assets/doc/seniors.pdf';
import PlanComparison from './PlanComparison';

// Plan data array with original descriptions
const plansData = [
  {
    name: 'Standard Jaara',
    description:
      'The Jaara Standard Plan offers essential healthcare coverage at a cost-effective price, making it an ideal choice for individuals and families seeking a reliable entry point to health insurance.',
    pdf: jaara,
    buttonBg: 'bg-black',
    buttonHover: 'hover:bg-black-700',
    textColor: 'text-black',
    borderColor: 'border-black-600',
    bgColor: 'bg-white',
  },
  {
    name: 'Standard Jaara Plus',
    description:
      'Standard Jaara Plus Plan, offers an enhanced health insurance plan designed to provide comprehensive, affordable, and quality healthcare to Lagos State residents.',
    pdf: jaaraNew,
    buttonBg: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'Senior\'s Plan',
    description:
      'A health insurance plan offered specifically designed for individuals aged 60 and above, ensuring affordable and quality healthcare for senior citizens in Lagos State.',
    pdf: seniors,
    buttonBg: 'bg-black',
    buttonHover: 'hover:bg-black-700',
    textColor: 'text-black',
    borderColor: 'border-black-600',
    bgColor: 'bg-white',
  },
  {
    name: 'Diaspora Plan',
    description:
      'The Diaspora Health Plan, designed to enable Nigerians in the diaspora to sponsor affordable, quality healthcare coverage for their loved ones resident in Lagos State.',
    pdf: diaspora,
    buttonBg: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-600',
    bgColor: 'bg-orange-50',
  },
];

// Reusable PlanCard component
const PlanCard = React.memo(({ plan }) => {
  const buyNowUrl = 'https://lashma.myclinify.com/register';

  return (
    <article className={`p-6 rounded-lg shadow-md ${plan.bgColor} transition-transform duration-300 hover:scale-105`}>
      <header className='mb-4'>
        <h3 className={`text-2xl font-bold ${plan.textColor}`}>{plan.name}</h3>
      </header>
      <div className='mb-6'>
        <p className='text-gray-600'>{plan.description}</p>
      </div>
      <footer className='flex justify-center gap-4'>
        <button
          className={`px-4 py-2 text-white ${plan.buttonBg} ${plan.buttonHover} rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${plan.buttonBg.split('-')[1]}`}
          aria-label={`Purchase ${plan.name} plan`}
        >
          <Link to={buyNowUrl} className='text-white no-underline'>Buy Now</Link>
        </button>
        <a
          href={plan.pdf}
          target='_blank'
          rel='noopener noreferrer'
          className={`px-4 py-2 ${plan.textColor} ${plan.borderColor} border rounded-md hover:bg-gray-100 text-decoration-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${plan.borderColor.split('-')[1]}`}
          aria-label={`View ${plan.name} plan details`}
        >
          View Plan
        </a>
      </footer>
    </article>
  );
});

const Plan = () => {
  return (
    <>
      <Helmet>
        <title>LASHMA | Ilera Eko Plans | Your Good Health, Our Mandate</title>
        <meta
          name='description'
          content='Discover Ilera Eko health plans by LASHMA, including Standard Jaara, Jaara Plus, Seniors, and Diaspora. Access affordable, quality healthcare in Lagos State.'
        />
        <link rel='canonical' href='/plan' />
      </Helmet>
      <Head />
      {/* Assuming Head is a layout component */}
      <section id='plans' className='container px-6 mx-auto'>
        <header className='mb-8 text-center'>
        </header>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {plansData.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </section>
      <PlanComparison/>
    </>
  );
};

export default Plan;