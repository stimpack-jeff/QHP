# AI Finance Transformation Workshop — Website Brief

> **Purpose:** This document contains everything Claude Code needs to build a workshop website for QHP Capital's AI Finance Transformation Workshop. It covers the concept, content, structure, exercises, downloadable files, intelligence framework, facilitator notes, and tested AI results. Build a polished, modern, single-page (or multi-page) website that a CFO audience would take seriously.

---

## 1. WORKSHOP IDENTITY

- **Title:** AI-First Finance Transformation Workshop
- **Hosted by:** QHP Capital
- **Target Audience:** CFOs and senior finance leaders at life sciences companies
- **Format:** 30-minute hands-on session, laptops required, banquet room setting
- **Tone:** Executive-level, evidence-based, not vendor-pitchy. Think "McKinsey meets hands-on lab."
- **Date context:** March 2026

---

## 2. THE CORE THESIS

AI doesn't assist your finance team — it replaces 60-70% of what they do today. Not someday. Now. In this workshop, you'll watch it happen live, then decide where the human line should be drawn.

The workshop uses a fictional clinical-stage pharmaceutical company (Nexus BioTherapeutics) with realistic simulated financial documents. Participants upload real documents into AI systems and watch them process entire workflows end-to-end — not just "find the problem," but extract, code, match, post, and report. The AI hands back only the judgment calls.

---

## 3. THE INTELLIGENCE FRAMEWORK (6 Types)

This is Jeff Frazier's proprietary framework. It should be prominently featured on the site — it's the intellectual backbone of the workshop.

### The 6 Intelligence Types

1. **Computational Intelligence** — Structured data processing at speed and scale. Math, extraction, transformation, matching. This is table stakes — every AI system does this.

2. **Predictive Intelligence** — Forecasting from historical patterns. Time-series analysis, trend projection, anomaly detection based on what came before.

3. **Reasoning Intelligence** — Pattern recognition, logical inference, diagnosis. Connecting information across multiple documents to derive a conclusion that isn't stated in any single source.

4. **Creative Intelligence** — Generating novel combinations and ideas. Drafting narratives, variance commentary, memos — content that didn't exist before.

5. **Judgment Intelligence** — Deciding between options within a defined frame. Judgment "operates on menus" — there are known options (approve / reject / escalate / dispute) and the decision has real consequences. AI can present the menu and recommend; the human decides.

6. **Wisdom Intelligence** — Questioning whether you're looking at the right frame entirely. Wisdom "questions the menu itself." Should we even be running this trial? Is our CRO relationship the right strategic choice? Is our expense policy well-designed? AI will never ask these questions.

### The Waterline Concept

Everything below Judgment (types 1-4) is automatable today. AI owns the work. The hard stop is at Judgment — where choosing between defined options with real consequences requires human accountability. Wisdom is permanently human territory.

**Visual suggestion:** A horizontal waterline diagram showing the 6 types stacked vertically, with a bold line between Creative and Judgment. Label above the line: "Human Territory." Label below: "AI Territory." The zone right around Judgment is the contested space — "AI + Human."

---

## 4. THE FICTIONAL COMPANY

All exercises use the same fictional company for coherence:

- **Company:** Nexus BioTherapeutics, Inc.
- **Ticker:** NXTB (NASDAQ)
- **HQ:** Cambridge, MA
- **Industry:** Clinical-stage biopharmaceutical
- **Revenue:** ~$384M (partnership/licensing revenue)
- **Key Trial:** LUMINANCE-1 (NXTB-301-001), Phase III, oncology
- **CRO:** PPD Clinical Research Services
- **Employees:** ~420
- **Key Executives:**
  - Marcus R. Whitfield — CFO
  - David G. Morrison — VP Finance / Controller
  - Cynthia Brooks — AP Manager
  - James Thornton — Treasury
  - Brendan Walsh — Receiving

---

## 5. WORKSHOP AGENDA & TIMING

