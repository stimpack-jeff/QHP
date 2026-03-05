# AI First Principles
*Jeff Frazier, Operating Partner – AI, QHP Capital | Started March 2, 2026*

These are universal truths about how AI changes business, strategy, and competition. They are not QHP-specific tactics — those live in the [QHP AI Playbook](QHP_AI_Playbook.md). These are the governing laws.

There is one axiom. Everything else derives from it.

The [AI Economic Thesis](AI_Economic_Thesis.md) is the executive briefing — the 5-minute version for partners and portfolio boards. This document is the full reasoning.

---

## Part I: The Taxonomy of AI — Economic Categories

Not all AI is the same. These are **functional categories** — defined by the cognitive task performed and the human cost structure it replaces. Some distinctions are economic (what you pay for), some are modal (what input the AI processes). The purpose is practical: identify which kind of intelligence you're deploying and what it displaces.

### 1. Knowledge AI — "What is true?"

Retrieves, organizes, and surfaces information. RAG systems, knowledge bases, semantic search, document Q&A.

**What it replaces**: Researchers, analysts, anyone whose primary job is finding and aggregating information.

**Economic shift**: Near-zero marginal cost per query. Information becomes a commodity; value shifts to surfacing the right information in context.

---

### 2. Expertise AI — "What should we do, given what we know?"

Replicates codifiable domain expertise — specific, pattern-based expert judgment built from practice in a defined field.

**What it replaces**: Expert consultants ($300–$1,000/hr) whose intelligence follows documented regulations, established precedents, and repeatable decision frameworks.

**Key distinction from Knowledge AI**: Knowledge AI tells you what the FDA guidance says. Expertise AI tells you how to interpret it, what the reviewer will focus on, and what to do about it. Knowledge is retrievable. Expertise is judgment applied to knowledge.

**Economic shift**: From scarce, high-cost human experts to near-zero marginal cost per query with unlimited parallel capacity. The majority of expert consulting — estimated at 60–90%, depending on domain documentation density and regulatory codification — is pattern-based and capturable. The remainder requires human judgment for novel and ambiguous situations.

**Two modes of Expertise AI:**

| Mode | How it works | Example |
|------|-------------|--------|
| **Pattern-based (experiential)** | Matches the current situation to precedent. "I've seen this before — here's what works." | Regulatory strategy: "This payer typically requires step therapy for this drug class. Expect a denial without it." |
| **Rule-based (logical inference)** | Chains through explicit rules, regulations, and constraints to derive a conclusion. "Given Rule A, Fact B, and Exception C — here's what follows." | Compliance: "Plan X requires step therapy per formulary §4.2.1. Patient failed Drug A (step 1). Drug B is step 2. Patient has not failed step 2. PA for Drug C will be denied. File exception per contraindication clause §4.2.3." |

In practice, domain experts do both simultaneously — a senior regulatory affairs consultant doesn't neatly separate pattern-matching from rule traversal. The distinction matters for AI build approach: pattern-based expertise trains on expert decisions; rule-based expertise requires structured regulatory knowledge graphs and chain-of-thought reasoning architectures.

**Domains ripe for capture** (healthcare/life sciences):
- GxP compliance (GCP, GMP, GLP, GDP)
- FDA regulatory affairs and submission strategy
- Reimbursement / payer strategy
- Clinical protocol design and optimization
- Pharmacovigilance and safety reporting
- Quality systems and audit preparation
- IRB/ethics review processes

---

### 3. Analysis AI — "What does this mean?"

Pattern recognition, statistical analysis, trend identification, anomaly detection. Takes data and extracts meaning.

**What it replaces**: Data analysts, business intelligence teams, research analysts.

**Economic shift**: From analyst headcount-dependent insight generation to near-instant pattern recognition at scale.

**Key distinction from Prediction AI**: Analysis tells you what the data shows *now* — patterns, anomalies, root causes. Prediction tells you what the data will show *next*. Both work on data; they face different directions.

---

### 4. Prediction AI — "What will happen?"

Forecasting future states from historical and real-time data. Time-series modeling, demand forecasting, survival analysis, Monte Carlo simulation, conversion modeling.

**What it replaces**: Forecasters, actuaries, demand planners, enrollment modelers — anyone whose job is to estimate future outcomes from past patterns.

