"use client";

import Link from "next/link";
import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const sectionNav = [
  { id: 'assess', label: 'Assess', sections: ['collapsibility', 'software-value', 'maturity'] },
  { id: 'method', label: 'Transform', sections: ['workflow', 'expertise', 'growth'] },
  { id: 'strategy', label: 'Invest', sections: ['flywheel', 'concentration'] },
  { id: 'execute', label: 'Execute', sections: ['roadmap'] },
];

const tierColors: Record<string, string> = {
  assess: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  method: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  strategy: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  execute: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
};

export default function ValueCreationPlaybook() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#EF4B4C]/10 via-transparent to-transparent" />
        <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-3 py-1 bg-[#EF4B4C]/20 border border-[#EF4B4C]/30 rounded-full text-[#EF4B4C] text-xs font-bold uppercase tracking-wider mb-3">
                Value Creation
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight">AI Transformation <span className="text-[#EF4B4C]">Playbook</span></h1>
              <p className="text-lg text-gray-300 mt-2 max-w-3xl">
                How we drive AI-powered value creation across QHP&apos;s portfolio companies. Assess, transform, invest, execute.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-20 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-8 py-3 flex items-center gap-6 overflow-x-auto">
          {sectionNav.map((tier) => (
            <a
              key={tier.id}
              href={`#${tier.sections[0]}`}
              className={`text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-colors ${tierColors[tier.id]} hover:opacity-80`}
            >
              {tier.label}
            </a>
          ))}
          <div className="flex-1" />
          <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            Portfolio Companies <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-20">

        {/* ═══════════════════════════════════════════════ */}
        {/* TIER 1: ASSESS                                  */}
        {/* ═══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">Tier 1</span>
            <h2 className="text-2xl font-bold text-white">Assess the Landscape</h2>
          </div>

          {/* S1: Collapsibility */}
          <section id="collapsibility" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">1</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Portfolio Collapsibility Assessment</h3>
                <p className="text-sm text-blue-400 italic mb-4">Which businesses are protected and which are exposed?</p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  A company&apos;s <span className="text-white font-medium">collapsibility</span> measures how much of its value sits in cognitive labor that AI can replicate cheaply, versus physical, regulatory, or relationship-based work that AI cannot. Low collapsibility = protected. High collapsibility = exposed.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Company</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Collapsibility</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Why</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">AI Posture</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { co: 'Azurity', col: 'Low', colColor: 'text-emerald-400', why: 'Physical manufacturing, FDA-regulated, proprietary formulations', posture: 'Aggressive adoption' },
                        { co: 'Lexitas', col: 'Low', colColor: 'text-emerald-400', why: 'Physical clinical trials, site relationships, regulatory records', posture: 'Aggressive adoption' },
                        { co: 'Vector', col: 'Low', colColor: 'text-emerald-400', why: 'Physical trial sites, patient relationships, community presence', posture: 'Aggressive adoption' },
                        { co: 'Bend Bioscience', col: 'Low', colColor: 'text-emerald-400', why: 'CDMO handling physical formulations, GMP-regulated', posture: 'Aggressive adoption' },
                        { co: 'Applied StemCell', col: 'Low-Med', colColor: 'text-yellow-400', why: 'Gene editing lab operations, IP-heavy', posture: 'Adopt fast' },
                        { co: 'InformedDNA', col: 'Medium', colColor: 'text-amber-400', why: 'Trust relationships, but knowledge-heavy', posture: 'Move fast' },
                        { co: 'Univo IRB', col: 'Medium', colColor: 'text-amber-400', why: 'Regulatory expertise, automatable process', posture: 'Move fast' },
                        { co: 'COPILOT', col: 'Medium', colColor: 'text-amber-400', why: 'Labor-intensive but process-driven, enormous AI leverage', posture: 'Aggressive adoption' },
                        { co: 'AutoCruitment', col: 'Med-High', colColor: 'text-red-400', why: 'Recruitment platform — AI-native competitors emerging', posture: 'Urgent' },
                      ].map((row) => (
                        <tr key={row.co} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.co}</td>
                          <td className={`py-3 px-4 font-semibold ${row.colColor}`}>{row.col}</td>
                          <td className="py-3 px-4">{row.why}</td>
                          <td className="py-3 px-4">{row.posture}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 py-4 px-6 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">Key insight:</span> The portfolio is heavy on physical, regulatory, and relationship-intensive businesses — low collapsibility. These companies are hard to disrupt with AI, but stand to gain enormously from using AI internally. That&apos;s the value creation opportunity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* S2: Software Value Test */}
          <section id="software-value" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">2</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">The Software Value Test</h3>
                <p className="text-sm text-blue-400 italic mb-4">If a competitor with AI can rebuild it in a weekend, it was never a moat.</p>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  For every portfolio company with a technology platform: <span className="text-white font-medium">what does this platform contain that a well-funded competitor with AI couldn&apos;t recreate in six months?</span> If the answer is &ldquo;the code&rdquo; — that&apos;s not a moat anymore. The moat is what the code sits on top of.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Company</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Code Value</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">What&apos;s Actually Valuable</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { co: 'COPILOT', code: 'Moderate — replicable', value: 'Payer relationship data, BV/PA outcome history, Surescripts/HITRUST certs' },
                        { co: 'AutoCruitment', code: 'Declining — replicable', value: 'Patient conversion data, exclusive site partnerships, trained matching algorithms' },
                        { co: 'InformedDNA', code: 'Moderate — complex', value: 'Genetic counselor decision corpus, payer data, utilization patterns' },
                        { co: 'Azurity', code: 'Low relevance', value: 'Formulation IP, manufacturing data, FDA approvals, NDC database' },
                        { co: 'Bend Bioscience', code: 'Low relevance', value: 'Formulation data, process optimization history, client relationships' },
                      ].map((row) => (
                        <tr key={row.co} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.co}</td>
                          <td className="py-3 px-4">{row.code}</td>
                          <td className="py-3 px-4">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* SaaS Decomposition */}
                <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6 mb-6">
                  <h4 className="text-white font-semibold mb-3">The SaaS Decomposition</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    SaaS is a shared-resource value model that made sense when software cost $50M to build. When AI drops that cost close to zero, the calculus changes: individuals can build <span className="text-blue-400 font-medium">micro-applications</span> shaped to their exact workflow instead of adapting to platforms designed for the average of a million customers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                      <h5 className="text-emerald-400 font-semibold text-sm mb-2">Survives the Micro-App Shift</h5>
                      <ul className="text-gray-400 text-xs space-y-1.5">
                        <li>• Platforms with <span className="text-white">data gravity</span> (Salesforce = 20 years of your data)</li>
                        <li>• Platforms with <span className="text-white">network effects</span> (LinkedIn = 900M people)</li>
                        <li>• Platforms with <span className="text-white">integration fabric</span> (Epic = nervous system of 250 health systems)</li>
                        <li>• Platforms with <span className="text-white">regulatory certs</span> (HITRUST, SOC 2, FDA Part 11)</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                      <h5 className="text-red-400 font-semibold text-sm mb-2">Doesn&apos;t Survive</h5>
                      <ul className="text-gray-400 text-xs space-y-1.5">
                        <li>• Any SaaS whose value is &ldquo;we built a sophisticated tool that does X&rdquo;</li>
                        <li>• Where X is describable in plain language</li>
                        <li>• Without proprietary data, network effects, or regulatory certs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Compliance as Guardrail */}
                <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6">
                  <h4 className="text-white font-semibold mb-3">Compliance as the New Guardrail</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    When anyone can build their own software, IT shifts from <span className="text-white">software provider</span> to <span className="text-white">compliance certifier</span>. The new architecture:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {[
                      { step: '1', title: 'IT sets guardrails', desc: 'HIPAA, SOC 2, HITRUST, GDPR — the rules of the road' },
                      { step: '2', title: 'AI enforces by default', desc: 'Compliance baked into generation, not audited after the fact' },
                      { step: '3', title: 'People build what they need', desc: 'No IT tickets, no 3-month waits, tools shaped to actual work' },
                      { step: '4', title: 'IT validates & certifies', desc: 'Building inspection model — you design it, they certify it meets code' },
                    ].map((item) => (
                      <div key={item.step} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="text-[#EF4B4C] font-bold text-lg">{item.step}</span>
                        <h5 className="text-white font-medium text-sm mt-1">{item.title}</h5>
                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S11: Maturity Assessment */}
          <section id="maturity" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">3</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Maturity Assessment Framework</h3>
                <p className="text-sm text-blue-400 italic mb-4">You can&apos;t automate what you can&apos;t measure.</p>
                
                <p className="text-gray-400 leading-relaxed mb-4">
                  Every process at every portfolio company sits somewhere on this maturity curve. Assess <span className="text-white font-medium">processes, not companies</span> — a single company will have processes at multiple levels.
                </p>

                <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6 mb-6">
                  <h4 className="text-white font-semibold text-sm mb-4">Measure Before You Build</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { num: '1', title: 'Baseline', desc: 'Measure the process as it runs today — cost, time, error rate, throughput' },
                      { num: '2', title: 'Define success', desc: 'A specific, quantitative target the AI deployment must hit' },
                      { num: '3', title: 'Counterfactual', desc: 'What would have happened without the AI? Without this, improvement is anecdotal' },
                    ].map((item) => (
                      <div key={item.num} className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="text-blue-400 font-bold text-lg">{item.num}</span>
                        <h5 className="text-white font-medium text-sm mt-1">{item.title}</h5>
                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h4 className="text-white font-semibold text-sm mb-3">The Maturity Ladder</h4>
                <div className="space-y-2 mb-6">
                  {[
                    { level: 'L0', stage: 'Undefined', desc: 'No agreed metrics. Decisions by gut feeling.', ai: 'None', human: 'Everything', color: 'border-gray-600' },
                    { level: 'L1', stage: 'Measurable', desc: 'Success criteria exist. We can score performance.', ai: 'Scorekeeper', human: 'Doers, now graded', color: 'border-blue-600' },
                    { level: 'L2', stage: 'Repeatable', desc: 'SOPs and playbooks exist. Process is consistent.', ai: 'Assistant', human: 'Follows the script', color: 'border-emerald-600' },
                    { level: 'L3', stage: 'Automated', desc: 'AI handles ~80% of volume.', ai: 'Primary worker', human: 'Exception-handler', color: 'border-amber-600' },
                    { level: 'L4', stage: 'Industrialized', desc: 'Buyers purchase outcomes, not labor.', ai: 'Runs the operation', human: 'Auditor & architect', color: 'border-purple-600' },
                    { level: 'L5', stage: 'Commoditized', desc: 'Multiple providers compete on price. Service is a utility.', ai: 'Invisible infra', human: 'Consumer', color: 'border-red-600' },
                  ].map((row) => (
                    <div key={row.level} className={`flex items-center gap-4 p-3 rounded-lg bg-[#1a1a1a] border-l-4 ${row.color}`}>
                      <span className="text-white font-bold w-8 text-center">{row.level}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-white font-medium text-sm">{row.stage}</span>
                        <span className="text-gray-500 text-xs ml-2">{row.desc}</span>
                      </div>
                      <div className="hidden md:flex items-center gap-4 text-xs">
                        <span className="text-gray-500">AI: <span className="text-gray-300">{row.ai}</span></span>
                        <span className="text-gray-500">Human: <span className="text-gray-300">{row.human}</span></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="py-4 px-6 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">For QHP hold periods (24-42 months):</span> Moving a process from L0→L2 or L1→L3 creates the most value. L4-L5 transitions take longer than a hold period. Prioritize L0→L1 first — you can&apos;t automate what you can&apos;t measure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* TIER 2: TRANSFORM                               */}
        {/* ═══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">Tier 2</span>
            <h2 className="text-2xl font-bold text-white">Transform How Work Gets Done</h2>
          </div>

          {/* S3: Workflow Redesign */}
          <section id="workflow" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">4</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">How Work Should Actually Change</h3>
                <p className="text-sm text-emerald-400 italic mb-4">You wouldn&apos;t design a highway for horses.</p>

                <p className="text-gray-400 leading-relaxed mb-4">
                  This is where most AI transformations fail. Not because the AI was wrong, but because it was dropped into a process designed around how <span className="text-white">humans</span> think. AI has different constraints: no fatigue, no context limits, but it can sound confident while being completely wrong and can&apos;t do anything physical.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  <span className="text-white font-medium">The mistake:</span> Plugging AI into the existing workflow. <span className="text-white font-medium">The right question:</span> If we designed this from scratch with AI doing the heavy cognitive lifting and humans handling judgment, novel situations, and physical work — what would it look like?
                </p>

                <h4 className="text-white font-semibold text-sm mb-3">Workflow Redesign Priorities by Company</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Company</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Process</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Current Bottleneck</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Redesigned</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { co: 'COPILOT', process: 'Benefits verification & prior auth', bottleneck: 'Case-by-case manual payer research', redesign: 'AI processes 80% of routine cases; humans handle exceptions & appeals' },
                        { co: 'Lexitas', process: 'Site selection', bottleneck: 'Senior staff research histories, compile spreadsheets', redesign: 'AI scores every site against historical data; humans validate top picks' },
                        { co: 'Azurity', process: 'Quality prediction', bottleneck: 'Quality team reviews batch records after production', redesign: 'AI monitors parameters real-time, flags deviations before defects' },
                        { co: 'AutoCruitment', process: 'Ad targeting & matching', bottleneck: 'Campaign managers adjust based on intuition', redesign: 'AI optimizes on conversion data; humans focus on creative & relationships' },
                        { co: 'Univo IRB', process: 'Protocol review', bottleneck: 'Reviewers read each submission start to finish', redesign: 'AI pre-screens, highlights judgment areas; humans focus on ethics & edges' },
                      ].map((row) => (
                        <tr key={row.co} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.co}</td>
                          <td className="py-3 px-4">{row.process}</td>
                          <td className="py-3 px-4">{row.bottleneck}</td>
                          <td className="py-3 px-4 text-emerald-400/80">{row.redesign}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6">
                  <h4 className="text-white font-semibold text-sm mb-3">The Redesign Test — 3 Questions Before Any AI Deployment</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-emerald-400 font-bold">1.</span>
                      <p className="text-gray-400 text-sm">What bottlenecks exist only because humans are slow, forgetful, or single-threaded? <span className="text-gray-500">→ Those disappear with AI.</span></p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-emerald-400 font-bold">2.</span>
                      <p className="text-gray-400 text-sm">Where can AI produce a confident-sounding wrong answer that causes real harm? <span className="text-gray-500">→ Those need human checkpoints.</span></p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-emerald-400 font-bold">3.</span>
                      <p className="text-gray-400 text-sm">If a new competitor built this from scratch with AI at the center, how would they do it? <span className="text-gray-500">→ That&apos;s your target design.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S4: Expert Knowledge */}
          <section id="expertise" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">5</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Where Expert Knowledge Creates the Most Value</h3>
                <p className="text-sm text-emerald-400 italic mb-4">When building is free, knowing what to build is the only thing that matters.</p>

                <p className="text-gray-400 leading-relaxed mb-2">
                  The people inside our portfolio companies who know what questions to ask — the regulatory directors, the clinical ops leads, the quality managers — <span className="text-white font-medium">they are now the most valuable people in the building.</span>
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The play: put AI directly in the hands of the people who already understand the problem. Let them move at the speed of their knowledge instead of the speed of their budget. The result is <span className="text-emerald-400 font-medium">captured expertise</span> — institutional knowledge encoded into systems that compound instead of walking out the door.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Domain</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Who Knows What to Ask</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">What AI Now Handles</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Companies</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { domain: 'Compliance (GCP/GMP/GLP)', who: 'Quality & regulatory staff', ai: 'RAG on full regulatory corpus — searches thousands of pages, cross-references findings', companies: 'Azurity, Bend, Lexitas, Vector, Univo' },
                        { domain: 'FDA Regulatory', who: 'Regulatory affairs directors', ai: 'RAG across precedent decisions, guidance; fine-tuned on submission language', companies: 'Azurity, Bend, Applied StemCell' },
                        { domain: 'Payer & Reimbursement', who: 'Market access, hub ops leads', ai: 'RAG on payer policies, formulary data; learns from appeals outcomes', companies: 'Azurity, InformedDNA, COPILOT' },
                        { domain: 'Clinical Protocol', who: 'Clinical operations leads', ai: 'Historical protocol analysis, enrollment patterns, site capabilities', companies: 'Lexitas, Vector' },
                        { domain: 'IRB/Ethics Review', who: 'IRB directors', ai: 'RAG on requirements & submission history; pre-screens for common issues', companies: 'Univo, Vector, Lexitas' },
                        { domain: 'Benefits Navigation', who: 'Hub services managers', ai: 'RAG on payer requirements; drafts appeals from successful PA patterns', companies: 'COPILOT, Azurity' },
                      ].map((row) => (
                        <tr key={row.domain} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.domain}</td>
                          <td className="py-3 px-4">{row.who}</td>
                          <td className="py-3 px-4 text-sm">{row.ai}</td>
                          <td className="py-3 px-4 text-xs text-gray-500">{row.companies}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Vocabulary Note */}
                <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6 mb-6">
                  <h4 className="text-white font-semibold text-sm mb-3">Vocabulary Note</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p><span className="text-white font-medium">RAG</span> (Retrieval-Augmented Generation) — You point AI at a specific knowledge base (like FDA regulations or payer policies) and it searches that source to answer questions. This is how you make AI an expert in <em>your</em> domain.</p>
                    <p><span className="text-white font-medium">Fine-tuning</span> — Training an AI model on your specific data so its outputs match your industry&apos;s standards. A fine-tuned model for regulatory submissions writes like a regulatory professional, not a generic chatbot.</p>
                    <p><span className="text-white font-medium">Captured expertise</span> — Institutional knowledge encoded into AI systems so it compounds instead of walking out the door when your best people retire.</p>
                  </div>
                </div>

                {/* Where to Start */}
                <h4 className="text-white font-semibold text-sm mb-3">Where to Start (Highest Leverage)</h4>
                <div className="space-y-3">
                  {[
                    { num: '1', title: 'Compliance AI across the portfolio', desc: 'Build a single RAG system on the full regulatory corpus. Deploy to every quality and regulatory person across 5+ companies. Fastest cross-portfolio value.' },
                    { num: '2', title: 'FDA regulatory intelligence', desc: 'Azurity and Bend spend heavily on outside consultants. Build RAG on FDA.gov, fine-tune on submission language, put it in internal teams\' hands.' },
                    { num: '3', title: 'Payer intelligence at COPILOT and Azurity', desc: 'RAG on prior auth outcomes, formulary data, and appeals history. Each case processed further fine-tunes the system — captured expertise compounding.' },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 p-4 rounded-lg bg-[#1a1a1a] border border-white/5">
                      <span className="text-emerald-400 font-bold text-lg">{item.num}</span>
                      <div>
                        <h5 className="text-white font-medium text-sm">{item.title}</h5>
                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* S5: Growth Thesis */}
          <section id="growth" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">6</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">The 36-Month Growth Thesis</h3>
                <p className="text-sm text-emerald-400 italic mb-4">The math overwhelmingly favors growth over cost-cutting.</p>

                <p className="text-gray-400 leading-relaxed mb-6">
                  QHP targets ~36-month ownership windows. That&apos;s not long enough for cost-cutting to be the primary strategy. <span className="text-white font-medium">Use AI for growth.</span> Cost and quality are both moving in your favor — AI is getting cheaper to deploy AND better at what it does.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Factor</th>
                        <th className="text-left py-3 px-4 text-emerald-500 font-medium">Growth AI</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Cost-Cutting AI</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { factor: 'Time to impact', growth: '90 days to first revenue lift', cut: '6-12 months before results stabilize' },
                        { factor: 'Exit narrative', growth: '"40% growth, only 30% adopted — massive upside"', cut: '"We cut 25% of costs" — finished story' },
                        { factor: 'Multiple impact', growth: '3-5x EBITDA turns', cut: '0.5-1x EBITDA turns' },
                        { factor: 'On $50M EBITDA co.', growth: '$150-250M added value', cut: '$25-50M added value' },
                        { factor: 'Buyer psychology', growth: 'Paying for a trajectory', cut: 'Paying for a completed restructuring' },
                      ].map((row) => (
                        <tr key={row.factor} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.factor}</td>
                          <td className="py-3 px-4 text-emerald-400/80">{row.growth}</td>
                          <td className="py-3 px-4 text-gray-500">{row.cut}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Allocation Timeline */}
                <h4 className="text-white font-semibold text-sm mb-3">The QHP AI Allocation Formula</h4>
                <div className="space-y-2 mb-6">
                  {[
                    { months: '1-6', label: 'Fund the engine', desc: 'Surgical back-office cuts + SaaS spend audit. Savings fund growth AI.', color: 'border-gray-600' },
                    { months: '6-24', label: 'Growth thrust', desc: 'AI into sales, clinical ops, R&D, manufacturing. Measured against revenue acceleration.', color: 'border-emerald-600' },
                    { months: '24-30', label: 'Compound', desc: 'Maintain growth. Layer in margin optimization.', color: 'border-emerald-500' },
                    { months: '30-36', label: 'Exit prep', desc: 'Growth trajectory + margin polish. Story: "growing X%, margins expanding, Y% still hasn\'t adopted AI."', color: 'border-amber-500' },
                  ].map((item) => (
                    <div key={item.months} className={`flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a] border-l-4 ${item.color}`}>
                      <span className="text-white font-mono font-bold text-sm whitespace-nowrap">M {item.months}</span>
                      <div>
                        <span className="text-white font-medium text-sm">{item.label}</span>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Company directions */}
                <h4 className="text-white font-semibold text-sm mb-3">Company-Level Direction</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Company</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Direction</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">36-Month Priority</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { co: 'Azurity', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI manufacturing throughput → more revenue per facility' },
                        { co: 'COPILOT', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI automates BV/PA → 2-3x case throughput per employee' },
                        { co: 'Lexitas', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI enrollment speed → more trials per year' },
                        { co: 'AutoCruitment', dir: 'Growth (Urgent)', dirColor: 'text-red-400', priority: 'AI targeting + data accumulation — exit value IS the data' },
                        { co: 'Bend Bioscience', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI formulation acceleration → faster turnaround → more clients' },
                        { co: 'Vector', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI recruitment optimization → higher enrollment' },
                        { co: 'Applied StemCell', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI research acceleration → more IP → stronger exit' },
                        { co: 'InformedDNA', dir: 'Growth', dirColor: 'text-emerald-400', priority: 'AI-augmented counselors → 3x patient capacity' },
                        { co: 'Univo IRB', dir: 'Growth via Efficiency', dirColor: 'text-amber-400', priority: 'AI review automation → 2x throughput → more clients at same cost' },
                      ].map((row) => (
                        <tr key={row.co} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.co}</td>
                          <td className={`py-3 px-4 font-semibold ${row.dirColor}`}>{row.dir}</td>
                          <td className="py-3 px-4">{row.priority}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* TIER 3: INVEST                                  */}
        {/* ═══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">Tier 3</span>
            <h2 className="text-2xl font-bold text-white">Invest Where It Compounds</h2>
          </div>

          {/* S6: Data Flywheel */}
          <section id="flywheel" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">7</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Data Flywheel Deployment</h3>
                <p className="text-sm text-amber-400 italic mb-4">Your competitor can buy the same model. They can&apos;t buy your two years of data.</p>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Deploy AI into live operations NOW — imperfectly is fine. The flywheel only starts when AI is live. Each interaction generates data that fine-tunes the models and feeds the RAG systems, making them more accurate over time. <span className="text-white font-medium">This is what turns a tool into a moat.</span>
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Company</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Flywheel Target</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Data Generated</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-medium">Gap Created</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      {[
                        { co: 'Azurity', target: 'Quality prediction', data: 'Batch quality correlated with process params', gap: 'Competitors in 2028 can\'t catch 2026 dataset' },
                        { co: 'COPILOT', target: 'BV/PA automation', data: 'Payer decisions by drug/plan/diagnosis', gap: 'Each case builds proprietary payer intelligence' },
                        { co: 'AutoCruitment', target: 'Targeting optimization', data: 'Patient-to-enrollment conversion at scale', gap: 'Most urgent — this data IS the company value' },
                        { co: 'Lexitas', target: 'Site selection', data: 'Trial outcomes correlated with site characteristics', gap: 'Accumulated track record IS the moat' },
                        { co: 'Vector', target: 'Patient recruitment', data: 'Campaign conversion by demographic/channel', gap: 'Each campaign makes the next one smarter' },
                        { co: 'Bend Bioscience', target: 'Formulation development', data: 'Formulation attempt → outcome data', gap: 'Proprietary intelligence grows with every project' },
                      ].map((row) => (
                        <tr key={row.co} className="border-b border-white/5 hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-medium">{row.co}</td>
                          <td className="py-3 px-4">{row.target}</td>
                          <td className="py-3 px-4">{row.data}</td>
                          <td className="py-3 px-4 text-amber-400/80">{row.gap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* S8: Resource Concentration */}
          <section id="concentration" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">8</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">AI Resource Concentration</h3>
                <p className="text-sm text-amber-400 italic mb-4">The math favors concentration over even distribution.</p>

                <p className="text-gray-400 leading-relaxed mb-6">
                  The company that adopts AI fastest generates more operational data, builds better models, and pulls ahead. This is the feedback loop compounding. Concentrate investment where value ceiling and competitive urgency are highest.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[#1a1a1a] border border-[#EF4B4C]/20">
                    <span className="text-xs font-bold text-[#EF4B4C] uppercase tracking-wider">Tier 1 — Concentrate</span>
                    <div className="mt-3 space-y-2">
                      <div className="text-white font-medium">Azurity <span className="text-gray-500 text-xs ml-1">Very High ceiling</span></div>
                      <div className="text-white font-medium">COPILOT <span className="text-gray-500 text-xs ml-1">Very High ceiling, Med-High urgency</span></div>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl bg-[#1a1a1a] border border-amber-500/20">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Tier 2 — Strong Investment</span>
                    <div className="mt-3 space-y-2">
                      <div className="text-white font-medium">Lexitas <span className="text-gray-500 text-xs ml-1">High ceiling</span></div>
                      <div className="text-white font-medium">AutoCruitment <span className="text-red-400 text-xs ml-1">Very High urgency</span></div>
                      <div className="text-white font-medium">Bend Bioscience <span className="text-gray-500 text-xs ml-1">Med-High ceiling</span></div>
                      <div className="text-white font-medium">Vector <span className="text-gray-500 text-xs ml-1">Medium ceiling</span></div>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl bg-[#1a1a1a] border border-white/5">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tier 3 — Baseline AI Tooling</span>
                    <div className="mt-3 space-y-2">
                      <div className="text-white font-medium">InformedDNA</div>
                      <div className="text-white font-medium">Applied StemCell</div>
                      <div className="text-white font-medium">Univo IRB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* TIER 4: EXECUTE                                 */}
        {/* ═══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">Tier 4</span>
            <h2 className="text-2xl font-bold text-white">Execute the Roadmap</h2>
          </div>

          <section id="roadmap" className="mb-16">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">9</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Implementation Roadmap — 2026</h3>
                <p className="text-sm text-purple-400 italic mb-6">Deploy imperfectly now. Perfect deployments that arrive late lose to imperfect ones that accumulate data.</p>

                <div className="space-y-6">
                  {[
                    { q: 'Q1 2026', label: 'Foundations', color: 'border-blue-500', items: [
                      'Phase 0 Executive AI to all partners and portfolio CEOs',
                      'Portfolio collapsibility assessment (share with IC)',
                      'AI resource concentration model approved',
                      'Expert knowledge audit at Tier 1 companies',
                      'Process maturity assessment for Tier 1 — baseline all priority processes',
                      'Workflow redesign assessment for Tier 1 companies',
                    ]},
                    { q: 'Q2 2026', label: 'First Deployments', color: 'border-emerald-500', items: [
                      'Data flywheel deployments live at Azurity and COPILOT',
                      'Compliance AI prototype (cross-portfolio)',
                      'Deal Intelligence AI tools in use for active pipeline',
                      'Software value test complete for COPILOT and AutoCruitment',
                      'First workflow redesigns implemented at COPILOT and Azurity',
                    ]},
                    { q: 'Q3 2026', label: 'Scale', color: 'border-amber-500', items: [
                      'Tier 2 company AI deployments initiated',
                      'FDA Regulatory Intelligence AI live',
                      'Portfolio monitoring AI dashboard operational',
                      'First AI-driven acquisition target identified',
                    ]},
                    { q: 'Q4 2026', label: 'Measure & Report', color: 'border-purple-500', items: [
                      'AI impact quantification across portfolio (EBITDA)',
                      'LP report with AI value creation attribution',
                      '2027 AI investment allocation based on results',
                      'Update First Principles based on what we\'ve learned',
                    ]},
                  ].map((quarter) => (
                    <div key={quarter.q} className={`p-6 rounded-xl bg-[#1a1a1a] border-l-4 ${quarter.color}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-white font-bold">{quarter.q}</span>
                        <span className="text-gray-500">— {quarter.label}</span>
                      </div>
                      <ul className="space-y-2">
                        {quarter.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-gray-600 mt-0.5">☐</span>
                            <span className="text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Portfolio CTA */}
        <Link href="/portfolio" className="block group">
          <div className="rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-[#EF4B4C]/50 transition-all overflow-hidden">
            <div className="relative h-24 overflow-hidden bg-gradient-to-r from-[#EF4B4C]/10 via-transparent to-transparent">
              <div className="absolute inset-0 flex items-center justify-between px-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Dive into Individual Companies</h3>
                  <p className="text-sm text-gray-400">Full AI transformation strategies for all 9 portfolio companies</p>
                </div>
                <div className="px-5 py-2.5 bg-[#EF4B4C] group-hover:bg-[#d63a3b] text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                  Portfolio Matrix
                  <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/5">
          <p className="text-gray-600 text-sm">
            Governed by <Link href="/strategy/first-principles" className="text-[#EF4B4C] hover:underline">AI First Principles</Link> · Living document, updated quarterly
          </p>
        </div>
      </div>
    </div>
  );
}
