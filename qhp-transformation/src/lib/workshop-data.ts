export type IntelligenceBand = "strong-fit" | "contextual" | "broad-context";

export type IntelligenceType = {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  examples: string[];
  band: IntelligenceBand;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
};

export type Exercise = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  duration: string;
  intelligence: string;
  description: string;
  objective: string;
  files: string;
  fileCount: string;
  sourceFiles: string[];
  prompt: string;
  deliverables: string[];
  watchFor: string[];
  downloadHref: string;
  downloadLabel: string;
  downloadSize: string;
  quizIntro: string;
  quizQuestions: QuizQuestion[];
};

export type DownloadBundle = {
  title: string;
  description: string;
  href: string;
  size: string;
  fileCount: string;
};

export const intelligenceTypes: IntelligenceType[] = [
  {
    id: "computational",
    name: "Computational Intelligence",
    shortLabel: "1",
    description: "Structured data processing at speed and scale: extraction, transformation, matching, coding, and math.",
    examples: ["invoice extraction", "reconciliation", "task parsing"],
    band: "strong-fit",
  },
  {
    id: "predictive",
    name: "Predictive Intelligence",
    shortLabel: "2",
    description: "Forecasting from historical patterns: trend projection, capacity pressure, anomaly detection, and likely next outcomes.",
    examples: ["enrollment slippage", "supply risk", "cash forecasting"],
    band: "strong-fit",
  },
  {
    id: "reasoning",
    name: "Reasoning Intelligence",
    shortLabel: "3",
    description: "Connecting information across documents to infer what is true when no single file states the answer directly.",
    examples: ["cross-document diagnosis", "policy analysis", "root-cause reconstruction"],
    band: "strong-fit",
  },
  {
    id: "creative",
    name: "Creative Intelligence",
    shortLabel: "4",
    description: "Drafting new outputs that make work usable: memos, action plans, escalation notes, and executive-ready summaries.",
    examples: ["CAPA drafts", "risk summaries", "impact memos"],
    band: "strong-fit",
  },
  {
    id: "judgment",
    name: "Judgment Intelligence",
    shortLabel: "5",
    description: "Choosing between known options with real consequences. AI can surface options, rank tradeoffs, and recommend a path; humans usually retain accountability when stakes spill into people, capital, or regulatory exposure.",
    examples: ["approve or hold", "escalate or contain", "prioritize or defer"],
    band: "contextual",
  },
  {
    id: "wisdom",
    name: "Wisdom Intelligence",
    shortLabel: "6",
    description: "Questioning the frame itself. AI can propose reframes and alternative lenses, but this is the most context-sensitive layer because broad consequences, lived context, and institutional accountability matter most here.",
    examples: ["strategy resets", "organizational redesign", "policy reframing"],
    band: "broad-context",
  },
];

