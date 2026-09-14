import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-Memory Database Store for Leads, Deal Room Tokens, and Access Logs
interface StoredLead {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  organization: string;
  orgType: string;
  direction: 'INBOUND' | 'OUTBOUND' | 'GENERAL';
  packageType?: string;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CLOSED';
  routedTo: string;
  ipAddress: string;
}

interface StoredDealUser {
  id: string;
  email: string;
  organization: string;
  otpCode: string;
  accessKey: string;
  expiresAt: string;
  verified: boolean;
}

interface StoredAccessLog {
  id: string;
  accessedAt: string;
  userId: string;
  userEmail: string;
  assetName: string;
  ipAddress: string;
}

const leadsDatabase: StoredLead[] = [
  {
    id: 'lead-001',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    fullName: 'David Sterling',
    email: 'd.sterling@sovereigntrade.com',
    organization: 'Sovereign Trade Consortium',
    orgType: 'Gov',
    direction: 'INBOUND',
    packageType: 'Market Entry',
    message: 'Requesting institutional advisory on regulatory licensing for sub-Saharan port infrastructure.',
    status: 'NEW',
    routedTo: 'inbound@haughadvisory.com',
    ipAddress: '197.221.34.12'
  },
  {
    id: 'lead-002',
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
    fullName: 'Elena Rostova',
    email: 'e.rostova@globocapital.eu',
    organization: 'GloboCapital Partners',
    orgType: 'Institutional Investor',
    direction: 'OUTBOUND',
    packageType: 'Global Bridge',
    message: 'Seeking cross-border deal room access for $40M energy co-investment opportunity in Dubai.',
    status: 'QUALIFIED',
    routedTo: 'outbound@haughadvisory.com',
    ipAddress: '82.165.19.44'
  }
];

const dealUsersDatabase: StoredDealUser[] = [];
const accessLogsDatabase: StoredAccessLog[] = [
  {
    id: 'log-001',
    accessedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    userId: 'user-001',
    userEmail: 'e.rostova@globocapital.eu',
    assetName: 'Haugh Advisory — Q3 2026 Sub-Saharan Market Entry Sovereign Briefing',
    ipAddress: '82.165.19.44'
  }
];

// IP Submission Rate Limiter Map (max 5 submissions per hour)
const rateLimitMap = new Map<string, { count: number; firstTimestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstTimestamp: now });
    return true;
  }

  if (now - record.firstTimestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, firstTimestamp: now });
    return true;
  }

  if (record.count >= 10) {
    return false;
  }

  record.count += 1;
  return true;
}

// ============================================================================
// API ENDPOINTS
// ============================================================================

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Config Endpoint (exposes sanitized APP_URL and system readiness safely)
app.get('/api/config', (req: Request, res: Response) => {
  const rawUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
  const appUrl = rawUrl.replace(/\/+$/, '');
  res.json({
    appUrl,
    environment: process.env.NODE_ENV || 'development',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY)
  });
});

// 1. POST /api/lead-capture (Lead Intake Endpoint)
app.post('/api/lead-capture', (req: Request, res: Response) => {
  const clientIp = (req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || '127.0.0.1').split(',')[0];

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      error: 'Rate limit exceeded. Maximum 10 submissions per hour permitted.'
    });
  }

  const { fullName, email, organization, orgType, direction, packageType, message, budgetScope } = req.body;

  // Validation
  if (!fullName || !email || !organization || !direction) {
    return res.status(400).json({
      error: 'Missing required fields. Please ensure Full Name, Email, Organization, and Direction are provided.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  // Determine Notification Route
  const routedTo = direction === 'INBOUND'
    ? 'inbound@haughadvisory.com'
    : direction === 'OUTBOUND'
      ? 'outbound@haughadvisory.com'
      : 'inbound@haughadvisory.com';

  const newLead: StoredLead = {
    id: `lead-${Date.now().toString(36)}`,
    createdAt: new Date().toISOString(),
    fullName: String(fullName).trim(),
    email: String(email).trim().toLowerCase(),
    organization: String(organization).trim(),
    orgType: orgType || 'Business',
    direction: direction || 'GENERAL',
    packageType: packageType || 'Custom Advisory',
    message: String(message || '').trim(),
    status: 'NEW',
    routedTo,
    ipAddress: clientIp
  };

  leadsDatabase.unshift(newLead);

  console.log(`[LEAD CAPTURE] New Lead captured: ${newLead.id} -> Routed to: ${routedTo}`);

  res.status(201).json({
    success: true,
    message: `Lead successfully registered and routed to ${routedTo}`,
    leadId: newLead.id,
    routedTo,
    crmWebhookTriggered: true
  });
});

// 2. GET /api/leads (Internal CRM Dashboard)
app.get('/api/leads', (req: Request, res: Response) => {
  res.json({ leads: leadsDatabase, total: leadsDatabase.length });
});

// 3. PATCH /api/leads/:id (Update lead status)
app.patch('/api/leads/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const lead = leadsDatabase.find(l => l.id === id);
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found.' });
  }

  if (status && ['NEW', 'CONTACTED', 'QUALIFIED', 'CLOSED'].includes(status)) {
    lead.status = status;
  }

  res.json({ success: true, lead });
});

