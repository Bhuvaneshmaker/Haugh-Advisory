import React from 'react';
import { Logo } from '../components/Logo';
import { ShieldCheck, Lock, AlertTriangle, FileText } from 'lucide-react';

interface PrivacyTermsPageProps {
  mode: 'privacy' | 'terms';
}

export const PrivacyTermsPage: React.FC<PrivacyTermsPageProps> = ({ mode }) => {
  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* HEADER */}
      <section className="relative pt-12 sm:pt-16 pb-12 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4 drop-shadow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Institutional Governance & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            {mode === 'privacy' ? 'Privacy Policy & Data Protection' : 'Terms of Service & Regulatory Disclaimers'}
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mt-3 leading-relaxed font-sans">
            Haugh Advisory operating standards, confidentiality guarantees, and professional regulatory safeguards.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
        {mode === 'privacy' ? (
          <>
            <div className="bg-[#142A3E]/80 border border-[#C5A059]/40 rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#C5A059] font-serif text-xl font-bold">
                <Lock className="w-5 h-5" />
                <span>1. Data Collection & Executive Privacy Guarantee</span>
              </div>
              <p>
                Haugh Advisory collects information submitted through our structured enquiry forms, including full name, institutional email address, organization name, target country or market corridor, and project parameters. We utilize this information exclusively for qualifying advisory opportunities and establishing bilateral communication channels.
              </p>
            </div>

            <div className="bg-[#142A3E]/80 border border-gray-800 rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#C5A059] font-serif text-xl font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>2. Confidentiality & Non-Disclosure Standard</span>
              </div>
              <p>
                We do not sell, license, or transfer executive contact details or transaction briefs to third-party marketing brokers. All submitted briefs are held under strict institutional confidentiality protocols. Information is disclosed only to verified advisory partners upon mutual execution of a Non-Disclosure Agreement (NDA).
              </p>
            </div>

            <div className="bg-[#142A3E]/80 border border-gray-800 rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#C5A059] font-serif text-xl font-bold">
                <FileText className="w-5 h-5" />
                <span>3. Virtual Deal Room & Watermarked Access Logs</span>
              </div>
              <p>
                Access to the Haugh Advisory Gated Deal Room requires identity verification. Documents accessed within the portal are dynamically watermarked with the user’s IP address, timestamp, and institutional email to prevent unauthorized cross-border distribution.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#142A3E]/80 border border-[#C5A059]/40 rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#C5A059] font-serif text-xl font-bold">
                <AlertTriangle className="w-5 h-5 text-[#C5A059]" />
                <span>1. Regulatory & Financial Services Disclaimer</span>
              </div>
              <p>
                The information provided on this website is for institutional orientation and informational purposes only. It does not constitute formal legal, investment, tax, or regulated financial advice. Haugh Advisory operates as a business development, market entry, and partnership advisory firm.
              </p>
            </div>

            <div className="bg-[#142A3E]/80 border border-gray-800 rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#C5A059] font-serif text-xl font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>2. No Guaranteed Capital or Government Approvals Claim</span>
              </div>
              <p>
                Haugh Advisory does not make claims of guaranteed capital placement, guaranteed sponsorship funds, or guaranteed sovereign regulatory approvals. All transactions and partnerships are subject to formal due diligence, board approval, and sovereign regulatory compliance.
              </p>
            </div>

            <div className="bg-[#142A3E]/80 border border-gray-800 rounded-xl p-8 space-y-4">
              <div className="flex items-center space-x-2 text-[#C5A059] font-serif text-xl font-bold">
                <FileText className="w-5 h-5" />
                <span>3. Intellectual Property & Brand Assets</span>
              </div>
              <p>
                "Haugh Advisory", "Where Ideas Meet Solid Ground", brand logos, deal memos, and market entry research materials published on this portal are the intellectual property of Haugh Advisory. Unauthorized copying or redistribution without prior written consent is strictly prohibited.
              </p>
            </div>
          </>
        )}
      </section>

    </div>
  );
};
