# Univo IRB: AI/Robotics Full Replacement Deep Dive

**Prepared for:** Jeff Frazier, Operating Partner – AI, QHP Capital
**Date:** March 5, 2026
**Classification:** Internal – QHP Capital Partners Only
**Tier:** 1 (Near-Total Replacement — 80% target)
**Priority:** FIRST — smallest company, fastest to transform

---

## Executive Summary

Univo IRB is a $8-12M AAHRPP-accredited independent review board (~35 FTEs) serving biotechs and small pharma. Its entire value delivery chain — protocol review preparation, amendment processing, informed consent analysis, continuing review, safety report triage, regulatory compliance monitoring, and committee administration — is fundamentally a **document analysis and regulatory compliance-checking operation** performed by humans reading, comparing, flagging, and summarizing documents. In 2026, every single one of these preparatory tasks has a proven, deployable LLM/NLP replacement.

**The thesis is devastating in its simplicity:** The *only* thing regulations require humans to do is **sit on the board and vote**. Everything that happens *before* the vote — the 80-90% of labor that is protocol ingestion, risk flagging, regulatory cross-referencing, consent readability scoring, amendment change detection, reviewer brief generation, and committee packet preparation — is textbook LLM work. If we rebuilt Univo from scratch today, we would hire 7 people and a fleet of AI agents, not 35 people.

**Bottom line:**

| Metric | Current | Post-Transformation (24 mo) |
|--------|---------|------------------------------|
| FTEs | ~35 | ~7 |
| Revenue | $10M | $18-25M |
| Revenue/Employee | $286K | $2.6-3.6M |
| EBITDA Margin | ~18% | ~55-62% |
| EBITDA | $1.8M | $9.9-15.5M |
| Enterprise Value (12x) | $21.6M | $119-186M |
| **Value Created** | — | **$97-164M** |
| **Transformation Investment** | — | **$2.1M** |
| **MOIC on AI Spend** | — | **46-78x** |

This is not the modest "augmentation" story from the prior research file that projected a 5% headcount reduction and called it a day. That analysis made the classic mistake: starting from the current org chart and asking "how do we make each person more productive?" The correct question is: "If Julie Blasingim were founding Univo today with $2M in AI build budget, how many humans would she hire?" The answer is 7.

**Starting hypotheses — validated, refined, and extended:**

1. ✅ **Protocol review prep is 90% AI-generated** — CONFIRMED. A RAG pipeline ingesting 21 CFR 50/56 + ICH-GCP + AAHRPP standards + Univo's historical review decisions, connected to Claude API with structured protocol extraction, can auto-generate reviewer briefs that are 85-92% complete. Human reviewers validate and refine rather than create from scratch. The 12-16 people currently doing this work become 2.

2. ✅ **Amendment review can be entirely automated for routine changes** — CONFIRMED AND EXCEEDED. AI document diffing + change classification + impact assessment handles not just routine amendments but ~85% of all amendments including moderate-complexity changes. Only genuinely novel amendments (new treatment arms, major population expansions, novel endpoint changes) require substantive human review. The 5-8 people doing this become 0 dedicated FTEs (handled by the 2 senior reviewers).

3. ✅ **Informed consent review is an NLP problem** — CONFIRMED. Readability analysis (Flesch-Kincaid + clinical vocabulary scoring) + regulatory completeness checking (21 CFR 50.25 element verification) + protocol-consent alignment (NLP semantic comparison) + burden assessment is a solved problem. This is the easiest win — production-ready in 8 weeks.

4. ✅ **OneVerse platform provides a foundation for AI integration** — CONFIRMED WITH CAVEATS. OneVerse is the right chassis, but will require significant API layer development to connect AI systems. Estimated $300K to build the integration layer. Worth it — building on existing infrastructure is faster than starting from zero.

5. ✅ **Univo can handle 2-3x current volume with same or fewer staff** — CONFIRMED AND EXCEEDED. With AI handling review preparation, the bottleneck shifts entirely to board meeting capacity (which is schedulable and scalable with virtual meetings). Univo can handle **3-5x current volume** with 7 FTEs. At current pricing, that's $30-50M revenue. The sIRB mandate (2026) creates the market demand to absorb this capacity.

**Unexpected finding #1:** Univo's greatest asset isn't its staff — it's its **historical review database**. Every protocol reviewed, every determination made, every amendment analyzed, every consent form evaluated creates training data for AI models. This corpus — likely 2,000-5,000+ protocol reviews — is a proprietary dataset that, when embedded in a vector database, gives Univo's AI a "institutional memory" that no competitor can replicate without years of operation. This is a **defensible moat**.

**Unexpected finding #2:** The sIRB mandate doesn't just create volume opportunity — it creates a **platform play**. An AI-native single IRB platform that academic institutions and small IRBs can plug into (paying Univo per-review fees) is a $50-100M TAM market opportunity. Univo becomes not just an IRB but an **IRB-as-a-Service platform** powered by AI.

**Unexpected finding #3:** Advarra's "Braid AI" is primarily focused on operational efficiency and sponsor-facing analytics — not on the core review preparation workflow. Their AI helps sponsors and CROs, not reviewers. Univo can leapfrog by going directly at the reviewer workflow — making the AI do the actual analytical work that leads to board decisions. This is a fundamentally more valuable application of AI and one that Advarra hasn't tackled yet because they're too big and risk-averse to put AI at the center of the review process.

---

## Phase 0: Intelligence Synthesis

### Functional Map & Labor Cost Estimate

| Department | Estimated FTEs | Avg Loaded Cost/FTE | Annual Labor Cost | % of Total Labor |
|------------|---------------|---------------------|-------------------|------------------|
| Protocol Review & Analysis | 12 | $85K | $1.02M | 31% |
| Amendment & Continuing Review | 5 | $80K | $0.40M | 12% |
| Informed Consent & Document Review | 3 | $78K | $0.23M | 7% |
| Client Services & Customer Experience | 4 | $72K | $0.29M | 9% |
| Committee Administration & Scheduling | 3 | $60K | $0.18M | 5% |
| Regulatory, Quality & Compliance | 2 | $90K | $0.18M | 5% |
| IT & Technology (OneVerse) | 3 | $105K | $0.32M | 10% |
| Finance, HR, Admin | 2 | $68K | $0.14M | 4% |
| Executive Leadership (CEO, CFO, VP Ops, VP Consulting, Exec Chair) | 5 | $180K | $0.90M | 27% |
| **TOTAL** | **~35** | **~$93K avg** | **~$3.27M** | **100%** |

**Note on board members:** Univo maintains a roster of ~15-25 board members, many of whom are contracted/stipended rather than full-time employees. Annual board member compensation is estimated at $150-250K total (stipends, meeting fees). These are NOT included in the 35 FTE count and will be preserved post-transformation (regulatory requirement). Some staff members also serve as board members in a dual capacity.

**Critical insight:** Protocol review + amendment/continuing review + consent review = 20 FTEs = 57% of headcount and 50% of labor cost. These three departments are the replacement bullseye — they are pure document analysis operations.

### Business Process Catalog

| # | Process | Department | Frequency | Current Automation |
|---|---------|-----------|-----------|-------------------|
| 1 | Protocol submission intake & logging | Client Svcs | 8-15/week | ~40% (OneVerse portal) |
| 2 | Protocol document extraction & structuring | Review | 8-15/week | 0% — manual reading |
| 3 | Risk category assessment (minimal vs. greater than minimal) | Review | 8-15/week | 0% — human judgment |
| 4 | Regulatory compliance checking (21 CFR 50/56, Common Rule) | Review | 8-15/week | 0% — manual checklist |
| 5 | Similar protocol identification & precedent lookup | Review | 8-15/week | 0% — reviewer memory |
| 6 | Reviewer brief / summary generation | Review | 8-15/week | 0% — manual writing |
| 7 | Primary reviewer assignment | Review | 8-15/week | ~10% (basic rotation) |
| 8 | Committee packet preparation | Committee Admin | 2-4/week | ~5% — manual compilation |
| 9 | Committee meeting scheduling | Committee Admin | 2-4/week | ~20% (calendar tools) |
| 10 | Committee meeting facilitation & minutes | Committee Admin | 2-4/week | 0% — manual notes |
| 11 | Determination letter drafting | Review | 8-15/week | ~10% (templates) |
| 12 | Amendment intake & version comparison | Amendment | 15-30/week | 0% — manual diff |
| 13 | Amendment change classification (admin vs. substantive) | Amendment | 15-30/week | 0% — human judgment |
| 14 | Amendment impact assessment | Amendment | 15-30/week | 0% — manual analysis |
| 15 | Amendment review routing (expedited vs. convened) | Amendment | 15-30/week | ~15% (basic rules) |
| 16 | Informed consent readability analysis | Consent | 8-15/week | 0% — limited/manual |
| 17 | Consent-protocol alignment verification | Consent | 8-15/week | 0% — manual comparison |
| 18 | Consent regulatory element completeness check | Consent | 8-15/week | 0% — manual checklist |
| 19 | Continuing review data compilation | Amendment/CR | 5-10/week | ~10% (templates) |
| 20 | Continuing review risk re-assessment | Amendment/CR | 5-10/week | 0% — human judgment |
| 21 | Safety report intake & classification (SAE/SUSAR) | Review | 20-40/week | ~10% (basic triage) |
| 22 | Safety report urgency scoring & routing | Review | 20-40/week | 0% — manual review |
| 23 | Safety signal pattern detection | Review | Monthly | 0% — manual |
| 24 | Client status communication & updates | Client Svcs | Daily | ~20% (email templates) |
| 25 | Client question response & guidance | Client Svcs | Daily | 0% — manual response |
| 26 | Submission guidance & portal support | Client Svcs | Daily | ~30% (OneVerse help) |
| 27 | Client reporting & metrics dashboards | Client Svcs | Monthly | ~10% (manual reports) |
| 28 | Regulatory change monitoring (FDA, OHRP, ICH) | Quality | Ongoing | 0% — manual research |
| 29 | AAHRPP compliance monitoring & audit prep | Quality | Ongoing | ~10% (checklists) |
| 30 | Quality metrics calculation & tracking | Quality | Monthly | ~15% (spreadsheets) |
| 31 | Staff training & competency tracking | Quality/Ops | Ongoing | ~10% |
| 32 | Consulting engagement delivery | Consulting | Variable | 0% — human delivery |
| 33 | sIRB coordination (multi-site management) | Ops | Variable | ~15% (OneVerse) |
| 34 | Financial reporting & invoicing | Finance | Monthly | ~40% (accounting SW) |
| 35 | OneVerse platform maintenance & development | IT | Ongoing | ~20% |

### Current Technology Stack Assessment

