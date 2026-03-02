import React, { useState } from 'react';

const MarketingAgent = () => {
    const [visibleTable, setVisibleTable] = useState('table1');
    const [currentPage, setCurrentPage] = useState({ table1: 1, table2: 1 });
    const rowsPerPage = 20;
  
    const toggleTable = (table) => {
      setVisibleTable(visibleTable === table ? null : table);
    };
  
    const table1Data = [
        ["COTTAGE ASSETS AND LOGISTICS MANAGEMENT LIMITED", "08023044764, 08126383374"],
        ["ADVANCE HYPERCONVERGER LIMITED", "08036339696, 08140467864"],
        ["BENJAMIN & TENOF", "08088269999, 08146946169"],
        ["ANIBAL GLOBAL LIMITED", "08107250588"],
        ["DATIS NIGERIA LIMITED", "08107250588, 08121274952"],
        ["FENGATE INSURANCE BROKERS LIMITED", "08033598914, 08023178325"],
        ["SKYYD BROKERS LIMITED", "08050712625, 09136982985"],
        ["CONFIANCE INSURANCE BROKERS LIMITED", "08033123174, 08134319495"],
        ["STERLING BANK LTD", "07010013123, 08147576957"],
        ["DENOS INSURANCE BROKERS LIMITED", "08023256984, 09068908446"],
        ["MYCOVERGENIUS", "08107511691, 07030943534"],
        ["NUCLEUS INFORMATION SYSTEM LIMITED", "09022624769, 07061356622"],
        ["STEVIC INVESTMENT AND INTEGRATED LIMITED", "08023001164, 08022222424"],
        ["LATIA GLOBAL INVESTMENT LIMITED", "08081181733, 07025102297"],
        ["ADVANTAGE NETWORK HOLDING LIMITED", "07030896961, 08091176797"],
        ["JARA BENEFIT", "08164086661, 07038517665"],
        ["OILBROOK COMPANY.", "09124340434"],
        ["CORNERSTONE INSURANCE BROKERS", "08051000528"],
        ["CLOUD CLINIC", "08148641594"],
        ["RIGHT OPTION INSURANCE BROKERS", "08038755443"],
        ["SALTINGSTEIN", "07068378449"],
        ["HEIRS INSURANCE BROKERS LIMITED", "07031014138"],
        ["BYLINKS LIMITED", "07070077806"],
        ["UTILAR LIMITED", "09069221772"],
        ["SHINETRACK INSURANCE AGENCY INTERNATIONAL LTD", "08020860001, 08060365060"]
    ];
  
    const handlePageChange = (table, direction) => {
      setCurrentPage((prev) => ({
        ...prev,
        [table]: prev[table] + direction,
      }));
      window.scrollTo(0, 0);
    };
  
    const getPaginatedData = (data, table) => {
      const startIndex = (currentPage[table] - 1) * rowsPerPage;
      return data.slice(startIndex, startIndex + rowsPerPage);
    };
  
    const getPageCount = (data) => Math.ceil(data.length / rowsPerPage);
  
    return (
      <div className="container py-10 pt-56 mx-auto">
        <h2 className="mb-6 text-2xl font-semibold text-center">Marketing Agents</h2>
  
        {/* Table 1 Section */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between p-4 bg-gray-100 rounded shadow cursor-pointer"
            onClick={() => toggleTable('table1')}
          >
            <h3 className="text-lg font-medium">Marketing Agents</h3>
            <span
              className={`text-orange-500 transform transition-transform ${visibleTable === 'table1' ? 'rotate-90' : ''}`}
            >
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
          </div>
          {visibleTable === 'table1' && (
            <div className="p-4 mt-4 bg-white rounded shadow">
              <table className="w-full border border-collapse border-gray-200 table-auto">
                <thead>
                  <tr>
                    <th className="p-2 border border-gray-300">MARKETING AGENTS</th>
                    <th className="p-2 border border-gray-300">PHONE NUMBER</th>
                  </tr>
                </thead>
                <tbody>
                  {getPaginatedData(table1Data, 'table1').map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, index) => (
                        <td key={index} className="p-2 border border-gray-300">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination Controls */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => handlePageChange('table1', -1)}
                  disabled={currentPage.table1 === 1}
                  className="px-4 py-2 text-gray-700 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-700 hover:text-white transition"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage.table1} of {getPageCount(table1Data)}
                </span>
                <button
                  onClick={() => handlePageChange('table1', 1)}
                  disabled={currentPage.table1 === getPageCount(table1Data)}
                  className="px-4 py-2 text-gray-700 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 hover:text-white transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default MarketingAgent