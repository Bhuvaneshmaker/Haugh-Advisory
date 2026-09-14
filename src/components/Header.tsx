import React, { useState } from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Menu, X, ArrowRight, Database } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openLeadModal: (direction?: 'INBOUND' | 'OUTBOUND' | 'GENERAL', packageType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, openLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'market-entry', label: 'Market Entry' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'sponsorships-funding', label: 'Sponsorships & Funding' },
    { id: 'about', label: 'About' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
    { id: 'deal-room', label: 'Deal Room', isProtected: true },
    { id: 'crm', label: 'Lead CRM', isCrm: true }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1B2B]/95 backdrop-blur-md border-b border-[#142A3E] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group"
            id="header-logo-btn"
          >
            <Logo variant="compact" height={38} className="transform group-hover:scale-[1.02] transition-transform" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              
              if (item.isProtected) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center space-x-1 xl:space-x-1.5 ${
                      isActive
                        ? 'bg-[#C5A059] text-[#0B1B2B] shadow-md'
                        : 'text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059]/10'
                    }`}
                    id={`nav-item-${item.id}`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              if (item.isCrm) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2 xl:px-2.5 py-1.5 text-[10px] xl:text-[11px] font-medium uppercase tracking-wider rounded transition-all flex items-center space-x-1 ${
                      isActive
                        ? 'bg-[#142A3E] text-[#C5A059] border border-[#C5A059]/50'
                        : 'text-gray-400 hover:text-white hover:bg-[#142A3E]/60'
                    }`}
                    id={`nav-item-${item.id}`}
                  >
                    <Database className="w-3 h-3 text-[#C5A059]" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 xl:px-3 py-2 text-[11px] xl:text-xs font-medium tracking-wider uppercase transition-colors relative ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-[#C5A059] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => openLeadModal('GENERAL')}
              className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] px-3.5 xl:px-4 py-2 xl:py-2.5 rounded-md text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-1.5"
              id="header-inquire-btn"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1B2B] border-b border-[#142A3E] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium tracking-wider uppercase flex items-center justify-between ${
                activeTab === item.id
                  ? 'bg-[#142A3E] text-[#C5A059] font-semibold'
                  : 'text-gray-300 hover:bg-[#142A3E]/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                {item.isProtected && <ShieldCheck className="w-4 h-4 text-[#C5A059]" />}
                {item.isCrm && <Database className="w-4 h-4 text-[#C5A059]" />}
                <span>{item.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openLeadModal('GENERAL');
              }}
              className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] py-3 rounded-md text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow"
            >
              <span>Initiate Inbound / Outbound Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