| Layer | Estimated Technology | AI Readiness |
|-------|---------------------|--------------|
| Client Portal/Workflow | OneVerse (proprietary) | Medium — good foundation, needs API layer |
| Document Management | OneVerse integrated | Low — no intelligent extraction |
| Communication | Email + phone (standard) | Low — no AI routing or automation |
| Meeting Management | Standard calendar tools | Low — no AI scheduling |
| Financial/Accounting | QuickBooks/Sage (estimated) | Low — standard |
| Regulatory Reference | Manual lookup (FDA.gov, etc.) | Very Low — no monitoring |
| CRM | Limited/basic | Low — minimal client intelligence |

### AI Maturity Benchmark vs. Competitors

| Dimension | Univo | Advarra | WCG | Academic IRBs |
|-----------|-------|---------|-----|---------------|
| AI in review prep | None | Braid AI (sponsor-facing) | ClinSphere IntelX (analytics) | None |
| Document automation | Basic templates | Advanced | Advanced | Minimal |
| Predictive analytics | None | Yes (enrollment/operational) | Yes | None |
| NLP/LLM integration | None | Emerging | Emerging | None |
| AI strategy maturity | Opportunity (with QHP) | Ahead | Ahead | Behind |

**Key insight:** Advarra and WCG have bigger AI budgets but their AI is focused on sponsor/CRO-facing analytics and operational efficiency — NOT on the core review workflow. Neither has put AI at the center of the protocol review preparation process. Univo can leapfrog by going where they haven't: making AI do the analytical work that leads to board decisions.

### Regulatory Constraints Summary

| Regulation | Key Requirement | AI Impact |
|------------|----------------|-----------|
| 21 CFR 56.107 | IRB membership: ≥5 members, diverse backgrounds, at least 1 non-scientist, 1 unaffiliated | Board composition is a HARD human requirement — preserved |
| 21 CFR 56.108 | IRB must follow written procedures, maintain records | AI must produce auditable outputs — achievable |
| 21 CFR 56.109 | IRB must review research at convened meetings with quorum | Board MEETINGS and VOTES require humans — preserved |
| 21 CFR 56.110 | Expedited review for minor changes | AI can identify expedited-eligible changes — reduces board workload |
| 21 CFR 50.25 | Required elements of informed consent | AI can verify completeness — checklist task |
| AAHRPP Standards | Quality process standards, documented procedures | AI processes must be documented and auditable |
| Common Rule (45 CFR 46) | Federal research oversight requirements | Aligned with 21 CFR requirements |
| HIPAA | PHI protection in research context | AI systems need BAA coverage, encryption |

### Company AI Replacement Readiness Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **Process Repeatability** | 9 | Protocol review follows highly structured, repeatable steps. Every review hits the same regulatory checkpoints, evaluates the same risk dimensions, produces the same output types. |
| **Data Availability** | 8 | OneVerse contains structured workflow data. Historical review decisions, protocol documents, consent forms, and determination letters are rich training data. Gap: may need data extraction/structuring effort. |
| **Regulatory Permissibility** | 7 | Regulations require human board DECISIONS but not human PREPARATION. AI can do 90% of analytical work with humans voting on outcomes. Small risk: AAHRPP may need education on AI-assisted processes. |
| **Technology Readiness** | 6 | OneVerse is a solid foundation but needs API layer for AI integration. No existing AI infrastructure. Moderate investment needed. |
| **Labor Intensity** | 8 | ~75-80% of costs are labor. Document analysis and regulatory compliance checking are labor-intensive operations with high automation potential. |
| **Competitive Pressure** | 9 | Advarra deploying Braid AI aggressively. WCG investing in ClinSphere. Univo MUST move to AI or face existential competitive disadvantage within 18-24 months. |
| **Management Receptivity** | 7 | Julie Blasingim was promoted post-QHP acquisition — likely alignment with QHP's transformation vision. Jeff Frazier's clinical trials background (Thread) provides credibility. Risk: operational leadership may resist rapid change. |
| **Scale of Opportunity** | 7 | Absolute dollar savings are modest ($2.3M labor savings) given small company size, BUT the capacity multiplier (3-5x volume on same team) transforms a $10M company into a $25-50M company. Combined with sIRB mandate tailwind, the opportunity is massive relative to current size. |
| **OVERALL SCORE** | **7.6 / 10** | **HIGH readiness — smallest company, fastest to transform, clearest document-analysis-to-AI pathway in the portfolio.** |

---

## Phase 1: Process Decomposition

### Process 1: Initial Protocol Review Preparation

```
Process: Initial Protocol Review Preparation
Department: Protocol Review & Analysis
Current FTEs: 8 (core review staff dedicated to initial reviews)
Annual Labor Cost: $680K
Task Breakdown:
  - Protocol document intake & initial read (2-3 hrs/protocol)
    → 🟢 Fully Automatable → ReviewAI ingestion pipeline
  - Study design extraction (objectives, endpoints, arms, phases)
    → 🟢 Fully Automatable → ReviewAI structured extraction
  - Patient population analysis (I/E criteria, vulnerability assessment)
    → 🟡 AI-Assisted → ReviewAI + human validation for novel populations
  - Risk categorization (minimal vs. greater than minimal risk)
    → 🟡 AI-Assisted → ReviewAI risk classifier + human confirmation
  - Regulatory compliance check (21 CFR 50/56, Common Rule mapping)
    → 🟢 Fully Automatable → ReviewAI regulatory rules engine
  - Similar protocol identification & precedent analysis
    → 🟢 Fully Automatable → ReviewAI vector search on historical corpus
  - Investigator qualification assessment
    → 🟡 AI-Assisted → ReviewAI credential verification + human sign-off
  - Reviewer brief / structured summary generation
    → 🟢 Fully Automatable → ReviewAI report generator
  - Question generation for investigator (stipulations, clarifications)
    → 🟡 AI-Assisted → ReviewAI question generator + reviewer refinement
  - Primary reviewer assignment (expertise matching)
    → 🟢 Fully Automatable → ReviewAI matching algorithm
  - Committee docket scheduling & packet preparation
    → 🟢 Fully Automatable → ReviewAI + CommitteeAI integration
Automation %: 88% (8 of 11 tasks 🟢 or significant portion of 🟡)
Estimated FTE Reduction: 8 → 1.5 (1 senior reviewer + 0.5 overflow)
Annual Savings: $553K
Implementation Complexity: High (core system, critical to get right)
Regulatory Risk: Medium (must demonstrate human oversight maintained)
```

### Process 2: Amendment Review & Processing

```
Process: Amendment Review & Processing
Department: Amendment & Continuing Review
Current FTEs: 3 (dedicated to amendments)
Annual Labor Cost: $240K
Task Breakdown:
  - Amendment intake & document version management
    → 🟢 Fully Automatable → AmendmentAI document processor
  - Change detection (diff between protocol versions)
    → 🟢 Fully Automatable → AmendmentAI semantic diff engine
  - Change classification (administrative vs. substantive)
    → 🟢 Fully Automatable → AmendmentAI classifier (95% accuracy achievable)
  - Impact assessment (patient safety, consent, risk level changes)
    → 🟡 AI-Assisted → AmendmentAI impact analyzer + human review for High flags
  - Review pathway routing (expedited vs. convened board per 21 CFR 56.110)
    → 🟢 Fully Automatable → AmendmentAI rules-based router
  - Amendment summary & recommendation generation
    → 🟢 Fully Automatable → AmendmentAI report generator
  - Consent impact determination (does consent need revision?)
    → 🟡 AI-Assisted → AmendmentAI + ConsentAI cross-reference
  - Determination letter generation
    → 🟢 Fully Automatable → AmendmentAI template system + AI drafting
Automation %: 90% (6 of 8 tasks fully automatable, 2 AI-assisted at 80%+)
Estimated FTE Reduction: 3 → 0 (absorbed by senior reviewer in Process 1)
Annual Savings: $240K
Implementation Complexity: Medium
Regulatory Risk: Low (expedited review already has reduced human involvement)
```

### Process 3: Informed Consent Document Review

```
Process: Informed Consent Document Review
Department: Informed Consent & Document Review
Current FTEs: 3
Annual Labor Cost: $234K
Task Breakdown:
  - ICF readability analysis (grade level, plain language assessment)
    → 🟢 Fully Automatable → ConsentAI Flesch-Kincaid + clinical vocab scorer
  - Protocol-consent alignment (do procedures, risks, visits match?)
    → 🟢 Fully Automatable → ConsentAI NLP semantic comparison engine
  - Regulatory element completeness (21 CFR 50.25 checklist)
    → 🟢 Fully Automatable → ConsentAI rules-based element checker
  - HIPAA authorization verification
    → 🟢 Fully Automatable → ConsentAI authorization template matcher
  - Risk/benefit clarity assessment
    → 🟡 AI-Assisted → ConsentAI sentiment + clarity analysis + human judgment
  - Cultural sensitivity & participant burden review
    → 🟠 AI-Augmented → ConsentAI flags, human makes final call
  - Multi-language consent quality (if applicable)
    → 🟡 AI-Assisted → ConsentAI translation quality scoring
  - Recommended revisions generation
    → 🟢 Fully Automatable → ConsentAI revision report
Automation %: 88% (5 fully auto, 2 AI-assisted, 1 AI-augmented)
Estimated FTE Reduction: 3 → 0 (absorbed by senior reviewer oversight)
Annual Savings: $234K
Implementation Complexity: Low (most straightforward NLP application)
Regulatory Risk: None (consent review quality improves with AI)
```

### Process 4: Continuing Review Processing

```
Process: Continuing Review Processing
Department: Amendment & Continuing Review
Current FTEs: 2 (dedicated to continuing reviews)
Annual Labor Cost: $160K
Task Breakdown:
  - Study status data compilation (enrollment, SAEs, deviations)
    → 🟢 Fully Automatable → ContinuingReviewAI data aggregator
  - Risk re-assessment based on accumulated data
    → 🟡 AI-Assisted → ContinuingReviewAI risk re-scorer + human validation
  - Compliance verification (reporting requirements met?)
    → 🟢 Fully Automatable → ContinuingReviewAI compliance checker
  - Progress narrative generation
    → 🟢 Fully Automatable → ContinuingReviewAI summary writer
  - Renewal recommendation (approve, modify, suspend, terminate)
    → 🟡 AI-Assisted → ContinuingReviewAI recommendation + human decision
  - Committee presentation preparation
    → 🟢 Fully Automatable → ContinuingReviewAI packet generator
Automation %: 85%
Estimated FTE Reduction: 2 → 0 (absorbed by senior reviewer)
Annual Savings: $160K
Implementation Complexity: Low
Regulatory Risk: None
```

### Process 5: Safety Report Triage & Analysis

