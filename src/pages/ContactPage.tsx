import React, { useState } from 'react';
import { Direction, OrgType } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_PHILOSOPHY } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [direction, setDirection] = useState<Direction>('INBOUND');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [orgType, setOrgType] = useState<OrgType>('Business');
  const [packageType, setPackageType] = useState('Market Entry');
  const [budgetScope, setBudgetScope] = useState('$50K - $150K');
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
          packageType,
          budgetScope,
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
    <div className="min-h-screen bg-[#0B1B2B] text-white">
      
      {/* Header */}
      <section className="pt-16 pb-12 bg-geo-pattern border-b border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Direct Advisory Liaison
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Initiate Institutional Engagement
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Connect directly with our regional lead desks across Johannesburg, London, Dubai, Washington D.C., and Nairobi.
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
                Submissions are processed through our automated lead routing engine and dispatched immediately to the appropriate regional partner.
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
                <h3 className="font-serif text-2xl font-bold text-white">Inquiry Transmitted</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Your mandate inquiry has been logged and routed to <strong className="text-[#C5A059]">{routedTo}</strong>. An advisory partner will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-[#C5A059] text-[#0B1B2B] px-6 py-2.5 rounded font-bold text-xs uppercase"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
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
                      Inbound Market Entry
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
                      Outbound Global Bridge
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
                      placeholder="e.g. Lord Sterling"
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
                      placeholder="sterling@institution.org"
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
                      placeholder="e.g. Sovereign Infrastructure Consortium"
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      Organization Type
                    </label>
                    <select
                      value={orgType}
                      onChange={(e) => setOrgType(e.target.value as OrgType)}
                      className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Business">Business Enterprise</option>
                      <option value="Gov">Government Ministry</option>
                      <option value="NGO">NGO / Development Agency</option>
                      <option value="Startup">High-Growth Tech Venture</option>
                      <option value="Institutional Investor">Sovereign Wealth / Private Equity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Mandate Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details on target markets, regulatory scope, partnership goals..."
                    className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  {loading ? <span>Routing Request...</span> : <span>Transmit Advisory Mandate</span>}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
