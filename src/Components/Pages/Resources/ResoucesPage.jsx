import React from 'react';
import cp from '../../../assets/doc/CP.pdf'

const resources = [
  {
    title: 'Community Pharmacies',
    fileUrl: cp,
  },
//   {
//     title: 'Document 2',
//     fileUrl: '/path/to/document2.pdf',
//   },
  // Add more documents as needed
];

const ResoucesPage = () => {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">Resources</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Title</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Download</th>
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
