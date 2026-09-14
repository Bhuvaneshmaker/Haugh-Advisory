import React, { useState } from 'react';
import { Direction, OrgType } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { COMPANY_PHILOSOPHY } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [direction, setDirection] = useState<Direction>('INBOUND');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [orgType, setOrgType] = useState<OrgType>('Business');
  const [countryMarket, setCountryMarket] = useState('Nigeria');
  const [requirementType, setRequirementType] = useState<'Market Entry' | 'Partnership' | 'Sponsorship' | 'Funding' | 'Business Development' | 'Other'>('Market Entry');
  const [timeline, setTimeline] = useState('1–3 months');
  const [budgetScope, setBudgetScope] = useState('');
  const [referralSource, setReferralSource] = useState('Search / Website');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [routedTo, setRoutedTo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          orgType,
          direction,
          countryMarket,
          requirementType,
          timeline,
          budgetScope,
          referralSource,
          message
        })
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setRoutedTo(data.routedTo || 'inbound@haughadvisory.com');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white pb-safe">
      
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 bg-geo-pattern border-b border-[#142A3E] pt-safe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Direct Executive Enquiry
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Start a Conversation with Haugh Advisory
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Tell us what you are trying to achieve. Submissions are reviewed directly by our regional advisory practice leads.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#142A3E] border border-[#C5A059]/40 rounded-xl p-8 space-y-6 shadow-xl">
              <h2 className="font-serif text-2xl font-bold text-white">
                Advisory Liaison Channels
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Submissions are processed through our lead routing engine and dispatched immediately to the designated practice partner.
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-700/60">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-[#0B1B2B] border border-[#C5A059]/40 text-[#C5A059] rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">
                      Inbound Market Entry Desk
                    </span>
                    <a href="mailto:inbound@haughadvisory.com" className="font-mono text-sm text-[#C5A059] font-bold hover:underline">
                      inbound@haughadvisory.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-[#0B1B2B] border border-[#C5A059]/40 text-[#C5A059] rounded-lg">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">
                      Outbound Global Bridge Desk
                    </span>
                    <a href="mailto:outbound@haughadvisory.com" className="font-mono text-sm text-[#C5A059] font-bold hover:underline">
                      outbound@haughadvisory.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hubs Box */}
            <div className="bg-[#142A3E]/60 border border-gray-800 rounded-xl p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">
                Regional Hub Network
              </h3>
              <div className="space-y-3">
                {COMPANY_PHILOSOPHY.regionalNodes.map((node) => (
                  <div key={node.city} className="flex items-start space-x-3 text-xs">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">{node.city}</strong> ({node.country})
                      <span className="block text-[11px] text-gray-400">{node.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#142A3E] border border-[#C5A059]/30 rounded-xl p-8 shadow-2xl">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto border border-[#C5A059]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Enquiry Received</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you. Your enquiry has been logged and routed to <strong className="text-[#C5A059]">{routedTo}</strong>. A member of Haugh Advisory will review the information and determine the most appropriate next conversation.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-[#C5A059] text-[#0B1B2B] px-6 py-2.5 rounded font-bold text-xs uppercase"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Advisory Direction *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDirection('INBOUND')}
                      className={`p-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all text-center ${
                        direction === 'INBOUND'
                          ? 'bg-[#C5A059] text-[#0B1B2B] border-[#C5A059]'
                          : 'bg-[#0B1B2B] text-gray-300 border-gray-700'
                      }`}
                    >
                      Entering Nigeria / Africa (Inbound)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDirection('OUTBOUND')}
                      className={`p-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all text-center ${
                        direction === 'OUTBOUND'
                          ? 'bg-[#C5A059] text-[#0B1B2B] border-[#C5A059]'
                          : 'bg-[#0B1B2B] text-gray-300 border-gray-700'
                      }`}
                    >
                      Global Partners / Capital (Outbound)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="m.vance@institution.com"
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Sovereign Energy Fund"
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Country / Target Market *
                    </label>
                    <input
                      type="text"
                      required
                      value={countryMarket}
                      onChange={(e) => setCountryMarket(e.target.value)}
                      placeholder="e.g. Nigeria, UAE, UK, Kenya"
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      What Do You Need? *
                    </label>
                    <select
                      value={requirementType}
                      onChange={(e) => setRequirementType(e.target.value as any)}
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Market Entry">Market Entry Advisory</option>
                      <option value="Partnership">Strategic Partnership Development</option>
                      <option value="Sponsorship">Sponsorship Strategy & Acquisition</option>
                      <option value="Funding">Funding Strategy & Access</option>
                      <option value="Business Development">Business Development & BD Pipeline</option>
                      <option value="Other">Other Strategic Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="0–30 days">0–30 days (Immediate)</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="Exploratory">Exploratory / Strategic Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    What are you trying to achieve? (Brief Description) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide context regarding market scope, decision criteria, or specific counterparty requirements..."
                    className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Budget / Transaction Context <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={budgetScope}
                      onChange={(e) => setBudgetScope(e.target.value)}
                      placeholder="e.g. $10M–$50M project scope"
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      How did you hear about us? <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={referralSource}
                      onChange={(e) => setReferralSource(e.target.value)}
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Search / Website">Search / Website</option>
                      <option value="Executive Referral">Executive Referral</option>
                      <option value="LinkedIn">LinkedIn / Social</option>
                      <option value="Industry Summit">Industry Summit / Event</option>
                      <option value="Other">Other Channel</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  {loading ? <span>Processing Enquiry...</span> : <span>Send an Enquiry</span>}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

