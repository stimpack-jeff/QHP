"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function FirmOperations() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                Firm Operations
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight">Firm AI & <span className="text-blue-400">Deal Intelligence</span></h1>
              <p className="text-lg text-gray-300 mt-2 max-w-3xl">
                AI tools for QHP Capital&apos;s own operations — deal sourcing, due diligence, portfolio monitoring, LP reporting, and executive enablement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-16">

        {/* Leadership Imperative */}
        <section>
          <div className="py-6 px-8 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent rounded-xl border-l-4 border-yellow-500 mb-8">
            <h3 className="text-white font-bold mb-2">The Leadership Imperative</h3>
            <p className="text-gray-400 leading-relaxed">
              Organizations where senior leaders personally use AI are roughly <span className="text-white font-medium">3x more likely</span> to capture value from AI initiatives. This isn&apos;t about sponsoring AI projects from a distance. It&apos;s about using AI daily, visibly. When a CEO uses AI to prepare for board meetings, it signals permission for the organization. When they don&apos;t, middle managers have cover to ignore it. <span className="text-yellow-400 font-medium">AI transformation is a leadership behavior, not a technology project.</span>
            </p>
          </div>
        </section>

        {/* Phase 0: Executive AI */}
        <section>
          <div className="relative">
            <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">1</div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">Phase 0: Executive AI</h3>
              <p className="text-sm text-yellow-400 italic mb-4">The single highest-leverage action.</p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Deploy AI tools to every QHP partner and portfolio company CEO. Not optional. This is the foundation because:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: '3x adoption multiplier', desc: 'Senior leaders who use AI personally drive 3x more organizational adoption' },
                  { title: 'Implicit permission', desc: 'Creates permission for the entire organization to embrace AI' },
                  { title: 'Demand-pull', desc: 'Generates "I want this for my team" instead of "IT says we should use AI"' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[#1a1a1a] border border-yellow-500/10">
                    <h5 className="text-yellow-400 font-semibold text-sm">{item.title}</h5>
                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/strategy/phase-0-executive-ai"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-sm font-medium hover:bg-yellow-500/20 transition-colors"
              >
                Full Phase 0 Plan
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Transformation Engine */}
        <section>
          <div className="relative">
            <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">2</div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">Transformation Engine</h3>
              <p className="text-sm text-blue-400 italic mb-4">The deliverable is not a transformation — it&apos;s a transformation engine.</p>

              <p className="text-gray-400 leading-relaxed mb-6">
                AI evolves faster than any plan. A roadmap written in January is outdated by March. Instead of a static plan, build a system that continuously adapts:
              </p>

              <div className="space-y-2">
                {[
                  'Quarterly sprint cycles evaluating new capabilities',
                  'Embedded AI operators who permanently identify applications',
                  'Measure time from new AI capability release to operational deployment — not "AI projects completed"',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-white/5">
                    <span className="text-blue-400 font-bold mt-0.5">→</span>
                    <p className="text-gray-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deal Intelligence */}
        <section>
          <div className="relative">
            <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">3</div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">Deal Intelligence & Acquisition Targeting</h3>
              <p className="text-sm text-blue-400 italic mb-4">Every deal memo now needs an AI scenario.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-3">AI-Powered Deal Process</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Market scanning', desc: 'AI-driven target identification matching QHP\'s thesis' },
                      { label: 'Thesis validation', desc: 'Automated competitive landscape, market sizing, tech assessment' },
                      { label: 'Data room analysis', desc: 'AI-powered document review and risk identification' },
                      { label: 'Comparable analysis', desc: 'Real-time comp sets with AI-synthesized insights' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2 p-3 rounded-lg bg-[#1a1a1a] border border-white/5">
                        <span className="text-blue-400 text-xs font-bold mt-0.5">●</span>
                        <div>
                          <span className="text-white text-sm font-medium">{item.label}</span>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm mb-3">Deal Screening Questions</h4>
                  <div className="space-y-3 p-4 rounded-lg bg-[#1a1a1a] border border-white/5">
                    {[
                      'How does this business change if AI adoption accelerates industry-wide?',
                      'What proprietary data assets does this company have that increase in value with AI? Strip away the software — what\'s left?',
                      'What\'s the AI-driven value creation plan, and what\'s it worth at exit?',
                    ].map((q, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-blue-400 font-bold">{i + 1}.</span>
                        <p className="text-gray-400 text-sm">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Collapsibility Scoring */}
              <h4 className="text-white font-semibold text-sm mb-3">Target Scoring — Collapsibility Assessment</h4>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-500 font-medium">Signal</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-medium">Collapsibility</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    {[
                      { signal: '"Great technology platform"', col: 'High', colColor: 'text-red-400', action: 'Discount aggressively or walk away' },
                      { signal: 'Large proprietary dataset', col: 'Low', colColor: 'text-emerald-400', action: 'Premium justified' },
                      { signal: 'Regulatory validation (FDA, Part 11)', col: 'Low', colColor: 'text-emerald-400', action: 'Strong moat — value appropriately' },
                      { signal: 'Exclusive data integrations (EMR, payer)', col: 'Low', colColor: 'text-emerald-400', action: 'Premium justified' },
                      { signal: '"50-person engineering team built this"', col: 'High', colColor: 'text-red-400', action: 'Pay for the data, not the team' },
                      { signal: 'Declining net revenue retention', col: 'High', colColor: 'text-red-400', action: 'Customers may be self-building — investigate' },
                      { signal: 'HITRUST/SOC 2/FDA Part 11 certified', col: 'Low', colColor: 'text-emerald-400', action: 'Moat against micro-app shift' },
                    ].map((row) => (
                      <tr key={row.signal} className="border-b border-white/5 hover:bg-white/[0.02]">
                        <td className="py-3 px-4 text-white font-medium">{row.signal}</td>
                        <td className={`py-3 px-4 font-semibold ${row.colColor}`}>{row.col}</td>
                        <td className="py-3 px-4">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Disruption Targets */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6">
                <h4 className="text-white font-semibold text-sm mb-2">Disruption Targets — Industries to Scan</h4>
                <p className="text-gray-400 text-sm mb-3">Companies whose moat is &ldquo;we spent $50M building this platform&rdquo; — buy the data and captured expertise at depressed valuations, rebuild with AI:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Hub services / patient support platforms',
                    'Patient recruitment platforms',
                    'Regulatory information management',
                    'Quality management systems',
                    'Healthcare SaaS without proprietary data',
                  ].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Monitoring */}
        <section>
          <div className="relative">
            <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">4</div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">Portfolio Monitoring</h3>
              <p className="text-sm text-blue-400 italic mb-6">Real-time intelligence across all portfolio companies.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Real-time KPI Tracking', desc: 'AI-aggregated dashboards across all 9 portfolio companies' },
                  { title: 'Early Warning Systems', desc: 'Anomaly detection on financial and operational metrics' },
                  { title: 'Cross-Portfolio Benchmarking', desc: 'Compare AI adoption rates, productivity gains, competitive positioning' },
                  { title: 'AI Adoption Scorecard', desc: 'Track time from capability release to operational deployment at each company' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[#1a1a1a] border border-white/5">
                    <h5 className="text-white font-medium text-sm">{item.title}</h5>
                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LP Reporting */}
        <section>
          <div className="relative">
            <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">5</div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">LP Reporting</h3>
              <p className="text-sm text-blue-400 italic mb-6">Quantified AI value creation for investor communications.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Performance Attribution', desc: 'AI-generated analysis of value creation drivers — which AI deployments drove which EBITDA gains' },
                  { title: 'AI Impact Quantification', desc: 'Track and report specific financial impact of AI deployments across the portfolio' },
                  { title: 'Narrative Generation', desc: 'AI-assisted quarterly reports with human review — speed without sacrificing quality' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[#1a1a1a] border border-white/5">
                    <h5 className="text-white font-medium text-sm">{item.title}</h5>
                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* External Research */}
        <section>
          <div className="relative">
            <div className="absolute -left-2 top-0 text-[6rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">6</div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">External Research Synthesis</h3>
              <p className="text-sm text-blue-400 italic mb-6">What the smartest organizations are saying — and what it means for QHP.</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-500 font-medium">Source</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-medium">Key Insight</th>
                      <th className="text-left py-3 px-4 text-gray-500 font-medium">QHP Implication</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    {[
                      { source: 'McKinsey', insight: 'Only 6% are "AI high performers" — they redesign work, not bolt on tools', implication: 'Validates workflow redesign (Value Creation Playbook) and Phase 0' },
                      { source: 'Sequoia Capital', insight: '$600B gap between AI infra spend and revenue', implication: 'Start with revenue-generating apps, not "AI platforms"' },
                      { source: 'a16z', insight: '"Super Staffing" — AI as specialist labor in healthcare', implication: 'Position AI at COPILOT, Vector, Lexitas from labor budgets (10x IT)' },
                      { source: 'Anthropic', insight: '10x compute/year — most knowledge work automatable', implication: 'Build for value whether AI accelerates, plateaus, or hits headwinds' },
                      { source: 'Goldman Sachs', insight: 'AI productivity impact hits 2025-2030', implication: 'QHP hold period aligns perfectly — push adoption now for exit premium' },
                    ].map((row) => (
                      <tr key={row.source} className="border-b border-white/5 hover:bg-white/[0.02]">
                        <td className="py-3 px-4 text-white font-medium">{row.source}</td>
                        <td className="py-3 px-4">{row.insight}</td>
                        <td className="py-3 px-4 text-blue-400/80">{row.implication}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="py-4 px-6 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Cross-cutting:</span> a16z&apos;s &ldquo;Super Staffing&rdquo; maps directly to COPILOT, Vector, Lexitas, AutoCruitment — AI as specialist labor filling the clinical staffing crisis. Goldman&apos;s timing insight: AI&apos;s major productivity impact hits during QHP&apos;s hold period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/5">
          <p className="text-gray-600 text-sm">
            Governed by <Link href="/strategy/first-principles" className="text-[#EF4B4C] hover:underline">AI First Principles</Link> · Connected to <Link href="/value-creation" className="text-[#EF4B4C] hover:underline">Value Creation Playbook</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