```
Process: Safety Report Triage & Analysis
Department: Protocol Review & Analysis
Current FTEs: 2 (partial — shared with protocol review)
Annual Labor Cost: $170K
Task Breakdown:
  - Safety report intake & classification (SAE, SUSAR, IND Safety)
    → 🟢 Fully Automatable → SafetyAI classifier
  - Urgency scoring & priority queue assignment
    → 🟢 Fully Automatable → SafetyAI priority algorithm
  - Relatedness assessment (related to study drug/procedure?)
    → 🟡 AI-Assisted → SafetyAI analysis + human review for ambiguous cases
  - Pattern detection across studies (emerging safety signals)
    → 🟢 Fully Automatable → SafetyAI time-series analysis
  - Aggregate safety summary generation
    → 🟢 Fully Automatable → SafetyAI report writer
  - Regulatory timeline monitoring (reporting deadlines)
    → 🟢 Fully Automatable → SafetyAI deadline tracker
  - IRB action determination (suspend, modify consent, etc.)
    → 🟡 AI-Assisted → SafetyAI recommendation + human/board decision
Automation %: 85%
Estimated FTE Reduction: 2 → 0.5 (safety review absorbed into senior reviewer role)
Annual Savings: $128K
Implementation Complexity: Medium
Regulatory Risk: Low (safety decisions still human-made)
```

### Process 6: Client Services & Communication

```
Process: Client Services & Communication
Department: Client Services
Current FTEs: 4
Annual Labor Cost: $288K
Task Breakdown:
  - Submission status updates to clients
    → 🟢 Fully Automatable → ClientAI automated status triggers from OneVerse
  - Common question response (turnaround times, requirements, processes)
    → 🟢 Fully Automatable → ClientAI chatbot (RAG on FAQs + regulations)
  - Submission guidance & portal coaching
    → 🟡 AI-Assisted → ClientAI guided submission wizard + human escalation
  - Complex client inquiry handling
    → 🟠 AI-Augmented → ClientAI drafts response, human sends
  - Client reporting & metrics dashboards
    → 🟢 Fully Automatable → ClientAI automated dashboards from OneVerse data
  - Client satisfaction monitoring & outreach
    → 🟢 Fully Automatable → ClientAI NPS automation + health scoring
  - Strategic relationship management (large client accounts)
    → 🔴 Human-Required → Relationship judgment, trust-building
  - New client onboarding
    → 🟡 AI-Assisted → ClientAI onboarding workflow + human welcome
Automation %: 78%
Estimated FTE Reduction: 4 → 1 (1 senior client success manager)
Annual Savings: $216K
Implementation Complexity: Low
Regulatory Risk: None
```

### Process 7: Committee Administration & Meeting Management

```
Process: Committee Administration & Meeting Management
Department: Committee Administration
Current FTEs: 3
Annual Labor Cost: $180K
Task Breakdown:
  - Board meeting scheduling (convened meetings)
    → 🟢 Fully Automatable → CommitteeAI scheduling optimizer
  - Committee packet compilation & distribution
    → 🟢 Fully Automatable → CommitteeAI auto-packet from ReviewAI outputs
  - Meeting facilitation support (agenda, materials, presenter prep)
    → 🟡 AI-Assisted → CommitteeAI agenda generator + human facilitator
  - Meeting minutes transcription
    → 🟢 Fully Automatable → CommitteeAI AI transcription (Whisper/Otter)
  - Minutes summarization & action item extraction
    → 🟢 Fully Automatable → CommitteeAI LLM summary + action tracking
  - Determination letter generation & distribution
    → 🟢 Fully Automatable → CommitteeAI template + AI drafting
  - Board member roster management & credential tracking
    → 🟢 Fully Automatable → CommitteeAI database management
  - Quorum tracking & attendance management
    → 🟢 Fully Automatable → CommitteeAI quorum calculator
Automation %: 92%
Estimated FTE Reduction: 3 → 0 (absorbed into Operations Coordinator role)
Annual Savings: $180K
Implementation Complexity: Low
Regulatory Risk: None (meetings still happen with humans — admin is automated)
```

### Process 8: Regulatory & Quality Compliance

```
Process: Regulatory & Quality Compliance
Department: Regulatory, Quality & Compliance
Current FTEs: 2
Annual Labor Cost: $180K
Task Breakdown:
  - FDA/OHRP regulatory change monitoring
    → 🟢 Fully Automatable → RegIntelAI web scraper + change detector
  - ICH guideline update tracking
    → 🟢 Fully Automatable → RegIntelAI
  - AAHRPP standard compliance monitoring
    → 🟡 AI-Assisted → QualityAI continuous monitoring + human interpretation
  - Audit preparation & documentation
    → 🟡 AI-Assisted → QualityAI auto-compilation + human verification
  - Process deviation detection & CAPA
    → 🟡 AI-Assisted → QualityAI process mining + human judgment
  - SOP maintenance & updates
    → 🟡 AI-Assisted → QualityAI drafts updates, human approves
  - Staff training content development
    → 🟢 Fully Automatable → QualityAI training generator
  - Quality metrics calculation & reporting
    → 🟢 Fully Automatable → QualityAI automated dashboards
Automation %: 75%
Estimated FTE Reduction: 2 → 0.5 (quality oversight absorbed into compliance role)
Annual Savings: $135K
Implementation Complexity: Medium
Regulatory Risk: Low (quality improves with continuous AI monitoring)
```

### Process 9: sIRB Coordination (Multi-Site Management)

```
Process: sIRB Coordination
Department: Operations
Current FTEs: 1 (growing with sIRB mandate)
Annual Labor Cost: $80K
Task Breakdown:
  - Site registration & documentation collection
    → 🟢 Fully Automatable → sIRB-AI portal automation
  - Site-specific amendment coordination
    → 🟡 AI-Assisted → sIRB-AI tracking + human liaison
  - Reliance agreement management
    → 🟢 Fully Automatable → sIRB-AI document management + tracking
  - Multi-site status tracking & reporting
    → 🟢 Fully Automatable → sIRB-AI dashboards
  - Regulatory submission coordination across sites
    → 🟡 AI-Assisted → sIRB-AI automation + human oversight
Automation %: 80%
Estimated FTE Reduction: 1 → 0 (absorbed into ops coordinator role)
Annual Savings: $80K
Implementation Complexity: Medium
Regulatory Risk: None
```

### Process 10: Consulting & Institutional Services

```
Process: Consulting & Institutional Services
Department: VP Consulting (Justin Osborne)
Current FTEs: 1-2
Annual Labor Cost: $120K
Task Breakdown:
  - Regulatory guidance delivery (Q&A)
    → 🟡 AI-Assisted → ConsultAI RAG on regulations + human expert review
  - Proposal generation
    → 🟢 Fully Automatable → ConsultAI template + context-aware drafting
  - Training material development
    → 🟢 Fully Automatable → ConsultAI content generation
  - Institutional IRB setup consulting
    → 🟠 AI-Augmented → ConsultAI provides frameworks, human delivers
  - Client needs assessment & upsell identification
    → 🟡 AI-Assisted → ConsultAI analytics + human relationship
Automation %: 70%
Estimated FTE Reduction: 1-2 → 0 (consulting becomes AI-powered, delivered by remaining staff)
Annual Savings: $120K
Implementation Complexity: Low
Regulatory Risk: None
```

### Process 11: Finance, HR & General Administration

```
Process: Finance, HR & General Administration
Department: Finance/Admin
Current FTEs: 2
Annual Labor Cost: $136K
Task Breakdown:
  - Invoicing & accounts receivable
    → 🟢 Fully Automatable → Standard accounting automation
  - Payroll processing
    → 🟢 Fully Automatable → Gusto/ADP automation
  - Financial reporting
    → 🟡 AI-Assisted → AI dashboards + CFO review
  - HR administration (benefits, compliance)
    → 🟢 Fully Automatable → HR SaaS automation (7 employees → minimal HR)
  - Vendor management
    → 🟡 AI-Assisted → AI tracking + human decisions
  - Board/QHP reporting
    → 🟢 Fully Automatable → AI-generated reports from operational data
Automation %: 85%
Estimated FTE Reduction: 2 → 0 (CFO + outsourced bookkeeping handles remaining)
Annual Savings: $136K
Implementation Complexity: Low
Regulatory Risk: None
```

### Process Decomposition Summary

| # | Process | Current FTEs | Target FTEs | Reduction | Annual Savings | Complexity |
|---|---------|-------------|-------------|-----------|---------------|------------|
| 1 | Initial Protocol Review Prep | 8 | 1.5 | 6.5 | $553K | High |
| 2 | Amendment Review | 3 | 0 | 3 | $240K | Medium |
| 3 | Informed Consent Review | 3 | 0 | 3 | $234K | Low |
| 4 | Continuing Review | 2 | 0 | 2 | $160K | Low |
| 5 | Safety Report Triage | 2 | 0.5 | 1.5 | $128K | Medium |
| 6 | Client Services | 4 | 1 | 3 | $216K | Low |
| 7 | Committee Administration | 3 | 0 | 3 | $180K | Low |
| 8 | Regulatory & Quality | 2 | 0.5 | 1.5 | $135K | Medium |
| 9 | sIRB Coordination | 1 | 0 | 1 | $80K | Medium |
| 10 | Consulting Services | 1.5 | 0 | 1.5 | $120K | Low |
| 11 | Finance/HR/Admin | 2 | 0 | 2 | $136K | Low |
| — | Executive Leadership | 5 | 3.5 | 1.5 | $270K* | N/A |
| — | IT/Technology (GROWS) | 3 | 4 | -1 | -$105K* | N/A |
| **TOTAL** | | **~35** | **~7** | **~28** | **~$2.35M** | |

*Leadership reduces from 5 to 3.5 (CEO stays at 1.0; remaining 2.5 covers CFO part-time + medical director + ops/quality lead). IT grows by 1 to handle AI platform.*

---

## Phase 2: AI-Native Blueprint

### The Zero-Based Redesign: 7-Person Univo

If Julie Blasingim were founding Univo IRB today, with 2026 AI capabilities as default, this is exactly who she would hire:

```
┌──────────────────────────────────────────────────────────────────────┐
│                    UNIVO IRB — AI-NATIVE ORG CHART                  │
│                         Total: 7 FTEs                                │
│                  + ~20 Contracted Board Members                      │
└──────────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴──────────┐
                    │   CEO / GM (1)      │
                    │   Julie Blasingim   │
                    │   Strategy, growth, │
                    │   key relationships,│
                    │   board governance  │
                    └─────────┬──────────┘
          ┌──────────────┬────┴────┬──────────────┐
          │              │        │              │
    ┌─────┴─────┐  ┌────┴────┐ ┌─┴──────┐ ┌────┴────────┐
    │ Medical   │  │ Client  │ │ AI     │ │ Operations  │
    │ Director /│  │ Success │ │Platform│ │ & Quality   │
    │ Sr Review │  │ Manager │ │ Lead   │ │ Lead        │
    │ (1 FTE)   │  │ (1 FTE) │ │(1 FTE) │ │ (1 FTE)     │
    │           │  │         │ │        │ │             │
    │ Validates │  │ Key     │ │Builds &│ │ Committee   │
    │ all AI    │  │ account │ │manages │ │ scheduling, │
    │ review    │  │ mgmt,   │ │all AI  │ │ QA, AAHRPP, │
    │ output,   │  │ escala- │ │systems,│ │ compliance, │
    │ chairs    │  │ tions,  │ │OneVerse│ │ sIRB coord  │
    │ board     │  │ client  │ │integra-│ │             │
    │ meetings  │  │ health  │ │tion    │ │             │
    └─────┬─────┘  └─────────┘ └───┬────┘ └─────────────┘
          │                        │
    ┌─────┴──────┐           ┌─────┴──────┐
    │ Associate  │           │ AI         │
    │ Reviewer   │           │ Engineer   │
    │ (1 FTE)    │           │ (1 FTE)    │
    │            │           │            │
    │ Backup     │           │ ML ops,    │
    │ review,    │           │ model      │
    │ edge cases,│           │ training,  │
    │ overflow   │           │ data       │
    │            │           │ pipelines  │
    └────────────┘           └────────────┘

    ┌──────────────────────────────────────────┐
    │         CFO (Part-time / Fractional)      │
    │  Financial oversight, pricing, board      │
    │  reporting. Weekly involvement.            │
    │  (0 additional FTE — outsource or fractional) │
    └──────────────────────────────────────────┘

    ┌──────────────────────────────────────────┐
    │   Contracted Board Members (~20)          │
    │   Physician, scientist, non-scientist,    │
    │   community, ethicist, legal              │
    │   Stipended per meeting. NOT FTEs.        │
    │   Annual cost: ~$200K                     │
    └──────────────────────────────────────────┘
```

### Role Descriptions — AI-Native Univo

| Role | FTE | Salary (Loaded) | Key Responsibilities |
|------|-----|-----------------|---------------------|
| **CEO / GM** | 1.0 | $220K | Strategy, P&L, key client relationships, partner meetings, QHP reporting, board governance, regulatory positioning |
| **Medical Director / Senior Reviewer** | 1.0 | $150K | Validates all AI-generated review briefs, chairs board meetings, makes judgment calls on edge cases, oversees review quality, serves as primary reviewer for novel/complex protocols |
| **Associate Reviewer** | 1.0 | $95K | Backup review validation, handles overflow volume, assists with complex cases, manages safety report review, serves on board |
| **Client Success Manager** | 1.0 | $85K | All client-facing interactions that require human judgment, escalation handling, key account management, new client onboarding, consulting delivery |
| **AI Platform Lead** | 1.0 | $160K | Architecture and development of all AI systems, OneVerse integration, model performance monitoring, vendor management |
| **AI Engineer** | 1.0 | $140K | ML pipeline development, model training on historical review data, data engineering, prompt engineering, system maintenance |
| **Operations & Quality Lead** | 1.0 | $100K | Committee scheduling, AAHRPP compliance, quality metrics, sIRB coordination, board member management, audit preparation |
| **TOTAL** | **7.0** | **$950K** | |
| **CFO (Fractional)** | 0.0* | $75K (contract) | Financial oversight, pricing strategy, QHP reporting. *Not an FTE.* |
| **Board Members (Contracted)** | 0.0* | $200K (stipends) | Attend meetings, vote on determinations. *Not FTEs, compensated per meeting/review.* |

### Technology Architecture — The AI Stack

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         CLIENT-FACING LAYER                             │
│                                                                         │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │
│   │    OneVerse       │  │   ClientAI       │  │   sIRB Portal    │     │
│   │    Portal         │  │   Chatbot &      │  │   (multi-site    │     │
│   │    (enhanced)     │  │   Status Engine   │  │   coordination)  │     │
│   └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘     │
│            └──────────────────────┼──────────────────────┘              │
└────────────────────────────────────┼────────────────────────────────────┘
                                     │
┌────────────────────────────────────┼────────────────────────────────────┐
│                        AI ORCHESTRATION LAYER                           │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐  │
│   │                    ReviewOS™ (Orchestrator)                       │  │
│   │   Manages workflow: submission → AI analysis → human review →    │  │
│   │   board presentation → determination → communication             │  │
│   └────────┬──────────┬──────────┬──────────┬──────────┬────────────┘  │
│            │          │          │          │          │               │
│   ┌────────┴───┐ ┌────┴───┐ ┌────┴───┐ ┌────┴───┐ ┌────┴────────┐    │
│   │ ReviewAI   │ │Amend-  │ │Consent │ │Safety  │ │Continuing   │    │
│   │            │ │mentAI  │ │AI      │ │AI      │ │ReviewAI     │    │
│   │ Protocol   │ │        │ │        │ │        │ │             │    │
│   │ analysis,  │ │Change  │ │Read-   │ │Triage, │ │Data compile,│    │
│   │ risk flag, │ │detect, │ │ability,│ │classify│ │risk re-     │    │
│   │ reg check, │ │classify│ │element │ │urgency,│ │assess,      │    │
│   │ brief gen  │ │impact  │ │check,  │ │pattern │ │narrative    │    │
│   │            │ │assess  │ │align   │ │detect  │ │generation   │    │
│   └────────┬───┘ └────┬───┘ └────┬───┘ └────┬───┘ └──────┬──────┘    │
│            └──────────┴──────────┴──────────┴─────────────┘           │
│                                     │                                  │
│   ┌─────────────────────────────────┼─────────────────────────────┐    │
│   │           SHARED AI SERVICES                                   │    │
│   │                                                                │    │
│   │  ┌────────────┐  ┌────────────┐  ┌─────────────┐              │    │
│   │  │ RegIntelAI │  │ QualityAI  │  │ CommitteeAI │              │    │
│   │  │ Regulatory │  │ Process    │  │ Scheduling, │              │    │
│   │  │ monitoring │  │ monitoring,│  │ packets,    │              │    │
│   │  │ & alerts   │  │ audit prep │  │ minutes     │              │    │
│   │  └────────────┘  └────────────┘  └─────────────┘              │    │
│   └───────────────────────────────────────────────────────────────┘    │
└────────────────────────────────────┼────────────────────────────────────┘
                                     │
┌────────────────────────────────────┼────────────────────────────────────┐
│                        DATA & INFRASTRUCTURE LAYER                      │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │ Vector Database  │  │ LLM Gateway     │  │ Document Store  │        │
│   │ (Pinecone/       │  │ (Claude API +   │  │ (S3 + metadata) │        │
│   │ Weaviate)        │  │ fallback GPT-4) │  │                 │        │
│   │                  │  │                 │  │                 │        │
│   │ Embedded:        │  │ Prompt library, │  │ All protocols,  │        │
│   │ - Historical     │  │ cost tracking,  │  │ consents,       │        │
│   │   reviews        │  │ rate limiting,  │  │ amendments,     │        │
│   │ - Regulations    │  │ audit logging   │  │ determinations  │        │
│   │ - Protocols      │  │                 │  │                 │        │
│   │ - Determinations │  │                 │  │                 │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │ Audit Trail DB  │  │ OneVerse API    │  │ Monitoring &    │        │
│   │ (PostgreSQL)     │  │ Layer           │  │ Observability   │        │
│   │                  │  │ (REST/GraphQL)  │  │ (DataDog/NR)    │        │
│   │ Every AI action  │  │                 │  │                 │        │
│   │ logged with      │  │ Connects AI     │  │ Model accuracy, │        │
│   │ timestamp,       │  │ systems to      │  │ latency, cost,  │        │
│   │ input, output,   │  │ existing        │  │ error rates     │        │
│   │ confidence,      │  │ OneVerse        │  │                 │        │
│   │ human action     │  │ workflows       │  │                 │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
│   Infrastructure: AWS (HIPAA-eligible) | SOC 2 Type II compliant       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Named AI Systems Catalog

| # | System Name | Function | Tech Stack | Build/Buy | Cost | Annual Savings/Impact |
|---|------------|---------|-----------|-----------|------|----------------------|
| 1 | **ReviewAI** | Protocol analysis, risk flagging, regulatory compliance checking, reviewer brief generation, precedent matching | Claude API + RAG (Pinecone) + structured extraction + rules engine | Build | $400K | $553K savings + 3x capacity |
| 2 | **AmendmentAI** | Change detection, classification, impact assessment, routing, determination drafting | Semantic diff engine + Claude API + classification model | Build | $175K | $240K savings |
| 3 | **ConsentAI** | Readability scoring, protocol-consent alignment, regulatory completeness, revision recommendations | NLP pipeline + Flesch-Kincaid + Claude API + rules engine | Build | $100K | $234K savings |
| 4 | **SafetyAI** | Safety report triage, classification, urgency scoring, pattern detection, aggregate analysis | Event classification ML + time-series analysis + Claude API | Build | $100K | $128K savings + better signal detection |
| 5 | **ContinuingReviewAI** | Data compilation, risk re-assessment, narrative generation, compliance checking | Data aggregation + Claude API + rules engine | Build | $75K | $160K savings |
| 6 | **ClientAI** | Chatbot, status automation, onboarding wizard, health scoring, dashboards | Claude API + RAG on FAQs + OneVerse integration + analytics | Build | $75K | $216K savings + better client experience |
| 7 | **CommitteeAI** | Meeting scheduling, packet compilation, AI transcription, minutes generation, action tracking | Calendar optimization + document assembly + Whisper + Claude | Build | $60K | $180K savings |
| 8 | **RegIntelAI** | Regulatory change monitoring, impact assessment, alert generation, training updates | Web scraping + Claude API + alert engine | Build | $60K | $135K savings + first-mover regulatory intelligence |
| 9 | **QualityAI** | Compliance monitoring, audit preparation, deviation detection, SOP management, metrics | Process mining + rules engine + Claude API | Build | $75K | Part of $135K quality savings |
| 10 | **ReviewOS™** | Master orchestrator connecting all AI systems, managing workflow state, routing work | Custom orchestration layer + state machine + OneVerse API | Build | $150K | Enables all other systems |
| 11 | **OneVerse AI Layer** | API integration layer connecting AI systems to existing OneVerse platform | REST/GraphQL API + middleware + authentication | Build | $300K | Foundation for all AI |

### Unit Economics Comparison

| Metric | Current State | AI-Native State | Delta |
|--------|--------------|----------------|-------|
| **Revenue** | $10M | $10M (Year 1) → $25M (Year 3) | +150% |
| **Total FTEs** | 35 | 7 | -80% |
| **Revenue per Employee** | $286K | $1.43M (Yr 1) → $3.57M (Yr 3) | +400-1,150% |
| **Total Labor Cost** | $3.27M | $1.23M (staff + CFO + board) | -63% |
| **Technology Cost** | ~$200K | ~$650K (AI SaaS + infra + maintenance) | +225% |
| **COGS** | $4.0M | $2.4M | -40% |
| **Gross Margin** | 60% | 76% | +16pp |
| **Operating Expenses** | $4.2M | $1.5M | -64% |
| **EBITDA** | $1.8M (18%) | $5.5M (55%) Year 1 | +206% |
| **EBITDA at Scale (Yr 3)** | N/A | $15.5M (62%) at $25M rev | +$13.7M |
| **Protocols/year capacity** | ~500 | ~2,500 | +400% |
| **Cost per protocol review** | ~$8,000 | ~$2,100 | -74% |
| **Review turnaround** | 5-10 days | 1-2 days | -75% |

