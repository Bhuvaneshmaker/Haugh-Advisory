import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import {
  Compass,
  Globe2,
  FileText,
  Award,
  Users,
  ArrowRight,
  ShieldCheck,
  Building2,
  Check,
  ChevronRight,
  Sparkles,
  Lock,
  Layers,
  Zap,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { SERVICE_LINES, PACKAGED_OFFERS, COMPANY_PHILOSOPHY } from '../data/mockData';
import { Direction } from '../types';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, openLeadModal }) => {
  const [hoveredCard, setHoveredCard] = useState<'inbound' | 'outbound' | null>(null);

  // Map icon names to Lucide icon components
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C5A059]" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#C5A059]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#C5A059]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#C5A059]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Layers className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* HERO SECTION WITH GEOMETRIC OVERLAY AND ATMOSPHERIC SKYLINE BACKGROUND */}
      <section className="relative pt-12 sm:pt-16 lg:pt-24 pb-20 lg:pb-32 overflow-hidden bg-geo-pattern pt-safe">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
            alt="Global Financial City Skyline"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B] via-[#0B1B2B]/90 to-[#0B1B2B]" />
        </div>

        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#142A3E]/70 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Institutional Badge & Circular Logo Emblem */}
          <div className="flex flex-col items-center justify-center mb-6">
            <Logo variant="circle" height={68} className="mb-4 drop-shadow-md" />
            <div className="inline-flex items-center space-x-2 bg-[#142A3E]/90 border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#C5A059] uppercase tracking-widest shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Institutional Strategic Advisory & Deal Execution</span>
            </div>
          </div>

          {/* H1 Headline & Subtext */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
              WHERE IDEAS MEET <br className="hidden sm:inline" />
              <span className="text-[#C5A059] italic font-normal">SOLID GROUND</span>
            </h1>

            <p className="font-sans text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              Haugh Advisory bridges sovereign policy, market entry strategy, and tier-1 transaction structuring — accelerating cross-border growth across Africa, Europe, the Middle East, and North America.
            </p>

            {/* Key Live Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2 pb-4">
              <div className="bg-[#142A3E]/80 border border-gray-800 p-3 rounded-lg text-center backdrop-blur-sm">
                <span className="text-xl sm:text-2xl font-bold text-[#C5A059] block font-serif">$460M+</span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Cross-Border Pipeline</span>
              </div>
              <div className="bg-[#142A3E]/80 border border-gray-800 p-3 rounded-lg text-center backdrop-blur-sm">
                <span className="text-xl sm:text-2xl font-bold text-[#C5A059] block font-serif">5 Global</span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Regional Hubs</span>
              </div>
              <div className="bg-[#142A3E]/80 border border-gray-800 p-3 rounded-lg text-center backdrop-blur-sm">
                <span className="text-xl sm:text-2xl font-bold text-[#C5A059] block font-serif">14 MOUs</span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Sovereign Accords</span>
              </div>
              <div className="bg-[#142A3E]/80 border border-gray-800 p-3 rounded-lg text-center backdrop-blur-sm">
                <span className="text-xl sm:text-2xl font-bold text-[#C5A059] block font-serif">100%</span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Compliance Record</span>
              </div>
            </div>

            {/* Split CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openLeadModal('INBOUND', 'Market Entry')}
                className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                id="hero-inbound-cta"
              >
                <span>Initiate Inbound Market Entry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openLeadModal('OUTBOUND', 'Global Bridge')}
                className="w-full sm:w-auto bg-[#142A3E] hover:bg-[#1f3d5a] text-white border border-[#C5A059]/60 px-8 py-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                id="hero-outbound-cta"
              >
                <span>Explore Outbound Global Bridge</span>
                <Globe2 className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE HOVER CARDS: INBOUND vs OUTBOUND */}
      <section className="py-20 bg-[#0B1B2B] border-t border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Dual Strategic Mandates
            </h2>
            <div className="w-12 h-1 bg-[#C5A059] mx-auto my-3" />
            <p className="text-gray-400 text-sm">
              Tailored corridor architecture depending on your institutional expansion trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* INBOUND CARD */}
            <div
              onMouseEnter={() => setHoveredCard('inbound')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                hoveredCard === 'inbound'
                  ? 'bg-[#142A3E] border-[#C5A059] shadow-2xl scale-[1.01]'
                  : 'bg-[#142A3E]/60 border-gray-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                    <Compass className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-widest text-[#C5A059] uppercase bg-[#0B1B2B] px-3 py-1 rounded-full border border-[#C5A059]/20">
                    INBOUND MANDATE
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  Market Entry (Inbound Corridor)
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Engineered for global multinationals, institutional investors, and foreign enterprises seeking seamless entry, regulatory authorization, and local partner alignment in high-growth markets.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Sovereign policy & tariff risk audit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Entity formation & government licensing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Local joint venture due diligence</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openLeadModal('INBOUND', 'Market Entry')}
                  className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  <span>Inquire for Inbound Entry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* OUTBOUND CARD */}
            <div
              onMouseEnter={() => setHoveredCard('outbound')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                hoveredCard === 'outbound'
                  ? 'bg-[#142A3E] border-[#C5A059] shadow-2xl scale-[1.01]'
                  : 'bg-[#142A3E]/60 border-gray-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg text-[#C5A059]">
                    <Globe2 className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-widest text-[#C5A059] uppercase bg-[#0B1B2B] px-3 py-1 rounded-full border border-[#C5A059]/20">
                    OUTBOUND MANDATE
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  Global Bridge (Outbound Expansion)
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Connecting regional market champions, state enterprises, and scale-ups with sovereign wealth funds, private equity hubs, and strategic trade partners across Europe, the GCC, and North America.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>International investor roadshows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Sovereign wealth & DFI matchmaking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Cross-border capital deal structuring</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openLeadModal('OUTBOUND', 'Global Bridge')}
                  className="w-full bg-[#142A3E] hover:bg-[#1f3d5a] border border-[#C5A059] text-[#C5A059] py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  <span>Inquire for Global Bridge</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE, SUPPORTING, AND DELIVERY SERVICE LINES */}
      <section className="py-20 bg-geo-light text-[#1A1A1A] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                Core Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B2B] mt-1">
                Institutional Service Lines
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] hover:text-[#C5A059] transition-colors"
            >
              <span>View Full Service Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_LINES.map((service) => (
              <div
                key={service.id}
                className="rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Image Banner */}
                  {service.imageUrl && (
                    <div className="h-44 w-full overflow-hidden relative">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded bg-[#0B1B2B] text-[#C5A059] shadow">
                        {service.category}
                      </span>
                    </div>
                  )}

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-[#F8F9FA] border border-[#E2E8F0]">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#0B1B2B]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-[11px] font-semibold text-[#0B1B2B] uppercase tracking-wider block mb-1.5">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1">
                        {service.deliverables.slice(0, 3).map((item, dIdx) => (
                          <li key={dIdx} className="text-[11px] text-gray-600 flex items-start space-x-1.5">
                            <span className="text-[#C5A059] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveTab('services')}
                    className="w-full text-left text-xs font-semibold uppercase tracking-wider text-[#0B1B2B] group-hover:text-[#C5A059] flex items-center justify-between pt-3 border-t border-gray-100 transition-colors"
                  >
                    <span>Inspect Full Advisory Details</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PACKAGED OFFERS */}
      <section className="py-20 bg-[#0B1B2B] border-t border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Engagement Models
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Structured Packaged Offers
            </h2>
            <div className="w-12 h-1 bg-[#C5A059] mx-auto my-3" />
            <p className="text-gray-400 text-xs sm:text-sm">
              Standardized advisory packages delivering speed, clarity, and accountable institutional milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGED_OFFERS.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#142A3E]/80 border border-[#C5A059]/30 hover:border-[#C5A059] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] bg-[#0B1B2B] px-2.5 py-1 rounded border border-[#C5A059]/30">
                      {pkg.direction}
                    </span>
                    <span className="text-[10px] text-gray-400 font-sans">{pkg.timeline}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-300 text-xs mt-2 min-h-[48px] leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="my-4 py-3 border-y border-gray-700/60 space-y-2">
                    <div className="text-[11px] text-gray-300">
                      <span className="text-[#C5A059] font-semibold">Target Profile:</span> {pkg.targetProfile}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                      Included Scope Highlights
                    </span>
                    {pkg.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-gray-200">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => openLeadModal(pkg.direction, pkg.name)}
                    className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setActiveTab('packages')}
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:underline"
            >
              <span>Compare Full Feature Matrix & Desktop Table</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* GLOBAL REGIONAL HUBS SHOWCASE */}
      <section className="py-20 bg-geo-pattern border-t border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Cross-Border Corridors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Global Strategic Advisory Nodes
            </h2>
            <div className="w-12 h-1 bg-[#C5A059] mx-auto my-3" />
            <p className="text-gray-400 text-xs sm:text-sm">
              Direct physical and policy presence across key financial capitals, sovereign wealth hubs, and emerging commercial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_PHILOSOPHY.regionalNodes.map((node, index) => (
              <div
                key={index}
                className="bg-[#142A3E]/70 border border-gray-800 hover:border-[#C5A059]/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 w-full overflow-hidden relative">
                    <img
                      src={node.imageUrl}
                      alt={node.city}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 bg-[#0B1B2B]/90 text-[#C5A059] text-[10px] font-mono px-2 py-0.5 rounded border border-[#C5A059]/30 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{node.country}</span>
                    </span>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                      {node.city}
                    </h4>
                    <p className="text-[11px] text-gray-300 leading-snug font-sans">
                      {node.focus}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => openLeadModal('INBOUND', node.city + ' Node')}
                    className="w-full text-center text-[10px] font-bold uppercase tracking-wider text-[#C5A059] hover:text-white pt-2 border-t border-gray-800 transition-colors"
                  >
                    Contact Hub Advisory
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GATED DEAL ROOM TEASER BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#0B1B2B] via-[#142A3E] to-[#0B1B2B] border-t border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Gated Stakeholder Portal</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Access Confidential Pitch Decks & Sovereign Briefings
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Single-use token & email-verified portal equipped with dynamic SVG security watermarking.
            </p>
          </div>

          <div>
            <button
              onClick={() => setActiveTab('deal-room')}
              className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center space-x-2 whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Enter Deal Room</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
