# QHP Portfolio: AI/Robotics Full Replacement Deep Dive Strategy

## The Thesis

Every QHP portfolio company was built in a pre-AI world. The labor models, org structures, and service delivery methods are artifacts of human-only execution. The question is no longer *"how do we augment humans with AI?"*—it's **"what would this company look like if we rebuilt it from zero with AI and robotics as the default, and humans as the exception?"**

This document establishes a systematic deep dive process for each portfolio company to determine the maximum achievable AI/robotics replacement ratio and the strategy to get there.

---

## Portfolio Replacement Readiness: Tier Rankings

### Tier 1 — Near-Total Replacement (80-95% headcount reduction possible)

| Company | Current FTEs | Target FTEs | Replacement % | Why |
|---------|-------------|-------------|---------------|-----|
| **AutoCruitment** | 80-120 | 8-15 | ~90% | Digital advertising + patient matching + campaign management = almost entirely automatable. Current "agency-style" model is obsolete. AI ad generation, programmatic optimization, chatbot pre-screening, and automated site matching eliminate nearly all human roles. |
| **COPILOT** | 200-300 | 25-40 | ~85% | Benefits verification (phone calls to payers), prior authorization (form filling, portal navigation), and patient adherence (outbound calls) are textbook RPA + LLM + voice AI use cases. The entire "Three A's" model can be rebuilt as AI-first. |
| **Univo IRB** | 25-50 | 5-10 | ~80% | Protocol review, amendment review, consent review, and regulatory compliance checking are document-analysis problems. LLMs + structured rules can handle 80%+ of reviews with human oversight on edge cases only. Small company = fast transformation. |

### Tier 2 — Major Replacement (60-80% headcount reduction possible)

| Company | Current FTEs | Target FTEs | Replacement % | Why |
|---------|-------------|-------------|---------------|-----|
| **InformedDNA** | 150-250 | 30-50 | ~80% | Prior auth for genetic testing is rule-based (auto-adjudicate 70%+). Genetic counseling can be 70% AI-delivered (pre-session prep, variant interpretation, documentation). Utilization management is pure pattern matching. The genetic counselor shortage actually makes AI replacement a *market advantage*, not a liability. |

### Tier 3 — Significant Replacement (40-60% headcount reduction possible)

| Company | Current FTEs | Target FTEs | Replacement % | Why |
|---------|-------------|-------------|---------------|-----|
| **Lexitas** | 75-125 | 30-55 | ~55% | Reading center image analysis → AI grading (FDA-cleared AI exists for ophthalmology). Medical writing, data management, biostatistics all AI-augmentable. But ophthalmology-specific clinical expertise and KOL relationships require humans. Small company, high specialization = harder to fully automate. |
| **Vector Clinical Trials** | 30-60 | 15-30 | ~50% | Patient recruitment → AI-powered matching and channel optimization. Scheduling, regulatory, data collection → automatable. But physical site operations, community physician relationships, and patient interactions require humans on the ground. The site network model has a physical-presence floor. |
| **Applied StemCell** | 80-120 | 35-60 | ~50% | Literature review, experiment design, data analysis, IP mining → AI. Project management, client communication → largely automatable. But wet lab work (gene editing, cell culture, cGMP manufacturing) requires physical human/robot execution. Lab automation robots can replace some bench work, but not all. |

### Tier 4 — Partial Replacement (25-40% headcount reduction possible)

| Company | Current FTEs | Target FTEs | Replacement % | Why |
|---------|-------------|-------------|---------------|-----|
| **Azurity Pharmaceuticals** | 300-400 | 180-260 | ~35% | Commercial, regulatory, quality, and R&D knowledge work is highly automatable. But pharmaceutical manufacturing, supply chain logistics, and field sales require physical presence. The 50+ product portfolio creates complexity that AI handles well (forecasting, quality prediction, regulatory submissions), but cGMP manufacturing floors need people and compliant equipment. |
| **Bend Bioscience** | 400-550 | 250-370 | ~35% | Same manufacturing floor constraint as Azurity, but amplified — Bend is a CDMO, meaning manufacturing IS the product. Formulation prediction, analytical method development, quality systems, and client management are AI-targetable. But spray drying, tablet pressing, clinical supply packaging require physical operators. Lab automation robots can reduce, not eliminate, manufacturing headcount. |

---

## The Deep Dive Process: 6-Phase Framework