| Time | Exercise | Duration | Format |
|------|----------|----------|--------|
| 0:00–0:01 | Setup & Introduction | 1 min | Facilitator explains the format |
| 0:01–0:13 | Exercise 1: Process the AP Batch | 12 min | Upload files → AI processes → Debrief |
| 0:13–0:23 | Exercise 2: Build the CRO Accrual | 10 min | Upload files → AI processes → Debrief |
| 0:23–0:30 | Exercise 3: Draw the Line | 7 min | Handout/interactive → Group discussion |

**Bonus (if time permits):** Expense Report Review (~5 min, between Ex 2 and Ex 3)

---

## 6. EXERCISE 1 — PROCESS THE AP BATCH

### Overview
- **Intelligence types demonstrated:** Computational → Reasoning → stops at Judgment
- **Duration:** 12 minutes (upload + AI processing + debrief)
- **Files:** 8 documents in `Exercise_1_AP_Batch/`

### Files (for download)

| Filename | Type | Description | Status |
|----------|------|-------------|--------|
| INV_GoodwinProcter_20240105.pdf | Invoice | Legal services — FDA regulatory counsel, $17,303 | Clean |
| INV_Eversource_20240203.pdf | Invoice | Utility bill — electricity/natural gas, $21,052.46 | Clean |
| INV_FedEx_20240108.pdf | Invoice | Shipping — 32 shipments, $7,726.40 | Clean |
| INV_ThermoFisher_20240315a.pdf | Invoice | Lab supplies — 4 line items, $5,506.50 (original, emailed Mar 16) | ANOMALY — Duplicate A |
| INV_ThermoFisher_20240315b.pdf | Invoice | Lab supplies — 4 line items, $5,506.50 (re-issued via portal Apr 3) | ANOMALY — Duplicate B |
| PO_VWR_20240408.pdf | Purchase Order | RNAse-Free Microtubes, 4 cases × $47.50 = $190.00 | ANOMALY — PO |
| INV_VWR_20240422.pdf | Invoice | RNAse-Free Microtubes, 4 cases × $53.25 = $213.00 | ANOMALY — Price mismatch |
| PKG_VWR_20240418.jpg | Packing Slip | Scanned receiving report — only 3 cases shipped | ANOMALY — Qty mismatch |

### Prompt for Participants

```
You are the AP department at Nexus BioTherapeutics, a clinical-stage pharmaceutical company. I'm uploading a batch of AP documents: vendor invoices, purchase orders, and receiving reports. Process the entire batch: (1) extract all key fields from every document into a single table, (2) match each invoice to its corresponding PO and receiving report where possible, (3) for each matched set, verify quantity and unit price agreement across all three documents, (4) assign GL account codes based on the vendor and line item descriptions, (5) generate the proposed AP journal entries ready for posting, (6) produce an exception report listing ONLY the items that require human review — with the specific reason each was flagged. Present a clean summary showing: X invoices processed, Y matched clean and ready to post, Z flagged for human review.
```

### Planted Anomalies

**Anomaly 1 — Duplicate Invoice (Computational):**
Both Thermo Fisher invoices total $5,506.50, same date (March 15, 2024), same PO-20847, same 4 line items, different invoice numbers (INV-101825 vs INV-101828). Invoice A was submitted via email; Invoice B was re-issued via vendor portal 18 days later. Duplicate payment exposure: $5,506.50.

**Anomaly 2 — Three-Way Match Failure (Reasoning):**
- PO: 4 cases × $47.50 = $190.00
- Invoice: 4 cases × $53.25 = $213.00 → price overcharge of $5.75/unit (+12.1%)
- Receiving Report: only 3 cases shipped → quantity short by 1
- Correct payable: 3 × $47.50 = $142.50
- Invoice claims: $213.00
- Total discrepancy: $70.50 (33% overbilling)

### What AI Should Produce
1. Data extraction table for all 8 documents
2. Match results: 3 clean standalone invoices (Goodwin Procter, Eversource, FedEx), 1 duplicate flag (Thermo Fisher), 1 three-way match failure (VWR)
3. GL account assignments
4. Journal entries for the 3 clean invoices (total: $46,081.86)
5. Exception report with 2-3 flags (held total: $5,719.50)

### Tested Results (What Actually Happened)

