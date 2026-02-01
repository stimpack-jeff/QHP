# Frontend Handoff: Transformation Tiers Section

**Date:** January 30, 2026  
**For:** Frontend Specialist  
**From:** Backend/Content Specialist  
**Project:** QHP Capital AI Transformation Website - Tiers Section

---

## Overview

This handoff covers the implementation of the **Transformation Tiers** section of the QHP Capital website. This section showcases 10 AI transformation opportunities across the portfolio, each with detailed analysis including investment, ROI, applicability, and implementation roadmaps.

---

## URL Structure

```
/transformation              → Transformation hub/landing page
/transformation/tiers        → Overview of all 10 tiers (card grid)
/transformation/tiers/[id]   → Detail page for specific tier

Tier IDs (URL slugs):
- tier-1-rfp-automation
- tier-2-board-reporting
- tier-3-recruiting-hr
- tier-4-financial-forecasting
- tier-5-protocol-intelligence
- tier-6-clinical-documents
- tier-7-patient-matching
- tier-8-manufacturing-ai
- tier-9-data-quality
- tier-10-customer-support
```

---

## Data Schema

### Tier Overview Data Structure

```typescript
interface TierOverview {
  id: string;                          // "tier-1-rfp-automation"
  number: number;                       // 1
  title: string;                        // "RFP & Proposal Automation"
  shortDescription: string;             // 100-150 char summary
  investment: string;                   // "$3.34M"
  annualValue: string;                  // "$49.8M"
  roi: string;                          // "776%"
  paybackMonths: number;                // 4.1
  applicability: number;                // 11 (out of 11 companies)
  applicabilityPercent: number;         // 100
  priority: "Phase 1" | "Phase 1-2" | "Phase 2";
  tags: string[];                       // ["Universal", "High ROI", "Quick Win"]
  industry: string[];                   // ["CRO", "CDMO", "Tech Platforms", "All"]
  icon?: string;                        // Icon identifier for UI
}

interface TierDetail extends TierOverview {
  longDescription: string;              // 300-500 word executive summary
  problem: {
    headline: string;
    description: string;
    portfolioImpact: string;
  };
  solution: {
    headline: string;
    description: string;
    keyFeatures: string[];
  };
  financials: {
    investmentBreakdown: {
      year1: string;
      year2: string;
      year3: string;
      total: string;
    };
    valueCreation: {
      timeSavings: string;
      costSavings: string;
      revenueImpact?: string;
      strategicValue?: string;
    };
    sensitivityAnalysis: {
      pessimistic: { roi: string; payback: string };
      base: { roi: string; payback: string };
      optimistic: { roi: string; payback: string };
    };
  };
  companyApplicability: CompanyApplicability[];
  implementation: {
    phase1: string;
    phase2: string;
    phase3: string;
    timeline: string;
  };
  caseStudies: CaseStudy[];
  risks: Risk[];
  competitiveAdvantage: string;
}

interface CompanyApplicability {
  companyId: string;                    // "clinical-ink"
  companyName: string;                  // "Clinical Ink"
  priority: "High" | "Medium" | "Low";
  annualValue: string;                  // "$1.9-2.6M"
  hoursSaved: string;                   // "2,100-2,550 hrs/year"
  customizationNeeds: string[];
}

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  source: string;
}

interface Risk {
  name: string;
  likelihood: "High" | "Medium" | "Low";
  impact: "High" | "Medium" | "Low";
  mitigation: string;
}
```

---

## Page Structure

### 1. Tiers Overview Page (`/transformation/tiers`)

**Purpose:** High-level view of all 10 tiers, allowing comparison and navigation

**Layout Sections:**

```
┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION                                               │
│  - "10 AI Transformation Tiers"                             │
│  - "Portfolio-wide opportunities, $XXM total value"         │
│  - Quick stats (total investment, total value, avg ROI)     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FILTERS / SORTING                                          │
│  [ All ] [ Phase 1 ] [ Phase 2 ]                           │
│  [ All Industries ] [ Universal ] [ CRO ] [ CDMO ] [...]   │
│  Sort by: [ Priority ] [ ROI ] [ Investment ] [ Value ]     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  TIER CARDS GRID (3 columns on desktop, 1 on mobile)       │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ Tier 1      │  │ Tier 2      │  │ Tier 3      │        │
│  │ RFP Auto... │  │ Board Rep...│  │ Recruiting  │        │
│  │             │  │             │  │             │        │
│  │ $3.34M      │  │ $2.55M      │  │ $2.96M      │        │
│  │ ROI: 776%   │  │ ROI: 689%   │  │ ROI: 856%   │        │
│  │ 11/11 cos   │  │ 11/11 cos   │  │ 11/11 cos   │        │
│  │             │  │             │  │             │        │
│  │ [View →]    │  │ [View →]    │  │ [View →]    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                             │
│  (Repeat for all 10 tiers...)                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  COMPARISON TABLE (Optional)                                │
│  Side-by-side comparison of key metrics for all tiers      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CTA SECTION                                                │
│  "Ready to transform your portfolio?"                       │
│  [Explore Portfolio Companies] [Download Full Report]       │
└─────────────────────────────────────────────────────────────┘
```

