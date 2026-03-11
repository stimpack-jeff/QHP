# QHP Capital AI Playbook
*Jeff Frazier, Operating Partner – AI | Started March 2, 2026*

This is the tactical application of QHP's [AI First Principles](AI_First_Principles.md) to the firm and its portfolio companies.

The First Principles document establishes the governing premise: **the cost of cognitive labor is declining toward zero, and the quality of machine intelligence is increasing toward and eventually beyond human capability.** Those two forces make AI transformation inevitable. This playbook is how QHP acts on them.

The [AI Economic Thesis](AI_Economic_Thesis.md) is the executive briefing. This playbook is how we execute.

---

## 1. Which Portfolio Companies Are Hardest to Disrupt?

*Applies the Governing Premise — as cognitive labor gets cheaper and better, which businesses are protected and which are exposed?*

The portfolio is heavy on companies that touch physical patients, biological materials, clinical sites, and regulatory bodies. These businesses are hard to replicate with AI alone — and they stand to gain enormously from using AI internally.

The question for each company: **how much of the value is in work that AI can do, versus things AI can't touch — physical operations, regulatory trust, human relationships?**

We call this assessment a company's **collapsibility** — how much of its value sits in cognitive labor that AI can replicate cheaply, versus physical, regulatory, or relationship-based work that AI cannot. A highly collapsible company is one where most of the value is in the thinking work. A low-collapsibility company has value that AI can't touch — but can amplify.

| Company | Collapsibility | Why | AI Posture |
|---------|---------------|-----|-----------|
| **Azurity Pharmaceuticals** | Low | Manufactures physical drugs, FDA-regulated, proprietary formulations | Aggressive adoption — massive upside from AI-driven manufacturing optimization, demand forecasting |
| **Lexitas** | Low | Runs physical clinical trials, site relationships, regulatory track records | Aggressive adoption — AI for site selection, enrollment prediction, protocol optimization |
| **Vector Clinical Trials** | Low | Operates physical trial sites, patient relationships, community presence | Aggressive adoption — AI for recruitment, site performance, community engagement |
| **Bend Bioscience** | Low | CDMO handling physical formulations, GMP-regulated | Aggressive adoption — AI for formulation optimization, process automation, quality prediction |
| **Applied StemCell** | Low-Medium | Gene editing/iPSC — physical lab operations, but IP-heavy | Adopt fast — AI for research acceleration, data analysis, IP mining |
| **InformedDNA** | Medium | Genetic testing/counseling — human trust relationships, but knowledge-heavy | Move fast — AI for test utilization analytics, counselor support, payer intelligence |
| **Univo IRB** | Medium | IRB services — regulatory expertise, but process is automatable | Move fast — AI for review automation, compliance monitoring, turnaround optimization |
| **COPILOT** | Medium | Hub services — labor-intensive but process-driven, AI automation potential is enormous | **Aggressive adoption** — AI for benefits verification, prior auth automation, patient engagement, payer intelligence |
| **AutoCruitment** | Medium-High | Patient recruitment platform — AI-native competitors emerging | **Urgent** — moat must shift to accumulated recruitment data, exclusive site relationships, conversion data |

---

## 2. The Software Value Test

*Applies [Principle 2: Value Migrates to the Irreproducible](AI_First_Principles.md) — if a competitor with AI can rebuild it in a weekend, it was never a moat.*

For every portfolio company with a technology platform, answer one question:

**What does this platform contain that a well-funded competitor with AI couldn't recreate in six months?**

If the answer is "the code" — that's not a moat anymore. Code is cognitive labor, and the cost of cognitive labor is heading to zero. The code has high collapsibility. The moat is in whatever the code sits on top of: the data it collected, the regulatory approvals it earned, the integrations it locked in, the relationships it built.

| Company | Code Value | What's Actually Valuable |
|---------|-----------|------------------------|
| **COPILOT** | Moderate — hub services tech stack is replicable | Payer relationship data, benefits verification outcome history, prior auth approval patterns by payer/drug, patient engagement data, Surescripts/HITRUST certifications |
| **AutoCruitment** | Declining — recruitment platforms are replicable | Patient conversion data across thousands of campaigns, exclusive site partnerships, proprietary matching algorithms trained on outcomes |
| **InformedDNA** | Moderate — counseling workflow has complexity | Genetic counselor decision corpus, payer relationship data, test utilization patterns across populations |
| **Azurity** | Low relevance — not a software company | Formulation IP, manufacturing process data, FDA regulatory approvals, NDC database |
| **Bend Bioscience** | Low relevance — CDMO | Formulation development data, process optimization history, client relationship data |

**Action items**:
- COPILOT and AutoCruitment: Immediately audit what proprietary data and integrations exist. This IS the company value, not the platform code.
- All portfolio companies with software: Stop valuing the code. Start valuing and protecting the data, regulatory status, and exclusive relationships.

### The SaaS Decomposition

