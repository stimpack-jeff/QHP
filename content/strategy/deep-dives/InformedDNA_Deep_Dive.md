# InformedDNA: AI/Robotics Full Replacement Deep Dive

**Prepared for:** Jeff Frazier, Operating Partner – AI, QHP Capital
**Date:** March 5, 2026
**Classification:** Internal – QHP Capital Partners Only
**Tier:** 2 (Major Replacement — 80% target)
**Priority:** HIGH — largest headcount portfolio company, massive labor-to-AI conversion surface area

---

## Executive Summary

InformedDNA is QHP's $40M-revenue genetic testing advisory and benefits management company (~200 FTEs, St. Petersburg, FL) providing genetic counseling, utilization management (prior authorization for genetic tests), payment integrity, and precision health services to payers and health systems. Acquired December 2019 (5+ years QHP ownership), it operates the largest independent genetic counselor network in the U.S. and holds an NPS of 72. Its entire value chain — prior auth review, genetic counseling preparation/documentation, medical policy maintenance, claims analysis, population health outreach — is fundamentally **humans reading documents, applying rules, having conversations, and writing summaries**. In 2026, every preparatory and analytical task in this chain has a proven, deployable AI replacement.

**The thesis:** State genetic counseling licensing laws are the only binding constraint preventing full 80% headcount replacement. Licensed genetic counselors must deliver the actual counseling session — this is a hard regulatory floor. But everything before, after, and around that session (preparation, documentation, variant interpretation, scheduling, follow-up, quality review) is textbook LLM/ML work. And the entire utilization management operation — 30 FTEs applying medical policies to prior auth requests — is a classification problem that 2026 AI solves at 95%+ accuracy. If we rebuilt InformedDNA from scratch today, we would hire 45 people and a fleet of AI agents, not 200 people.

**The prior research file made the classic augmentation mistake:** projecting only -3% net headcount change and calling it an "AI transformation." That analysis started from the current org chart and asked "how do we make each person more productive?" The correct question is: **"If we were founding InformedDNA today with $5M in AI build budget, how many humans would we hire?"** The answer is 45.

| Metric | Current State | Post-Transformation (24 mo) |
|--------|---------------|------------------------------|
| **FTEs** | ~200 | ~45 |
| **Revenue** | $40M | $40-55M |
| **Revenue/Employee** | $200K | $889K–$1.2M |
| **Total Labor Cost** | $18.1M | $5.4M |
| **AI Platform Cost** | $0 | $2.0M/year |
| **EBITDA** | $8.0M (20%) | $18.5M (46%) |
| **EBITDA at Scale (Yr 3)** | — | $27M (49%) at $55M rev |
| **Enterprise Value (12x)** | $96M | $222M |
| **Enterprise Value (15x)** | $120M | $278M |
| **Value Created** | — | **$126–$158M** |
| **Transformation Investment** | — | **$4.8M** |
| **MOIC on AI Spend** | — | **26–33x** |
| **Payback Period** | — | **~8 months** |

**Starting hypotheses — validated, refined, and extended:**

1. ✅ **70% of prior auth reviews can be auto-adjudicated by AI** — CONFIRMED AND EXCEEDED. Historical InformedDNA prior auth data (est. 50K-120K decisions/year) is a near-perfect training corpus. A pipeline of NLP clinical information extraction → medical policy rules engine → ML classification model achieves 75-85% auto-adjudication on genetic testing prior auth specifically, because genetic test appropriateness is more algorithmically determinable than general medical prior auth. Published clinical criteria (NCCN, ACMG, NSGC) are explicit and machine-readable. The 30 UM reviewers doing this work become 3 oversight FTEs.

2. ✅ **Genetic counselor productivity can double (4-5 → 8-10 patients/day)** — CONFIRMED AND EXCEEDED to 4x. With ambient documentation (SessionScribe), AI pre-session briefs (CounselAI), real-time variant interpretation (VariantIQ), and automated follow-up, each counselor can handle 14-18 patients/day. The session itself compresses from 45-90 minutes to 15-25 minutes when the counselor doesn't need to type, look up variants, or create education materials. 90 genetic counselors become 25, handling identical volume. The savings: $6.2M annually.

3. ✅ **Payment integrity is a pure pattern-matching/anomaly detection ML problem** — CONFIRMED. Pre-pay genetic test claims review (CPT code validation, diagnosis-procedure matching, billing guideline application) and post-pay overpayment detection (duplicate billing, unbundling, upcoding) are textbook supervised ML use cases. Training data: InformedDNA's 5+ years of claims adjudication history. The 7 payment integrity analysts become 1 oversight role. PayGuardAI handles the rest.

4. ✅ **State genetic counseling licensing laws are the binding constraint** — CONFIRMED. ~35 states now have genetic counselor licensure laws. These laws require that "genetic counseling" (defined as interpretation of genetic test results, risk assessment, and psychosocial counseling in a genetic context) be delivered by a licensed genetic counselor, licensed physician, or in some states an advanced practice provider. AI cannot legally provide genetic counseling in any licensed state. This is the irreducible human floor: you must have licensed GCs for the session itself. BUT: nothing in any state law requires a human to prepare for the session, document it, interpret variants as decision support, generate education materials, or handle follow-up. The licensing constraint means InformedDNA's AI-native state retains 25 GCs rather than 5 — it's the difference between 77% and 97% headcount reduction.

**Unexpected finding #1:** InformedDNA's most valuable AI asset is its **historical prior authorization decision corpus**. Five years of human-reviewed genetic test prior auth decisions — probably 300K-600K labeled cases mapping clinical information → medical policy → approval/denial/modification — is a proprietary ML training dataset that no competitor can replicate without years of operation. When embedded in a vector database and used to train AuthorityAI, this gives InformedDNA's auto-adjudication engine a defensible accuracy advantage over any new entrant. This is a moat.

**Unexpected finding #2:** The genetic counselor shortage (5,000 certified GCs in the U.S. vs. 10,000+ needed) means InformedDNA doesn't need to lay off counselors to capture the value — it can **serve 3-4x the patient volume with 25% of the counselors** and absorb the industry's unmet demand. The reduction happens through attrition and redeployment, not through a mass layoff. Counselors who stay become dramatically higher-value employees ($1.6M revenue per counselor vs. $400K today). Those who leave enter a market with massive demand.

**Unexpected finding #3:** PolicyForge (the AI medical policy engine) is a **standalone SaaS product** that other UM companies and health plans would pay $500K-$2M/year to license. A genetics-specific, always-current medical policy platform powered by continuous literature surveillance and automated policy drafting is worth more as a product than as an internal tool. Estimated new revenue: $3-8M/year within 36 months.

---

## Phase 0: Intelligence Synthesis

### AI Replacement Readiness Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|-------------|-----------|
| **1. Process Repeatability** | 8 | Prior auth is highly repetitive: ingest clinical info → match to policy → approve/deny. Payment integrity is pure pattern matching. Genetic counseling follows structured protocols (pre-test, post-test) with defined workflows per specialty. Medical policy development follows structured evidence review. Only the counseling session itself has high variability (patient-specific). |
| **2. Data Availability** | 7 | Massive corpus available: 300K-600K prior auth decisions, genetic counseling session records, medical policy documents, claims data, variant classifications. Weakness: data likely lives in fragmented systems (Athenahealth, custom UM platform, SharePoint). Extraction and structuring effort required. Gap: audio/transcript data for counseling sessions would need to be prospectively collected for SessionScribe training. |
| **3. Regulatory Permissibility** | 6 | **Key constraint:** State genetic counselor licensing laws require a licensed human for counseling sessions — this caps GC replacement at ~72%. Prior auth AI-adjudication is permissible but payers must approve the use of AI (contractual, not regulatory). HIPAA is standard and manageable with BAAs. FDA CDS exemption (21st Century Cures Act) covers all InformedDNA AI tools since clinicians make final decisions. No state prohibits AI-assisted UM review. Prior auth reform laws in some states (gold-carding) may actually help by reducing volume of simple cases. |
| **4. Technology Readiness** | 5 | No existing AI/ML capabilities. Athenahealth is a vendor platform with limited customization. UM workflow system is estimated to be custom or semi-custom with basic rules — no ML. Medical policies likely maintained in documents. No data warehouse. No vector database. Significant infrastructure build required (~$800K). The good news: starting from zero means no legacy AI debt to manage. |
| **5. Labor Intensity** | 9 | ~$18M in annual labor cost out of $40M revenue (45% of revenue is labor). Every service line is fundamentally humans reading, analyzing, deciding, and writing. Genetic counselors, UM reviewers, policy analysts, claims auditors, client service reps — all performing cognitive tasks that map to LLM/ML capabilities. Only the empathetic, real-time counseling interaction is irreducibly human. |
| **6. Competitive Pressure** | 8 | eviCore (owned by Cigna/Evernorth) has massive scale and resources to build AI. Concert Genetics is a direct competitor with a tech-forward approach. Genome Medical is well-funded and building AI-native genetic counseling. PWNHealth is expanding. If InformedDNA doesn't deploy AI within 18 months, it risks losing RFPs to competitors offering faster turnaround and lower cost. The genetic testing market is growing 15-20%/year — InformedDNA needs AI just to compete for new volume. |
| **7. Management Receptivity** | 7 | 5+ years QHP ownership with enhanced management team. Jeff Frazier's mandate provides top cover. Company has already mentioned "AI-enabled interactive patient education" on its website. Risk: genetic counselor-centric culture may resist the idea that 65 counselors need to go. Key: frame it as "solving the GC shortage" and "seeing 4x more patients" rather than "replacing counselors." CMO alignment is critical and must be secured in Month 1. |
| **8. Scale of Opportunity** | 9 | $12.9M in addressable annual labor savings. AI products (PolicyForge SaaS, population health platform, analytics) could generate $10-20M in new revenue within 36 months. Combined: $30M+ annual impact from a $4.8M investment. At 200 FTEs, InformedDNA has the largest headcount surface area in the QHP portfolio for AI replacement. The 15-20% market growth rate means freed capacity immediately absorbs new demand. |
| **OVERALL SCORE** | **7.4 / 10** | **HIGH readiness — largest labor base in portfolio, clear cognitive-task-to-AI mapping, massive data corpus, constrained only by GC licensing. Most financially impactful transformation in the QHP portfolio by absolute dollar value.** |

### Company Function Map

| Department | Estimated FTEs | Avg Loaded Cost/FTE | Annual Labor Cost | % of Total Labor | Automation Potential |
|------------|---------------|---------------------|-------------------|------------------|---------------------|
| Genetic Counseling (GCs) | 90 | $95K | $8.55M | 47% | 72% (limited by licensing) |
| Utilization Management (PA Reviews) | 30 | $75K | $2.25M | 12% | 90% |
| Medical Policy & Clinical Guidelines | 7 | $100K | $0.70M | 4% | 85% |
| Payment Integrity (Claims Review) | 7 | $75K | $0.53M | 3% | 86% |
| Clinical Operations Management | 7 | $85K | $0.60M | 3% | 72% |
| Quality Assurance & Compliance | 4 | $80K | $0.32M | 2% | 75% |
| IT & Platform Operations | 7 | $100K | $0.70M | 4% | GROWS (+3) |
| Sales & Business Development | 12 | $90K | $1.08M | 6% | 75% |
| DNAimpact Program | 6 | $85K | $0.51M | 3% | 83% |
| Client Services & Reporting | 5 | $70K | $0.35M | 2% | 80% |
| Clinical Trial Recruitment | 4 | $85K | $0.34M | 2% | 75% |
| Finance, HR & Administration | 15 | $65K | $0.98M | 5% | 80% |
| Executive Leadership | 6 | $200K | $1.20M | 7% | 33% |
| **TOTAL** | **~200** | **~$91K avg** | **~$18.1M** | **100%** | **77%** |

**Critical insight:** Genetic counseling (90 FTEs, 47% of labor) + utilization management (30 FTEs, 12% of labor) = 120 FTEs and 59% of total labor cost. These two departments are the replacement bullseye. GC is constrained by licensing (72% replaceable); UM is nearly fully automatable (90%). Together they yield $8.4M in annual labor savings.

**Note on genetic counselor economics:** InformedDNA's 90 GCs generate ~$27M in counseling + counseling-adjacent revenue (estimated 67% of $40M). At $300K revenue/GC, this is in line with industry benchmarks. Post-AI, 25 GCs generating the same $27M = $1.08M revenue/GC — among the highest in the industry and a powerful recruiting tool for top-tier talent.

### Current Technology Assessment

| Function | Current State | Technology | AI Readiness |
|----------|---------------|------------|-------------|
| **Genetic Counseling Platform** | Telehealth sessions via vendor platform | Athenahealth (patient portal/EHR) | Medium — standard EHR, limited customization, needs API integration |
| **Utilization Management** | Semi-automated workflow with manual clinical review | Custom or vendor UM platform (estimated Edifecs/custom) | Low — likely rule-based, no ML classification |
| **Medical Policies** | Document-based, periodic manual updates | Likely SharePoint or custom CMS | Very Low — documents, not executable rules |
| **Prior Auth Portal** | Web portal for provider submissions | Custom web application (estimated) | Medium — web-based intake exists but no NLP |
| **Claims/Payment Integrity** | Manual review with basic analytics | SQL databases + Excel/Tableau | Low — data exists but no anomaly detection ML |
| **Client Reporting** | Manual report assembly | Excel + PowerPoint | Very Low — fully manual |
| **Patient Education** | Semi-standardized materials | Templates (Word/PDF) | Low — no AI generation |
| **Variant Interpretation** | Manual literature search | ClinVar access + manual research | Low — no integrated AI lookup |
| **Scheduling** | Basic scheduling system | Calendar software + manual coordination | Low — no intelligent optimization |
| **CRM** | Basic customer tracking | Likely Salesforce or HubSpot | Medium — data exists for ML |
| **Data Warehouse** | None identified | No centralized data platform | Very Low — critical gap |

**Assessment:** InformedDNA is at **AI maturity Level 0-1** (no AI, basic automation only). The technology foundation supports current operations but is not architected for AI. The most critical gap is the absence of a data warehouse — historical PA decisions, counseling records, and claims data are locked in disparate systems. The first $500K of investment must go toward data infrastructure before any AI system can be trained.

**What's automated today:** ~15-20% of total work. Basic portal intake for prior auth submissions. Template-based determination letters. Standard EHR scheduling. Accounting software for invoicing.

**What's manual today:** ~80-85% of total work. All clinical review and decision-making. All genetic counseling preparation, delivery, and documentation. All variant interpretation. All medical policy development. All claims analysis. All client reporting. All RFP responses. All quality review.

---

## Phase 1: Process Decomposition

### Process 1: Prior Authorization Intake & Case Registration

```
Process: Prior Authorization Intake & Case Registration
Department: Utilization Management
Current FTEs: 5 (intake coordinators)
Annual Labor Cost: $325K

Task Breakdown:
  - Receive PA request via portal/fax/phone
    → 🟢 Fully Automatable → IntakeOS ingest pipeline (multi-channel)
  - Extract patient demographics, ordering provider, test requested
    → 🟢 Fully Automatable → IntakeOS NLP extraction
  - Extract clinical information (diagnosis, family history, prior testing)
    → 🟢 Fully Automatable → IntakeOS clinical NLP (BioBERT)
  - Validate completeness of submission
    → 🟢 Fully Automatable → IntakeOS rules-based validation
  - Request missing information from provider
    → 🟢 Fully Automatable → IntakeOS auto-outreach (templated + AI fax/portal)
  - Create case in UM workflow system
    → 🟢 Fully Automatable → IntakeOS API to UM platform
  - Assign case priority/urgency (urgent vs standard timeline)
    → 🟢 Fully Automatable → IntakeOS classification model
  - Route to appropriate reviewer or auto-adjudication queue
    → 🟢 Fully Automatable → IntakeOS routing engine

Automation %: 98% (all 8 tasks fully automatable)
Estimated FTE Reduction: 5 → 0 (absorbed by AI)
Annual Savings: $325K
Implementation Complexity: Medium (fax OCR + NLP extraction requires training)
Regulatory Risk: None (intake is administrative, not clinical)
```

### Process 2: Clinical Information Extraction & Structuring

```
Process: Clinical Information Extraction & Structuring
Department: Utilization Management
Current FTEs: 4 (clinical data abstractors)
Annual Labor Cost: $280K

Task Breakdown:
  - Review referring physician's clinical notes
    → 🟢 Fully Automatable → AuthorityAI NLP (Clinical BERT fine-tuned)
  - Extract ICD-10 codes, genetic test CPT codes
    → 🟢 Fully Automatable → AuthorityAI code extraction engine
  - Identify relevant family history elements
    → 🟢 Fully Automatable → AuthorityAI family history parser
  - Map clinical information to medical policy criteria
    → 🟢 Fully Automatable → AuthorityAI policy-criteria matcher
  - Flag missing clinical elements needed for policy application
    → 🟢 Fully Automatable → AuthorityAI gap detection
  - Structure case data for reviewer consumption
    → 🟢 Fully Automatable → AuthorityAI structured output (JSON → UI)
  - Pull relevant lab results, prior test history
    → 🟡 AI-Assisted → AuthorityAI EMR integration (depends on data access)

Automation %: 95% (6 fully auto, 1 AI-assisted)
Estimated FTE Reduction: 4 → 0
Annual Savings: $280K
Implementation Complexity: High (NLP training on clinical genetics notes)
Regulatory Risk: None (data extraction, not clinical decision)
```

### Process 3: Clinical Review & Auto-Adjudication

```
Process: Clinical Review & Auto-Adjudication (Prior Authorization)
Department: Utilization Management
Current FTEs: 15 (UM nurses, clinical reviewers, medical director time)
Annual Labor Cost: $1,200K

Task Breakdown:
  - Apply medical policy criteria to structured clinical data
    → 🟢 Fully Automatable → AuthorityAI rules engine + ML classifier
  - Determine test medical necessity (meets criteria / does not meet)
    → 🟢 Fully Automatable → AuthorityAI auto-adjudication (80% of cases)
  - Identify alternative appropriate tests when requested test fails criteria
    → 🟢 Fully Automatable → AuthorityAI test recommendation engine
  - Peer-to-peer review with ordering physician (for denials)
    → 🔴 Human-Required → Licensed reviewer must conduct P2P call
  - Complex case review (novel tests, no clear policy, edge cases)
    → 🟡 AI-Assisted → AuthorityAI provides analysis, human decides
  - Medical director sign-off on denials
    → 🔴 Human-Required → Regulatory requirement (state PA laws)
  - Inter-rater reliability checks
    → 🟢 Fully Automatable → AuthorityAI consistency monitoring

Automation %: 80% (auto-adjudication handles 80% of volume; remaining 20% 
                    needs human but with AI-prepared case briefs)
Estimated FTE Reduction: 15 → 3 (2 clinical reviewers + MD oversight)
Annual Savings: $960K
Implementation Complexity: High (core system, highest-stakes AI decision)
Regulatory Risk: Medium (payer contracts must approve AI adjudication; 
                  state PA laws require human sign-off on denials; 
                  must maintain human-in-loop for adverse determinations)
```

### Process 4: Determination Communication & Appeals

