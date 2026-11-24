// ============================================================
// src/config/branding.ts
// Centralized Rebranded Configuration: AeroShield
// Clean air defense, safe urban transit, and atmospheric intelligence.
// ============================================================

export const BRANDING = {
  productName: 'AeroShield',
  productNameShort: 'AeroShield',
  suiteName: 'AeroShield Safe Passage & Clean Air Platform',
  tagline: 'Safe passage through polluted cities • Hyperlocal clean air intelligence',
  companyName: 'AeroShield Technologies Inc.',
  version: '3.0.0 Community Edition',
  buildTag: '2026.11-COMMUNITY',
  supportEmail: 'support@aeroshield.org',
  portalName: 'Community Safe Passage & Clean Air Portal',

  // Core Engine
  engineName: 'AeroShield Core',
  engineBadge: 'Powered by AeroShield Community Engine',

  // Compliance & Standards badges
  standards: [
    { label: 'WCAG 2.2 AA', tooltip: 'Full accessibility & twin representation' },
    { label: 'EPA Standardized', tooltip: 'Calibrated air quality sub-indexes' },
    { label: 'Community Powered', tooltip: 'Hyperlocal clean route sharing & neighborhood pledges' },
    { label: 'Gemini 3.1 AI', tooltip: 'Server-side neural routine optimization' },
  ],

  // Theme primary palettes - Warm, community-friendly & accessible
  colors: {
    primary: '#059669', // Emerald clean air
    primaryHover: '#047857',
    secondary: '#d97706', // Warm amber / community warmth
    accent: '#0d9488', // Teal safe passage
    backgroundLight: '#fafaf9', // Warm stone/paper canvas
    backgroundDark: '#0c0f14',
    surfaceLight: '#ffffff',
    surfaceDark: '#141a24',
    textPrimaryLight: '#1c1917',
    textPrimaryDark: '#f8fafc',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
} as const;

export type BrandingConfig = typeof BRANDING;