**Claude 4.6:** Most thorough. 3 clean, 3 flagged. Caught both anomalies PLUS flagged Thermo Fisher A for missing PO/receiving docs. Produced a 6-tab Excel workbook (Summary, Document Register, Three-Way Match, GL Assignments, Journal Entries, Exception Report). Clean total: $46,081.86. Held total: $5,719.50. Debits and credits balanced.

**Gemini:** 4 clean, 2 flagged. Caught both planted anomalies. Generated journal entries for clean invoices. Slightly less granular than Claude (didn't flag the missing PO for Thermo Fisher A) but delivered a complete workflow.

**ChatGPT:** Similar to Gemini — caught both anomalies, produced usable journal entries and exception report.

### Facilitator Talking Points
- "How long would this batch take your AP team manually?"
- "Notice: AI didn't just find problems — it processed the clean invoices too. It generated journal entries. It coded to the GL. The human only reviews 2-3 exceptions out of 8 documents. That's the transformation."
- "What intelligence types did that require? Computational for extraction and matching. Reasoning for the three-way match. Where did AI stop? At the decision: approve, dispute, or escalate. That's Judgment."

---

## 7. EXERCISE 2 — BUILD THE CRO ACCRUAL

### Overview
- **Intelligence types demonstrated:** Computational → Predictive → Reasoning → stops at Judgment
- **Duration:** 10 minutes
- **Files:** 7 documents in `Exercise_2_CRO_Accrual/`

### Files (for download)

| Filename | Type | Description |
|----------|------|-------------|
| Nexus_Company_Profile.pdf | Reference | Company background, trial details, executive team |
| CRO_NXTB301_2024_March.pdf | CRO Invoice | Clean month — ~$1.8M |
| CRO_NXTB301_2024_April.pdf | CRO Invoice | Clean month |
| CRO_NXTB301_2024_May.pdf | CRO Invoice | Clean month |
| CRO_NXTB301_2024_June.pdf | CRO Invoice | Clean month |
| CRO_NXTB301_2024_July.pdf | CRO Invoice | Clean month |
| CRO_NXTB301_2024_August.pdf | CRO Invoice | ANOMALY MONTH — $2,253,080 (22.5% over budget) |

### Prompt for Participants

```
You are the Controller at Nexus BioTherapeutics. I'm uploading six consecutive monthly CRO invoices for our Phase III clinical trial NXTB-301-001 (LUMINANCE-1), plus the company profile for context. The monthly CRO budget for this trial is $1,840,000. Process these invoices and produce the deliverables a Controller would normally prepare: (1) a budget-vs-actual table by cost category for each month, (2) a trend analysis showing month-over-month changes in each billing category, (3) the accrual journal entry you would recommend for September based on the pattern, (4) a variance memo explaining any month where total billing exceeded budget by more than 10%, and (5) an exception list of items requiring CFO review before the accrual is posted. Do not approve the accrual — that is the CFO's decision.
```

### Planted Anomaly (August Invoice)

The August 2024 CRO invoice (CRO-101537 from PPD) totals $2,253,080 vs the $1,840,000 monthly budget:

| Category | Budget | August Actual | Variance | % Over |
|----------|--------|---------------|----------|--------|
| Pass-Through Costs (Site Payments) | $644,000 | $933,800 | +$289,800 | +45% |
| Clinical Management Fees (Retainer) | $736,000 | $736,000 | $0 | 0% |
| Data Management & Biostatistics | $276,000 | $414,000 | +$138,000 | +50% |
| Safety Monitoring / DSMB Support | $184,000 | $169,280 | -$14,720 | -8% |
| **TOTAL** | **$1,840,000** | **$2,253,080** | **+$413,080** | **+22.5%** |

The invoice references "Protocol Amendment 3.1" (7 new site activations) with NO supporting documentation or budget amendment on file. Data management spike attributed to "database lock activities + Q2 catch-up billing."

### What AI Should Produce
1. Six-month budget-vs-actual table
2. Trend analysis showing stable March-July then August spike
3. September accrual journal entry (key question: does AI use the spike or normalize?)
4. Variance memo flagging August
5. Exception list including: Protocol Amendment 3.1 authorization, pass-through cost spike, data management catch-up billing

### Tested Results

**Claude 4.6:** 5-tab Excel workbook. All four cost categories correctly extracted (including Safety/DSMB that Gemini missed). September accrual: $2,081,000 — assumed site activations carry forward (structural change). 5 exception items including cumulative contract overrun flag. Addressed variance memo to Marcus Whitfield from David Morrison (correct executive names from company profile).

**ChatGPT:** 4-tab Excel + separate DOCX memo. September accrual: $1,719,298 — deliberately excluded August spike, averaged June-July for pass-throughs. Rationale: don't extrapolate exception items until amendment confirmed. Also caught negative "Remaining Balance" on invoices suggesting contract ceiling breach. 6 exception items.

**Gemini:** Text-based output. Caught August anomaly and Protocol Amendment 3.1. Admitted truncated scans prevented full extraction. Estimated several data management figures. Missed the fourth cost category (Safety/DSMB). September accrual: $1,886,000.

### Key Teaching Moment
Two AI systems produced defensibly different September accruals ($2.08M vs $1.72M) based on different assumptions about whether August is structural or one-time. Neither is wrong. That's exactly the Judgment call the CFO must make. AI did 95% of the Controller's month-end work in under a minute. The decision that actually matters — "which number do we book?" — still requires a human.

### Facilitator Talking Points
- "That budget-vs-actual table and September accrual — how many days does your Controller spend producing that deliverable each month?"
- "AI used Computational intelligence for extraction, Predictive for the accrual estimate, and Reasoning for the variance analysis. Where did it stop? At: should we approve the August invoice? Should we approve the September accrual given the anomaly? Those are Judgment calls."
- "The deeper question — 'Should we even be running this trial?' — is Wisdom. AI will never ask that question."

---

## 8. EXERCISE 3 — DRAW THE LINE

### Overview
- **Format:** No AI prompting. Printed handout or projected on screen.
- **Duration:** 7 minutes (3 min individual, 4 min group discussion)
- **Purpose:** Participants apply the intelligence framework to 10 finance tasks and decide where the human line should be.

### The Handout Content

Participants mark each task into one of four columns:

- **FULL AI** = AI does it end-to-end, no human touch
- **AI + HUMAN** = AI does the work, human reviews/approves
- **HUMAN + AI** = Human leads, AI supports with data/drafts
- **HUMAN ONLY** = AI has no meaningful role

| # | Task | Answer | Intelligence Type | Rationale |
|---|------|--------|-------------------|-----------|
| 1 | Extract data from 200 invoices | FULL AI | Computational | Pure data extraction at scale |
| 2 | Match invoices to POs and flag exceptions | FULL AI | Computational + Reasoning | Cross-referencing structured data |
| 3 | Generate journal entries for clean matches | FULL AI | Computational | Rules-based entry generation |
| 4 | Approve payment on a flagged duplicate | AI + HUMAN | Reasoning → Judgment | AI flags it. Human decides: void / contact vendor / escalate. Choosing from a menu. |
| 5 | Write month-end variance commentary | AI + HUMAN | Reasoning + Creative | AI drafts the narrative. Human edits for voice, emphasis, strategic framing. |
| 6 | Decide whether to continue funding a clinical trial that's over budget | HUMAN + AI | Wisdom | AI surfaces the data. The decision requires questioning whether the trial's strategic frame is still correct. No predefined menu captures this. |
| 7 | Produce the 13-week cash flow forecast | FULL AI | Predictive + Reasoning | Pattern-based forecasting within a defined model |
| 8 | Decide whether your CRO relationship is still the right strategic choice | HUMAN ONLY | Wisdom | Pure Wisdom. Questioning the entire frame. AI has no basis for this assessment. |
| 9 | Detect a personal charge buried in an expense report | FULL AI | Reasoning | Policy application across structured line items. AI catches it faster and more consistently than humans. |
| 10 | Decide whether to enforce your expense policy on a top-performing sales rep | HUMAN + AI | Judgment → Wisdom | AI identifies the violation. Enforcement is a human call. The deeper question — "Is our policy even written clearly enough?" — is Wisdom. |

### Key Discussion Moments
- Items 1-3 are consistently rated "Full AI" — most people get these right
- Item 5 surprises people — AI drafts variance commentary well (they just saw it in Exercise 2)
- Item 6 vs Item 8: both are "human" territory, but for different reasons. #6 is Judgment (choosing from defined options about the trial). #8 is Wisdom (questioning the entire CRO frame).
- Item 9 vs Item 10: AI catches the violation (Full AI). But enforcement is a human call (Judgment → Wisdom).

### Closing Line
"Everything you marked 'Full AI' or 'AI + Human' — that's 60-70% of what your finance team does today. The question isn't whether AI can do it. You just watched it happen. The question is: what do you want your team doing instead?"

---

## 9. BONUS EXERCISE — EXPENSE REPORT REVIEW

### Overview
- **Intelligence types:** Reasoning → stops at Judgment
- **Duration:** ~5 minutes (use if running ahead of schedule)
- **Files:** 1 document in `Exercise_BONUS_Expense_Review/`

### File
- `EXPRPT_Vega_NYC_Oct2024.pdf` — Employee expense report

### Prompt for Participants

```
You are reviewing expense reports for Nexus BioTherapeutics. I'm uploading an expense report submitted by a sales employee for a New York client visit. Nexus policy states: (a) only business-purpose expenses are reimbursable, (b) personal care items and prescriptions are never reimbursable, (c) expenses must be incurred during the approved travel period. Review every line item and: (1) flag any line that may violate policy, stating which policy it violates and why, (2) identify any supporting signals that strengthen or weaken the flag, (3) calculate the reimbursable total if the flagged items are excluded, and (4) list the options available to the approving manager — but do not make the approval decision. Present as a structured memo.
```

### Planted Anomaly
- **Employee:** Carlos Vega (E042), Sales
- **Trip:** NYC client visit, October 3-4, 2024
- **Flagged item:** Line 5 — CVS Pharmacy, $127.40, "prescription refill + personal care items"
- **Three overlapping signals:**
  1. Personal description (prescriptions + personal care = never reimbursable per policy)
  2. Weekend date (Saturday October 5 — one day AFTER the trip ended October 3-4)
  3. Non-business vendor (CVS Pharmacy for a sales trip)

### Teaching Point
Reasoning catches it. Judgment decides what to do. But the deeper question for the room: "Is your expense policy written clearly enough that this couldn't happen?" That's Wisdom.

---

## 10. DOWNLOADABLE FILE INVENTORY

The website should host exercise files as downloadable ZIP bundles (one per exercise) plus an option to download everything at once.

### Exercise 1 — AP Batch (8 files, ~70KB total)
```
Exercise_1_AP_Batch/
  INV_GoodwinProcter_20240105.pdf
  INV_Eversource_20240203.pdf
  INV_FedEx_20240108.pdf
  INV_ThermoFisher_20240315a.pdf
  INV_ThermoFisher_20240315b.pdf
  PO_VWR_20240408.pdf
  INV_VWR_20240422.pdf
  PKG_VWR_20240418.jpg
```

### Exercise 2 — CRO Accrual (7 files, ~25KB total)
```
Exercise_2_CRO_Accrual/
  Nexus_Company_Profile.pdf
  CRO_NXTB301_2024_March.pdf
  CRO_NXTB301_2024_April.pdf
  CRO_NXTB301_2024_May.pdf
  CRO_NXTB301_2024_June.pdf
  CRO_NXTB301_2024_July.pdf
  CRO_NXTB301_2024_August.pdf
```

### Exercise 3 — Draw the Line (1 file)
```
Exercise_3_Draw_The_Line/
  Draw_The_Line_Handout.txt   (or render as interactive on the website)
```

### Bonus — Expense Review (1 file, ~3KB)
```
Exercise_BONUS_Expense_Review/
  EXPRPT_Vega_NYC_Oct2024.pdf
```

### Full Library (optional download)
The complete Nexus BioTherapeutics Finance Demo Library (853 documents, ~13MB, 10 category folders) can optionally be offered as a full download for participants who want to explore further after the workshop.

---

## 11. WEBSITE STRUCTURE RECOMMENDATION

### Option A: Single-Page Scroll
One long page with anchor navigation. Best for simplicity and mobile.

### Option B: Multi-Page
Separate pages for each section. Better for deep-linking.

### Suggested Sections (either option)

1. **Hero / Landing** — Workshop title, QHP Capital branding, the one-line thesis: "AI doesn't assist your finance team — it replaces 60-70% of what they do. In 30 minutes, you'll watch it happen."

2. **The Intelligence Framework** — The 6 types with descriptions. The waterline visual. This is the intellectual core of the whole workshop.

3. **The Setup** — Brief intro to Nexus BioTherapeutics (the fictional company). What participants need: laptop, browser, AI access (Claude/ChatGPT/Gemini).

4. **Exercise 1: Process the AP Batch** — Description, the prompt (copyable), download button for the ZIP. After running it: what to look for (the duplicate, the three-way match failure). Intelligence types used.

5. **Exercise 2: Build the CRO Accrual** — Description, the prompt (copyable), download button. What to look for (the August spike, Protocol Amendment 3.1, different accrual approaches). Intelligence types used.

6. **Exercise 3: Draw the Line** — The interactive handout (ideally rendered as a clickable/checkable grid on the website, with reveal-answer functionality). The closing question.

7. **Bonus: Expense Report** — Description, prompt, download. The triple-signal anomaly.

8. **Key Takeaways** — The waterline in action. What you just watched happen. The closing line.

9. **Downloads** — All exercise bundles in one place. Individual ZIPs plus full-library option.

10. **About / Contact** — QHP Capital info, Jeff Frazier contact.

### Design Notes
- Clean, minimal, professional. Think: dark navy + white + accent gold or teal.
- No stock photos. Use clean typography and the intelligence framework diagram as the visual anchor.
- Prompts should be in monospace code blocks with a "Copy" button.
- Download buttons should be prominent.
- The Draw the Line exercise should ideally be interactive — checkboxes that reveal the answer key with intelligence type labels when you click "Show Answers."
- Mobile-responsive is important — CFOs will pull this up on iPads in the room.

---

## 12. TECHNICAL NOTES FOR CLAUDE CODE

- All exercise source files are located at:
  `~/Documents/Projects/finance-ai-demo-library/deliverables/NexusBioTherapeutics_FinanceDemoLibrary/00_WORKSHOP_EXERCISES/`
- The AI-First Finance Blueprint .docx is at:
  `~/Documents/Projects/finance-ai-demo-library/research/AI_First_Finance_Blueprint.docx`
- The facilitator guide with all answer keys is at:
  `~/Documents/Projects/finance-ai-demo-library/deliverables/NexusBioTherapeutics_FinanceDemoLibrary/00_WORKSHOP_EXERCISES/00_FACILITATOR_GUIDE.txt`
- This brief is at:
  `~/Documents/Projects/finance-ai-demo-library/research/WORKSHOP_WEBSITE_BRIEF.md`
- The website project itself should go in `~/Development/` per Jeff's file organization rules (it's a codebase, not a deliverable).
- The site can be static HTML/CSS/JS, or React/Next.js — whatever Claude Code recommends for the use case.
- Exercise files need to be bundled as downloadable ZIPs. Claude Code should create these as part of the build process.

---

## 13. CONTENT THAT SHOULD NOT APPEAR ON THE WEBSITE

The following are facilitator-only materials and should NOT be on the public-facing site:

- The answer key for Exercise 3 (reveal it interactively, but don't show it by default)
- Detailed anomaly descriptions (participants shouldn't know what to look for in advance)
- The specific dollar amounts of the planted anomalies
- The facilitator guide itself
- File-level annotations (e.g., "ANOMALY — Duplicate A") — the download files use neutral names intentionally

Consider a password-protected `/facilitator` route that shows the full answer keys and talking points for the person running the workshop.

---

*End of brief. This document contains everything needed to build the workshop website.*