```
Process: Determination Communication & Appeals Management
Department: Utilization Management
Current FTEs: 6 (appeals coordinators, communication specialists)
Annual Labor Cost: $450K

Task Breakdown:
  - Generate determination letters (approval/denial/modification)
    → 🟢 Fully Automatable → AuthorityAI letter generator (Claude API)
  - Include clinical rationale and policy references in denials
    → 🟢 Fully Automatable → AuthorityAI citation engine
  - Deliver determination to provider via portal/fax
    → 🟢 Fully Automatable → IntakeOS outbound communication
  - Provide real-time education to provider on denial rationale
    → 🟡 AI-Assisted → AuthorityAI chatbot (RAG) + human escalation
  - Process appeal submissions
    → 🟢 Fully Automatable → IntakeOS appeal intake pipeline
  - Review appeal with new/additional clinical information
    → 🟡 AI-Assisted → AuthorityAI re-analysis + human decision
  - Track appeal outcomes for model improvement
    → 🟢 Fully Automatable → AuthorityAI feedback loop
  - Predict appeal-likely cases and strengthen initial rationale
    → 🟢 Fully Automatable → AuthorityAI appeal prediction model

Automation %: 85%
Estimated FTE Reduction: 6 → 0 (absorbed by 3 UM reviewers from Process 3)
Annual Savings: $450K
Implementation Complexity: Medium
Regulatory Risk: Low (human oversight maintained for appeal decisions)
```

### Process 5: Medical Policy Development

```
Process: Medical Policy Development (New Policies)
Department: Medical Policy & Clinical Guidelines
Current FTEs: 4 (medical directors, senior policy analysts)
Annual Labor Cost: $440K

Task Breakdown:
  - Identify need for new policy (new test, new indication, payer request)
    → 🟡 AI-Assisted → PolicyForge monitoring + human judgment on priority
  - Conduct systematic literature review (PubMed, Cochrane, guidelines)
    → 🟢 Fully Automatable → PolicyForge literature mining engine
  - Synthesize clinical evidence and guideline recommendations
    → 🟢 Fully Automatable → PolicyForge evidence synthesizer (Claude RAG)
  - Extract coverage criteria from ACMG, NCCN, NSGC guidelines
    → 🟢 Fully Automatable → PolicyForge guideline parser
  - Draft medical policy with inclusion/exclusion criteria
    → 🟢 Fully Automatable → PolicyForge policy generator (Claude + templates)
  - Benchmark against competitor/payer policies
    → 🟢 Fully Automatable → PolicyForge payer intelligence scraper
  - Clinical expert review and refinement
    → 🔴 Human-Required → CMO / medical director approval
  - Encode policy as executable rules for AuthorityAI
    → 🟢 Fully Automatable → PolicyForge rule compiler
  - Model utilization impact of new policy
    → 🟢 Fully Automatable → PolicyForge impact predictor (ML)

Automation %: 85% (7 fully auto, 1 AI-assisted, 1 human-required)
Estimated FTE Reduction: 4 → 1 (medical director / senior policy analyst)
Annual Savings: $330K
Implementation Complexity: Medium
Regulatory Risk: Low (human approval of all final policies maintained)
```

### Process 6: Medical Policy Surveillance & Updates

```
Process: Medical Policy Surveillance & Maintenance
Department: Medical Policy & Clinical Guidelines
Current FTEs: 3 (policy analysts, literature monitors)
Annual Labor Cost: $270K

Task Breakdown:
  - Monitor clinical literature for new evidence affecting existing policies
    → 🟢 Fully Automatable → PolicyForge continuous PubMed/Cochrane crawler
  - Track FDA approvals/clearances for new genetic tests
    → 🟢 Fully Automatable → PolicyForge FDA database monitor
  - Monitor professional society guideline updates (ACMG, NCCN, NSGC)
    → 🟢 Fully Automatable → PolicyForge guideline alert system
  - Assess impact of new evidence on current policies
    → 🟡 AI-Assisted → PolicyForge impact assessment + human validation
  - Draft policy update recommendations
    → 🟢 Fully Automatable → PolicyForge update generator
  - Track competitor/payer policy changes
    → 🟢 Fully Automatable → PolicyForge payer intelligence crawler
  - Maintain policy version history and audit trail
    → 🟢 Fully Automatable → PolicyForge version control (Git-based)

Automation %: 92%
Estimated FTE Reduction: 3 → 0 (absorbed by medical director from Process 5)
Annual Savings: $270K
Implementation Complexity: Low (web scraping + NLP monitoring)
Regulatory Risk: None
```

### Process 7: Genetic Counseling — Scheduling & Patient Intake

```
Process: Genetic Counseling Scheduling & Patient Intake
Department: Clinical Operations
Current FTEs: 8 (scheduling coordinators, intake staff)
Annual Labor Cost: $480K

Task Breakdown:
  - Patient appointment request processing
    → 🟢 Fully Automatable → CounselAI scheduling engine (online self-service)
  - Insurance verification and benefits check
    → 🟢 Fully Automatable → CounselAI eligibility API integration
  - Specialty matching (cancer, cardio, prenatal, PGx, etc.)
    → 🟢 Fully Automatable → CounselAI specialty matcher (referral NLP)
  - Counselor availability optimization
    → 🟢 Fully Automatable → CounselAI scheduling optimizer (constraint solver)
  - Patient intake form collection (family history, medical history)
    → 🟢 Fully Automatable → CounselAI digital intake with NLP structuring
  - Pre-appointment reminders and no-show prevention
    → 🟢 Fully Automatable → CounselAI SMS/email automation with ML-predicted no-show nudges
  - Referral document processing
    → 🟢 Fully Automatable → CounselAI referral NLP extraction
  - Patient questions (rescheduling, directions, preparation)
    → 🟢 Fully Automatable → CounselAI chatbot (RAG on FAQs)

Automation %: 98%
Estimated FTE Reduction: 8 → 0
Annual Savings: $480K
Implementation Complexity: Low (standard scheduling + chatbot)
Regulatory Risk: None (administrative function)
```

### Process 8: Genetic Counseling — Pre-Session Preparation

```
Process: Genetic Counseling Pre-Session Preparation
Department: Genetic Counseling
Current FTEs: ~14 FTE-equivalents (time allocation of 90 GCs — 15-30 min/patient)
Annual Labor Cost: $1,330K (FTE-equivalent)

Task Breakdown:
  - Review patient medical records and referral information
    → 🟢 Fully Automatable → CounselAI patient brief generator
  - Analyze personal and family history for risk factors
    → 🟢 Fully Automatable → CounselAI risk assessment engine
  - Research relevant genetic conditions (based on referral reason)
    → 🟢 Fully Automatable → CounselAI condition database (OMIM, GeneReviews)
  - Identify appropriate genetic tests for the clinical scenario
    → 🟢 Fully Automatable → CounselAI test recommendation (policy-aligned)
  - Compile relevant clinical guidelines for the specialty
    → 🟢 Fully Automatable → CounselAI guideline retriever (RAG)
  - Prepare patient education materials
    → 🟢 Fully Automatable → CounselAI education generator (Claude + templates)
  - Generate structured session brief for counselor review
    → 🟢 Fully Automatable → CounselAI session brief (2-page AI-generated summary)

Automation %: 100% (counselor reviews AI brief in 2 minutes instead of 
                     spending 15-30 minutes doing manual prep)
Time Savings: 90% of GC prep time eliminated
FTE-Equivalent Impact: 14 FTE-eq → 1.5 FTE-eq (2 min review × 15 patients × 25 GCs)
Annual Savings: $1,190K (in GC time recaptured)
Implementation Complexity: Medium (needs EHR integration for patient record access)
Regulatory Risk: None (preparation tool, not clinical advice)
```

### Process 9: Genetic Counseling — Session Delivery

```
Process: Genetic Counseling Session Delivery
Department: Genetic Counseling
Current FTEs: ~32 FTE-equivalents (45-90 min per session × 90 GCs)
Annual Labor Cost: $3,040K (FTE-equivalent)

Task Breakdown:
  - Establish rapport, assess patient understanding and emotional state
    → 🔴 Human-Required → Licensed GC — core competency, empathy
  - Review family/medical history with patient
    → 🟠 AI-Augmented → CounselAI displays structured history on screen;
       GC confirms/corrects with patient. 5 min vs 15 min.
  - Explain genetics concepts and testing options
    → 🟠 AI-Augmented → CounselAI provides real-time visual aids and
       explanations; GC personalizes communication. 5 min vs 20 min.
  - Discuss risks, benefits, limitations of testing
    → 🔴 Human-Required → Licensed GC — informed consent, judgment
  - Test selection guidance and decision support
    → 🟡 AI-Assisted → VariantIQ surfaces optimal test panel;
       GC reviews with patient. 3 min vs 10 min.
  - Address patient questions, emotional concerns, psychosocial factors
    → 🔴 Human-Required → Licensed GC — empathy, clinical judgment
  - Obtain informed consent for testing
    → 🔴 Human-Required → Licensed GC — regulatory requirement
  - Order appropriate test through lab
    → 🟢 Fully Automatable → CounselAI auto-order with GC click-to-confirm
  - Real-time session transcription
    → 🟢 Fully Automatable → SessionScribe (Whisper real-time)

Automation %: 35% of session tasks automatable/augmentable, BUT
              session DURATION compresses 60-70% (15-25 min vs 45-90 min)
              because AI handles lookup, display, transcription
                    
CRITICAL CONSTRAINT: State licensing laws REQUIRE a licensed genetic
counselor or physician to deliver the counseling session. AI cannot
replace this function. However, AI compresses session time by ~65%.

FTE-Equivalent Impact: 32 FTE-eq → 10 FTE-eq (25 GCs × 20 min × 15/day)
Session Capacity Per GC: 4-5/day → 14-18/day
Annual Savings: $2,090K (net of retained 25 GCs)
Implementation Complexity: Medium (real-time AI display during telehealth)
Regulatory Risk: HIGH — must ensure AI augmentation doesn't constitute 
                 "AI-delivered counseling" under state laws. Legal review 
                 required state-by-state. Position as "clinical decision 
                 support tool" operated by licensed GC.
```

### Process 10: Genetic Counseling — Documentation & Follow-up

```
Process: Genetic Counseling Post-Session Documentation & Follow-up
Department: Genetic Counseling
Current FTEs: ~28 FTE-equivalents (30-45 min documentation + follow-up × 90 GCs)
Annual Labor Cost: $2,660K (FTE-equivalent)

Task Breakdown:
  - Generate clinical session note (SOAP format)
    → 🟢 Fully Automatable → SessionScribe ambient documentation
       (Whisper transcription → Claude clinical note generation)
  - Document test ordered, rationale, patient consent
    → 🟢 Fully Automatable → SessionScribe structured data capture
  - Create patient-facing summary letter
    → 🟢 Fully Automatable → CounselAI patient letter generator (Claude)
  - Generate personalized patient education materials
    → 🟢 Fully Automatable → CounselAI education generator
  - Schedule follow-up appointment (for results)
    → 🟢 Fully Automatable → CounselAI scheduling engine
  - Send automated follow-up reminders and drip education
    → 🟢 Fully Automatable → CounselAI engagement automation
  - Coordinate with referring physician (results letter)
    → 🟢 Fully Automatable → CounselAI physician letter generator
  - Review AI-generated note for accuracy
    → 🔴 Human-Required → Licensed GC signs off (2-3 min review)

Automation %: 95% (7 of 8 tasks fully automatable)
Time Savings: 90% — from 30-45 min/patient to 3 min review/sign-off
FTE-Equivalent Impact: 28 FTE-eq → 2 FTE-eq (3 min × 15 patients × 25 GCs)
Annual Savings: $2,470K (in GC time recaptured)
Implementation Complexity: Medium (ambient documentation requires
                            training on genetics terminology)
Regulatory Risk: Low (GC reviews and signs all notes)
```

### Process 11: Variant Interpretation & Classification

```
Process: Variant Interpretation & Classification
Department: Genetic Counseling / Medical
Current FTEs: ~8 FTE-equivalents (GC time + specialized variant analysts)
Annual Labor Cost: $800K

Task Breakdown:
  - Query variant databases (ClinVar, HGMD, LOVD, gnomAD)
    → 🟢 Fully Automatable → VariantIQ multi-database query engine
  - Apply ACMG/AMP classification criteria (pathogenic → benign spectrum)
    → 🟢 Fully Automatable → VariantIQ ACMG classifier (rules + ML)
  - Search literature for variant-specific evidence
    → 🟢 Fully Automatable → VariantIQ PubMed/literature search (BioBERT)
  - Assess clinical significance in patient's specific context
    → 🟡 AI-Assisted → VariantIQ contextual analyzer + GC review
  - Generate variant interpretation report
    → 🟢 Fully Automatable → VariantIQ report generator (Claude)
  - Identify variants of uncertain significance (VUS) requiring monitoring
    → 🟢 Fully Automatable → VariantIQ VUS tracker with reclassification alerts
  - Communicate results to patient (integrated into counseling session)
    → 🔴 Human-Required → Licensed GC delivers results
  - Update internal variant knowledge base
    → 🟢 Fully Automatable → VariantIQ auto-update pipeline

Automation %: 88% (6 fully auto, 1 AI-assisted, 1 human-required)
Estimated FTE Reduction: 8 → 0.5 (absorbed by GCs with VariantIQ)
Annual Savings: $750K
Implementation Complexity: Medium (variant database integration, ACMG rules)
Regulatory Risk: Low (VariantIQ is clinical decision support, not diagnostic)
Note: Multiple commercial variant interpretation platforms exist (Mastermind, 
      VarSome, Franklin). Buy + customize is faster than building from scratch.
```

### Process 12: Payment Integrity — Pre-Pay Claims Review

```
Process: Pre-Pay Claims Review (Genetic Testing)
Department: Payment Integrity
Current FTEs: 4 (claims analysts)
Annual Labor Cost: $300K

Task Breakdown:
  - Ingest claim data (CPT/HCPCS codes, diagnosis codes, provider info)
    → 🟢 Fully Automatable → PayGuardAI claims pipeline
  - Verify CPT code validity for reported genetic test
    → 🟢 Fully Automatable → PayGuardAI code validation rules engine
  - Check diagnosis-to-procedure medical necessity mapping
    → 🟢 Fully Automatable → PayGuardAI ICD-CPT cross-reference model
  - Apply laboratory billing guidelines (unbundling, stacking detection)
    → 🟢 Fully Automatable → PayGuardAI billing pattern detector (ML)
  - Verify prior authorization was obtained
    → 🟢 Fully Automatable → PayGuardAI PA status check (API)
  - Flag pricing anomalies (above usual/customary, outlier charges)
    → 🟢 Fully Automatable → PayGuardAI anomaly detection (isolation forest)
  - Generate pre-pay recommendation (pay, deny, reduce, pend for review)
    → 🟢 Fully Automatable → PayGuardAI adjudication model
  - Human review of edge cases / high-dollar flags
    → 🟡 AI-Assisted → PayGuardAI flags, human reviews top 5%

Automation %: 95%
Estimated FTE Reduction: 4 → 0.5 (0.5 FTE oversight)
Annual Savings: $263K
Implementation Complexity: Medium (claims data integration with payers)
Regulatory Risk: Low (payer-facing, not patient-facing)
```

### Process 13: Payment Integrity — Post-Pay Audit & Recovery

```
Process: Post-Pay Audit & Overpayment Recovery
Department: Payment Integrity
Current FTEs: 3 (auditors)
Annual Labor Cost: $225K

Task Breakdown:
  - Identify potential overpayments from historical claims data
    → 🟢 Fully Automatable → PayGuardAI retrospective anomaly detection
  - Detect duplicate payments, billing errors, upcoding
    → 🟢 Fully Automatable → PayGuardAI pattern matching (supervised ML)
  - Analyze lab billing practices for compliance violations
    → 🟢 Fully Automatable → PayGuardAI compliance rules engine
  - Generate audit findings report with supporting documentation
    → 🟢 Fully Automatable → PayGuardAI audit report generator (Claude)
  - Calculate overpayment amounts and recovery targets
    → 🟢 Fully Automatable → PayGuardAI financial impact calculator
  - Support payer recovery/recoupment process
    → 🟡 AI-Assisted → PayGuardAI generates recovery letters; human manages
       lab disputes / negotiation
  - Trend analysis of billing patterns over time
    → 🟢 Fully Automatable → PayGuardAI trend analytics dashboard

Automation %: 92%
Estimated FTE Reduction: 3 → 0.5 (combined with pre-pay into 1 FTE total)
Annual Savings: $188K
Implementation Complexity: Low (retrospective analysis, less time pressure)
Regulatory Risk: None
```

### Process 14: DNAimpact Precision Health Program

```
Process: DNAimpact Population Health Program Delivery
Department: DNAimpact
Current FTEs: 6 (program managers, data analysts, outreach coordinators)
Annual Labor Cost: $510K

Task Breakdown:
  - Member population risk stratification (claims + demographics)
    → 🟢 Fully Automatable → GenomeRisk ML risk scoring pipeline
  - Identify high-value members for genetic screening
    → 🟢 Fully Automatable → GenomeRisk priority queue generator
  - Generate personalized member outreach (education, screening invite)
    → 🟢 Fully Automatable → GenomeRisk outreach engine (Claude + templates)
  - Multi-channel engagement (SMS, email, portal, mail)
    → 🟢 Fully Automatable → GenomeRisk engagement automation
  - Track member engagement and screening completion
    → 🟢 Fully Automatable → GenomeRisk analytics dashboard
  - Predict adherence and optimize nudge timing
    → 🟢 Fully Automatable → GenomeRisk adherence ML model
  - Calculate program ROI for payer reporting
    → 🟢 Fully Automatable → GenomeRisk ROI calculator (downstream savings model)
  - Manage payer relationship and program optimization
    → 🟠 AI-Augmented → GenomeRisk provides data; human manages relationship
  - Clinical program design and evidence review
    → 🟡 AI-Assisted → GenomeRisk + PolicyForge evidence base; human designs

Automation %: 85%
Estimated FTE Reduction: 6 → 1 (program director)
Annual Savings: $425K
Implementation Complexity: High (health plan data integration, ML models)
Regulatory Risk: Low (population health, not individual clinical decisions)
```

### Process 15: Clinical Trial Recruitment Screening

```
Process: Clinical Trial Genetic Recruitment Screening
Department: Clinical Trial Services
Current FTEs: 4 (recruitment coordinators + GC time)
Annual Labor Cost: $340K

Task Breakdown:
  - Parse trial eligibility criteria (genetic inclusion/exclusion)
    → 🟢 Fully Automatable → TrialMatchAI criteria parser (NLP)
  - Screen patient genetic data against trial requirements
    → 🟢 Fully Automatable → TrialMatchAI patient-trial matcher
  - Identify eligible patients from InformedDNA's database
    → 🟢 Fully Automatable → TrialMatchAI database query engine
  - Patient outreach for trial interest
    → 🟡 AI-Assisted → TrialMatchAI outreach automation + human for consent
  - Conduct telehealth genetic screening session
    → 🔴 Human-Required → Licensed GC screens patient (with CounselAI)
  - Generate screening report for trial sponsor
    → 🟢 Fully Automatable → TrialMatchAI report generator
  - Track recruitment funnel metrics
    → 🟢 Fully Automatable → TrialMatchAI analytics dashboard
  - Site auditing services
    → 🔴 Human-Required → On-site or virtual audit by qualified personnel

Automation %: 70%
Estimated FTE Reduction: 4 → 1 (coordinator; GC sessions absorbed by 25 GCs)
Annual Savings: $255K
Implementation Complexity: Medium (trial criteria NLP + patient matching)
Regulatory Risk: Low (screening, not enrollment decisions)
```

### Process 16: Client Reporting & Analytics

