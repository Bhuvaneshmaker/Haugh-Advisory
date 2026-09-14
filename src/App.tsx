import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { HomePage } from './pages/HomePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { MarketEntryPage } from './pages/MarketEntryPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { SponsorshipsFundingPage } from './pages/SponsorshipsFundingPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyTermsPage } from './pages/PrivacyTermsPage';
import { ServicesPage } from './pages/ServicesPage';
import { PackagesPage } from './pages/PackagesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { DealRoomPage } from './pages/DealRoomPage';
import { CrmDashboardPage } from './pages/CrmDashboardPage';
import { Direction } from './types';
import { ShieldCheck, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [leadModalOpen, setLeadModalOpen] = useState<boolean>(false);
  const [leadDirection, setLeadDirection] = useState<Direction>('GENERAL');
  const [leadPackage, setLeadPackage] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const openLeadModal = (direction: Direction = 'GENERAL', packageType: string = '') => {
    setLeadDirection(direction);
    setLeadPackage(packageType);
    setLeadModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} openLeadModal={openLeadModal} />;
      case 'what-we-do':
        return <WhatWeDoPage openLeadModal={openLeadModal} />;
      case 'market-entry':
        return <MarketEntryPage openLeadModal={openLeadModal} />;
      case 'partnerships':
        return <PartnershipsPage openLeadModal={openLeadModal} />;
      case 'sponsorships-funding':
        return <SponsorshipsFundingPage openLeadModal={openLeadModal} />;
      case 'about':
        return <AboutPage openLeadModal={openLeadModal} />;
      case 'insights':
        return <InsightsPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyTermsPage mode="privacy" />;
      case 'terms':
        return <PrivacyTermsPage mode="terms" />;
      case 'services':
        return <ServicesPage openLeadModal={openLeadModal} />;
      case 'packages':
        return <PackagesPage openLeadModal={openLeadModal} />;
      case 'case-studies':
        return <CaseStudiesPage openLeadModal={openLeadModal} />;
      case 'deal-room':
        return <DealRoomPage />;
      case 'crm':
        return <CrmDashboardPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} openLeadModal={openLeadModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#0B1B2B]">
      
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openLeadModal={openLeadModal}
      />

      {/* Main Page Content */}
      <main className="flex-grow animate-fadeIn">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openLeadModal={openLeadModal}
      />

      {/* Floating Action Trigger for Immediate Lead Intake */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#142A3E] hover:bg-[#0B1B2B] border border-[#C5A059]/50 text-[#C5A059] rounded-full shadow-lg transition-all"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => openLeadModal('GENERAL')}
          className="bg-[#C5A059] hover:bg-[#B08C46] text-[#0B1B2B] p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border-2 border-[#0B1B2B] transition-transform hover:scale-105"
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">Initiate Mandate</span>
        </button>
      </div>

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        defaultDirection={leadDirection}
        defaultPackage={leadPackage}
      />

    </div>
  );
}
