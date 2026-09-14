import React, { useState, useEffect } from 'react';
import { DEAL_ROOM_DOCS } from '../data/mockData';
import { DealRoomDoc, AccessLog } from '../types';
import { Logo } from '../components/Logo';
import {
  ShieldCheck,
  Lock,
  Key,
  Mail,
  FileText,
  Download,
  Eye,
  CheckCircle2,
  AlertCircle,
  Clock,
  UserCheck,
  RefreshCw,
  X,
  FileSearch,
  Sparkles
} from 'lucide-react';

export const DealRoomPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [otpInput, setOtpInput] = useState<string>('');
  
  const [step, setStep] = useState<'request' | 'verify'>('request');
  const [loading, setLoading] = useState<boolean>(false);
  const [demoOtp, setDemoOtp] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [activeDoc, setActiveDoc] = useState<DealRoomDoc | null>(null);
  const [accessLogs, setAccessLogs] = useState<AccessLog[]>([]);

  // Check stored auth session
  useEffect(() => {
    const savedToken = localStorage.getItem('ha_dealroom_token');
    const savedEmail = localStorage.getItem('ha_dealroom_email');
    if (savedToken && savedEmail) {
      setIsAuthenticated(true);
      setUserEmail(savedEmail);
      fetchLogs();
    }
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/dealroom/logs');
      const data = await res.json();
      if (data.logs) {
        setAccessLogs(data.logs);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/dealroom/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, organization })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to request access.');

      setDemoOtp(data.demoOtp || '888888');
      setStep('verify');
    } catch (err: any) {
      setErrorMsg(err.message || 'Error processing access request.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/dealroom/verify-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, otpCode: otpInput })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Verification failed.');

      localStorage.setItem('ha_dealroom_token', data.token);
      localStorage.setItem('ha_dealroom_email', userEmail);
      setIsAuthenticated(true);
      fetchLogs();
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid code.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ha_dealroom_token');
    localStorage.removeItem('ha_dealroom_email');
    setIsAuthenticated(false);
    setStep('request');
    setOtpInput('');
  };

  const handleOpenDoc = async (doc: DealRoomDoc) => {
    setActiveDoc(doc);
    try {
      // Trigger dynamic watermarked stream API call
      await fetch(`/api/dealroom/doc/${doc.id}?email=${encodeURIComponent(userEmail)}`);
      fetchLogs();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white pb-safe">
      
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 bg-geo-pattern border-b border-[#142A3E] pt-safe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#142A3E] border border-[#C5A059]/50 px-4 py-1.5 rounded-full text-xs font-semibold text-[#C5A059] uppercase tracking-widest mb-3">
            <Lock className="w-4 h-4" />
            <span>Encrypted Stakeholder Gateway</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Gated Deal Room Portal
          </h1>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto my-4" />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Protected access to proprietary pitch decks, market research, and sovereign partnership proposals. Every session is dynamically watermarked.
          </p>
        </div>
      </section>

      {/* PORTAL MAIN BODY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!isAuthenticated ? (
          
          /* TOKEN / EMAIL LOGIN MODAL FLOW */
          <div className="max-w-md mx-auto bg-[#142A3E] border border-[#C5A059]/50 rounded-xl p-8 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2 border-b border-gray-700/60 pb-6">
              <div className="w-12 h-12 bg-[#0B1B2B] border border-[#C5A059] rounded-full flex items-center justify-center mx-auto text-[#C5A059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-xl font-bold text-white">
                Stakeholder Verification Required
              </h2>
              <p className="text-gray-300 text-xs">
                Enter your institutional email & organization to receive a single-use access key.
              </p>
            </div>

            {step === 'request' ? (
              <form onSubmit={handleRequestAccess} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Institutional Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="partner@sovereign-fund.com"
                    className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Organization / Ministry / Fund *
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. GCC Sovereign Investment Board"
                    className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded text-xs text-red-200 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow"
                >
                  {loading ? (
                    <span>Generating Access Token...</span>
                  ) : (
                    <>
                      <Key className="w-4 h-4" />
                      <span>Request Single-Use Passcode</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyAccess} className="space-y-4">
                
                <div className="bg-[#0B1B2B] p-3 rounded border border-[#C5A059]/30 text-center space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">
                    Dispatched 6-Digit Passcode
                  </span>
                  <p className="font-mono text-sm text-[#C5A059] font-bold">
                    Demo OTP: <u className="tracking-widest">{demoOtp}</u>
                  </p>
                  <span className="text-[10px] text-gray-400 block">Valid for 24 Hours</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Enter 6-Digit Passcode *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    placeholder="888888"
                    className="w-full bg-[#0B1B2B] border border-gray-700 rounded-md px-3.5 py-2.5 text-center font-mono text-lg tracking-widest text-[#C5A059] placeholder-gray-600 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded text-xs text-red-200 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setStep('request')}
                    className="w-1/3 bg-[#0B1B2B] hover:bg-gray-800 text-gray-300 py-2.5 rounded text-xs uppercase font-semibold"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/3 bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1"
                  >
                    {loading ? <span>Verifying...</span> : <span>Unlock Deal Room</span>}
                  </button>
                </div>
              </form>
            )}

          </div>

        ) : (

          /* AUTHENTICATED DEAL ROOM DASHBOARD & WATERMARKED DOCUMENT VIEWER */
          <div className="space-y-10 animate-fadeIn">
            
            {/* User Session Bar */}
            <div className="bg-[#142A3E] border border-[#C5A059]/40 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#0B1B2B] border border-[#C5A059] rounded-lg text-[#C5A059]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-white">{userEmail}</span>
                    <span className="text-[10px] bg-green-900/80 text-green-300 border border-green-500/40 px-2 py-0.5 rounded-full font-mono uppercase">
                      VERIFIED STAKEHOLDER
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Session Key: <span className="font-mono text-[#C5A059]">ha_dealroom_token (Expires in 24h)</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={fetchLogs}
                  className="p-2 bg-[#0B1B2B] hover:bg-gray-800 rounded border border-gray-700 text-gray-300 text-xs flex items-center space-x-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh Logs</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-900/60 hover:bg-red-900 text-red-200 border border-red-500/40 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider"
                >
                  Terminate Session
                </button>
              </div>
            </div>

            {/* Document Library Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                    Confidential Vault
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Available Institutional Documents
                  </h2>
                </div>
                <div className="text-xs text-gray-400 flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Dynamic Watermarking Enforced</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DEAL_ROOM_DOCS.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-[#142A3E]/80 border border-gray-800 hover:border-[#C5A059] rounded-xl p-6 space-y-4 transition-all duration-300 shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest bg-[#0B1B2B] text-[#C5A059] border border-[#C5A059]/30 px-2.5 py-1 rounded">
                          {doc.category}
                        </span>
                        <span className="text-[10px] text-red-400 bg-red-950/80 border border-red-500/30 px-2 py-0.5 rounded uppercase font-semibold">
                          {doc.restrictedLevel}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-white">
                        {doc.title}
                      </h3>

                      <p className="text-xs text-gray-300 leading-relaxed">
                        {doc.description}
                      </p>

                      <div className="flex items-center space-x-4 text-[11px] text-gray-400 pt-2 border-t border-gray-800">
                        <span>Size: <strong className="text-white">{doc.fileSize}</strong></span>
                        <span>Length: <strong className="text-white">{doc.pages} Pages</strong></span>
                        <span>Updated: <strong className="text-white">{doc.updatedAt}</strong></span>
                      </div>
                    </div>

                    <div className="pt-4 flex space-x-3">
                      <button
                        onClick={() => handleOpenDoc(doc)}
                        className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect Watermarked Doc</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* REAL-TIME AUDIT ACCESS LOGS TABLE */}
            <div className="bg-[#142A3E] border border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-700/60 pb-3">
                <h3 className="font-serif text-lg font-bold text-white flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Real-Time Security Audit Trail</span>
                </h3>
                <span className="text-xs text-gray-400 font-mono">
                  Total Logged Accesses: {accessLogs.length}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-gray-300">
                  <thead className="bg-[#0B1B2B] text-[#C5A059] uppercase font-semibold">
                    <tr>
                      <th className="p-3">Timestamp</th>
                      <th className="p-3">User Email</th>
                      <th className="p-3">Asset Inspected</th>
                      <th className="p-3">IP Address</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {accessLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-800/40">
                        <td className="p-3 font-mono text-gray-400">
                          {new Date(log.accessedAt).toLocaleString()}
                        </td>
                        <td className="p-3 font-semibold text-white">{log.userEmail}</td>
                        <td className="p-3 text-gray-200">{log.assetName}</td>
                        <td className="p-3 font-mono text-gray-400">{log.ipAddress}</td>
                        <td className="p-3">
                          <span className="text-[10px] bg-green-900/60 text-green-300 px-2 py-0.5 rounded font-mono">
                            WATERMARKED_SERVED
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        )}

      </section>

      {/* DYNAMIC WATERMARKED PDF VIEWER MODAL */}
      {activeDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#0B1B2B] border-2 border-[#C5A059] rounded-xl shadow-2xl overflow-hidden my-8">
            
            {/* Top Modal Bar */}
            <div className="bg-[#142A3E] px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/50">
              <div className="flex items-center space-x-2">
                <FileSearch className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  {activeDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveDoc(null)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* WATERMARKED PREVIEW CONTAINER */}
            <div className="relative p-8 min-h-[500px] bg-[#F8F9FA] text-[#1A1A1A] confidential-watermark flex flex-col justify-between overflow-hidden select-none">
              
              {/* Dynamic SVG Watermark Overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-15 rotate-[-25deg]">
                <div className="text-center font-mono space-y-2">
                  <span className="text-4xl font-black text-red-900 tracking-widest block uppercase">
                    CONFIDENTIAL & PROPRIETARY
                  </span>
                  <span className="text-2xl font-bold text-[#0B1B2B] block">
                    STAKEHOLDER: {userEmail.toUpperCase()}
                  </span>
                  <span className="text-lg font-semibold text-gray-800 block">
                    STREAM TIMESTAMP: {new Date().toISOString()}
                  </span>
                  <span className="text-sm block text-red-800 font-bold">
                    UNAUTHORIZED REDISTRIBUTION STRICTLY PROHIBITED
                  </span>
                </div>
              </div>

              {/* Simulated Document Page Content */}
              <div className="relative z-0 space-y-6 max-w-3xl mx-auto">
                
                <div className="border-b-2 border-[#0B1B2B] pb-4 flex items-center justify-between">
                  <div>
                    <Logo variant="compact" theme="light" height={34} />
                    <span className="block text-[10px] tracking-widest text-[#C5A059] uppercase font-bold mt-1">STAKEHOLDER BRIEFING</span>
                  </div>
                  <div className="text-right text-xs text-gray-600 font-mono">
                    <span>{activeDoc.category}</span>
                    <span className="block font-bold text-red-700">{activeDoc.restrictedLevel}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#0B1B2B]">
                    Executive Summary & Sovereign Strategic Alignment
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-serif">
                    This document provides institutional sponsors and vetted investment partners with a high-stakes evaluation of the commercial, sovereign, and cross-border regulatory architecture governing current transaction opportunities.
                  </p>

                  <div className="bg-[#0B1B2B] text-white p-6 rounded-lg space-y-2 my-4">
                    <span className="text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider block">
                      Key Transaction Parameters
                    </span>
                    <ul className="text-xs space-y-1.5 text-gray-300">
                      <li>• Target Allocation Volume: $25,000,000 – $100,000,000 USD</li>
                      <li>• Jurisdiction Scope: Sub-Saharan Trade Corridor & GCC Capital Hubs</li>
                      <li>• Regulatory Clearance Status: In-Progress with Cabinet Oversight</li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-700 leading-relaxed">
                    Note: Detailed financial projections, unit-economic models, and unredacted shareholder agreements are available exclusively following execution of a bilateral Non-Disclosure Agreement (NDA).
                  </p>
                </div>

              </div>

              {/* Document Page Footer */}
              <div className="relative z-0 pt-6 border-t border-gray-300 flex items-center justify-between text-[11px] text-gray-600 font-mono">
                <span>Page 1 of {activeDoc.pages}</span>
                <span>Watermarked Stream Served to {userEmail}</span>
                <span>Confidential — Haugh Advisory</span>
              </div>

            </div>

            {/* Bottom Modal Actions */}
            <div className="bg-[#142A3E] px-6 py-4 flex items-center justify-between border-t border-gray-800">
              <span className="text-xs text-[#C5A059] font-mono">
                Watermark ID: WM-{Date.now().toString(36)}
              </span>

              <button
                onClick={() => setActiveDoc(null)}
                className="bg-[#C5A059] text-[#0B1B2B] px-6 py-2 rounded text-xs font-bold uppercase tracking-wider"
              >
                Close Secure Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