**Card Component Specs:**

```tsx
<TierCard
  tier={tierData}
  hoverEffect="lift-shadow"
  transitionDuration={0.3}
  onClick={() => navigate to detail page}
>
  <TierBadge number={1} priority="Phase 1" />
  <TierTitle>{tier.title}</TierTitle>
  <TierDescription>{tier.shortDescription}</TierDescription>
  
  <MetricsGrid>
    <Metric label="Investment" value={tier.investment} />
    <Metric label="Annual Value" value={tier.annualValue} />
    <Metric label="ROI" value={tier.roi} highlight />
    <Metric label="Payback" value={`${tier.paybackMonths} mo`} />
  </MetricsGrid>
  
  <ApplicabilityBadge>
    {tier.applicability}/11 companies ({tier.applicabilityPercent}%)
  </ApplicabilityBadge>
  
  <TagList tags={tier.tags} />
  
  <ViewDetailsButton />
</TierCard>
```

---

### 2. Tier Detail Page (`/transformation/tiers/[id]`)

**Purpose:** Comprehensive deep-dive into specific tier

**Layout Sections:**

```
┌─────────────────────────────────────────────────────────────┐
│  BREADCRUMBS                                                │
│  Home > Transformation > Tiers > Tier 1: RFP Automation    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION                                               │
│  - Tier number badge                                        │
│  - Title (large)                                            │
│  - Executive summary (2-3 paragraphs)                       │
│  - Key metrics bar (investment, value, ROI, payback)        │
│  - Applicability indicator (11/11 companies)                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  NAVIGATION TABS (sticky on scroll)                        │
│  [ Overview ] [ Solution ] [ Financials ] [ Companies ]    │
│  [ Implementation ] [ Case Studies ] [ Risks ]              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  OVERVIEW TAB                                               │
│  - Problem Statement                                        │
│    - Headline                                               │
│    - Description                                            │
│    - Portfolio-wide impact stats                            │
│  - Strategic Significance                                   │
│    - Why this matters                                       │
│    - LP storytelling value                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SOLUTION TAB                                               │
│  - Architecture diagram (if available)                      │
│  - Key features list                                        │
│  - Technology stack                                         │
│  - Build vs. Buy recommendations                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FINANCIALS TAB                                             │
│  - Investment breakdown (3-year table)                      │
│  - Value creation breakdown                                 │
│  - ROI calculation explanation                              │
│  - Sensitivity analysis (pessimistic/base/optimistic)       │
│  - Interactive ROI calculator (optional)                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  COMPANIES TAB                                              │
│  - Company applicability matrix                             │
│  - Per-company breakdown (priority, value, customization)   │
│  - Link to each company's portfolio page                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  IMPLEMENTATION TAB                                         │
│  - Timeline visualization                                   │
│  - Phase 1, 2, 3 descriptions                               │
│  - Deployment sequence                                      │
│  - Success metrics                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CASE STUDIES TAB                                           │
│  - 4-6 external case studies                                │
│  - Each with: company, challenge, solution, results         │
│  - Source citations                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  RISKS TAB                                                  │
│  - Risk matrix (likelihood × impact)                        │
│  - Mitigation strategies                                    │
│  - Monitoring approach                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER / NAVIGATION                                        │
│  ← Previous Tier | Next Tier →                             │
│  [Back to All Tiers] [Download Tier Analysis PDF]          │
└─────────────────────────────────────────────────────────────┘
```

---

## Design Guidelines

### Visual Hierarchy

1. **Tier Numbering:** Prominent badge/indicator (Tier 1, Tier 2, etc.)
2. **Priority:** Color-coded by deployment phase
   - Phase 1 (Months 1-6): Primary brand color (e.g., blue/purple)
   - Phase 1-2 (Months 4-12): Secondary color (e.g., teal)
   - Phase 2 (Months 7-18): Tertiary color (e.g., green)
