import { ServiceLine, PackageOffer, CaseStudy, DealRoomDoc, LeadershipMember } from '../types';

export const SERVICE_LINES: ServiceLine[] = [
  {
    id: 'inbound-entry',
    category: 'Inbound',
    title: 'Inbound Market Entry',
    shortDesc: 'End-to-end strategic navigation, regulatory compliance, and stakeholder alignment for entities entering local and regional markets.',
    fullDesc: 'We de-risk market penetration by synthesizing sovereign policy, regulatory requirements, and competitive landscapes into actionable entry blueprints.',
    deliverables: [
      'Sovereign Policy & Regulatory Mapping',
      'Local Entity Formation & Licensing Blueprint',
      'Joint Venture & Strategic Local Partner Identification',
      'Risk Mitigation & Compliance Governance Model'
    ],
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    collapsibleDetails: {
      strategicObjective: 'Establish seamless, compliant, and defensible market position for global capital and corporations.',
      targetClients: 'Multinational Corporations, Foreign Direct Investors, Expanding Tech Enterprises.',
      typicalDuration: '3 to 6 Months',
      keyMilestones: [
        'Phase 1: Regulatory landscape audit & sovereign risk assessment',
        'Phase 2: Local partner shortlisting & due diligence',
        'Phase 3: Legal entity structuring & operational readiness'
      ]
    }
  },
  {
    id: 'outbound-bridge',
    category: 'Outbound',
    title: 'Outbound Global Bridge',
    shortDesc: 'Connecting domestic market leaders, state enterprises, and high-growth scale-ups to global capital markets and strategic corridors.',
    fullDesc: 'We architect international expansion channels across Africa, Europe, the Middle East, and North America, connecting institutions to decision-makers.',
    deliverables: [
      'Cross-Border Capital Structuring Strategy',
      'International Institutional Investor Matchmaking',
      'Global Partnership & Deal Architecture',
      'Bilateral Sovereign Alignment Framework'
    ],
    iconName: 'Globe2',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    collapsibleDetails: {
      strategicObjective: 'Unlock international liquidity, sovereign wealth backing, and strategic trade channels for regional leaders.',
      targetClients: 'State-Owned Enterprises, High-Growth Tech Ventures, Sovereign Development Funds.',
      typicalDuration: '6 to 12 Months',
      keyMilestones: [
        'Phase 1: Global readiness & valuation benchmarking',
        'Phase 2: Targeted capital roadshow & sovereign outreach',
        'Phase 3: Deal room execution & definitive agreement closure'
      ]
    }
  },
  {
    id: 'pitch-decking',
    category: 'Core Advisory',
    title: 'Institutional Pitch Decking & Deal Collateral',
    shortDesc: 'Crafting high-stakes presentation materials, financial models, and deal memos tailored for sovereign wealth and institutional investors.',
    fullDesc: 'Translating complex operational realities into concise, bulletproof investment narratives that withstand tier-1 institutional due diligence.',
    deliverables: [
      'Institutional Investment Teasers & Pitch Decks',
      'Financial Model & Sensitivity Analysis Verification',
      'Commercial Memos & Executive Briefings',
      'Interactive Virtual Deal Room Construction'
    ],
    iconName: 'FileText',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    collapsibleDetails: {
      strategicObjective: 'Maximize valuation clarity and accelerate diligence cycles for major capital raises and partnerships.',
      targetClients: 'Sponsors seeking $5M–$100M+ capital allocations, Project Developers, Fund Managers.',
      typicalDuration: '4 to 8 Weeks',
      keyMilestones: [
        'Phase 1: Investment thesis & unit economic audit',
        'Phase 2: Narrative synthesis & institutional deck design',
        'Phase 3: Stress-testing with mock due-diligence panel'
      ]
    }
  },
  {
    id: 'brand-strategy',
    category: 'Core Advisory',
    title: 'Brand Strategy & Corporate Positioning',
    shortDesc: 'Positioning institutions, sovereign initiatives, and corporate entities for trust, authority, and global market perception.',
    fullDesc: 'Brand is institutional currency. We shape narrative authority, stakeholder perception, and crisis resiliency for decision-makers.',
    deliverables: [
      'Institutional Brand Architecture & Guidelines',
      'Executive Reputation Management & Thought Leadership',
      'Stakeholder & Crisis Communication Playbooks',
      'Public Affairs & Policy Narrative Alignment'
    ],
    iconName: 'Award',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    collapsibleDetails: {
      strategicObjective: 'Command premium brand equity, public credibility, and institutional trust across target markets.',
      targetClients: 'Governments, Major Energy Consortia, Financial Institutions, NGOs.',
      typicalDuration: '2 to 4 Months',
      keyMilestones: [
        'Phase 1: Perception audit & competitive benchmarking',
        'Phase 2: Core positioning matrix & brand manifesto',
        'Phase 3: Executive media training & rollout execution'
      ]
    }
  },
  {
    id: 'event-execution',
    category: 'Delivery',
    title: 'Executive Summit & Deal Event Execution',
    shortDesc: 'Designing and orchestrating high-level investor roundtables, bilateral trade summits, and institutional deal-signing events.',
    fullDesc: 'From intimate minister-level roundtables to high-visibility international summits, we deliver flawless event experiences that convert into signed MOUs.',
    deliverables: [
      'Closed-Door Investor Roundtable Structuring',
      'Ministerial & C-Suite Delegation Curation',
      'Deal-Signing Ceremony & Protocol Management',
      'Post-Summit Lead Conversion & Action Tracking'
    ],
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    collapsibleDetails: {
      strategicObjective: 'Drive tangible transaction volume and public-private commitments through orchestrated physical and hybrid summits.',
      targetClients: 'Government Ministries, Trade Associations, Private Equity Consortia.',
      typicalDuration: '2 to 5 Months',
      keyMilestones: [
        'Phase 1: Summit theme formulation & VIP invitation protocol',
        'Phase 2: Bilateral scheduling & deal memorandum drafting',
        'Phase 3: Flawless execution & media protocol oversight'
      ]
    }
  }
];

