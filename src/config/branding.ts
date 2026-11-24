// ============================================================
// src/config/branding.ts
// Centralized Design System & Brand Identity: AeroPulse
// Enterprise Atmospheric Telemetry & Resilient Clean Passage
// ============================================================

export const BRANDING = {
  productName: 'AeroPulse',
  productNameShort: 'AeroPulse',
  suiteName: 'AeroPulse Atmospheric Intelligence & Clean Corridor System',
  tagline: 'Precision Urban Atmospheric Telemetry • AI Exposure Mitigation & Low-Emission Transit',
  companyName: 'AeroPulse Systems Inc.',
  version: '4.2 Enterprise Edition',
  buildTag: '2026.11-STABLE',
  supportEmail: 'ops@aeropulse.io',
  portalName: 'AeroPulse Atmospheric Control Center',

  // Core Engine
  engineName: 'AeroPulse Neural Core',
  engineBadge: 'Powered by AeroPulse Neural Core',

  // Compliance & Standards badges
  standards: [
    { label: 'WCAG 2.2 AA', tooltip: 'Certified visual contrast & accessibility twin representations' },
    { label: 'EPA Standardized', tooltip: 'Calibrated atmospheric sub-index breakpoints' },
    { label: 'Dijkstra Routing', tooltip: 'Graph-computed minimum inhalation exposure corridors' },
    { label: 'Gemini 3.1 Neural', tooltip: 'Zero-trust server-side exposure scheduling' },
  ],

  // Theme primary palettes - Crisp, authoritative & enterprise-grade
  colors: {
    primary: '#4f46e5', // Deep Indigo / Cobalt
    primaryHover: '#4338ca',
    primaryActive: '#3730a3',
    primarySubtle: '#eef2ff',
    secondary: '#0ea5e9', // Precision Sky
    accent: '#10b981', // Clean Emerald
    backgroundLight: '#f8fafc', // Crisp clean slate
    backgroundDark: '#090d16', // Deep Void Obsidian
    surfaceLight: '#ffffff',
    surfaceDark: '#0f172a',
    borderLight: '#e2e8f0',
    borderDark: 'rgba(255, 255, 255, 0.08)',
    textPrimaryLight: '#0f172a',
    textPrimaryDark: '#f8fafc',
    textMutedLight: '#64748b',
    textMutedDark: '#94a3b8',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
} as const;

export type BrandingConfig = typeof BRANDING;