export const workshopExercises: Exercise[] = [
  {
    id: "exercise-01-ap-batch",
    title: "Exercise 1: Process the AP Batch",
    shortTitle: "AP Batch",
    category: "Finance",
    duration: "12 minutes",
    intelligence: "Computational -> Reasoning -> Judgment",
    description: "Participants upload a realistic AP packet and review how the model extracts, matches, codes, and isolates only the true exceptions.",
    objective: "Demonstrate end-to-end batch processing and show how AI compresses routine AP work into a human exception queue.",
    files: "8 source documents",
    fileCount: "8 files",
    sourceFiles: ["INV_Eversource_20240203.pdf", "INV_FedEx_20240108.pdf", "INV_GoodwinProcter_20240105.pdf", "INV_ThermoFisher_20240315a.pdf", "INV_ThermoFisher_20240315b.pdf", "INV_VWR_20240422.pdf", "PKG_VWR_20240418.jpg", "PO_VWR_20240408.pdf"],
    prompt: `You are the AP department at Nexus BioTherapeutics, a clinical-stage pharmaceutical company. I'm uploading a batch of AP documents: vendor invoices, purchase orders, and receiving reports. Process the entire batch: (1) extract all key fields from every document into a single table, (2) match each invoice to its corresponding PO and receiving report where possible, (3) for each matched set, verify quantity and unit price agreement across all three documents, (4) assign GL account codes based on the vendor and line item descriptions, and (5) produce an exception report listing only the items that require human review with the reason each was flagged.`,
    deliverables: ["One extraction table across the full packet", "Match status by invoice, PO, and receiving evidence", "GL coding recommendations and draft entries", "Exception-only queue for human review"],
    watchFor: ["How quickly duplicate or unsupported items separate from clean flow-through work", "Whether the model explains why an item belongs in the exception queue", "How much AP labor disappears before a manager touches the packet"],
    downloadHref: "/workshop-downloads/exercise-01-ap-batch.zip",
    downloadLabel: "Download AP batch",
    downloadSize: "58 KB",
    quizIntro: "Use this quiz after the demo to check whether you understood the workflow, the role of the source files, and what work AI handled versus what still belongs with a human.",
    quizQuestions: [
      { id: "q1", question: "Which pair of files is most likely intended to test duplicate-invoice detection?", options: ["INV_Eversource_20240203.pdf and INV_FedEx_20240108.pdf", "INV_ThermoFisher_20240315a.pdf and INV_ThermoFisher_20240315b.pdf", "INV_GoodwinProcter_20240105.pdf and PO_VWR_20240408.pdf", "INV_VWR_20240422.pdf and PKG_VWR_20240418.jpg"], correctOption: 1, explanation: "The Thermo Fisher documents intentionally appear as a likely duplicate pair, which is exactly the sort of pattern AI should catch before a human approves payment." },
      { id: "q2", question: "Why is the VWR packet useful in this exercise?", options: ["It gives the model only one invoice to summarize", "It tests three-way matching across invoice, PO, and receiving evidence", "It exists only to validate OCR on a JPEG", "It forces the model to rewrite an AP policy manual"], correctOption: 1, explanation: "The VWR invoice, PO, and receiving report create a classic three-way match scenario, which is a strong demonstration of computational plus reasoning work." },
      { id: "q3", question: "What should the human reviewer mainly focus on after AI finishes this batch?", options: ["Re-keying every invoice field into a spreadsheet", "Reviewing only the items AI flagged as exceptions", "Re-reading every clean match from scratch", "Manually rewriting the journal entries in narrative form"], correctOption: 1, explanation: "The point of the exercise is not to remove humans entirely. It is to move them to the exception queue and away from repetitive processing labor." },
    ],
  },
  {
    id: "exercise-02-cro-accrual",
    title: "Exercise 2: Build the CRO Accrual",
    shortTitle: "CRO Accrual",
    category: "Finance",
    duration: "10 minutes",
    intelligence: "Computational -> Predictive -> Reasoning -> Judgment",
    description: "Participants upload six months of CRO invoices and company context, then review the controller package the model produces.",
    objective: "Show how AI compresses month-end analysis into a decision-ready package while leaving final accrual ownership with finance leadership.",
    files: "7 source documents",
    fileCount: "7 files",
    sourceFiles: ["CRO_NXTB301_2024_March.pdf", "CRO_NXTB301_2024_April.pdf", "CRO_NXTB301_2024_May.pdf", "CRO_NXTB301_2024_June.pdf", "CRO_NXTB301_2024_July.pdf", "CRO_NXTB301_2024_August.pdf", "Nexus_Company_Profile.pdf"],
    prompt: `You are the Controller at Nexus BioTherapeutics. I'm uploading six consecutive monthly CRO invoices for our Phase III clinical trial NXTB-301-001 (LUMINANCE-1), plus the company profile for context. The monthly CRO budget for this trial is $1,840,000. Process these invoices and produce: (1) a budget-vs-actual table by cost category for each month, (2) a trend analysis showing month-over-month changes in each billing category, (3) the accrual journal entry you would recommend for September based on the pattern, (4) a variance memo explaining any month where total billing exceeded budget by more than 10%, and (5) an exception list of items requiring CFO review before the accrual is posted. Do not approve the accrual.`,
    deliverables: ["Budget-versus-actual table across six months", "Trend analysis by billing category", "September accrual recommendation with assumptions", "Variance memo and CFO exception list"],
    watchFor: ["Whether different models reach different but supportable accrual recommendations", "How clearly the model separates controller work from CFO decision-making", "How much month-end narrative work collapses into one prompt-response cycle"],
    downloadHref: "/workshop-downloads/exercise-02-cro-accrual.zip",
    downloadLabel: "Download CRO accrual pack",
    downloadSize: "19 KB",
    quizIntro: "Use this quiz to check whether you understood what the model was doing in the accrual workflow, why the supporting context mattered, and where human approval still sits.",
    quizQuestions: [
      { id: "q1", question: "Which capability in this exercise is most clearly predictive rather than merely computational?", options: ["Extracting invoice totals", "Recommending a September accrual based on prior-month patterns", "Listing vendor names in a table", "Sorting files by month"], correctOption: 1, explanation: "The accrual recommendation relies on pattern continuation and forecast logic, which is the predictive step in the workflow." },
      { id: "q2", question: "Why is the company profile included with the invoice set?", options: ["To give operational and program context for interpreting the invoices", "To test whether the model can read a logo", "To replace the need for invoice analysis", "To turn the exercise into a strategy case instead of an accrual case"], correctOption: 0, explanation: "The company profile helps the model understand the study, program scale, and business context that shapes a controller package." },
      { id: "q3", question: "Which decision is intentionally kept with the human in this demo?", options: ["Calculating month-over-month deltas", "Preparing the variance memo", "Approving the accrual posting", "Summarizing invoice categories"], correctOption: 2, explanation: "The prompt explicitly keeps the approval decision with the CFO. AI can frame the recommendation but not own the consequence." },
    ],
  },
  {
    id: "exercise-03-draw-the-line",
    title: "Exercise 3: Draw the Line",
    shortTitle: "Draw the Line",
    category: "Operating Model",
    duration: "7 minutes",
    intelligence: "Computational -> Predictive -> Reasoning -> Creative -> Judgment -> Wisdom",
    description: "Participants classify work into Full AI, AI + Human Review, Human + AI, or Human Accountability using the intelligence ladder rather than gut feel.",
    objective: "Make the room articulate where AI can run autonomously, where it needs human context, and where humans still own the consequence.",
    files: "1 source handout",
    fileCount: "1 file",
    sourceFiles: ["Draw_The_Line_Handout.txt"],
    prompt: `You have just watched AI process an AP batch and build a CRO accrual schedule. For each finance task in the handout, decide whether it belongs in FULL AI, AI + HUMAN REVIEW, HUMAN + AI, or HUMAN ACCOUNTABILITY. Then compare your answers to the framework and discuss where AI capability ends, where context starts to matter, and where humans still own the consequence inside your organization.`,
    deliverables: ["Completed operating-model map", "Shared vocabulary across the six intelligence types", "Room discussion about where accountability actually begins"],
    watchFor: ["Where people still resist giving structured work fully to AI", "Where judgment and wisdom get mistaken for human-only work", "How fast the discussion moves from tools to operating-model design"],
    downloadHref: "/workshop-downloads/exercise-03-draw-the-line.zip",
    downloadLabel: "Download draw-the-line handout",
    downloadSize: "1.9 KB",
    quizIntro: "Use this quiz to check whether you understood the operating-model lesson from the prior demos: where AI can run, where human review matters, and where human accountability still begins.",
    quizQuestions: [
      { id: "q1", question: "Which intelligence type is about questioning the frame itself rather than choosing among known options?", options: ["Reasoning", "Creative", "Judgment", "Wisdom"], correctOption: 3, explanation: "Wisdom is the reframing layer. It asks whether the company is solving the right problem, not just how to solve the current one faster." },
      { id: "q2", question: "Which of the following is the clearest Human Accountability task?", options: ["Extract data from 200 invoices", "Decide whether to continue funding an over-budget clinical trial", "Generate clean-match journal entries", "Detect a personal charge in an expense report"], correctOption: 1, explanation: "AI can surface the evidence, model tradeoffs, and even suggest a reframing, but the funding decision still carries strategic and consequence-bearing accountability." },
      { id: "q3", question: "Why is this framework useful after the workflow demos?", options: ["It helps the room argue about models instead of work design", "It replaces the need to think about decisions", "It turns raw AI excitement into an operating-model discussion", "It proves every task should remain human"], correctOption: 2, explanation: "The framework matters because it redirects the room from tool fascination to organizational design and accountability boundaries." },
    ],
  },
  {
    id: "exercise-04-expense-review",
    title: "Exercise 4: Review the Expense Report",
    shortTitle: "Expense Review",
    category: "Finance",
    duration: "5 minutes",
    intelligence: "Reasoning -> Judgment",
    description: "A single expense report creates a focused policy-versus-approval demonstration, which makes it ideal as a short rhythm exercise.",
    objective: "Show that AI can detect policy exceptions and structure the review, while a human still owns the final approval call.",
    files: "1 source document",
    fileCount: "1 file",
    sourceFiles: ["EXPRPT_Vega_NYC_Oct2024.pdf"],
    prompt: `You are reviewing expense reports for Nexus BioTherapeutics. I'm uploading an expense report submitted by a sales employee for a New York client visit. Nexus policy states: (a) only business-purpose expenses are reimbursable, (b) personal care items and prescriptions are never reimbursable, and (c) expenses must be incurred during the approved travel period. Review every line item and: (1) flag any line that may violate policy, (2) identify signals that strengthen or weaken the flag, (3) calculate the reimbursable total if flagged items are excluded, and (4) list the options available to the approving manager — but do not make the approval decision.`,
    deliverables: ["Line-by-line policy review", "Structured memo with reimbursable total and flags", "Manager action menu without automatic approval"],
    watchFor: ["How well the model separates detection from judgment", "Whether the explanation is grounded in stated policy rather than guesswork", "How easy it becomes to see what the manager is actually for"],
    downloadHref: "/workshop-downloads/exercise-04-expense-review.zip",
    downloadLabel: "Download expense review pack",
    downloadSize: "2.8 KB",
    quizIntro: "Use this quiz to check whether you caught the point of the demo: AI can apply policy and surface issues, but managerial approval still carries consequence.",
    quizQuestions: [
      { id: "q1", question: "What is the main job AI is doing in this exercise?", options: ["Approving or denying the report on behalf of management", "Applying stated policy consistently across line items", "Rewriting company policy from scratch", "Negotiating with the employee about fairness"], correctOption: 1, explanation: "The model's value here is structured policy application and evidence gathering, not ownership of the approval decision." },
      { id: "q2", question: "Why does this make a strong judgment-boundary demo?", options: ["Because the file is too small for AI to process", "Because the approval decision still has fairness and consequence implications", "Because policy language should never be automated", "Because expense reports contain no structured information"], correctOption: 1, explanation: "The report is easy for AI to analyze, but the social and managerial consequence of approval is still human territory." },
      { id: "q3", question: "Which output best fits the intended AI role in this exercise?", options: ["A structured memo with flags, rationale, and options for the manager", "A final reimbursement decision sent directly to payroll", "A new travel policy for the company", "A legal opinion on employment law exposure"], correctOption: 0, explanation: "The memo is the right end product because it gives the manager a clean package without transferring ownership of the decision itself." },
    ],
  },
  {
    id: "exercise-05-enrollment-rescue",
    title: "Exercise 5: Rescue Trial Enrollment",
    shortTitle: "Enrollment Rescue",
    category: "Clinical Operations",
    duration: "10 minutes",
    intelligence: "Computational -> Predictive -> Reasoning -> Creative -> Judgment",
    description: "Participants analyze an enrollment slump using site dashboards, screen-fail reasons, channel performance, and monitor notes.",
    objective: "Demonstrate how AI can compress trial-operations analysis into a recovery plan while leaving intervention decisions with leadership.",
    files: "6 source documents",
    fileCount: "6 files",
    sourceFiles: ["00_README.txt", "site_enrollment_dashboard.csv", "screen_fail_reasons.csv", "recruitment_channel_performance.csv", "site_monitor_notes.md", "intervention_constraints.md"],
    prompt: `You are the head of clinical operations at Nexus BioTherapeutics. I'm uploading an enrollment dashboard, screen-fail reasons, recruitment channel performance, site monitor notes, and intervention constraints for NXT-301 / LUMINANCE-1. Diagnose why enrollment is missing plan, identify the sites and causes driving the shortfall, forecast the likely gap over the next 30 days if nothing changes, and recommend a focused recovery plan with interventions ranked by expected impact and feasibility. Separate what can be executed immediately from what requires executive approval.`,
    deliverables: ["Shortfall diagnosis by site and cause", "30-day forecast if current trend holds", "Ranked intervention plan", "Escalation items that still require executive judgment"],
    watchFor: ["Whether the model can connect operational notes to numeric underperformance", "How clearly it separates quick wins from strategic changes", "Whether the room sees predictive and reasoning intelligence working together"],
    downloadHref: "/workshop-downloads/exercise-05-enrollment-rescue.zip",
    downloadLabel: "Download enrollment rescue pack",
    downloadSize: "4.0 KB",
    quizIntro: "Use this quiz to check whether you understood both the analytical power of the exercise and the human boundary around intervention decisions.",
    quizQuestions: [
      { id: "q1", question: "What pattern most clearly points to an operational bottleneck rather than just weak demand?", options: ["Strong referral volume but rising screen-fail and pathology timing issues", "A site logo mismatch in the dashboard", "The fact that oncology studies always enroll slowly", "A single month with perfect performance"], correctOption: 0, explanation: "The source files show volume coming in, but quality and operational friction are degrading conversion. That is a classic operations diagnosis problem." },
      { id: "q2", question: "Which part of this workflow is most clearly predictive?", options: ["Listing screen-fail reasons", "Forecasting the next 30-day enrollment gap if nothing changes", "Summarizing monitor notes", "Copying the site IDs into a table"], correctOption: 1, explanation: "Forecasting the future shortfall is the predictive step. The rest of the workflow builds the evidence base for that forecast." },
      { id: "q3", question: "Which decision should still stay with leadership after AI prepares the rescue plan?", options: ["Whether to reallocate budget and change recovery priorities", "Whether to count the sites in the dashboard", "Whether to group screen-fail codes into categories", "Whether to summarize the notes in bullet form"], correctOption: 0, explanation: "AI can frame the options, but budget movement and intervention prioritization are consequence-bearing choices that still belong to humans." },
    ],
  },
  {
    id: "exercise-06-capa-investigation",
    title: "Exercise 6: Investigate a Manufacturing Deviation",
    shortTitle: "CAPA Investigation",
    category: "Quality",
    duration: "10 minutes",
    intelligence: "Computational -> Reasoning -> Creative -> Judgment",
    description: "Participants reconstruct a deviation across batch records, environmental monitoring, training records, and prior CAPA history.",
    objective: "Show that AI can organize messy quality evidence into a root-cause package without pretending to own the official quality decision.",
    files: "6 source documents",
    fileCount: "6 files",
    sourceFiles: ["00_README.txt", "deviation_report.md", "bioreactor_sensor_summary.csv", "environmental_monitoring_summary.csv", "operator_training_extract.md", "prior_capa_findings.md"],
    prompt: `You are supporting the manufacturing quality team at Nexus BioTherapeutics. Review the deviation report, sensor summary, environmental monitoring results, operator training extract, and prior CAPA findings for batch NXTB-447-DS-240311. Reconstruct the event timeline, identify the most likely contributing factors, distinguish immediate evidence from inferred root-cause hypotheses, and draft a CAPA recommendation package including immediate containment actions, likely root causes, and open questions that still require QA leadership judgment.`,
    deliverables: ["Chronological event reconstruction", "Contributing-factor analysis", "Draft CAPA package with containment actions", "Open judgment calls for QA leadership"],
    watchFor: ["Whether the model can connect repeat signals across files", "How well it separates evidence from hypothesis", "Whether the final package feels useful to a real quality review meeting"],
    downloadHref: "/workshop-downloads/exercise-06-capa-investigation.zip",
    downloadLabel: "Download CAPA investigation pack",
    downloadSize: "4.1 KB",
    quizIntro: "Use this quiz to check whether you understood what AI can reconstruct from messy quality evidence and what quality leadership still has to own.",
    quizQuestions: [
      { id: "q1", question: "Which detail most strongly suggests the event is not isolated noise?", options: ["There was a previous CAPA tied to shift handoff and tablet sanitization control", "The batch number is long", "The room pressure stayed in range", "The report used markdown formatting"], correctOption: 0, explanation: "Prior CAPA history shows the signal repeats across time, which is exactly the kind of pattern AI is good at surfacing from multiple documents." },
      { id: "q2", question: "Why is this a reasoning-heavy demo?", options: ["Because one file already states the official root cause", "Because the likely root cause only emerges by combining timeline, monitoring, and training evidence", "Because it is mostly arithmetic", "Because quality documents cannot be analyzed by AI"], correctOption: 1, explanation: "No single file answers the question on its own. The model has to connect the evidence across documents to build a plausible explanation." },
      { id: "q3", question: "Which action remains clearly with QA leadership?", options: ["Drafting a containment-action table", "Summarizing the event timeline", "Making the official quality disposition decision", "Clustering repeated findings by theme"], correctOption: 2, explanation: "The official disposition and regulatory posture carry real consequence. AI can prepare the package, but QA leadership owns the decision." },
    ],
  },
  {
    id: "exercise-07-safety-signal",
    title: "Exercise 7: Triage an Emerging Safety Signal",
    shortTitle: "Safety Signal",
    category: "Drug Safety",
    duration: "9 minutes",
    intelligence: "Computational -> Predictive -> Reasoning -> Creative -> Judgment",
    description: "Participants review adverse-event cases, narratives, lab trends, and medical-monitor notes to assess whether a hepatic pattern is emerging.",
    objective: "Demonstrate AI's ability to cluster narrative-heavy medical evidence into a signal brief without turning it into an automated safety decision.",
    files: "6 source documents",
    fileCount: "6 files",
    sourceFiles: ["00_README.txt", "ae_line_listing.csv", "case_narratives.md", "medical_monitor_note.md", "lab_signal_summary.csv", "prior_safety_review_excerpt.md"],
    prompt: `You are supporting the drug safety review team at Nexus BioTherapeutics. Review the AE line listing, selected case narratives, medical monitor note, lab trend summary, and prior safety review excerpt for NXT-112. Determine whether the current evidence supports treating this as a potential emerging hepatic signal, summarize the pattern and key uncertainties, and draft a signal brief that distinguishes descriptive evidence, likely confounders, and the decision points that still require medical safety judgment.`,
    deliverables: ["Pattern summary across the hepatic events", "Signal-versus-noise assessment", "Draft signal brief for review committee", "Explicit medical judgment questions that remain open"],
    watchFor: ["Whether the model can synthesize narrative and structured data together", "How well it handles confounders without over-claiming certainty", "Whether the room sees the difference between flagging a signal and acting on it"],
    downloadHref: "/workshop-downloads/exercise-07-safety-signal.zip",
    downloadLabel: "Download safety signal pack",
    downloadSize: "3.6 KB",
    quizIntro: "Use this quiz to check whether you understood the difference between AI surfacing an emerging pattern and a medical team deciding what that pattern means.",
    quizQuestions: [
      { id: "q1", question: "What makes this more than a single-case anecdote?", options: ["Multiple Grade 3 hepatic events are clustering inside a short period", "One patient took a concomitant medication", "The file names share a common prefix", "Every patient had identical outcomes"], correctOption: 0, explanation: "The emerging-signal question comes from recurrence and clustering, not from one isolated event alone." },
      { id: "q2", question: "Which question still belongs to medical judgment after AI drafts the signal brief?", options: ["Whether to treat the pattern as sufficient to pause dose escalation", "Whether ALT events can be counted in a CSV", "Whether narratives can be summarized into bullets", "Whether event terms can be alphabetized"], correctOption: 0, explanation: "AI can package the evidence, but deciding to pause escalation or change the safety posture is still a medical leadership call." },
      { id: "q3", question: "Which file most directly helps AI move from case review to a trend view?", options: ["lab_signal_summary.csv", "00_README.txt", "medical_monitor_note.md", "case_narratives.md only"], correctOption: 0, explanation: "The lab trend summary is the clearest bridge from individual cases to a broader pattern assessment." },
    ],
  },
  {
    id: "exercise-08-regulatory-impact",
    title: "Exercise 8: Assess the Impact of New FDA Guidance",
    shortTitle: "Regulatory Impact",
    category: "Regulatory",
    duration: "8 minutes",
    intelligence: "Reasoning -> Creative -> Judgment -> Wisdom",
    description: "Participants review guidance excerpts, competitor context, and internal program notes to produce an impact memo for leadership.",
    objective: "Show how AI can accelerate interpretation and communications prep without replacing regulatory strategy or risk posture decisions.",
    files: "6 source documents",
    fileCount: "6 files",
    sourceFiles: ["00_README.txt", "fda_guidance_excerpt.md", "competitor_approval_summary.md", "nexus_program_brief.md", "regulatory_questions_log.csv", "internal_regaffairs_note.md"],
    prompt: `You are supporting regulatory affairs at Nexus BioTherapeutics. Review the new FDA guidance excerpt, the competitor approval summary, the NXT-301 program brief, the open regulatory questions log, and the internal regulatory note. Produce an executive impact memo that identifies where Nexus is exposed, what mitigation actions should be prioritized, and which messaging or development choices still require leadership judgment rather than AI-generated recommendation.`,
    deliverables: ["Executive impact memo", "Prioritized exposure list", "Mitigation recommendations", "Explicit strategy choices that stay with leadership"],
    watchFor: ["Whether the model distinguishes operational mitigation from strategic posture", "How clearly it translates dense guidance into usable business implications", "Whether the room sees the boundary between reasoning and wisdom"],
    downloadHref: "/workshop-downloads/exercise-08-regulatory-impact.zip",
    downloadLabel: "Download regulatory impact pack",
    downloadSize: "3.9 KB",
    quizIntro: "Use this quiz to check whether you understood where AI is helping interpret and frame strategy choices rather than merely summarize documents.",
    quizQuestions: [
      { id: "q1", question: "Which issue appears most directly exposed by the new guidance in the Nexus program brief?", options: ["Inconsistent imaging adjudication windows and PRO missingness", "The color of the company logo", "Too many vendors in accounts payable", "A shortage of clinical trial kits"], correctOption: 0, explanation: "The guidance and program brief line up most clearly around endpoint reliability and patient-reported outcome execution risk." },
      { id: "q2", question: "What is the best role for AI in this exercise?", options: ["Setting the company's final regulatory risk appetite", "Translating the guidance into a decision-ready impact memo and mitigation list", "Replacing regulatory affairs leadership", "Ignoring competitor context entirely"], correctOption: 1, explanation: "AI is strong at synthesizing guidance and internal context into a usable memo. It is not the final owner of regulatory posture." },
      { id: "q3", question: "Which part of this workflow edges into wisdom rather than judgment?", options: ["Deciding whether external messaging and development posture should change now", "Summarizing the guidance in bullets", "Listing open questions from the CSV", "Comparing one approval summary to another"], correctOption: 0, explanation: "Choosing how the company should reposition itself in response to the guidance is a reframing decision, which moves into wisdom territory." },
    ],
  },
  {
    id: "exercise-09-supply-chain-disruption",
    title: "Exercise 9: Respond to a Supply Chain Disruption",
    shortTitle: "Supply Chain",
    category: "Supply Chain",
    duration: "8 minutes",
    intelligence: "Computational -> Predictive -> Reasoning -> Judgment",
    description: "Participants work through a delayed critical material, current inventory, production schedule, and customer commitments to create a response package.",
    objective: "Demonstrate that AI can compress cross-functional supply impact analysis into scenarios, while humans still decide what to protect and what to sacrifice.",
    files: "6 source documents",
    fileCount: "6 files",
    sourceFiles: ["00_README.txt", "supplier_delay_notice.md", "inventory_snapshot.csv", "production_schedule.csv", "customer_commitment_summary.csv", "procurement_actions_log.md"],
    prompt: `You are supporting supply chain leadership at Nexus BioTherapeutics. Review the supplier delay notice, inventory snapshot, production schedule, customer commitment summary, and procurement actions log. Forecast the likely operational impact over the next 30 days, identify which demand streams are most at risk, and propose a response package with scenarios, tradeoffs, and the decisions that still require human prioritization rather than automation.`,
    deliverables: ["30-day impact forecast", "At-risk demand streams by severity", "Scenario options with tradeoffs", "Priority decisions that remain human"],
    watchFor: ["How quickly the model can connect inventory and schedule math to business consequences", "Whether it clearly exposes the tradeoff between commercial and clinical priorities", "How easy it becomes to see the judgment layer in supply planning"],
    downloadHref: "/workshop-downloads/exercise-09-supply-chain-disruption.zip",
    downloadLabel: "Download supply chain pack",
    downloadSize: "3.8 KB",
    quizIntro: "Use this quiz to check whether you understood that AI can model consequences and scenarios, but human leaders still choose what gets protected first.",
    quizQuestions: [
      { id: "q1", question: "Why is this a predictive demo and not just a spreadsheet cleanup exercise?", options: ["Because the model is forecasting downstream impact from current inventory and schedule data", "Because the supplier delay notice is written in prose", "Because every item is already resolved", "Because it uses a zip file download"], correctOption: 0, explanation: "The core value is not just organizing inputs. It is forecasting what happens next under current constraints." },
      { id: "q2", question: "Which tension in the source files creates the real managerial decision?", options: ["Whether to prioritize commercial commitments or clinical cohort timing", "Whether to sort the CSV alphabetically", "Whether to keep the README in the zip file", "Whether the material name is too technical"], correctOption: 0, explanation: "The files create a clear tradeoff between protected revenue commitments and strategically sensitive clinical timing. That is the judgment layer." },
      { id: "q3", question: "What should AI produce before leadership makes the call?", options: ["A scenario package with impacts, options, and tradeoffs", "A final irreversible prioritization decision", "A public press release", "A replacement supplier qualification package from scratch"], correctOption: 0, explanation: "The best AI output here is a clean scenario package. It makes the human decision sharper without pretending to replace it." },
    ],
  },
  {
    id: "exercise-10-clinical-ops-manager",
    title: "Exercise 10: Run the Weekly Clinical Operations Cadence",
    shortTitle: "Ops Manager",
    category: "Middle Management",
    duration: "10 minutes",
    intelligence: "Computational -> Reasoning -> Creative -> Judgment",
    description: "This is the managerial-coordination compression demo. AI ingests notes, trackers, issues, and email threads, then produces the management package a clinical operations manager usually assembles by hand.",
    objective: "Make the middle-management opportunity tangible by showing how much coordination, owner chasing, and escalation packaging can be compressed.",
    files: "6 source documents",
    fileCount: "6 files",
    sourceFiles: ["00_README.txt", "weekly_study_team_notes.md", "cro_status_update.csv", "site_activation_tracker.csv", "issue_log.csv", "cross_function_email_thread.md"],
    prompt: `You are acting as the clinical operations manager for Nexus BioTherapeutics on the NXT-301 program. Review the weekly study team notes, CRO status update, site activation tracker, issue log, and cross-functional email thread. Produce the management package for the next operating cycle: (1) a concise status summary, (2) a ranked risk-and-blocker list, (3) an owner-by-owner action tracker with due dates, (4) explicit escalation items for leadership, and (5) draft follow-up messages to the functions that need to move. Do not make people decisions or change ownership without explaining the rationale.`,
    deliverables: ["One-page operating summary", "Risk-and-blocker register", "Action tracker with owners and due dates", "Escalation package plus draft follow-ups"],
    watchFor: ["How much coordination work turns out to be extractable, mergeable, and draftable", "Whether the room recognizes this as middle-management compression rather than strategy automation", "Where true managerial accountability still remains human"],
    downloadHref: "/workshop-downloads/exercise-10-clinical-ops-manager.zip",
    downloadLabel: "Download ops manager pack",
    downloadSize: "4.1 KB",
    quizIntro: "Use this quiz to check whether you understood the managerial lesson of the exercise: AI can absorb large amounts of coordination work, but accountability still has a human owner.",
    quizQuestions: [
      { id: "q1", question: "What kind of managerial work is this demo primarily compressing?", options: ["Coordinating updates, assigning owners, tracking blockers, and preparing escalations", "Setting corporate strategy for the next three years", "Hiring and firing the study team", "Negotiating final budgets with the board"], correctOption: 0, explanation: "This is a coordination-compression demo. It targets the handoffs, reminders, summary work, and action packaging that consume many middle-management roles." },
      { id: "q2", question: "Why does this demo make the middle-management compression point so clearly?", options: ["Because it removes the need for any human accountability", "Because much of the work is really information routing, synthesis, and follow-up", "Because operations teams never need managers", "Because AI should decide who gets promoted"], correctOption: 1, explanation: "A large share of middle-management labor is workflow maintenance. AI is increasingly good at exactly that kind of work." },
      { id: "q3", question: "Which part of the role should remain clearly human even after AI prepares the package?", options: ["Owning escalation consequences and making people-accountability calls", "Extracting due dates from notes", "Formatting a meeting agenda", "Compiling the open issue list"], correctOption: 0, explanation: "The human role remains where consequence, coaching, and accountability begin. AI can package the work, but not own the human outcome." },
    ],
  },
];