### Phase 0: Pre-Assessment Intelligence Gathering (1 week per company)

**Objective:** Build the fact base before engaging the portfolio company.

| Activity | Method | Output |
|----------|--------|--------|
| Map every role in the company | LinkedIn scrape + org chart request from QHP deal team | Complete headcount map by function |
| Catalog every process/workflow | Public info + QHP operating partner intel | Process inventory with time/cost estimates |
| Identify technology stack | Job postings, vendor relationships, tech reviews | Current automation baseline |
| Benchmark AI maturity vs. competitors | Competitor analysis (already started in existing research) | Competitive AI gap score |
| Calculate labor cost by function | Financial data from QHP portfolio monitoring | $ cost of each function to automate |
| Identify regulatory constraints | FDA, HIPAA, IRB, GxP requirements by process | Hard constraints on automation |

**Deliverable:** Company AI Replacement Readiness Scorecard

---

### Phase 1: Process Decomposition (2 weeks per company)

**Objective:** Break every business process into atomic tasks and classify each task on the AI replacement spectrum.

**Task Classification Framework:**

| Category | Definition | Examples | Action |
|----------|-----------|----------|--------|
| **🟢 Fully Automatable** | Repetitive, rule-based, data-driven, no judgment needed | Data entry, form filling, report generation, scheduling, basic QA | Replace immediately with AI/RPA |
| **🟡 AI-Assisted** | Requires judgment but AI can do 80%+ of the work; human reviews | Medical writing first drafts, protocol review, safety signal detection, financial forecasting | Deploy AI + human-in-the-loop |
| **🟠 AI-Augmented** | Complex judgment, relationship-dependent, or creative; AI accelerates but doesn't replace | Client relationship management, strategic planning, complex negotiations, novel research design | Give humans AI copilots |
| **🔴 Human-Required** | Physical presence, regulatory mandate for human, or genuinely novel/creative | cGMP manufacturing operations, physical site visits, IRB board member votes, wet lab work | Optimize with robotics where possible |
| **⚫ Robot-Replaceable** | Physical tasks that robots/automation can handle | Lab pipetting, packaging, material handling, basic manufacturing steps | Deploy lab/industrial robotics |

**Process Decomposition Template:**

For each company, every process gets scored:

```
Process: [Name]
Department: [Department]
Current FTEs: [#]
Annual Labor Cost: [$]
Task Breakdown:
  - Task 1: [Description] → Classification: [🟢/🟡/🟠/🔴/⚫]
  - Task 2: [Description] → Classification: [🟢/🟡/🟠/🔴/⚫]
  ...
Automation Potential: [% of tasks in 🟢+🟡+⚫]
Estimated FTE Reduction: [#]
Estimated Annual Savings: [$]
Implementation Complexity: [Low/Medium/High]
Regulatory Risk: [None/Low/Medium/High]
```

---

### Phase 2: "Zero-Based AI Architecture" Design (2 weeks per company)

**Objective:** Design the company as if building it from scratch today with AI/robotics as default.

**Key Questions:**
1. If this company didn't exist and we were building it today, how many humans would we hire?
2. What would the tech stack look like?
3. What would the org chart look like?
4. What would the unit economics look like?

**Output:** "AI-Native Blueprint" for each company including:
- Target org chart (AI-first)
- Technology architecture diagram
- Unit economics model (AI-native vs. current)
- Capital requirements for transformation
- Timeline to achieve target state

---

### Phase 3: Regulatory & Risk Assessment (1 week per company)

**Objective:** Identify hard constraints where regulations mandate human involvement.

| Regulatory Domain | Affected Companies | Key Constraints |
|-------------------|--------------------|-----------------|
| **FDA 21 CFR Part 11** | Azurity, Bend, Lexitas | Electronic signatures, audit trails — AI can operate within these but needs validation |
| **cGMP Requirements** | Azurity, Bend, Applied StemCell | Manufacturing requires qualified persons, but many QC/QA tasks are automatable |
| **ICH-GCP** | Lexitas, Vector | Clinical trials require qualified investigators, monitors — but monitoring can be risk-based/AI-driven |
| **HIPAA** | All companies | AI systems must be HIPAA-compliant; doesn't prevent automation, just constrains architecture |
| **21 CFR Parts 50 & 56** | Univo IRB | IRB decisions require qualified board members — but AI can do 90% of prep work |
| **AAHRPP Accreditation** | Univo IRB | Quality standards — AI must support accreditation requirements |
| **State Genetic Counseling Laws** | InformedDNA | Some states require licensed counselors — AI counseling must be "AI-assisted" not "AI-only" in regulated states |