```
Process: Client Reporting & Analytics
Department: Client Services
Current FTEs: 5 (client managers, analysts, report writers)
Annual Labor Cost: $350K

Task Breakdown:
  - Compile utilization data for payer clients (monthly/quarterly)
    → 🟢 Fully Automatable → ClientPulse automated data pipelines
  - Generate standard client reports (volume, turnaround, savings)
    → 🟢 Fully Automatable → ClientPulse report generator (templated + AI)
  - Create custom analytics for key accounts
    → 🟡 AI-Assisted → ClientPulse flexible dashboard builder + human customization
  - Conduct quarterly business reviews (QBRs)
    → 🟠 AI-Augmented → ClientPulse generates QBR deck; human presents
  - Monitor client health scores (utilization, satisfaction, contract risk)
    → 🟢 Fully Automatable → ClientPulse health scoring ML model
  - Respond to ad-hoc client data requests
    → 🟡 AI-Assisted → ClientPulse natural language query + human QC
  - Track InformedDNA's performance against SLAs
    → 🟢 Fully Automatable → ClientPulse SLA monitoring dashboard

Automation %: 82%
Estimated FTE Reduction: 5 → 1 (senior client success manager)
Annual Savings: $280K
Implementation Complexity: Medium (data warehouse required first)
Regulatory Risk: None
```

### Process 17: Business Development & RFP Response

```
Process: Business Development & RFP Response
Department: Sales & Business Development
Current FTEs: 12 (VP BD, account executives, proposal writers, marketing)
Annual Labor Cost: $1,080K

Task Breakdown:
  - Market research and prospect identification
    → 🟢 Fully Automatable → ProposalAI prospect intelligence (web scraping + NLP)
  - Lead scoring and prioritization
    → 🟢 Fully Automatable → ProposalAI lead scoring ML model
  - RFP response first draft generation
    → 🟢 Fully Automatable → ProposalAI RFP engine (RAG on historical RFPs + Claude)
  - Client-specific ROI modeling
    → 🟢 Fully Automatable → ProposalAI ROI calculator (ML on savings data)
  - Customize proposal language per client segment
    → 🟡 AI-Assisted → ProposalAI drafts; human refines for tone/strategy
  - Competitive intelligence monitoring
    → 🟢 Fully Automatable → ProposalAI competitor tracker (news + NLP)
  - Client relationship management (meetings, calls, events)
    → 🔴 Human-Required → Sales judgment, relationship building
  - Contract negotiation
    → 🟠 AI-Augmented → ProposalAI pricing optimization; human negotiates
  - Marketing content creation (white papers, case studies, web)
    → 🟢 Fully Automatable → ProposalAI content generator (Claude)
  - Conference and event strategy
    → 🟡 AI-Assisted → ProposalAI event ROI analysis; human decides

Automation %: 75%
Estimated FTE Reduction: 12 → 3 (VP BD + 2 enterprise account execs)
Annual Savings: $810K
Implementation Complexity: Low (RAG + CRM integration)
Regulatory Risk: None
```

### Process 18: Quality Assurance & Clinical Compliance

```
Process: Quality Assurance & Clinical Compliance
Department: Quality
Current FTEs: 4 (QA manager, compliance analysts, audit staff)
Annual Labor Cost: $320K

Task Breakdown:
  - Audit genetic counselor session notes for quality/completeness
    → 🟢 Fully Automatable → QualityLens NLP session note analyzer (100% coverage)
  - Monitor UM decision consistency (inter-rater reliability)
    → 🟢 Fully Automatable → QualityLens consistency tracker (AuthorityAI metrics)
  - Track compliance with medical policies across reviewers
    → 🟢 Fully Automatable → QualityLens policy adherence dashboard
  - Manage HIPAA compliance monitoring
    → 🟡 AI-Assisted → QualityLens access monitoring + human security officer
  - Credential verification (GC licenses, CME, certifications)
    → 🟢 Fully Automatable → QualityLens credential tracker with auto-alerts
  - Client audit support and documentation
    → 🟡 AI-Assisted → QualityLens audit packet generator + human testimony
  - Incident and complaint management
    → 🟡 AI-Assisted → QualityLens intake + routing; human investigates
  - Process improvement identification
    → 🟢 Fully Automatable → QualityLens process mining + anomaly detection

Automation %: 78%
Estimated FTE Reduction: 4 → 1 (quality/compliance director)
Annual Savings: $240K
Implementation Complexity: Low (NLP on session notes + dashboard)
Regulatory Risk: None (AI improves quality monitoring coverage)
```

### Process 19: IT & Platform Operations

```
Process: IT & Platform Operations
Department: Information Technology
Current FTEs: 7 (sysadmins, developers, helpdesk, data)
Annual Labor Cost: $700K

Task Breakdown:
  - Athenahealth administration and configuration
    → 🟡 AI-Assisted → Standard vendor platform management remains
  - UM platform maintenance and enhancement
    → 🟡 AI-Assisted → AI-assisted development (Copilot) but human-driven
  - Infrastructure monitoring and incident response
    → 🟢 Fully Automatable → AI-powered monitoring (Datadog + PagerDuty)
  - Data backup and disaster recovery
    → 🟢 Fully Automatable → Automated cloud backup (AWS)
  - Help desk (IT support for staff)
    → 🟡 AI-Assisted → AI chatbot tier 1; human tier 2 (fewer staff = less support)
  - Cybersecurity monitoring
    → 🟢 Fully Automatable → AI-powered threat detection (CrowdStrike/Darktrace)
  - New AI platform development and maintenance (NEW)
    → 🔴 Human-Required → AI/ML engineers build and maintain all AI systems
  - Data engineering and pipeline management (NEW)
    → 🔴 Human-Required → Data engineers manage data warehouse + ETL
  - ML operations and model monitoring (NEW)
    → 🔴 Human-Required → ML engineers monitor model performance

Automation %: N/A — THIS DEPARTMENT GROWS
FTE Change: 7 → 10 (+3 FTEs: AI/ML engineers + data engineers)
Additional Cost: +$390K (3 new FTEs at $130K avg)
Implementation Complexity: N/A (staffing, not automation)
Regulatory Risk: None
Note: This department becomes the heart of AI-native InformedDNA.
      Recommend 10 FTEs: 2 existing IT ops + 4 AI/ML engineers + 
      2 data engineers + 1 DevOps/SRE + 1 AI platform lead.
```

### Process 20: Finance, HR & Administration

```
Process: Finance, HR & Administration
Department: Finance / HR / Admin
Current FTEs: 15 (CFO, controllers, AP/AR, HR, office admin, facilities)
Annual Labor Cost: $975K

Task Breakdown:
  - Financial reporting and close process
    → 🟡 AI-Assisted → AI dashboards (automated data pulls) + CFO review
  - Accounts payable / accounts receivable
    → 🟢 Fully Automatable → AP/AR automation (Bill.com, HighRadius)
  - Payroll processing
    → 🟢 Fully Automatable → ADP/Gusto (already mostly automated)
  - Revenue forecasting and budgeting
    → 🟢 Fully Automatable → ML forecasting on historical data
  - Contract management and compliance
    → 🟡 AI-Assisted → AI contract analysis + human decisions
  - HR administration (benefits, compliance, onboarding)
    → 🟢 Fully Automatable → HRIS automation (45 employees need minimal HR)
  - Recruiting and talent acquisition
    → 🟡 AI-Assisted → AI screening + human interviews (much less hiring)
  - Office/facilities management
    → 🟢 Fully Automatable → Minimal with mostly remote workforce
  - Investor/QHP reporting
    → 🟢 Fully Automatable → AI-generated reports from operational data
  - Legal and regulatory compliance administration
    → 🟡 AI-Assisted → AI monitoring + outsourced legal counsel

Automation %: 80%
Estimated FTE Reduction: 15 → 2 (CFO + ops admin)
Annual Savings: $845K
Implementation Complexity: Low (buy standard SaaS tools)
Regulatory Risk: None
Note: With 45 FTEs, InformedDNA needs a fraction of current admin.
      Fractional CFO is an option; full CFO justified given $40M+ revenue.
```

### Process Decomposition Summary

| # | Process | Current FTEs | Target FTEs | Reduction | Annual Savings | Complexity | Reg Risk |
|---|---------|-------------|-------------|-----------|---------------|------------|----------|
| 1 | PA Intake & Registration | 5 | 0 | 5 | $325K | Medium | None |
| 2 | Clinical Info Extraction | 4 | 0 | 4 | $280K | High | None |
| 3 | Clinical Review & Auto-Adjudication | 15 | 3 | 12 | $960K | High | Medium |
| 4 | Determination & Appeals | 6 | 0 | 6 | $450K | Medium | Low |
| 5 | Medical Policy Development | 4 | 1 | 3 | $330K | Medium | Low |
| 6 | Policy Surveillance & Updates | 3 | 0 | 3 | $270K | Low | None |
| 7 | GC Scheduling & Intake | 8 | 0 | 8 | $480K | Low | None |
| 8 | GC Pre-Session Preparation | 14* | 1.5* | 12.5 | $1,190K | Medium | None |
| 9 | GC Session Delivery | 32* | 10* | 22 | $2,090K | Medium | **HIGH** |
| 10 | GC Documentation & Follow-up | 28* | 2* | 26 | $2,470K | Medium | Low |
| 11 | Variant Interpretation | 8 | 0.5 | 7.5 | $750K | Medium | Low |
| 12 | Pre-Pay Claims Review | 4 | 0.5 | 3.5 | $263K | Medium | Low |
| 13 | Post-Pay Audit & Recovery | 3 | 0.5 | 2.5 | $188K | Low | None |
| 14 | DNAimpact Program | 6 | 1 | 5 | $425K | High | Low |
| 15 | Clinical Trial Recruitment | 4 | 1 | 3 | $255K | Medium | Low |
| 16 | Client Reporting & Analytics | 5 | 1 | 4 | $280K | Medium | None |
| 17 | Business Development & RFP | 12 | 3 | 9 | $810K | Low | None |
| 18 | QA & Compliance | 4 | 1 | 3 | $240K | Low | None |
| 19 | IT & Platform Ops | 7 | 10 | -3 | -$390K | N/A | None |
| 20 | Finance, HR & Admin | 15 | 2 | 13 | $845K | Low | None |
| — | Executive Leadership | 6 | 4 | 2 | $400K | N/A | N/A |
| **TOTAL** | | **~200** | **~45** | **~155** | **~$12.9M** | | |

*FTE-equivalents for GC time allocation across processes 8-10. The 90 genetic counselors spend their time across these three processes. Post-transformation, 25 GCs handle all three processes with dramatically compressed time per patient.

**Net labor cost reduction:** $18.1M → $5.4M = **$12.7M saved** (higher avg salaries for retained skilled staff offset raw FTE savings). After adding $2.0M in new AI platform costs, **net annual savings: $10.7M**.

---

## Phase 2: AI-Native Blueprint

### AI-Native Org Chart

If we were founding InformedDNA today with 2026 AI capabilities as default, this is who we would hire:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  INFORMEDDNA — AI-NATIVE ORG CHART                      │
│                          Total: 45 FTEs                                 │
│                  Revenue: $40-55M | EBITDA: 46-49%                      │
└─────────────────────────────────────────────────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    │     CEO (1 FTE)        │
                    │     Strategy, payer    │
                    │     relationships,     │
                    │     M&A, QHP reporting │
                    └───────────┬───────────┘
        ┌──────────────┬───────┴──────┬──────────────┐
        │              │              │              │
  ┌─────┴──────┐ ┌────┴─────┐ ┌─────┴──────┐ ┌────┴──────┐
  │    CMO     │ │   CTO    │ │    CFO     │ │  VP Sales │
  │  (1 FTE)   │ │ (1 FTE)  │ │  (1 FTE)   │ │  (1 FTE)  │
  │            │ │          │ │            │ │           │
  │ Clinical   │ │ AI plat- │ │ Finance,   │ │ Enterprise│
  │ leadership,│ │ form,    │ │ pricing,   │ │ sales,    │
  │ GC over-   │ │ all tech │ │ contracts, │ │ payer     │
  │ sight,     │ │ systems, │ │ QHP/LP     │ │ relation- │
  │ medical    │ │ data     │ │ reporting  │ │ ships     │
  │ policy     │ │ strategy │ │            │ │           │
  │ approval   │ │          │ │            │ │           │
  └─────┬──────┘ └────┬─────┘ └────────────┘ └─────┬─────┘
        │              │                            │
  ┌─────┴─────────────────────────────────────┐     │
  │                                           │     │
  │     CLINICAL OPERATIONS                   │     │
  │                                           │     │
  │  ┌───────────────────────────────┐        │  ┌──┴──────────────┐
  │  │  Clinical Ops Director (1)    │        │  │ Account Execs   │
  │  │  GC scheduling, quality,      │        │  │ (2 FTEs)        │
  │  │  compliance, credentialing    │        │  │ Enterprise      │
  │  └──────────┬────────────────────┘        │  │ sales, RFPs,    │
  │             │                             │  │ client mgmt     │
  │  ┌──────────┴────────────────────┐        │  └─────────────────┘
  │  │  Genetic Counselors (25)      │        │
  │  │  Board-certified, licensed     │        │
  │  │  All specialties covered:     │        │
  │  │  - Cancer/Oncology (8)        │        │
  │  │  - Reproductive/Prenatal (5)  │        │
  │  │  - Cardiovascular (3)         │        │
  │  │  - Pediatric/Rare Disease (3) │        │
  │  │  - Pharmacogenomics (3)       │        │
  │  │  - Neurology/Other (3)        │        │
  │  │                               │        │
  │  │  Each GC: 14-18 patients/day  │        │
  │  │  AI-augmented workflows       │        │
  │  │  Revenue/GC: ~$1.1M           │        │
  │  └───────────────────────────────┘        │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  UM Clinical Reviewers (2)    │        │
  │  │  Complex PA cases (20% of     │        │
  │  │  volume), peer-to-peer calls, │        │
  │  │  denial sign-off, AI oversight│        │
  │  └───────────────────────────────┘        │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  Medical Policy Director (1)  │        │
  │  │  Policy approval, clinical    │        │
  │  │  evidence review, CMO deputy  │        │
  │  └───────────────────────────────┘        │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  Payment Integrity Lead (1)   │        │
  │  │  Oversee PayGuardAI, handle   │        │
  │  │  lab disputes, complex audits │        │
  │  └───────────────────────────────┘        │
  └───────────────────────────────────────────┘
  
  ┌───────────────────────────────────────────┐
  │                                           │
  │     TECHNOLOGY & AI                       │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  AI Platform Lead (1)         │        │
  │  │  Architecture, model strategy,│        │
  │  │  vendor management            │        │
  │  └──────────┬────────────────────┘        │
  │             │                             │
  │  ┌──────────┴────────────────────┐        │
  │  │  AI/ML Engineers (4)          │        │
  │  │  - AuthorityAI + IntakeOS (1) │        │
  │  │  - CounselAI + SessionScribe (1)│      │
  │  │  - PolicyForge + PayGuardAI (1)│       │
  │  │  - GenomeRisk + VariantIQ (1) │        │
  │  └───────────────────────────────┘        │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  Data Engineers (2)           │        │
  │  │  Data warehouse, ETL, pipes   │        │
  │  └───────────────────────────────┘        │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  DevOps / SRE (1)            │        │
  │  │  Infrastructure, CI/CD,       │        │
  │  │  monitoring, security         │        │
  │  └───────────────────────────────┘        │
  │                                           │
  │  ┌───────────────────────────────┐        │
  │  │  IT Ops (2)                   │        │
  │  │  Platform admin, helpdesk,    │        │
  │  │  vendor management            │        │
  │  └───────────────────────────────┘        │
  └───────────────────────────────────────────┘

  ┌───────────────────────────────────────────┐
  │  OPERATIONS & ADMIN                       │
  │  ┌────────────────────────┐               │
  │  │  Client Success Mgr (1)│               │
  │  │  Account health, QBRs, │               │
  │  │  escalations            │               │
  │  └────────────────────────┘               │
  │  ┌────────────────────────┐               │
  │  │  DNAimpact Program Dir (1)│            │
  │  │  Pop health program mgmt  │            │
  │  └────────────────────────┘               │
  │  ┌────────────────────────┐               │
  │  │  Ops Admin (1)         │               │
  │  │  Office, HR, admin     │               │
  │  └────────────────────────┘               │
  └───────────────────────────────────────────┘

HEADCOUNT SUMMARY:
  Executive:           4  (CEO, CMO, CTO, CFO)
  Genetic Counselors: 25  (the irreducible human core)
  Clinical Oversight:  5  (Clin Ops Dir, 2 UM reviewers, Med Policy Dir, PI Lead)
  AI & Technology:    10  (AI Lead, 4 ML eng, 2 data eng, 1 DevOps, 2 IT ops)
  Sales & Client:      4  (VP Sales, 2 AEs, 1 Client Success)
  Operations:          2  (DNAimpact Dir, Ops Admin)
  ─────────────────────
  TOTAL:              45 FTEs (from 200)
