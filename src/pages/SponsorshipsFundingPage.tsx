import React from 'react';
import { Logo } from '../components/Logo';
import { Direction } from '../types';
import { Award, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Layers } from 'lucide-react';

interface SponsorshipsFundingPageProps {
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const SponsorshipsFundingPage: React.FC<SponsorshipsFundingPageProps> = ({ openLeadModal }) => {
  const sponsorshipSteps = [
    'Sponsorship proposition development & valuation benchmarking',
    'Target sponsor mapping across EMEA, Middle East, and North America',
    'Sponsor-specific positioning & decision-maker pitch decks',
    'High-touch outreach materials and executive intro facilitation',
    'Meeting support, negotiation alignment, and activation oversight'
  ];

  const fundingSteps = [
    'Funding requirement definition & capital structure mapping',
    'Target source mapping (DFIs, impact funds, PE, private capital)',
    'Investment/programme narrative refinement & institutional memo design',
    'Virtual deal room setup & documentation coordination',
    'Relationship management & diligence process tracking'
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* HERO */}
      <section className="relative pt-12 sm:pt-16 pb-16 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Capital & Sponsorship Advisory"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B] via-[#0B1B2B]/90 to-[#0B1B2B]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4 drop-shadow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Sponsorship & Funding Strategy Advisory
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 max-w-4xl leading-tight">
            MAKE THE OPPORTUNITY EASY TO UNDERSTAND. <br />
            <span className="text-[#C5A059] italic font-normal">MAKE THE RIGHT PEOPLE WANT TO DISCUSS IT.</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed font-sans">
            Haugh Advisory supports organizations in shaping credible propositions and pursuing relevant sponsors, funders, and strategic counterparties across international growth corridors.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => openLeadModal('GENERAL', 'Sponsorship Strategy')}
              className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Discuss Sponsorship Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openLeadModal('GENERAL', 'Funding Access Support')}
              className="bg-[#142A3E] hover:bg-[#1f3d5a] text-white border border-[#C5A059]/60 px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2"
            >
              <span>Discuss Funding Access</span>
              <TrendingUp className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>
      </section>

      {/* REGULATORY DISCLAIMER BANNER (IMPORTANT WORDING RULE FROM SECTION 09) */}
      <section className="py-6 bg-[#142A3E]/90 border-y border-[#C5A059]/40">
        <div className="max-w-5xl mx-auto px-4 flex items-start space-x-3 text-gray-300 text-xs sm:text-sm font-sans">
          <ShieldAlert className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-serif block mb-0.5">Professional Standards & Institutional Safeguards:</strong>
            Haugh Advisory provides strategic positioning, deal material preparation, stakeholder mapping, and relationship facilitation. We do not promise guaranteed funding, guaranteed capital allocation, or instant government approvals. Our practice sells access, narrative clarity, process discipline, and relationship execution.
          </div>
        </div>
      </section>

      {/* TWO PILLARS: SPONSORSHIP vs FUNDING ACCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* SPONSORSHIP PILLAR */}
          <div className="bg-[#142A3E]/70 border border-gray-800 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[#C5A059]/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-[#C5A059] uppercase tracking-widest block">
                    CORPORATE & EVENT SPONSORSHIP
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Sponsorship Strategy & Acquisition
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-sans border-l-2 border-[#C5A059] pl-4">
                Moving beyond logo placement. We position sports assets, summits, regional infrastructure, and cultural initiatives so corporate sponsors clearly see B2B market entry value.
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block">Advisory Scope:</span>
                {sponsorshipSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openLeadModal('GENERAL', 'Sponsorship Advisory')}
              className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Initiate Sponsorship Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* FUNDING ACCESS PILLAR */}
          <div className="bg-[#142A3E]/70 border border-gray-800 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[#C5A059]/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-[#C5A059] uppercase tracking-widest block">
                    CAPITAL & DFI RELATIONS
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Funding Strategy & Access
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-sans border-l-2 border-gray-600 pl-4">
                De-risking capital conversations for project developers, green energy sponsors, and state enterprises seeking DFI debt, blended finance, and private equity co-investments.
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block">Advisory Scope:</span>
                {fundingSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openLeadModal('GENERAL', 'Funding Access Advisory')}
              className="w-full bg-[#142A3E] hover:bg-[#1f3d5a] border border-[#C5A059] text-[#C5A059] py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Initiate Funding Access Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to position your project for global sponsors or funding partners?
        </h2>
        <p className="text-gray-300 text-sm font-sans mb-6">
          Schedule an executive briefing with our capital & sponsorship practice leads.
        </p>
        <button
          onClick={() => openLeadModal('GENERAL', 'Sponsorship & Funding')}
          className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg transition-all inline-flex items-center space-x-2"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
