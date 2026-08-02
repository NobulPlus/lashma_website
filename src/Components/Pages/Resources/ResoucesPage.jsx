import React from 'react';
import { Helmet } from 'react-helmet-async';
import ekosha from '../../../assets/doc/ekosha.pdf';
import EKSbulletinQ3 from '../../../assets/doc/EKOSHANewsBulletinQ32024 - converted.pdf';

const resources = [
  {
    title: 'EKOSHA Provider',
    description: 'Guidelines and information for EKOSHA healthcare providers.',
    fileUrl: ekosha,
  },
  {
    title: 'EKOSHA News Bulletin Q3 2024',
    description: 'Quarterly updates from the EKOSHA program.',
    fileUrl: EKSbulletinQ3,
  },
];

const ResoucesPage = () => {
  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      <Helmet>
        <title>Resources | LASHMA</title>
        <meta name="description" content="Download LASHMA and EKOSHA resources, bulletins, and provider documents." />
        <link rel="canonical" href="https://www.lashma.com/resources" />
      </Helmet>

      <section className="section-container pt-36 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-label">Documents</span>
          <h1 className="section-heading">Resources</h1>
          <p className="section-subheading">
            Download official LASHMA and EKOSHA documents, bulletins, and provider materials.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 px-6 py-5"
            >
              <div>
                <h2 className="text-lg font-bold text-[#1a1a2e] font-heading m-0">{resource.title}</h2>
                <p className="text-sm text-[#4a4a68] mt-1 mb-0">{resource.description}</p>
              </div>
              <a
                href={resource.fileUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold no-underline whitespace-nowrap transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
              >
                Download
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResoucesPage;
