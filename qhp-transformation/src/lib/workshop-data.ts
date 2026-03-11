export type IntelligenceBand = "ai" | "contested" | "human";

export type IntelligenceType = {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  examples: string[];
  band: IntelligenceBand;
};

export type AgendaItem = {
  time: string;
  title: string;
  duration: string;
  format: string;
};

export type Exercise = {
  id: string;
  title: string;
  duration: string;
  intelligence: string;
  description: string;
  files: string;
  objective: string;
  prompt: string;
  deliverables: string[];
  watchFor: string[];
  downloadHref: string;
  downloadLabel: string;
  downloadSize: string;
};

export type DownloadBundle = {
  title: string;
  description: string;
  href: string;
  size: string;
  fileCount: string;
};

export type DrawLineTask = {
  id: number;
  task: string;
  answer: "FULL AI" | "AI + HUMAN" | "HUMAN + AI" | "HUMAN ONLY";
  intelligenceType: string;
  rationale: string;
};

export const workshopStats = [
  {
    label: "Format",
    value: "Workshop",
    detail: "Hands-on demonstration using participant prompts and source files.",
  },
  {
    label: "Duration",
    value: "30 min",
    detail: "Three exercises run in sequence with laptops open.",
  },
  {
    label: "Audience",
    value: "CFOs",
    detail: "Prepared for senior finance leaders in life sciences settings.",
  },
  {
    label: "Decision focus",
    value: "Judgment",
    detail: "The exercises are designed to show where processing ends and human review begins.",
  },
];

export const intelligenceTypes: IntelligenceType[] = [
  {
    id: "computational",
    name: "Computational Intelligence",
    shortLabel: "1",
    description: "Structured data processing at speed and scale: extraction, transformation, matching, coding, and math.",
    examples: ["invoice extraction", "journal entry generation", "batch reconciliation"],
    band: "ai",
  },
  {
    id: "predictive",
    name: "Predictive Intelligence",
    shortLabel: "2",
    description: "Forecasting from historical patterns: trend projection, accrual estimation, anomaly detection, and pattern continuation.",
    examples: ["cash forecasting", "accrual estimates", "variance pattern detection"],
    band: "ai",
  },
  {
    id: "reasoning",
    name: "Reasoning Intelligence",
    shortLabel: "3",
    description: "Connecting information across documents to infer what is true when no single file states the answer directly.",
    examples: ["three-way matching", "policy analysis", "cross-document diagnosis"],
    band: "ai",
  },
  {
    id: "creative",
    name: "Creative Intelligence",
    shortLabel: "4",
    description: "Drafting new narrative outputs: variance commentary, memos, controller notes, and executive-ready summaries.",
    examples: ["variance commentary", "controller memos", "finance narratives"],
    band: "ai",
  },
  {
    id: "judgment",
    name: "Judgment Intelligence",
    shortLabel: "5",
    description: "Choosing between known options with real consequences. AI can frame the menu; a human owns the decision.",
    examples: ["approve or dispute", "book or hold", "escalate or resolve"],
    band: "contested",
  },
  {
    id: "wisdom",
    name: "Wisdom Intelligence",
    shortLabel: "6",
    description: "Questioning the frame itself. Should this trial continue? Is this CRO relationship still right? AI will not originate that question.",
    examples: ["portfolio choices", "trial strategy", "policy redesign"],
    band: "human",
  },
];

export const agenda: AgendaItem[] = [
  { time: "0:00-0:01", title: "Setup & introduction", duration: "1 min", format: "Facilitator framing and laptop check" },
  { time: "0:01-0:13", title: "Exercise 1: Process the AP batch", duration: "12 min", format: "Upload documents, run AI, debrief" },
  { time: "0:13-0:23", title: "Exercise 2: Build the CRO accrual", duration: "10 min", format: "Upload documents, run AI, compare outputs" },
  { time: "0:23-0:30", title: "Exercise 3: Draw the line", duration: "7 min", format: "Interactive reflection and group discussion" },
];

