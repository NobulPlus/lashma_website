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
      <div className="bg-[#f8f9fc] min-h-screen">
        <div className="section-container pt-36 pb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="section-label">Our Network</span>
            <h1 className="section-heading">Marketing Agents</h1>
            <p className="section-subheading">
              Find authorised LASHMA marketing agents and their contact numbers.
            </p>
          </div>

          <div className="mb-5">
            <button
              type="button"
              className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 cursor-pointer text-left"
              onClick={() => toggleTable('table1')}
              aria-expanded={visibleTable === 'table1'}
            >
              <h2 className="text-base sm:text-lg font-bold text-[#1a1a2e] font-heading m-0">Agent Directory</h2>
              <span
                className={`text-[#f28201] transform transition-transform ${visibleTable === 'table1' ? 'rotate-90' : ''}`}
              >
                <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
              </span>
            </button>
            {visibleTable === 'table1' && (
              <div className="p-4 sm:p-5 mt-3 bg-white rounded-xl border border-gray-100">
                <div className="overflow-x-auto rounded-lg border border-gray-100">
                  <table className="w-full border-collapse table-auto text-sm">
                    <thead>
                      <tr className="bg-[#f8f9fc]">
                        <th className="p-3 text-left font-semibold text-[#1a1a2e] border-b border-gray-100">Marketing Agent</th>
                        <th className="p-3 text-left font-semibold text-[#1a1a2e] border-b border-gray-100">Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getPaginatedData(table1Data, 'table1').map((row, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/40">
                          {row.map((cell, index) => (
                            <td key={index} className="p-3 border-b border-gray-50 text-[#4a4a68]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between mt-4 gap-3">
                  <button
                    type="button"
                    onClick={() => handlePageChange('table1', -1)}
                    disabled={currentPage.table1 === 1}
                    className="px-4 py-2 text-sm font-semibold text-[#1a1a2e] bg-[#f0f1f5] rounded-full disabled:opacity-50 hover:bg-[#e5e7eb] transition"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-[#4a4a68]">
                    Page {currentPage.table1} of {getPageCount(table1Data)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handlePageChange('table1', 1)}
                    disabled={currentPage.table1 === getPageCount(table1Data)}
                    className="px-4 py-2 text-sm font-semibold text-white rounded-full disabled:opacity-50 transition"
                    style={{ background: '#f28201' }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  

export default MarketingAgent