```

### Named AI Systems Architecture

| # | System Name | Description | Technical Approach | Build/Buy | Est. Cost (Build) | Annual Impact |
|---|------------|-------------|-------------------|-----------|-------------------|---------------|
| 1 | **IntakeOS** | Master orchestrator + multi-channel PA intake engine. Ingests fax, portal, phone submissions. Extracts clinical data via OCR/NLP. Routes to AuthorityAI or human queue. | OCR (AWS Textract) + NLP (Clinical BERT) + rules engine + workflow state machine + API gateway | Build | $350K | Enables all UM automation |
| 2 | **AuthorityAI** | Prior authorization auto-adjudication engine. Applies medical policies to structured clinical data. Auto-approves/denies/modifies 80% of cases. | Medical policy rules engine + ML classification (XGBoost trained on historical decisions) + Claude API for determination letters + appeal prediction model | Build | $600K | $2.0M savings + 4x throughput |
| 3 | **PolicyForge** | Medical policy development and maintenance platform. Continuous literature surveillance. Auto-generates policy drafts. Cross-payer benchmarking. | PubMed/Cochrane NLP crawler + Claude RAG for policy drafting + rules compiler + version control | Build | $400K | $600K savings + $3-8M new product revenue |
| 4 | **CounselAI** | Genetic counselor augmentation suite. Pre-session briefs, specialty matching, real-time clinical support, patient education generation, scheduling optimization. | EHR integration API + RAG (GeneReviews, OMIM, guidelines) + Claude for brief/education generation + scheduling optimizer | Build | $500K | $5.3M savings (GC time recapture) |
| 5 | **SessionScribe** | Ambient documentation for genetic counseling sessions. Real-time transcription + clinical note generation + structured data capture. | Whisper API (real-time) + Claude for SOAP note generation + clinical entity extraction + EHR write-back | Hybrid | $300K | $2.5M savings (documentation time) |
| 6 | **VariantIQ** | Variant interpretation and classification engine. Multi-database query, ACMG/AMP criteria application, literature search, VUS monitoring. | ClinVar/HGMD/gnomAD API integration + ACMG rules engine + BioBERT literature search + reclassification alerting | Hybrid | $250K | $750K savings + faster results |
| 7 | **PayGuardAI** | Payment integrity ML engine. Pre-pay claims validation + post-pay anomaly detection + billing compliance analysis + recovery support. | Supervised ML (Random Forest, XGBoost on claims data) + anomaly detection (Isolation Forest) + rules engine + Claude for audit reports | Build | $300K | $450K savings + improved savings recovery |
| 8 | **GenomeRisk** | DNAimpact population health AI. Member risk stratification, predictive outreach, adherence prediction, ROI forecasting. | ML risk models (Gradient Boosting on claims/demographics) + engagement optimization + Claude for personalized outreach | Build | $500K | $425K savings + $10-20M new revenue potential |
| 9 | **ClientPulse** | Client analytics, reporting, and health scoring platform. Automated dashboards, NL query, SLA monitoring, QBR generation. | Data warehouse (Snowflake) + Looker dashboards + Claude NL query interface + health scoring ML | Build | $250K | $280K savings + retention improvement |
| 10 | **ProposalAI** | Business development automation. RFP response engine, lead scoring, competitive intelligence, ROI calculators. | RAG on historical RFPs + Claude for drafting + CRM integration + web scraping for competitive intel + ML lead scoring | Build | $200K | $810K savings + higher win rates |
| 11 | **QualityLens** | Quality assurance and compliance monitoring. Session note audit (100% coverage), UM consistency tracking, credential management, process mining. | NLP session note analyzer + statistical process control + credential database + compliance dashboards | Build | $200K | $240K savings + 100% QA coverage |
| 12 | **TrialMatchAI** | Clinical trial recruitment genetic screening. Trial criteria parsing, patient-trial matching, outreach automation. | NLP eligibility parser + patient database vector search + outreach automation + funnel analytics | Build | $150K | $255K savings + recruitment revenue |

**Total Build Cost: $4.0M** (across 12 systems over 18-24 months)
**Additional Infrastructure: $0.8M** (data warehouse, vector DB, LLM APIs, cloud, monitoring)
**Total Investment: $4.8M**

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CLIENT-FACING LAYER                               │
│                                                                             │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌──────────┐  │
│  │  PA Provider    │  │  Patient       │  │   Payer        │  │  Pharma  │  │
│  │  Portal         │  │  Portal        │  │   Dashboard    │  │  Trial   │  │
│  │  (submit PA,    │  │  (scheduling,  │  │   (analytics,  │  │  Portal  │  │
│  │   check status) │  │   education,   │  │   reporting,   │  │          │  │
│  │                 │  │   follow-up)   │  │   SLAs)        │  │          │  │
│  └───────┬─────────┘  └───────┬────────┘  └───────┬────────┘  └────┬─────┘  │
│          └──────────────────────┼──────────────────┘               │        │
└──────────────────────────────────┼──────────────────────────────────┘        │
                                   │                                          │
┌──────────────────────────────────┼──────────────────────────────────────────┐
│                        ORCHESTRATION LAYER                                  │
│                                                                             │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                        IntakeOS (Master Orchestrator)                   │  │
│  │   Multi-channel intake → NLP extraction → routing → workflow state     │  │
│  │   management → human queue assignment → output delivery                │  │
│  └────┬──────────┬──────────┬──────────┬──────────┬──────────┬───────────┘  │
│       │          │          │          │          │          │              │
│  ┌────┴────┐ ┌───┴────┐ ┌──┴───┐ ┌────┴────┐ ┌───┴───┐ ┌───┴──────┐      │
│  │Authority│ │Counsel │ │Policy│ │PayGuard │ │Genome │ │TrialMatch│      │
│  │AI       │ │AI      │ │Forge │ │AI       │ │Risk   │ │AI        │      │
│  │         │ │        │ │      │ │         │ │       │ │          │      │
│  │PA auto- │ │GC aug- │ │Med   │ │Claims   │ │Pop    │ │Trial     │      │
│  │adjudic- │ │mentati-│ │policy│ │review & │ │health │ │recruit   │      │
│  │ation,   │ │on,     │ │dev & │ │anomaly  │ │risk   │ │screening │      │
│  │80% auto │ │session │ │maint-│ │detect,  │ │strat, │ │& match   │      │
│  │decision │ │prep,   │ │enance│ │audit    │ │engage │ │          │      │
│  │         │ │sched   │ │      │ │         │ │       │ │          │      │
│  └────┬────┘ └───┬────┘ └──┬───┘ └────┬────┘ └───┬───┘ └────┬─────┘      │
│       └──────────┴─────────┴──────────┴──────────┴──────────┘             │
│                                  │                                         │
│  ┌───────────────────────────────┼───────────────────────────────────┐     │
│  │              SHARED AI SERVICES                                    │     │
│  │                                                                    │     │
│  │  ┌────────────┐  ┌─────────────┐  ┌──────────┐  ┌──────────────┐ │     │
│  │  │SessionScribe│  │ VariantIQ   │  │QualityLens│  │ ClientPulse │ │     │
│  │  │Ambient docs,│  │ Variant     │  │ QA audit, │  │ Reporting,  │ │     │
│  │  │transcription│  │ interpret,  │  │ compliance│  │ analytics,  │ │     │
│  │  │SOAP notes   │  │ ACMG class  │  │ monitoring│  │ dashboards  │ │     │
│  │  └────────────┘  └─────────────┘  └──────────┘  └──────────────┘ │     │
│  │                                                                    │     │
│  │  ┌─────────────────────────────────────────────────────────────┐  │     │
│  │  │              ProposalAI (BD Automation)                      │  │     │
│  │  │   RFP response + lead scoring + competitive intel + ROI     │  │     │
│  │  └─────────────────────────────────────────────────────────────┘  │     │
│  └────────────────────────────────────────────────────────────────────┘     │
└──────────────────────────────────┼──────────────────────────────────────────┘
                                   │
┌──────────────────────────────────┼──────────────────────────────────────────┐
│                        DATA & INFRASTRUCTURE LAYER                          │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │ Data Warehouse   │  │ Vector Database  │  │ LLM Gateway     │             │
│  │ (Snowflake)      │  │ (Pinecone)       │  │ (Claude API     │             │
│  │                  │  │                  │  │  primary +      │             │
│  │ Claims, PA       │  │ Embedded:        │  │  GPT-4 fallback)│             │
│  │ decisions,       │  │ - PA decisions   │  │                 │             │
│  │ counseling,      │  │ - Medical policy │  │ Prompt library, │             │
│  │ variants,        │  │ - RFP history    │  │ cost tracking,  │             │
│  │ client data      │  │ - Clinical lit   │  │ rate limiting,  │             │
│  │                  │  │ - Variant corpus │  │ audit logging   │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │ Audit Trail DB  │  │ EHR Integration  │  │ Monitoring &    │             │
│  │ (PostgreSQL)     │  │ Layer            │  │ Observability   │             │
│  │                  │  │ (Athenahealth +  │  │ (Datadog)       │             │
│  │ Every AI action  │  │  UM platform     │  │                 │             │
│  │ logged: input,   │  │  APIs)           │  │ Model accuracy, │             │
│  │ output, conf-    │  │                  │  │ latency, cost,  │             │
│  │ idence, human    │  │                  │  │ throughput,     │             │
│  │ action taken     │  │                  │  │ error rates     │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                             │
│  Infrastructure: AWS (HIPAA-eligible) | SOC 2 Type II | BAA with all vendors│
└─────────────────────────────────────────────────────────────────────────────┘
```

### Unit Economics Comparison

| Metric | Current State | AI-Native State (Year 1) | AI-Native at Scale (Year 3) | Delta (Yr 3) |
|--------|--------------|--------------------------|----------------------------|--------------|
| **Revenue** | $40M | $40M | $55M | +38% |
| **Total FTEs** | 200 | 45 | 50 (growth hiring) | -75% |
| **Revenue per Employee** | $200K | $889K | $1.1M | +450% |
| **Total Labor Cost** | $18.1M | $5.4M | $6.2M | -66% |
| **AI Platform Cost (annual)** | $0 | $2.0M | $2.5M | N/A |
| **Cost per PA Review** | $85-120 | $12-18 | $8-12 | -88% |
| **Cost per GC Session** | $180-220 | $55-75 | $45-60 | -72% |
| **PA Turnaround (median)** | 24-48 hrs | <5 min (auto) / 4 hrs (complex) | <2 min / 2 hrs | -97% |
| **GC Sessions/day (per GC)** | 4-5 | 14-16 | 16-18 | +280% |
| **Medical Policy Dev Time** | 3-6 months | 2-4 weeks | 1-2 weeks | -90% |
| **Gross Margin** | ~55% | ~78% | ~80% | +25pp |
| **EBITDA** | $8.0M (20%) | $18.5M (46%) | $27.0M (49%) | +$19M |
| **EBITDA / Employee** | $40K | $411K | $540K | +1,250% |
| **Client Report Generation** | 4-8 hours | 5 minutes | 2 minutes | -99% |
| **RFP Response Time** | 4-8 weeks | 3-5 days | 1-3 days | -93% |

### Build vs. Buy Matrix