const tomorrowWorkshopExerciseIds = new Set([
  "exercise-01-ap-batch",
  "exercise-03-draw-the-line",
  "exercise-05-enrollment-rescue",
  "exercise-08-regulatory-impact",
  "exercise-10-clinical-ops-manager",
]);

export const tomorrowWorkshopExercises = workshopExercises.filter((exercise) =>
  tomorrowWorkshopExerciseIds.has(exercise.id),
);

export const downloadBundles: DownloadBundle[] = [
  { title: "Exercise 1: AP Batch", description: "Eight AP packet documents for extraction, matching, and exception handling.", href: "/workshop-downloads/exercise-01-ap-batch.zip", size: "58 KB", fileCount: "8 files" },
  { title: "Exercise 2: CRO Accrual", description: "Six monthly CRO invoices plus company context for the accrual build.", href: "/workshop-downloads/exercise-02-cro-accrual.zip", size: "19 KB", fileCount: "7 files" },
  { title: "Exercise 3: Draw the Line", description: "Framework handout for placing work at the right operating boundary.", href: "/workshop-downloads/exercise-03-draw-the-line.zip", size: "1.9 KB", fileCount: "1 file" },
  { title: "Exercise 4: Expense Review", description: "Single-file policy review demo for fast judgment-boundary discussion.", href: "/workshop-downloads/exercise-04-expense-review.zip", size: "2.8 KB", fileCount: "1 file" },
  { title: "Exercise 5: Enrollment Rescue", description: "Site dashboards, screen-fail patterns, and monitor notes for a recovery-plan demo.", href: "/workshop-downloads/exercise-05-enrollment-rescue.zip", size: "4.0 KB", fileCount: "6 files" },
  { title: "Exercise 6: CAPA Investigation", description: "Deviation, monitoring, and training signals for a root-cause and CAPA package.", href: "/workshop-downloads/exercise-06-capa-investigation.zip", size: "4.1 KB", fileCount: "6 files" },
  { title: "Exercise 7: Safety Signal", description: "AE cases, narratives, and lab trends for signal triage.", href: "/workshop-downloads/exercise-07-safety-signal.zip", size: "3.6 KB", fileCount: "6 files" },
  { title: "Exercise 8: Regulatory Impact", description: "Guidance, competitor context, and internal questions for executive impact assessment.", href: "/workshop-downloads/exercise-08-regulatory-impact.zip", size: "3.9 KB", fileCount: "6 files" },
  { title: "Exercise 9: Supply Chain Disruption", description: "Delayed material, current inventory, and schedule consequences for scenario planning.", href: "/workshop-downloads/exercise-09-supply-chain-disruption.zip", size: "3.8 KB", fileCount: "6 files" },
  { title: "Exercise 10: Ops Manager", description: "Weekly cadence files showing how AI compresses coordination-heavy middle-management work.", href: "/workshop-downloads/exercise-10-clinical-ops-manager.zip", size: "4.1 KB", fileCount: "6 files" },
  { title: "All Workshop Materials", description: "Combined bundle for all ten exercise packs and their participant-facing source files.", href: "/workshop-downloads/all-workshop-materials.zip", size: "103 KB", fileCount: "53 files" },
];

export const tomorrowDownloadBundles = downloadBundles.filter((bundle) => {
  if (bundle.href === "/workshop-downloads/all-workshop-materials.zip") {
    return false;
  }

  return tomorrowWorkshopExercises.some((exercise) => exercise.downloadHref === bundle.href);
});

export const closingTakeaways = [
  "The strongest AI demos are not toy tasks. They compress real operating work into decision-ready packages.",
  "The key boundary is not whether AI can generate an answer. It is whether AI should own the consequence of that answer.",
  "Many middle-management layers are coordination layers. AI can absorb a meaningful share of that routing, synthesis, and follow-up labor.",
];