import React from 'react';
import { Logo } from '../components/Logo';
import { Direction } from '../types';
import { Compass, Globe2, ShieldCheck, CheckCircle2, ArrowRight, MapPin, Building2, Layers } from 'lucide-react';

interface MarketEntryPageProps {
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const MarketEntryPage: React.FC<MarketEntryPageProps> = ({ openLeadModal }) => {
  const inboundFeatures = [
    'Market and stakeholder orientation in Nigeria and West Africa',
    'Entry model selection and priority market definition',
    'Local partner identification, background checking, and qualification',
    'Government & institutional relationship mapping',
    'On-the-ground business development and executive introductions',
    'In-country coordination, licensing, and local execution oversight'
  ];

  const outboundFeatures = [
    'International partner mapping across UK, GCC, EU, and US corridors',
    'Sponsor and institutional prospecting for African enterprises',
    'Global business-development outreach and lead generation',
    'Cross-border positioning and institutional deck preparation',
    'Support for partnership, sponsorship, and funding conversations'
  ];

  const engagementPhases = [
    { phase: '01', title: 'Understand', desc: 'Brief, commercial objectives, regulatory constraints, decision criteria' },
    { phase: '02', title: 'Map', desc: 'Market, sovereign stakeholders, local partners, sponsors, or funding channels' },
    { phase: '03', title: 'Position', desc: 'Narrative synthesis, value proposition, deal materials, and engagement plan' },
    { phase: '04', title: 'Engage', desc: 'Introductions, executive meetings, outreach, and commercial negotiation support' },
    { phase: '05', title: 'Activate', desc: 'Execution coordination, follow-through, and relationship governance' }
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 sm:pt-16 pb-16 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
            alt="International Trade Corridor"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B] via-[#0B1B2B]/90 to-[#0B1B2B]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4 drop-shadow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Signature Market Access Advisory
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 max-w-4xl leading-tight">
            ENTER THE MARKET WITH CONTEXT, RELATIONSHIPS AND A PLAN.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed font-sans">
            Haugh Advisory helps international organizations assess, structure and execute their entry into Nigeria and selected African markets, while connecting African leaders to global corridors.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => openLeadModal('INBOUND', 'Market Entry')}
              className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Discuss Inbound Market Entry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openLeadModal('OUTBOUND', 'Global Bridge')}
              className="bg-[#142A3E] hover:bg-[#1f3d5a] text-white border border-[#C5A059]/60 px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2"
            >
              <span>Discuss Outbound Market Access</span>
              <Globe2 className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>
      </section>

      {/* TWO CORRIDORS: INBOUND VS OUTBOUND */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* INBOUND */}
          <div className="bg-[#142A3E]/70 border border-[#C5A059]/40 rounded-xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-[#C5A059] uppercase tracking-widest block">
                    INBOUND CORRIDOR
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Entering Nigeria & Africa
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-sans border-l-2 border-[#C5A059] pl-4">
                Designed for international businesses, brands, multinationals, and foreign institutions seeking a defensible, risk-managed route into high-growth emerging markets.
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block">Scope & Deliverables:</span>
                {inboundFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openLeadModal('INBOUND', 'Inbound Market Entry')}
              className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore Inbound Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* OUTBOUND */}
          <div className="bg-[#142A3E]/70 border border-gray-800 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                  <Globe2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-[#C5A059] uppercase tracking-widest block">
                    OUTBOUND CORRIDOR
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Connecting African Organizations to Global Opportunity
                  </h2>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-sans border-l-2 border-gray-600 pl-4">
                Designed for African enterprises, government agencies, and impact initiatives seeking international partners, sponsors, capital channels, and global market presence.
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block">Scope & Deliverables:</span>
                {outboundFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openLeadModal('OUTBOUND', 'Outbound Global Bridge')}
              className="w-full bg-[#142A3E] hover:bg-[#1f3d5a] border border-[#C5A059] text-[#C5A059] py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore Outbound Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 5-STAGE ENGAGEMENT MODEL */}
      <section className="py-20 bg-[#142A3E]/40 border-y border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Methodology
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              5-Phase Engagement Model
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Structured discipline from initial briefing through on-the-ground activation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {engagementPhases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-[#0B1B2B] border border-gray-800 p-6 rounded-xl space-y-3 relative group hover:border-[#C5A059]/60 transition-all"
              >
                <span className="font-mono text-2xl font-bold text-[#C5A059] block">
                  {phase.phase}
                </span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                  {phase.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
          Planning to enter Nigeria or another emerging market?
        </h2>
        <p className="text-gray-300 text-sm font-sans mb-6">
          Tell us what you are trying to accomplish and where you need access. We will map out the most viable advisory pathway.
        </p>
        <button
          onClick={() => openLeadModal('GENERAL', 'Market Entry Inquiry')}
          className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider shadow-lg transition-all inline-flex items-center space-x-2"
        >
          <span>Request Market Entry Briefing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