**Key distinction from Analysis AI**: Analysis is retrospective and diagnostic ("what happened and why"). Prediction is prospective ("what will happen next quarter, and with what confidence"). The build is different — time-series architectures, simulation engines, probabilistic models. The validation is different — you can score predictions against actual outcomes, creating the automated feedback loop described in Principle 2.

**Key distinction from Judgment AI**: Prediction AI produces a forecast. Judgment AI helps a human decide what to *do about it*. Prediction says "there's a 73% chance this PA gets denied." Judgment says "given that probability, plus the patient's clinical urgency, the cost of appeal, and three alternative therapies — here are your options ranked by expected outcome."

**Economic shift**: From expensive, slow, often-wrong human forecasting to continuous, recalibrating prediction at scale. The marginal cost of an additional forecast drops to near zero, which means companies can predict at a granularity that was never economically justified before — per-SKU, per-patient, per-site, per-day.

---

### 5. Perception AI — "What am I looking at?"

Interpreting unstructured sensory inputs — images, audio, video, documents, physical signals — and converting them into structured, actionable data.

**What it replaces**: Quality inspectors, radiologists, call quality monitors, document processors, manual data entry operators — anyone whose primary job is looking at something and classifying or extracting information from it.

**Key distinction from Analysis AI**: Analysis AI works on *structured data* that's already in a database. Perception AI works on *raw sensory inputs* that haven't been structured yet. Perception AI turns images, audio, and documents into data. Analysis AI finds patterns in that data.

**Economic shift**: From human attention bottlenecks (a QC inspector can only examine so many units per hour) to continuous, tireless inspection at scale. The shift is particularly significant in manufacturing and clinical operations where human attention is the rate-limiting step.

---

### 6. Process AI — "How should this flow?"

Workflow automation, scheduling, routing, coordination, orchestration.

**What it replaces**: Project managers, coordinators, operations staff managing handoffs.

**Economic shift**: From coordination headcount to automated orchestration. The primary value is speed — AI-orchestrated processes don't wait for humans to check email or remember next steps.

---

### 7. Generative AI — "Create something new."

Content creation, code generation, document drafting, design, hypothesis generation.

**What it replaces/augments**: Writers, developers, designers — but more accurately, it multiplies creative professionals rather than replacing them. The first draft is free; the human applies judgment and refinement.

**Key distinction**: Generative AI creates candidates. Humans select winners.

---

### 8. Judgment AI — "What's the risk? What's the bet?"

Decision support under uncertainty. Scoring, ranking, scenario modeling, risk assessment.

**What it augments** (note: augments, not replaces): Executives, clinicians, investors — anyone making high-stakes decisions with incomplete information.

In regulated industries, accountability must rest with humans. Judgment AI makes decision-makers better; it does not replace them.

---

### Summary

| Kind | Core Question | Replaces | Build Approach |
|------|--------------|----------|----------------|
| **Knowledge** | What is true? | Researchers, analysts | RAG on document corpus |
| **Expertise** | What should we do? | Expert consultants | RAG + fine-tuning on expert decisions + regulatory knowledge graphs |
| **Analysis** | What does this mean? | Data analysts, BI teams | ML models on operational data |
| **Prediction** | What will happen? | Forecasters, demand planners, actuaries | Time-series models, simulation, probabilistic forecasting |
| **Perception** | What am I looking at? | Inspectors, monitors, document processors | Vision models, audio models, multi-modal classification |
| **Process** | How should this flow? | Coordinators, project managers | Workflow automation + agentic AI |
| **Generative** | Create something new | First-draft production | Foundation models + domain context |
| **Judgment** | What's the risk? | (Augments) decision-makers | Scenario simulation + decision frameworks |

Most organizations start with Knowledge AI and Generative AI because they're easy to deploy. Expertise AI is harder to build and validate, but it captures the highest-cost intelligence in the value chain. Prediction AI is where the automated feedback loop (Principle 2) is most visible — every forecast scored against reality makes the next one better.

---

## Part II: The Axiom

---

### The Axiom: The Cost of Reproducible Cognitive Labor Is Going to Zero

