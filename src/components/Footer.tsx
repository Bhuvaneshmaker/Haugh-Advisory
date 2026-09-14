import React from 'react';
import { Logo } from './Logo';
import { Mail, Globe, MapPin, ShieldCheck, Lock } from 'lucide-react';
import { COMPANY_PHILOSOPHY } from '../data/mockData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openLeadModal: (direction?: 'INBOUND' | 'OUTBOUND' | 'GENERAL') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openLeadModal }) => {
  return (
    <footer className="bg-[#0B1B2B] text-white border-t border-[#142A3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" height={44} />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md pt-2">
              Haugh Advisory is an institutional strategic advisory firm specializing in cross-border market entry, sovereign policy navigation, and tier-1 deal structuring across Africa, Europe, the Middle East, and North America.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <div className="p-1.5 rounded bg-[#142A3E] text-[#C5A059]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Inbound Inquiries</span>
                  <a href="mailto:inbound@haughadvisory.com" className="hover:text-[#C5A059] font-mono transition-colors">
                    inbound@haughadvisory.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <div className="p-1.5 rounded bg-[#142A3E] text-[#C5A059]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Outbound & Global Bridge</span>
                  <a href="mailto:outbound@haughadvisory.com" className="hover:text-[#C5A059] font-mono transition-colors">
                    outbound@haughadvisory.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service Lines Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#C5A059]">
              Advisory Practice
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => setActiveTab('what-we-do')} className="hover:text-[#C5A059] transition-colors">
                  What We Do
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('market-entry')} className="hover:text-[#C5A059] transition-colors">
                  Inbound & Outbound Market Entry
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('partnerships')} className="hover:text-[#C5A059] transition-colors">
                  Strategic Partnerships
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('sponsorships-funding')} className="hover:text-[#C5A059] transition-colors">
                  Sponsorships & Funding Strategy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('insights')} className="hover:text-[#C5A059] transition-colors">
                  Insights & Market Notes
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#C5A059]">
              Governance & Contact
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-[#C5A059] transition-colors">
                  About Haugh Advisory
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-[#C5A059] transition-colors">
                  Start a Conversation
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('privacy')} className="hover:text-[#C5A059] transition-colors">
                  Privacy Policy & Protection
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('terms')} className="hover:text-[#C5A059] transition-colors">
                  Terms & Regulatory Safeguards
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('deal-room')} className="text-[#C5A059] hover:underline flex items-center space-x-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Stakeholder Deal Room</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Global Corridors */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#C5A059]">
              Regional Hubs
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {COMPANY_PHILOSOPHY.regionalNodes.map((node) => (
                <li key={node.city} className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">{node.city}</span>, <span className="text-gray-400">{node.country}</span>
                    <span className="block text-[10px] text-gray-500">{node.focus}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Security Notice */}
        <div className="mt-12 pt-8 border-t border-[#142A3E] flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Encrypted Gated Portal with Dynamic SVG Watermarking Protocol</span>
          </div>

          <div className="text-center md:text-right">
            <span>© {new Date().getFullYear()} Haugh Advisory. All Rights Reserved. Confidentiality & Non-Disclosure Enforced.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