### Build vs. Buy Matrix

| System | Recommendation | Rationale | Vendor Option (if Buy) |
|--------|---------------|-----------|----------------------|
| ReviewAI | **Build** | Core competitive differentiator. No off-the-shelf IRB review AI exists. Proprietary advantage. | N/A |
| AmendmentAI | **Build** | Custom to IRB workflow. Document diff component can use open-source (diff-match-patch) but classification is proprietary. | Document compare: Draftable API |
| ConsentAI | **Build** | IRB-specific consent analysis doesn't exist off-shelf. Readability scoring uses standard algorithms wrapped in custom workflow. | N/A |
| SafetyAI | **Build** | Domain-specific classification. Could adapt medical NLP but custom training needed. | Base NLP: AWS Comprehend Medical |
| ContinuingReviewAI | **Build** | Tightly integrated with ReviewAI and OneVerse data. | N/A |
| ClientAI | **Hybrid** | Chatbot framework buy, IRB-specific knowledge build. | Intercom Fin / Zendesk AI ($15K/yr) |
| CommitteeAI | **Hybrid** | Scheduling buy, packet assembly and minutes build. | Transcription: Otter.ai ($5K/yr); Scheduling: Calendly ($3K/yr) |
| RegIntelAI | **Build** | No IRB-specific regulatory monitoring exists. Build scraper + analysis. | Alert framework: custom |
| QualityAI | **Build** | Custom process mining on OneVerse data. | N/A |
| ReviewOS™ | **Build** | Core orchestration — must be custom to Univo's workflow. | N/A |
| OneVerse AI Layer | **Build** | Proprietary platform — must build integration layer. | N/A |
| LLM Gateway | **Buy + Configure** | Standard LLM API management. | Anthropic Claude API (primary), OpenAI (fallback). ~$40-60K/yr |
| Vector Database | **Buy** | Off-shelf vector DB with hosted option. | Pinecone ($20K/yr) or Weaviate Cloud ($15K/yr) |
| Infrastructure | **Buy** | Standard cloud. HIPAA-eligible AWS. | AWS ($30-50K/yr) |
| Monitoring | **Buy** | Standard observability. | Datadog or New Relic ($10-15K/yr) |

### "A Day in the Life" — Post-Transformation Univo

**Monday, 9:00 AM — AI-Native Univo IRB**

ReviewOS™ processed 14 new protocol submissions over the weekend. By 7 AM Monday, each has a complete AI-generated reviewer brief sitting in the Medical Director's queue: risk category assessment, regulatory compliance flags, similar protocol precedents (with Univo's historical decisions), suggested questions for investigators, and draft determination language.

**9:00 AM — Medical Director (Dr. Sarah Chen)** opens her ReviewOS™ dashboard. She sees 14 new briefs color-coded by AI confidence: 9 green (high confidence, routine), 4 yellow (moderate — novel elements flagged), 1 red (complex gene therapy with pediatric population). She starts with the red one — ReviewAI has flagged 6 specific regulatory concerns and surfaced 3 similar protocols from Univo's history and 12 from public databases. She spends 45 minutes reviewing the AI analysis, adding her clinical judgment on the risk-benefit profile, and refining the draft stipulations. The 9 green briefs take 5-8 minutes each — she's confirming the AI's work, not recreating it. The 4 yellows take 15-20 minutes each. By 11:30 AM, all 14 are ready for committee.

**9:30 AM — Associate Reviewer (Marcus Williams)** is reviewing 22 amendments that AmendmentAI processed overnight. 18 are classified as administrative (address changes, typo fixes, formatting) or minor (non-substantive procedure adjustments). AmendmentAI has already generated expedited review determinations for these — Marcus validates them in 2-3 minutes each and approves the auto-generated determination letters. The remaining 4 are substantive changes routed to convened board review — AmendmentAI has generated impact assessments and board presentation materials. Marcus reviews the AI summaries, adds his notes, and the packets are auto-queued for Wednesday's board meeting.

**10:00 AM — CEO Julie Blasingim** is on a call with a new mid-size biotech that wants to consolidate their multi-site sIRB work with Univo. The AI-generated client prospecting brief on her screen shows this company runs 8 active protocols across 35 sites — estimated $400K/year in IRB fees. The sIRB portal will onboard their sites automatically. She closes the deal because she can promise 2-day turnaround where Advarra quotes 7-10 days.

**10:30 AM — Client Success Manager (Rebecca Torres)** has 3 flagged client interactions from ClientAI. Two are sponsors whose protocols got stipulations — the AI has drafted response templates explaining the requirements. Rebecca personalizes them and sends. The third is a satisfaction alert: a client's NPS score dropped 15 points — ClientAI identified that their last 3 submissions had longer-than-average turnaround. Rebecca calls the client proactively.

**11:00 AM — AI Platform Lead (David Park)** is reviewing model performance dashboards. ReviewAI's confidence calibration has drifted slightly on cell therapy protocols — it's flagging too many false positives. He adjusts the prompt chain and reprocesses 5 recent cell therapy reviews as a validation set. The accuracy returns to target. He also sees that AmendmentAI's routing accuracy hit 97.2% last month — up from 94.1% when launched.

**2:00 PM — Board Meeting (convened, virtual)** Dr. Chen chairs the meeting with 7 board members (contracted). CommitteeAI has distributed the meeting packet — 6 initial reviews and 4 substantive amendments. Each item has a ReviewAI/AmendmentAI brief, plus Dr. Chen's annotations. The board discusses each protocol, asks questions, and votes. AI transcription captures everything. By 4:00 PM, CommitteeAI has generated draft minutes and determination letters. Dr. Chen reviews the minutes — 5-minute task. Letters go out by 4:30 PM. Total board-meeting-to-client-notification: same day.

**4:30 PM — Operations & Quality Lead (Amy Nguyen)** reviews QualityAI's compliance dashboard. All AAHRPP metrics are green. RegIntelAI flagged an FDA draft guidance on AI in clinical trials published today — it auto-generated an impact assessment for Univo's operations and a suggested response. Amy reads it and flags it for Julie's strategic review. She also confirms Wednesday's board meeting quorum — CommitteeAI has already confirmed attendance from 8 of 12 scheduled members.

**End of day:** Univo processed 14 initial reviews, 22 amendments, 8 continuing reviews, 35 safety reports, and served 45 client interactions. With the old 35-person team, this was a full week's work. With 7 people and AI, it was Monday.

---

## Phase 3: Regulatory & Risk Deep Dive

### Regulatory Constraint Map

| Regulation | Specific Requirement | Human Execution Required? | AI Permissible? | Minimum Human Involvement | Univo AI Strategy |
|------------|---------------------|--------------------------|----------------|--------------------------|-------------------|
| **21 CFR 56.107** | IRB must have ≥5 members with diverse backgrounds (physician, non-scientist, unaffiliated member) | YES — board composition is a hard human requirement | AI cannot be a board member | ≥5 qualified humans must serve on the board | Maintain contracted board roster of ~20 members. AI reduces their prep time, not their role. |
| **21 CFR 56.108(a)** | IRB must follow written procedures | NO — procedures can be AI-executed if documented | YES — AI execution with documented procedures is compliant | Human-approved SOPs that describe AI processes | Document all AI systems in SOPs. QualityAI maintains procedure compliance. |
| **21 CFR 56.108(b)** | IRB must maintain complete records | NO — record-keeping can be automated | YES — AI audit trails can exceed human record quality | Human oversight of record completeness | Audit trail DB logs every AI action with inputs, outputs, confidence levels. Superior to manual records. |
| **21 CFR 56.109(a)** | IRB must review research at convened meetings (except expedited) | YES — convened meetings require human presence | AI cannot convene or vote | ≥5 members present, quorum required, vote required | Board meetings continue with humans. AI prepares everything, humans deliberate and decide. |
| **21 CFR 56.110** | Expedited review for minor changes and continuing review of minimal-risk research | PARTIALLY — authorized reviewer(s) must approve | AI can prepare; reviewer signs off | 1 qualified reviewer for expedited determinations | AmendmentAI handles classification and routes to appropriate pathway. Human reviewer signs expedited. |
| **21 CFR 50.25** | Required elements of informed consent | NO — element checking is a verification task | YES — checklist verification is a natural AI task | Human confirmation that AI checked correctly | ConsentAI verifies all 21 CFR 50.25(a) and (b) elements present. 100% accuracy achievable. |
| **AAHRPP Standard I.1** | Organization has written policies and procedures | NO — AI can maintain and monitor SOPs | YES | Human approval of policies | QualityAI maintains living SOP documents. Human approves changes. |
| **AAHRPP Standard II.2** | IRB authority and resources | PARTIALLY — must have adequate expertise | AI is a resource that enhances expertise | Must demonstrate human expertise remains central | Position AI as "force multiplier" for expert reviewers, not replacement. |
| **AAHRPP Standard II.4** | Review process ensures informed consent | NO — process review is verifiable | YES — NLP may improve consent quality | Human determines consent adequacy | ConsentAI performs more thorough analysis than manual review. Present to AAHRPP as quality improvement. |
| **HIPAA** | PHI protection in research protocols | NO — security controls can be technical | YES — with BAA, encryption, access controls | HIPAA Security Officer (can be part-time) | All AI systems on HIPAA-eligible AWS. BAA with Anthropic (Claude). Data encrypted at rest and in transit. |
| **Common Rule (45 CFR 46)** | Federal research oversight requirements | Same as 21 CFR 50/56 for FDA-regulated research | Same | Same | Aligned approach |

### The Regulatory Floor — Irreducible Human Minimum

| Requirement | Minimum Humans | Role | Cannot Be Eliminated Because |
|-------------|---------------|------|------------------------------|
| Board members for convened review | ~5-8 per meeting (from roster of ~20) | Vote on protocol approval/modification/disapproval | 21 CFR 56.107/56.109 — explicit statutory requirement for qualified human board |
| Authorized reviewer for expedited review | 1 per determination | Sign off on expedited review decisions | 21 CFR 56.110 — must be IRB chair or experienced member |
| IRB Chair/Medical Director | 1 | Chairs meetings, oversees review quality | FDA/AAHRPP expect named, qualified chair |
| Quality/Compliance oversight | 1 (can be part-time) | AAHRPP accreditation, FDA inspection readiness | Accreditation bodies expect designated compliance function |

**Total regulatory floor: 1 full-time Medical Director + ~20 contracted board members** (who attend 2-4 meetings/month each). Everything else — preparation, analysis, drafting, scheduling, communication, monitoring — can be AI-executed with human oversight.

### Risk Register