export const setupChecklist = [
  "Laptop with Claude, ChatGPT, or Gemini available in a browser",
  "Download the exercise bundle before the session starts",
  "Expect real finance workflows, not toy prompts or single-document demos",
  "Use the exercises to discuss which tasks can be automated and which still require human review",
];

export const companyFacts = [
  { label: "Company", value: "Nexus BioTherapeutics, Inc." },
  { label: "Ticker", value: "NXTB (NASDAQ)" },
  { label: "Headquarters", value: "Cambridge, MA" },
  { label: "Revenue", value: "~$384M partnership and licensing revenue" },
  { label: "Primary trial", value: "LUMINANCE-1 (NXTB-301-001), Phase III oncology" },
  { label: "CRO", value: "PPD Clinical Research Services" },
  { label: "Employees", value: "~420" },
];

export const executives = [
  "Marcus R. Whitfield — CFO",
  "David G. Morrison — VP Finance / Controller",
  "Cynthia Brooks — AP Manager",
  "James Thornton — Treasury",
  "Brendan Walsh — Receiving",
];

export const exercises: Exercise[] = [
  {
    id: "exercise-1",
    title: "Exercise 1: Process the AP Batch",
    duration: "12 minutes",
    intelligence: "Computational -> Reasoning -> Judgment handoff",
    description: "Participants upload an AP packet and review how the model extracts, matches, codes, and separates routine items from exceptions.",
    files: "8 documents",
    objective: "Demonstrate end-to-end batch processing and isolate the items that still require human review.",
    prompt: `You are the AP department at Nexus BioTherapeutics, a clinical-stage pharmaceutical company. I'm uploading a batch of AP documents: vendor invoices, purchase orders, and receiving reports. Process the entire batch: (1) extract all key fields from every document into a single table, (2) match each invoice to its corresponding PO and receiving report where possible, (3) for each matched set, verify quantity and unit price agreement across all three documents, (4) assign GL account codes based on the vendor and line item descriptions, (5) generate the proposed AP journal entries ready for posting, (6) produce an exception report listing ONLY the items that require human review — with the specific reason each was flagged. Present a clean summary showing: X invoices processed, Y matched clean and ready to post, Z flagged for human review.`,
    deliverables: [
      "A single extraction table covering the full document set",
      "Match status across invoices, POs, and receiving evidence",
      "GL coding recommendations and proposed journal entries",
      "A tight exception report that isolates only the items needing a human",
    ],
    watchFor: [
      "How much of the batch flows straight through without manual touch",
      "Whether the model can explain why an item belongs in the exception queue",
      "How quickly the conversation shifts from processing work to approving decisions",
    ],
    downloadHref: "/workshop-downloads/exercise-1-ap-batch.zip",
    downloadLabel: "Download AP batch",
    downloadSize: "59 KB",
  },
  {
    id: "exercise-2",
    title: "Exercise 2: Build the CRO Accrual",
    duration: "10 minutes",
    intelligence: "Computational -> Predictive -> Reasoning -> Judgment handoff",
    description: "Participants upload six monthly CRO invoices plus company context and review the controller package the model produces: trend analysis, accrual recommendation, variance memo, and exception list.",
    files: "7 documents",
    objective: "Demonstrate the month-end analysis package and focus the discussion on which decision should remain with the CFO.",
    prompt: `You are the Controller at Nexus BioTherapeutics. I'm uploading six consecutive monthly CRO invoices for our Phase III clinical trial NXTB-301-001 (LUMINANCE-1), plus the company profile for context. The monthly CRO budget for this trial is $1,840,000. Process these invoices and produce the deliverables a Controller would normally prepare: (1) a budget-vs-actual table by cost category for each month, (2) a trend analysis showing month-over-month changes in each billing category, (3) the accrual journal entry you would recommend for September based on the pattern, (4) a variance memo explaining any month where total billing exceeded budget by more than 10%, and (5) an exception list of items requiring CFO review before the accrual is posted. Do not approve the accrual — that is the CFO's decision.`,
    deliverables: [
      "A six-month budget-versus-actual table by cost category",
      "Trend analysis across the monthly billing pattern",
      "A September accrual recommendation with explicit assumptions",
      "Variance commentary and a CFO exception list before posting",
    ],
    watchFor: [
      "Whether different models make different but defensible accrual recommendations",
      "How clearly the model separates operational work from CFO approval",
      "How much controller work gets compressed into one prompt-response cycle",
    ],
    downloadHref: "/workshop-downloads/exercise-2-cro-accrual.zip",
    downloadLabel: "Download CRO accrual pack",
    downloadSize: "20 KB",
  },
  {
    id: "exercise-3",
    title: "Exercise 3: Draw the Line",
    duration: "7 minutes",
    intelligence: "Framework application across all 6 intelligence types",
    description: "Participants map ten finance tasks to the right operating model: Full AI, AI + Human, Human + AI, or Human Only.",
    files: "Interactive grid + handout",
    objective: "Force the room to decide what stays with humans, what moves fully to AI, and where approval or strategic reframing is still required.",
    prompt: `You have just watched AI process an AP batch and build a CRO accrual schedule. For each finance task below, decide where it belongs: FULL AI, AI + HUMAN, HUMAN + AI, or HUMAN ONLY. Then compare your answers to the framework and discuss where the human line should actually be drawn inside your organization.`,
    deliverables: [
      "A completed operating-model map across ten finance tasks",
      "Discussion around Judgment versus Wisdom",
      "A closing decision about what the finance team should do with time AI gives back",
    ],
    watchFor: [
      "Which tasks the room still resists giving fully to AI",
      "Where people confuse Judgment with Wisdom",
      "How quickly the framework shifts the conversation from tools to operating model design",
    ],
    downloadHref: "/workshop-downloads/exercise-3-draw-the-line.zip",
    downloadLabel: "Download handout",
    downloadSize: "2.3 KB",
  },
];