The Software Value Test doesn't just apply to our portfolio companies. It applies to every SaaS platform our portfolio companies pay for — and every SaaS platform our portfolio companies sell to others.

SaaS is a shared-resource value model. Building a CRM cost $50M, so you built one and sold subscriptions to 10 million people. The per-unit economics only worked at scale. That logic made sense when software was expensive to build. It's failing now.

When AI drops the cost of building software close to zero, the calculus changes: a clinical operations manager at Lexitas doesn't need a $50K/year trial management SaaS subscription. She needs a tool that does exactly what her team does, the way they do it. And she can now describe what she needs and have AI build it in an afternoon.

This is the **micro-application shift** — individuals building bespoke, disposable software shaped to their exact workflow, instead of adapting their workflow to fit a platform designed for the average of a million customers. It doesn't replace all SaaS. It replaces the SaaS whose value was "we wrote sophisticated code" — which is the same collapsibility test from above.

**What survives the micro-app shift:**
- Platforms with **data gravity** — Salesforce isn't a CRM, it's 20 years of your customer interaction data. You can rebuild the UI, but not the data.
- Platforms with **network effects** — LinkedIn isn't a database, it's 900 million people who agreed to be in the same room.
- Platforms with **integration fabric** — Epic isn't an EHR, it's the nervous system of 250 health systems. Surescripts feeds, payer integrations, HL7/FHIR interop. You can rebuild the interface in a weekend. You cannot rebuild the connections.
- Platforms with **regulatory certifications** — HITRUST, SOC 2, FDA Part 11 validation. These take years and millions. A micro-app has none of them.

**What doesn't survive:**
- Any SaaS platform whose primary value proposition is "we built a sophisticated tool that does X" — where X is describable in plain language and doesn't require proprietary data, network effects, or regulatory certifications to function.

### Compliance as the New Guardrail

Here's the deeper implication — and it changes how organizations operate internally.

When anyone in a company can build their own software with AI, the question stops being "what software should we buy?" and starts being **"what compliance standards must your tool meet?"**

Today, IT departments procure, evaluate, deploy, and maintain software for the organization. That role exists because building and managing software required specialized skill. When building software doesn't require specialized skill, the IT function shifts dramatically — from software provider to **compliance certifier.**

The new organizational architecture looks like this:

1. **IT/Compliance sets the guardrails**: "Any tool touching patient data must be HIPAA compliant. Any tool handling financial data must meet SOC 2 requirements. Any tool in our clinical operations must be HITRUST certified." These aren't optional — they're the rules of the road.
2. **AI enforces the guardrails by default**: The AI building the micro-app knows what HIPAA compliance requires, what SOC 2 controls look like, what GDPR demands. Compliance isn't a six-month audit after the fact — it's baked into the generation.
3. **Individuals build what they need**: The regulatory director builds her own FDA intelligence tool. The hub services manager builds his own payer research workflow. The quality director builds her own inspection readiness dashboard. They don't file a ticket with IT and wait three months.
4. **IT validates and certifies**: Instead of building or buying software, IT reviews employee-built tools against compliance standards, certifies them for use, and monitors them. Think of it as building inspection — you can design your own house, but the inspector makes sure it meets code.

This matters for QHP on both sides:

**For portfolio companies as SaaS customers:** Every portfolio company currently spends significantly on SaaS subscriptions. A meaningful percentage — the internal workflow tools, the reporting dashboards, the project management platforms, the simple data tools — are candidates for replacement by employee-built micro-apps running within compliance guardrails. This is a real cost savings opportunity, and the result is tools shaped to actual workflows instead of generic platforms everyone has to adapt to.

**For portfolio companies that ARE SaaS platforms (COPILOT, AutoCruitment):** The churn risk is no longer just another vendor. It's the customer's operations manager saying "I built something better over the weekend." The defense is the same: data gravity, regulatory certifications, integration fabric, and network effects. If the platform has those, micro-apps can't replace it. If the platform doesn't, micro-apps will.

**For acquisition targeting:** SaaS companies experiencing declining net revenue retention may be seeing the early signal. Their customers aren't just switching to competitors — they're building their own tools. This is an acquisition opportunity at depressed valuations for targets with valuable data underneath a collapsing code moat.

---

## 3. How Work Should Actually Change

*Applies [Principle 5: Changing the Cognitive Agent Changes the Architecture](AI_First_Principles.md) — you wouldn't design a highway for horses.*

This is where most AI transformations fail. Not because the AI was wrong, but because it was dropped into a process that was designed around how humans think — and humans and AI think very differently.

Human workflows evolved around our limitations: we process things one at a time, we forget context, we get tired, we can only weigh a few variables at once. Every handoff, approval chain, and checklist in a portfolio company exists because of those constraints.

AI has none of those limitations. But it has different ones: it can sound confident while being completely wrong, it can't exercise genuine judgment in situations nobody's seen before, and it can't do anything physical.