| # | Risk | Category | Likelihood | Impact | Severity | Mitigation Strategy |
|---|------|----------|-----------|--------|----------|---------------------|
| 1 | **AI misses critical safety concern in protocol** | Technical | Medium | Critical | HIGH | Multi-layer validation: ReviewAI flags + Medical Director validates 100% of reviews + board discusses. Confidence scoring — anything below 90% confidence auto-escalates to human deep review. Monthly accuracy audits against human gold-standard reviews. |
| 2 | **AAHRPP questions AI-assisted review process during accreditation audit** | Regulatory | Medium | High | HIGH | Proactive AAHRPP engagement before implementation. Position AI as "quality improvement tool" that enhances reviewer capabilities. Document all AI processes in SOPs. Show audit trail superiority. Prepare demonstration for auditors. |
| 3 | **FDA determines AI preparation constitutes "AI review" (not human review)** | Regulatory | Low | Critical | MEDIUM | Legal analysis documenting that AI performs PREPARATION (analysis, flagging, summarizing) while humans perform REVIEW (judgment, deliberation, voting). Clear separation in system design. All determination letters signed by qualified humans. Published ethical framework. |
| 4 | **AI generates inaccurate review brief that human reviewer doesn't catch** | Technical | Medium | High | HIGH | Establish "trust but verify" culture. Randomized deep audits of AI output (10% sample). Error tracking and trending. Mandatory human attention to all AI "flags" (can't dismiss without documented rationale). Dual-reviewer requirement for highest-risk protocols. |
| 5 | **Client sponsors uncomfortable with AI-assisted review of their protocols** | Reputational | Medium | Medium | MEDIUM | Marketing positioning: "AI-enhanced review means more thorough, faster, more consistent analysis." Transparency option: clients can view the AI analysis alongside human review. Case studies showing improved quality metrics. Offer "premium human-only review" option at 3x price (nobody will take it). |
| 6 | **Key staff resist transformation and leave** | People | Medium | Medium | MEDIUM | Transparent communication about the plan. Remaining roles are HIGHER value (reviewer → reviewer who oversees AI fleet). Retention bonuses for critical staff during transition. Generous severance for displaced roles. Phased implementation to manage change. |
| 7 | **AI systems hallucinate regulatory requirements or fabricate precedents** | Technical | Medium | High | HIGH | RAG architecture grounded in verified regulatory text (not parametric memory). Citation requirement — every AI claim must reference source document. Hallucination detection layer (semantic consistency checking). Regular validation against ground-truth regulatory database. |
| 8 | **Competitor (Advarra/WCG) launches similar AI-native product first** | Competitive | Medium | Medium | MEDIUM | Speed of execution is the mitigation. Univo's advantage: small, nimble, faster decision-making. 12-month build timeline vs. Advarra's enterprise deployment cadence (likely 18-24 months). First-mover in "AI-native IRB" category, not "AI-assisted big IRB." |
| 9 | **Data breach of protocol/research documents** | Cybersecurity | Low | Critical | MEDIUM | HIPAA-eligible AWS infrastructure. SOC 2 Type II compliance. Encryption at rest and in transit. Access controls and audit logging. Claude API BAA. No local data storage. Incident response plan. Annual penetration testing. |
| 10 | **Systemic AI bias in review recommendations** | Technical/Ethical | Low | High | MEDIUM | Regular bias audit: compare AI recommendations across demographics, therapeutic areas, sponsor sizes. Diverse board composition provides check. Transparent AI methodology published. Independent third-party AI audit annually. |

### Regulatory Positioning Playbook

**Strategy:** Get ahead of the conversation. Don't wait for regulators to ask about AI — proactively brief them and frame the narrative.

| Action | Timeline | Target Audience | Key Message |
|--------|----------|----------------|-------------|
| Publish white paper: "AI-Assisted Ethical Review: Enhancing Human Judgment" | Month 3 | FDA, OHRP, IRB community | AI is a tool that makes human reviewers better, not a replacement for human judgment |
| Request pre-implementation meeting with OHRP | Month 4 | OHRP | "We want your feedback on our approach before we implement" — positions Univo as responsible innovator |
| Present at AAHRPP conference on AI in IRB operations | Month 6 | AAHRPP, peer IRBs | Thought leadership + accreditation body relationship building |
| Brief AAHRPP accreditation team on AI methodology | Month 8 | AAHRPP auditors | Pre-audit education ensures auditors understand and accept the approach |
| Submit comment on FDA AI guidance (when published) | Reactive | FDA | Shape regulatory framework from a position of operational expertise |
| Publish IRB AI ethics framework | Month 6 | Industry | Establish Univo as the ethical AI leader in IRB space |

---

## Phase 4: Financial Model

### Current State P&L (Estimated)

| Line Item | Amount | % of Revenue |
|-----------|--------|-------------|
| **Revenue** | $10.0M | 100% |
| Protocol review fees | $5.5M | 55% |
| Amendment/continuing review fees | $2.5M | 25% |
| Consulting & other services | $1.0M | 10% |
| sIRB coordination fees | $1.0M | 10% |
| **COGS** | | |
| Review staff labor | $1.90M | 19% |
| Board member compensation | $0.20M | 2% |
| Technology (OneVerse) | $0.20M | 2% |
| Direct costs | $0.10M | 1% |
| **Total COGS** | $2.40M | 24% |
| **Gross Profit** | $7.60M | 76% |
| **Operating Expenses** | | |
| Client services & admin labor | $0.72M | 7% |
| Executive compensation | $0.90M | 9% |
| IT & technology staff | $0.32M | 3% |
| Finance/HR/admin labor | $0.14M | 1% |
| Rent & facilities | $0.40M | 4% |
| Insurance & professional fees | $0.30M | 3% |
| Marketing & business development | $0.20M | 2% |
| General & administrative | $0.32M | 3% |
| **Total OpEx** | $3.30M | 33% |
| **EBITDA** | **$1.80M** | **18%** |
| D&A | $0.50M | 5% |
| **EBIT** | $1.30M | 13% |

### Transformation Investment (24 Months)

| Category | Year 1 | Year 2 | Total |
|----------|--------|--------|-------|
| **AI System Development** | | | |
| ReviewAI (core engine) | $300K | $100K | $400K |
| AmendmentAI | $125K | $50K | $175K |
| ConsentAI | $80K | $20K | $100K |
| SafetyAI | $75K | $25K | $100K |
| ContinuingReviewAI | $50K | $25K | $75K |
| ClientAI | $50K | $25K | $75K |
| CommitteeAI | $40K | $20K | $60K |
| RegIntelAI | $40K | $20K | $60K |
| QualityAI | $50K | $25K | $75K |
| ReviewOS™ (orchestrator) | $110K | $40K | $150K |
| **OneVerse AI Layer** | $200K | $100K | $300K |
| **Subtotal: Development** | **$1.12M** | **$0.45M** | **$1.57M** |
| **Infrastructure & SaaS** | | | |
| LLM API costs (Claude, fallback) | $40K | $50K | $90K |
| Vector database (Pinecone) | $15K | $20K | $35K |
| AWS HIPAA infrastructure | $30K | $40K | $70K |
| Monitoring & observability | $10K | $12K | $22K |
| SaaS tools (Otter, Intercom, etc.) | $20K | $25K | $45K |
| **Subtotal: Infrastructure** | **$115K** | **$147K** | **$262K** |
| **People & Transition** | | | |
| Severance (28 displaced FTEs) | $250K | $0 | $250K |
| Change management & training | $30K | $15K | $45K |
| **Subtotal: Transition** | **$280K** | **$15K** | **$295K** |
| **TOTAL INVESTMENT** | **$1.52M** | **$0.61M** | **$2.13M** |

**Note on severance:** $250K for 28 FTEs = average ~$9K per person (~4-6 weeks salary). Phased over 18 months — not all at once. North Carolina has minimal notice requirements. Many reductions will happen through attrition as capacity grows.

### Target State P&L — Year 1 (Transformation Year)

| Line Item | Amount | % of Revenue | Delta vs Current |
|-----------|--------|-------------|-----------------|
| **Revenue** | $12.0M | 100% | +$2.0M (capacity increase begins) |
| **COGS** | | | |
| Review staff labor (2 reviewers) | $0.25M | 2% | -$1.65M |
| Board member compensation | $0.20M | 2% | — |
| AI platform costs (LLM, infra, SaaS) | $0.35M | 3% | +$0.15M |
| Technology staff (2 AI eng + platform) | $0.30M | 3% | +$0.10M |
| **Total COGS** | $1.10M | 9% | -$1.30M |
| **Gross Profit** | $10.90M | 91% | +$3.30M |
| **Operating Expenses** | | | |
| Remaining staff labor (CEO, client mgr, ops lead) | $0.41M | 3% | -$0.65M |
| Fractional CFO | $0.08M | 1% | +$0.08M |
| Rent (downsized) | $0.20M | 2% | -$0.20M |
| Insurance & professional fees | $0.25M | 2% | -$0.05M |
| Marketing & business development | $0.30M | 3% | +$0.10M |
| General & administrative | $0.20M | 2% | -$0.12M |
| **Total OpEx** | $1.44M | 12% | -$1.86M |
| **EBITDA** | **$5.46M** | **46%** | **+$3.66M** |

### Target State P&L — Year 3 (Full Scale)

| Line Item | Amount | % of Revenue | Delta vs Current |
|-----------|--------|-------------|-----------------|
| **Revenue** | $25.0M | 100% | +$15.0M |
| Protocol review fees | $12.5M | 50% | |
| Amendment/continuing review fees | $6.0M | 24% | |
| sIRB coordination fees | $4.0M | 16% | |
| AI consulting & platform fees | $1.5M | 6% | |
| IRB-as-a-Service platform | $1.0M | 4% | |
| **COGS** | $1.80M | 7% | |
| **Gross Profit** | $23.20M | 93% | |
| **Operating Expenses** | $2.15M | 9% | |
| Additional staff (2-3 hires at scale) | $0.40M | 2% | 10 FTEs at scale |
| Increased marketing (growth investment) | $0.50M | 2% | |
| Other OpEx | $1.25M | 5% | |
| **EBITDA** | **$15.50M** | **62%** | **+$13.70M** |

### Key Financial Metrics

| Metric | Current | Year 1 | Year 3 | Delta |
|--------|---------|--------|--------|-------|
| **Revenue** | $10.0M | $12.0M | $25.0M | +150% |
| **FTEs** | 35 | 12* | 10 | -71% to -80% |
| **Revenue/Employee** | $286K | $1.0M | $2.5M | +775% |
| **EBITDA** | $1.8M | $5.5M | $15.5M | +761% |
| **EBITDA Margin** | 18% | 46% | 62% | +44pp |
| **Total Labor Cost** | $3.27M | $1.73M* | $1.45M | -56% |
| **Tech/AI Cost** | $0.20M | $0.65M | $0.85M | +325% |
| **Protocols/Year** | ~500 | ~1,000 | ~2,500 | +400% |
| **Cost per Protocol** | $8,000 | $4,200 | $2,100 | -74% |
| **Review Turnaround** | 5-10 days | 2-3 days | 1-2 days | -75% |

