import React from 'react';
import { Logo } from '../components/Logo';
import { SERVICE_LINES } from '../data/mockData';
import { Direction } from '../types';
import { Compass, Globe2, FileText, Award, Users, ArrowRight, ShieldCheck, CheckCircle2, Building2, Layers } from 'lucide-react';

interface WhatWeDoPageProps {
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const WhatWeDoPage: React.FC<WhatWeDoPageProps> = ({ openLeadModal }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#C5A059]" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-[#C5A059]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#C5A059]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#C5A059]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#C5A059]" />;
      default: return <Layers className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const coreCapabilitiesList = [
    {
      number: '01',
      title: 'Market Entry Advisory',
      description: 'Market-entry strategy, local landscape review, stakeholder mapping, partner identification, market access planning and local execution support.'
    },
    {
      number: '02',
      title: 'Business Development',
      description: 'Pipeline development, opportunity mapping, relationship development, partner outreach and support through commercial discussions.'
    },
    {
      number: '03',
      title: 'Strategic Partnerships',
      description: 'Identify, qualify and approach counterparties whose capabilities, market position or networks materially strengthen an initiative.'
    },
    {
      number: '04',
      title: 'Sponsorship Strategy & Acquisition',
      description: 'Clarify the sponsorship proposition, build target lists, create engagement materials and support sponsor conversations.'
    },
    {
      number: '05',
      title: 'Funding Strategy & Access',
      description: 'Position funding requirements, identify appropriate funding channels and support the relationship and documentation process without false capital promises.'
    },
    {
      number: '06',
      title: 'Cross-Border Representation',
      description: 'Act as a local or international-facing coordination layer for organizations needing credible representation, introductions and execution support.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* PAGE HEADER */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Tower"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B] via-[#0B1B2B]/90 to-[#0B1B2B]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4 drop-shadow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Services Architecture & Engagement Models
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 max-w-3xl">
            Commercial Business Development & Advisory Capabilities
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-sans">
            Built around client problems and concrete commercial outcomes — de-risking market entry, structuring partnerships, and opening institutional doors across international corridors.
          </p>
        </div>
      </section>

      {/* PROBLEM STATEMENT / WHAT WE SOLVE */}
      <section className="py-16 bg-[#142A3E]/40 border-b border-[#142A3E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            The Access Friction
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Growth across emerging markets is rarely blocked by ambition. It is blocked by access.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            Access to the right market intelligence, sovereign stakeholder mapping, local decision-makers, qualified partners, corporate sponsors, and structured capital channels. Haugh Advisory acts as the senior coordination layer operating directly around those access points.
          </p>
        </div>
      </section>

      {/* 6 CORE SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Service Architecture
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mt-1">
            Our Primary Advisory Pillars
          </h2>
          <div className="w-12 h-1 bg-[#C5A059] mx-auto my-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilitiesList.map((item) => (
            <div
              key={item.number}
              className="bg-[#142A3E]/70 border border-gray-800 hover:border-[#C5A059]/60 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-[#C5A059]">{item.number}</span>
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]/60 group-hover:text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800">
                <button
                  onClick={() => openLeadModal('GENERAL', item.title)}
                  className="w-full text-left text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED ADVISORY LINE CARDS */}
      <section className="py-16 bg-[#142A3E]/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Concrete Deliverables
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Structured Engagement Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICE_LINES.map((service) => (
              <div
                key={service.id}
                className="bg-[#142A3E]/80 border border-gray-800 rounded-xl overflow-hidden flex flex-col sm:flex-row"
              >
                {service.imageUrl && (
                  <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0B1B2B] via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-[#0B1B2B] rounded border border-[#C5A059]/30">
                        {renderIcon(service.iconName)}
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#C5A059]">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-gray-800">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block tracking-wider">Key Outputs:</span>
                    {service.deliverables.slice(0, 2).map((del, dIdx) => (
                      <div key={dIdx} className="text-[11px] text-gray-300 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#C5A059] shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openLeadModal('GENERAL', service.title)}
                    className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 mt-2"
                  >
                    <span>Initiate Advisory Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B1B2B] via-[#142A3E] to-[#0B1B2B] border-t border-[#C5A059]/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Have a market, partnership, sponsorship or funding objective that needs the right route?
          </h2>
          <p className="text-gray-300 text-sm font-sans">
            Tell us what you are trying to achieve. We will help determine the most practical next conversation.
          </p>
          <button
            onClick={() => openLeadModal('GENERAL')}
            className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider shadow-xl transition-all inline-flex items-center space-x-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