**The mistake:** Plugging AI into the existing workflow. This preserves bottlenecks that AI doesn't need (sequential approvals, manual data gathering) and adds no protection against failures AI does have (plausible-sounding wrong answers).

**The right question for every process:** If we were designing this from scratch today — with AI doing the heavy cognitive lifting and humans handling judgment calls, novel situations, and physical work — what would it look like?

### Workflow Redesign Priorities by Company

| Company | Process to Redesign | Current Human Bottleneck | What It Should Look Like |
|---------|--------------------|--------------------------|--------------------------|
| **COPILOT** | Benefits verification & prior auth | Case-by-case manual research against payer policies | AI processes 80% of routine cases end-to-end; humans handle exceptions, appeals, and novel payer situations |
| **Lexitas** | Site selection for new trials | Senior staff research site histories, call contacts, compile spreadsheets | AI scores every potential site against historical performance data; humans validate top candidates and manage relationships |
| **Azurity** | Quality prediction in manufacturing | Quality team reviews batch records after production | AI monitors process parameters in real time, flags deviations before they become defects; quality team focuses on root cause analysis |
| **AutoCruitment** | Ad targeting & patient matching | Campaign managers manually adjust targeting based on intuition | AI continuously optimizes targeting based on conversion data; humans focus on creative strategy and site relationships |
| **Univo IRB** | Protocol review | Reviewers read each submission start to finish | AI pre-screens for common issues, highlights areas needing judgment; reviewers focus on ethical questions and edge cases |

### The Redesign Test

Before deploying AI into any workflow, ask three questions:

1. **What bottlenecks in this process exist only because humans are slow, forgetful, or single-threaded?** Those disappear with AI.
2. **Where in this process can AI produce a confident-sounding wrong answer that would cause real harm?** Those need human checkpoints.
3. **If a new competitor built this process from scratch with AI at the center, how would they do it?** That's your target design.

---

## 4. Where Expert Knowledge Creates the Most Value

*Applies [Principle 6: The Bottleneck Shifts from Execution to Direction](AI_First_Principles.md) — when building is free, knowing what to build is the only thing that matters.*

Every portfolio company pays expensive outside consultants for specialized knowledge — regulatory affairs, compliance, payer strategy, clinical design. These consultants charge $400-1,000/hr.

The old framing was: "replace these consultants with AI." That misses the point.

The real insight is this: **the people inside our portfolio companies who know what questions to ask — the regulatory directors, the clinical ops leads, the quality managers — they are now the most valuable people in the building.** They have the domain expertise. What they've always lacked is the cheap execution layer to act on it. AI provides that layer.

So the play isn't just "build an AI that knows FDA regulations." It's: **put AI directly in the hands of the people who already understand the problem, and let them move at the speed of their knowledge instead of the speed of their budget.**

The result is **captured expertise** — institutional knowledge that used to live only in someone's head, now encoded into systems that the whole organization can use. When your best regulatory director retires, their judgment shouldn't walk out the door. When an AI is trained on how they made decisions, that expertise compounds instead of disappearing.

And here's what the old version of this document didn't account for: AI isn't just cheaper than the $800/hr consultant. In a growing number of areas, it's actually *better* — because it can synthesize across thousands of documents, spot patterns across the entire FDA warning letter database, or cross-reference every payer policy simultaneously. A single consultant brings 20 years of personal experience. AI brings the full corpus.

### Where Domain Experts + AI Creates the Most Leverage

| Domain | Who Knows What to Ask | What AI Now Handles | Portfolio Companies |
|--------|----------------------|--------------------|-----------|
| **Compliance (GCP, GMP, GLP)** | Internal quality & regulatory staff | RAG on the full CFR/ICH regulatory corpus — AI retrieves relevant sections from thousands of pages of regulations, cross-references against inspection findings, and flags gaps. *(RAG = retrieval-augmented generation: the AI searches a specific knowledge base rather than relying on general training.)* | Azurity, Bend, Lexitas, Vector, Univo |
| **FDA Regulatory Strategy** | Regulatory affairs directors | RAG across FDA's full database of precedent decisions, guidance documents, and warning letters; fine-tuned on regulatory submission language to draft sections in the right voice. *(Fine-tuning = training the AI on your specific data so its outputs match your domain's standards.)* | Azurity, Bend, Applied StemCell |
| **Payer & Reimbursement** | Market access managers, hub operations leads | RAG on payer policy databases, formulary data, and prior auth requirements; learns from appeals outcomes to improve success rates over time | Azurity, InformedDNA, COPILOT |
| **Clinical Protocol Design** | Clinical operations leads | Analyzing historical protocol performance, enrollment patterns, and site capabilities across the full trial database | Lexitas, Vector |
| **IRB/Ethics Review** | IRB directors and senior reviewers | RAG on regulatory requirements and submission history; pre-screens for common issues, highlights areas needing human judgment | Univo, Vector, Lexitas |
| **Pharmacovigilance** | Safety officers | Monitoring adverse event databases, cross-referencing safety signals across the full FAERS dataset, drafting reports | Azurity, Lexitas |
| **Quality Systems** | Quality directors | RAG on audit findings, inspection histories, and CAPA databases; prepares inspection readiness summaries | Azurity, Bend |
| **Benefits Navigation** | Hub services managers | RAG on payer-specific requirements and coverage policies; drafts appeals using patterns from successful prior authorizations | COPILOT, Azurity |