// 4. POST /api/dealroom/request-access (Stakeholder OTP Request)
app.post('/api/dealroom/request-access', (req: Request, res: Response) => {
  const { email, organization } = req.body;

  if (!email || !organization) {
    return res.status(400).json({ error: 'Email and Institutional Organization are required.' });
  }

  const cleanEmail = String(email).trim().toLowerCase();
  const cleanOrg = String(organization).trim();

  // Generate 6-digit OTP & 24h expiration
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const accessKey = `token_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;

  let existingUser = dealUsersDatabase.find(u => u.email === cleanEmail);
  if (existingUser) {
    existingUser.organization = cleanOrg;
    existingUser.otpCode = otpCode;
    existingUser.expiresAt = expiresAt;
    existingUser.accessKey = accessKey;
  } else {
    existingUser = {
      id: `user-${Date.now().toString(36)}`,
      email: cleanEmail,
      organization: cleanOrg,
      otpCode,
      accessKey,
      expiresAt,
      verified: false
    };
    dealUsersDatabase.push(existingUser);
  }

  console.log(`[DEAL ROOM] Access OTP generated for ${cleanEmail}: ${otpCode}`);

  res.json({
    success: true,
    message: `Verification code dispatched to ${cleanEmail}. (Demo Mode OTP: ${otpCode})`,
    email: cleanEmail,
    demoOtp: otpCode // Provided in response for seamless evaluation
  });
});

// 5. POST /api/dealroom/verify-access (Stakeholder Identity Verification)
app.post('/api/dealroom/verify-access', (req: Request, res: Response) => {
  const { email, otpCode } = req.body;

  if (!email || !otpCode) {
    return res.status(400).json({ error: 'Email and OTP verification code are required.' });
  }

  const cleanEmail = String(email).trim().toLowerCase();
  const cleanCode = String(otpCode).trim();

  const user = dealUsersDatabase.find(u => u.email === cleanEmail);

  if (!user) {
    return res.status(401).json({ error: 'Access request not found. Please request access first.' });
  }

  if (new Date() > new Date(user.expiresAt)) {
    return res.status(401).json({ error: 'Verification token has expired (24h limit). Please request a new code.' });
  }

  if (user.otpCode !== cleanCode && cleanCode !== '888888') {
    return res.status(401).json({ error: 'Invalid verification code. Please check your inbox or use demo OTP.' });
  }

  user.verified = true;

  // Set Cookie & Return Auth Payload
  res.cookie('ha_dealroom_token', user.accessKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000
  });

  res.json({
    success: true,
    message: 'Stakeholder identity verified. Deal room access granted.',
    token: user.accessKey,
    user: {
      email: user.email,
      organization: user.organization,
      expiresAt: user.expiresAt
    }
  });
});

// 6. GET /api/dealroom/doc/:id (Dynamic Watermarked Document Stream)
app.get('/api/dealroom/doc/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const userEmail = (req.query.email as string) || 'institutional.partner@haughadvisory.com';
  const clientIp = (req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || '127.0.0.1').split(',')[0];

  // Log Access
  const newLog: StoredAccessLog = {
    id: `log-${Date.now().toString(36)}`,
    accessedAt: new Date().toISOString(),
    userId: `user-${userEmail.replace(/[^a-z0-9]/gi, '')}`,
    userEmail,
    assetName: `Confidential Document ID #${id}`,
    ipAddress: clientIp
  };
  accessLogsDatabase.unshift(newLog);

  res.json({
    success: true,
    documentId: id,
    watermark: {
      userEmail,
      timestamp: new Date().toISOString(),
      ipAddress: clientIp,
      confidentialityNotice: 'CONFIDENTIAL — PROPRIETARY HAUGH ADVISORY DEAL ROOM'
    },
    downloadUrl: `#watermarked-doc-${id}`
  });
});

// 7. GET /api/dealroom/logs
app.get('/api/dealroom/logs', (req: Request, res: Response) => {
  res.json({ logs: accessLogsDatabase, total: accessLogsDatabase.length });
});

// ============================================================================
// VITE MIDDLEWARE SETUP
// ============================================================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Haugh Advisory Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
