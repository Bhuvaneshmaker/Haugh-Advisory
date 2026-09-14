import React from 'react';
import { Logo } from '../components/Logo';
import { COMPANY_PHILOSOPHY } from '../data/mockData';
import { ShieldCheck, MapPin, Globe2, Award, ChevronRight, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  openLeadModal: (direction?: 'INBOUND' | 'OUTBOUND' | 'GENERAL') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openLeadModal }) => {
  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white">
      
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-geo-pattern border-b border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Company Vision & Institutional Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Navigating Sovereign & Commercial Complexity
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Haugh Advisory was founded to bridge the critical execution gap between high-level policy, sovereign strategy, and tier-1 cross-border deal execution.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN SIDE-BY-SIDE FLEX BLOCK FEATURING VISION AND MISSION WITH GOLD LEFT BORDER ACCENTS (PRD Page 2 Spec) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* VISION BOX */}
          <div className="bg-[#142A3E]/80 p-8 sm:p-10 rounded-r-xl border-l-4 border-[#C5A059] border-y border-r border-gray-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A059]">
                STRATEGIC VISION
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl font-semibold text-white leading-relaxed italic">
                "{COMPANY_PHILOSOPHY.vision}"
              </blockquote>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-400">
              <span>Haugh Advisory Charter</span>
              <Globe2 className="w-4 h-4 text-[#C5A059]" />
            </div>
          </div>

          {/* MISSION BOX */}
          <div className="bg-[#142A3E]/80 p-8 sm:p-10 rounded-r-xl border-l-4 border-[#C5A059] border-y border-r border-gray-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A059]">
                INSTITUTIONAL MISSION
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl font-semibold text-white leading-relaxed italic">
                "{COMPANY_PHILOSOPHY.mission}"
              </blockquote>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-400">
              <span>Execution Mandate</span>
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            </div>
          </div>

        </div>
      </section>

      {/* EDITORIAL LAYOUT PRESENTING CORE MARKET-ENTRY PHILOSOPHY (PRD Page 2 Spec) */}
      <section className="py-16 bg-[#142A3E]/40 border-y border-[#142A3E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Editorial Manifesto
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              The Architecture of Defensible Market Penetration
            </h2>
          </div>

          <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-[#C5A059]/40 pl-6 sm:pl-8">
            <p>
              Cross-border enterprise expansion across emerging and frontier corridors rarely fails due to a lack of commercial appetite. Rather, capital stalls at the critical intersection of regulatory friction, sovereign policy misalignment, and unverified local partnership structures.
            </p>

            <p className="font-serif text-lg text-white italic font-medium">
              "{COMPANY_PHILOSOPHY.corePhilosophy}"
            </p>

            <p>
              By maintaining senior-level advisory channels in London, Dubai, Johannesburg, Washington D.C., and Nairobi, Haugh Advisory acts as an authoritative, impartial, and highly connected deal architect. We translate sovereign intentions into institutional investment memos, and transform corporate goals into defensible, revenue-generating operations.
            </p>
          </div>

        </div>
      </section>

      {/* REGIONAL NODES & CORRIDOR NETWORK */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Geographic Footprint
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mt-1">
            Global Corridor Nodes
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Strategic presence situated at key regulatory, sovereign wealth, and commercial capitals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMPANY_PHILOSOPHY.regionalNodes.map((node) => (
            <div
              key={node.city}
              className="p-6 bg-[#142A3E]/60 border border-gray-800 rounded-lg hover:border-[#C5A059]/60 transition-all text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0B1B2B] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">{node.city}</h3>
              <span className="text-xs text-[#C5A059] block font-medium">{node.country}</span>
              <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-800">{node.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => openLeadModal('GENERAL')}
            className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Request Executive Advisory Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