### Vocabulary Note

Some of these terms are worth knowing because you'll encounter them in every AI vendor conversation:

- **RAG (Retrieval-Augmented Generation)**: Instead of relying on what the AI was generally trained on, you point it at a specific knowledge base — like FDA regulations or payer policies — and it searches that source to answer questions. This is how you make AI an expert in *your* domain.
- **Fine-tuning**: Training an AI model on your specific data so its outputs match your industry's standards and vocabulary. A fine-tuned model for regulatory submissions writes like a regulatory professional, not a generic chatbot.
- **Captured expertise**: Institutional knowledge — the judgment calls, pattern recognition, and decision-making frameworks that live in your best people's heads — encoded into AI systems so the whole organization benefits and the knowledge compounds instead of walking out the door.

### Where to Start (Highest Leverage)

1. **Compliance AI across the portfolio** — Affects 5+ companies. Build a single RAG system on the full CFR/ICH/FDA regulatory corpus and deploy it to every regulatory and quality person across the portfolio. They get an AI research assistant that knows the full body of FDA regulations, inspection findings, and warning letters. This is the fastest path to cross-portfolio value and captured expertise.
2. **FDA regulatory intelligence** — Azurity and Bend spend heavily on outside regulatory consultants. The knowledge base is publicly available (FDA.gov). Build RAG on it, fine-tune on submission language, and put it in the hands of the internal regulatory teams. Their domain knowledge plus AI's exhaustive recall is a better combination than any outside consultant.
3. **Payer intelligence at COPILOT and Azurity** — Both companies navigate complex payer landscapes daily. RAG on prior authorization outcomes, formulary data, and appeals history turns every hub services employee into someone with the knowledge of a 20-year market access veteran. Each case processed further fine-tunes the system — this is captured expertise compounding.

---

## 5. The 36-Month Growth Thesis

*Applies the Governing Premise and [Principle 4: Feedback Loops Compound](AI_First_Principles.md) — deploy early, let the data accumulate, and the advantage compounds over the hold period.*

QHP Capital targets ~36-month ownership windows. This is not a long enough horizon for cost-cutting to be the primary AI strategy. **The math overwhelmingly favors using AI for growth and expansion over downsizing and efficiency.**

Two things make this thesis stronger than it was even six months ago. First, the cost of building AI applications continues to drop — meaning the investment required to deploy growth-oriented AI is shrinking every quarter. Second, the quality of AI output is increasing — meaning AI-augmented employees aren't just faster, they're making better decisions, catching more opportunities, and serving more customers at a higher standard than they could alone.

### Why 36 Months = Growth

| Factor | Growth-Oriented AI | Cost-Cutting AI |
|--------|-------------------|----------------|
| **Time to impact** | 90 days to first revenue lift | 6-12 months of restructuring before results stabilize |
| **Exit narrative** | "40% revenue growth, only 30% of org adopted AI — massive remaining upside" | "We cut 25% of costs" — finished story, no remaining juice |
| **Multiple impact** | 3-5x EBITDA turns of multiple expansion on growth rate | 0.5-1x EBITDA turns for margin improvement |
| **On $50M EBITDA company** | $150-250M additional enterprise value | $25-50M additional enterprise value |
| **Buyer psychology** | Paying for a trajectory | Paying for a completed restructuring |
| **TTM at exit** | Accelerating — justifies forward multiple | Plateaued — limits to backward-looking multiple |
| **Market signal (2026-2028)** | AI-driven revenue growth is RARE — commands premium | AI-driven cost cuts are table stakes — no premium |

### The QHP AI Allocation Formula

**Months 1-6**: Surgical efficiency cuts in back-office (finance, HR, admin) using AI. Audit SaaS spend across the company — identify subscriptions that can be replaced by employee-built micro-apps within compliance guardrails. Both savings streams fund growth-oriented AI deployment in revenue-facing functions. This is the fuel, not the engine.

**Months 6-24**: Primary thrust is growth. AI deployed into sales, marketing, clinical operations, R&D, customer success, and manufacturing throughput. Every dollar of AI investment measured against revenue acceleration, not cost savings.

**Months 24-30**: Maintain growth orientation. Begin layering in margin optimization to strengthen EBITDA presentation.

**Months 30-36**: Shift to exit preparation. Maximize TTM EBITDA through combined growth trajectory + margin polish. The story to buyers: "Revenue is growing X%, margins are expanding, and there's still Y% of the organization that hasn't adopted AI — here's your remaining value creation opportunity."