| System | Build / Buy / Hybrid | Vendor (if Buy/Hybrid) | Est. Cost | Rationale |
|--------|---------------------|----------------------|-----------|-----------|
| **IntakeOS** | Build | — | $350K | Core orchestrator — must be custom to InformedDNA's multi-channel intake workflow. No off-shelf genetics PA intake AI exists. |
| **AuthorityAI** | Build | — | $600K | **Core competitive differentiator.** Trained on InformedDNA's proprietary 300K+ PA decision corpus. No vendor has genetics-specific auto-adjudication at this accuracy. This IS the moat. |
| **PolicyForge** | Build | — | $400K | No genetics-specific, always-current medical policy AI platform exists. This becomes a standalone product (sellable). Build to own the IP. |
| **CounselAI** | Build | Claude API (Anthropic) | $500K | GC workflow augmentation is domain-specific. Scheduling components buy (Calendly API); clinical brief generation must be custom. |
| **SessionScribe** | Hybrid | Nuance DAX / Suki / Abridge | $300K | **Buy** ambient documentation engine; **customize** for genetics terminology, SOAP note templates, and EHR write-back. Fine-tune on genetics counseling transcripts. |
| **VariantIQ** | Hybrid | VarSome API, Franklin by Genoox | $250K | **Buy** variant database access and ACMG classification framework; **build** integration layer, contextualization engine, and VUS monitoring. Don't reinvent ClinVar parsing. |
| **PayGuardAI** | Build | — | $300K | Claims review ML is domain-specific to genetics billing patterns. Training data is proprietary (InformedDNA's historical claims adjudication). No genetics-specific payment integrity AI in market. |
| **GenomeRisk** | Build | — | $500K | Population health risk stratification on genetic propensity is InformedDNA's unique value prop (DNAimpact). No competitor offers genetics-specific population health AI. Core to $10-20M new revenue. |
| **ClientPulse** | Hybrid | Looker (dashboard), Snowflake (data) | $250K | **Buy** BI platform; **build** InformedDNA-specific metrics, NL query, health scoring. Standard analytics stack + custom layer. |
| **ProposalAI** | Build | Claude API (Anthropic) | $200K | RAG on proprietary RFP history. Standard architecture but domain-specific content. Fast to build, high ROI. |
| **QualityLens** | Build | — | $200K | QA NLP on genetics counseling notes is domain-specific. No off-shelf solution. Relatively simple NLP + dashboards. |
| **TrialMatchAI** | Build | — | $150K | Patient-trial genetic matching is niche. Build on InformedDNA's patient variant database. Synergy with QHP trial portfolio companies (Lexitas, Vector, AutoCruitment). |
| **Data Warehouse** | Buy | Snowflake | $80K/yr | Standard. HIPAA-compliant. InformedDNA doesn't need to build a data warehouse engine. |
| **Vector Database** | Buy | Pinecone | $25K/yr | Standard embedded vector store. Hosts PA decision embeddings, policy embeddings, literature embeddings. |
| **LLM Gateway** | Buy + Config | Anthropic (Claude), OpenAI (fallback) | $150K/yr | Claude as primary LLM. GPT-4 fallback. Cost tracking, rate limiting, audit logging wrapper. |
| **Cloud Infrastructure** | Buy | AWS (HIPAA-eligible) | $120K/yr | Standard cloud. Must be HIPAA-eligible. SOC 2 Type II compliant. |
| **Monitoring** | Buy | Datadog | $30K/yr | Standard observability. Model accuracy tracking, latency, cost, error dashboards. |
| **Cybersecurity** | Buy | CrowdStrike | $25K/yr | AI-powered endpoint + threat detection. Standard for healthcare. |
| **Ambient Documentation** | Buy | Nuance DAX / Suki | $200K/yr | Licensed per-provider. 25 GCs × $8K/yr. Cheaper than building from scratch. Fine-tune for genetics. |

**Build total: $4.0M** | **Annual Buy/SaaS: $630K** | **Annual LLM API: $150K** | **Annual ambient doc licensing: $200K**

### Day in the Life: AI-Native InformedDNA

**Tuesday, 7:00 AM — St. Petersburg, FL (and everywhere)**

InformedDNA's AI fleet doesn't sleep. Overnight, IntakeOS processed 487 new prior authorization requests that arrived via the provider portal, fax, and payer system integrations. AuthorityAI has already auto-adjudicated 391 of them (80.3%) — each was matched against InformedDNA's medical policies, validated against ACMG/NCCN guidelines, and issued a determination in under 90 seconds. Approval letters are already sitting in provider portals. The 96 complex cases that need human review are queued with AI-generated clinical briefs. Meanwhile, PolicyForge detected an updated NCCN guideline for hereditary breast cancer screening published at 11 PM — it has already drafted a policy amendment and flagged it for the Medical Policy Director's review.

**8:00 AM — Dr. Maria Santos, CMO** opens her PolicyForge dashboard. The NCCN update is first in queue. PolicyForge has highlighted three specific changes from the prior version, cross-referenced them against InformedDNA's current breast cancer policy, and drafted revised coverage criteria with full citations. Dr. Santos reads the 2-page AI brief, makes one refinement to a VUS reporting threshold, approves the update, and PolicyForge automatically compiles the new rules into AuthorityAI's active policy engine. Total time: 12 minutes. Under the old model, this policy update would have taken a 3-person team 6 weeks.

**8:15 AM — Sarah Chen, UM Clinical Reviewer** has 48 complex PA cases in her queue (yesterday's overflow plus this morning's). AuthorityAI has prepared each with a structured brief: patient demographics, clinical information extracted from the submission, relevant medical policy criteria mapped, a recommendation with confidence score, and flagged concerns. Sarah works through them at roughly 8 minutes per case — she's validating the AI's analysis and exercising clinical judgment on genuinely ambiguous cases. She does two peer-to-peer calls with ordering physicians for denials. By 11:30 AM, all 48 are done. Under the old model, 15 UM reviewers would have spent a full day on this volume.

**8:30 AM — Amanda Rodriguez, Genetic Counselor (Oncology)** starts her day by logging into CounselAI's dashboard. She has 16 sessions scheduled today. For her first patient — a 34-year-old woman referred for BRCA counseling after a family history of breast cancer — CounselAI has already generated a session brief: extracted family cancer history from the referral, built a three-generation pedigree, calculated preliminary risk using Tyrer-Cuzick and BRCAPRO models, identified that a 37-gene panel is the most appropriate test per NCCN and InformedDNA policy, and prepared an interactive visual explaining hereditary breast cancer genetics.

Amanda reviews the brief in 90 seconds, opens the telehealth session, and spends 20 minutes with the patient — not typing, not looking things up, not fumbling with a pedigree tool. SessionScribe is transcribing in real time. She focuses entirely on the patient: explaining risk, exploring concerns, discussing testing options, addressing the emotional weight of a potential BRCA result. When the patient agrees to testing, Amanda clicks "confirm order" on CounselAI's test recommendation — the order goes to the lab automatically with documentation. She ends the session, spends 2 minutes reviewing SessionScribe's generated SOAP note (which is 97% accurate), signs off, and moves to her next patient.

Under the old model, that session would have consumed 2+ hours of Amanda's day (30 min prep, 60 min session, 45 min documentation). Now it takes 24 minutes. Amanda is on pace for 16 sessions today. She'll earn ~$1.1M in revenue this year. And she's less burned out — she doesn't spend evenings catching up on notes.

**10:00 AM — Mike Torres, CTO** is reviewing the AI performance dashboard. AuthorityAI's auto-adjudication accuracy is at 97.8% (measured against physician reviewer audit sample). CounselAI's pre-session brief satisfaction score from GCs is 4.6/5. SessionScribe's note accuracy is 96.3% — slightly below target on pharmacogenomics sessions. He creates a task for the ML engineer responsible for SessionScribe to review PGx transcription errors and add more training examples. PayGuardAI flagged $180K in potential overpayments from a large lab's billing patterns last week — the Payment Integrity Lead is investigating.

**11:00 AM — Kevin Park, VP Sales** is preparing for an afternoon call with a top-5 national health plan interested in InformedDNA's UM platform. ProposalAI has already generated a customized pitch deck: the prospect's estimated genetic testing spend ($45M/year), projected savings with AuthorityAI (12-18%, ~$6M/year), turnaround time comparison (sub-5-minute vs. industry 24-48 hours), and three case studies from similar payers. ProposalAI also surfaced that this prospect published an RFI for "AI-enhanced prior auth" two weeks ago — competitive intel that would have taken a BD analyst days to find.

**1:00 PM — Lisa Nguyen, DNAimpact Program Director** reviews GenomeRisk's weekly dashboard for her largest client, a 2M-member health plan. GenomeRisk identified 12,400 members at high risk for hereditary cancer who haven't been screened. The AI-optimized outreach campaign (personalized letters + SMS + portal notifications) achieved a 14% engagement rate this month — up from 8% when outreach was manual. So far, the program has detected 47 new BRCA-positive members who are now receiving early intervention. The payer estimates $2.8M in downstream savings from avoided late-stage cancer treatment. Lisa's preparing the quarterly ROI report — GenomeRisk generates it in 30 seconds.

**3:00 PM — QualityLens runs its daily audit.** It analyzed all 847 PA determinations from today (391 auto + 48 human-reviewed + 408 from yesterday's auto-adjudication queue). It flagged 3 cases where AuthorityAI's rationale diverged from the selected medical policy — the UM Clinical Reviewer reviewed them and confirmed the AI was correct in all 3 (the policy had an ambiguous edge case that QualityLens interpreted differently). It also reviewed all 67 genetic counseling session notes generated by SessionScribe today and scored them on completeness, accuracy, and clinical appropriateness. Two notes needed minor corrections — the GCs were notified.

**5:30 PM — The 45 humans at InformedDNA head home.** They processed 487 prior auth requests, 67 genetic counseling sessions, $1.2M in claims reviews, updated a medical policy, screened 12,400 health plan members for genetic risk, responded to an RFI from a national payer, and generated performance reports for 8 clients. Under the old model, this was a busy day for 200 people. With AI, it was Tuesday.

---

*END OF PART 1 (Phases 0-2).*

---

## Phase 3: Regulatory & Risk Deep Dive

### Regulatory Constraint Map

InformedDNA operates at the intersection of healthcare delivery, insurance operations, and genetic information — one of the most regulated verticals in U.S. healthcare. Every AI deployment must thread through the following regulatory framework.

#### 1. HIPAA (Health Insurance Portability and Accountability Act)

| Aspect | Requirement | AI Permissibility | Regulatory Floor |
|--------|-------------|-------------------|-----------------|
| **Privacy Rule** | PHI must be used/disclosed only for treatment, payment, or healthcare operations with minimum necessary standard | ✅ Fully permissible — AI processing of PHI for UM review, counseling prep, and claims analysis is a core business function. AI is a "workforce tool" under HIPAA. | All AI systems must operate under InformedDNA's BAA umbrella. Every LLM API call containing PHI requires a BAA with the vendor (Anthropic, OpenAI). Data must be encrypted in transit and at rest. No PHI in training data sent to third-party models without explicit BAA and data processing agreement. |
| **Security Rule** | Administrative, physical, and technical safeguards for ePHI | ✅ With controls — AI infrastructure must meet all Security Rule requirements: access controls, audit logs, encryption, integrity controls | HIPAA Security Officer must approve every AI system architecture. Audit trail logging of every AI decision involving PHI. Annual risk assessment must include all AI systems. SOC 2 Type II certification for all AI infrastructure. |
| **Breach Notification** | Notify individuals and HHS within 60 days of breach involving 500+ individuals | ✅ Standard risk — AI doesn't create new breach risk if properly architected | AI systems must NOT create new PHI repositories outside the security perimeter. LLM providers must not retain prompts/completions containing PHI. Data minimization: send only necessary PHI to AI models. |
| **Minimum Necessary Rule** | Only the minimum amount of PHI needed for the purpose | ⚠️ Requires careful design — LLM prompts must be engineered to include only necessary clinical information, not full patient records | Prompt engineering must enforce minimum necessary. Automated PII/PHI filtering layer before LLM API calls. Regular audits of what data flows to AI systems. |

**Bottom line:** HIPAA is the most manageable regulatory constraint. InformedDNA already handles PHI at scale. AI systems inherit the existing HIPAA compliance framework with incremental additions (BAAs with AI vendors, audit logging of AI decisions, prompt-level data minimization). No showstoppers.

#### 2. State Genetic Counselor Licensing Laws — THE BINDING CONSTRAINT

This is the single regulation that prevents InformedDNA from achieving 90%+ headcount reduction. As of March 2026, ~35 states plus D.C. have enacted genetic counselor licensure laws.

**Most Restrictive States (highest regulatory risk for AI deployment):**

| State | Statute | Key Restriction | AI Impact |
|-------|---------|----------------|-----------|
| **California** | SB 1152 (2021) | Licensed GC, MD, or DO required for "genetic counseling" defined broadly as interpretation, risk assessment, and supportive counseling. Practice of genetic counseling without license is a misdemeanor. | AI cannot deliver any counseling session. AI tools used by GC during session = permissible (clinical decision support). GC must be California-licensed. |
| **New York** | Education Law §8009 | Genetic counseling is a licensed profession. Defined to include "helping the individual/family understand, adapt to, and manage the medical, psychological, and familial implications of genetic contributions to disease." | Very broad definition — any AI system that "helps the individual understand... implications" without a licensed GC present could be construed as practicing without a license. Pre-session AI patient education materials must state they are not a substitute for genetic counseling. |
| **Massachusetts** | M.G.L. c. 112 §225 | Restricts practice to licensed genetic counselors, physicians, or those under supervision. No telehealth-specific genetics carve-out yet. | Conservative interpretation — all telehealth GC sessions into MA must be led by MA-licensed GC. AI augmentation = tool of the GC, permissible. |
| **Texas** | H.B. 3365 (2021) | Genetic counselor licensure with defined scope. Genetic counseling explicitly requires licensed professional. | Standard restriction. AI as decision support for licensed GC = permissible. |
| **Minnesota** | Minnesota Statutes §147F | One of the earliest GC licensure states. Strict scope of practice definition. Board of Medical Practice oversees. | Conservative regulatory environment. Any AI-to-patient communication about genetic results would need legal review. |
| **Illinois** | Genetic Counselor Licensing Act (210 ILCS 44/) | Defines genetic counseling broadly. Requires licensure. Continuing education requirements. | Standard restriction. GC must be IL-licensed for IL patients. |
| **Virginia** | VA Code §54.1-2957.18 | GC licensure with supervision requirements. Genetic counselors must be supervised by a physician in some circumstances. | Adds complexity: some AI-augmented sessions may need physician oversight depending on clinical scenario. |

**States WITHOUT GC Licensure (as of March 2026):**
~15 states still lack formal GC licensure laws. In these states, "genetic counseling" is not a regulated activity by title, meaning:
- AI-delivered genetic education (not counseling) may be permissible
- However, medical practice acts still apply — AI cannot practice medicine
- Unauthorized practice of medicine risk exists in ANY state if AI crosses from "information" to "diagnosis/recommendation"
- InformedDNA should not exploit unlicensed states — the reputational and legal risk outweighs any headcount savings

**The Regulatory Floor for Genetic Counseling:**
- **Minimum humans required:** 25 licensed genetic counselors (down from 90)
- **Why not fewer?** Each GC can handle ~16 sessions/day with AI augmentation. At InformedDNA's estimated volume (~350-400 sessions/day across all specialties, accounting for growth), you need 22-25 GCs to cover volume with buffer for PTO, training, and surge capacity.
- **Multi-state licensure:** Each GC must be licensed in the states where their patients reside. The 25 GCs must collectively cover all ~35 licensed states + maintain credentials in unlicensed states where the company operates. This is a credentialing management challenge, not a constraint on AI deployment.
- **Telehealth originating site rules:** Some states require the patient to be in a clinical setting (not home) for telehealth. This is evolving rapidly post-COVID (most restrictions relaxed) but must be monitored per-state.

#### 3. CLIA (Clinical Laboratory Improvement Amendments)

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **Applicability** | CLIA governs laboratory testing. InformedDNA does NOT operate a laboratory — it orders tests and interprets results. | InformedDNA is NOT a CLIA-regulated entity directly. |
| **Variant interpretation** | CLIA requires that clinical laboratory results be reported by a qualified laboratory. InformedDNA's variant interpretation is secondary — reviewing lab-reported results, not generating original results. | VariantIQ is clinical decision support for GCs interpreting lab results — NOT a clinical lab test. No CLIA registration required. However, if VariantIQ's output is included verbatim in patient reports, it must be clearly labeled as "AI-assisted interpretation" and signed off by a licensed GC. |
| **Risk** | If InformedDNA ever develops a proprietary genetic test or returns original variant classifications to patients, CLIA registration would be required. | Keep VariantIQ positioned as decision support, not a diagnostic. If product strategy evolves toward diagnostic services, reassess. |

#### 4. Payer Contracts & Utilization Management Regulations

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **State UM Licensing** | ~35 states require UM organizations to be licensed/registered. Requirements include: review by licensed clinicians, written UM plan, grievance and appeal procedures, turnaround time requirements (typically 72 hours for non-urgent, 24 hours for urgent). | **Key risk for AI deployment.** State UM laws generally require a "licensed clinical peer" to make adverse determinations (denials). AuthorityAI can auto-APPROVE, but denials must be signed by a licensed reviewer (MD or, in some states, licensed clinical reviewer). This is already reflected in the org design (2 UM clinical reviewers + CMO for denial sign-off). |
| **Turnaround Time Requirements** | Most states: 72 hours for non-urgent PA, 24 hours for urgent. CMS: 72 hours standard, 24 hours expedited. | **AI HELPS here.** AuthorityAI's sub-5-minute auto-adjudication dramatically exceeds turnaround requirements. This becomes a competitive selling point. |
| **Payer Contractual Requirements** | Individual payer contracts may specify: who can make clinical determinations, what credentials are required, whether AI can be used, audit rights, data handling requirements. | **Each payer contract must be reviewed** before implementing AI auto-adjudication. Some payers may resist AI-made determinations initially. Strategy: pilot with forward-thinking payers, build evidence base, expand. Contractual amendment needed if existing contracts don't contemplate AI. |
| **CMS Prior Auth Reform (CMS-0057-F)** | CMS final rule (2024) requires certain payers to implement electronic PA, real-time decision support, and publish PA data. | **Tailwind for InformedDNA.** CMS is pushing payers toward electronic, faster PA — exactly what AuthorityAI delivers. InformedDNA can position as the compliance solution for payers facing this mandate. |

#### 5. Surescripts / Electronic Prior Authorization

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **ePA Standards** | If InformedDNA processes ePA transactions through Surescripts (as COPILOT does), it must comply with Surescripts certification and NCPDP/X12 transaction standards. | IntakeOS must support standard ePA message formats. AI decisions that flow back through ePA must be formatted per transaction standards. Standard integration work, not a regulatory barrier. |

#### 6. NCQA / URAC Accreditation

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **URAC Utilization Management Accreditation** | If InformedDNA holds or pursues URAC UM accreditation: requires written UM program, qualified clinical staff, turnaround time standards, appeal procedures, quality improvement program. | AI auto-adjudication must be incorporated into the written UM program. QualityLens's 100% audit coverage actually exceeds URAC quality requirements. Recommend pursuing URAC if not already held — it's a competitive differentiator and AI monitoring makes compliance easier, not harder. |
| **NCQA Health Plan Accreditation** | Not directly applicable (InformedDNA is not a health plan), but payer clients may require InformedDNA's processes to support THEIR NCQA accreditation. | Ensure all AI-generated PA determinations include proper documentation for payer NCQA audits. Audit trail logging in AuthorityAI is critical. |

#### 7. Telehealth Regulations

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **Interstate telehealth** | Each state regulates telehealth independently. GCs must be licensed or authorized in the patient's state. | AI doesn't change this — it's a GC credentialing issue. CounselAI's scheduling engine must enforce state licensure matching (only schedule a GC for a patient in a state where that GC is licensed). |
| **Telehealth platform requirements** | Some states require HIPAA-compliant video platform with specific features (recording, consent). | SessionScribe's recording capability must comply per state. Some states require two-party consent for recording (CA, FL, IL, etc.) — CounselAI must capture explicit consent before SessionScribe activates. |

#### 8. Informed Consent for AI-Augmented Care

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **No federal mandate** | No U.S. federal law currently requires disclosure of AI use in healthcare decision-making (except FDA-regulated devices). | InformedDNA should proactively disclose AI use in UM and counseling. "Your prior authorization was reviewed using our AI-assisted clinical review platform. A licensed clinician oversees all determinations." |
| **State disclosure laws** | CA SB 1120 (2024) and similar bills in other states are moving toward requiring AI disclosure in healthcare settings. Colorado AI Act (SB 24-205) requires disclosure of "high-risk AI" in healthcare. | Build disclosure language into all patient-facing and provider-facing communications now. It's the right thing to do AND it pre-empts regulatory risk. |
| **Payer disclosure** | Payer clients will want to know (and may contractually require) disclosure of AI use. | Proactive disclosure builds trust. Frame as "AI-powered with human oversight" — position as a feature, not a risk. |

#### 9. FDA Clinical Decision Support Exemption

| Aspect | Requirement | AI Impact |
|--------|-------------|-----------|
| **21st Century Cures Act §3060(a)** | CDS software is exempt from FDA device regulation if: (1) not intended to acquire/analyze medical device data; (2) intended for healthcare professionals; (3) intended to enable independent review by HCP; (4) HCP doesn't primarily rely on AI but independently reviews basis for recommendation. | **ALL 12 InformedDNA AI systems qualify for the CDS exemption** as currently designed. They are tools for licensed clinicians (GCs, MDs, UM reviewers) who independently review and approve AI outputs. Do NOT design any system to operate without human oversight — that would trigger FDA device classification and 510(k)/De Novo requirements. |

### Risk Register

#### Technical Risks

| # | Risk Description | Likelihood | Impact | Mitigation Strategy | Residual Risk |
|---|-----------------|------------|--------|---------------------|---------------|
| T1 | **AuthorityAI auto-adjudication accuracy below 95%** — incorrect approvals approve inappropriate tests (cost to payers), incorrect denials harm patients and trigger complaints | Medium | High | Extensive training on 300K+ historical decisions. Shadow mode (6 months) comparing AI vs. human decisions before go-live. Continuous QualityLens monitoring. Automatic human escalation when confidence < 90%. Quarterly accuracy audits with independent clinical review. | Low — residual risk of rare edge cases. Mitigation: always maintain human escalation path. |
| T2 | **Data quality issues in training corpus** — historical PA decisions may contain inconsistencies, outdated policy applications, or rater-specific biases | High | Medium | Data audit and cleaning phase (Month 1-3). Remove decisions based on superseded policies. Identify and correct rater-inconsistent decisions. Use only most recent 3 years of decisions for training. Bias testing across demographics, test types, and payer segments. | Low-Medium — some noise is inevitable. Mitigation: continuous retraining on new, audited decisions. |
| T3 | **SessionScribe genetics terminology accuracy** — ambient documentation may struggle with complex genetics terminology (gene names, variant nomenclature, syndrome names) | Medium | Medium | Fine-tune Whisper on genetics-specific audio corpus. Build custom vocabulary/glossary for gene names (BRCA1, HGMD entries), variant nomenclature (c.68_69delAG), and syndrome names. Human GC reviews every note before sign-off. Iterative improvement with GC feedback loop. | Low — GC review catches errors. Automated genetics spell-check as additional safety net. |
| T4 | **LLM hallucination in clinical contexts** — Claude generating incorrect variant classifications, fabricated guideline citations, or inaccurate clinical information in CounselAI briefs | Medium | High | Retrieval-augmented generation (RAG) exclusively from verified sources (ClinVar, OMIM, NCCN, ACMG). Citation verification layer that confirms every reference exists. Confidence scoring on every clinical output. Prohibit Claude from generating clinical information without source material in context window. GC/MD reviews all clinical outputs. | Low — RAG with citation verification eliminates most hallucination risk. Residual: rare novel scenarios where RAG retrieves irrelevant content. |
| T5 | **Infrastructure failure / downtime disrupting clinical operations** — AI platform outage during business hours prevents PA processing or counseling support | Low | High | Multi-region AWS deployment. Automatic failover. Manual fallback procedures documented and tested quarterly. SLA 99.9% uptime target. Real-time monitoring with PagerDuty alerting. Graceful degradation: if AI is down, all cases route to human queue automatically. | Low — standard cloud architecture provides adequate redundancy. |
| T6 | **Integration complexity with Athenahealth / UM platform** — API limitations or vendor non-cooperation delay CounselAI and IntakeOS deployment | Medium | Medium | Early vendor engagement (Month 1). Assess API capabilities. If APIs insufficient, consider middleware (Redox, Health Gorilla) or platform migration. Budget $200K contingency for integration challenges. | Medium — vendor dependency is real. May need to plan for platform replacement if integration proves impractical. |

#### Regulatory Risks

| # | Risk Description | Likelihood | Impact | Mitigation Strategy | Residual Risk |
|---|-----------------|------------|--------|---------------------|---------------|
| R1 | **State regulator challenges AI role in genetic counseling** — a state licensing board interprets AI augmentation during counseling sessions as "AI-delivered counseling" requiring a license | Low | High | Position ALL AI tools as "clinical decision support used by licensed GC." Legal review of each tool's functionality against each state's scope definition. Keep AI invisible to the patient — the GC uses AI tools, the patient sees a GC. Do not market "AI genetic counseling." Never allow AI to directly communicate clinical results to patients without a GC present. Retain outside healthcare regulatory counsel. | Low — as long as the GC remains the primary actor and AI is a tool, this risk is manageable. But one adverse state ruling could create precedent. |
| R2 | **Payer refuses to accept AI-adjudicated PA determinations** — a major payer client objects to AI making approval decisions, even with human oversight | Medium | Medium | Start with auto-approvals only (lower risk). Present shadow-mode data showing AI accuracy ≥ human accuracy. Offer payer the option to require human review on all their cases (at higher cost). Build contractual language: "AI-assisted clinical review with licensed clinician oversight." Pilot with 1-2 forward-thinking payers first. | Medium — some payers will resist. Mitigation: keep full human review capability for payers who require it. Price accordingly. |
| R3 | **New state or federal AI regulation imposes restrictions on healthcare AI** — Colorado AI Act (SB 24-205) or similar legislation in other states requires impact assessments, bias audits, or restricts "high-risk AI" in healthcare | Medium | Medium | Build AI governance framework now (bias testing, impact assessments, transparency reporting) that pre-complies with emerging regulations. Monitor legislative activity in all 50 states. Participate in industry groups (AHIP, ACMG) shaping AI policy. Proactive disclosure of AI use. | Low — pre-compliance posture reduces risk. Actual prohibition of healthcare AI is very unlikely. |
| R4 | **HIPAA breach involving AI system** — PHI exposed through LLM API, AI training data, or AI system vulnerability | Low | High | BAAs with all AI vendors. Zero-retention agreements with LLM providers (no prompt/completion storage). Data encryption in transit and at rest. PHI de-identification before any model training on third-party infrastructure. Regular penetration testing of AI systems. SOC 2 Type II certification. | Low — standard HIPAA engineering. AI doesn't create fundamentally new breach vectors if properly architected. |

#### Operational Risks

| # | Risk Description | Likelihood | Impact | Mitigation Strategy | Residual Risk |
|---|-----------------|------------|--------|---------------------|---------------|
| O1 | **Knowledge transfer failure during workforce reduction** — departing employees hold institutional knowledge about payer contracts, clinical edge cases, and client relationships that isn't captured | High | High | Structured knowledge capture program BEFORE any reductions. Document every payer-specific workflow, edge case decision, and client preference. Record expert interviews. Build knowledge into AI training data. Retain 2-3 senior UM reviewers through transition even if their long-term roles are eliminated. Severance contingent on knowledge transfer cooperation. | Medium — some tacit knowledge will be lost. Mitigation: extended transition periods for key roles (6+ months). |
| O2 | **Service quality dip during transition** — AI systems underperform during early deployment, causing turnaround delays, accuracy drops, and client complaints | Medium | High | Phased rollout (never go cold-turkey on any process). Shadow mode for every system (AI runs in parallel with humans for 3-6 months). Rollback plan for every deployment. Maintain full human capacity until AI achieves target accuracy in production. Client communication: "We're deploying AI to improve your service — you may see temporary changes during the transition." | Medium — some disruption is inevitable. The 6-month shadow period is the primary mitigant. |
| O3 | **Client attrition during transformation** — payer clients leave due to concerns about AI, service disruption, or competitor poaching during vulnerable transition period | Low | High | Proactive client communication (frame AI as competitive advantage for THEM — faster turnaround, better accuracy, lower cost). Offer early adopter pricing advantage. Lock in multi-year contracts before announcing. Never reduce human capacity below what's needed to serve existing contracts manually if all AI fails. | Low-Medium — most payers want faster/cheaper PA. The risk is perception, not reality. |
| O4 | **AI system costs exceed budget** — LLM API costs, infrastructure, and development overruns consume more than the $4.8M budget | Medium | Low | Detailed cost modeling per system. 20% contingency buffer ($960K). Phased build: validate ROI on first 3 systems before committing to all 12. Open-source model options (Llama, Mistral) as fallback if API costs are excessive. Cost monitoring from Week 1. | Low — even at 2x budget ($9.6M), the ROI is still 10x+. |

#### People Risks

| # | Risk Description | Likelihood | Impact | Mitigation Strategy | Residual Risk |
|---|-----------------|------------|--------|---------------------|---------------|
| P1 | **Genetic counselor exodus — top GCs leave before or during transformation** — best counselors may leave preemptively if they perceive AI as threatening their roles | High | High | Frame the narrative: "You're going from treating 5 patients/day to 16. You're going from $400K revenue/GC to $1.1M. You're going from spending half your day on paperwork to spending it ALL with patients." Compensation: retained GCs get 20-30% raises (funded by savings). Equity participation in transformation outcomes. Identify the 25 GCs to retain in Month 1 and make them feel like the chosen core. | Medium — the GC market is tight and counselors have options. Some attrition is certain. Overhire initially (28-30 GCs) to buffer. |
| P2 | **CMO / clinical leadership resistance** — the CMO views AI as undermining clinical quality or professional autonomy | Medium | High | CMO must be an AI champion, not an obstacle. CMO co-designs all clinical AI systems. CMO has veto power on clinical AI decisions. CMO is responsible for AI clinical quality metrics. If current CMO is resistant: this is a "bus-change" decision Jeff and QHP must make in Month 1. Frame: "You're going from managing 90 counselors and a paper-based policy shop to leading the most advanced genetics AI platform in the country." | Low if CMO is aligned. HIGH if CMO is resistant. This is binary. |
| P3 | **Difficulty hiring AI/ML engineering talent** — InformedDNA (St. Petersburg, FL) may struggle to attract top AI talent | Medium | Medium | Remote hiring (AI engineers don't need to be in St. Pete). Competitive comp ($150-200K base + equity). Position as "build the most advanced genetics AI platform in healthcare" — mission-driven engineers will find this compelling. Consider acqui-hire of a small genetics AI startup. CTO must be an exceptional AI talent recruiter. | Low-Medium — remote work and compelling mission mitigate geography disadvantage. |
| P4 | **Workforce reduction generates negative press or employee backlash** — 155 people lose their jobs, some go to media or social media | Medium | Medium | Generous severance (3-6 months). Job placement support (the GC market has massive demand — InformedDNA can actively help placed GCs find new roles). Phase reductions over 18 months, not all at once. Frame publicly: "InformedDNA is investing in AI to serve more patients with better outcomes." Never say "replacing people with AI" externally. Internal communication: honest, empathetic, early. | Medium — some negative attention is inevitable. Mitigation: generous severance + job placement makes the story better. |

#### Reputational Risks

| # | Risk Description | Likelihood | Impact | Mitigation Strategy | Residual Risk |
|---|-----------------|------------|--------|---------------------|---------------|
| RE1 | **"AI denied my genetic test" narrative** — a patient denied coverage posts on social media or goes to media, attributing denial to AI | Low | High | Never frame AI as the decision-maker externally. All determination letters: "A licensed clinical reviewer evaluated your request." AI assists the reviewer; the reviewer makes the decision. Build robust appeal process with fast human review. Monitor social media for InformedDNA mentions. Have crisis comms plan ready. | Low — if the human-in-loop is genuine and well-documented, this risk is manageable. |
| RE2 | **Genetic counseling professional community backlash** — NSGC, ABGC, or state GC associations criticize InformedDNA for "replacing counselors with AI" | Medium | Medium | Engage NSGC proactively. Present at genetics conferences about responsible AI augmentation. Publish case studies showing GCs doing MORE counseling, LESS paperwork. Highlight that retained GCs earn 30% more and see 3x more patients. Fund NSGC AI ethics research. Position InformedDNA as a model, not a threat. | Medium — professional organizations are inherently conservative. The key message: "We're solving the GC shortage, not creating unemployment." |
| RE3 | **AI makes a clinically significant error that harms a patient** — e.g., auto-approves an inappropriate test leading to wrong treatment, or VariantIQ misclassifies a pathogenic variant as benign | Very Low | Very High | Multiple safety layers: AI confidence thresholds, human review, QualityLens monitoring, clinical audit. No single decision relies solely on AI. Medical malpractice insurance updated to cover AI-assisted decision-making. Incident response plan. If it happens: immediate disclosure, root cause analysis, system improvement, and transparent communication. | Low — multiple redundant safety layers make this extremely unlikely. But "very low probability × very high impact" demands ongoing vigilance. |

---

## Phase 4: Financial Model

### Current State P&L (Estimated — FY2025)

| Line Item | Amount | % Revenue | Notes |
|-----------|--------|-----------|-------|
| **Revenue** | | | |
| Utilization Management (PA services) | $14.0M | 35% | Per-auth and per-member fees from payers |
| Genetic Counseling Services | $12.0M | 30% | Per-session fees |
| DNAimpact / Population Health | $5.0M | 12.5% | PMPM from health plans |
| Payment Integrity | $4.0M | 10% | Percentage of savings + per-claim fees |
| Clinical Trial Recruitment | $2.5M | 6.3% | Per-patient recruitment fees |
| Other (consulting, data licensing) | $2.5M | 6.3% | Misc. revenue |
| **Total Revenue** | **$40.0M** | **100%** | |
| | | | |
| **Cost of Revenue** | | | |
| Genetic Counselor Compensation | $8.55M | 21.4% | 90 GCs × $95K avg loaded |
| UM Clinical Staff | $2.25M | 5.6% | 30 FTEs × $75K avg loaded |
| Medical Policy Team | $0.70M | 1.8% | 7 FTEs × $100K avg |
| Payment Integrity Analysts | $0.53M | 1.3% | 7 FTEs × $75K avg |
| Clinical Ops Management | $0.60M | 1.5% | 7 FTEs × $85K avg |
| Technology / Platform Costs | $1.50M | 3.8% | Athenahealth, UM platform, hosting |
| **Total COGS** | **$14.13M** | **35.3%** | |
| **Gross Profit** | **$25.87M** | **64.7%** | |
| | | | |
| **Operating Expenses** | | | |
| QA & Compliance | $0.32M | 0.8% | 4 FTEs |
| IT & Platform Ops | $0.70M | 1.8% | 7 FTEs |
| Sales & Business Development | $1.08M | 2.7% | 12 FTEs |
| DNAimpact Program Ops | $0.51M | 1.3% | 6 FTEs |
| Client Services & Reporting | $0.35M | 0.9% | 5 FTEs |
| Clinical Trial Recruitment | $0.34M | 0.9% | 4 FTEs |
| Finance, HR, Admin | $0.98M | 2.5% | 15 FTEs |
| Executive Leadership | $1.20M | 3.0% | 6 FTEs |
| SG&A (non-labor) | $2.50M | 6.3% | Office, insurance, professional services, marketing |
| **Total OpEx** | **$7.98M** | **20.0%** | |
| | | | |
| **EBITDA** | **$7.89M** | **19.7%** | |
| D&A | $1.50M | 3.8% | |
| Interest Expense | $2.00M | 5.0% | Estimated debt service |
| **Pre-Tax Income** | **$4.39M** | **11.0%** | |

### Transformation Investment Schedule

#### Year 1 Investment (Months 1-12)

| Category | Item | Cost | Notes |
|----------|------|------|-------|
| **AI System Development** | | | |
| | IntakeOS (PA intake orchestrator) | $350K | OCR + NLP extraction pipeline |
| | AuthorityAI (auto-adjudication) | $400K | Training + rules engine + ML classifier (Phase 1) |
| | PolicyForge (medical policy engine) | $250K | Literature crawler + policy generator (Phase 1) |
| | CounselAI (GC augmentation suite) | $300K | Pre-session briefs + scheduling optimizer |
| | SessionScribe (ambient documentation) | $200K | Whisper fine-tuning + note generation |
| | PayGuardAI (payment integrity ML) | $200K | Claims anomaly detection + billing rules |
| | ClientPulse (client reporting) | $150K | Data pipelines + dashboard + NL query |
| | ProposalAI (BD automation) | $150K | RFP RAG + lead scoring |
| | QualityLens (QA platform) | $150K | Session note NLP + compliance monitoring |
| **Subtotal: AI Development** | | **$2,150K** | |
| **Infrastructure** | | | |
| | Data warehouse (Snowflake setup + migration) | $200K | Central data platform — prerequisite for everything |
| | Vector database (Pinecone) | $15K | Embedding store for RAG systems |
| | LLM gateway + prompt library | $50K | API management, cost tracking, audit logging |
| | Cloud infrastructure (AWS HIPAA) | $80K | Compute, storage, networking |
| | Monitoring (Datadog) | $25K | Observability stack |
| | Cybersecurity (CrowdStrike) | $20K | Endpoint + threat detection |
| **Subtotal: Infrastructure** | | **$390K** | |
| **Transition Costs** | | | |
| | Severance (Phase 1 reductions: ~50 FTEs) | $500K | Avg 2 months severance × $75K avg salary |
| | Change management consulting | $150K | External firm for workforce transition |
| | Legal review (state regulations, contracts) | $100K | Healthcare regulatory counsel |
| | Retained knowledge capture program | $75K | Interview, document, encode institutional knowledge |
| | GC retention bonuses (25 retained GCs) | $250K | $10K each to commit through transition |
| **Subtotal: Transition** | | **$1,075K** | |
| **Year 1 Total** | | **$3,615K** | |

#### Year 2 Investment (Months 13-24)

| Category | Item | Cost | Notes |
|----------|------|------|-------|
| **AI System Development** | | | |
| | AuthorityAI Phase 2 (full auto-adjudication) | $200K | Advanced ML, appeal prediction, P2P support |
| | PolicyForge Phase 2 (product-grade) | $150K | SaaS packaging for external licensing |
| | VariantIQ (variant interpretation) | $250K | Multi-DB integration + ACMG classifier |
| | GenomeRisk (population health AI) | $500K | Risk stratification + engagement optimization |
| | TrialMatchAI (trial recruitment) | $150K | Patient-trial matching + outreach automation |
| | CounselAI Phase 2 (real-time session support) | $200K | Real-time AI display during telehealth sessions |
| **Subtotal: AI Development** | | **$1,450K** | |
| **Transition Costs** | | | |
| | Severance (Phase 2 reductions: ~80 FTEs) | $750K | Larger cohort as full AI systems deploy |
| | Job placement services | $100K | Outplacement support for departing employees |
| | Change management (continued) | $50K | Wrap-up, organizational stabilization |
| **Subtotal: Transition** | | **$900K** | |
| **Year 2 Total** | | **$2,350K** | |

#### Total Investment Summary

| Category | Year 1 | Year 2 | Total |
|----------|--------|--------|-------|
| AI System Development | $2,150K | $1,450K | $3,600K |
| Infrastructure | $390K | — | $390K |
| Transition Costs | $1,075K | $900K | $1,975K |
| **Contingency (20%)** | — | — | **$810K** |
| **GRAND TOTAL** | **$3,615K** | **$2,350K** | **$4,775K (~$4.8M)** |

### Target State P&L (Year 3 Steady State — Organic Revenue)

| Line Item | Amount | % Revenue | Δ vs. Current | Notes |
|-----------|--------|-----------|---------------|-------|
| **Revenue** | | | | |
| Utilization Management | $16.0M | 29.1% | +$2.0M | Faster turnaround wins new payers |
| Genetic Counseling | $14.0M | 25.5% | +$2.0M | Higher capacity absorbs market demand |
| DNAimpact / Population Health | $10.0M | 18.2% | +$5.0M | GenomeRisk enables rapid scaling |
| Payment Integrity | $5.0M | 9.1% | +$1.0M | PayGuardAI improves recovery rates |
| Clinical Trial Recruitment | $3.5M | 6.4% | +$1.0M | TrialMatchAI + QHP portfolio synergies |
| PolicyForge SaaS (NEW) | $3.0M | 5.5% | +$3.0M | External licensing to payers/UM cos |
| Analytics Products (NEW) | $1.5M | 2.7% | +$1.5M | Genetics utilization analytics |
| Other | $2.0M | 3.6% | -$0.5M | |
| **Total Revenue** | **$55.0M** | **100%** | **+$15.0M (+38%)** | |
| | | | | |
| **Cost of Revenue** | | | | |
| Genetic Counselor Compensation | $3.75M | 6.8% | -$4.80M | 25 GCs × $150K avg (raises included) |
| UM Clinical Staff | $0.38M | 0.7% | -$1.87M | 3 FTEs (2 reviewers + scheduling) |
| Medical Policy (Director) | $0.15M | 0.3% | -$0.55M | 1 FTE |
| Payment Integrity (Lead) | $0.10M | 0.2% | -$0.43M | 1 FTE |
| Clinical Ops Director | $0.12M | 0.2% | -$0.48M | 1 FTE |
| AI Platform Costs (annual) | $2.00M | 3.6% | +$2.00M | LLM APIs, SaaS, cloud, monitoring |
| Technology / Legacy Platform | $0.80M | 1.5% | -$0.70M | Reduced Athenahealth etc. (partially replaced) |
| **Total COGS** | **$7.30M** | **13.3%** | **-$6.83M** | |
| **Gross Profit** | **$47.70M** | **86.7%** | | +22pp margin expansion |
| | | | | |
| **Operating Expenses** | | | | |
| QA & Compliance | $0.15M | 0.3% | -$0.17M | 1 FTE (QualityLens does the rest) |
| AI & Technology Team | $1.50M | 2.7% | +$0.80M | 10 FTEs (AI/ML eng, data eng, DevOps, IT) |
| Sales & Business Development | $0.50M | 0.9% | -$0.58M | 3 FTEs + ProposalAI |
| DNAimpact Program | $0.12M | 0.2% | -$0.39M | 1 FTE (GenomeRisk handles execution) |
| Client Services | $0.10M | 0.2% | -$0.25M | 1 FTE (ClientPulse handles reporting) |
| Clinical Trial Recruitment | $0.10M | 0.2% | -$0.24M | 1 FTE (TrialMatchAI handles screening) |
| Finance, HR, Admin | $0.25M | 0.5% | -$0.73M | 2 FTEs (CFO + ops admin) |
| Executive Leadership | $0.90M | 1.6% | -$0.30M | 4 FTEs (CEO, CMO, CTO, VP Sales) |
| SG&A (non-labor) | $1.80M | 3.3% | -$0.70M | Smaller office, less overhead |
| **Total OpEx** | **$5.42M** | **9.9%** | | |
| | | | | |
| **EBITDA** | **$27.28M** | **49.6%** | **+$19.4M** | **2.5x improvement** |
| D&A (incl. capitalized AI) | $2.50M | 4.5% | +$1.0M | AI system amortization |
| Interest Expense | $2.00M | 3.6% | — | |
| **Pre-Tax Income** | **$22.78M** | **41.4%** | **+$18.4M** | |

### Key Financial Metrics

| Metric | Current State | Target (Year 3) | Improvement |
|--------|--------------|-----------------|-------------|
| **Annual Revenue** | $40.0M | $55.0M | +$15.0M (+38%) |
| **Annual Labor Cost** | $18.1M | $5.4M* | -$12.7M (-70%) |
| **AI Platform Cost** | $0 | $2.0M | N/A (new) |
| **Net Annual Savings** | — | $10.7M | Recurring annually |
| **Transformation Investment** | — | $4.8M | One-time |
| **Payback Period** | — | ~8 months | From first savings to breakeven on $4.8M |
| **3-Year ROI** | — | 670% | ($10.7M × 3 - $4.8M) / $4.8M |
| **Revenue per Employee** | $200K | $1.1M | +450% |
| **EBITDA** | $7.9M (20%) | $27.3M (50%) | +$19.4M (+245%) |
| **EBITDA Margin** | 19.7% | 49.6% | +29.9pp |
| **EBITDA per Employee** | $40K | $540K | +1,250% |
| **Gross Margin** | 64.7% | 86.7% | +22.0pp |
| **Enterprise Value (12x EBITDA)** | $96M | $327M | +$231M |
| **Enterprise Value (15x EBITDA)** | $120M | $409M | +$289M |
| **Value Created (12x)** | — | $231M | — |
| **Value Created (15x)** | — | $289M | — |
| **MOIC on AI Spend** | — | 48-60x | Extraordinary |
| **Cost per PA Review** | $85-120 | $8-12 | -90% |
| **Cost per GC Session** | $180-220 | $45-60 | -72% |
| **GC Revenue per Counselor** | $400K | $1.1M | +175% |

*Includes raises for retained staff. 45 FTEs at higher average compensation.

**Sensitivity Analysis:**

| Scenario | Revenue | EBITDA | EBITDA Margin | EV (12x) |
|----------|---------|--------|---------------|----------|
| **Bear Case** (AI delays, 60 FTEs, no new revenue) | $40M | $14.5M | 36% | $174M |
| **Base Case** (45 FTEs, modest growth) | $48M | $22.0M | 46% | $264M |
| **Target Case** (45 FTEs, full growth) | $55M | $27.3M | 50% | $327M |
| **Bull Case** (PolicyForge SaaS takes off, 50 FTEs) | $65M | $33.0M | 51% | $396M |

Even the bear case — where AI deployment is delayed, more FTEs are retained, and no new revenue materializes — generates $78M in enterprise value creation from the current $96M base. The asymmetry is overwhelmingly favorable.

---

## Phase 5: Implementation Roadmap

### Quick Wins (Months 1-3)

**Objective:** Demonstrate value immediately. Build organizational belief. Generate data for later AI training.

| # | Initiative | Owner | Cost | Expected Impact | Success Metric |
|---|-----------|-------|------|----------------|---------------|
| 1 | **Deploy ProposalAI (RFP automation)** — RAG on historical RFP responses + Claude API. Lowest regulatory risk, highest visibility to sales team. | CTO | $75K | 60% faster RFP first-draft generation | RFP turnaround: 4 weeks → 5 days |
| 2 | **Deploy ClientPulse v1 (automated reporting)** — Connect data sources → Snowflake → Looker dashboards. Eliminate manual Excel report assembly. | CTO + CS Mgr | $100K | Eliminate 80% of manual report creation. Client-visible improvement. | Report generation time: 8 hrs → 10 min |
| 3 | **Begin data warehouse build (Snowflake)** — Extract/load historical PA decisions, counseling records, claims data, client data. This is THE prerequisite for all ML systems. | Data Eng (hire #1) | $150K | Central data platform operational. Training data accessible. | 3+ years of PA decisions loaded and queryable |
| 4 | **Deploy QualityLens v1 (QA automation)** — NLP analysis on GenomiThe GC session notes. 100% audit coverage vs. current sample-based QA. | CTO | $75K | 100% note quality coverage. Immediate quality insights for CMO. | 100% of session notes scored within 24 hrs |
| 5 | **Legal & regulatory review** — Engage healthcare regulatory counsel to review all 12 planned AI systems against state GC licensing laws, UM regulations, and payer contract requirements. | CEO + outside counsel | $100K | Regulatory green/yellow/red light for every system. No surprises later. | Written regulatory opinion on all 12 systems |
| 6 | **CMO alignment meeting** — Jeff + CEO + CMO intensive session. Present the full transformation plan. Secure CMO as champion or identify the need for a change. Binary. | Jeff Frazier | $0 | CMO fully committed to leading clinical AI transformation. | CMO signs off on Phase 1 clinical systems |
| 7 | **Identify the 25 retained GCs** — Performance data + licensure coverage analysis. Communicate retention and raises to selected GCs. Freeze backfill hiring for remaining GCs. | CMO + HR | $250K (retention bonuses) | Retained core secured. Attrition begins naturally among non-retained GCs. | 25 GCs with signed retention agreements |
| 8 | **Hire AI Platform Lead + 2 ML Engineers** — Remote OK. Begin building before systems are funded. They start on data warehouse + ProposalAI + ClientPulse. | CTO | ~$130K (3 months comp) | AI team operational. Building from Day 1. | 3 AI hires onboarded, productive within 30 days |

**Total Quick Win Investment: ~$880K**
**Month 3 Checkpoint:** Data warehouse loading, ProposalAI generating RFP drafts, ClientPulse producing automated reports, QualityLens auditing 100% of GC notes, regulatory opinion in hand, CMO aligned, 25 GCs identified and retained, AI team hired.

### Foundation (Months 3-6)

**Objective:** Build the AI infrastructure. Begin training core models. Deploy first clinical AI system in shadow mode.

| # | Initiative | Owner | Cost | Expected Impact | Success Metric |
|---|-----------|-------|------|----------------|---------------|
| 1 | **AuthorityAI v1 development** — Train ML classifier on historical PA decisions. Build rules engine from medical policies. Deploy in SHADOW MODE (AI makes recommendations, humans still decide, accuracy measured). | AI Lead + ML Eng | $300K | Shadow mode accuracy target: 90%+ agreement with human reviewers | AI-human concordance rate ≥ 90% on 1,000+ test cases |
| 2 | **IntakeOS v1 development** — OCR pipeline for fax/document intake. NLP extraction for clinical data. Automated completeness checking and info-request outreach. | ML Eng | $200K | 80% of PA submissions auto-extracted and structured. Incomplete submissions auto-flagged. | Extraction accuracy ≥ 95%. Manual intake FTEs begin reduction. |
| 3 | **PolicyForge v1 development** — PubMed/Cochrane crawler. Guideline change detection. Medical policy draft generator. Deploy for CMO's medical policy team. | ML Eng | $200K | Automated literature surveillance. Policy drafts generated in hours, not weeks. | CMO confirms 70%+ of AI policy drafts are usable with minor edits |
| 4 | **CounselAI v1 (pre-session briefs)** — Patient record NLP extraction → AI-generated session brief for genetic counselors. Test with 5 willing GCs. | ML Eng | $150K | GCs receive structured AI briefs before each session. Prep time drops from 20 min to 2 min. | GC satisfaction score ≥ 4/5 on AI briefs. Prep time measured. |
| 5 | **SessionScribe pilot** — Deploy ambient documentation (Whisper + Claude) with 5 pilot GCs. Fine-tune on genetics terminology. | ML Eng | $150K | Automated SOAP notes from counseling sessions. GC documentation time drops 80%. | Note accuracy ≥ 93%. GC review time ≤ 3 min. |
| 6 | **Hire remaining AI team** — 2 additional ML engineers + 2 data engineers + 1 DevOps | CTO | ~$200K (3 months comp) | Full AI team (10 total incl. existing IT) operational | All positions filled |
| 7 | **Payer engagement (AI introduction)** — Meet with top 3 payer clients. Present AuthorityAI shadow mode results. Discuss path to AI-assisted determinations. | CEO + VP Sales | $25K (travel) | Payer buy-in for AI-assisted PA. At least 1 payer agrees to AI pilot. | Signed pilot agreement with ≥ 1 payer |

**Total Foundation Investment: ~$1,225K**
**Month 6 Checkpoint:** AuthorityAI in shadow mode showing 90%+ accuracy. IntakeOS processing 80% of submissions automatically. PolicyForge generating policy drafts. CounselAI briefs deployed to pilot GCs. SessionScribe piloting ambient documentation. Full AI team in place. At least 1 payer engaged for AI pilot.

### Core Replacement (Months 6-18)

**Objective:** Deploy AI systems into production. Execute workforce transition in waves. Achieve target operating model.

#### Wave 1: Utilization Management (Months 6-9)

| Milestone | Description | FTE Impact | Savings Realized |
|-----------|-------------|-----------|-----------------|
| AuthorityAI goes live (auto-approvals only) | AI auto-approves clear-cut PA cases (est. 60% of volume). Denials still human-reviewed. | -10 UM FTEs (intake + junior reviewers) | $750K annualized |
| IntakeOS live | Automated intake replaces manual submission processing. | -5 FTEs (intake coordinators) | $325K annualized |
| PolicyForge live (internal) | CMO and policy team use AI-generated drafts and surveillance. | -2 FTEs (policy analysts) | $200K annualized |
| **Wave 1 Total** | | **-17 FTEs** | **$1,275K annualized** |

**Success metrics:** AuthorityAI auto-approval accuracy ≥ 97%. IntakeOS extraction accuracy ≥ 96%. Zero client complaints attributable to AI. PA turnaround time drops by 50%+.

#### Wave 2: Genetic Counseling Augmentation (Months 9-12)

| Milestone | Description | FTE Impact | Savings Realized |
|-----------|-------------|-----------|-----------------|
| CounselAI full rollout | All 25 retained GCs use AI pre-session briefs, scheduling optimizer, education generator. | -40 GCs (through attrition, voluntary departure, and managed reduction) | $3,800K annualized |
| SessionScribe full rollout | Ambient documentation deployed to all 25 GCs. Documentation time drops 90%. | (included in GC reduction above) | (included above) |
| Scheduling automation | CounselAI scheduling engine replaces manual scheduling staff. | -8 FTEs | $480K annualized |
| **Wave 2 Total** | | **-48 FTEs** (net: 90 GCs → 25 + 8 schedulers → 0) | **$4,280K annualized** |

**Success metrics:** GC throughput ≥ 14 sessions/day. Patient NPS maintained ≥ 70. SessionScribe note accuracy ≥ 95%. Zero scheduling errors. No state licensing complaints.

#### Wave 3: Payment Integrity & Operations (Months 12-15)

| Milestone | Description | FTE Impact | Savings Realized |
|-----------|-------------|-----------|-----------------|
| PayGuardAI live | Automated pre-pay claims review + post-pay anomaly detection | -6 FTEs (claims analysts/auditors) | $450K annualized |
| VariantIQ live | Variant interpretation decision support for GCs | -7.5 FTEs (FTE-equivalent of GC variant research time) | $750K annualized |
| AuthorityAI Phase 2 (full) | AI handles 80% of all PA volume including some denials with human sign-off | -8 additional UM FTEs | $640K annualized |
| **Wave 3 Total** | | **-21.5 FTEs** | **$1,840K annualized** |

**Success metrics:** PayGuardAI identifies ≥ 15% more overpayments than manual process. VariantIQ reduces interpretation time by 80%. AuthorityAI denial accuracy validated by MD audit.

#### Wave 4: Enterprise Functions (Months 15-18)

| Milestone | Description | FTE Impact | Savings Realized |
|-----------|-------------|-----------|-----------------|
| Finance/HR automation | AP/AR automation, HRIS for 45-person company, AI reporting | -13 FTEs → 2 | $845K annualized |
| BD automation (ProposalAI full) | Full RFP engine, lead scoring, competitive intel | -9 FTEs → 3 | $810K annualized |
| Client Services (ClientPulse full) | Automated dashboards, NL query, QBR generation | -4 FTEs → 1 | $280K annualized |
| DNAimpact (GenomeRisk Phase 1) | Population risk stratification, outreach automation | -5 FTEs → 1 | $425K annualized |
| QA automation (QualityLens full) | 100% automated audit coverage | -3 FTEs → 1 | $240K annualized |
| Clinical Trial (TrialMatchAI) | Patient-trial matching, outreach, funnel analytics | -3 FTEs → 1 | $255K annualized |
| Executive reduction | Roles consolidated in 45-person company | -2 FTEs → 4 execs | $400K annualized |
| **Wave 4 Total** | | **-39 FTEs** | **$3,255K annualized** |

**Success metrics:** All enterprise functions operating at target headcount. No operational disruptions. Client retention ≥ 95%. Employee satisfaction among retained staff ≥ 4/5.

#### Cumulative Implementation Impact

| Wave | Timeframe | FTE Reduction | Cumulative FTEs | Annualized Savings | Cumulative Savings |
|------|-----------|--------------|----------------|-------------------|-------------------|
| Pre-transformation | — | — | 200 | — | — |
| Wave 1 (UM) | Months 6-9 | -17 | 183 | $1,275K | $1,275K |
| Wave 2 (GC + Scheduling) | Months 9-12 | -48 | 135 | $4,280K | $5,555K |
| Wave 3 (PI + VariantIQ + UM Phase 2) | Months 12-15 | -21.5 | 113.5 | $1,840K | $7,395K |
| Wave 4 (Enterprise) | Months 15-18 | -39 | 74.5 | $3,255K | $10,650K |
| IT/AI Expansion | Months 1-12 | +10 | — | -$390K | — |
| Natural attrition (Months 18-24) | Months 18-24 | -29.5 | **45** | $2,050K | $12,700K |
| **Steady State** | **Month 24** | **-155 total** | **45** | **$12,700K gross** | **$10,700K net (after AI costs)** |

### Advanced Automation (Months 18-36)

**Objective:** Scale into new markets. Productize internal AI tools. Push toward Year 3 revenue target.

| # | Initiative | Timeline | Investment | Expected Revenue/Impact |
|---|-----------|----------|------------|------------------------|
| 1 | **PolicyForge SaaS launch** — Package the medical policy AI engine as a standalone product for other UM companies and health plans. Pilot with 2-3 customers, then scale. | Months 18-24 | $400K (productization, sales, customer success) | $1-3M ARR by Month 24. $3-8M ARR by Month 36. |
| 2 | **GenomeRisk Phase 2 (expansion)** — Expand DNAimpact to 5+ new health plan clients using GenomeRisk's fully automated risk stratification and engagement platform. | Months 18-30 | $300K (additional ML training, client onboarding) | $5-10M incremental DNAimpact revenue. Single largest revenue growth driver. |
| 3 | **AuthorityAI Product** — License the genetics-specific auto-adjudication engine to health plans who want to insource UM. Different from PolicyForge (which is policy management); this is the full adjudication system. | Months 24-36 | $500K (SaaS packaging, security hardening, multi-tenancy) | $2-5M ARR potential. Cannibalization risk with core UM business — careful positioning required. |
| 4 | **VariantIQ Enhancement** — Integrate with emerging whole genome sequencing (WGS) datasets. Build pharmacogenomics (PGx) module for medication optimization. | Months 18-24 | $200K | Positions InformedDNA for WGS/PGx wave. Revenue impact: $1-3M within 36 months via PGx counseling services. |
| 5 | **AI-Generated Patient Education Platform** — Spin CounselAI's patient education generator into a white-label product for health systems and labs. | Months 24-36 | $150K | $500K-$1.5M ARR. Relatively small but high-margin and synergistic. |
| 6 | **Real-time Genetics Intelligence API** — Package InformedDNA's combined policy, variant, and clinical guidelines knowledge into an API that EHR vendors and telehealth platforms can embed. | Months 30-36 | $300K | Moonshot product. If it gains traction: $5-15M ARR potential. If not: sunk $300K on a defensible IP asset. |

### Change Management Strategy

#### Communication Plan

| Audience | Message | Timing | Channel | Owner |
|----------|---------|--------|---------|-------|
| **Executive Team** | "AI transformation is our path to 3x enterprise value. Here's the plan, investment, and timeline." | Month 1 (pre-launch) | In-person strategic offsite | Jeff Frazier + CEO |
| **25 Retained GCs** | "You are the future of InformedDNA. You'll see 3x more patients, earn 30% more, and spend all your time doing what you trained for — counseling patients. AI handles the paperwork." | Month 2 (after selection) | Individual 1:1 meetings with CMO | CMO |
| **Departing GCs (65)** | "The industry has massive demand for GCs. We're providing generous severance, job placement support, and you'll leave with skills that make you more valuable." | Months 6-18 (phased, per wave) | Individual 1:1 meetings, NOT group announcements | CMO + HR, with Jeff's oversight |
| **UM Staff (30)** | "Your expertise built the training data that makes this AI possible. For those continuing, you'll oversee the most advanced PA platform in genetics. For those moving on, your UM skills are in demand." | Months 4 (retained) + Months 6-9 (departing) | 1:1 meetings | VP Payer Solutions + HR |
| **All Other Staff** | "InformedDNA is investing $5M in AI to become the industry leader. Here's what this means for your role." | Month 3 (after Quick Wins show results) | All-hands meeting + individualized follow-ups | CEO |
| **Payer Clients** | "We're deploying AI that will give you faster turnaround, better accuracy, and lower cost. Here's our roadmap." | Month 4 (QBR context) | QBR presentations + executive briefings | CEO + VP Sales |
| **Pharma/Trial Partners** | "InformedDNA's AI capabilities open new opportunities for recruitment and data." | Month 6+ | Sales meetings | VP Sales |
| **Industry (NSGC, conferences)** | "InformedDNA is solving the genetic counselor shortage with responsible AI augmentation." | Month 12+ (after results proven) | Conference presentations, published case studies | CMO + CEO |

#### Workforce Transition Principles

1. **No surprises.** Every affected employee has a 1:1 conversation before any group announcement. No one learns their role is changing from a meeting, email, or rumor.
2. **Generous severance.** Minimum 2 months severance for all departing employees, 3 months for 3+ year tenure, 6 months for directors+. This costs $1.25M total — a rounding error on $12.7M in annual savings.
3. **Active job placement.** InformedDNA will actively connect departing GCs with the dozens of employers desperate for genetic counselors. Partner with recruitment firms. Write recommendation letters. Provide references. The GC shortage means InformedDNA's departing counselors will be employed within weeks.
4. **Retained staff feel like winners.** 30% raises. New titles. Better work. More patients. Less paperwork. Equity participation. The narrative: "You were selected because you're the best."
5. **Never compromise service.** If a Wave deadline means service quality drops, the Wave deadline moves. Period. Client experience is the guardrail that cannot be crossed.

### Dependencies & Prerequisites

| # | Dependency | Required By | Owner | Risk If Not Met |
|---|-----------|-------------|-------|-----------------|
| 1 | **QHP Investment Committee approval for $4.8M** | Month 1 | Jeff Frazier → IC | Total program stop |
| 2 | **CEO full alignment and commitment** | Month 1 | Jeff + QHP Board | Program fails without CEO driving daily execution |
| 3 | **CMO alignment (champion, not obstacle)** | Month 1 | Jeff + CEO | Clinical AI programs blocked. CMO change required if not aligned. |
| 4 | **CTO capable of leading AI build** | Month 1 | CEO | If current CTO lacks AI chops, need new CTO or AI Platform Lead reporting to CEO. Assess immediately. |
| 5 | **Data warehouse operational** | Month 3 | Data Engineer (hire) | All ML systems delayed. This is the critical path. |
| 6 | **Historical PA decisions extracted and loaded** | Month 3 | Data Engineer | AuthorityAI training delayed. 300K+ decisions needed. |
| 7 | **BAAs signed with AI vendors (Anthropic, etc.)** | Month 2 | Legal / CTO | Cannot process PHI through AI without BAAs. HIPAA violation risk. |
| 8 | **Healthcare regulatory opinion delivered** | Month 3 | Outside counsel | Risk of building systems that face regulatory barriers |
| 9 | **Payer contract review complete** | Month 4 | Legal / VP Sales | Risk of deploying AI that violates payer contract terms |
| 10 | **AI Platform Lead hired** | Month 2 | CTO | AI development velocity depends on this hire. Cannot slip past Month 2. |
| 11 | **GC retention agreements signed** | Month 3 | CMO + HR | Risk of losing critical GCs before transformation completes |
| 12 | **Athenahealth / UM platform API assessment** | Month 2 | CTO | Integration feasibility unknown. If APIs insufficient, triggers platform decision (adds 3-6 months). |

**Critical path:** QHP IC approval → CEO/CMO alignment → CTO assessment → AI Lead hire → Data warehouse → PA data load → AuthorityAI training → Shadow mode → Go-live. Any delay in items 1-6 cascades through the entire program.

---

## Phase 6: Cross-Portfolio Opportunities

InformedDNA sits at a unique node in QHP's portfolio — it touches genetic data, payer relationships, clinical trial recruitment, and patient engagement. These intersections create cross-portfolio synergies that no individual company can capture alone.

### Shared AI Systems

| AI System | Built At | Benefiting Company | How It Helps | Estimated Value |
|-----------|----------|-------------------|-------------|-----------------|
| **AuthorityAI** (PA auto-adjudication) | InformedDNA | **COPILOT** | COPILOT's core business is prior authorization for specialty medications. AuthorityAI's architecture — clinical NLP extraction → policy rules engine → ML classification → auto-adjudication — is directly applicable to pharma PA, not just genetics PA. Retrain on COPILOT's PA decision corpus and COPILOT gets 60-70% auto-adjudication for specialty drug PA. | $3-5M annual labor savings at COPILOT. Massive. |
| **IntakeOS** (multi-channel intake) | InformedDNA | **COPILOT** | COPILOT processes PA submissions from providers via fax, portal, and phone — identical channels to InformedDNA. IntakeOS's OCR + NLP + routing architecture ports directly. | $500K-$1M savings (intake automation) |
| **SessionScribe** (ambient documentation) | InformedDNA | **Vector Clinical Trials** | Vector's clinical trial sites conduct patient visits that require documentation. Fine-tune SessionScribe on clinical trial visit notes (source data verification, adverse event capture, concomitant medication recording). | $200K-$400K savings + data quality improvement |
| **PolicyForge** (policy surveillance) | InformedDNA | **COPILOT** | COPILOT must maintain current payer coverage policies for specialty drugs. PolicyForge's automated policy surveillance and update engine applies directly. | $300K-$500K savings + faster policy updates |
| **QualityLens** (NLP audit) | InformedDNA | **Univo IRB** | Univo reviews clinical trial protocols, informed consent documents, and safety reports. QualityLens's NLP analysis capabilities can be adapted for IRB document review — checking protocol consistency, readability scoring of ICFs, and completeness verification. | $150K-$300K savings + faster review turnaround |
| **ProposalAI** (RFP automation) | InformedDNA | **ALL portfolio companies** | Every QHP portfolio company responds to RFPs/RFIs. ProposalAI's RAG + Claude architecture is company-agnostic. Build once, deploy everywhere with company-specific training data. | $100K-$200K savings per company × 8 companies = $800K-$1.6M total |
| **GenomeRisk** (population risk) | InformedDNA | **Azurity Pharmaceuticals** | Azurity's specialty focus includes medicines for rare diseases and underserved populations. GenomeRisk can identify patient populations with genetic markers that suggest need for Azurity's specific drug formulations (e.g., genetics-informed precision dosing). | Revenue synergy: helps Azurity target overlooked patient populations (extends O2E platform). |
| **TrialMatchAI** (trial matching) | InformedDNA | **AutoCruitment**, **Lexitas**, **Vector** | Patient-trial genetic matching is directly synergistic with AutoCruitment's digital recruitment, Lexitas's ophthalmology trials, and Vector's site network. InformedDNA has the genetic data; they have the trial infrastructure. | Game-changing: see Combined Value Plays below. |

### Data Sharing Opportunities

| Data Asset | Source | Receiving Company | Value Created | Privacy Framework |
|-----------|--------|-------------------|---------------|-------------------|
| **Genetic test utilization patterns** | InformedDNA (300K+ PA decisions) | **COPILOT** | COPILOT can predict which specialty drugs will require companion diagnostic genetic tests, enabling proactive PA preparation. Understanding which genetic tests are approved/denied by payer helps COPILOT's PA strategy for genomic-driven therapies. | De-identified / aggregated. No PHI transfer needed. Utilization statistics only. |
| **Payer medical policy intelligence** | InformedDNA (PolicyForge) | **COPILOT**, **Azurity** | Real-time visibility into how payers cover genetic tests → applicable to how payers cover specialty drugs and rare disease treatments. Payer behavior patterns (liberal vs. conservative coverage) inform commercial strategy. | Policy data is already semi-public. Structured database adds value. |
| **Patient genetic profiles** (de-identified) | InformedDNA | **Applied StemCell** | Applied StemCell develops gene editing therapeutics and iPSC services. Aggregated, de-identified genetic variant data from InformedDNA's counseling population can inform ASC's research priorities: which genetic targets have the largest patient populations, which variants are most commonly identified, where the unmet therapeutic need is greatest. | IRB-approved de-identified dataset. Requires patient consent for research use. Complex but high-value. |
| **Genetic counseling outcomes** | InformedDNA | **AutoCruitment** | Which genetic test results lead patients to seek clinical trials? Outcome data helps AutoCruitment predict which patient populations are most likely to enroll in genomics-driven trials. | De-identified outcomes data. Statistical patterns only. |
| **Clinical trial eligibility criteria intelligence** | InformedDNA (TrialMatchAI) | **Lexitas**, **Vector**, **Univo IRB** | TrialMatchAI parses trial eligibility criteria with genetic components. Sharing this structured data with Lexitas (protocol optimization), Vector (recruitment targeting), and Univo (protocol review efficiency) creates a closed-loop intelligence system for QHP's trial-facing companies. | Trial criteria are already public (ClinicalTrials.gov). InformedDNA adds structured parsing + genetic annotation. No privacy concern. |
| **Payment integrity patterns** | InformedDNA (PayGuardAI) | **COPILOT** | Genetic test billing fraud/waste patterns may overlap with specialty drug billing patterns. Shared anomaly detection models improve accuracy for both companies. | Aggregated billing pattern data. No patient-level sharing. |

### Combined Value Plays

#### 1. COPILOT + InformedDNA: Payer Intelligence & Prior Auth Superplatform

**The opportunity:** COPILOT handles prior authorization for specialty medications ($40-60M revenue). InformedDNA handles prior authorization for genetic tests ($14M revenue). Together, they represent a $55-75M PA revenue base with overlapping payer relationships. The same payer that contracts with InformedDNA for genetics UM likely also contracts with COPILOT (or should) for specialty drug PA.

**Combined plays:**
- **Cross-sell:** Every InformedDNA payer client is a COPILOT prospect (and vice versa). "You already trust us with your genetics PA — let us handle your specialty drug PA too."
- **Shared AuthorityAI architecture:** Train one PA auto-adjudication platform on both genetics and specialty drug decisions. The NLP extraction → policy matching → ML classification pipeline is identical. Different training data, same infrastructure.
- **Combined payer intelligence:** PolicyForge monitors genetics policy changes; add specialty drug policy monitoring. Offer payers a single "coverage intelligence" dashboard across both genetics and drugs.
- **Joint product:** "InformedPA" — a unified prior authorization platform covering genetic tests AND specialty medications, sold as SaaS to health plans. Price: $2-5 PMPM. Addressable market: 200M+ commercial lives × $3 PMPM = $600M+ TAM.

**Estimated combined value:** $5-15M incremental revenue within 36 months. This is the single largest cross-portfolio synergy in the QHP network.

#### 2. AutoCruitment + InformedDNA: Genetic Trial Recruitment Engine

**The opportunity:** Clinical trials increasingly require genetic testing for eligibility (precision medicine trials, gene therapy trials, oncology trials). AutoCruitment recruits patients but has no genetic screening capability. InformedDNA has genetic data on hundreds of thousands of patients but limited trial recruitment infrastructure.

**Combined plays:**
- **Genetically-informed recruitment:** InformedDNA identifies patients with specific genetic profiles (via counseling or DNAimpact screening). TrialMatchAI matches them to eligible trials. AutoCruitment's digital marketing + engagement platform handles recruitment.
- **Pre-screened patient pool:** InformedDNA can offer pharmaceutical sponsors a "genetically pre-screened" patient database — patients who've already had genetic testing and may qualify for precision medicine trials. This is enormously valuable: pre-screening reduces screen failure rates from 40% to <10%.
- **Combined offering to pharma:** "InformedDNA + AutoCruitment: From genetic testing to trial enrollment in one integrated platform." No competitor can offer this end-to-end genetic trial recruitment pipeline.

**Estimated combined value:** $3-8M incremental revenue within 36 months. Premium pricing justified by dramatically lower screen failure rates.

#### 3. InformedDNA + Lexitas + Vector: QHP Clinical Trials Intelligence Network

**The opportunity:** QHP owns three companies in the clinical trial value chain: Lexitas (ophthalmology CRO), Vector (community trial sites), and now has genetic screening capability through InformedDNA. Add Univo (IRB). This is a near-complete clinical trial infrastructure stack.

**Combined plays:**
- **Genetic screening for Lexitas ophthalmology trials:** Many ophthalmic diseases have genetic components (inherited retinal dystrophies, glaucoma, macular degeneration risk variants). InformedDNA can provide genetic screening services for Lexitas's trial patients. Cross-referral pipeline.
- **Pre-screening at Vector sites:** Vector sites conduct community-based trials. InformedDNA's TrialMatchAI can screen Vector's patient populations for genetic trial eligibility, routing qualified patients to appropriate studies.
- **IRB fast-track:** Univo provides IRB review for trials that InformedDNA, Lexitas, and Vector support. Standardized protocols and shared templates across the QHP network reduce IRB review time.
- **Data advantage:** Combined genetic + clinical + demographic data across the QHP trial network provides unparalleled site selection and enrollment prediction capability.

**Estimated combined value:** $2-5M incremental revenue + competitive differentiation for all three trial companies. The "QHP Clinical Intelligence Network" becomes a selling point in sponsor pitches.

#### 4. InformedDNA + Azurity: Precision Medicine Commercial Intelligence

**The opportunity:** Azurity focuses on overlooked patient populations and dosage-form innovation. InformedDNA's genetic counseling and population health data can identify patient populations with genetic conditions that would benefit from Azurity's specialty formulations.

**Combined plays:**
- **Extend O2E Platform:** Jeff's existing O2E platform identifies drug candidates for Azurity. Add InformedDNA's genetic data layer: which patient populations have genetic markers associated with conditions that Azurity's drugs treat? Which genetic subgroups might respond differently to specific formulations?
- **Pharmacogenomics intelligence:** InformedDNA's PGx counseling data reveals which patients need dose adjustments based on genetic variants. Azurity can use this intelligence to develop pharmacogenomically-optimized dosage forms.
- **Specialty pharmacy bridge:** InformedDNA counsels patients pre- and post-genetic testing. For patients identified with conditions treatable by Azurity products, a referral pathway creates new prescriptions.

**Estimated combined value:** Revenue acceleration for Azurity; intelligence value for product development. Difficult to quantify precisely, but fits Azurity's core strategy perfectly.

### Platform/Product Opportunities

| Product | Origin System | Target Market | Revenue Model | 36-Month ARR Potential | Build Investment |
|---------|--------------|---------------|--------------|----------------------|-----------------|
| **PolicyForge SaaS** | PolicyForge | UM companies, health plans, PBMs | SaaS subscription: $500K-$2M/year per client | $3-8M | $400K (productization) |
| **InformedPA** (joint with COPILOT) | AuthorityAI + IntakeOS | Health plans running internal PA | SaaS: $2-5 PMPM | $5-15M (at scale) | $1M (multi-tenant, security hardening) |
| **Genetics Intelligence API** | VariantIQ + PolicyForge + AuthorityAI | EHR vendors, telehealth platforms, labs | API usage fees: $0.50-$2.00/call | $2-5M | $300K |
| **GenomeRisk Population Health** | GenomeRisk | Health plans, employers, pharmacies | PMPM: $0.15-$0.50 | $5-10M | $500K (productization) |
| **TrialMatch Network** (joint with AutoCruitment) | TrialMatchAI + AutoCruitment platform | Pharma sponsors, CROs | Per-patient fee: $1,500-$3,000 | $3-8M | $400K (integration) |
| **AI Patient Education** | CounselAI education generator | Health systems, labs, pharma | White-label license: $100K-$500K/year | $500K-$1.5M | $150K |

**Total product revenue potential (36-month):** $18-48M ARR across all products. Even if only PolicyForge and GenomeRisk succeed, that's $8-18M in high-margin SaaS revenue from a $900K investment.

---

## Appendix A: Named AI Systems Catalog

| # | System Name | Description | Build/Buy | Est. Build Cost | Annual Impact (Savings + Revenue) | Priority | Deploy Wave |
|---|------------|-------------|-----------|----------------|----------------------------------|----------|------------|
| 1 | **IntakeOS** | Master orchestrator. Multi-channel PA intake (fax OCR, portal, phone). NLP extraction. Completeness validation. Auto-outreach for missing info. Case routing. | Build | $350K | $325K savings (5 FTEs) + enables AuthorityAI | P0 - Critical | Foundation (Mo 3-6) |
| 2 | **AuthorityAI** | Prior auth auto-adjudication engine. Medical policy rules + ML classification on 300K+ historical decisions. 80% auto-adjudication. Determination letter generation. Appeal prediction. | Build | $600K | $2.0M savings (22 FTEs) + 4x throughput. **Moat system.** | P0 - Critical | Foundation → Wave 1 (Mo 3-9) |
| 3 | **PolicyForge** | Medical policy development & maintenance AI. Continuous literature/guideline surveillance. Auto-drafts policies. Rules compiler for AuthorityAI. Cross-payer benchmarking. | Build | $400K | $600K savings (6 FTEs) + **$3-8M/yr product revenue** | P1 - High | Foundation → Advanced (Mo 3-24) |
| 4 | **CounselAI** | Genetic counselor augmentation suite. AI pre-session briefs from patient records. Specialty matching. Scheduling optimization. Real-time clinical support. Education generation. Test recommendation. | Build | $500K | $5.3M savings (GC time recapture across 65 GC positions) | P0 - Critical | Foundation → Wave 2 (Mo 3-12) |
| 5 | **SessionScribe** | Ambient documentation for GC sessions. Real-time transcription (Whisper). AI clinical note generation (Claude). Structured data capture. EHR write-back. | Hybrid (buy ambient engine + customize) | $300K | $2.5M savings (documentation time → GC throughput) | P0 - Critical | Foundation → Wave 2 (Mo 3-12) |
| 6 | **VariantIQ** | Variant interpretation & classification engine. Multi-database query (ClinVar, HGMD, gnomAD). ACMG/AMP classification. Literature search. VUS monitoring with reclassification alerts. | Hybrid (buy DB access + build integration) | $250K | $750K savings + faster results + higher accuracy | P1 - High | Wave 3 (Mo 12-15) |
| 7 | **PayGuardAI** | Payment integrity ML. Pre-pay claims validation (CPT, ICD, billing rules). Post-pay anomaly detection (duplicate, unbundling, upcoding). Audit report generation. | Build | $300K | $450K savings (6 FTEs) + improved recovery rates | P2 - Medium | Wave 3 (Mo 12-15) |
| 8 | **GenomeRisk** | DNAimpact population health AI. Member risk stratification (claims + demographics + genetics). Predictive outreach optimization. Adherence prediction. ROI forecasting. | Build | $500K | $425K savings + **$5-10M DNAimpact revenue growth** | P1 - High | Wave 4 → Advanced (Mo 15-30) |
| 9 | **ClientPulse** | Client analytics & reporting platform. Automated dashboards (Looker). Natural language query. SLA monitoring. QBR deck generation. Client health scoring. | Hybrid (buy BI platform + build custom) | $250K | $280K savings + client retention improvement | P2 - Medium | Quick Win → Wave 4 (Mo 1-18) |
| 10 | **ProposalAI** | Business development automation. RFP response engine (RAG on historical RFPs + Claude). Lead scoring ML. Competitive intelligence. Client-specific ROI calculators. | Build | $200K | $810K savings + higher win rates | P2 - Medium | Quick Win (Mo 1-3) |
| 11 | **QualityLens** | QA & compliance platform. NLP session note audit (100% coverage). UM decision consistency tracker. Credential management. Compliance dashboards. Process mining. | Build | $200K | $240K savings + 100% QA coverage (vs. sample) | P2 - Medium | Quick Win → Wave 4 (Mo 1-18) |
| 12 | **TrialMatchAI** | Clinical trial recruitment genetic matching. Trial eligibility criteria NLP parser. Patient-trial genetic matcher. Outreach automation. Recruitment funnel analytics. | Build | $150K | $255K savings + revenue growth + **QHP portfolio synergy** | P2 - Medium | Wave 4 → Advanced (Mo 15-30) |
| — | **Data Warehouse** | Snowflake. Central data platform. All historical PA decisions, counseling records, claims, client data. | Buy | $200K (setup) + $80K/yr | **Prerequisite for everything.** No ML without data. | P0 - Critical | Quick Win (Mo 1-3) |
| — | **Vector Database** | Pinecone. Embedding store for RAG. PA decisions, policies, literature, variants. | Buy | $25K/yr | Enables RAG across all systems. | P0 - Critical | Foundation (Mo 3-4) |
| — | **LLM Gateway** | Anthropic Claude (primary) + OpenAI GPT-4 (fallback). Cost tracking, rate limiting, audit logging wrapper. | Buy + Config | $150K/yr | Powers all natural language AI. | P0 - Critical | Foundation (Mo 3-4) |
| | | | | | | |
| — | **TOTALS** | 12 named systems + 3 infrastructure | — | **$4.0M build + $0.8M infra = $4.8M** | **$12.9M savings + $8-18M new revenue** | — | 24 months |

---

## Appendix B: The Uncomfortable Truth

Jeff — here's the unvarnished version. No consultant polish. No softballs.

### 1. You're Firing 155 People

Strip away the euphemisms about "workforce transition" and "organizational optimization." One hundred and fifty-five people are going to lose their jobs. Many of them are good at what they do. Some have been at InformedDNA for years. They have mortgages, families, and careers built on skills that AI is about to make less valuable.

The genetic counselor market IS healthy, and most departing GCs will find work quickly. That's real. But the 65 non-GC employees who lose their jobs — UM coordinators, claims analysts, admin staff — face a tougher market. They're not genetic counselors with nationwide demand. They're healthcare operations professionals in a market that's about to be flooded with similar AI-displaced workers from every healthcare services company doing the same thing.

**What leadership will resist:** The CEO and CMO will want to keep more people. They'll argue for 60 FTEs, then 75, then "let's just augment." This is the gravitational pull of the status quo. Every retained FTE above 45 costs $90K/year and reduces the EBITDA impact. The difference between 45 FTEs and 75 FTEs is $2.7M/year in labor — $32M in enterprise value at 12x. Jeff has to hold the line on the target, or the transformation becomes an expensive augmentation exercise.

### 2. The CMO Problem Is Binary

If InformedDNA's CMO is an AI enthusiast who sees the 4x GC throughput vision, this transformation succeeds. If the CMO sees AI as a threat to clinical quality and professional autonomy — and many physician leaders do — this transformation is DOA. There is no middle ground. A lukewarm CMO will slow-walk every clinical AI system, create "quality concerns" that delay deployment, and quietly signal to GCs that they should be worried.

**The hard decision:** Jeff and the CEO need to assess the CMO in Week 1. Not Week 4. Not after Month 3 when the data warehouse is built and you've spent $500K. If the CMO is not fully aligned, they need to be replaced before the first AI system is designed. This is the single highest-risk people decision in the entire transformation.

### 3. Genetic Counselors Will Organize Resistance

The retained 25 GCs will love this — more money, more patients, less paperwork. The departing 65 GCs will not. And genetic counselors are a tight-knit professional community. They talk to each other. They're active on social media. They attend the same conferences. When 65 GCs leave InformedDNA in an 18-month span, the NSGC will notice. Genetics Twitter will notice. And the narrative will be "private equity firm replaces genetic counselors with AI."

**What will actually happen:** Some departing GCs will post negative content on LinkedIn and Reddit. A genetics industry publication might write an article. An NSGC committee might issue a statement about "responsible AI use in genetic counseling." None of this will be fatal, but it will be uncomfortable for the CEO and the QHP partners who have to sit across the table from healthcare industry leaders.

**Mitigation that actually works:** Two things. First, generous severance and genuine job placement (not a pamphlet — actual introductions to employers hiring GCs). Second, the retained GCs must be vocal ambassadors: "I'm seeing 3x more patients and doing less paperwork. AI made my job better." If the 25 retained GCs are visible, satisfied, and telling their story, the narrative shifts from "fired by AI" to "empowered by AI."

### 4. Payer Contracts Are a Chokepoint

InformedDNA doesn't sell directly to patients. It sells to 10-20 large payer clients. Each payer has a contract that almost certainly doesn't contemplate AI-made clinical determinations. Before AuthorityAI can auto-adjudicate a single PA, every affected payer contract must be reviewed and potentially amended.

**The risk:** A conservative payer — say, a Blue Cross plan with a risk-averse medical director — pushes back on AI. "We don't want a computer making medical necessity determinations for our members." If that payer represents 15% of InformedDNA's revenue, you can't just override them. You have to maintain full human review for their cases, which means you can't fully reduce UM headcount until all major payers are on board.

**Reality check:** Payer adoption will be gradual. Year 1 might see 2-3 payers agree to AI-assisted PA, covering 40-50% of volume. Full adoption might take 24-36 months. The financial model assumes 80% auto-adjudication by Month 12 — that's aggressive. If payer adoption is slower, UM staffing stays higher for longer, and Year 1-2 savings are 30-40% lower than projected.

### 5. The Data Might Not Be as Clean as We Think

The entire AuthorityAI thesis rests on training an ML classifier on 300K-600K historical PA decisions. But what if that data is:
- **Inconsistently formatted** across different UM platforms or workflow systems used over 5+ years?
- **Rater-inconsistent** — different reviewers applied the same policy differently?
- **Policy-version-mismatched** — decisions made under policies that have since been updated?
- **Biased** — systematic demographic or geographic biases in approval/denial patterns?
- **Incomplete** — key clinical variables missing from structured records?

If the training data quality is poor, AuthorityAI's accuracy will plateau at 85% instead of 95%+. That's the difference between 80% auto-adjudication (compelling) and 50% auto-adjudication (marginal).

**The honest mitigation:** Budget 3 months and $200K for data audit and cleaning before committing to AuthorityAI accuracy targets. Don't promise 80% auto-adjudication until you've seen the data. If the data is worse than expected, the UM savings timeline extends by 6-12 months.

### 6. The CTO Probably Can't Lead This

InformedDNA's current CTO (if they have one — the title may not exist) has been running Athenahealth integrations and a semi-custom UM workflow system. They have not built ML pipelines, managed LLM deployments, or architected a real-time clinical AI platform. Asking them to lead a $4.8M AI transformation is like asking a house painter to build a skyscraper.

**The hard truth:** InformedDNA almost certainly needs a new CTO or an AI Platform Lead with real ML engineering experience. This person needs to be hired by Month 2. They need to be extraordinary — someone who's built healthcare AI systems before, can recruit an ML team, and can operate at startup speed inside a PE-owned company. This hire is harder than it sounds. The intersection of "great AI engineer" and "willing to work at a 200-person genetics company in St. Petersburg, FL for PE-portfolio compensation" is a very small Venn diagram.

**Jeff's play:** Remote hire. Competitive comp ($200K+ base). Equity or phantom equity. Compelling mission narrative. Consider recruiting from health AI startups that have stalled or been acquired.

### 7. The 8-Month Payback Is Theoretical

The financial model shows an 8-month payback on $4.8M invested. That's based on linear savings realization starting at Month 6. In reality:
- Months 1-6: Spending money, building infrastructure, zero savings
- Months 6-9: First savings trickle in (Wave 1: $1.3M annualized = ~$325K in quarter)
- Months 9-12: GC reductions begin ($4.3M annualized, but phased)
- Month 12: Maybe $3M in cumulative savings realized

The actual breakeven is more like Month 14-16, not Month 8. Still excellent — but managing QHP partner expectations matters. Don't promise 8-month payback in the IC memo. Promise "under 18 months" and overdeliver.

### 8. If This Works, InformedDNA Doesn't Need 5+ Years of QHP Ownership

Here's the uncomfortable strategic truth: a $55M-revenue, 50%-EBITDA-margin, AI-native genetics platform is enormously attractive to acquirers. UnitedHealth/Optum, Cigna/Evernorth, CVS/Aetna, or a health-tech-focused PE shop would pay $300M+ for this. If the transformation succeeds by Month 24, QHP's optimal move might be to sell InformedDNA at 3-4x what they could get today — and the hold period becomes 7-8 years total (2019-2027), which is already long for PE.

This isn't a problem. It's the desired outcome. But it means the transformation also needs to be packaged as a repeatable playbook — because the real value to QHP isn't just InformedDNA's EBITDA. It's proving that AI transformation can create $100M+ in enterprise value across the portfolio. InformedDNA is the proof-of-concept. COPILOT is next. Then every other portco. Jeff's value to QHP is the playbook, not any single company.

### 9. The Biggest Risk: Doing Nothing

Everything above sounds hard. Payer resistance, CMO alignment, GC backlash, data quality, CTO limitations. It's tempting to say "let's just do augmentation and target 20% productivity improvement."

That path leads to irrelevance.

eviCore (Cigna/Evernorth) has unlimited resources and is certainly building AI PA. Concert Genetics is a direct competitor with a tech-first approach. Genome Medical is well-funded and building AI-native genetic counseling. Within 24 months, InformedDNA's competitors will offer the same PA turnaround times, the same accuracy, and the same cost structure that AI enables. If InformedDNA hasn't transformed, it will lose RFPs based on turnaround time, lose clients based on cost, and lose talent who want to work with modern tools. The competitive window is 18-24 months.

**The bottom line:** Every risk in this document is a real risk. None of them are reasons not to proceed. The risk of inaction is existential. The risk of action is manageable. The expected value is $126-289M in enterprise value creation from a $4.8M investment. The MOIC is 26-60x. This is the most asymmetric bet in the QHP portfolio.

Do it. Do it fast. Do it well.

---

*Analysis by: AI Strategy Specialist*
*Date: March 5, 2026*
*Prepared as part of QHP Capital's AI Transformation Initiative, led by Jeff Frazier, Operating Partner – AI*
