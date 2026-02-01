// Client-safe tier types and display info (no fs imports)

export interface TierMeta {
  tier: number;
  title: string;
  category: string;
  timeline: string;
  applicability: string;
  phase: 0 | 1 | 2;
  hasFinancialDeepDive: boolean;
}

// Tier display info
export const tierDisplayInfo: Record<number, { color: string; icon: string; phaseColor: string }> = {
  0: { color: 'from-amber-500 to-amber-600', icon: '👑', phaseColor: 'bg-amber-500' },
  1: { color: 'from-blue-500 to-blue-600', icon: '📄', phaseColor: 'bg-emerald-500' },
  2: { color: 'from-purple-500 to-purple-600', icon: '📊', phaseColor: 'bg-emerald-500' },
  3: { color: 'from-green-500 to-green-600', icon: '👥', phaseColor: 'bg-emerald-500' },
  4: { color: 'from-cyan-500 to-cyan-600', icon: '💰', phaseColor: 'bg-emerald-500' },
  5: { color: 'from-red-500 to-red-600', icon: '🧬', phaseColor: 'bg-purple-500' },
  6: { color: 'from-orange-500 to-orange-600', icon: '🏭', phaseColor: 'bg-purple-500' },
  7: { color: 'from-indigo-500 to-indigo-600', icon: '⚖️', phaseColor: 'bg-purple-500' },
  8: { color: 'from-pink-500 to-pink-600', icon: '🎧', phaseColor: 'bg-purple-500' },
  9: { color: 'from-teal-500 to-teal-600', icon: '📦', phaseColor: 'bg-purple-500' },
  10: { color: 'from-rose-500 to-rose-600', icon: '📈', phaseColor: 'bg-purple-500' },
};

// Tier titles (human-readable)
export const tierTitles: Record<number, string> = {
  0: 'Executive AI Augmentation',
  1: 'RFP & Proposal Automation',
  2: 'Board Reporting & Analytics',
  3: 'Recruiting & HR Intelligence',
  4: 'Financial Planning & Forecasting',
  5: 'Clinical Research Intelligence',
  6: 'Manufacturing Operations',
  7: 'Regulatory Compliance',
  8: 'Customer Support',
  9: 'Supply Chain & Logistics',
  10: 'Commercial Intelligence',
};