### Department-Level Decision Guide

| Function | Default Direction | Rationale |
|----------|------------------|-----------|
| Sales / Marketing / BD | **Growth** | AI-augmented reps close more, faster. Add capacity, don't cut it. |
| R&D / Clinical Ops | **Growth** | Accelerate timelines, run more trials, develop more products. |
| Finance / Accounting | **Efficiency** | Automate reporting, reconciliation, close processes. Reduce headcount. |
| HR / Admin | **Efficiency** | Automate onboarding, benefits, compliance tracking. |
| Customer Success | **Growth** | Serve more customers better, reduce churn, expand accounts. |
| IT / Engineering | **Reallocate** | Fewer maintenance engineers, more AI/product builders. |
| Regulatory / Quality | **Efficiency + Risk Reduction** | Automate compliance monitoring, reduce errors, accelerate timelines. Don't reduce headcount. |
| Manufacturing / Ops | **Growth** | Increase throughput and capacity utilization. Headcount stays stable, output goes up. |

### Company-Level Allocation (36-Month Growth Lens)

Given QHP's hold period, EVERY company defaults to growth unless specific market conditions override.

| Company | Direction | Rationale | 36-Month Priority |
| **Azurity** | Growth | Expanding market, capacity-constrained | AI-driven manufacturing throughput → more revenue per facility |
| **Lexitas** | Growth | Clinical trial demand increasing, competitors investing | AI for enrollment speed → more trials per year → top-line acceleration |
| **Vector** | Growth | Site network expansion, enrollment is the bottleneck | AI recruitment optimization → higher enrollment → more sponsor revenue |
| **Bend Bioscience** | Growth | CDMO demand growing, capacity utilization is key | AI formulation acceleration → faster project turnaround → more clients served |
| **Applied StemCell** | Growth | R&D acceleration, IP portfolio expansion | AI research acceleration → more IP → stronger exit narrative |
| **COPILOT** | Growth | Hub services demand growing, labor-intensive model has massive AI leverage | AI automates BV/PA → 2-3x case throughput per employee → revenue scales without linear headcount growth |
| **AutoCruitment** | Growth (Urgent) | Recruitment tech is replicable | AI targeting superiority + conversion data accumulation — the exit value IS the data |
| **InformedDNA** | Growth | Genetic testing market expanding | AI-augmented counselors → 3x patient capacity per counselor → revenue scales without linear headcount |
| **Univo IRB** | Growth via Efficiency | Review process is the bottleneck | AI automates review → 2x throughput → serves more clients at same cost → revenue growth with margin expansion |

### When to Override the Default

Lean toward growth when markets are expanding, competitors are investing, and 18+ months remain in the hold. Lean toward efficiency when markets are contracting or exit is within 12 months.

### The Regulatory Arbitrage Window

Regulation moves slowly. AI moves fast. Companies that deploy AI responsibly before comprehensive frameworks are in place gain structural advantages:

1. Their deployed systems become reference implementations when regulators finalize frameworks.
2. They accumulate safety and performance data that regulators will require.
3. They become the proven choice — buyers pick track record over plans.

The compliance cost for a new AI deployment in 2028 will be multiples of what it costs in 2026. This window is finite. For QHP's hold period, this means deploying AI into portfolio companies now — imperfect deployments that accumulate data and track record are more valuable than perfect deployments that arrive after the regulatory window narrows.

---

## 6. Data Flywheel Deployment Priority

*Applies [Principle 4: Advantage Compounds Only Through Proprietary Feedback Loops](AI_First_Principles.md) — your competitor can buy the same model; they can't buy your two years of data.*

Deploy AI into live operations NOW at these companies — imperfectly is fine. The flywheel only starts when AI is live. Each interaction generates data that fine-tunes the models and feeds the RAG systems, making them more accurate and more valuable over time. This is what turns a tool into a moat.

| Company | Flywheel Target | Data Generated | Competitive Gap Created |
|---------|----------------|----------------|----------------------|
| **Azurity** | AI-assisted quality prediction in manufacturing | Batch-level quality data correlated with process parameters | Competitors who start in 2028 can't catch Azurity's 2026 dataset |
| **Lexitas** | AI-optimized site selection | Trial-level outcome data correlated with site characteristics | Accumulated track record IS the moat |
| **Vector** | AI-augmented patient recruitment | Campaign-level conversion data by patient demographic/channel | Each campaign makes the next one smarter |
| **AutoCruitment** | AI-driven targeting optimization | Patient-to-enrollment conversion data at massive scale | Most urgent — this data IS the company value |
| **COPILOT** | AI-automated benefits verification & prior auth | Payer decision data by drug/plan/diagnosis, approval patterns, appeals outcome data | Each case processed builds proprietary payer intelligence that competitors can't replicate |
| **Bend Bioscience** | AI-assisted formulation development | Formulation attempt → outcome data | Proprietary formulation intelligence that grows with every project |