3. **ROI Highlighting:** Bold, large font for high ROI numbers (>500%)
4. **Applicability:** Visual indicator (e.g., 11/11 with all circles filled)

### Color Palette Recommendations

```css
/* Phase 1 Tiers (Immediate deployment) */
--phase-1-primary: #4F46E5;    /* Indigo */
--phase-1-bg: #EEF2FF;

/* Phase 1-2 Tiers (Staggered) */
--phase-1-2-primary: #0891B2;  /* Cyan */
--phase-1-2-bg: #ECFEFF;

/* Phase 2 Tiers (Later deployment) */
--phase-2-primary: #059669;    /* Emerald */
--phase-2-bg: #ECFDF5;

/* Metrics */
--investment-color: #DC2626;   /* Red (cost) */
--value-color: #16A34A;        /* Green (gain) */
--roi-highlight: #F59E0B;      /* Amber (attention) */
```

### Typography

- **Tier Title:** 32-40px, bold, brand font
- **Metrics:** 24-28px for values, 14px for labels
- **Body Copy:** 16-18px, line-height 1.6
- **Captions:** 14px, muted color

---

## Interactive Elements

### Filters (Tiers Overview Page)

```tsx
// Implement multi-select filters
const filters = {
  phase: ["all", "phase-1", "phase-1-2", "phase-2"],
  industry: ["all", "universal", "cro", "cdmo", "tech", "pharma"],
  applicability: ["all", "100%", "50-99%", "<50%"]
};

// Sort options
const sortOptions = [
  { value: "priority", label: "By Priority" },
  { value: "roi-desc", label: "Highest ROI" },
  { value: "investment-asc", label: "Lowest Investment" },
  { value: "value-desc", label: "Highest Value" }
];
```

### Tabs (Tier Detail Page)

- Sticky tabs that remain visible on scroll
- Smooth scroll to section when tab clicked
- Active tab indicator (underline or background highlight)
- Mobile: Convert to accordion or vertical stack

### Expandable Sections

- Long content (case studies, risks) should be expandable
- "Read more" / "Show less" toggles
- Animated height transitions

---

## Responsive Design Requirements

### Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  - Single column tier cards
  - Stack metrics vertically
  - Simplified tables (scrollable or cards)
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  - 2-column tier grid
  - Side-by-side metrics (2×2 grid)
}

/* Desktop */
@media (min-width: 1025px) {
  - 3-column tier grid
  - Full tables and charts
  - Sticky sidebar navigation (optional)
}
```

---

## Animation Specifications

### Page Transitions (Framer Motion)

```tsx
// Tier card entrance
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Staggered grid animation
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover states
const hoverVariants = {
  initial: { scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    transition: { duration: 0.2 }
  }
};
```

---

## SEO & Metadata

### Page Titles

```
Overview: "AI Transformation Tiers | QHP Capital"
Detail: "Tier [N]: [Title] | AI Transformation | QHP Capital"
```

### Meta Descriptions

```
Overview: "Explore 10 AI transformation opportunities across QHP Capital's 
healthcare portfolio. $XX.XM total value, portfolio-wide applicability."

Detail: "[Tier title]: $[Investment] investment, $[Value] annual return, 
[ROI]% ROI. [Short description]."
```

### Open Graph Images

- Generate tier-specific OG images with:
  - Tier number and title
  - Key metrics (investment, ROI, applicability)
  - QHP branding

---

## Data Loading Pattern

### Overview Page

```tsx
// src/app/transformation/tiers/page.tsx
import { getTierOverviews } from '@/lib/tiers';

export default async function TiersOverviewPage() {
  const tiers = await getTierOverviews();
  
  return (
    <TiersOverview tiers={tiers} />
  );
}
```

### Detail Page

```tsx
// src/app/transformation/tiers/[id]/page.tsx
import { getTierDetail } from '@/lib/tiers';

export default async function TierDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const tier = await getTierDetail(params.id);
  
  return (
    <TierDetail tier={tier} />
  );
}

// Generate static paths for all tiers
export async function generateStaticParams() {
  return [
    { id: 'tier-1-rfp-automation' },
    { id: 'tier-2-board-reporting' },
    // ... all 10 tiers
  ];
}
```

---

## Component Hierarchy

```
pages/
├── transformation/
│   └── tiers/
│       ├── page.tsx                     (Overview page)
│       └── [id]/
│           └── page.tsx                 (Detail page)