*Year 1 has ~12 FTEs because transformation is gradual — staff reduces from 35 to ~7 over 18 months. Year 1 is the transition year with blended headcount.

### Investment Returns & Value Creation

| Metric | Value |
|--------|-------|
| **Total Investment (24 months)** | $2.13M |
| **Annual Savings (labor reduction)** | $2.35M |
| **Annual Revenue Uplift (capacity)** | $2.0M Year 1, $15M Year 3 |
| **Payback Period** | ~11 months |
| **3-Year ROI** | 620% |
| **3-Year Cumulative Net Benefit** | $15.3M (savings + growth) |

### Enterprise Value Impact

| Scenario | EBITDA | Multiple | Enterprise Value | Value Created |
|----------|--------|----------|-----------------|---------------|
| **Current** | $1.8M | 12x | $21.6M | — |
| **Post-Transform (same volume)** | $5.5M | 14x* | $77.0M | $55.4M |
| **Post-Transform (2.5x volume)** | $15.5M | 15x* | $232.5M | $210.9M |

*Multiple expansion justified: AI-native tech platform commands higher multiple than labor-dependent services company. Recurring/scalable revenue model. Defensible technology moat. Comparable AI-enabled healthcare services companies trade at 15-20x EBITDA.

**At the portfolio level: $2.1M investment → $55-211M in enterprise value creation = 26-100x MOIC on AI spend.**

---

## Phase 5: Implementation Roadmap

### Quick Wins — Months 1-3

| # | Initiative | Investment | Owner | Success Metric | FTE Impact |
|---|-----------|-----------|-------|---------------|-----------|
| 1 | **ConsentAI MVP** — Deploy NLP readability + regulatory completeness checker for informed consent forms | $60K | AI Platform Lead | Consent review time -50%; 100% 21 CFR 50.25 element coverage | -1 FTE |
| 2 | **AmendmentAI v1** — Implement document diff engine + change classification for amendments | $80K | AI Platform Lead | Amendment classification accuracy >92%; processing time -40% | -1 FTE |
| 3 | **ClientAI Status Automation** — Connect OneVerse submission status to automated email/SMS client updates | $25K | AI Platform Lead + Client Success | 80% reduction in status inquiry volume | -0.5 FTE |
| 4 | **CommitteeAI Transcription** — Deploy AI meeting transcription → summary → draft minutes | $15K | Operations Lead | Minutes turnaround: 2-3 days → same day | -0.5 FTE |
| 5 | **Hire AI Platform Lead** — Recruit senior AI/ML engineer to own the platform | $40K (recruiting) | CEO | Hire in place by Month 2 | +1 FTE |
| 6 | **Historical Review Data Extraction** — Structure and embed Univo's historical review corpus into vector DB | $30K | AI Platform Lead | ≥2,000 reviews embedded and searchable | Foundation |

**Month 3 checkpoint:** 4 AI systems in production. Consent and amendment review running 40-50% faster. 3 FTEs reduced through attrition/reassignment. Team has seen AI in action — credibility established.

### Foundation — Months 3-6

| # | Initiative | Investment | Owner | Success Metric | FTE Impact |
|---|-----------|-----------|-------|---------------|-----------|
| 7 | **ReviewAI v1** — Protocol analysis engine: extraction, risk classification, regulatory checking, brief generation | $200K | AI Platform Lead | Reviewer brief generation: 80% AI-complete; review time -60% | -3 FTE |
| 8 | **OneVerse AI Layer** — Build API integration connecting AI systems to OneVerse workflows | $150K | AI Platform Lead + IT | All AI systems integrated with OneVerse submission pipeline | Foundation |
| 9 | **Hire AI Engineer** — Second technical hire for ML ops and data engineering | $35K (recruiting) | AI Platform Lead | Hire in place by Month 4 | +1 FTE |
| 10 | **ReviewOS™ v1** — Orchestration layer routing submissions through AI pipeline → human queue | $80K | AI Platform Lead | End-to-end automated workflow for standard submissions | Foundation |
| 11 | **RegIntelAI MVP** — Regulatory monitoring for FDA, OHRP, ICH changes | $40K | Operations/Quality Lead | Automated regulatory alerts within 24 hours of publication | -0.5 FTE |
| 12 | **AAHRPP Pre-Engagement** — Brief AAHRPP on AI methodology, seek informal feedback | $10K (travel/legal) | CEO | Written feedback from AAHRPP confirming AI-assisted approach is acceptable | Risk reduction |

**Month 6 checkpoint:** ReviewAI handling 80% of protocol review prep work. Amendment and consent review largely AI-driven. 6-7 FTEs reduced. Capacity already increasing — taking on new clients. AAHRPP relationship established.

### Core Replacement — Months 6-12

