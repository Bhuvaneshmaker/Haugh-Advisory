import React, { useState, useEffect } from 'react';
import { Lead, AccessLog, LeadStatus } from '../types';
import { Database, Filter, RefreshCw, Mail, CheckCircle, Clock, ShieldCheck, User } from 'lucide-react';

export const CrmDashboardPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [logs, setLogs] = useState<AccessLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [directionFilter, setDirectionFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resLeads, resLogs] = await Promise.all([
        fetch('/api/leads'),
        fetch('/api/dealroom/logs')
      ]);

      const dataLeads = await resLeads.json();
      const dataLogs = await resLogs.json();

      if (dataLeads.leads) setLeads(dataLeads.leads);
      if (dataLogs.logs) setLogs(dataLogs.logs);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filteredLeads = leads.filter((l) => {
    if (directionFilter !== 'ALL' && l.direction !== directionFilter) return false;
    if (statusFilter !== 'ALL' && l.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white">
      
      {/* Header */}
      <section className="pt-12 pb-8 bg-geo-pattern border-b border-[#142A3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#C5A059] uppercase tracking-widest bg-[#142A3E] px-3 py-1 rounded-full border border-[#C5A059]/30 mb-2">
              <Database className="w-4 h-4" />
              <span>Internal Operations & Lead Routing Engine</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Haugh Advisory — Lead & Deal Room CRM
            </h1>
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 shadow"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync Real-Time Data</span>
          </button>
        </div>
      </section>

      {/* CRM BODY */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* LEADS SECTION */}
        <div className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#142A3E] p-4 rounded-xl border border-gray-800">
            <div>
              <h2 className="font-serif text-xl font-bold text-white">
                Captured Advisory Mandates ({filteredLeads.length})
              </h2>
              <p className="text-xs text-gray-400">
                Real-time lead inbox automatically routed to `inbound@haughadvisory.com` or `outbound@haughadvisory.com`.
              </p>
            </div>

            <div className="flex items-center space-x-3 flex-wrap gap-2">
              <div className="flex items-center space-x-1 text-xs text-gray-300">
                <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Direction:</span>
              </div>
              <select
                value={directionFilter}
                onChange={(e) => setDirectionFilter(e.target.value)}
                className="bg-[#0B1B2B] border border-gray-700 text-xs text-white rounded px-2.5 py-1.5 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="ALL">All Directions</option>
                <option value="INBOUND">INBOUND</option>
                <option value="OUTBOUND">OUTBOUND</option>
                <option value="GENERAL">GENERAL</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-[#0B1B2B] border border-gray-700 text-xs text-white rounded px-2.5 py-1.5 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="ALL">All Statuses</option>
                <option value="NEW">NEW</option>
                <option value="CONTACTED">CONTACTED</option>
                <option value="QUALIFIED">QUALIFIED</option>
                <option value="CLOSED">CLOSED</option>
              </select>
            </div>
          </div>

          <div className="bg-[#142A3E]/80 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-[#0B1B2B] text-[#C5A059] uppercase font-semibold border-b border-gray-800">
                  <tr>
                    <th className="p-4">Lead ID & Date</th>
                    <th className="p-4">Contact & Institution</th>
                    <th className="p-4">Direction & Package</th>
                    <th className="p-4">Notification Route</th>
                    <th className="p-4">Lead Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="p-4 space-y-1">
                        <span className="font-mono text-white font-bold block">{lead.id}</span>
                        <span className="text-[10px] text-gray-400 block font-mono">
                          {new Date(lead.createdAt).toLocaleString()}
                        </span>
                      </td>

                      <td className="p-4 space-y-1">
                        <strong className="text-white text-sm block">{lead.fullName}</strong>
                        <span className="text-gray-300 block">{lead.email}</span>
                        <span className="text-[11px] text-gray-400 block">
                          {lead.organization} ({lead.orgType})
                        </span>
                      </td>

                      <td className="p-4 space-y-1">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          lead.direction === 'INBOUND' ? 'bg-blue-900 text-blue-300' : 'bg-amber-900 text-amber-300'
                        }`}>
                          {lead.direction}
                        </span>
                        <span className="text-xs text-gray-200 block mt-1 font-semibold">
                          {lead.packageType || 'Custom Mandate'}
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center space-x-1.5 text-xs text-[#C5A059] font-mono bg-[#0B1B2B] px-2.5 py-1 rounded border border-[#C5A059]/30 inline-block">
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          <span>{lead.direction === 'INBOUND' ? 'inbound@haughadvisory.com' : 'outbound@haughadvisory.com'}</span>
                        </div>
                      </td>

                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={`text-xs font-semibold rounded px-2.5 py-1.5 focus:outline-none border ${
                            lead.status === 'NEW' ? 'bg-red-900/80 text-red-200 border-red-500' :
                            lead.status === 'QUALIFIED' ? 'bg-green-900/80 text-green-200 border-green-500' :
                            lead.status === 'CONTACTED' ? 'bg-yellow-900/80 text-yellow-200 border-yellow-500' :
                            'bg-gray-800 text-gray-300 border-gray-600'
                          }`}
                        >
                          <option value="NEW">NEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="QUALIFIED">QUALIFIED</option>
                          <option value="CLOSED">CLOSED</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* DEAL ROOM AUDIT LOGS */}
        <div className="bg-[#142A3E] border border-gray-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-700 pb-3">
            <h2 className="font-serif text-xl font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              <span>Deal Room Access Audit Logs (`AccessLog`)</span>
            </h2>
            <span className="text-xs text-gray-400 font-mono">
              Total Logged Inspections: {logs.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#0B1B2B] text-[#C5A059] uppercase font-semibold">
                <tr>
                  <th className="p-3">Log ID & Timestamp</th>
                  <th className="p-3">Verified User Email</th>
                  <th className="p-3">Inspected Document</th>
                  <th className="p-3">Client IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 font-mono">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-800/40">
                    <td className="p-3 text-gray-400">{new Date(log.accessedAt).toLocaleString()}</td>
                    <td className="p-3 text-white font-bold">{log.userEmail}</td>
                    <td className="p-3 text-gray-200">{log.assetName}</td>
                    <td className="p-3 text-[#C5A059]">{log.ipAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

    </div>
  );
};
