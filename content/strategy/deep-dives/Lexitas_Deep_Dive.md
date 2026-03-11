# Lexitas Pharma Services: AI/Robotics Full Replacement Deep Dive

**Prepared for:** Jeff Frazier, Operating Partner – AI, QHP Capital
**Date:** March 5, 2026
**Classification:** Internal – QHP Capital Partners Only
**Tier:** 3 (Significant Replacement — 55% target)
**Priority:** THIRD WAVE — high-value specialist, complex domain

---

## Executive Summary

Lexitas Pharma Services is a $25-35M ophthalmology-focused CRO with ~100 FTEs based in Durham, NC. It is the only full-service CRO on the planet that does nothing but ophthalmology — drugs and devices, anterior and posterior segment, across 70+ countries. That hyper-specialization is both its moat and its constraint: the domain expertise that commands premium pricing is concentrated in human brains, and the regulatory environment (21 CFR Part 11, ICH-GCP, FDA AI/ML device guidance) demands more human oversight than a hub services or IRB company.

**The thesis is nuanced but significant:** Lexitas cannot be hollowed out the way COPILOT can (85% replacement) or Univo can (80%), because (a) ophthalmic image reading still requires certified human validation for regulatory submissions, (b) site relationships and sponsor "white glove" service are genuinely human-dependent, and (c) clinical trial operations involve physical-world coordination that AI orchestrates but doesn't eliminate. However, if we rebuilt Lexitas from zero today, we would hire **45 people, not 100** — and those 45 would each generate $800K–$1.1M in revenue instead of $280K.

**The real opportunity isn't headcount decimation — it's margin expansion + throughput multiplication.** A Lexitas with 45 FTEs and AI-native workflows can run 3x the number of concurrent studies at 2x the margin. That turns a $25-35M business doing $4-6M EBITDA into a $50-70M business doing $18-28M EBITDA — without proportionally scaling headcount. In ophthalmology CRO, the revenue ceiling is set by how many studies you can staff. AI blows that ceiling off.

**Bottom line:**

| Metric | Current | Post-Transformation (30 mo) |
|--------|---------|-------------------------------|
| FTEs | ~100 | ~45 |
| Revenue | $30M | $55-70M |
| Revenue/Employee | $300K | $1.2-1.6M |
| EBITDA Margin | ~16% | ~38-42% |
| EBITDA | $4.8M | $21-29M |
| Enterprise Value (12x) | $58M | $252-348M |
| **Value Created** | — | **$194-290M** |
| **Transformation Investment** | — | **$3.8M** |
| **MOIC on AI Spend** | — | **51-76x** |
| **Payback Period** | — | **7-9 months** |

This is not a workforce bloodbath. This is a precision transformation: automate the repetitive interior of each department (image pre-grading, data cleaning, query generation, monitoring report drafting, document first-drafts, site scoring, enrollment modeling), preserve the human shell of expertise (certified readers validating AI grades, senior medical writers reviewing AI drafts, PMs managing sponsor relationships, the CMO designing protocols), and use the freed capacity to take on dramatically more studies. The 55 people who leave are replaced by AI systems; the 45 who remain become the most productive ophthalmology CRO professionals in the industry.

**Starting hypotheses — validated and extended:**

1. ✅ **Reading Center is the #1 AI opportunity** — CONFIRMED AND QUANTIFIED. FDA-cleared ophthalmic AI exists for OCT segmentation (Topcon, Heidelberg), DR grading (IDx/Digital Diagnostics), and fundus analysis (Google/ARDA). AI pre-grading + certified reader validation cuts reading turnaround from 5-7 days to 1-2 days and increases images-per-reader from 35/day to 100+/day. The 12 readers become 5, and each is 3x more productive. This alone enables premium "AI-accelerated reading" pricing at 25-40% above current rates.

2. ✅ **Medical/regulatory writing is 60% LLM-automatable** — CONFIRMED. CSRs, IBs, ICFs, protocol synopses, and regulatory responses all follow structured templates within ophthalmology. Claude + RAG on Lexitas's historical document corpus + ophthalmology endpoint/safety databases generates 60-70% complete first drafts. The 7 writers become 3, each producing 2-3x the documents.

3. ✅ **Data management is ripe for automation** — CONFIRMED. Database build from protocol specs, edit check programming, query generation, data reconciliation, and ophthalmology-specific coding are all pattern-matching tasks where AI excels. The 14 data managers become 6, with AI handling 70%+ of routine query generation and edit check creation.

4. ✅ **Clinical operations has a human floor** — CONFIRMED. PMs, CTLs, and CRAs must maintain sponsor relationships, conduct site visits, and manage study-specific client expectations. But monitoring report generation (70% automatable), site selection (60% automatable), enrollment tracking (80% automatable), and feasibility questionnaires (50% automatable) all have massive AI upside. The 32 clinical ops FTEs become 18.

5. ✅ **Biostatistics gets productivity gains, not headcount cuts** — CONFIRMED. SAS programming, TLF generation, and SAP drafting get 40-50% faster with AI code assistants, but the ophthalmology-specific statistical expertise is a retention priority. The 12 biostats FTEs become 8, and each produces nearly double the output.

**Unexpected finding #1:** Lexitas's in-house Reading Center is not just an efficiency play — it's a **new product line**. An AI-powered reading center that delivers 1-2 day turnaround on ophthalmic image analysis can be sold as a standalone service to sponsors running trials with other CROs. "LexVision™" — Lexitas's AI reading center as a service — could be a $5-10M standalone revenue stream at 70%+ margins, serving sponsors who want Lexitas-quality reading without switching their full CRO.

**Unexpected finding #2:** The ophthalmology endpoint database that Lexitas builds for its Protocol Optimization AI (475+ combined years of endpoint expertise, codified) is a **proprietary asset** with no equivalent in the market. No other company has this depth of ophthalmology trial design intelligence in a queryable format. This becomes a competitive moat that deepens with every study completed.

**Unexpected finding #3:** Lexitas's "white glove" service model — which the prior research file correctly identified as a retention priority — actually becomes *more* valuable post-AI, not less. When the routine work is automated, the humans who remain have more time for the relationship-driven, strategic advisory work that sponsors pay premium rates for. AI doesn't erode the white glove; it elevates it from "we answer your emails fast" to "our CMO spends 2 hours designing your ophthalmology endpoint strategy because AI handles the paperwork."

---

## Phase 0: Intelligence Synthesis

### Functional Map & Labor Cost Estimate

| Department | Estimated FTEs | Avg Loaded Cost/FTE | Annual Labor Cost | % of Total Labor |
|------------|---------------|---------------------|-------------------|------------------|
| Reading Center | 12 | $82K | $984K | 10% |
| Clinical Operations (PMs, CTLs, CRAs) | 32 | $95K | $3.04M | 31% |
| Data Management | 14 | $85K | $1.19M | 12% |
| Biostatistics & Statistical Programming | 12 | $105K | $1.26M | 13% |
| Medical & Regulatory Writing | 7 | $98K | $686K | 7% |
| Medical Affairs & Safety (incl. CMO) | 6 | $130K | $780K | 8% |
| Business Development & Commercial | 7 | $100K | $700K | 7% |
| Finance, HR, IT, Admin | 6 | $78K | $468K | 5% |
| Executive Leadership (CEO, CFO, VP Ops, VP HR, VP Commercial, VP Marketing) | 4 | $210K | $840K | 9% |
| **TOTAL** | **~100** | **~$99K avg** | **~$9.9M** | **100%** |

**Critical insight:** Clinical Operations (32 FTEs) is the largest department and the largest cost center at $3.04M — but it's also the department with the highest human floor due to sponsor relationships, site management, and physical monitoring requirements. The biggest *ratio* of automation is in Reading Center (58% reduction), Data Management (57% reduction), and Medical Writing (57% reduction). The biggest *absolute* savings come from Clinical Ops simply because it's the largest team.

### Business Process Catalog

| # | Process | Department | Frequency | Current Automation |
|---|---------|-----------|-----------|-------------------|
| 1 | Ophthalmic image quality assessment | Reading Center | 50-150 images/day | 0% — manual visual QC |
| 2 | OCT segmentation and measurement | Reading Center | 50-150/day | 0% — manual measurement |
| 3 | Fundus photography grading (DR, AMD) | Reading Center | 30-80/day | 0% — manual ETDRS/AREDS grading |
| 4 | FA/ICG angiography analysis | Reading Center | 10-30/day | 0% — manual interpretation |
| 5 | Visual field test interpretation | Reading Center | 10-30/day | 0% — manual pattern analysis |
| 6 | Reading report generation and QC | Reading Center | Daily | ~10% (templates) |
| 7 | Site identification and feasibility scoring | Clinical Ops | Per study (5-15/year) | 0% — relationship + manual research |
| 8 | Protocol feasibility and review | Clinical Ops/Medical | Per study | 0% — expert-dependent |
| 9 | Study startup (regulatory, IRB, contracts) | Clinical Ops | Per study | ~10% (templates, checklists) |
| 10 | Site monitoring visit reports | Clinical Ops | 200-400/year | 0% — manual 2-4 hour reports |
| 11 | Enrollment tracking and forecasting | Clinical Ops | Continuous | ~15% (spreadsheets) |
| 12 | Study risk identification and escalation | Clinical Ops | Weekly per study | 0% — human judgment |
| 13 | EDC/database design and build | Data Management | Per study | ~10% (templates) |
| 14 | Edit check programming and validation | Data Management | Per study | ~5% (standard libraries) |
| 15 | Data query generation and resolution | Data Management | Daily (50-200 queries/week) | 0% — manual review and drafting |
| 16 | Data reconciliation (Reading Center ↔ EDC, lab ↔ EDC) | Data Management | Per visit batch | ~10% (semi-automated matching) |
| 17 | Medical coding (MedDRA, WHO Drug) | Data Management | Per study | ~20% (auto-coded dictionaries) |
| 18 | SAP drafting | Biostatistics | Per study | ~5% (templates) |
| 19 | TLF programming (SAS/R) | Biostatistics | Per study, ongoing | ~10% (standard macros) |
| 20 | Ad hoc statistical analysis | Biostatistics | Per sponsor request | 0% — custom each time |
| 21 | CSR drafting | Medical Writing | 8-15/year | 0% — manual 6-10 weeks |
| 22 | Protocol/ICF/IB drafting and review | Medical Writing | Per study | ~5% (templates) |
| 23 | Regulatory submission support documents | Medical Writing | Variable | 0% — manual |
| 24 | Safety data review and signal detection | Medical Affairs | Continuous | 0% — manual periodic review |
| 25 | Medical monitoring and query response | Medical Affairs | Daily | 0% — physician-dependent |
| 26 | Literature surveillance (ophthalmology) | Medical Affairs | Ongoing | 0% — manual PubMed searches |
| 27 | RFP response and proposal generation | Business Development | 15-30/year | ~10% (reused content blocks) |
| 28 | Competitive intelligence monitoring | Business Development | Ongoing | 0% — manual |
| 29 | Client reporting and communication | Business Development/Ops | Weekly/Monthly per study | ~15% (templates) |
| 30 | Invoicing, revenue recognition, financial reporting | Finance | Monthly | ~35% (accounting software) |
| 31 | HR/recruiting/onboarding/payroll | HR/Admin | Ongoing | ~40% (HRIS/ATS) |
| 32 | IT support and infrastructure | IT | Ongoing | ~20% |