**Regulatory Strategy:** For each constraint, determine:
1. Can AI handle the task with human oversight/sign-off? (Usually yes)
2. Is there a regulatory pathway to expand AI autonomy? (Often emerging)
3. What's the minimum human involvement required? (The "regulatory floor")

---

### Phase 4: Financial Modeling & ROI (1 week per company)

**Objective:** Build the business case for each company's AI transformation.

**Model Components:**

| Input | Description |
|-------|-------------|
| **Current Cost Structure** | Total labor cost, by department and role |
| **Technology Investment** | AI/robotics build costs, SaaS subscriptions, infrastructure |
| **Transition Costs** | Severance, retraining, change management, consulting |
| **Timeline** | Phased implementation over 12-36 months |
| **Revenue Impact** | Can AI improve revenue (faster delivery, better quality, new products)? |
| **Risk Adjustments** | Regulatory risk, execution risk, technology risk |

**Key Metrics per Company:**

| Metric | Formula |
|--------|---------|
| **Replacement ROI** | (Annual Labor Savings - Annual AI Cost) / Total Investment |
| **Payback Period** | Total Investment / Monthly Net Savings |
| **Revenue per Remaining Employee** | Revenue / Post-Transformation Headcount |
| **Margin Expansion** | New Operating Margin - Current Operating Margin |
| **Exit Multiple Impact** | How does 2-3x margin expansion affect enterprise value? |

---

### Phase 5: Implementation Roadmap (Ongoing per company)

**Objective:** Sequence the transformation for maximum speed and minimum disruption.

**Implementation Principles:**
1. **Start with Tier 1 companies** — fastest payback, proof of concept for the portfolio
2. **Quick wins first** — automate 🟢 tasks in Month 1-3 for immediate savings
3. **Build AI infrastructure once, deploy everywhere** — cross-portfolio AI platform
4. **Parallel track** — don't wait for one company to finish before starting the next
5. **Communicate the vision** — position as "upgrading the company" not "replacing people"

**Sequencing by Company:**

| Quarter | Companies | Focus |
|---------|-----------|-------|
| **Q2 2026** | COPILOT, AutoCruitment, Univo IRB | Tier 1 — highest automation %, fastest payback |
| **Q3 2026** | InformedDNA, Lexitas | Tier 2-3 — knowledge work + CRO automation |
| **Q4 2026** | Vector, Applied StemCell | Tier 3 — physical + digital hybrid automation |
| **Q1 2027** | Azurity, Bend Bioscience | Tier 4 — manufacturing AI + robotics (longest lead time) |

---

### Phase 6: Cross-Portfolio AI Platform (Continuous)

**Objective:** Build shared AI infrastructure that serves all portfolio companies.

**Shared Components:**

| Component | Description | Serves |
|-----------|-------------|--------|
| **LLM Gateway** | Centralized Claude/GPT API management, cost optimization, prompt library | All 9 companies |
| **Document Intelligence** | OCR, NLP, document understanding pipeline | COPILOT, InformedDNA, Univo, Lexitas |
| **RPA Framework** | Shared robotic process automation infrastructure | COPILOT, InformedDNA, AutoCruitment |
| **Voice AI Platform** | AI-powered phone/IVR system | COPILOT, InformedDNA, AutoCruitment, Vector |
| **Predictive Analytics** | Shared ML model training/deployment infrastructure | All 9 companies |
| **Regulatory AI** | FDA, ICH, HIPAA compliance monitoring | Azurity, Bend, Lexitas, Univo |
| **Board Reporting AI** | Automated QHP board materials from portfolio data | QHP firm + all portcos |

---

## Company-by-Company Replacement Strategies

### 1. AutoCruitment — "The Autonomous Recruitment Engine"

**Current State:** 80-120 FTEs running an agency-style digital recruitment operation
**Target State:** 8-15 FTEs operating an AI-autonomous recruitment platform

**What Gets Replaced:**