The marginal cost of reproducible cognitive labor — knowledge retrieval, pattern-based analysis, codifiable expertise — is approaching zero. Things companies once paid premium rates for can now be produced by AI at negligible cost per query.

**Qualification:** The cost of *generating* intelligence approaches zero. The cost of *validating* it does not. In regulated industries, the trust-verification layer can exceed the intelligence layer it checks. This axiom applies to intelligence generation — what you build around it to ensure correctness is a separate, non-trivial cost structure.

**What retains value when intelligence is cheap:**
- Physical operations (manufacturing, logistics, patient care)
- Regulatory relationships requiring years of trust-building
- Proprietary data generated through operations
- Clean, structured, accessible data — the prerequisite most companies lack and the binding constraint on AI value
- Human trust networks (provider-patient, site-sponsor, counselor-patient)
- Execution capability in complex, regulated environments

The winners are companies with non-collapsible operations that adopt AI aggressively — because intelligence was a major input cost, and that cost just dropped toward zero. Companies that are primarily knowledge or software plays must move fast; their moat needs to shift from what they've built to what they've accumulated.

*Jeff Frazier — March 2, 2026*

---

## Part III: The Derivations

*If intelligence is going to zero, then...*

---

### Principle 2: AI Advantage Is Temporary Unless You Outrun It

*Derivation: If intelligence goes to zero for everyone simultaneously, the advantage is speed of absorption, not adoption.*

When intelligence goes to zero for you, it goes to zero for your competitors. If you use AI to cut costs 30%, your competitor does too, and the market price adjusts downward. The benefit accrues to the customer, not either company.

This is already visible in software engineering, content creation, customer service, and legal research. The competitive advantage from AI adoption lasted about 6-12 months before markets repriced.

AI competitive advantage comes not from adopting AI but from the speed of continuously integrating it faster than competitors. The company rewiring its operations around AI faster, week over week, wins. The company that completes "an AI transformation" and stops loses the advantage within a year.

The correct objective is not "deploy AI." It's "build an organization that absorbs AI improvements faster than any competitor." This is an organizational capability, not a technology decision.

The compounding mechanism is structural: AI deployed into live operations generates proprietary labeled data — predictions scored against outcomes, recommendations validated against results. This data feeds back into the model automatically, without human re-analysis at each cycle. A competitor who starts six months later can buy the same tools but cannot buy your accumulated operational data. Speed advantages don't just persist — they compound, because the feedback loop is automated and the training data is proprietary.

*March 2, 2026. Expanded March 3, 2026.*

---

### Principle 3: Software Is Going to Zero — Value Lives in What's Inside It

*Derivation: If intelligence is zero-cost, code (a form of intelligence) is zero-cost. Value migrates to what the code contains.* What can be built cheaply by anyone cannot command a premium. The value of a technology company is no longer in its code — it's in what the code contains:

- **Proprietary algorithms** — Novel methods, not code. A differentiated analytical model or scoring methodology that can't be replicated by prompting an AI.
- **Proprietary content** — Curated, validated, structured knowledge assembled through domain expertise over years.
- **Exclusive data access** — Contractual or structural exclusivity to data sources competitors cannot obtain.
- **Accumulated operational data** — Data generated by a platform's operations over time, compounding as AI models retrain on scored outcomes. The one thing a competitor cannot replicate by purchasing the same tools. This is why time-to-deployment matters more than perfection — the data flywheel only starts when AI is live.
- **Network effects** — Value from the number of participants, not the sophistication of the code.
- **Regulatory validation status** — Software validated under 21 CFR Part 11, cleared by FDA, or audited for GxP compliance. Easy to replicate the code; hard to replicate the status.

| Asset | Defensibility | Value Trajectory |
|-------|-------------|-----------------|
| Code / software | Near zero | Declining to zero |
| Engineering team (for coding) | Low | Declining |
| Proprietary algorithms / methods | High | Stable to increasing |
| Proprietary curated content | High | Increasing |
| Exclusive data access | Very high | Increasing |
| Accumulated operational data | Very high | Compounding |
| Network effects | Very high | Compounding |
| Regulatory validation status | Very high | Stable |

The test for any technology company: strip away the software. What's left? If the answer is proprietary data, regulatory status, and exclusive integrations — that's durable value. If the answer is "a well-built platform that does X" — someone will rebuild it.

