import React from 'react';
import { Logo } from '../components/Logo';
import { COMPANY_PHILOSOPHY, LEADERSHIP_TEAM } from '../data/mockData';
import { ShieldCheck, MapPin, Globe2, Award, ChevronRight, ArrowRight, Linkedin } from 'lucide-react';

interface AboutPageProps {
  openLeadModal: (direction?: 'INBOUND' | 'OUTBOUND' | 'GENERAL') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openLeadModal }) => {
  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white pb-safe">
      
      {/* Page Header */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
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

      {/* VISION AND MISSION */}
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

      {/* CORE MARKET-ENTRY PHILOSOPHY WITH SIDE PHOTO */}
      <section className="py-16 bg-[#142A3E]/40 border-y border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                  Editorial Manifesto
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
                  The Architecture of Defensible Market Penetration
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-[#C5A059]/40 pl-6">
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

            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Haugh Advisory Corporate Office"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1B2B]/90 backdrop-blur p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                    <span>Tier-1 Executive Governance</span>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-1">
                    Directing multi-jurisdictional advisory mandates with precision and institutional discretion.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Senior Partners & Leadership
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mt-1">
            Institutional Advisory Practice Leadership
          </h2>
          <div className="w-12 h-1 bg-[#C5A059] mx-auto my-3" />
          <p className="text-gray-400 text-xs sm:text-sm">
            Seasoned former trade diplomats, sovereign investment leaders, and tier-1 deal architects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-[#142A3E]/70 border border-gray-800 hover:border-[#C5A059]/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 w-full overflow-hidden relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#C5A059] block leading-snug">
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Partner</span>
                  <div className="p-1.5 rounded-full bg-[#0B1B2B] text-[#C5A059] hover:text-white transition-colors cursor-pointer">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGIONAL NODES & CORRIDOR NETWORK */}
      <section className="py-20 bg-geo-pattern border-t border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-[#142A3E]/60 border border-gray-800 rounded-xl overflow-hidden hover:border-[#C5A059]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 w-full overflow-hidden relative">
                    <img
                      src={node.imageUrl}
                      alt={node.city}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent" />
                  </div>

                  <div className="p-4 space-y-1">
                    <div className="flex items-center space-x-1 text-xs text-[#C5A059] font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{node.country}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-white">{node.city}</h3>
                    <p className="text-[11px] text-gray-400 pt-1 leading-snug">{node.focus}</p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => openLeadModal('GENERAL')}
                    className="w-full text-center text-[10px] font-bold uppercase tracking-wider text-[#C5A059] hover:text-white pt-2 border-t border-gray-800 transition-colors"
                  >
                    Connect Hub
                  </button>
                </div>
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
        </div>
      </section>

    </div>
  );
};