| Function | Current FTEs | AI Replacement | Remaining Humans |
|----------|-------------|----------------|-----------------|
| Campaign Management | 20-30 | AI ad generation + programmatic optimization | 1-2 strategists |
| Creative Development | 10-15 | Generative AI (copy, images, video) | 1 creative director |
| Patient Pre-Screening | 15-25 | AI chatbot + voice bot + NLP questionnaires | 0 (escalation to sites) |
| Site Matching/Coordination | 10-15 | AI matching algorithm + automated handoff | 1 site relations manager |
| Analytics/Reporting | 5-10 | Fully automated dashboards + AI insights | 1 data scientist |
| Account Management | 5-10 | AI health scoring + automated reporting | 2-3 senior AMs for top accounts |
| Leadership/Support | 10-15 | AI-assisted operations | 3-5 (CEO, CTO, finance, HR) |

**Key AI Systems to Build:**
1. **Autonomous Ad Engine** — Generates, tests, and optimizes ad creative across Meta/Google/programmatic with zero human input. Targets 100+ variants/month vs. current 10-15.
2. **AI Pre-Screening Bot** — Multi-channel (web, SMS, voice) patient screening that handles 95%+ of inquiries. Hands off to sites only when patient is qualified and scheduled.
3. **Intelligent Campaign Optimizer** — ML model that continuously reallocates budget across channels, geographies, and demographics to minimize cost-per-randomization.
4. **Automated Site Intelligence** — AI that monitors site performance, enrollment velocity, and screen failure rates. Auto-adjusts patient flow to highest-performing sites.

**Investment:** $2-3M over 18 months
**Annual Savings:** $6-10M (labor reduction from ~100 FTEs to ~12)
**Revenue per Employee:** $500K → $4M+

---

### 2. COPILOT — "The AI Hub"

**Current State:** 200-300 FTEs doing manual phone calls, portal navigation, and form filling
**Target State:** 25-40 FTEs overseeing AI systems that handle 85%+ of case volume

**What Gets Replaced:**

| Function | Current FTEs | AI Replacement | Remaining Humans |
|----------|-------------|----------------|-----------------|
| Benefits Verification | 60-80 | RPA bots + AI portal navigation + voice AI for payer calls | 5-8 complex case handlers |
| Prior Authorization | 50-70 | AI document extraction + auto-form filling + ePA + AI appeal writing | 8-12 complex PA specialists |
| Patient Adherence | 30-40 | AI voice/SMS outbound + chatbot + predictive non-adherence intervention | 3-5 clinical specialists |
| Financial Counseling | 15-20 | AI eligibility determination + auto-application + grant matching | 2-3 complex case handlers |
| Client Management | 10-15 | AI reporting + health scoring + automated dashboards | 3-4 senior AMs |
| IT/Engineering | 10-15 | AI-assisted development | 3-5 engineers |
| Leadership/Admin | 15-25 | AI-assisted operations | 5-8 (C-suite, finance, HR, compliance) |

**Key AI Systems to Build:**
1. **AccessAI** — Autonomous benefits verification: OCR intake → payer identification → portal RPA → AI data extraction → structured report. Target: 2-hour TAT vs. 24-48 hours.
2. **AuthorizeAI** — Prior auth automation: clinical doc extraction → criteria matching → auto-form completion → submission → status tracking → AI-written appeals for denials.
3. **AdherenceAI** — Predictive non-adherence model + automated multi-channel outreach (voice, SMS, app) + escalation to human only for clinical concerns.
4. **PayerBrain** — Continuously updated intelligence on every payer's policies, portals, requirements, and decision patterns. Shared knowledge base for all AI systems.

**Investment:** $4-6M over 24 months
**Annual Savings:** $12-18M (labor reduction from ~250 to ~35)
**Margin Expansion:** 20-25% → 55-65%

---

### 3. Univo IRB — "The AI Review Board"

**Current State:** 25-50 FTEs processing protocol reviews, amendments, and regulatory compliance
**Target State:** 5-10 FTEs with AI handling 80%+ of review preparation and routine decisions

**What Gets Replaced:**

| Function | Current FTEs | AI Replacement | Remaining Humans |
|----------|-------------|----------------|-----------------|
| Protocol Review Prep | 8-12 | AI analysis of protocols against regulations, precedent, risk flags | 1-2 senior reviewers for final sign-off |
| Amendment Processing | 5-8 | AI change detection + impact analysis + auto-routing | 1 specialist |
| Consent Review | 3-5 | NLP readability analysis + regulatory compliance checking | 1 specialist |
| Regulatory Compliance | 3-5 | AI monitoring of FDA/ICH/AAHRPP requirements | 1 compliance officer |
| Customer Service | 3-5 | AI chatbot + automated status updates | 1 relationship manager |
| Admin/Leadership | 5-10 | AI-assisted operations | 3-4 (CEO, CFO, quality, ops) |