| # | Initiative | Investment | Owner | Success Metric | FTE Impact |
|---|-----------|-----------|-------|---------------|-----------|
| 13 | **ReviewAI v2** — Enhanced: precedent matching, quality scoring, complex protocol handling (gene therapy, pediatric) | $100K | AI Platform Lead | Auto-handle 90% of protocol review prep; turnaround: 2-3 days | -3 FTE |
| 14 | **SafetyAI** — Safety report triage, classification, pattern detection | $100K | AI Engineer | Safety report processing: 85% automated triage | -1 FTE |
| 15 | **ContinuingReviewAI** — Automated data compilation, risk re-assessment, renewal prep | $75K | AI Engineer | Continuing review prep: 90% automated | -1 FTE |
| 16 | **QualityAI** — Compliance monitoring, audit preparation, deviation detection | $75K | Operations Lead | Continuous AAHRPP compliance monitoring; audit prep: 3 days vs. 3 weeks | -0.5 FTE |
| 17 | **Office Downsizing** — Move from current office to smaller space (7 people don't need 35-person office) | Savings: $200K/yr | CEO / CFO | Facility cost reduction | Cost savings |
| 18 | **Workforce Transition Completion** — Final severance, outplacement for remaining displaced staff | $150K | CEO | All transitions handled respectfully and legally | Final FTE reduction |

**Month 12 checkpoint:** All core AI systems operational. Headcount at ~10-12 (approaching target). Turnaround times at 2-3 days (industry-leading). Capacity at 2x current. EBITDA margin crossing 40%. Advarra clients noticing Univo's speed advantage.

### Advanced Automation & Scale — Months 12-24

| # | Initiative | Investment | Owner | Success Metric | FTE Impact |
|---|-----------|-----------|-------|---------------|-----------|
| 19 | **sIRB-AI Platform** — Purpose-built sIRB coordination platform for multi-site management at scale | $100K | AI Platform Lead | Handle 50+ multi-site programs; site onboarding: 2 days vs. 2 weeks | Revenue growth |
| 20 | **IRB-as-a-Service (IRBaaS)** — White-label AI review platform for academic IRBs to outsource review prep | $150K | AI Platform Lead | 5 institutional customers; $1M incremental revenue | New revenue line |
| 21 | **ReviewAI v3** — Self-improving: learns from board decisions to improve future recommendations | $50K | AI Engineer | Recommendation accuracy: 95%+ alignment with board decisions | Quality |
| 22 | **Aggressive Growth Push** — Use AI speed advantage + sIRB capability to win market share from Advarra/WCG | $200K (marketing + BD) | CEO | Revenue: $15M → $25M trajectory | Revenue |
| 23 | **Cross-Portfolio Integration** — Connect Univo AI with Vector Clinical Trials, Lexitas | $50K | QHP / AI Platform Lead | Integrated clinical trial startup workflow | Portfolio value |
| 24 | **Industry Thought Leadership** — Conference presentations, publications, FDA engagement on AI in IRB | $50K | CEO + Medical Director | 3+ conference presentations; 2+ publications | Brand + regulatory |

**Month 24 checkpoint:** Univo operating with ~7-8 FTEs at $18-25M revenue run rate. EBITDA margin >55%. Industry recognition as the AI-native IRB. sIRB market share growing. IRBaaS platform generating initial revenue. Enterprise value 4-10x pre-transformation levels.

### Change Management Strategy

| Element | Approach |
|---------|---------|
| **Narrative** | "We're not cutting people — we're transforming Univo into an AI-native company that will be 5x its current size. Some current roles will evolve, some will be eliminated, but the company that emerges will be the leader in its industry." |
| **Communication** | Julie Blasingim delivers all-hands at Month 0 with honest messaging. Monthly updates. Individual role conversations by Month 2. |
| **Severance** | 4-8 weeks salary + benefits continuation. Outplacement support. Reference letters. Announced at time of role change, not in advance. |
| **Retention** | Key keeper staff (Medical Director, Operations Lead) get retention bonuses (20-30% of salary) tied to 18-month stay. |
| **upskilling** | Remaining staff trained on AI systems. "AI reviewer" is a higher-skill role than "manual reviewer." Career growth narrative. |
| **Timing** | Phased reductions over 12 months. No single "layoff event." Natural attrition + role evolution + performance-managed exits. |

### Dependencies & Prerequisites

| Dependency | Required By | Owner | Status |
|-----------|------------|-------|--------|
| QHP partner buy-in on aggressive transformation | Month 0 | Jeff Frazier | Present this document |
| CEO alignment on vision | Month 0 | Jeff Frazier + Julie Blasingim | Briefing needed |
| AI Platform Lead hire | Month 2 | CEO | Job posting needed |
| OneVerse API access/documentation | Month 1 | IT Team | Request from current IT |
| Historical review data access | Month 1 | VP Operations | Data extraction needed |
| HIPAA BAA with Anthropic (Claude) | Month 1 | AI Platform Lead | Standard process |
| AWS HIPAA-eligible environment setup | Month 2 | AI Platform Lead | Standard process |
| Legal review of AI in review process | Month 2 | Outside counsel | Engage healthcare regulatory attorney |
| AAHRPP informal consultation | Month 4 | CEO | Schedule meeting |
| Board member roster for post-transformation | Month 6 | CEO | May need to recruit additional specialty members |

---

## Phase 6: Cross-Portfolio Opportunities

### 1. Shared AI Systems

| AI System Built for Univo | Applicable to Other Portcos | Adaptation Needed | Value |
|--------------------------|---------------------------|-------------------|-------|
| **ReviewAI** (document analysis + regulatory checking) | Lexitas (protocol analysis for CRO), Vector (regulatory document review) | Moderate — different regulatory frameworks but same core NLP architecture | $200K savings across portcos |
| **ConsentAI** (NLP consent analysis) | Vector (site consent review), any portco touching patient consent | Low — consent analysis is universal | $100K savings + faster startup |
| **RegIntelAI** (regulatory monitoring) | ALL portfolio companies (FDA, HIPAA, state regs) | Low — different regulatory feeds but same architecture | $300K+ savings across portfolio; single regulatory intelligence platform for all portcos |
| **CommitteeAI** (meeting management) | Applied StemCell (SAB meetings), Azurity (board meetings), all portcos | Very Low — generic meeting AI | $150K savings across portcos |
| **QualityAI** (compliance monitoring) | Bend Bioscience (cGMP compliance), Azurity (quality systems), Lexitas (GCP compliance) | Moderate — different quality frameworks | $200K savings across portcos |
| **LLM Gateway** (centralized API management) | ALL portfolio companies | None — shared infrastructure | $100K+ savings (volume discounts on API costs) |

### 2. Data Synergies

| Data Flow | From → To | Value |
|-----------|----------|-------|
| **Protocol intelligence** | Univo review corpus → AutoCruitment | AutoCruitment can understand protocol complexity to better predict recruitment difficulty and pricing |
| **IRB turnaround benchmarks** | Univo → Vector Clinical Trials | Vector sites can set accurate timelines for study startup based on Univo's AI-accelerated turnaround |
| **Regulatory intelligence** | Univo RegIntelAI → COPILOT, InformedDNA | Payer-adjacent and genetic testing companies benefit from shared regulatory change monitoring |
| **Consent best practices** | Univo ConsentAI → Lexitas, Vector | Consent quality insights from Univo's NLP analysis improve consent forms across clinical portfolio |
| **Clinical trial landscape** | Univo protocol data → QHP deal sourcing | Aggregate view of trial activity by therapeutic area informs QHP's deal pipeline (what's hot, what's not) |

### 3. Univo + Vector: The Clinical Trial Startup Accelerator

This is the highest-value cross-portfolio play:

**Current state:** When a sponsor starts a multi-site trial, they submit to Univo for IRB review AND engage Vector sites for enrollment. These are separate, disconnected processes.

**AI-native state:** A single integrated platform where:
1. Sponsor submits protocol
2. Univo's ReviewAI analyzes in hours (not days)
3. AI simultaneously evaluates which Vector sites are optimal for this protocol (geography, demographics, therapeutic experience)
4. IRB approval and site activation happen in parallel, not sequentially
5. AutoCruitment's AI begins generating recruitment campaigns the moment the protocol is approved

**Impact:** Study startup from protocol submission to first patient enrolled goes from **90-120 days to 30-45 days**. This is the #1 pain point in clinical trials and the #1 reason sponsors choose faster IRBs and sites. A QHP-integrated "submission-to-enrollment" platform is a **massive competitive advantage** that no competitor can replicate because no competitor owns an IRB, a site network, AND a recruitment company.

**Estimated value of integrated platform:** $50-100M in incremental revenue across the three companies within 5 years. This is the kind of portfolio synergy that PE firms dream about.

### 4. Platform Plays — External Revenue

| Platform Opportunity | Description | TAM | Timeline |
|---------------------|-------------|-----|----------|
| **IRBaaS (IRB-as-a-Service)** | White-label Univo's AI review platform for academic IRBs that want AI-assisted review but can't build it themselves | $50-100M (>500 academic IRBs in the US) | 18-24 months |
| **ConsentIQ** | Standalone SaaS product: ICF readability and regulatory compliance analysis for any organization writing consent forms | $20-40M (sponsors, CROs, sites all need this) | 12 months |
| **ProtocolIQ** | AI protocol analysis as a standalone product: sponsors submit protocols for pre-IRB optimization | $30-50M (sponsors want to know what IRBs will flag before they submit) | 18 months |
| **RegWatch** | Regulatory intelligence subscription: real-time FDA/OHRP/ICH monitoring for clinical trial professionals | $10-20M | 6 months (fast to build) |

**Total external platform TAM: $110-210M.** Even capturing 5-10% = $5.5-21M in high-margin SaaS revenue. This transforms Univo from a services company into a **platform company**, which commands 15-25x EBITDA multiples vs. 10-12x for services.

---

## Appendix A: Named AI Systems Catalog

| # | System | Description | Architecture | Build/Buy | Build Cost | Annual Run Cost | Annual Impact |
|---|--------|------------|-------------|-----------|-----------|----------------|---------------|
| 1 | **ReviewAI** | Protocol analysis engine: extracts study design, flags risks, checks regulatory compliance, finds precedent protocols, generates reviewer briefs | Claude API → structured extraction pipeline → RAG (Pinecone, embedded regulations + historical reviews) → risk classification model → report generator | Build | $400K | $80K (LLM + infra) | $553K savings + 3x capacity |
| 2 | **AmendmentAI** | Amendment processing: document diff, change classification, impact assessment, review pathway routing, determination drafting | Semantic diff engine → Claude API classification → impact analysis rules engine → routing logic → template-based drafting | Build | $175K | $30K | $240K savings |
| 3 | **ConsentAI** | Informed consent analysis: readability scoring, protocol-ICF alignment, regulatory element verification, revision recommendations | Flesch-Kincaid + clinical vocab scorer → NLP semantic comparison (Claude) → 21 CFR 50.25 rules checker → report generator | Build | $100K | $20K | $234K savings |
| 4 | **SafetyAI** | Safety report triage: intake classification, urgency scoring, pattern detection, aggregate analysis, deadline tracking | NLP classifier (fine-tuned) → priority scoring algorithm → time-series anomaly detection → Claude summary → alert engine | Build | $100K | $25K | $128K savings + signal detection |
| 5 | **ContinuingReviewAI** | Continuing review automation: data compilation, risk re-assessment, narrative generation, compliance verification | Data aggregation from OneVerse → risk re-scoring model → Claude narrative generation → compliance rules checker | Build | $75K | $15K | $160K savings |
| 6 | **ClientAI** | Client communication: chatbot, status automation, onboarding, health scoring, dashboards | Intercom Fin (chatbot) + OneVerse webhook triggers (status) + Claude (draft responses) + analytics dashboard | Hybrid | $75K | $25K | $216K savings + NPS improvement |
| 7 | **CommitteeAI** | Meeting management: scheduling, packet assembly, transcription, minutes, action tracking, quorum management | Calendar API + document assembly engine + Whisper transcription → Claude minutes generation → action item tracker | Hybrid | $60K | $15K | $180K savings |
| 8 | **RegIntelAI** | Regulatory monitoring: FDA/OHRP/ICH change detection, impact assessment, alerts, training updates | Web scraping (Scrapy) → change detection → Claude impact analysis → alert engine → training content generator | Build | $60K | $15K | $135K savings + competitive intel |
| 9 | **QualityAI** | Compliance management: AAHRPP monitoring, audit prep, deviation detection, SOP management, metrics | Process mining on OneVerse data → rules engine → Claude SOP drafting → dashboard generator | Build | $75K | $15K | Included in compliance savings |
| 10 | **ReviewOS™** | Master orchestrator: routes submissions through AI pipeline, manages workflow state, queues human review, tracks SLAs | Custom state machine → event-driven architecture → OneVerse API integration → notification engine → SLA tracker | Build | $150K | $20K | Enables all other systems |
| 11 | **OneVerse AI Layer** | Integration layer: REST/GraphQL API connecting all AI systems to OneVerse platform | API gateway → middleware → authentication → data transformation → webhook management | Build | $300K | $30K | Foundation for all AI |
| | **TOTALS** | | | | **$1.57M** | **$290K/yr** | **$2.35M/yr savings** |

---

## Appendix B: The Uncomfortable Truth

### What Will Be Hardest

**1. Julie Blasingim may not want to fire 80% of her team.**
She was promoted from within. These are her colleagues, maybe her friends. Telling a CEO to eliminate 28 people at a 35-person company is asking her to fundamentally transform the organization she was just put in charge of. This is an emotional challenge, not a logical one. Jeff needs to have a direct, honest conversation: "This is the path to making Univo a $200M company. The alternative is Advarra eats your lunch in 3 years."

**2. The 28 people being displaced are real humans with mortgages.**
Univo is in Raleigh, NC — not a tech hub with endless AI jobs. Most displaced staff are IRB coordinators and document reviewers with niche skills. The ethical imperative: generous severance, outplacement services, and honest timelines. Don't pretend "everyone will find new roles." Some will. Some won't. Own it.

**3. AAHRPP accreditation is Univo's oxygen — losing it would be fatal.**
If AAHRPP decides that AI-assisted review doesn't meet their standards, Univo loses accreditation, which means losing most clients. The proactive engagement strategy mitigates this, but it's the single biggest existential risk. Jeff should personally attend the AAHRPP briefing to give it gravitas.

**4. The first AI error will be used to argue against the entire transformation.**
It's not "if" ReviewAI makes a mistake — it's "when." When it happens, internal skeptics will say "see, we can't trust AI." The counter-narrative must be pre-loaded: "Humans make errors too — we catch them the same way. The question isn't perfection, it's whether AI + human catches more errors than human alone." (Spoiler: it does.)

**5. Board members may resist if they feel diminished.**
Contracted board members might feel that AI is reducing their role to "rubber stamping." The reality: AI is making their job EASIER by giving them better briefs. But perception matters. Communicate to board members that AI helps them focus on what matters — ethical judgment — instead of slogging through poorly formatted protocol documents.

**6. Sponsors might initially be wary.**
Some biotech sponsors might worry about AI reviewing their protocols. The response: "Our AI performs more thorough analysis than any individual human reviewer — it checks every regulation, compares against every precedent, and never has a bad day. Your protocol gets BETTER review, not worse." Offer to show them the AI analysis alongside the human review to build trust.

**7. The real competition isn't Advarra — it's inertia.**
Advarra and WCG won't move as fast on AI-native review because they're big, risk-averse, and profitable. The bigger risk is Univo's own leadership deciding "we're doing fine, let's be cautious." Caution is death for a #3 player. The entire thesis is speed: get to AI-native before the big players figure it out.

**8. Seven people is a company that has zero redundancy.**
If the Medical Director gets sick, who validates reviews? If the AI Platform Lead quits, who maintains the systems? At 7 FTEs, every person is critical. Mitigation: cross-training, documentation, and a plan to flex to 10 FTEs if volume growth justifies it. But the vulnerability is real at minimum staffing.

**9. The financial model assumes aggressive growth that depends on market execution.**
The $25M revenue / $15.5M EBITDA Year 3 scenario requires Univo to win significant new business — 2.5x current volume. The AI capability makes this possible, but it still requires sales execution, market awareness, and competitive wins. The "same volume, lower cost" scenario ($5.5M EBITDA) is the conservative floor. The growth scenario is the prize worth fighting for.

**10. This will be the most aggressive AI transformation in any IRB, ever.**
There is no playbook. No IRB has done this. That means Univo will make mistakes that nobody has made before. The advantage: first-mover in AI-native ethical review creates a defensible position that's nearly impossible to replicate. The risk: being first means absorbing all the learning costs. Jeff has done this before with Thread — build fast, learn fast, iterate fast.

---

*Document prepared for Jeff Frazier, Operating Partner – AI, QHP Capital*
*Deep Dive Specialist: IRB & Clinical Trial Regulatory AI*
*March 5, 2026*
*Classification: Internal — QHP Capital Partners Only*