components/
├── tiers/
│   ├── TierCard.tsx                     (Card for overview grid)
│   ├── TierCardGrid.tsx                 (Grid container with filters)
│   ├── TierFilters.tsx                  (Filter controls)
│   ├── TierComparison.tsx               (Comparison table)
│   ├── TierDetail/
│   │   ├── TierHero.tsx                 (Top section with key metrics)
│   │   ├── TierTabs.tsx                 (Navigation tabs)
│   │   ├── TierOverview.tsx             (Overview tab content)
│   │   ├── TierSolution.tsx             (Solution tab)
│   │   ├── TierFinancials.tsx           (Financials tab)
│   │   ├── TierCompanies.tsx            (Companies matrix)
│   │   ├── TierImplementation.tsx       (Timeline)
│   │   ├── TierCaseStudies.tsx          (Case studies)
│   │   ├── TierRisks.tsx                (Risk matrix)
│   │   └── TierNavigation.tsx           (Prev/Next buttons)
│   └── shared/
│       ├── MetricCard.tsx               (Reusable metric display)
│       ├── ProgressBar.tsx              (For ROI visualization)
│       ├── CompanyBadge.tsx             (Company applicability indicator)
│       └── PhaseBadge.tsx               (Phase 1/2 indicator)

lib/
└── tiers.ts                             (Data fetching functions)

public/
└── data/
    └── tiers/
        ├── tier-1-rfp-automation.json
        ├── tier-2-board-reporting.json
        └── ... (all 10 tiers)
```

---

## Accessibility Requirements

1. **Keyboard Navigation:** All interactive elements (cards, tabs, filters) keyboard accessible
2. **ARIA Labels:** Proper labels for metrics, buttons, tabs
3. **Focus Indicators:** Clear focus states for keyboard navigation
4. **Screen Reader Support:** Meaningful alt text, proper heading hierarchy (h1 > h2 > h3)
5. **Color Contrast:** WCAG AA compliance (4.5:1 for body text, 3:1 for large text)
6. **Semantic HTML:** Use `<article>` for tier cards, `<nav>` for tabs, proper table markup

---

## Performance Considerations

1. **Static Generation:** Pre-render all tier pages at build time (no dynamic data)
2. **Image Optimization:** Use Next.js `<Image>` component for any charts/diagrams
3. **Code Splitting:** Lazy load heavy components (charts, detailed tables)
4. **Font Loading:** Preload critical fonts, use `font-display: swap`
5. **Bundle Size:** Keep initial bundle <200KB for tier overview page

---

## Testing Checklist

### Functional Testing
- [ ] All 10 tier cards render correctly on overview page
- [ ] Filters work (phase, industry, applicability)
- [ ] Sorting works (priority, ROI, investment, value)
- [ ] Click tier card navigates to detail page
- [ ] All tabs on detail page work
- [ ] Prev/Next tier navigation works
- [ ] Links to portfolio companies work

### Responsive Testing
- [ ] Mobile: Single column, readable metrics
- [ ] Tablet: 2-column grid, touch-friendly
- [ ] Desktop: 3-column grid, all features visible

### Accessibility Testing
- [ ] Keyboard-only navigation works
- [ ] Screen reader announces content properly
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible

### Performance Testing
- [ ] Overview page loads <2 seconds
- [ ] Detail page loads <2 seconds
- [ ] Lighthouse score >90

---

## Questions for Frontend Specialist

Before starting implementation, please confirm:

1. **Design System:** Are we using an existing component library (Shadcn, MUI, etc.) or custom components?
2. **Charts/Visualizations:** Do we need interactive charts (ROI over time, company matrix)? If so, preferred library (Recharts, Chart.js, D3)?
3. **PDF Export:** Should "Download PDF" actually generate PDFs, or link to pre-generated files?
4. **Interactive ROI Calculator:** Is this in scope for V1, or nice-to-have for V2?
5. **Mobile Navigation:** Tabs vs. accordion on mobile—preference?

---

## Next Steps

1. **Review this handoff document** and flag any questions or concerns
2. **I'll prepare the data files** (JSON extraction from markdown, TypeScript types, data fetching functions)
3. **You build the UI components** following this spec
4. **We integrate and test** together

**Estimated Timeline:**
- Backend data prep (me): 4-6 hours
- Frontend implementation (you): 12-16 hours
- Integration & testing: 2-4 hours
- **Total: 2-3 days for V1**

---

## Contact & Collaboration

- **Questions:** Tag me in comments or Slack
- **Data Updates:** If you need additional data fields, I can extract them from the tier markdown files
- **Content Tweaks:** If descriptions too long/short for UI, I can adjust

Let's build something great! 🚀