export const bonusExercise: Exercise = {
  id: "bonus",
  title: "Bonus: Expense Report Review",
  duration: "~5 minutes",
  intelligence: "Reasoning -> Judgment handoff",
  description: "Use this if the room is moving fast. A single expense report creates a focused policy-versus-approval discussion.",
  files: "1 document",
  objective: "Use a simple policy review example to separate detection from approval and policy interpretation.",
  prompt: `You are reviewing expense reports for Nexus BioTherapeutics. I'm uploading an expense report submitted by a sales employee for a New York client visit. Nexus policy states: (a) only business-purpose expenses are reimbursable, (b) personal care items and prescriptions are never reimbursable, (c) expenses must be incurred during the approved travel period. Review every line item and: (1) flag any line that may violate policy, stating which policy it violates and why, (2) identify any supporting signals that strengthen or weaken the flag, (3) calculate the reimbursable total if the flagged items are excluded, and (4) list the options available to the approving manager — but do not make the approval decision. Present as a structured memo.`,
  deliverables: [
    "Line-by-line policy review",
    "A structured memo with reimbursable total and flagged items",
    "A menu of manager actions without automated approval",
  ],
  watchFor: [
    "How fast AI spots policy inconsistencies",
    "Whether the model distinguishes evidence from final approval",
    "How naturally the discussion escalates into policy design and fairness",
  ],
  downloadHref: "/workshop-downloads/bonus-expense-review.zip",
  downloadLabel: "Download bonus exercise",
  downloadSize: "3.2 KB",
};