---

## 7. Acquisition Targeting Framework

*Applies [Principle 2: Value Migrates to the Irreproducible](AI_First_Principles.md) and [Principle 3: The Frontier Moves](AI_First_Principles.md) — what looks like a moat today may not survive the hold period.*

### AI Impact Assessment for Every Deal

Every major decision — acquisitions, market entry, pricing, exits — now requires an AI scenario:

- **Acquisitions**: Is this target's cost structure durable when AI enables 30-50% productivity gains? Does it have data assets that become more valuable with AI?
- **Market entry**: Will this market remain attractive when AI allows competitors to enter from adjacent markets at low marginal cost?
- **Pricing**: Will pricing hold when AI collapses the industry's cost structure?
- **Exits**: Is the buyer paying for captured AI value, or discounting because the work is ahead?

### New Deal Screening Questions

Every deal memo should include an **AI Scenario Impact** section:

1. **How does this business change if AI adoption accelerates industry-wide?** Will the target's value proposition strengthen or weaken?
2. **What proprietary data assets does this company have that increase in value with AI?** Strip away the software — what's left?
3. **What's the AI-driven value creation plan, and what's it worth at exit?** Quantify the EBITDA impact.

### Target Scoring (Collapsibility Assessment)

When evaluating technology-enabled targets, assess their collapsibility — how much of the value is in replicable cognitive labor versus durable assets:

| Signal | Collapsibility | Action |
|--------|---------------|--------|
| "Great technology platform" | High collapsibility — code moat is evaporating | Discount aggressively or walk away |
| Large proprietary dataset | Low collapsibility — data moat strengthens with AI | Premium justified |
| Regulatory validation (FDA, Part 11) | Low collapsibility — years + millions to replicate | Strong moat — value appropriately |
| Exclusive data integrations (EMR, payer feeds) | Low collapsibility — structural, hard to replicate | Premium justified |
| Network effects / marketplace dynamics | Low collapsibility — multi-sided platform, defensible | Premium justified |
| "50-person engineering team built this" | High collapsibility — cost to replicate just dropped 90% | DO NOT pay for the team — pay for the data |
| Declining net revenue retention | High collapsibility — customers may be building their own micro-apps | Investigate whether churn is to competitors or to self-built tools. If self-built, the code moat is already gone. |
| HITRUST/SOC 2/FDA Part 11 certified | Low collapsibility — customers can't self-build compliance | Certifications are a moat against the micro-app shift. Value appropriately. |

### Disruption Targets

Companies whose primary moat is "we spent $50M and 5 years building this platform" are now vulnerable — they have high collapsibility. AI made the code easy to replicate. The only durable value is what the code was built on top of — the data, the relationships, the regulatory status. These are acquisition targets at **depressed valuations** — buy the data, the captured expertise, and the relationships, then rebuild the software with AI for a fraction of the original cost.

**Industries to scan**:
- Hub services / patient support platforms (competitors to COPILOT)
- Patient recruitment platforms (competitors to AutoCruitment)
- Regulatory information management systems
- Quality management systems for life sciences
- Any SaaS company in healthcare where the product is "sophisticated software" without proprietary data underneath

---

## 8. AI Resource Concentration Model

*In a multi-company portfolio, the company that adopts AI fastest generates more operational data, builds better models, and pulls ahead. This is Principle 4 in action — the feedback loop compounds. The math favors concentration over even distribution.*

### Portfolio Ranking: AI Investment Priority

Rank on two dimensions: (1) magnitude of AI value creation potential, (2) competitive urgency.

| Company | Value Ceiling | Competitive Urgency | AI Investment Tier |
|---------|-------------|--------------------|--------------------|
| **Azurity** | Very High | Medium | **Tier 1 — Concentrate** |
| **COPILOT** | Very High | Medium-High | **Tier 1 — Concentrate** |
| **Lexitas** | High | Medium-High | **Tier 2 — Strong investment** |
| **AutoCruitment** | Medium-High | Very High (urgent) | **Tier 2 — Strong investment** |
| **Bend Bioscience** | Medium-High | Medium | **Tier 2 — Strong investment** |
| **Vector** | Medium | Medium | **Tier 2 — Strong investment** |
| **InformedDNA** | Medium | Medium | **Tier 3 — Baseline AI tooling** |
| **Applied StemCell** | Medium | Low-Medium | **Tier 3 — Baseline AI tooling** |
| **Univo IRB** | Medium | Medium | **Tier 3 — Baseline AI tooling + process automation** |

---

## 9. Firm-Level AI Applications

### Leadership Imperative

Organizations where senior leaders personally use AI are roughly 3x more likely to capture value from AI initiatives. This isn't about executives sponsoring AI projects from a distance. It's about using AI daily, in their own work, visibly. When a CEO uses AI to prepare for board meetings, it signals permission for the organization. When they don't, middle managers have cover to ignore it. AI transformation is a leadership behavior, not a technology project.

