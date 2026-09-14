export type Direction = 'INBOUND' | 'OUTBOUND' | 'GENERAL';

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CLOSED';

export type OrgType = 'Business' | 'Gov' | 'NGO' | 'Startup' | 'Institutional Investor';

export interface Lead {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  organization: string;
  orgType: OrgType;
  direction: Direction;
  packageType?: string;
  message: string;
  status: LeadStatus;
  budgetScope?: string;
}

export interface DealRoomUser {
  id: string;
  email: string;
  organization: string;
  approved: boolean;
  accessKey?: string;
  expiresAt?: string;
}

export interface AccessLog {
  id: string;
  accessedAt: string;
  userId: string;
  userEmail: string;
  assetName: string;
  ipAddress: string;
}

export interface ServiceLine {
  id: string;
  category: 'Inbound' | 'Outbound' | 'Core Advisory' | 'Delivery';
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  imageUrl?: string;
  collapsibleDetails: {
    strategicObjective: string;
    targetClients: string;
    typicalDuration: string;
    keyMilestones: string[];
  };
}

export interface PackageOffer {
  id: string;
  name: string;
  direction: Direction;
  tagline: string;
  priceScope: string;
  timeline: string;
  targetProfile: string;
  highlights: string[];
  features: {
    name: string;
    included: boolean;
    detail: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  sector: 'Sports-Tech' | 'Energy' | 'Government' | 'NGO';
  region: 'Africa' | 'Europe' | 'Middle East' | 'North America' | 'Cross-Border';
  impactSummary: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcome: string;
  featured: boolean;
  publishedYear: string;
  imageUrl?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface DealRoomDoc {
  id: string;
  title: string;
  category: 'Pitch Deck' | 'Market Research' | 'Partnership Proposal' | 'Sovereign Briefing' | 'Financial Model';
  restrictedLevel: 'Stakeholder Only' | 'Board Approved' | 'Confidential';
  fileSize: string;
  pages: number;
  updatedAt: string;
  description: string;
}
