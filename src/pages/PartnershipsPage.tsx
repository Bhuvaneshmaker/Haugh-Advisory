import React from 'react';
import { Logo } from '../components/Logo';
import { Direction } from '../types';
import { Users, Building2, Globe2, ShieldCheck, Check, ArrowRight, Handshake } from 'lucide-react';

interface PartnershipsPageProps {
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const PartnershipsPage: React.FC<PartnershipsPageProps> = ({ openLeadModal }) => {
  const categories = [
    {
      title: 'Commercial Partnerships',
      icon: Building2,
      examples: 'Distribution networks, market access channels, technology licensing, joint commercial ventures, co-marketing agreements.'
    },
    {
      title: 'Institutional Partnerships',
      icon: ShieldCheck,
      examples: 'Government agencies, public sector institutions, multilateral development organizations, regional chambers of commerce, trade bodies.'
    },
    {
      title: 'Strategic Alliances',
      icon: Handshake,
      examples: 'Entities with complementary operational capabilities, local distribution networks, specialized assets, or established regulatory goodwill.'
    },
    {
      title: 'International Cross-Border',
      icon: Globe2,
      examples: 'Cross-border operators, global brands, institutional sponsors, international service providers, and foreign trade delegations.'
    }
  ];

  const qualificationCriteria = [
    'Strategic & Commercial Fit',
    'Demonstrated Execution Capacity',
    'Direct C-Suite & Ministerial Access',
    'Reputation & Regulatory Standing',
    'Aligned Incentive Structures',
    'Local & Regional Market Relevance',
    'Dispute Resolution Clarity',
    'Long-Term Partnership Potential'
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 sm:pt-16 pb-16 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=80"
            alt="Strategic Boardroom Partnership"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B] via-[#0B1B2B]/90 to-[#0B1B2B]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4 drop-shadow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Strategic Partnership Development
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 max-w-4xl leading-tight">
            THE RIGHT PARTNER CHANGES THE SPEED, REACH AND CREDIBILITY OF AN OPPORTUNITY.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-sans">
            We help organizations identify, approach and structure commercial and institutional relationships that materially move a project or business forward.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP CATEGORIES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Partnership Domains
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mt-1">
            Structured Partnership Categories
          </h2>
          <div className="w-12 h-1 bg-[#C5A059] mx-auto my-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#142A3E]/70 border border-gray-800 hover:border-[#C5A059]/60 rounded-xl p-8 space-y-4 group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans pt-2 border-t border-gray-800">
                  <strong className="text-[#C5A059] font-semibold">Focus Examples: </strong>
                  {cat.examples}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUALIFICATION LOGIC */}
      <section className="py-16 bg-[#142A3E]/40 border-y border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Due Diligence
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Partner Qualification Logic
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              We move beyond handshake memoranda to rigorously qualify counterparts before commercial engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {qualificationCriteria.map((crit, cIdx) => (
              <div key={cIdx} className="bg-[#0B1B2B] border border-gray-800 p-4 rounded-lg flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-xs text-gray-200 font-medium">{crit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
          Seeking the right commercial or institutional partner?
        </h2>
        <p className="text-gray-300 text-sm font-sans mb-6">
          Brief Haugh Advisory on your target geography, capability gap, or partnership objective.
        </p>
        <button
          onClick={() => openLeadModal('GENERAL', 'Partnership Inquiry')}
          className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg transition-all inline-flex items-center space-x-2"
        >
          <span>Discuss a Partnership</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