**Key AI Systems to Build:**
1. **ReviewAI** — Protocol analysis engine that reads protocols, flags risks, checks regulatory compliance, compares to precedent decisions, and generates reviewer briefs. Handles 80% of initial review work.
2. **AmendmentAI** — Automated change detection between protocol versions, impact assessment, and routing to appropriate review pathway (expedited vs. full board).
3. **ConsentAI** — NLP analysis of informed consent forms for readability (Flesch-Kincaid), regulatory completeness, and participant burden assessment.
4. **OneVerse AI Integration** — Enhance existing OneVerse platform with AI-powered workflow automation, predictive workload balancing, and automated committee scheduling.

**Investment:** $1-2M over 12 months
**Annual Savings:** $1.5-3M (small company but massive margin improvement)
**Capacity Increase:** 75%+ more protocols without headcount increase

---

### 4. InformedDNA — "The AI Genetic Intelligence Platform"

**Current State:** 150-250 FTEs doing genetic counseling, utilization management, and payment integrity
**Target State:** 30-50 FTEs with AI handling routine counseling prep, 70%+ auto-adjudication of prior auths, and automated payment review

**What Gets Replaced:**

| Function | Current FTEs | AI Replacement | Remaining Humans |
|----------|-------------|----------------|-----------------|
| Prior Auth/UM | 40-60 | AI auto-adjudication (70%+ of cases) + smart routing for complex | 10-15 complex case reviewers |
| Genetic Counseling | 50-80 | AI pre-session prep + ambient documentation + AI follow-up | 15-25 licensed counselors (regulatory floor) |
| Payment Integrity | 15-25 | AI claims analysis + auto-review + overpayment detection | 3-5 analysts |
| Policy Development | 5-10 | AI-assisted policy creation from guidelines + literature | 2-3 policy experts |
| Client/BD | 10-15 | AI reporting + RFP automation + lead scoring | 3-5 senior BD |
| Tech/Admin/Leadership | 15-25 | AI-assisted operations | 8-12 |

**Investment:** $3-5M over 24 months
**Annual Savings:** $8-12M
**Revenue per Counselor:** $300-400K → $700-900K (2x+ productivity)

---

### 5. Lexitas — "The AI Ophthalmology CRO"

**What Gets Replaced:** Reading center image analysis (AI grading), medical writing, data management, biostatistics, regulatory writing. Ophthalmology-specific clinical expertise and KOL relationships remain human.

**Investment:** $2-3M | **Annual Savings:** $3-5M | **FTE Reduction:** 75-125 → 30-55

---

### 6. Vector Clinical Trials — "The AI-Powered Site Network"

**What Gets Replaced:** Patient matching/recruitment (AI engine), scheduling optimization, data quality monitoring, regulatory document management. Physical site operations and community physician relationships remain human.

**Investment:** $1-2M | **Annual Savings:** $1-3M | **FTE Reduction:** 30-60 → 15-30

---

### 7. Applied StemCell — "The AI Genome Intelligence Platform"

**What Gets Replaced:** Literature review, experiment design optimization, data analysis, IP mining, project management, client communication. Wet lab gene editing, cell culture, and cGMP manufacturing remain human (with robotic assist).

**Investment:** $2-3M | **Annual Savings:** $3-5M | **FTE Reduction:** 80-120 → 35-60

---

### 8. Azurity Pharmaceuticals — "The AI Pharma Platform"

**What Gets Replaced:** Commercial targeting/analytics, regulatory submissions, quality prediction/batch review, demand forecasting, medical information, board reporting. Manufacturing operations, field sales (partially), and supply chain logistics remain human.

**Investment:** $8.5M | **Annual Savings:** $12-15M | **FTE Reduction:** 300-400 → 180-260

---

### 9. Bend Bioscience — "The AI-Native CDMO"

**What Gets Replaced:** Formulation prediction, analytical method development, quality systems documentation, client proposals, project management, supply chain optimization. Physical manufacturing (spray drying, tableting, packaging) remains human with increasing lab robotics.

**Investment:** $11.2M | **Annual Savings:** $15-18M | **FTE Reduction:** 400-550 → 250-370

---

## Portfolio-Wide Impact Summary

