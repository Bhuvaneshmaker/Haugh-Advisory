import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Mail, Send, AlertCircle } from 'lucide-react';
import { Direction, OrgType } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDirection?: Direction;
  defaultPackage?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultDirection = 'GENERAL',
  defaultPackage = ''
}) => {
  const [direction, setDirection] = useState<Direction>(defaultDirection);
  const [packageType, setPackageType] = useState<string>(defaultPackage);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [orgType, setOrgType] = useState<OrgType>('Business');
  const [budgetScope, setBudgetScope] = useState('$50K - $150K');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [routingTarget, setRoutingTarget] = useState('');

  useEffect(() => {
    setDirection(defaultDirection);
    setPackageType(defaultPackage);
  }, [defaultDirection, defaultPackage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          orgType,
          direction,
          packageType: packageType || 'Custom Mandate',
          budgetScope,
          message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register advisory lead.');
      }

      setSuccess(true);
      setRoutingTarget(data.routedTo || (direction === 'INBOUND' ? 'inbound@haughadvisory.com' : 'outbound@haughadvisory.com'));
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setFullName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B1B2B] text-white rounded-xl shadow-2xl border border-[#C5A059]/40 my-8 overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#142A3E] border-b border-[#E2E8F0]/10">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-lg font-semibold tracking-wide text-white">
              Initiate Institutional Mandate
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">
                Mandate Submission Confirmed
              </h4>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                Your institutional inquiry has been logged and routed directly to the regional lead desk.
              </p>

              <div className="bg-[#142A3E] p-4 rounded-lg border border-[#C5A059]/30 inline-block max-w-md my-4">
                <div className="flex items-center justify-center space-x-2 text-xs text-[#C5A059]">
                  <Mail className="w-4 h-4" />
                  <span className="font-semibold uppercase tracking-wider">Dispatched Notification Route</span>
                </div>
                <p className="font-mono text-white text-sm mt-1">{routingTarget}</p>
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Direction Selector Tabs */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Advisory Direction & Mandate Focus *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDirection('INBOUND')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold uppercase tracking-wider border transition-all flex flex-col items-center text-center ${
                      direction === 'INBOUND'
                        ? 'bg-[#C5A059] text-[#0B1B2B] border-[#C5A059] shadow'
                        : 'bg-[#142A3E] text-gray-300 border-gray-700 hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span>Inbound</span>
                    <span className="text-[10px] opacity-80 font-normal">Market Entry</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDirection('OUTBOUND')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold uppercase tracking-wider border transition-all flex flex-col items-center text-center ${
                      direction === 'OUTBOUND'
                        ? 'bg-[#C5A059] text-[#0B1B2B] border-[#C5A059] shadow'
                        : 'bg-[#142A3E] text-gray-300 border-gray-700 hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span>Outbound</span>
                    <span className="text-[10px] opacity-80 font-normal">Global Bridge</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDirection('GENERAL')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold uppercase tracking-wider border transition-all flex flex-col items-center text-center ${
                      direction === 'GENERAL'
                        ? 'bg-[#C5A059] text-[#0B1B2B] border-[#C5A059] shadow'
                        : 'bg-[#142A3E] text-gray-300 border-gray-700 hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span>General</span>
                    <span className="text-[10px] opacity-80 font-normal">Advisory Retainer</span>
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 mt-1.5 italic">
                  {direction === 'INBOUND' && 'Requests are automatically routed to inbound@haughadvisory.com'}
                  {direction === 'OUTBOUND' && 'Requests are automatically routed to outbound@haughadvisory.com'}
                  {direction === 'GENERAL' && 'General advisory queries routed to executive committee.'}
                </p>
              </div>

              {/* Grid Inputs */}
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
                    placeholder="e.g. Victoria Vance"
                    className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
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
                    placeholder="v.vance@institution.com"
                    className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Organization / Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Sovereign Holdings"
                    className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Organization Type
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value as OrgType)}
                    className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Business">Multinational Business</option>
                    <option value="Gov">Government / Sovereign Ministry</option>
                    <option value="NGO">NGO / Multilateral</option>
                    <option value="Startup">High-Growth Venture / Startup</option>
                    <option value="Institutional Investor">Institutional Investor / SWF</option>
                  </select>
                </div>
              </div>

              {/* Package & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Packaged Offer Preference
                  </label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="">Custom Advisory Mandate</option>
                    <option value="Market Entry">Market Entry (Inbound)</option>
                    <option value="Global Bridge">Global Bridge (Outbound)</option>
                    <option value="Sponsor & Partner Ready">Sponsor & Partner Ready</option>
                    <option value="Funded & Followed">Funded & Followed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Estimated Budget Scope
                  </label>
                  <select
                    value={budgetScope}
                    onChange={(e) => setBudgetScope(e.target.value)}
                    className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="< $50K">Under $50,000</option>
                    <option value="$50K - $150K">$50,000 – $150,000</option>
                    <option value="$150K - $500K">$150,000 – $500,000</option>
                    <option value="$500K+">$500,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                  Mandate Scope & Executive Message *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline key objectives, target jurisdictions, timeline expectations, and strategic requirements..."
                  className="w-full bg-[#142A3E] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {errorMessage && (
                <div className="bg-red-900/40 border border-red-500/50 p-3 rounded-md flex items-center space-x-2 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing & Routing Request...</span>
                  ) : (
                    <>
                      <span>Transmit Mandate Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