*Jeff Frazier — March 2, 2026*

---

### Principle 4: Domain Expertise Is the New Scarcity

*Derivation: If the technical layer is commoditized, the only remaining bottleneck is knowing what to build and why.*

AI commoditizes the technical layer. It does not commoditize 20 years of understanding how FDA reviewers think, what motivates a reluctant clinical trial patient, or which formulation approaches fail at scale.

Before AI: Domain Expert → Product Manager → Engineer → output. Four links, each with information loss.

After AI: Domain Expert → AI → output. One link. The domain expert's value goes up.

Put AI in the hands of operators, clinicians, formulators, and regulatory professionals — not IT departments. Hire domain experts who are curious about AI, not AI engineers who don't know the domain. The domain expert finds use cases the engineer would never imagine.

**Corollary — The Analytical Stack Has Collapsed:** The most dramatic example of this link-compression is the traditional analytical stack. Predictive modeling used to require a data scientist, a data engineer, and a developer — $500K-$900K/year in compensation, months to stand up, producing a few production models per year. Most middle-market companies couldn't afford it. AI has collapsed these roles into a single AI-augmented domain expert who can produce production-grade analytical work — predictive models, optimization algorithms, statistical analyses — in days rather than months. This is capability democratization: analytical firepower that was inaccessible to mid-market companies is now routine. The bottleneck has shifted from "do we have a data science team?" to "do our people know what questions to ask?" — which is a domain expertise problem, confirming that domain expertise is the new scarcity.

*March 2, 2026. Corollary added March 3, 2026.*

---

### Principle 5: Captured Expertise Is the Highest-Value AI Application

*Derivation: If domain expertise is the scarcity, and AI can capture a substantial majority of it, then capturing expert judgment is the highest-ROI AI application.*

Expert consultants charge $300–$1,000/hr because the knowledge takes years to develop, supply is limited, and the cost of error is high. A substantial majority of this expertise — estimated at 60–90%, varying by domain documentation density and regulatory codification — follows patterns grounded in defined regulations, documented precedent, and established decision frameworks. That pattern-based majority is capturable by AI through RAG or model training.

The remainder involves novel situations, ambiguous regulation, cross-domain synthesis, and contextual judgment — including tacit knowledge that was never written down: organizational politics, unspoken reviewer preferences, relationship history. Pattern-based does not mean documented. Documented does not mean capturable without significant curation. This is where human experts remain essential — and where AI hallucination risk is highest.

The validation requirement scales with stakes:

| Stakes | Examples | Approach |
|--------|---------|---------|
| **Low** | Internal research, first-draft analysis | AI output with light human review |
| **Medium** | Operational decisions, strategic recommendations | AI generates options; human selects and approves |
| **High** | Regulatory submissions, clinical decisions, GxP compliance | AI does the heavy lifting; qualified human validates every output |

Even with human-in-the-loop validation, an expert who previously spent 80% of their time on pattern-based work can now serve 3-5x more clients. The expert isn't eliminated — they're leveraged.

Audit every expert dependency. Ask what's codifiable, what's trainable, and what the stakes are if the AI is wrong. Match validation rigor to risk.

*Jeff Frazier — March 2, 2026. Qualified March 3, 2026.*

---

### Principle 6: AI Collapses Transaction Costs — Rethink Boundaries

*Derivation: If intelligence costs collapse, so do the coordination costs that define firm boundaries. The question is which falls faster — internal or external.*

Coase's Theory says companies exist because internal coordination is cheaper than market transactions. AI reduces both. The strategic question: which falls faster?

**AI reduces market transaction costs too.** AI-powered discovery, evaluation, and contracting slash the cost of finding and managing external providers. If an AI can instantly evaluate 50 CROs against your protocol requirements, the case for owning that capability in-house weakens. The analysis must be bilateral — you cannot assume internal costs fall faster without examining what's happening to external market efficiency.

In regulated industries, internal coordination costs *often* fall faster because:
- Data sharing across organizational boundaries is restricted by regulation
- Regulatory compliance is easier to manage with unified control
- Quality control is more reliable internally
- Speed advantages of integration compound when regulatory timelines are the bottleneck

But this is not a blanket rule. Integrate where data flows and regulatory compliance require unified control. Disintegrate where AI makes external markets more efficient than your internal capability.

