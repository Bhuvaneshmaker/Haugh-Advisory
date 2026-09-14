import React from 'react';
import { PACKAGED_OFFERS } from '../data/mockData';
import { Check, X, ArrowRight, ShieldCheck, Clock, Target } from 'lucide-react';
import { Direction } from '../types';

interface PackagesPageProps {
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ openLeadModal }) => {
  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white">
      
      {/* Header */}
      <section className="pt-16 pb-12 bg-geo-pattern border-b border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Engagement Models & Comparison Matrix
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Structured Packaged Offers
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Compare scope, deliverables, timeline, and features across Market Entry, Global Bridge, Sponsor & Partner Ready, and Funded & Followed models.
          </p>
        </div>
      </section>

      {/* DESKTOP COMPARISON TABLE VIEW (PRD Page 4 Spec) */}
      <section className="hidden lg:block py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#142A3E]/70 border border-[#C5A059]/30 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-[#0B1B2B] border-b border-gray-700">
                <th className="p-6 text-xs font-bold uppercase tracking-wider text-gray-400 w-1/5">
                  Package Specification
                </th>
                {PACKAGED_OFFERS.map((pkg) => (
                  <th key={pkg.id} className="p-6 w-1/5 border-l border-gray-800">
                    <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest block mb-1">
                      {pkg.direction}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">{pkg.name}</h3>
                    <span className="text-[11px] text-gray-400 block mt-1 font-normal">{pkg.timeline}</span>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-800 text-xs">
              
              {/* Target Profile Row */}
              <tr className="bg-[#142A3E]/40">
                <td className="p-4 font-semibold text-[#C5A059] uppercase tracking-wider">
                  Target Profile
                </td>
                {PACKAGED_OFFERS.map((pkg) => (
                  <td key={pkg.id} className="p-4 text-gray-300 border-l border-gray-800/60 leading-relaxed">
                    {pkg.targetProfile}
                  </td>
                ))}
              </tr>

              {/* Engagement Model */}
              <tr>
                <td className="p-4 font-semibold text-[#C5A059] uppercase tracking-wider">
                  Engagement Scope
                </td>
                {PACKAGED_OFFERS.map((pkg) => (
                  <td key={pkg.id} className="p-4 text-white font-mono font-semibold border-l border-gray-800/60">
                    {pkg.priceScope}
                  </td>
                ))}
              </tr>

              {/* Feature Comparison Matrix */}
              {PACKAGED_OFFERS[0].features.map((feature, featureIdx) => (
                <tr key={featureIdx} className={featureIdx % 2 === 0 ? 'bg-[#142A3E]/20' : ''}>
                  <td className="p-4 font-medium text-gray-300">
                    {feature.name}
                  </td>
                  {PACKAGED_OFFERS.map((pkg) => {
                    const feat = pkg.features[featureIdx];
                    return (
                      <td key={pkg.id} className="p-4 border-l border-gray-800/60">
                        {feat?.included ? (
                          <div className="flex items-center space-x-2 text-white">
                            <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                            <span className="text-[11px] text-gray-200">{feat.detail}</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 text-gray-500">
                            <X className="w-4 h-4 text-gray-600 shrink-0" />
                            <span className="text-[11px] italic">{feat?.detail || 'Not Included'}</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}

              {/* Action Trigger Row */}
              <tr className="bg-[#0B1B2B]">
                <td className="p-6 font-bold text-white uppercase tracking-wider">
                  Initiate Mandate
                </td>
                {PACKAGED_OFFERS.map((pkg) => (
                  <td key={pkg.id} className="p-6 border-l border-gray-800">
                    <button
                      onClick={() => openLeadModal(pkg.direction, pkg.name)}
                      className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1 shadow"
                    >
                      <span>Inquire {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* MOBILE CARD STACKED VIEW (PRD Page 4 Spec) */}
      <section className="lg:hidden py-12 max-w-xl mx-auto px-4 space-y-8">
        {PACKAGED_OFFERS.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-[#142A3E] border border-[#C5A059]/40 rounded-xl p-6 space-y-6 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest bg-[#0B1B2B] px-2.5 py-1 rounded">
                  {pkg.direction}
                </span>
                <span className="text-xs text-gray-400">{pkg.timeline}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mt-2">{pkg.name}</h3>
              <p className="text-xs text-gray-300 mt-1">{pkg.tagline}</p>
            </div>

            <div className="bg-[#0B1B2B] p-3 rounded-lg border border-gray-800 text-xs space-y-1">
              <span className="text-[#C5A059] font-semibold block">Target Profile:</span>
              <p className="text-gray-300">{pkg.targetProfile}</p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block">
                Features & Deliverables
              </span>
              {pkg.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start space-x-2 text-xs">
                  {feat.included ? (
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                  )}
                  <div className={feat.included ? 'text-gray-200' : 'text-gray-500 line-through'}>
                    <span className="font-semibold">{feat.name}:</span> {feat.detail}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => openLeadModal(pkg.direction, pkg.name)}
              className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <span>Inquire for {pkg.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

    </div>
  );
};