### Transformation Engine

AI evolves faster than any plan. A roadmap written in January is outdated by March. The deliverable is not a transformation — it's a transformation engine:
- Quarterly sprint cycles evaluating new capabilities
- Embedded AI operators who permanently identify applications
- Measure time from new AI capability release to operational deployment — not "AI projects completed"

### Phase 0: Executive AI ("Limitless Upgrade")

Deploy AI tools to every QHP partner and portfolio company CEO. Not optional. This is the single highest-leverage action because:
- Senior leaders who use AI personally are 3x more likely to drive organizational adoption
- It creates implicit permission for the entire organization
- It generates demand-pull ("I want this for my team") instead of supply-push ("IT says we should use AI")

### Deal Intelligence

AI-powered capabilities for QHP's investment process:
- **Market scanning**: AI-driven identification of targets matching QHP's thesis
- **Thesis validation**: Automated competitive landscape, market sizing, technology assessment
- **Data room analysis**: AI-powered document review and risk identification during due diligence
- **Comparable analysis**: Real-time comp sets with AI-synthesized insights

### Portfolio Monitoring

- **Real-time KPI tracking**: AI-aggregated dashboards across all 9 portfolio companies
- **Early warning systems**: Anomaly detection on financial and operational metrics
- **Cross-portfolio benchmarking**: Compare AI adoption rates, productivity gains, and competitive positioning
- **AI adoption scorecard**: Track each portfolio company's AI deployment velocity (time from capability release to operational deployment)

### LP Reporting

- **Automated performance attribution**: AI-generated analysis of value creation drivers
- **AI impact quantification**: Track and report the specific financial impact of AI deployments across the portfolio
- **Narrative generation**: AI-assisted quarterly reports with human review

---

## 10. External Research Synthesis

*What the smartest organizations are saying — and what it means for QHP.*

### Key Findings from Global Research

| Source | Key Insight | QHP Implication |
|--------|-----------|----------------|
| **McKinsey** (200+ transformations) | Only 6% are "AI high performers." They redesign how work gets done, not just bolt on tools. Senior leaders who personally use AI create 3x more value. | Validates Phase 0 Executive AI and Section 3 (workflow redesign). Don't just buy licenses — rethink how each process works. |
| **Sequoia Capital** | $600B gap between AI infrastructure spend and actual revenue. GPU computing is commodity. | Don't overspend on AI infrastructure. Start with specific, revenue-generating applications, not "AI platforms." |
| **a16z** | "Romanticizing Inorganic Growth" — use AI to improve economics, then acquire. Healthcare "Super Staffing" — AI as specialist labor. | This IS QHP's strategy. Use AI-driven EBITDA improvement as acquisition currency. Tap labor budgets, not IT budgets. |
| **World Economic Forum** | "Shift-left" — build safety/governance in from start. Value-based change management. | Non-negotiable for portfolio companies handling patient data or clinical decisions. |
| **Anthropic** | Scaling laws: 10x compute/year. "Most knowledge work may be automatable." Portfolio approach to AI uncertainty. | Build capabilities that create value whether AI accelerates, plateaus, or hits regulatory headwinds. |
| **Goldman Sachs** | AI productivity impact hits 2025-2030. 50% adoption threshold for macro impact. Larger companies scale faster. | QHP's hold period aligns perfectly. Push adoption NOW to demonstrate AI-driven performance at exit. |

### Cross-Cutting Playbook Implications

1. **a16z's "Super Staffing" maps directly** to COPILOT, Vector, Lexitas, AutoCruitment — position AI as specialist labor filling the clinical staffing crisis, funded from labor budgets (10x larger than IT budgets).
2. **McKinsey's 70-80% in-house talent rule** — don't outsource AI to consulting firms. Build internal capability at portfolio companies.
3. **Goldman's timing insight** — AI's major productivity impact hits during QHP's hold period. This is a timing advantage worth billions in aggregate portfolio value at exit.
4. **Sequoia's revenue test** — every AI project at a portfolio company must have a clear revenue or cost-saving metric. No science projects.

---

## 11. AI Maturity Assessment Framework

*Every process at every portfolio company sits somewhere on a maturity curve. This framework provides a common language for assessing where things stand today and where AI can move them. This ladder is the operational version of [Principle 3: The Frontier Moves](AI_First_Principles.md) — each level represents a wave of the collapse sequence applied to a specific process at a specific company.*

### Measure Before You Build

You cannot prove AI created value without a pre-deployment baseline, a defined success metric, and a counterfactual. Most failed AI projects didn't fail technically — they failed because no one defined what success looked like before they started.

Before deploying AI into any workflow:

1. **Baseline the current state** — measure the process as it runs today (cost, time, error rate, throughput, whatever matters).
2. **Define the success metric** — a specific, quantitative target the AI deployment must hit.
3. **Establish the counterfactual** — what would have happened without the AI? Without this, any improvement is anecdotal.

