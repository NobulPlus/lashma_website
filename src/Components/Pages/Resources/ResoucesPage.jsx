import React from 'react';
import cp from '../../../assets/doc/CP.pdf'
import provider from '../../../assets/doc/provider.pdf'
import ekosha from '../../../assets/doc/ekosha.pdf'

import EKSbulletinQ3 from '../../../assets/doc/EKOSHANewsBulletinQ32024 - converted.pdf'

const resources = [
  {
    title: 'Community Pharmacies',
    fileUrl: cp,
  },
  {
    title: 'ILERA EKO Provider',
    fileUrl: provider,
  },
  {
    title: 'EKOSHA Provider',
    fileUrl: ekosha,
  },
  {
    title: 'EKOSHA News Bulletin Q3 2024',
    fileUrl: EKSbulletinQ3,
  },
];

const ResoucesPage = () => {
  return (
    <div className="container mx-auto pt-52 py-24">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">Resources</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Title</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">{resource.title}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <a
                    href={resource.fileUrl}
                    download
                    className="text-primary hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResoucesPage;