| Company | Current FTEs | Target FTEs | Reduction | Annual Savings | Investment | Payback |
|---------|-------------|-------------|-----------|---------------|------------|---------|
| AutoCruitment | ~100 | ~12 | 88% | $6-10M | $2-3M | 4-6 mo |
| COPILOT | ~250 | ~35 | 86% | $12-18M | $4-6M | 4-6 mo |
| Univo IRB | ~40 | ~8 | 80% | $1.5-3M | $1-2M | 8-12 mo |
| InformedDNA | ~200 | ~40 | 80% | $8-12M | $3-5M | 5-8 mo |
| Lexitas | ~100 | ~45 | 55% | $3-5M | $2-3M | 6-10 mo |
| Vector | ~45 | ~22 | 51% | $1-3M | $1-2M | 8-14 mo |
| Applied StemCell | ~100 | ~48 | 52% | $3-5M | $2-3M | 6-10 mo |
| Azurity | ~350 | ~220 | 37% | $12-15M | $8.5M | 8-12 mo |
| Bend Bioscience | ~475 | ~310 | 35% | $15-18M | $11.2M | 8-12 mo |
| **TOTALS** | **~1,660** | **~740** | **~55%** | **$62-89M** | **$35-41M** | **~7 mo avg** |

**Portfolio-wide: ~920 FTEs replaced, $62-89M annual savings, 7-month average payback.**

---

## Deep Dive Execution Calendar

| Week | Activity | Companies |
|------|----------|-----------|
| **Weeks 1-2** | Phase 0: Intelligence gathering | COPILOT, AutoCruitment, Univo IRB |
| **Weeks 3-4** | Phase 1: Process decomposition | COPILOT, AutoCruitment, Univo IRB |
| **Weeks 5-6** | Phase 2: Zero-based AI architecture | COPILOT, AutoCruitment, Univo IRB |
| **Week 7** | Phase 3: Regulatory assessment | COPILOT, AutoCruitment, Univo IRB |
| **Week 8** | Phase 4: Financial modeling | COPILOT, AutoCruitment, Univo IRB |
| **Weeks 9-10** | Phase 0-1: Intelligence + decomposition | InformedDNA, Lexitas |
| **Weeks 11-12** | Phase 2-4: Architecture + financials | InformedDNA, Lexitas |
| **Weeks 13-15** | Phase 0-4: Full deep dive | Vector, Applied StemCell |
| **Weeks 16-19** | Phase 0-4: Full deep dive | Azurity, Bend Bioscience |
| **Weeks 20-21** | Phase 5: Portfolio-wide implementation roadmap | All companies |
| **Ongoing** | Phase 6: Cross-portfolio AI platform build | Shared infrastructure |

**Total Timeline: 21 weeks (~5 months) to complete all deep dives, with Tier 1 implementations starting in parallel by Week 8.**

---

## Recommended Immediate Next Steps

1. **Get QHP partner buy-in** — Present this framework to Michael Sorensen, Vern Davenport, and Jeff Edwards. Frame as "what if we could double portfolio EBITDA through AI transformation?"
2. **Start with COPILOT** — Newest CEO (Bill Nolan, Sept 2025), most manual processes, clearest ROI. Benefits verification and prior auth automation are well-proven use cases.
3. **Start with AutoCruitment in parallel** — Smallest company in Tier 1, fastest to transform, and Jeff's DCT background from Thread makes this a natural fit.
4. **Build the shared AI platform** — LLM gateway, document intelligence, and RPA framework that all companies can use.
5. **Hire/designate a "Portfolio AI Architect"** — Someone (or Jeff himself) who owns the cross-portfolio AI infrastructure and ensures consistency.

---

## The Exit Thesis

The PE math is simple:

- **Current portfolio EBITDA contribution from labor savings:** $0
- **Post-transformation annual savings:** $62-89M
- **At 12-15x EBITDA multiple (healthcare services):** $0.7-1.3B in incremental enterprise value
- **Investment required:** $35-41M
- **Enterprise value creation per dollar invested:** $18-38 return

This isn't optimization. This is portfolio-wide value creation at scale through systematic AI/robotics deployment. Every company in the portfolio was valued on a human-labor cost structure. Fundamentally changing that cost structure changes the exit math for every single investment.

---

*Document prepared for Jeff Frazier, Operating Partner – AI, QHP Capital*
*Date: March 2, 2026*