This discipline serves two purposes. Operationally, it forces clarity about what you're actually trying to improve — which kills vague "AI transformation" projects before they waste resources. Strategically, it builds the evidence base you need at exit: auditable, quantified AI value creation that a buyer can underwrite.

The test harness comes before the model. The scoreboard comes before the game.

### The Maturity Ladder

| Level | Stage | Description | AI Role | Human Role |
|-------|-------|-------------|---------|------------|
| **L0** | Undefined | No agreed metrics. Decisions by gut feeling, politics, or whoever presents best. | None — AI has no target to aim at. | Everything. |
| **L1** | Measurable | Success criteria exist. We can score performance — but humans do all the work. | Scorekeeper — collecting data, showing baselines. | Doers, now graded. |
| **L2** | Repeatable | SOPs, checklists, and playbooks exist. Variance is reduced. Process is consistent. | Assistant — auto-completing steps, offering templates. | Follows the script. |
| **L3** | Automated | AI handles ~80% of volume. Humans handle exceptions and edge cases. | Primary worker for routine volume. | Manager and exception-handler. |
| **L4** | Industrialized | Buyers purchase outcomes, not labor. Unit economics permanently favor AI. | Runs the operation. | Auditor and architect. |
| **L5** | Commoditized | Multiple providers compete on price. The service is a utility. | Invisible infrastructure. | Consumer. |

### How to Use This

**Assess processes, not companies.** A single portfolio company will have processes at multiple levels. Azurity might have L3 demand forecasting but L0 regulatory intelligence. COPILOT might have L2 prior authorization but L1 benefits investigation.

**The goal is not L5 for everything.** For most QHP portfolio companies with 24-42 month holds, moving a process from L0→L2 or L1→L3 creates the most value. L4-L5 transitions take longer than a hold period.

**Prioritize L0→L1 transitions first.** You can't automate what you can't measure. The single highest-ROI activity is often just instrumenting a process — defining success metrics and collecting baseline data. This unlocks everything above it.

### Portfolio Process Maturity Snapshot

*To be populated during Q1 2026 portfolio assessment.*

| Company | Process | Current Level | Target Level | Priority |
|---------|---------|:---:|:---:|:---:|
| Azurity | Demand Forecasting | — | — | — |
| Azurity | Regulatory Intelligence | — | — | — |
| COPILOT | Prior Authorization | — | — | — |
| COPILOT | Benefits Investigation | — | — | — |
| Lexitas | Site Selection | — | — | — |
| Vector | Patient Recruitment | — | — | — |
| AutoCruitment | Ad Targeting/Conversion | — | — | — |

### Maturity Assessment Rules

1. **A process is only at a level if it meets every criterion for that level.** Partial doesn't count.
2. **Assessment is based on the worst-performing sub-process.** A chain is only as strong as its weakest link.
3. **Reassess quarterly.** Maturity can regress if data pipelines break, key personnel leave, or models drift. *(Model drift = the AI's accuracy degrades over time as the real world changes but the model's training data doesn't. It's the AI equivalent of someone whose knowledge is ten years out of date.)*

*Adapted from Wissner-Gross & Diamandis, "Solve Everything" (2026), L0-L5 Maturation Curve.*

---

## 12. Implementation Roadmap

### Q1 2026: Foundations
- [ ] Phase 0 Executive AI deployment to all partners and portfolio CEOs
- [ ] Portfolio disruption assessment (share with investment committee)
- [ ] AI resource concentration model approved
- [ ] Expert knowledge audit initiated across Tier 1 companies
- [ ] Process maturity assessment (Section 11) for Tier 1 companies — baseline all priority processes
- [ ] Workflow redesign assessment for Tier 1 companies (Section 3)

### Q2 2026: First Deployments
- [ ] Data flywheel deployments live at Azurity and COPILOT (Tier 1 companies)
- [ ] Compliance AI prototype (cross-portfolio)
- [ ] Deal Intelligence AI tools in use for active pipeline
- [ ] Software value test complete for COPILOT and AutoCruitment
- [ ] First workflow redesigns implemented at COPILOT and Azurity

### Q3 2026: Scale
- [ ] Tier 2 company AI deployments initiated
- [ ] FDA Regulatory Intelligence AI live
- [ ] Portfolio monitoring AI dashboard operational
- [ ] First AI-driven acquisition target identified using new screening framework

### Q4 2026: Measure and Report
- [ ] AI impact quantification across portfolio (EBITDA impact, productivity gains)
- [ ] LP report with AI value creation attribution
- [ ] 2027 AI investment allocation based on results
- [ ] Update First Principles based on what we've learned

---

*This playbook is a living document. It will be updated quarterly as deployments progress, principles are pressure-tested, and new opportunities emerge.*

*Governed by: [AI First Principles](AI_First_Principles.md)*