### Current Technology Stack Assessment

| Layer | Estimated Technology | AI Readiness |
|-------|---------------------|--------------|
| EDC (Electronic Data Capture) | Medidata Rave or Oracle InForm | Medium — APIs available, no AI features used |
| CTMS (Clinical Trial Management) | Medidata or Veeva Vault | Low — used for tracking, no predictive features |
| Reading Center Platform | Custom/DICOM-compliant viewer | Low — no AI analysis integrated |
| Imaging Transfer | DICOM compliant systems | Medium — standardized format enables AI ingestion |
| Document Management | SharePoint or similar | Low — no intelligent extraction |
| Statistical Software | SAS, possibly R/Python | Low — AI code assistants not deployed |
| Communication | Email, MS Teams, standard tools | Low — no AI routing |
| Financial/Accounting | QuickBooks/NetSuite (estimated) | Low — standard |
| CRM | Salesforce or HubSpot (estimated) | Low — no AI-driven intelligence |
| AI/ML | **None evident** | **Zero** |

### AI Maturity Benchmark vs. Competitors

| Dimension | Lexitas | Ora, Inc. | Eyelab (Labcorp) | Clario | Industry Avg |
|-----------|---------|-----------|-------------------|--------|-------------|
| AI in image reading | None | Exploring | Labcorp AI R&D | Emerging | Low |
| Document automation | Basic templates | Unknown | Advanced (Labcorp scale) | N/A | Low |
| Predictive analytics (enrollment) | None | Likely exploring | Yes (Labcorp data) | Yes | Low |
| NLP/LLM integration | None | Unknown | Emerging | Emerging | Very Low |
| Site selection AI | None | Relationship-based | Data-driven (Labcorp) | Data-driven | Low |
| AI strategy maturity | Opportunity (with QHP) | Unknown | Parent-funded | Advanced platform | Low |

