import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { Filter, ArrowRight, ShieldCheck, TrendingUp, X, MapPin } from 'lucide-react';

interface CaseStudiesPageProps {
  openLeadModal: (direction?: 'INBOUND' | 'OUTBOUND' | 'GENERAL') => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ openLeadModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [activeCaseModal, setActiveCaseModal] = useState<CaseStudy | null>(null);

  const sectors = ['All', 'Sports-Tech', 'Energy', 'Government', 'NGO'];

  const filteredCaseStudies = selectedSector === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.sector === selectedSector);

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white pb-safe">
      
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 bg-geo-pattern border-b border-[#142A3E] pt-safe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Credibility & Impact Hub
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Institutional Track Record
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Proven transaction outcomes, sovereign policy benchmarks, and cross-border capital allocations delivered for market leaders.
          </p>
        </div>
      </section>

      {/* FILTERABLE SECTOR GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 flex-wrap gap-2 mb-12">
          <div className="flex items-center space-x-1 text-xs text-gray-400 mr-2">
            <Filter className="w-4 h-4 text-[#C5A059]" />
            <span className="uppercase font-semibold tracking-wider">Sector Filter:</span>
          </div>

          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedSector === sector
                  ? 'bg-[#C5A059] text-[#0B1B2B] shadow-md font-bold'
                  : 'bg-[#142A3E] text-gray-300 hover:text-white border border-gray-800'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#142A3E]/80 border border-[#C5A059]/30 hover:border-[#C5A059] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group"
            >
              <div>
                {/* Case Study Image Banner */}
                {cs.imageUrl && (
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={cs.imageUrl}
                      alt={cs.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent opacity-90" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded bg-[#0B1B2B] text-[#C5A059] border border-[#C5A059]/30 shadow">
                      {cs.sector}
                    </span>
                  </div>
                )}

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-[#C5A059] uppercase tracking-wider">
                      {cs.clientName}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{cs.region}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {cs.impactSummary}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 bg-[#0B1B2B] p-3 rounded-lg border border-gray-800 my-4 text-center">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="block font-serif text-base font-bold text-[#C5A059]">{m.value}</span>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-wider">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-gray-700/60 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Published: <strong className="text-white">{cs.publishedYear}</strong>
                </span>

                <button
                  onClick={() => setActiveCaseModal(cs)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Case Study Detail Modal */}
      {activeCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#0B1B2B] text-white rounded-xl shadow-2xl border border-[#C5A059]/60 p-6 sm:p-8 space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest">
                  {activeCaseModal.sector} — {activeCaseModal.region}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  {activeCaseModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCaseModal(null)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <div className="bg-[#142A3E] p-4 rounded-lg border border-gray-800">
                <span className="text-xs font-bold text-[#C5A059] uppercase block mb-1">
                  Institutional Challenge
                </span>
                <p>{activeCaseModal.challenge}</p>
              </div>

              <div className="bg-[#142A3E] p-4 rounded-lg border border-gray-800">
                <span className="text-xs font-bold text-[#C5A059] uppercase block mb-1">
                  Haugh Advisory Solution
                </span>
                <p>{activeCaseModal.solution}</p>
              </div>

              <div className="bg-[#142A3E] p-4 rounded-lg border border-gray-800">
                <span className="text-xs font-bold text-[#C5A059] uppercase block mb-1">
                  Quantifiable Outcome
                </span>
                <p>{activeCaseModal.outcome}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-xs text-gray-400">Published {activeCaseModal.publishedYear}</span>
              <button
                onClick={() => {
                  setActiveCaseModal(null);
                  openLeadModal('GENERAL', `${activeCaseModal.sector} Advisory`);
                }}
                className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
              >
                Inquire for Similar Mandate
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