| Domain | AI Impact |
|--------|-----------|
| **Build vs Buy** | Building gets cheaper; what you can buy becomes less differentiated. Custom wins. |
| **Vertical Integration** | Integrate where data and compliance require unified control. Disintegrate where AI makes external markets more efficient. |
| **Platform Position** | Be the platform that collapses transaction costs for others — not just a beneficiary of the collapse. |
| **Data Ownership** | The single most important strategic asset. Optimize every decision for data capture and ownership. |
| **Talent** | Fewer knowledge workers, more AI-augmented operators. |
| **Capital Allocation** | Proprietary data assets > generic software licenses. |
| **IP Strategy** | Proprietary datasets and trained models > software patents. |

*Jeff Frazier — March 2, 2026*

---

### Principle 7: Workflows Are Cognitive Architectures — Change the Agent, Change the Architecture

*Derivation: If AI is a fundamentally different cognitive agent than humans, then workflows optimized for human cognition are the wrong architecture for AI.*

Every workflow in a company is an optimization solution for the cognitive constraints of the workforce that performs it. Specifically, workflows evolved the way they did because humans:

| Human Constraint | What it produced in workflows |
|---|---|
| **Serial processing** — humans do one thing at a time | Sequential approval chains, routing queues, escalation ladders |
| **Limited working memory** — humans can't hold an entire case in their head | Specialist roles, fragmented handoffs, narrow job scopes |
| **Fatigue-correlated error** — humans make more mistakes under volume and time pressure | Redundant review checkpoints, QC layers, sign-off requirements |
| **Context-switching cost** — humans lose time and accuracy when jumping between tasks | Batch processing, scheduled review cycles, dedicated time blocks |
| **Variable weighting limits** — humans can't simultaneously weigh many factors | Simplified heuristics, rules of thumb, scoring shortcuts |

These aren't deliberate design choices. They're evolutionary artifacts — decades of optimizing around the weaknesses of the human cognitive agent doing the work.

**AI has none of these five constraints.** It processes in parallel, holds unlimited context, doesn't fatigue, switches instantly, and weighs all variables simultaneously.

**But AI has three constraints humans don't have:**

| AI Constraint | What it requires in workflows |
|---|---|
| **Hallucination** — generates plausible but wrong outputs with high confidence | Confidence thresholds, structured validation gates, source verification |
| **No genuine judgment under novel ambiguity** — can't reason about truly unprecedented situations | Human-in-the-loop at decision points involving novelty, not just at existing review checkpoints |
| **No physical capability** — can't examine, touch, or intervene in the physical world | Physical tasks remain human; AI handles the cognitive layer around them |