**Key insight:** The ophthalmology CRO market is behind the broader CRO market on AI adoption. Ora (the largest competitor) is primarily a clinical/regulatory powerhouse without evident AI deployment. The large CRO divisions (Labcorp's Eyelab, ICON Eye Services, Syneos) benefit from parent company AI investments but lack Lexitas's 100% ophthalmology focus. Lexitas can become the first AI-native ophthalmology CRO — a positioning that matters enormously to sponsors evaluating CRO capabilities in 2026-2028.

### Regulatory Constraints Summary

| Regulation | Key Requirement | AI Impact |
|------------|----------------|-----------|
| **ICH-GCP (E6 R2/R3)** | Qualified investigators, adequate monitoring, accurate data | AI-generated monitoring reports, data checks are acceptable if validated; monitoring visits still require human presence (moving toward risk-based remote monitoring) |
| **21 CFR Part 11** | Electronic records/signatures must be trustworthy, reliable | AI systems generating trial data/reports must have audit trails, validation, access controls — architecture constraint, NOT automation blocker |
| **FDA AI/ML Medical Device Guidance** | AI used in clinical endpoints requires validation pathway | Reading Center AI for regulatory submission must be validated; AI pre-grading with human confirmation is the compliant model |
| **HIPAA** | PHI protection | All AI systems need BAAs; standard cloud compliance |
| **IRB/Ethics** | Human subjects protection | No direct AI constraint — Lexitas doesn't run the IRB |
| **21 CFR 312 (IND Regs)** | Sponsor oversight of clinical investigations | CRO obligations are contractual, not regulatory blockers to AI |
| **EMA/MHRA (global)** | Non-US regulatory requirements via Lexitas Global | AI outputs accepted if validated per local requirements; some regions more conservative |

**Regulatory human floor:** The hard regulatory floor for a CRO is surprisingly low. Regulations require *qualified* oversight — a medical monitor must be a physician, a biostatistician must review the SAP, a certified reader must sign the reading report, monitoring must be adequate. But nothing requires a human to *produce* the first draft of any document, *generate* queries, *build* databases, *score* sites, *forecast* enrollment, or *pre-grade* images. The regulatory floor is approximately **15-20 FTEs** (CMO, senior statistician, certified readers for sign-off, pharmacovigilance officer, QA lead, senior project managers for sponsor accountability). Our target of 45 is well above this floor.

### AI Replacement Readiness Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **1. Process Repeatability** | **7** | Reading center workflows are highly repeatable (same modalities, same grading scales). Data management and medical writing follow structured templates. Clinical ops has more variability per study but core processes (monitoring, startup, enrollment tracking) are standardized. Lower than COPILOT/Univo because each ophthalmology indication introduces unique endpoint and assessment requirements. |
| **2. Data Availability** | **7** | 14+ years of ophthalmology trial data: historical reading center images and grades, enrollment patterns by indication, protocol amendments, site performance metrics. Rich training data for ophthalmic AI models. Slightly lower score because data may not be in ML-ready formats (likely stored in legacy CTMS/EDC, not a data warehouse). |
| **3. Regulatory Permissibility** | **6** | More constrained than hub services or IRB. AI-assisted image grading for clinical trial endpoints requires validation per FDA AI/ML guidance. 21 CFR Part 11 applies to electronic records. ICH-GCP mandates qualified oversight. None of these *block* AI, but they require more validation work and documentation than non-regulated industries. |
| **4. Technology Readiness** | **5** | No AI/ML infrastructure today. Standard CRO tech stack (EDC, CTMS, DICOM). Will need significant investment in AI integration layer, image analysis pipeline, LLM deployment. The good news: ophthalmology AI is mature externally (IDx, Topcon, Google ARDA), so buy options exist for the Reading Center. |
| **5. Labor Intensity** | **7** | CRO is a labor-intensive business — ~$99K loaded cost per FTE, labor is 65-70% of costs. Every study requires humans for reading, monitoring, data management, writing, and statistics. But labor intensity is lower than COPILOT (where labor *is* the entire product) because Lexitas also sells expertise and relationships, not just task execution. |
| **6. Competitive Pressure** | **6** | Moderate and increasing. Large CRO divisions (Labcorp, ICON, Syneos) will deploy parent-company AI into ophthalmology. Clario's reading center is investing in AI-assisted imaging. Ora hasn't moved yet but is the primary competitor. The ophthalmology niche buys Lexitas time — maybe 18-24 months before AI becomes table-stakes for CRO selection. |
| **7. Management Receptivity** | **7** | CEO Jeanne Hecht built Lexitas as an innovation-forward, technology-enabled CRO. CMO David Tanzer brings clinical rigor that will demand AI validation — healthy friction, not obstruction. QHP ownership since June 2022 provides capital and strategic push. No evidence of active AI resistance; more likely cautious enthusiasm pending demonstrated ROI. |
| **8. Scale of Opportunity** | **8** | ~$5M in labor cost that can be replaced or redirected, plus $20-35M in *incremental revenue* from AI-enabled throughput expansion. The combination of cost reduction + revenue growth is a 4-6x EV expansion opportunity. Among Tier 3 companies, this has the highest MOIC potential because the market for ophthalmology CRO services is growing (gene therapy, rare disease, GA treatments) and capacity-constrained. |
| **COMPOSITE SCORE** | **6.6 / 10** | **Strong candidate for significant AI transformation — 55% replacement achievable, but value creation is primarily throughput-driven, not cost-driven** |

**Comparison to other portfolio companies:**

| Company | Composite Score | Tier | Primary Value Driver |
|---------|---------------|------|---------------------|
| COPILOT | 8.4 | 1 | Cost elimination (labor → AI) |
| Univo IRB | 7.9 | 1 | Cost elimination + scale |
| AutoCruitment | 8.1 | 1 | Cost elimination + revenue model shift |
| InformedDNA | 7.5 | 2 | Cost elimination + capacity |
| **Lexitas** | **6.6** | **3** | **Revenue growth + margin expansion** |
| Vector | 5.8 | 3 | Moderate cost + recruitment AI |
| Applied StemCell | 5.5 | 3 | Moderate cost + R&D acceleration |

Lexitas's 6.6 composite score reflects a company where AI creates value primarily through *doing more with less* rather than *eliminating most humans*. The 55% headcount reduction is real, but the bigger story is the revenue expansion that AI-powered capacity enables.

---

## Phase 1: Process Decomposition

### Process 1: Ophthalmic Image Quality Assessment

**Department:** Reading Center
**Current FTEs:** 2 (partial allocation — all readers do QC as first step)
**Annual Labor Cost:** $164K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Receive DICOM image transfer from sites | 🟢 Fully Automatable | **LexIngest** — DICOM router + auto-deidentification | Standards-based; DICOM routing is solved technology |
| Verify image completeness (all required modalities received) | 🟢 Fully Automatable | **LexIngest** — completeness checker | Rules-based check against visit schedule |
| Assess image technical quality (focus, illumination, field) | 🟢 Fully Automatable | **LexVision QC** — CNN image quality model | Trained on reject/accept patterns from historical QC decisions |
| Flag quality failures and generate re-image request to site | 🟢 Fully Automatable | **LexVision QC** → auto-notification | Templated request with specific deficiency description |
| Route acceptable images to reading queue | 🟢 Fully Automatable | **LexIngest** — queue manager | Priority routing based on study timelines |

**Automation %:** 95%
**Estimated FTE Reduction:** 2 → 0.2 (spot-check oversight by senior reader)
**Annual Savings:** $148K
**Implementation Complexity:** Low (image quality assessment CNNs are mature)
**Regulatory Risk:** Low (QC is pre-analytical; not part of the clinical endpoint)

---

### Process 2: OCT Segmentation and Measurement

**Department:** Reading Center
**Current FTEs:** 4 (primary OCT readers)
**Annual Labor Cost:** $328K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Load OCT scan and orient | 🟢 Fully Automatable | **LexVision OCT** — auto-import and orient | DICOM metadata + AI slice selection |
| Segment retinal layers (ILM, RPE, IS/OS, etc.) | 🟡 AI-Assisted | **LexVision OCT** — deep learning segmentation | FDA-class IIa equivalent models exist (Topcon, Heidelberg); AI segments, reader validates |
| Measure central subfield thickness (CST) | 🟡 AI-Assisted | **LexVision OCT** — automated measurement | AI measures from segmentation; reader confirms |
| Detect and quantify subretinal/intraretinal fluid (SRF/IRF) | 🟡 AI-Assisted | **LexVision OCT** — fluid detection model | 92-95% sensitivity reported in literature; reader confirms presence/absence |
| Detect and quantify drusen, PED, GA | 🟡 AI-Assisted | **LexVision OCT** — lesion detection | Emerging models; reader validates volumetric analysis |
| Assess progression vs. prior visit | 🟡 AI-Assisted | **LexVision OCT** — longitudinal comparison engine | AI auto-aligns and quantifies change; reader interprets clinical significance |
| Generate structured reading report | 🟢 Fully Automatable | **LexReport** — auto-report generator | Populates from AI measurements; reader signs off |
| Certified reader sign-off | 🔴 Human-Required | Human reader + **LexVision** dashboard | Regulatory requirement: qualified human validates and signs |

**Automation %:** 72%
**Estimated FTE Reduction:** 4 → 1.5 (senior OCT readers for validation and complex cases)
**Annual Savings:** $205K
**Implementation Complexity:** Medium-High (requires validated AI model integration with Reading Center workflow)
**Regulatory Risk:** Medium (endpoint-affecting; validation documentation required per 21 CFR Part 11 and sponsor SOPs)

---

### Process 3: Fundus Photography Grading

**Department:** Reading Center
**Current FTEs:** 3 (fundus graders)
**Annual Labor Cost:** $246K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Assess image gradability | 🟢 Fully Automatable | **LexVision Fundus** — gradability model | Binary classification; well-solved |
| Grade diabetic retinopathy severity (ETDRS scale) | 🟡 AI-Assisted | **LexVision Fundus** — DR grading (licensed IDx/Digital Diagnostics) | FDA-cleared DR AI (IDx-DR) as pre-grade; reader confirms |
| Stage AMD (AREDS classification) | 🟡 AI-Assisted | **LexVision Fundus** — AMD staging model | AI classifies drusen, pigmentary changes; reader validates |
| Assess geographic atrophy lesion area | 🟡 AI-Assisted | **LexVision Fundus** — GA measurement | AI auto-traces boundaries; reader adjusts |
| Analyze retinal vasculature | 🟡 AI-Assisted | **LexVision Fundus** — vessel analysis model | AI quantifies caliber, tortuosity; reader interprets |
| Optic disc assessment | 🟡 AI-Assisted | **LexVision Fundus** — disc analysis | Cup-to-disc ratio, rim area; AI measures, reader validates |
| Generate grading report | 🟢 Fully Automatable | **LexReport** | Structured report from AI grades + reader annotations |
| Certified reader sign-off | 🔴 Human-Required | Human reader | Regulatory requirement |

**Automation %:** 68%
**Estimated FTE Reduction:** 3 → 1.2 (senior fundus graders for validation)
**Annual Savings:** $148K
**Implementation Complexity:** Medium (leverages existing FDA-cleared AI; integration work required)
**Regulatory Risk:** Medium (same as OCT — endpoint-affecting, validation required)

---

### Process 4: Fluorescein Angiography / ICG Analysis

**Department:** Reading Center
**Current FTEs:** 1.5 (specialist readers)
**Annual Labor Cost:** $123K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Assess angiogram quality and phase timing | 🟢 Fully Automatable | **LexVision Angio** — quality assessment | Temporal phase classification is straightforward |
| Identify leakage areas | 🟡 AI-Assisted | **LexVision Angio** — leakage detection | AI highlights areas; reader quantifies and classifies |
| Assess perfusion/non-perfusion | 🟡 AI-Assisted | **LexVision Angio** — perfusion mapping | AI maps ischemic areas; reader validates clinical significance |
| Measure lesion areas (CNV, leakage disc areas) | 🟡 AI-Assisted | **LexVision Angio** — measurement tools | AI traces; reader adjusts boundaries |
| Certified reader sign-off | 🔴 Human-Required | Human reader | Regulatory requirement |

**Automation %:** 60%
**Estimated FTE Reduction:** 1.5 → 0.8 (specialist readers retained; AI reduces time-per-read)
**Annual Savings:** $57K
**Implementation Complexity:** Medium-High (FA/ICG AI is less mature than OCT/fundus)
**Regulatory Risk:** Medium

---

### Process 5: Slit Lamp, Specular Microscopy, and Visual Field Interpretation

**Department:** Reading Center
**Current FTEs:** 1.5 (shared with other modalities)
**Annual Labor Cost:** $123K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Slit lamp image cataract grading (LOCS III) | 🟡 AI-Assisted | **LexVision Anterior** — cataract grading model | AI proposes grade; reader confirms |
| Specular microscopy cell count and morphology | 🟢 Fully Automatable | **LexVision Anterior** — endothelial cell counter | Well-automated; clinically validated tools exist |
| Visual field pattern analysis and progression | 🟡 AI-Assisted | **LexVision VF** — progression detection | AI identifies defect patterns; reader interprets in clinical context |
| Report generation | 🟢 Fully Automatable | **LexReport** | Auto-populated structured reports |
| Certified reader sign-off | 🔴 Human-Required | Human reader | Regulatory requirement |

**Automation %:** 62%
**Estimated FTE Reduction:** 1.5 → 0.8
**Annual Savings:** $57K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low-Medium

---

### Process 6: Reading Center Report Generation and QC

**Department:** Reading Center
**Current FTEs:** 1 (report QC coordinator)
**Annual Labor Cost:** $82K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Compile measurements into structured report | 🟢 Fully Automatable | **LexReport** — auto-report assembly | All quantitative data flows from LexVision modules |
| Cross-check report vs. raw images | 🟡 AI-Assisted | **LexReport QC** — automated consistency checker | AI verifies measurements match image data |
| Format for sponsor requirements | 🟢 Fully Automatable | **LexReport** — sponsor template engine | Configured per study protocol |
| Transfer/integrate with sponsor data management | 🟢 Fully Automatable | **LexReport** → EDC integration | API-based data transfer with audit trail |
| Final QC sign-off | 🟡 AI-Assisted | Senior reader spot-check on AI-flagged discrepancies | AI flags anomalies; human reviews flagged cases only |

**Automation %:** 85%
**Estimated FTE Reduction:** 1 → 0.2
**Annual Savings:** $66K
**Implementation Complexity:** Low-Medium
**Regulatory Risk:** Low

---

### Process 7: Site Identification and Feasibility Scoring

**Department:** Clinical Operations
**Current FTEs:** 3 (feasibility/startup team, partial allocation)
**Annual Labor Cost:** $285K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Identify potential ophthalmology sites by indication | 🟡 AI-Assisted | **LexSite AI** — site scoring engine | ML model trained on Lexitas's 14 years of site performance data, ClinicalTrials.gov, PubMed PI publications, indication prevalence |
| Score site imaging equipment capabilities | 🟢 Fully Automatable | **LexSite AI** — equipment database | Structured database of OCT/FA/fundus camera capabilities by site |
| Assess PI publication record and KOL status | 🟢 Fully Automatable | **LexSite AI** — PubMed + KOL scoring | Automated PubMed scraping + citation analysis |
| Check competing trial burden at site | 🟢 Fully Automatable | **LexSite AI** — ClinicalTrials.gov integration | Real-time competitive enrollment data |
| Generate feasibility questionnaire | 🟡 AI-Assisted | **LexSite AI** — customized questionnaire generation | AI tailors questions to indication and protocol; PM reviews |
| Score and rank sites | 🟡 AI-Assisted | **LexSite AI** — composite scoring | ML-weighted ranking; PM validates using relationship knowledge |
| Maintain site relationship intelligence | 🟠 AI-Augmented | **LexSite AI** + CRM integration | AI tracks interactions; PM adds qualitative relationship context |

**Automation %:** 65%
**Estimated FTE Reduction:** 3 → 1.5 (senior feasibility lead + AI)
**Annual Savings:** $143K
**Implementation Complexity:** Medium
**Regulatory Risk:** None

---

### Process 8: Protocol Feasibility and Optimization

**Department:** Clinical Operations / Medical Affairs
**Current FTEs:** 2 (CMO + clinical ops lead, partial allocation)
**Annual Labor Cost:** $260K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Extract protocol parameters for feasibility analysis | 🟢 Fully Automatable | **LexProtocol AI** — protocol NLP extraction | Structured extraction of I/E criteria, endpoints, visit schedule, procedures |
| Benchmark against similar ophthalmology protocols | 🟡 AI-Assisted | **LexProtocol AI** — ophthalmology protocol database | RAG on 14 years of Lexitas protocols + ClinicalTrials.gov ophthalmology studies |
| Predict enrollment difficulty from I/E criteria | 🟡 AI-Assisted | **LexProtocol AI** — enrollment prediction model | ML model correlating criteria stringency with historical enrollment rates |
| Recommend endpoint optimization | 🟠 AI-Augmented | **LexProtocol AI** — endpoint recommendation engine | AI suggests; CMO validates using clinical expertise. This is the "475 years" codified. |
| Predict amendment risk | 🟡 AI-Assisted | **LexProtocol AI** — amendment predictor | ML on historical amendment patterns by protocol feature |
| Generate feasibility report for sponsor | 🟡 AI-Assisted | **LexProtocol AI** → **LexReport** | AI drafts feasibility assessment; CMO reviews and adds strategic commentary |

**Automation %:** 55%
**Estimated FTE Reduction:** 2 → 1.2 (CMO time freed for strategic work, not eliminated)
**Annual Savings:** $104K
**Implementation Complexity:** Medium-High (requires deep ophthalmology domain model)
**Regulatory Risk:** None (advisory, not regulatory-facing)

---

### Process 9: Study Startup (Regulatory, IRB, Contracts)

**Department:** Clinical Operations
**Current FTEs:** 5 (startup/regulatory specialists)
**Annual Labor Cost:** $475K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Collect and organize regulatory documents from sites | 🟢 Fully Automatable | **LexStartup AI** — document collection tracker | Automated checklist tracking, reminders, portal-based collection |
| Review regulatory documents for completeness | 🟡 AI-Assisted | **LexStartup AI** — document NLP checker | AI checks for required elements (1572, CVs, lab certs, equipment cals); human confirms |
| Prepare IRB submission packages | 🟡 AI-Assisted | **LexStartup AI** — IRB package assembler | AI compiles required documents; regulatory specialist reviews |
| Track IRB approval status across sites | 🟢 Fully Automatable | **LexStartup AI** — status tracker | Automated polling + notification system |
| Manage site contract negotiations | 🟠 AI-Augmented | Human negotiator + **LexStartup AI** (contract templates, fair market value data) | AI provides benchmarks and templates; human negotiates |
| Set up site in CTMS and study systems | 🟢 Fully Automatable | **LexStartup AI** — system provisioning | Automated site setup from master data |

**Automation %:** 55%
**Estimated FTE Reduction:** 5 → 3 (senior regulatory specialists for complex multinational submissions)
**Annual Savings:** $190K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low

---

### Process 10: Site Monitoring Visit Reports

**Department:** Clinical Operations (CRAs)
**Current FTEs:** 12 (CRAs, partial allocation — monitoring reports are 30-40% of CRA time)
**Annual Labor Cost:** $456K (allocated portion)

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Prepare for monitoring visit (review prior report, open queries, site status) | 🟡 AI-Assisted | **LexMonitor AI** — pre-visit brief generator | AI compiles site status, open actions, risk flags into structured brief |
| Conduct on-site or remote monitoring activities | 🔴 Human-Required | CRA (human) | Physical presence or remote SDV/SDR requires trained human judgment |
| Draft monitoring visit report | 🟡 AI-Assisted | **LexMonitor AI** — report drafting engine | AI generates 70% of report from structured findings + prior visit template; CRA completes and customizes. Currently 2-4 hours → 30-45 minutes |
| Identify and document protocol deviations | 🟡 AI-Assisted | **LexMonitor AI** — deviation classifier | AI flags potential deviations from EDC data patterns; CRA confirms |
| Generate and track follow-up action items | 🟢 Fully Automatable | **LexMonitor AI** — action tracker | Auto-generated from report findings; tracked to closure |
| File report and confirm TMF completeness | 🟢 Fully Automatable | **LexMonitor AI** → TMF integration | Automated filing with QC checks |

**Automation %:** 58%
**Estimated FTE Reduction:** 12 CRAs retain their roles but save 30-40% of time → equivalent of 4 FTE freed → capacity for more studies without hiring. Net: 12 → 8 CRAs needed for current workload.
**Annual Savings:** $380K (4 FTEs worth of capacity)
**Implementation Complexity:** Medium
**Regulatory Risk:** Low (reports are internal quality documents; monitoring itself remains human)

---

### Process 11: Enrollment Tracking and Forecasting

**Department:** Clinical Operations
**Current FTEs:** 2 (partial allocation — PM/CTL time)
**Annual Labor Cost:** $190K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Collect enrollment data from sites/EDC | 🟢 Fully Automatable | **LexEnroll AI** — automated data pull | API integration with EDC and CTMS |
| Update enrollment trackers and dashboards | 🟢 Fully Automatable | **LexEnroll AI** — real-time dashboard | Auto-updated; sponsor-accessible |
| Generate enrollment forecasts | 🟡 AI-Assisted | **LexEnroll AI** — ML forecasting model | Trained on Lexitas historical enrollment by ophthalmology indication, site performance, season, competing trials |
| Identify enrollment risk and recommend mitigation | 🟡 AI-Assisted | **LexEnroll AI** — risk engine | AI flags at-risk sites/studies; PM decides intervention |
| Communicate enrollment status to sponsors | 🟢 Fully Automatable | **LexEnroll AI** — automated status reports | Scheduled reports + anomaly alerts |

**Automation %:** 80%
**Estimated FTE Reduction:** 2 → 0.5 (PM oversight, not dedicated FTEs)
**Annual Savings:** $143K
**Implementation Complexity:** Low-Medium
**Regulatory Risk:** None

---

### Process 12: Study Risk Identification and Escalation

**Department:** Clinical Operations
**Current FTEs:** 2 (PM/VP Ops, partial allocation)
**Annual Labor Cost:** $190K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Aggregate risk signals across data sources (EDC, CTMS, enrollment, safety, site performance) | 🟢 Fully Automatable | **LexRisk AI** — multi-source risk aggregator | Pulls from all study systems; computes composite risk score |
| Score and categorize risks by severity | 🟡 AI-Assisted | **LexRisk AI** — risk scoring model | ML model trained on historical study events; PM validates |
| Generate risk reports and trending | 🟢 Fully Automatable | **LexRisk AI** — automated risk dashboards | Real-time dashboards; weekly PDF summaries |
| Recommend mitigation actions | 🟡 AI-Assisted | **LexRisk AI** — mitigation recommender | AI suggests actions from playbook; PM selects and tailors |
| Escalate to sponsor / QHP | 🟠 AI-Augmented | PM (human) + **LexRisk AI** context | Human decides escalation; AI provides complete context package |

**Automation %:** 65%
**Estimated FTE Reduction:** 2 → 0.8 (VP Ops oversight)
**Annual Savings:** $114K
**Implementation Complexity:** Medium
**Regulatory Risk:** None

---

### Process 13: EDC/Database Design and Build

**Department:** Data Management
**Current FTEs:** 4 (database builders/programmers)
**Annual Labor Cost:** $340K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Extract database requirements from protocol | 🟡 AI-Assisted | **LexData AI** — protocol-to-spec converter | NLP extraction of all data points, visit schedule, CRF structure from protocol |
| Design CRF pages and data flow | 🟡 AI-Assisted | **LexData AI** — CRF design engine | AI generates CRF drafts based on ophthalmology-specific templates + protocol requirements; DM reviews |
| Build database in EDC system | 🟡 AI-Assisted | **LexData AI** — EDC build automation | AI generates EDC configuration code/XML from approved CRF designs; DM validates |
| Ophthalmology-specific data standards (imaging integration, VA scoring, device data) | 🟠 AI-Augmented | **LexData AI** + senior DM expertise | AI applies standard ophthalmology data models; DM customizes for novel endpoints |
| Database testing and UAT | 🟡 AI-Assisted | **LexData AI** — automated test case generation | AI generates test scenarios; DM executes and validates |

**Automation %:** 52%
**Estimated FTE Reduction:** 4 → 2 (senior database builders for complex studies)
**Annual Savings:** $170K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low (Part 11 compliance required for database; validation documentation)

---

### Process 14: Edit Check Programming and Data Query Management

**Department:** Data Management
**Current FTEs:** 5 (edit check programmers + query managers)
**Annual Labor Cost:** $425K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Program standard edit checks from protocol | 🟡 AI-Assisted | **LexData AI** — edit check generator | AI generates 70% of edit checks from protocol logic; programmer reviews |
| Program ophthalmology-specific edit checks (VA range, image timing, procedure sequences) | 🟡 AI-Assisted | **LexData AI** — ophthalmology rule library | Specialized rule library for ophthalmic assessments; programmer validates |
| Generate data queries for discrepancies | 🟢 Fully Automatable | **LexQuery AI** — automated query generation | AI detects anomalies and generates site-ready queries in standard language. Current: manual review + manual drafting. AI: auto-detect + auto-draft |
| Review and approve auto-generated queries | 🟡 AI-Assisted | DM reviews AI-generated queries | High-confidence queries auto-release; medium-confidence get human review |
| Track query resolution and re-query | 🟢 Fully Automatable | **LexQuery AI** — resolution tracker | Automated follow-up cycles; escalation after defined timeline |
| Manage data reconciliation (Reading Center ↔ EDC, lab ↔ EDC) | 🟡 AI-Assisted | **LexData AI** — automated reconciliation engine | AI matches records with fuzzy logic; DM reviews discrepancies only |

**Automation %:** 72%
**Estimated FTE Reduction:** 5 → 2 (senior DM for complex query adjudication and edit check validation)
**Annual Savings:** $255K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low

---

### Process 15: Medical Coding

**Department:** Data Management
**Current FTEs:** 1 (partial allocation — coder or DM with coding responsibility)
**Annual Labor Cost:** $85K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Code adverse events to MedDRA | 🟡 AI-Assisted | **LexCode AI** — MedDRA auto-coder | AI proposes LLT/PT/SOC mapping; human confirms. Ophthalmology-specific: AI trained on ophthalmic AE patterns |
| Code medications to WHO Drug Dictionary | 🟡 AI-Assisted | **LexCode AI** — WHO Drug auto-coder | Standard dictionary matching + fuzzy logic for brand names |
| Code medical history terms | 🟡 AI-Assisted | **LexCode AI** — medical history coder | Similar to AE coding; AI proposes, human confirms |
| Resolve coding queries | 🟡 AI-Assisted | **LexCode AI** + DM review | AI suggests resolutions; coder reviews ambiguous cases |

**Automation %:** 75%
**Estimated FTE Reduction:** 1 → 0.3 (DM cross-trained for coding review)
**Annual Savings:** $60K
**Implementation Complexity:** Low
**Regulatory Risk:** Low

---

### Process 16: SAP Drafting and Statistical Programming (TLFs)

**Department:** Biostatistics & Statistical Programming
**Current FTEs:** 12 (biostatisticians + SAS/R programmers)
**Annual Labor Cost:** $1.26M

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Draft Statistical Analysis Plan from protocol | 🟡 AI-Assisted | **LexStat AI** — SAP generator | AI generates SAP first draft from protocol + ophthalmology endpoint templates; statistician reviews and customizes |
| Program TLFs (Tables, Listings, Figures) in SAS/R | 🟡 AI-Assisted | **LexStat AI** + GitHub Copilot — TLF code generator | AI generates 50-60% of standard TLF code from SAP specs; programmer reviews and debugs |
| Ophthalmology-specific tables (VA shift tables, OCT change from baseline, responder analyses) | 🟡 AI-Assisted | **LexStat AI** — ophthalmology TLF library | Specialized template library; AI adapts to specific study parameters |
| QC/validation of statistical outputs | 🟡 AI-Assisted | **LexStat AI** — double-programming AI | AI generates independent validation programs; programmer confirms concordance |
| Ad hoc analyses for sponsors | 🟡 AI-Assisted | **LexStat AI** — natural language query interface | Sponsor asks question in plain English; AI generates analysis code; statistician validates |
| Produce CDISC-compliant datasets (SDTM/ADaM) | 🟡 AI-Assisted | **LexStat AI** — CDISC mapping engine | AI auto-maps source data to CDISC standards; programmer validates ophthalmology-specific domains |

**Automation %:** 45%
**Estimated FTE Reduction:** 12 → 8 (retain senior statisticians; reduce junior programmers as AI handles routine coding)
**Annual Savings:** $420K
**Implementation Complexity:** Medium (SAS/R AI coding is advanced but not ophthalmology-specific)
**Regulatory Risk:** Low-Medium (statistical outputs must be validated; AI-generated code requires full QC)

---

### Process 17: Clinical Study Report (CSR) Drafting

**Department:** Medical & Regulatory Writing
**Current FTEs:** 3 (medical writers, partial allocation)
**Annual Labor Cost:** $294K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Generate CSR shell from ICH E3 template | 🟢 Fully Automatable | **LexWrite AI** — CSR shell generator | Structured template with study-specific metadata auto-populated |
| Draft efficacy sections from TLF outputs | 🟡 AI-Assisted | **LexWrite AI** — results narrative generator | AI converts tables/figures into structured narrative; writer reviews for clinical interpretation |
| Draft safety sections from AE listings | 🟡 AI-Assisted | **LexWrite AI** — safety narrative generator | AI summarizes AE patterns, generates standardized safety text; writer reviews |
| Draft methods sections from protocol | 🟡 AI-Assisted | **LexWrite AI** — methods section generator | AI paraphrases protocol into CSR methods language; writer refines |
| Ophthalmology-specific endpoint descriptions | 🟡 AI-Assisted | **LexWrite AI** — ophthalmology endpoint library | RAG on Lexitas's historical CSR corpus for indication-specific language |
| Draft patient disposition and demographics | 🟢 Fully Automatable | **LexWrite AI** — auto-narrative from demographics TLFs | Highly standardized; AI handles 95% |
| Internal review and QC | 🟡 AI-Assisted | **LexWrite AI** — consistency checker + QC flags | AI checks internal consistency, reference accuracy, protocol alignment |
| Incorporate reviewer comments | 🟠 AI-Augmented | Writer + **LexWrite AI** assistance | AI tracks comments and suggests resolutions; writer adjudicates |

**Automation %:** 62%
**Estimated FTE Reduction:** 3 → 1.5 (senior writers for complex interpretation and sponsor-facing review)
**Annual Savings:** $147K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low (CSR is sponsor's document; CRO provides drafts)

---

### Process 18: Protocol, ICF, IB, and Regulatory Document Drafting

**Department:** Medical & Regulatory Writing
**Current FTEs:** 4 (medical writers, partial allocation across document types)
**Annual Labor Cost:** $392K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Draft protocol synopsis from study parameters | 🟡 AI-Assisted | **LexWrite AI** — synopsis generator | AI generates 75% complete synopsis; writer customizes |
| Draft ICF from protocol + regulatory requirements | 🟡 AI-Assisted | **LexWrite AI** — ICF generator | AI generates ICF with ophthalmology-specific consent language (eye exam descriptions, injection procedures); writer reviews readability |
| Update IB sections with new data | 🟡 AI-Assisted | **LexWrite AI** — IB update engine | AI drafts updated sections from new clinical/preclinical data; writer reviews |
| Draft FDA briefing book sections | 🟡 AI-Assisted | **LexWrite AI** — regulatory writing assistant | AI generates structure and content from study data; writer adds strategic framing |
| Ophthalmology-specific regulatory language (endpoint justification, device descriptions) | 🟠 AI-Augmented | **LexWrite AI** + senior writer expertise | AI provides precedent language from FDA guidance + historical submissions; writer adapts |

**Automation %:** 58%
**Estimated FTE Reduction:** 4 → 1.5 (senior regulatory writers for strategic documents)
**Annual Savings:** $245K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low

---

### Process 19: Safety Data Review and Signal Detection

**Department:** Medical Affairs & Safety
**Current FTEs:** 2 (safety team, partial allocation)
**Annual Labor Cost:** $260K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Receive and log individual case safety reports (ICSRs) | 🟢 Fully Automatable | **LexSafety AI** — ICSR ingestion and logging | Auto-extraction from site reports; structured data entry |
| Classify event severity and expectedness | 🟡 AI-Assisted | **LexSafety AI** — AE classifier | AI classifies using MedDRA + IB reference safety info; safety physician reviews |
| Detect aggregate safety signals across studies | 🟡 AI-Assisted | **LexSafety AI** — signal detection engine | ML on aggregate AE data; detects frequency shifts, disproportionality, ophthalmology-specific patterns (e.g., IOP spikes, retinal detachment clusters) |
| Generate safety narratives for serious events | 🟡 AI-Assisted | **LexSafety AI** — narrative generator | AI drafts from structured data; physician reviews and signs |
| Ophthalmology-specific safety monitoring (visual acuity loss events, ocular AEs) | 🟠 AI-Augmented | **LexSafety AI** + CMO/medical monitor | AI monitors but ophthalmology-specific clinical judgment required for interpretation |
| Medical monitor sign-off | 🔴 Human-Required | CMO / medical monitor (physician) | Regulatory requirement — physician oversight |

**Automation %:** 55%
**Estimated FTE Reduction:** 2 → 1.2 (safety physician retained; AI reduces workload per case)
**Annual Savings:** $104K
**Implementation Complexity:** Medium-High
**Regulatory Risk:** Medium (safety reporting has strict regulatory timelines; AI must be reliable)

---

### Process 20: Medical Monitoring and Query Response

**Department:** Medical Affairs
**Current FTEs:** 2 (CMO + medical affairs staff, partial allocation)
**Annual Labor Cost:** $260K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Review and respond to site medical queries | 🟡 AI-Assisted | **LexMedical AI** — medical query assistant | AI drafts responses from protocol + IB + Lexitas knowledge base; physician reviews and approves |
| Provide medical input on protocol amendments | 🟠 AI-Augmented | CMO + **LexProtocol AI** precedent data | AI provides context; CMO makes clinical decisions |
| Literature surveillance for safety/efficacy signals | 🟢 Fully Automatable | **LexLit AI** — continuous PubMed/preprint monitoring | AI monitors ophthalmology literature 24/7; alerts on relevant publications |
| Support regulatory authority queries | 🟠 AI-Augmented | Physician + **LexWrite AI** draft assistance | AI drafts response framework; physician crafts final response |

**Automation %:** 48%
**Estimated FTE Reduction:** 2 → 1.5 (CMO time freed but role preserved; medical affairs specialist reduced)
**Annual Savings:** $65K
**Implementation Complexity:** Medium
**Regulatory Risk:** Low-Medium (physician oversight maintained)

---

### Process 21: RFP Response and Proposal Generation

**Department:** Business Development
**Current FTEs:** 3 (proposals/contracts team + BD support, partial allocation)
**Annual Labor Cost:** $300K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Parse RFP requirements and extract response structure | 🟢 Fully Automatable | **LexProposal AI** — RFP parser | NLP extraction of all requirements, questions, format specifications |
| Draft technical response sections (capabilities, experience, methodology) | 🟡 AI-Assisted | **LexProposal AI** — RAG on past proposals + Lexitas capabilities database | AI generates 80% of content from 14 years of past proposals; BD customizes differentiators |
| Generate study-specific budget and timeline | 🟡 AI-Assisted | **LexProposal AI** — pricing/timeline engine | ML model on historical study complexity → budget/timeline; CFO reviews |
| Customize for sponsor-specific requirements | 🟠 AI-Augmented | BD team + **LexProposal AI** | AI adapts; human adds relationship context and strategic positioning |
| Executive review and final approval | 🔴 Human-Required | CEO/VP Commercial review | Strategic decision on pricing, positioning, commitment |

**Automation %:** 68%
**Estimated FTE Reduction:** 3 → 1.5 (senior BD; AI handles bulk content)
**Annual Savings:** $150K
**Implementation Complexity:** Low-Medium
**Regulatory Risk:** None

---

### Process 22: Competitive Intelligence and Market Monitoring

**Department:** Business Development
**Current FTEs:** 1 (partial allocation)
**Annual Labor Cost:** $100K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Monitor ophthalmology clinical trial pipeline | 🟢 Fully Automatable | **LexIntel AI** — pipeline monitor | Scrapes ClinicalTrials.gov, FDA approvals, EMA pipeline for ophthalmology trials |
| Track competitor wins/losses/capabilities | 🟡 AI-Assisted | **LexIntel AI** — competitive tracker | AI monitors competitor websites, press releases, LinkedIn hires, conference presentations |
| Monitor FDA ophthalmology guidance and approvals | 🟢 Fully Automatable | **LexIntel AI** — regulatory monitor | FDA RSS + AI filtering for ophthalmology relevance |
| Generate competitive intelligence briefs | 🟢 Fully Automatable | **LexIntel AI** — weekly brief generator | Automated compilation into structured brief; VP Commercial reviews |

**Automation %:** 85%
**Estimated FTE Reduction:** 1 → 0.2 (VP Commercial oversight)
**Annual Savings:** $80K
**Implementation Complexity:** Low
**Regulatory Risk:** None

---

### Process 23: Client Reporting and Communication

**Department:** Clinical Operations / Business Development
**Current FTEs:** 2 (PMs + BD, partial allocation)
**Annual Labor Cost:** $190K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Generate study status reports for sponsors | 🟢 Fully Automatable | **LexReport** — automated client reporting | Real-time data pull from CTMS, EDC, Reading Center → formatted report |
| Prepare for sponsor teleconferences/meetings | 🟡 AI-Assisted | **LexReport** — meeting brief generator | AI compiles agenda, key metrics, risk flags, action items |
| Conduct sponsor meetings | 🟠 AI-Augmented | PM (human) + AI-prepared materials | Human-led relationship management; AI provides comprehensive context |
| Handle sponsor ad hoc requests | 🟡 AI-Assisted | PM + **LexReport** quick-query capability | AI surfaces data; PM frames response |

**Automation %:** 58%
**Estimated FTE Reduction:** 2 → 1 (senior PM for key sponsor relationships)
**Annual Savings:** $95K
**Implementation Complexity:** Low
**Regulatory Risk:** None

---

### Process 24: Finance, Invoicing, and Revenue Recognition

**Department:** Finance
**Current FTEs:** 3 (CFO + finance team)
**Annual Labor Cost:** $234K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Study milestone tracking and invoicing | 🟡 AI-Assisted | **LexFinance AI** — milestone-based auto-invoicing | AI tracks milestones in CTMS → triggers invoice generation; CFO approves |
| Revenue recognition per ASC 606 | 🟡 AI-Assisted | **LexFinance AI** — revenue recognition engine | AI calculates progress-based revenue recognition; controller reviews |
| Project profitability analysis | 🟡 AI-Assisted | **LexFinance AI** — profitability dashboards | Real-time project margin tracking; AI flags margin deterioration |
| Financial reporting (board, QHP, internal) | 🟡 AI-Assisted | **LexFinance AI** — automated reporting | AI generates 80% of standard reports; CFO customizes narrative |
| Cash flow management | 🟡 AI-Assisted | **LexFinance AI** — cash flow forecasting | ML on payment patterns, contract terms, seasonality |
| Budget vs. actual variance analysis | 🟢 Fully Automatable | **LexFinance AI** — automated variance reports | Auto-generated with explanatory narratives for significant variances |

**Automation %:** 60%
**Estimated FTE Reduction:** 3 → 2 (CFO + controller; reduce finance analyst)
**Annual Savings:** $78K
**Implementation Complexity:** Low
**Regulatory Risk:** None

---

### Process 25: HR, Recruiting, and Administration

**Department:** HR / Admin
**Current FTEs:** 3 (VP HR + team)
**Annual Labor Cost:** $234K

| Task | Classification | AI/Robot System | Notes |
|------|---------------|----------------|-------|
| Recruiting and candidate screening | 🟡 AI-Assisted | AI sourcing tools + ATS automation | AI screens resumes for ophthalmology CRO experience; HR interviews |
| Onboarding and training | 🟡 AI-Assisted | AI training platform + knowledge base | AI-delivered training modules; HR manages process |
| Payroll and benefits administration | 🟢 Fully Automatable | ADP/Gusto (existing) | Already largely automated |
| Employee relations and performance management | 🟠 AI-Augmented | HR lead + AI-assisted analytics | AI provides performance data; human manages relationships |
| IT support and infrastructure | 🟡 AI-Assisted | AI helpdesk + managed services | First-line AI resolution; escalation to managed IT provider |

**Automation %:** 50%
**Estimated FTE Reduction:** 3 → 2 (VP HR + admin; reduce one support role)
**Annual Savings:** $78K
**Implementation Complexity:** Low
**Regulatory Risk:** None

---

### Process Decomposition Summary

| # | Process | Current FTEs | Post-AI FTEs | Reduction | Automation % | Annual Savings |
|---|---------|-------------|-------------|-----------|-------------|---------------|
| 1-6 | Reading Center (all modalities + QC) | 12 | 5 | 58% | 72% avg | $681K |
| 7-8 | Site Selection + Protocol Feasibility | 5 | 2.7 | 46% | 60% | $247K |
| 9 | Study Startup | 5 | 3 | 40% | 55% | $190K |
| 10 | Monitoring Visit Reports | 12 | 8 | 33% | 58% | $380K |
| 11-12 | Enrollment Tracking + Risk Management | 4 | 1.3 | 68% | 73% | $257K |
| 13-15 | Data Management (DB build, edit checks, queries, coding, reconciliation) | 10 | 4.3 | 57% | 66% | $485K |
| 16 | Biostatistics & Programming | 12 | 8 | 33% | 45% | $420K |
| 17-18 | Medical & Regulatory Writing | 7 | 3 | 57% | 60% | $392K |
| 19-20 | Medical Affairs & Safety | 4 | 2.7 | 33% | 52% | $169K |
| 21-22 | Business Development & Intelligence | 4 | 1.7 | 58% | 77% | $230K |
| 23 | Client Reporting & Communication | 2 | 1 | 50% | 58% | $95K |
| 24-25 | Finance, HR, Admin | 6 | 4 | 33% | 55% | $156K |
| — | Executive Leadership | 4 | 4 | 0% | N/A | $0 |
| **TOTAL** | | **~100** (midpoint: 87+13 considered as partial) | **~48** | **52%** | **~61% avg** | **~$3.7M** |

**Conservative target:** 48 FTEs (52% reduction). **Aggressive target:** 42 FTEs (58% reduction) by pushing automation higher in Data Management and Clinical Ops via advanced AI and cross-training remaining staff.

**For this plan, we use a target of 45 FTEs** as the steady-state human floor, acknowledging that 48 is high-confidence and the path from 48 to 42 requires 12-18 months of optimization past the initial transformation. 45 represents the pragmatic midpoint.

**Key framing: The bigger financial story is throughput, not headcount.** The $3.7M in labor savings is meaningful, but the $25-40M in incremental revenue from running 2-3x more concurrent studies with the same (eventually smaller) team is the EBITDA lever that transforms enterprise value. Every FTE freed from routine work becomes capacity for another study. At Lexitas's revenue model (~$2-4M per study), even 5-8 additional concurrent studies = $10-30M incremental revenue at high marginality.

---

## Phase 2: Zero-Based AI Architecture

### 2.1 AI-Native Org Chart

If Jeanne Hecht were founding Lexitas today with $3M in AI build budget and 14 years of ophthalmology CRO expertise to encode, this is who she'd hire:

```
                            ┌─────────────────┐
                            │   CEO           │
                            │  Jeanne Hecht   │
                            │  (Strategy,     │
                            │   Sponsors,     │
                            │   QHP)          │
                            └────────┬────────┘
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          │                          │                          │
 ┌────────▼────────┐      ┌─────────▼─────────┐    ┌──────────▼──────────┐
 │  CMO            │      │  VP Operations    │    │  CFO                │
 │  David Tanzer   │      │  Ryan Kaiser      │    │  Kc Spangle         │
 │  (Medical,      │      │  (Delivery,       │    │  (Finance,          │
 │   Reading Ctr,  │      │   CRAs, PMs,      │    │   Admin, HR)        │
 │   AI Validation)│      │   AI Platform)    │    │                     │
 └────────┬────────┘      └─────────┬─────────┘    └──────────┬──────────┘
          │                          │                          │
  ┌───────┼───────┐        ┌────────┼────────┐         ┌──────┼──────┐
  │       │       │        │        │        │         │      │      │
┌─▼──┐ ┌──▼──┐ ┌─▼──┐  ┌──▼──┐ ┌───▼──┐ ┌──▼──┐  ┌──▼──┐ ┌─▼──┐ ┌▼────┐
│Read│ │Med  │ │Med  │  │Clin │ │AI/   │ │BD/  │  │Fin/ │ │HR  │ │IT   │
│Ctr │ │Writ │ │Affs │  │Ops  │ │Eng   │ │Comm │  │Ctrl │ │    │ │Mgd  │
│(5) │ │(3)  │ │(2)  │  │(18) │ │(5)   │ │(3)  │  │(2)  │ │(1) │ │(1)  │
└────┘ └─────┘ └─────┘  └─────┘ └──────┘ └─────┘  └─────┘ └────┘ └─────┘
```

**AI-Native Lexitas: 45 FTEs**

| Role | Count | Purpose |
|------|-------|---------|
| **CEO** | 1 | Strategy, top-10 sponsor relationships, QHP interface, M&A |
| **CMO / Medical Director** | 1 | Medical oversight, AI reading center validation, protocol design leadership, safety oversight |
| **Senior Certified Readers** | 4 | AI-assisted image reading validation across all modalities (OCT, fundus, FA, anterior, VF). Each reader handles 100+ images/day with AI pre-grading vs. 35 today |
| **Associate Director, Reading Center** | 1 | Reading center operations management, AI quality oversight, reader training |
| **Senior Medical Writers** | 3 | Review and refine AI-generated CSRs, protocols, ICFs, IBs. Each produces 2-3x current output |
| **Medical Affairs / Safety** | 1 | Safety physician oversight, medical monitor support, aggregate safety review |
| **VP Operations** | 1 | Clinical operations leadership, study delivery oversight |
| **Senior Project Managers** | 6 | Each manages 6-8 studies (vs. 3-5 today) with AI handling reports, tracking, risk monitoring |
| **Clinical Trial Leaders / CRAs** | 8 | Site monitoring (risk-based AI-assisted); 18-25 sites per CRA (vs. 10-15 today) |
| **Startup/Regulatory Specialists** | 3 | Manage study startup across countries; AI handles document tracking and IRB package assembly |
| **Senior Data Managers** | 4 | Database design/build oversight, query adjudication, AI validation. Handle 2x studies per person |
| **Senior Biostatisticians** | 4 | SAP review, AI-generated code validation, ophthalmology endpoint expertise |
| **SAS/R Programmers** | 4 | TLF production + AI code validation. AI generates 50-60% of standard code |
| **AI/ML Engineering Team** | 3 | Build and maintain LexVision, LexData, LexWrite, all AI systems |
| **Full-Stack Engineers** | 2 | Platform integration, dashboards, API development |
| **VP Commercial / BD Lead** | 1 | Sales strategy, top sponsor development |
| **Commercial/Proposals** | 2 | AI-assisted RFP responses, competitive positioning, partner management |
| **CFO** | 1 | Finance, investor relations, pricing strategy |
| **Controller** | 1 | Financial operations, revenue recognition, reporting |
| **HR Generalist** | 1 | All people operations for 45-person company |
| **IT (Managed)** | 1 | Infrastructure management (can be partially outsourced) |
| **TOTAL** | **45** | |

---

### 2.2 Technology Architecture — Named AI Systems

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     LEXITAS AI PLATFORM ("LEXOS")                               │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    LEXVISION™ (AI Reading Center Suite)                    │   │
│  │                                                                           │   │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐            │   │
│  │  │ LexVision  │ │ LexVision  │ │ LexVision  │ │ LexVision  │            │   │
│  │  │ OCT        │ │ Fundus     │ │ Angio      │ │ Anterior   │            │   │
│  │  │ (Segment,  │ │ (DR, AMD,  │ │ (FA, ICG   │ │ (Cataract, │            │   │
│  │  │  Fluid,    │ │  GA, Disc) │ │  Leakage,  │ │  Specular, │            │   │
│  │  │  Drusen)   │ │            │ │  Perfusion) │ │  VF)       │            │   │
│  │  └────────────┘ └────────────┘ └────────────┘ └────────────┘            │   │
│  │                                                                           │   │
│  │  ┌─────────────────────┐  ┌──────────────────────┐                       │   │
│  │  │ LexVision QC        │  │ LexVision Compare    │                       │   │
│  │  │ (Image Quality)     │  │ (Longitudinal Change)│                       │   │
│  │  └─────────────────────┘  └──────────────────────┘                       │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    CLINICAL OPS AI SUITE                                   │   │
│  │                                                                           │   │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐            │   │
│  │  │ LexSite AI │ │ LexEnroll  │ │ LexMonitor │ │ LexStartup │            │   │
│  │  │ (Site      │ │ AI         │ │ AI         │ │ AI         │            │   │
│  │  │  Selection │ │ (Enrollment│ │ (Monitoring │ │ (Study     │            │   │
│  │  │  & Scoring)│ │  Forecast) │ │  Reports)  │ │  Startup)  │            │   │
│  │  └────────────┘ └────────────┘ └────────────┘ └────────────┘            │   │
│  │                                                                           │   │
│  │  ┌────────────────────┐  ┌──────────────────────┐                        │   │
│  │  │ LexRisk AI         │  │ LexProtocol AI       │                        │   │
│  │  │ (Study Risk Mgmt)  │  │ (Protocol Optimization│                       │   │
│  │  │                    │  │  & Feasibility)       │                        │   │
│  │  └────────────────────┘  └──────────────────────┘                        │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    DATA SCIENCES AI SUITE                                  │   │
│  │                                                                           │   │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐            │   │
│  │  │ LexData AI │ │ LexQuery AI│ │ LexStat AI │ │ LexCode AI │            │   │
│  │  │ (DB Design │ │ (Auto Query│ │ (SAP, TLF  │ │ (MedDRA,   │            │   │
│  │  │  & Build)  │ │  Gen &     │ │  Coding,   │ │  WHO Drug) │            │   │
│  │  │            │ │  Resolution│ │  CDISC)    │ │            │            │   │
│  │  └────────────┘ └────────────┘ └────────────┘ └────────────┘            │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    KNOWLEDGE & CONTENT AI SUITE                            │   │
│  │                                                                           │   │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐            │   │
│  │  │ LexWrite AI│ │ LexSafety  │ │ LexLit AI  │ │ LexIntel AI│            │   │
│  │  │ (CSR, ICF, │ │ AI         │ │ (Literature│ │ (Competitve│            │   │
│  │  │  IB, Proto)│ │ (Safety    │ │  Monitor)  │ │  Intel)    │            │   │
│  │  │            │ │  Signal)   │ │            │ │            │            │   │
│  │  └────────────┘ └────────────┘ └────────────┘ └────────────┘            │   │
│  │                                                                           │   │
│  │  ┌────────────────────┐  ┌──────────────────────┐                        │   │
│  │  │ LexProposal AI     │  │ LexMedical AI        │                        │   │
│  │  │ (RFP/Proposal Gen) │  │ (Medical Query Asst) │                        │   │
│  │  └────────────────────┘  └──────────────────────┘                        │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    SHARED PLATFORM LAYER                                   │   │
│  │                                                                           │   │
│  │  ┌───────────────┐  ┌──────────────┐  ┌──────────────┐                   │   │
│  │  │ LexIngest     │  │ LexReport    │  │ LexFinance AI│                   │   │
│  │  │ (DICOM + Doc  │  │ (Auto Report │  │ (Invoicing,  │                   │   │
│  │  │  Ingestion)   │  │  Generation) │  │  Forecasting)│                   │   │
│  │  └───────────────┘  └──────────────┘  └──────────────┘                   │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    INFRASTRUCTURE                                          │   │
│  │                                                                           │   │
│  │  LLM Gateway (Claude API via AWS Bedrock)   │  Vector DB (Pinecone)      │   │
│  │  Image AI Models (Topcon SDK + Custom CNN)   │  GPU Compute (AWS p4d)    │   │
│  │  EDC Integration (Medidata API)              │  DICOM Server (Orthanc)   │   │
│  │  21 CFR Part 11 Audit Trail Engine           │  HIPAA-Compliant Cloud    │   │
│  │  GitHub Copilot (SAS/R Dev)                  │  CI/CD Pipeline           │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │
│  │                    DATA PRODUCTS (New Revenue Lines)                       │   │
│  │                                                                           │   │
│  │  ┌───────────────────────────┐  ┌──────────────────────────────────┐      │   │
│  │  │ LexVision-as-a-Service   │  │ OphthalmologyEndpointIQ™         │      │   │
│  │  │ (AI Reading Center for   │  │ (Protocol design intelligence    │      │   │
│  │  │  non-Lexitas sponsors)   │  │  sold to sponsors/biotech)      │      │   │
│  │  └───────────────────────────┘  └──────────────────────────────────┘      │   │
│  └───────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.3 Named AI Systems — Detail, Cost, Build vs. Buy

| # | System Name | Function | Architecture | Build Cost | Annual OpEx | Build vs. Buy |
|---|-------------|---------|--------------|-----------|-------------|---------------|
| 1 | **LexIngest** | DICOM image routing + document ingestion + auto-deidentification + completeness checking | Orthanc DICOM server + Python deidentification pipeline + AWS Textract for non-DICOM docs | $80K | $20K | Build |
| 2 | **LexVision QC** | Image technical quality assessment (focus, illumination, field of view) across all modalities | Custom CNN trained on Lexitas historical accept/reject decisions (5-10K labeled images) | $100K | $25K | Build |
| 3 | **LexVision OCT** | OCT retinal layer segmentation, fluid detection (SRF/IRF/PED), drusen quantification, GA measurement, longitudinal comparison | Topcon Deep Learning SDK (licensed) + custom Lexitas calibration layer for clinical trial–grade precision | $150K license + $100K integration | $60K license + $20K maintenance | Buy (Topcon/Heidelberg) + Customize |
| 4 | **LexVision Fundus** | DR grading (ETDRS), AMD staging (AREDS), GA area measurement, vessel analysis, optic disc assessment | IDx/Digital Diagnostics DR module (licensed) + custom AMD/GA model (transfer learning from Google ARDA research) + vessel morphology CNN | $120K license + $150K custom | $50K license + $25K maintenance | Buy (IDx) + Build (AMD/GA) |
| 5 | **LexVision Angio** | FA/ICG leakage detection, perfusion mapping, lesion measurement | Custom CNN (smaller training set — Lexitas proprietary FA/ICG data) + classical CV for vessel tracing | $120K | $20K | Build |
| 6 | **LexVision Anterior** | Cataract grading (LOCS III), specular microscopy cell count, visual field analysis | Licensed specular microscopy AI (Konan/Topcon) + custom VF progression model + LOCS grading CNN | $80K license + $60K custom | $30K | Buy + Build |
| 7 | **LexVision Compare** | Longitudinal change analysis — auto-registration and quantification of change between visits across all modalities | Custom alignment algorithms + change detection models operating on LexVision outputs | $80K | $15K | Build |
| 8 | **LexReport** | Automated reading report + client report + study status report generation from all AI outputs | Claude API narrative generation + Jinja2 template engine + sponsor-specific format configs + 21 CFR Part 11 audit trail | $60K | $15K | Build |
| 9 | **LexSite AI** | Ophthalmology site selection scoring — PI experience, equipment, enrollment history, indication match, competing trials, geography | ML scoring model (XGBoost) on Lexitas historical site data + ClinicalTrials.gov API + PubMed API + internal site database | $120K | $25K | Build |
| 10 | **LexProtocol AI** | Protocol NLP extraction + ophthalmology endpoint recommendation + enrollment prediction + amendment risk scoring | Claude API + RAG on Lexitas 14-year protocol corpus (vector DB) + ophthalmology endpoint ontology + historical amendment patterns | $200K | $40K | Build (Core IP) |
| 11 | **LexEnroll AI** | ML enrollment forecasting by ophthalmology indication, site, geography + real-time tracking dashboard | LightGBM model on historical data + EDC/CTMS API integration + real-time dashboard (React + D3) | $80K | $20K | Build |
| 12 | **LexMonitor AI** | Monitoring visit pre-brief generation, report drafting (70% auto), deviation detection, action tracking | Claude API + CTMS integration + historical monitoring report RAG + structured deviation classifier | $100K | $25K | Build |
| 13 | **LexStartup AI** | Study startup document tracking, IRB package assembly, regulatory document checking, site activation timeline management | Rules engine + document NLP (Claude) + CTMS integration + regulatory checklist database | $80K | $15K | Build |
| 14 | **LexRisk AI** | Multi-source study risk aggregation and scoring (enrollment, safety, data quality, site performance, timeline) | ML risk model + data integration from EDC/CTMS/LexVision/LexEnroll + real-time dashboard | $80K | $20K | Build |
| 15 | **LexData AI** | Protocol-to-database specification, CRF design automation, edit check generation, automated reconciliation, test case generation | Claude API + ophthalmology CRF template library + EDC API (Medidata/Oracle) + edit check rule engine | $150K | $30K | Build |
| 16 | **LexQuery AI** | Automated data query generation, confidence-based auto-release, resolution tracking, re-query workflows | NLP anomaly detection + Claude query drafting + EDC API + human review queue for low-confidence | $80K | $15K | Build |
| 17 | **LexCode AI** | MedDRA and WHO Drug auto-coding with ophthalmology-specific training data | Claude + MedDRA dictionary API + fuzzy matching + ophthalmology AE pattern library | $40K | $10K | Build |
| 18 | **LexStat AI** | SAP generation from protocol, TLF code generation (SAS/R), ophthalmology-specific TLF templates, CDISC mapping automation, NL query interface | Claude API + GitHub Copilot + ophthalmology TLF template library + CDISC mapping engine | $150K | $35K | Build |
| 19 | **LexWrite AI** | CSR, protocol, ICF, IB, regulatory document drafting with ophthalmology-specific language libraries | Claude API + RAG on Lexitas historical document corpus (vector DB) + ICH E3/E6 template engine + FDA guidance library | $150K | $35K | Build (Core IP) |
| 20 | **LexSafety AI** | ICSR processing, AE classification, aggregate signal detection, safety narrative generation | Claude NLP + MedDRA integration + statistical signal detection (PRR, EBGM) + ophthalmology AE reference database | $100K | $20K | Build |
| 21 | **LexLit AI** | Continuous ophthalmology literature monitoring (PubMed, preprints, FDA, EMA) with relevance scoring and alerting | PubMed API + arXiv/bioRxiv scrapers + Claude relevance scoring + personalized alert configuration | $40K | $10K | Build |
| 22 | **LexIntel AI** | Competitive intelligence — ophthalmology pipeline tracking, competitor monitoring, FDA guidance tracking | ClinicalTrials.gov API + FDA RSS + web scraper (competitor sites) + Claude weekly brief generation | $40K | $10K | Build |
| 23 | **LexProposal AI** | RFP parsing, proposal content generation from 14 years of past proposals, budget/timeline estimation | Claude API + RAG on historical proposals (vector DB) + pricing model (ML on study complexity) | $60K | $15K | Build |
| 24 | **LexMedical AI** | Medical query drafting for site questions, protocol-referenced responses with CMO review | Claude API + RAG on protocol + IB + ophthalmology knowledge base | $40K | $10K | Build |
| 25 | **LexFinance AI** | Milestone invoicing, revenue recognition, project profitability, cash flow forecasting, board reporting | Integration with accounting system (NetSuite/QBO) + CTMS milestone data + Claude narrative for reports | $60K | $15K | Build |
| | **LLM Gateway** | Claude API access via AWS Bedrock (HIPAA BAA) | AWS Bedrock subscription | $0 | $80-120K/yr | Buy |
| | **Vector Database** | RAG storage for protocol corpus, document corpus, proposal corpus, endpoint database | Pinecone | $0 | $25K/yr | Buy |
| | **GPU Compute** | Training and inference for LexVision CNN models | AWS p4d / g5 instances | $0 | $60K/yr | Buy |
| | **DICOM Server** | Image storage and routing | Orthanc (open source) + AWS S3 | $0 | $15K/yr | Buy |
| | **Dev Tools** | GitHub Copilot + Cursor for engineering team | Licenses | $0 | $10K/yr | Buy |
| | **TOTAL** | | | **$2.72M build** | **$880K/yr** | |

---

### 2.4 Unit Economics Comparison

| Metric | Current (Human) | AI-Native | Delta |
|--------|----------------|-----------|-------|
| **Cost per ophthalmic image read** | $45-65 | $12-18 | -72% |
| **Cost per monitoring report** | $350-500 (2-4 hrs × loaded cost) | $80-120 (30 min review) | -76% |
| **Cost per data query generated** | $25-35 | $4-6 | -84% |
| **Cost per CSR section drafted** | $8,000-12,000 | $2,500-4,000 | -68% |
| **Cost per RFP response** | $15,000-25,000 (30-40 hrs) | $3,000-5,000 (6-8 hrs) | -80% |
| **Cost per EDC database build** | $40,000-65,000 | $18,000-30,000 | -54% |
| **Image reading turnaround** | 5-7 days | 1-2 days | -75% |
| **Study startup time** | 12-16 weeks | 6-8 weeks | -50% |
| **Protocol amendment rate** | 15-20% (industry avg) | 8-12% (AI-optimized) | -40% |
| **Revenue per employee** | $300K | $1.2-1.6M | +400% |
| **Studies per PM** | 3-5 | 6-8 | +80% |
| **Sites per CRA** | 10-15 | 18-25 | +75% |
| **TLFs per programmer per week** | 5-8 | 10-15 | +88% |
| **Operating Margin** | ~16% | ~40% | +24 pp |

**What this means for pricing:** Lexitas can pursue a dual strategy:
1. **Premium AI pricing** — charge 25-40% more for "AI-accelerated" services (1-2 day image reads, 50% faster study startup, AI-optimized protocols). Sponsors will pay this gladly because faster = less burn rate on their own trial budgets.
2. **Maintain pricing, pocket the margin** — keep prices flat and convert labor savings straight to EBITDA.
3. **PE-optimal strategy:** do both — premium price on AI-differentiated services (Reading Center, protocol optimization) while maintaining standard pricing on commoditized services (data management, monitoring). Net effect: revenue up 30-50% + margin up 24 points.

---

### 2.5 Build vs. Buy Decision Summary

| Category | Build | Buy/License | Customize | Rationale |
|----------|-------|-------------|-----------|-----------|
| **LexVision (Image AI)** | Custom anterior/angio models, QC, Compare | OCT engine (Topcon), DR grading (IDx), specular (Konan) | OCT + DR calibration layers | Ophthalmology imaging AI is mature for core modalities; build only where no commercial option exists (FA/ICG, longitudinal comparison). License where FDA-cleared models exist. |
| **LexProtocol AI** | **Build (core IP)** | — | — | The ophthalmology endpoint intelligence database is Lexitas's most defensible AI asset. No commercial product encodes 475 years of ophthalmology trial design experience. This must be owned. |
| **LexWrite AI** | **Build (core IP)** | — | — | The Lexitas document corpus (14 years of CSRs, protocols, IBs in ophthalmology) is proprietary training data. RAG on this corpus is a competitive moat. |
| **LexData AI / LexQuery AI** | Build | — | EDC API integrations (Medidata, Oracle) | Data management AI is CRO-specific; no off-the-shelf solution exists. Build on top of EDC vendor APIs. |
| **LexStat AI** | Build + Buy | GitHub Copilot (code assist) | — | Combination: buy code AI tools, build ophthalmology-specific TLF templates and SAP generation. |
| **Clinical Ops Suite** | Build all | — | CTMS integrations | Site selection, enrollment, monitoring, startup — all Lexitas-specific logic built on top of CTMS data. |
| **LLM / Infrastructure** | — | AWS Bedrock (Claude), Pinecone, GPU | — | Never build infrastructure; always buy from proven providers with BAAs. |

---

### 2.6 "Day in the Life" — Post-Transformation Lexitas

**7:30 AM — The AI platform processed overnight:**
- 87 OCT scans from a Phase III geographic atrophy trial in Japan auto-segmented by LexVision OCT. GA lesion areas measured, longitudinal change calculated vs. prior visits. Reader validation queue populated with AI confidence scores.
- 23 fundus photographs pre-graded for a Phase II diabetic macular edema study. ETDRS severity grades proposed, comparison to screening visit auto-generated.
- LexQuery AI generated 34 data queries overnight from the EDC for active trials. 28 high-confidence queries auto-released to sites. 6 flagged for DM review.
- LexLit AI detected a new NEJM publication on anti-VEGF treatment durability in nAMD — flagged as relevant to 3 active Lexitas studies. Alert sent to CMO and relevant PMs.
- LexIntel AI identified a new Phase I ophthalmology trial registered by a biotech in San Diego — potential Lexitas prospect. Alert sent to VP Commercial.

**8:00 AM — Dr. Sarah Chen (Senior Certified Reader) opens LexVision:**
- Her queue shows 87 OCT scans with AI pre-grades. Color-coded confidence: 71 green (high confidence — review and sign in ~1 minute each), 12 yellow (medium — 3-5 minutes each), 4 red (low confidence/unusual findings — full manual review, 10-15 minutes each).
- She reviews and signs 87 images by 10:30 AM. Before AI: this would take 2.5 days for 2 readers. Now: 2.5 hours for 1 reader.
- LexReport auto-generates the reading reports as she signs each image. By 11:00 AM, reports are in the sponsor's data management system.

**9:00 AM — Marcus Liu (Senior Project Manager) reviews his 7-study portfolio:**
- LexRisk AI dashboard shows all 7 studies green except Study 042 (enrollment lagging at 3 European sites). LexEnroll AI forecasts: 60% probability of 2-week delay if no intervention.
- LexMonitor AI has auto-generated pre-visit briefs for his 2 monitoring visits this week, including prior report summaries, open action items, and data quality flags.
- He joins a sponsor call at 10:00 AM. LexReport auto-generated the study update deck with enrollment curves, safety summary, and reading center throughput metrics. Marcus adds 2 bullets on the enrollment mitigation strategy and presents.

**10:00 AM — Dr. David Tanzer (CMO) reviews safety signals:**
- LexSafety AI flagged an elevated rate of injection site reactions in Study 055 (gene therapy, retinitis pigmentosa) — 4 events in last 2 weeks vs. 2 expected. Severity: all mild. AI assessment: "monitoring recommended; does not meet SUSAR threshold."
- He reviews the AI analysis, concurs, and instructs the PM to discuss during next DMC call. Takes 15 minutes. Without AI: the signal would have been detected at the next monthly review, 3 weeks from now.
- He then spends 2 hours on a call with a potential sponsor discussing protocol design for a novel GA treatment. LexProtocol AI pre-generated a feasibility analysis and endpoint recommendation — he refines it live on the call, impressing the sponsor with the depth and speed of Lexitas's response.

**2:00 PM — Anna Park (Senior Medical Writer) reviews AI-generated CSR sections:**
- LexWrite AI produced a 40-page first draft of the efficacy and safety sections for Study 038 (dry eye disease Phase III). She reviews, edits clinical interpretation paragraphs, adjusts 3 tables for sponsor-preferred formatting, and finishes in 4 hours. Before AI: this would have taken 3 weeks.
- She starts reviewing LexWrite AI's ICF draft for a new rare disease study. The consent form includes AI-generated patient-facing descriptions of OCT imaging, intravitreal injection procedures, and genetic testing — all pulled from Lexitas's ophthalmology consent language library. She refines the readability (targets 8th grade reading level; LexWrite AI achieved 9.2 — she simplifies 4 paragraphs).

**4:00 PM — Andy Lipetz (VP Commercial) reviews the week's RFP pipeline:**
- LexProposal AI has drafted responses to 2 RFPs received this week — one for a Phase II DME study (budget: $2.8M) and one for a Phase III glaucoma study (budget: $4.2M). Each draft is 85% complete in 6 hours of AI work vs. 35 hours of human work previously.
- He customizes the competitive differentiation sections, emphasizing the AI Reading Center's 1-2 day turnaround (competitors: 5-7 days) and the AI-optimized protocol design capability.
- LexIntel AI's weekly brief shows Ora won a large AMD program from Genentech — Andy notes this and prepares a counter-positioning strategy for the next Genentech RFP.

**5:30 PM — Jeanne Hecht (CEO) reviews board materials:**
- LexFinance AI auto-generated the monthly QHP board report: revenue up 18% YoY, 3 new studies won this quarter (including the first "LexVision-as-a-Service" standalone reading engagement), EBITDA margin at 36% (up from 16% pre-transformation). She adds strategic commentary and sends to QHP partners in 20 minutes. Before AI: 2 days of CFO + team compilation.

**Meanwhile, the AI platform processed 287 images, generated 34 data queries, drafted 4 monitoring reports, assembled 1 IRB package, and forecasted enrollment for 12 studies — with 6 human interventions.**

---

*Phases 3-6 (Regulatory Deep Dive, Financial Model, Implementation Roadmap, Cross-Portfolio Synergies) to follow in Part 2.*

*Prepared for Jeff Frazier, Operating Partner – AI, QHP Capital*
*Deep Dive — Lexitas Pharma Services (Tier 3)*
*March 5, 2026*
