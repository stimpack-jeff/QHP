// Type definitions for Transformation Tiers

export interface TierOverview {
  id: string;                          // "tier-1-rfp-automation"
  number: number;                       // 1
  title: string;                        // "RFP & Proposal Automation"
  shortDescription: string;             // 100-150 char summary
  investment: string;                   // "$3.34M"
  annualValue: string;                  // "$49.8M"
  roi: string;                          // "776%"
  roiNumber: number;                    // 776 (for sorting)
  paybackMonths: number;                // 4.1
  applicability: number;                // 11 (out of 11 companies)
  applicabilityPercent: number;         // 100
  priority: "Phase 1" | "Phase 1-2" | "Phase 2";
  tags: string[];                       // ["Universal", "High ROI", "Quick Win"]
  industries: string[];                 // ["CRO", "CDMO", "Tech Platforms", "All"]
  icon?: string;                        // Icon identifier for UI
}

export interface CompanyApplicability {
  companyId: string;                    // "clinical-ink"
  companyName: string;                  // "Clinical Ink"
  priority: "High" | "Medium" | "Low" | "N/A";
  annualValue: string;                  // "$1.9-2.6M"
  hoursSaved?: string;                  // "2,100-2,550 hrs/year"
  customizationNeeds: string[];
  deploymentPhase?: string;             // "Wave 1 (Months 3-4)"
}

export interface CaseStudy {
  company: string;                      // "Unilever"
  industry: string;                     // "Consumer Goods"
  size?: string;                        // "$60B revenue, 148,000 employees"
  challenge: string;                    // Brief description of problem
  solution: string;                     // What they implemented
  results: string[];                    // Array of bullet points
  source: string;                       // Citation
  relevance?: string;                   // Why relevant to QHP
}

export interface Risk {
  name: string;
  likelihood: "High" | "Medium" | "Low";
  impact: "High" | "Medium" | "Low";
  mitigation: string;
  contingencyCost?: string;             // "$80K"
}

export interface FinancialBreakdown {
  year1: string;
  year2: string;
  year3: string;
  total: string;
}

export interface ValueCreation {
  timeSavings?: string;
  costSavings?: string;
  revenueImpact?: string;
  strategicValue?: string;
  riskReduction?: string;
}

export interface SensitivityCase {
  roi: string;
  payback: string;
  description?: string;
}

export interface TierFinancials {
  investmentBreakdown: FinancialBreakdown;
  valueCreation: ValueCreation;
  sensitivityAnalysis: {
    pessimistic: SensitivityCase;
    base: SensitivityCase;
    optimistic: SensitivityCase;
  };
  paybackPeriod: string;
  cumulativeROI?: string;
}

export interface ImplementationPhase {
  name: string;                         // "Phase 1: Foundation"
  timeline: string;                     // "Months 1-6"
  description: string;
  investment?: string;
  deliverables?: string[];
  companies?: string[];                 // Which companies in this phase
}

export interface TierDetail extends TierOverview {
  longDescription: string;              // 300-500 word executive summary
  problem: {
    headline: string;
    description: string;
    portfolioImpact: string;
    currentState?: string;
  };
  solution: {
    headline: string;
    description: string;
    keyFeatures: string[];
    technologyStack?: string[];
    buildVsBuy?: string;
  };
  financials: TierFinancials;
  companyApplicability: CompanyApplicability[];
  implementation: {
    phases: ImplementationPhase[];
    totalTimeline: string;              // "18-24 months"
    successMetrics?: string[];
  };
  caseStudies: CaseStudy[];
  risks: Risk[];
  competitiveAdvantage: string;
  strategicValue?: string;
  dependencies?: string[];
  successMetrics?: {
    metric: string;
    current: string;
    target: string;
    timeline: string;
  }[];
}

// Filter types
export type PhaseFilter = "all" | "phase-1" | "phase-1-2" | "phase-2";
export type IndustryFilter = "all" | "universal" | "cro" | "cdmo" | "tech" | "pharma" | "services";
export type ApplicabilityFilter = "all" | "100%" | "50-99%" | "<50%";
export type SortOption = "priority" | "roi-desc" | "roi-asc" | "investment-asc" | "investment-desc" | "value-desc" | "value-asc";

export interface TierFilters {
  phase: PhaseFilter;
  industry: IndustryFilter;
  applicability: ApplicabilityFilter;
  sort: SortOption;
}
