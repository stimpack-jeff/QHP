import fs from 'fs';
import path from 'path';
import type { TierMeta } from './tier-types';
import { tierTitles } from './tier-types';

// Re-export types and display info from tier-types
export type { TierMeta } from './tier-types';
export { tierDisplayInfo, tierTitles } from './tier-types';

export interface TierContent {
  slug: string;
  meta: TierMeta;
  content: string;
}

export interface FinancialContent {
  slug: string;
  investment: string;
  roi: string;
  content: string;
}

// Map tier number to slug for URL routing
const tierSlugMap: Record<number, string> = {
  0: 'executive-ai-augmentation',
  1: 'rfp-automation',
  2: 'board-reporting',
  3: 'recruiting-hr',
  4: 'financial-forecasting',
  5: 'clinical-research-intelligence',
  6: 'manufacturing-operations',
  7: 'regulatory-compliance',
  8: 'customer-support',
  9: 'supply-chain-logistics',
  10: 'commercial-intelligence',
};

// Map slug back to tier number
const slugToTierMap: Record<string, number> = Object.entries(tierSlugMap).reduce(
  (acc, [tier, slug]) => ({ ...acc, [slug]: parseInt(tier) }),
  {}
);

// Map tier number to filename in Content_Principles_Based
const tierFileMap: Record<number, string> = {
  0: 'Tier_00_Executive_AI_Augmentation.md',
  1: 'Tier_01_RFP_Automation.md',
  2: 'Tier_02_Board_Reporting.md',
  3: 'Tier_03_Recruiting_HR.md',
  4: 'Tier_04_Financial_Forecasting.md',
  5: 'Tier_05_Clinical_Research_Intelligence.md',
  6: 'Tier_06_Manufacturing_Operations.md',
  7: 'Tier_07_Regulatory_Compliance.md',
  8: 'Tier_08_Customer_Support.md',
  9: 'Tier_09_Supply_Chain_Logistics.md',
  10: 'Tier_10_Commercial_Intelligence.md',
};

// Map tier number to financial deep-dive filename (if exists)
const financialFileMap: Record<number, string | null> = {
  0: null,
  1: 'Tier_01_RFP_Automation.md',
  2: 'Tier_02_Board_Reporting.md',
  3: null,
  4: null,
  5: 'Tier_05_Protocol_Intelligence.md',
  6: 'Tier_06_Clinical_Document_Generation.md',
  7: 'Tier_07_Patient_Matching.md',
  8: 'Tier_10_Customer_Support.md',
  9: 'Tier_09_Data_Quality.md',
  10: null,
};

// Get phase for a tier
export function getTierPhase(tierNumber: number): 0 | 1 | 2 {
  if (tierNumber === 0) return 0;
  if (tierNumber >= 1 && tierNumber <= 4) return 1;
  return 2;
}

// Check if tier has financial deep-dive
export function hasFinancialDeepDive(tierNumber: number): boolean {
  return financialFileMap[tierNumber] !== null;
}

function getPrinciplesTiersDirectory(): string {
  return path.join(process.cwd(), '..', 'Monday_Meeting', 'Content_Principles_Based');
}

function getFinancialTiersDirectory(): string {
  return path.join(process.cwd(), '..', 'Transformation_Tiers');
}

function parseMetaFromContent(content: string, tierNumber: number): Partial<TierMeta> {
  const meta: Partial<TierMeta> = {
    tier: tierNumber,
    title: tierTitles[tierNumber] || `Tier ${tierNumber}`,
    phase: getTierPhase(tierNumber),
    hasFinancialDeepDive: hasFinancialDeepDive(tierNumber),
  };

  const categoryMatch = content.match(/\*\*Category:\*\*\s*(.+)/);
  if (categoryMatch) {
    meta.category = categoryMatch[1].trim();
  }

  const timelineMatch = content.match(/\*\*Deployment Timeline:\*\*\s*(.+)/);
  if (timelineMatch) {
    meta.timeline = timelineMatch[1].trim();
  }

  const applicabilityMatch = content.match(/\*\*Portfolio (?:Applicability|Reach):\*\*\s*(.+)/);
  if (applicabilityMatch) {
    meta.applicability = applicabilityMatch[1].trim();
  }

  return meta;
}

export function getAllTierSlugs(): string[] {
  return Object.values(tierSlugMap);
}

export function getTierBySlug(slug: string): TierContent | null {
  const tierNumber = slugToTierMap[slug];
  if (tierNumber === undefined) return null;

  const filename = tierFileMap[tierNumber];
  if (!filename) return null;

  const filePath = path.join(getPrinciplesTiersDirectory(), filename);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const meta = parseMetaFromContent(fileContent, tierNumber);

  return {
    slug,
    meta: {
      tier: tierNumber,
      title: meta.title || tierTitles[tierNumber],
      category: meta.category || '',
      timeline: meta.timeline || '',
      applicability: meta.applicability || '',
      phase: getTierPhase(tierNumber),
      hasFinancialDeepDive: hasFinancialDeepDive(tierNumber),
    },
    content: fileContent,
  };
}

export function getFinancialContent(slug: string): FinancialContent | null {
  const tierNumber = slugToTierMap[slug];
  if (tierNumber === undefined) return null;

  const filename = financialFileMap[tierNumber];
  if (!filename) return null;

  const filePath = path.join(getFinancialTiersDirectory(), filename);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  let investment = '';
  let roi = '';
  let content = fileContent;

  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    content = frontmatterMatch[2];

    const investmentMatch = frontmatter.match(/Investment:\s*(.+)/);
    if (investmentMatch) investment = investmentMatch[1].trim();

    const roiMatch = frontmatter.match(/ROI:\s*(.+)/);
    if (roiMatch) roi = roiMatch[1].trim();
  }

  return {
    slug,
    investment,
    roi,
    content,
  };
}

export function getAllTiers(): TierContent[] {
  const tiers: TierContent[] = [];
  
  for (const [tierNum, filename] of Object.entries(tierFileMap)) {
    const tierNumber = parseInt(tierNum);
    const filePath = path.join(getPrinciplesTiersDirectory(), filename);
    
    if (!fs.existsSync(filePath)) continue;

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const meta = parseMetaFromContent(fileContent, tierNumber);
    const slug = tierSlugMap[tierNumber];

    tiers.push({
      slug,
      meta: {
        tier: tierNumber,
        title: meta.title || tierTitles[tierNumber],
        category: meta.category || '',
        timeline: meta.timeline || '',
        applicability: meta.applicability || '',
        phase: getTierPhase(tierNumber),
        hasFinancialDeepDive: hasFinancialDeepDive(tierNumber),
      },
      content: fileContent,
    });
  }
  
  return tiers.sort((a, b) => a.meta.tier - b.meta.tier);
}
