import React, { useState } from 'react';
import { SERVICE_LINES } from '../data/mockData';
import {
  Compass,
  Globe2,
  FileText,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Layers
} from 'lucide-react';
import { Direction } from '../types';

interface ServicesPageProps {
  openLeadModal: (direction?: Direction, packageType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ openLeadModal }) => {
  const [expandedId, setExpandedId] = useState<string>('inbound-entry');

  const renderIcon = (name: string) => {
    switch (name) {
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

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white pb-safe">
      
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 bg-geo-pattern border-b border-[#142A3E] pt-safe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Comprehensive Advisory Suite
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Institutional Service Lines Breakdown
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Categorized strategic capabilities engineered to de-risk market penetration, accelerate capital allocation, and command institutional authority.
          </p>
        </div>
      </section>

      {/* SERVICE LINES WITH EXPANDABLE DETAIL VIEWS */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {SERVICE_LINES.map((service) => {
          const isExpanded = expandedId === service.id;
          const serviceDirection: Direction = service.category === 'Inbound' ? 'INBOUND' : service.category === 'Outbound' ? 'OUTBOUND' : 'GENERAL';

          return (
            <div
              key={service.id}
              className={`bg-[#142A3E]/70 border rounded-xl transition-all overflow-hidden ${
                isExpanded ? 'border-[#C5A059] shadow-2xl bg-[#142A3E]' : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Header Bar */}
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <div className="p-3 bg-[#0B1B2B] border border-[#C5A059]/40 rounded-lg shrink-0">
                    {renderIcon(service.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-[#0B1B2B] text-[#C5A059] border border-[#C5A059]/20">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mt-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <span className="hidden sm:inline text-xs text-gray-400">
                    {isExpanded ? 'Collapse Scope' : 'Expand Details'}
                  </span>
                  <div className="p-2 bg-[#0B1B2B] rounded-full text-[#C5A059]">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Detail Section */}
              {isExpanded && (
                <div className="px-6 pb-8 pt-2 border-t border-gray-700/60 space-y-6 animate-fadeIn">
                  
                  {/* Service Line Visual Banner */}
                  {service.imageUrl && (
                    <div className="h-56 w-full rounded-xl overflow-hidden relative my-4 border border-gray-800">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-200 bg-[#0B1B2B]/80 backdrop-blur p-3 rounded-lg border border-[#C5A059]/30">
                        <span className="font-semibold text-[#C5A059] uppercase block text-[10px] tracking-widest">Advisory Visual Context</span>
                        {service.shortDesc}
                      </div>
                    </div>
                  )}

                  <p className="text-gray-300 text-sm leading-relaxed font-sans">
                    {service.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#0B1B2B] p-4 rounded-lg border border-gray-800">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-[#C5A059] font-semibold uppercase">
                        <Target className="w-4 h-4" />
                        <span>Strategic Objective</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-normal">
                        {service.collapsibleDetails.strategicObjective}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-[#C5A059] font-semibold uppercase">
                        <Users className="w-4 h-4" />
                        <span>Target Profile</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-normal">
                        {service.collapsibleDetails.targetClients}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-[#C5A059] font-semibold uppercase">
                        <Clock className="w-4 h-4" />
                        <span>Typical Duration</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-normal">
                        {service.collapsibleDetails.typicalDuration}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables & Milestones */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                        Core Deliverables Matrix
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start space-x-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                        Sequential Execution Milestones
                      </h4>
                      <ul className="space-y-2">
                        {service.collapsibleDetails.keyMilestones.map((milestone, mIdx) => (
                          <li key={mIdx} className="text-xs text-gray-300 bg-[#0B1B2B]/60 p-2 rounded border border-gray-800">
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Trigger */}
                  <div className="pt-4 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-400">
                      Ready to execute on this specific advisory line?
                    </span>
                    <button
                      onClick={() => openLeadModal(serviceDirection, service.title)}
                      className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </section>

    </div>
  );
};