export const drawLineTasks: DrawLineTask[] = [
  {
    id: 1,
    task: "Extract data from 200 invoices",
    answer: "FULL AI",
    intelligenceType: "Computational",
    rationale: "Pure data extraction at scale belongs below the judgment line.",
  },
  {
    id: 2,
    task: "Match invoices to POs and flag exceptions",
    answer: "FULL AI",
    intelligenceType: "Computational + Reasoning",
    rationale: "Cross-referencing structured documents is now routine machine work.",
  },
  {
    id: 3,
    task: "Generate journal entries for clean matches",
    answer: "FULL AI",
    intelligenceType: "Computational",
    rationale: "If the rules are clear and the match is clean, entry generation is automatable.",
  },
  {
    id: 4,
    task: "Approve payment on a flagged duplicate",
    answer: "AI + HUMAN",
    intelligenceType: "Reasoning -> Judgment",
    rationale: "AI can identify the issue and frame the options; a human still owns the consequence-bearing choice.",
  },
  {
    id: 5,
    task: "Write month-end variance commentary",
    answer: "AI + HUMAN",
    intelligenceType: "Reasoning + Creative",
    rationale: "AI drafts the memo quickly, but finance leadership still shapes tone, emphasis, and executive framing.",
  },
  {
    id: 6,
    task: "Decide whether to continue funding a clinical trial that is over budget",
    answer: "HUMAN + AI",
    intelligenceType: "Wisdom",
    rationale: "The model can surface evidence, but the actual decision questions the strategic frame itself.",
  },
  {
    id: 7,
    task: "Produce the 13-week cash flow forecast",
    answer: "FULL AI",
    intelligenceType: "Predictive + Reasoning",
    rationale: "Pattern-based forecasting inside a defined operating model is now largely machine work.",
  },
  {
    id: 8,
    task: "Decide whether your CRO relationship is still the right strategic choice",
    answer: "HUMAN ONLY",
    intelligenceType: "Wisdom",
    rationale: "This is a reframing question, not a menu-selection problem.",
  },
  {
    id: 9,
    task: "Detect a personal charge buried in an expense report",
    answer: "FULL AI",
    intelligenceType: "Reasoning",
    rationale: "Policy application across line items and dates is reliable machine work.",
  },
  {
    id: 10,
    task: "Decide whether to enforce your expense policy on a top-performing sales rep",
    answer: "HUMAN + AI",
    intelligenceType: "Judgment -> Wisdom",
    rationale: "AI can identify the violation, but the enforcement decision and the policy implications stay human.",
  },
];

export const optionLabels = ["FULL AI", "AI + HUMAN", "HUMAN + AI", "HUMAN ONLY"] as const;

export const testingNotes = [
  {
    title: "Claude generated the most structured controller package in testing",
    detail: "In testing, Claude tended to produce the most complete workbook-style output and exception framing.",
  },
  {
    title: "ChatGPT generated alternative accrual recommendations",
    detail: "The useful comparison point is that different models can reach different, supportable recommendations near the judgment boundary.",
  },
  {
    title: "Gemini produced shorter but usable outputs",
    detail: "It still surfaced the main exceptions, which is enough for participants to compare output quality across models.",
  },
];

export const downloadBundles: DownloadBundle[] = [
  {
    title: "Exercise 1: AP Batch",
    description: "Eight documents for the AP processing exercise.",
    href: "/workshop-downloads/exercise-1-ap-batch.zip",
    size: "59 KB",
    fileCount: "8 files",
  },
  {
    title: "Exercise 2: CRO Accrual",
    description: "Monthly CRO invoices plus company context for the accrual build.",
    href: "/workshop-downloads/exercise-2-cro-accrual.zip",
    size: "20 KB",
    fileCount: "7 files",
  },
  {
    title: "Exercise 3: Draw the Line",
    description: "Participant handout for the interactive closing discussion.",
    href: "/workshop-downloads/exercise-3-draw-the-line.zip",
    size: "2.3 KB",
    fileCount: "1 file",
  },
  {
    title: "Bonus: Expense Review",
    description: "Optional add-on for rooms that move faster than schedule.",
    href: "/workshop-downloads/bonus-expense-review.zip",
    size: "3.2 KB",
    fileCount: "1 file",
  },
  {
    title: "All Workshop Materials",
    description: "Single bundle with every participant-facing exercise pack for the session.",
    href: "/workshop-downloads/all-workshop-materials.zip",
    size: "84 KB",
    fileCount: "17 files",
  },
];

export const closingTakeaways = [
  "Many structured finance tasks can now be handled by models with human review at defined checkpoints.",
  "The management question in this workshop is where human accountability should begin in each workflow.",
  "Each task classified as Full AI or AI + Human changes how the team allocates time across review, analysis, and decision-making.",
];