**Why bolt-on fails:** When you insert AI into an existing workflow, you preserve all five human-constraint bottlenecks (which AI doesn't need) while adding zero AI-constraint guardrails (which it does need). The AI sits inside an architecture that throttles its strengths and ignores its weaknesses. The sequential approvals still gate its parallelism. The specialist handoffs still fragment context it could hold in full. The review checkpoints are at the points where *humans* made errors, not where *AI* hallucinates.

**The diagnostic tool:** For any workflow you're considering for AI, walk each step and ask:

1. Which of the five human constraints shaped this step? Does AI share that constraint? If not, the step is an obsolete bottleneck — eliminate or re-architect it.
2. Where in this workflow do AI's three unique failure modes create risk? Those are where you add new guardrails that the original workflow never needed.

The correct question is not "where do we add AI to this process?" It's "if we were solving this problem today, with AI as the primary cognitive agent and humans handling judgment, novelty, and physical tasks — what architecture would we build?"

**The transition constraint:** Knowing the correct architecture answers *what*. The rate at which you can actually transition to it answers *how fast* — and that rate is bounded by proven performance, not capability.

AI capability can advance in weeks. But the humans whose workflows are being redesigned — operators, regulators, executives — develop confidence on a completely different timescale. Give AI more cognitive authority than its track record justifies, and the organization rejects it. Operators route around it. Executives pull funding after the first visible error. The deployment fails not because the AI was wrong, but because it was right 95% of the time and no one had seen that yet.

The transition follows a gradient, with each phase gated by demonstrated results at the current level:

| Phase | AI Role | Human Role | What Earns the Next Phase |
|---|---|---|---|
| **Shadow** | Runs in parallel; outputs not used | Does all work; sees what AI *would have* recommended | Track record of "it would have been right" across enough volume to be convincing |
| **Assist** | Pre-populates, suggests, drafts | Reviews and approves everything | Operators experience speed gains with no meaningful error increase |
| **Autopilot + exceptions** | Handles routine volume autonomously | Handles exceptions, edge cases, novel situations | Measurable error rates, audit results, outcome data across a sustained period |
| **Full autonomy + audit** | Runs the process end-to-end | Audits samples, monitors drift, handles escalations | Quarters of sustained performance data; regulatory and organizational confidence |

With previous technology (ERP, CRM), the human remained the cognitive agent — the tool changed, but the human still made the decisions. With AI, you're asking humans to cede cognitive authority to a different kind of agent. The rate at which that authority can transfer is bounded by the rate at which proven performance accumulates.

**The deployment error:** Most failed AI rollouts design the correct new architecture but skip Shadow and Assist, jumping straight to Autopilot because the model benchmarks justify it. The architecture was right. The transition was too fast. Deploy faster than proven performance allows, and you get rejection. Deploy slower, and you leave value on the table.

*Jeff Frazier — March 2, 2026. Mechanism identified March 3, 2026.*

---

### Principle 8: Every Domain Is Now Structurable

*Derivation: If AI can process unstructured qualitative inputs, the boundary between "quantifiable" and "too complex to analyze systematically" dissolves.*

There used to be quantitative problems (finance, manufacturing) and qualitative problems (strategy, relationships, politics). Quantitative problems got models. Qualitative problems got consultants and intuition.

AI dissolves this boundary — partially. It can take unstructured qualitative inputs — relationships, political dynamics, organizational culture, market sentiment — and systematically structure and score them, imposing analytical discipline on domains that previously relied on unstructured judgment.

**The distinction that matters:** AI can *structure* qualitative reasoning reliably. Whether it can *model* qualitative domains to decision-relevant precision depends on the domain's documentation density and the stability of its underlying patterns. Structured analysis with explicit assumptions and confidence bands is better than unstructured intuition — but it is not the same as quantitative modeling of well-understood physical or financial systems. The confidence intervals on qualitative models are wider. Acknowledge that width; don't hide it.

What this means:
1. "Too complex to analyze systematically" is no longer a valid reason to rely on pure intuition. Any domain where experts make repeated decisions can be structured, scored, and subjected to disciplined reasoning.
2. Qualitative expertise becomes more valuable — scoring engines are only as good as the domain inputs that feed them.
3. Strategic decisions become auditable. Visible methodology and explicit assumptions replace opaque judgment.
4. Cognitive limitations — recency bias, anchoring, confirmation bias — are structurally mitigated by models that consider all variables consistently.

*Jeff Frazier — March 3, 2026*

---

## Principles Summary

*One axiom. Seven derivations.*

| # | Principle | Core Insight |
|---|----------|-------------|
| 1 | **The Axiom** | The cost of reproducible cognitive labor is going to zero. Generation cost ≠ validation cost. |
| 2 | **AI Advantage Is Temporary** | Speed of continuous integration is the moat; operational data compounds the lead |
| 3 | **Software Is Going to Zero** | Value is in proprietary data, algorithms, content, regulatory status, and network effects — not code |
| 4 | **Domain Expertise Is the New Scarcity** | Domain experts > AI engineers; the analytical stack collapsed into the domain expert |
| 5 | **Captured Expertise** | A majority of expert consulting (est. 60–90%) is codifiable; match validation rigor to stakes |
| 6 | **Transaction Cost Collapse** | AI reduces both internal and market costs; integrate where data/compliance require it, disintegrate where markets are now more efficient |
| 7 | **Workflows Are Cognitive Architectures** | Workflows encode human constraints AI doesn't have; redesign for AI's agent profile, then transition at the rate proven performance allows |
| 8 | **Every Domain Is Structurable** | "Too complex to analyze systematically" is no longer valid; structured reasoning ≠ precision modeling |

---

*This is a living document. Principles will be added, refined, and pressure-tested as the AI transformation strategy evolves.*