export const PACKAGED_OFFERS: PackageOffer[] = [
  {
    id: 'pkg-market-entry',
    name: 'Market Entry',
    direction: 'INBOUND',
    tagline: 'Comprehensive regulatory roadmap and operational landing pad for entities entering regional corridors.',
    priceScope: 'Institutional Engagement',
    timeline: '8–12 Weeks',
    targetProfile: 'Foreign Enterprises & Corporations targeting sovereign or commercial market expansion.',
    highlights: [
      'Regulatory & Sovereign Policy Blueprint',
      'Entity Formation & Licensing Guidance',
      'Key Stakeholder & Partner Introductions',
      'Inbound Lead Capture & Routing Support'
    ],
    features: [
      { name: 'Regulatory Mapping', included: true, detail: 'Comprehensive legal & tax overview' },
      { name: 'Local Partner Vetting', included: true, detail: 'Top 3 vetted JV partners' },
      { name: 'Deal Room Access', included: true, detail: 'Standard Document Access' },
      { name: 'Government Relations', included: true, detail: 'Direct Ministry-level introduction' },
      { name: 'Sovereign Matchmaking', included: false, detail: 'Available in Global Bridge' },
      { name: 'Event Management', included: false, detail: 'Custom Add-On' }
    ]
  },
  {
    id: 'pkg-global-bridge',
    name: 'Global Bridge',
    direction: 'OUTBOUND',
    tagline: 'Cross-border growth acceleration connecting regional champions with global capital hubs.',
    priceScope: 'Growth Partnership',
    timeline: '12–24 Weeks',
    targetProfile: 'State Enterprises & Scale-ups seeking European, Middle Eastern, or North American expansion.',
    highlights: [
      'International Roadshow Strategy',
      'Sovereign Wealth & PE Matchmaking',
      'Cross-Border Deal Structuring',
      'Global Brand & Narrative Alignment'
    ],
    features: [
      { name: 'Regulatory Mapping', included: true, detail: 'Multi-jurisdictional compliance' },
      { name: 'Local Partner Vetting', included: true, detail: 'Global distribution & strategic allies' },
      { name: 'Deal Room Access', included: true, detail: 'Priority Gated Stakeholder Access' },
      { name: 'Government Relations', included: true, detail: 'Bilateral trade delegation facilitation' },
      { name: 'Sovereign Matchmaking', included: true, detail: 'Direct outreach to GCC/European SWFs' },
      { name: 'Event Management', included: true, detail: 'Included Investor Roundtable' }
    ]
  },
  {
    id: 'pkg-sponsor-ready',
    name: 'Sponsor & Partner Ready',
    direction: 'GENERAL',
    tagline: 'Precision deck preparation and financial collateral structuring designed for rapid partner buy-in.',
    priceScope: 'Advisory Retainer',
    timeline: '4–6 Weeks',
    targetProfile: 'Project Developers, Energy Consortia, and Sports-Tech Ventures raising institutional capital.',
    highlights: [
      'Tier-1 Pitch Deck Construction',
      'Financial Model & Unit Economic Audit',
      'Executive Summary & Commercial Memos',
      'Gated Virtual Deal Room Setup'
    ],
    features: [
      { name: 'Regulatory Mapping', included: true, detail: 'Industry-specific risk synthesis' },
      { name: 'Local Partner Vetting', included: true, detail: 'Institutional investor profiling' },
      { name: 'Deal Room Access', included: true, detail: 'Fully Watermarked Gated Portal' },
      { name: 'Government Relations', included: false, detail: 'Advisory scope only' },
      { name: 'Sovereign Matchmaking', included: true, detail: 'Targeted investor list delivery' },
      { name: 'Event Management', included: false, detail: 'Available on request' }
    ]
  },
  {
    id: 'pkg-funded-followed',
    name: 'Funded & Followed',
    direction: 'OUTBOUND',
    tagline: 'Turnkey transaction execution, capital relations, and public milestone communications.',
    priceScope: 'Success-Linked Retainer',
    timeline: '6–12 Months',
    targetProfile: 'High-Growth Tech, Green Energy, and Government Infrastructure Projects.',
    highlights: [
      'Full Transaction Advisory & Closing',
      'Ongoing Investor Relations Portal',
      'Global Media & Thought Leadership Campaign',
      'Annual Sovereign & Institutional Summit'
    ],
    features: [
      { name: 'Regulatory Mapping', included: true, detail: 'Continuous compliance monitoring' },
      { name: 'Local Partner Vetting', included: true, detail: 'Full legal & commercial due diligence' },
      { name: 'Deal Room Access', included: true, detail: 'Enterprise Gated Portal + Dynamic Watermarking' },
      { name: 'Government Relations', included: true, detail: 'Cabinet-level liaison & public affairs' },
      { name: 'Sovereign Matchmaking', included: true, detail: 'Dedicated Capital Introduction Team' },
      { name: 'Event Management', included: true, detail: 'Annual Sovereign Summit Sponsorship' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-sports-tech-expansion',
    title: 'Cross-Border Capital Structuring & License Acquisition for European Sports-Tech Giant',
    clientName: 'Velocita Sports Group',
    sector: 'Sports-Tech',
    region: 'Middle East',
    impactSummary: 'Facilitated $28M strategic capital investment and secured exclusive regional operating licenses across GCC markets.',
    metrics: [
      { label: 'Capital Raised', value: '$28.5M' },
      { label: 'Market Licenses', value: '4 Sovereign States' },
      { label: 'Timeline', value: '5 Months' }
    ],
    challenge: 'The client possessed industry-leading athlete analytics technology but struggled with regulatory licensing and sovereign capital alignment in the Gulf region.',
    solution: 'Haugh Advisory structured an Outbound Global Bridge mandate, preparing tier-1 deal collateral, organizing closed-door investor roundtables in Dubai, and negotiating regulatory frameworks with local sports ministries.',
    outcome: 'Successfully closed a $28.5M series-B extension led by a regional sovereign-backed sports fund and launched operations across 4 markets within 5 months.',
    featured: true,
    publishedYear: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cs-energy-green-hydrogen',
    title: 'Inbound Market Entry & Sovereign Policy Blueprint for $120M Green Hydrogen Project',
    clientName: 'AeroGreen Power Solutions',
    sector: 'Energy',
    region: 'Africa',
    impactSummary: 'Navigated complex land-concession regulations and secured sovereign MOU for a 100MW green ammonia export plant.',
    metrics: [
      { label: 'Project Value', value: '$120M' },
      { label: 'Land Concession', value: '1,500 Hectares' },
      { label: 'Regulatory Approvals', value: '100% Granted' }
    ],
    challenge: 'Severe regulatory ambiguity surrounding renewable energy export tariffs and land allocation created hesitation among European project lenders.',
    solution: 'Delivered an Inbound Market Entry Blueprint, interfacing directly with the Ministry of Energy, drafting public-private partnership terms, and mitigating currency repatriation risks.',
    outcome: 'Secured sovereign cabinet approval, unlocking $45M in debt financing from international development finance institutions (DFIs).',
    featured: true,
    publishedYear: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cs-gov-digital-trade',
    title: 'National Digital Trade Corridor Framework & Sovereign Summit Execution',
    clientName: 'Ministry of Trade & Regional Integration',
    sector: 'Government',
    region: 'Africa',
    impactSummary: 'Designed and executed a bilateral trade summit resulting in 14 signed MOUs totaling $310M in cross-border trade flow.',
    metrics: [
      { label: 'Trade MOUs Signed', value: '14 Agreements' },
      { label: 'Transaction Pipeline', value: '$310M' },
      { label: 'C-Suite Attendees', value: '250+ Leaders' }
    ],
    challenge: 'Inefficient paper-based customs procedures created massive bottlenecks along key trade corridors, limiting regional commercial integration.',
    solution: 'Engineered a modern trade architecture and convened the inaugural Bilateral Trade Summit in Johannesburg, uniting government ministers, logistics leaders, and technology sponsors.',
    outcome: 'Accelerated digital customs integration by 40% and generated $310M in private-sector investment commitments.',
    featured: false,
    publishedYear: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cs-ngo-climate-resilience',
    title: 'Public-Private Partnership Strategy for Multi-Country Climate Resilience Initiative',
    clientName: 'Global Agriculture & Climate Trust',
    sector: 'NGO',
    region: 'Cross-Border',
    impactSummary: 'Mobilized $18M in blended finance combining philanthropic capital with corporate climate-tech sponsors.',
    metrics: [
      { label: 'Blended Capital', value: '$18.2M' },
      { label: 'Beneficiaries', value: '120,000 Farmers' },
      { label: 'Corporate Partners', value: '6 Enterprises' }
    ],
    challenge: 'Traditional grant funding was insufficient to scale climate-smart irrigation technologies across smallholder farming cooperatives.',
    solution: 'Structured a Sponsor & Partner Ready deal framework, converting corporate ESG mandates into long-term commercial co-investments.',
    outcome: 'Successfully deployed blended finance across 3 countries, improving crop yields by 35% while establishing sustainable commercial return models.',
    featured: false,
    publishedYear: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  }
];

export const DEAL_ROOM_DOCS: DealRoomDoc[] = [
  {
    id: 'doc-001',
    title: 'Haugh Advisory — Q3 2026 Sub-Saharan Market Entry Sovereign Briefing',
    category: 'Sovereign Briefing',
    restrictedLevel: 'Confidential',
    fileSize: '4.2 MB',
    pages: 36,
    updatedAt: 'August 2026',
    description: 'Comprehensive macro-economic analysis, policy forecast, and regulatory tariff breakdowns across key African growth corridors.'
  },
  {
    id: 'doc-002',
    title: 'Sports-Tech & Digital Media Cross-Border Capital Allocation Teaser',
    category: 'Pitch Deck',
    restrictedLevel: 'Board Approved',
    fileSize: '8.7 MB',
    pages: 24,
    updatedAt: 'September 2026',
    description: 'Tier-1 investment memo detailing $35M series-B co-investment opportunity in regional sports analytics infrastructure.'
  },
  {
    id: 'doc-003',
    title: 'Green Hydrogen & Clean Energy Land Concession Framework Strategy',
    category: 'Market Research',
    restrictedLevel: 'Stakeholder Only',
    fileSize: '6.1 MB',
    pages: 42,
    updatedAt: 'July 2026',
    description: 'Deep-dive feasibility study on sovereign land allocation, environmental impact regulations, and export tariff structures.'
  },
  {
    id: 'doc-004',
    title: 'Bilateral Trade Summit 2026 — Public-Private Partnership Proposal',
    category: 'Partnership Proposal',
    restrictedLevel: 'Confidential',
    fileSize: '3.5 MB',
    pages: 18,
    updatedAt: 'September 2026',
    description: 'Closed-door summit agenda, ministerial delegation list, and deal-signing protocol for upcoming London-Dubai-Johannesburg roadshow.'
  }
];

export const COMPANY_PHILOSOPHY = {
  headline: 'WHERE IDEAS MEET SOLID GROUND',
  vision: 'To serve as the premier institutional bridge connecting capital, sovereign strategy, and operational reality across high-growth international corridors.',
  mission: 'We de-risk cross-border execution by combining deep regulatory insight, high-level political acumen, and tier-1 transaction structuring for market leaders.',
  corePhilosophy: 'Cross-border growth fails not due to lack of vision, but due to friction at the intersection of local regulation, institutional trust, and capital alignment. Haugh Advisory exists to eliminate this friction, transforming ambitious ideas into solid, defensible assets.',
  regionalNodes: [
    { city: 'Johannesburg', country: 'South Africa', focus: 'Southern & Sub-Saharan Trade Node', imageUrl: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=600&q=80' },
    { city: 'London', country: 'United Kingdom', focus: 'European Capital & Regulatory Hub', imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80' },
    { city: 'Dubai', country: 'United Arab Emirates', focus: 'Middle East & Sovereign Wealth Gateway', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
    { city: 'Washington D.C.', country: 'United States', focus: 'North American Policy & DFI Liaison', imageUrl: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=600&q=80' },
    { city: 'Nairobi', country: 'Kenya', focus: 'East African Tech & Commercial Hub', imageUrl: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=600&q=80' }
  ]
};

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'leader-1',
    name: 'Alistair Haugh',
    role: 'Managing Partner & Sovereign Advisory Lead',
    bio: 'Former Senior Trade Advisor to sovereign wealth funds with 18+ years directing cross-border transaction structuring across EMEA and North America.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'leader-2',
    name: 'Dr. Amina Diallo',
    role: 'Senior Partner, Policy Navigation & DFI Relations',
    bio: 'Specialist in sub-Saharan energy transition policy and multilateral finance, having advised 12+ ministries on infrastructure regulatory frameworks.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'leader-3',
    name: 'Marcus Vance',
    role: 'Partner, Capital Markets & Deal Architecture',
    bio: 'Ex-tier-1 investment banker overseeing $4.2B in cumulative cross-border M&A, debt syndication, and joint-venture market entries.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'leader-4',
    name: 'Elena Rostova',
    role: 'Managing Director, Global Brand & Sovereign Reputation',
    bio: 'Institutional narrative strategist who has led sovereign perception management and executive thought leadership campaigns worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  }
];
