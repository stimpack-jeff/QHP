import Link from 'next/link';
import { 
  ArrowLeftIcon,
  LightBulbIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CpuChipIcon,
  MapIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function FirstPrinciplesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
        {/* Abstract geometric pattern instead of photo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-12 left-1/4 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute top-20 left-1/3 w-48 h-48 rounded-full border border-white/5" />
          <div className="absolute -bottom-10 right-1/4 w-96 h-96 rounded-full border border-[#EF4B4C]/10" />
          <div className="absolute top-0 right-1/3 w-32 h-32 rounded-full border border-white/5" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        
        {/* Back button */}
        <Link 
          href="/" 
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-5xl mx-auto">
            <div>
              <span className="inline-block px-3 py-1 bg-[#EF4B4C]/20 border border-[#EF4B4C]/30 rounded-full text-[#EF4B4C] text-xs font-bold uppercase tracking-wider mb-3">
                Governing Laws
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-2">AI First Principles</h1>
              <p className="text-xl text-gray-300">The irreducible truths that govern AI transformation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <LightBulbIcon className="w-5 h-5 text-[#EF4B4C]" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Structure</div>
                <div className="text-sm font-bold text-white">1 Axiom + 6 Principles</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ScaleIcon className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Standard</div>
                <div className="text-sm font-bold text-white">Irreducible</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Scope</div>
                <div className="text-sm font-bold text-white">Universal</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapIcon className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Purpose</div>
                <div className="text-sm font-bold text-white">Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-24">

          {/* PREMISE */}
          <section className="relative py-12 px-12 bg-gradient-to-r from-[#EF4B4C]/10 via-transparent to-transparent rounded-2xl border-l-4 border-[#EF4B4C]">
            <h3 className="text-xs font-bold text-[#EF4B4C] uppercase tracking-wider mb-4">Premise</h3>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Do not attempt an AI transformation — of a company, a portfolio, or a technology — without understanding the forces that govern it.
            </p>
            <p className="text-gray-500 mt-6 max-w-3xl">
              These are first principles <em>about AI</em> that anyone undertaking transformation must reckon with. They are not a playbook. They are the governing truths that determine whether a transformation succeeds or fails, moves fast or stalls, creates durable value or temporary advantage.
            </p>
            <p className="text-gray-400 font-semibold mt-4">
              Ignore any one of them and the work will surprise you.
            </p>
          </section>

          {/* WHAT QUALIFIES */}
          <section>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">What Qualifies as a First Principle?</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl">
              An irreducible truth about how AI changes economic value, competition, or organizational structure — one that materially governs the outcome of any effort to incorporate AI into an organization.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Irreducible', desc: 'Cannot be derived from another principle in this set' },
                { label: 'Universal', desc: 'Not specific to an industry, company, or moment' },
                { label: 'Governing', desc: 'Ignoring it predictably leads to failure' },
                { label: 'Falsifiable', desc: 'Makes a claim about reality that could be wrong' },
              ].map((test) => (
                <div key={test.label} className="bg-[#1a1a1a] rounded-xl border border-white/5 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white">{test.label}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{test.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* THE AXIOM */}
          {/* ═══════════════════════════════════════════ */}
          <section id="axiom">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-12">
              {/* Large faded number */}
              <div className="absolute top-4 right-8 text-[12rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                0
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 bg-[#EF4B4C]/20 border border-[#EF4B4C]/30 rounded-full text-[#EF4B4C] text-xs font-bold uppercase tracking-wider">
                    The Axiom
                  </span>
                  <span className="text-xs text-gray-600">Everything derives from this</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl">
                  The marginal cost of reproducible cognitive labor is approaching zero.
                </h2>
                <p className="text-lg text-gray-400 mt-6 max-w-3xl leading-relaxed">
                  Knowledge retrieval, pattern-based analysis, codifiable expertise, code, content — anything that can be specified and repeated — AI produces at near-zero marginal cost per unit.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  This is the economic force that makes AI transformation necessary — and inevitable.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* PRINCIPLE 2: Generation ≠ Validation */}
          {/* ═══════════════════════════════════════════ */}
          <section id="principle-2">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                1
              </div>
              <div className="relative">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Principle 1</span>
                <h2 className="text-3xl font-bold text-white tracking-tight mt-2 mb-4">
                  Generation and Validation Are Different Cost Structures
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                  The cost of <em>generating</em> intelligence approaches zero. The cost of <em>validating</em> it does not.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowTrendingDownIcon className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-400">Approaching Zero</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Generating a draft, an analysis, a recommendation, a block of code. The marginal cost per unit of intelligence produced.
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-amber-400">Not Approaching Zero</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Verifying correctness, ensuring regulatory compliance, validating against reality. Skilled, substantial, and does not trend to zero.
                </p>
              </div>
            </div>

            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent rounded-xl border-l-4 border-amber-500">
              <p className="text-gray-400 leading-relaxed">
                This is not a caveat to the Axiom. It is a separate economic fact — and the one most often underestimated by organizations beginning a transformation. It determines where AI deploys quickly, where it deploys slowly, and what the transformation actually costs.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* PRINCIPLE 3: Value Migrates to the Irreproducible */}
          {/* ═══════════════════════════════════════════ */}
          <section id="principle-3">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                2
              </div>
              <div className="relative">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Principle 2</span>
                <h2 className="text-3xl font-bold text-white tracking-tight mt-2 mb-4">
                  Value Migrates to the Irreproducible
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                  When the cost of reproducing something approaches zero, the value of that thing approaches zero. Value concentrates in whatever remains scarce and hard to replicate.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Reproducible at near-zero cost</h4>
                <ul className="space-y-3">
                  {['Code', 'Analysis', 'Content', 'Pattern-based expertise', 'Standard designs', 'Any capability describable as "it does X"'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowTrendingDownIcon className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Not reproducible</h4>
                <ul className="space-y-3">
                  {[
                    'Proprietary data generated through operations',
                    'Regulatory trust earned over years',
                    'Physical operations and infrastructure',
                    'Exclusive contractual relationships',
                    'Network effects',
                    'Validated compliance status',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-400/60 mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent rounded-xl border-l-4 border-blue-500">
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white font-semibold">The test:</span> Can a well-resourced competitor with AI reproduce this in months? If yes, it is not durable. Point the transformation at what is.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* PRINCIPLE 3: Frontier of Reproducibility Moves */}
          {/* ═══════════════════════════════════════════ */}
          <section id="principle-frontier">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                3
              </div>
              <div className="relative">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Principle 3</span>
                <h2 className="text-3xl font-bold text-white tracking-tight mt-2 mb-4">
                  The Frontier of Reproducibility Moves
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                  &ldquo;Irreproducible&rdquo; is not a fixed category. It is a shrinking frontier. What is hard to reproduce in 2026 may be trivially reproducible in 2028.
                </p>
              </div>
            </div>

            {/* Key insight callout */}
            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-rose-500/5 via-transparent to-transparent rounded-xl border border-white/5">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-rose-400 font-semibold">The technology frontier is ahead of the institutional frontier.</span> Cross-domain synthesis, multi-source strategic reasoning, and scenario-based judgment under uncertainty are achievable today by a single practitioner with domain expertise and AI fluency. What lags is organizational willingness to trust, adopt, and restructure around these capabilities. The waves below reflect when capabilities become <em>widely reproducible by ordinary organizations</em> — not when a skilled practitioner can first achieve them.
              </p>
            </div>

            {/* The Collapse Sequence */}
            <div className="mt-8 space-y-4">
              {[
                { wave: 'Already Here', horizon: '2024–2026', color: 'border-red-500/40 bg-red-500/5', dotColor: 'bg-red-400', headerColor: 'text-red-400',
                  reproducible: 'Content, code, basic analysis, research, translation, first-draft everything, pattern-based domain expertise, structured decision-making, multi-step workflows',
                  falls: 'Junior and mid-level knowledge workers, commodity software, standard reports, routine consulting, most analyst roles' },
                { wave: 'Here for Practitioners, Arriving for Organizations', horizon: '2026–2028', color: 'border-orange-500/30 bg-orange-500/5', dotColor: 'bg-orange-400', headerColor: 'text-orange-400',
                  reproducible: 'Cross-domain synthesis, multi-source strategic reasoning, scenario modeling, complex recommendation with context, graph-based analysis, Monte Carlo-scored decision support',
                  falls: 'Senior consultants, specialized advisory, most professional services not protected by regulation or physical presence' },
                { wave: 'Approaching', horizon: '2027–2030', color: 'border-amber-500/20 bg-amber-500/5', dotColor: 'bg-amber-400', headerColor: 'text-amber-400',
                  reproducible: 'Autonomous judgment in bounded domains, scientific hypothesis generation, real-time adaptive strategy',
                  falls: 'Roles requiring novelty detection within documented domains, high-volume expert judgment' },
                { wave: 'Uncertain', horizon: '2030+', color: 'border-yellow-500/15 bg-yellow-500/5', dotColor: 'bg-yellow-400/60', headerColor: 'text-yellow-400',
                  reproducible: 'Autonomous judgment under genuine ambiguity, physical-world reasoning, open-ended scientific discovery',
                  falls: 'Roles requiring truly unprecedented reasoning with no documented precedent' },
                { wave: 'Last to Fall (If Ever)', horizon: 'Unknown', color: 'border-gray-500/10 bg-white/[0.02]', dotColor: 'bg-gray-500', headerColor: 'text-gray-400',
                  reproducible: 'Physical operations, earned regulatory trust, human relationships, political capital, embodied expertise',
                  falls: 'Manufacturing, clinical care, regulatory relationships, network effects rooted in trust' },
              ].map((w) => (
                <div key={w.wave} className={`rounded-xl border p-6 ${w.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${w.dotColor} shrink-0`} />
                    <span className={`text-sm font-bold ${w.headerColor}`}>{w.wave}</span>
                    <span className="text-xs text-gray-600 ml-auto">{w.horizon}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-5">
                    <div>
                      <span className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">Becomes reproducible</span>
                      <p className="text-sm text-gray-400 mt-1">{w.reproducible}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">Falls in value</span>
                      <p className="text-sm text-gray-500 mt-1">{w.falls}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-rose-500/10 via-transparent to-transparent rounded-xl border-l-4 border-rose-500">
              <p className="text-gray-400 leading-relaxed">
                Each wave doesn&apos;t just eliminate cost — <span className="text-white font-semibold">it eliminates moats.</span> The gap between &ldquo;a practitioner can do this&rdquo; and &ldquo;an organization routinely does this&rdquo; is the adoption lag — and it is where the transformation opportunity lives. The company that closes this gap fastest in its industry captures the value before the market reprices.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* PRINCIPLE 4: Proprietary Feedback Loops */}
          {/* ═══════════════════════════════════════════ */}
          <section id="principle-4">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                4
              </div>
              <div className="relative">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Principle 4</span>
                <h2 className="text-3xl font-bold text-white tracking-tight mt-2 mb-4">
                  Advantage Compounds Only Through Proprietary Feedback Loops
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                  Adopting AI creates temporary advantage. Your competitor buys the same tools and the market reprices.
                </p>
              </div>
            </div>

            {/* The Flywheel Visual */}
            <div className="mt-10 relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 p-12">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  {[
                    { step: 'Deploy AI into live operations', color: 'text-purple-400' },
                    { step: 'Generate proprietary data', color: 'text-blue-400' },
                    { step: 'Score predictions against outcomes', color: 'text-emerald-400' },
                    { step: 'Feed back into the model', color: 'text-amber-400' },
                  ].map((item, i) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full border-2 border-white/10 flex items-center justify-center ${item.color} text-sm font-bold`}>
                          {i + 1}
                        </div>
                        <span className="text-xs text-gray-500 mt-2 text-center max-w-[140px]">{item.step}</span>
                      </div>
                      {i < 3 && (
                        <div className="text-gray-700 text-lg mt-[-16px]">→</div>
                      )}
                    </div>
                  ))}
                  <div className="text-purple-400/50 text-lg mt-[-16px]">↻</div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent rounded-xl border-l-4 border-purple-500">
              <p className="text-gray-400 leading-relaxed">
                The advantage is not in having AI. It is in the irreproducible data generated by running AI against reality, over time. <span className="text-white font-semibold">The act of transforming is itself the moat-building activity.</span> You cannot build the moat first and then transform. Transforming is what builds it.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* PRINCIPLE 5: Cognitive Agent → Architecture */}
          {/* ═══════════════════════════════════════════ */}
          <section id="principle-5">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                5
              </div>
              <div className="relative">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Principle 5</span>
                <h2 className="text-3xl font-bold text-white tracking-tight mt-2 mb-4">
                  Changing the Cognitive Agent Changes the Architecture
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                  Every workflow encodes the cognitive constraints of the agent performing it.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Human constraints workflows evolved around</h4>
                <ul className="space-y-3">
                  {[
                    'Serial processing',
                    'Limited working memory',
                    'Fatigue-correlated error',
                    'Context-switching cost',
                    'Variable-weighting limits',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">AI constraints to design around instead</h4>
                <ul className="space-y-3">
                  {[
                    'Hallucination — plausible but wrong outputs',
                    'No genuine judgment under novel ambiguity',
                    'No physical capability',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ExclamationTriangleIcon className="w-4 h-4 text-amber-400/60 shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent rounded-xl border-l-4 border-cyan-500">
              <p className="text-gray-400 leading-relaxed">
                Inserting AI into a human-optimized workflow preserves bottlenecks AI doesn&apos;t need and adds no guardrails for failures AI does have. <span className="text-white font-semibold">Most failed transformations fail here</span> — not because the AI was wrong, but because it was placed inside an architecture designed for a different kind of mind.
              </p>
              <p className="text-gray-500 mt-4">
                The correct question: if we built this process today with AI as the cognitive agent and humans handling judgment, novelty, and physical work — what would it look like?
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* PRINCIPLE 6: Bottleneck Shifts */}
          {/* ═══════════════════════════════════════════ */}
          <section id="principle-6">
            <div className="relative">
              <div className="absolute -left-2 top-0 text-[8rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                6
              </div>
              <div className="relative">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Principle 6</span>
                <h2 className="text-3xl font-bold text-white tracking-tight mt-2 mb-4">
                  The Bottleneck Shifts from Execution to Direction
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                  When execution — building, analyzing, coding, drafting — is near-free, execution stops being the bottleneck. The constraint becomes knowing what to build and why.
                </p>
              </div>
            </div>

            {/* Before / After */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs text-gray-700 font-bold uppercase tracking-wider">Before AI</div>
                <div className="space-y-4 mt-4">
                  <div className="text-center">
                    <span className="text-sm font-semibold text-gray-500">The bottleneck</span>
                    <div className="text-2xl font-bold text-gray-400 mt-1">Technical capability</div>
                    <p className="text-xs text-gray-600 mt-2">Who can build it? How long? How much?</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border border-emerald-500/20 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs text-emerald-400/70 font-bold uppercase tracking-wider">After AI</div>
                <div className="space-y-4 mt-4">
                  <div className="text-center">
                    <span className="text-sm font-semibold text-gray-500">The bottleneck</span>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">Domain expertise</div>
                    <p className="text-xs text-gray-600 mt-2">Who knows what to build? What problem matters? What will work?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 py-6 px-8 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent rounded-xl border-l-4 border-emerald-500">
              <p className="text-gray-400 leading-relaxed">
                A transformation led by technologists who don&apos;t know the domain will build the wrong things. A transformation led by <span className="text-white font-semibold">domain experts with AI in hand</span> will find opportunities the technologists would never see.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* CLOSING */}
          {/* ═══════════════════════════════════════════ */}
          <section className="border-t border-white/10 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {/* Summary all 6 */}
              <div className="md:col-span-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Summary</h3>
                <div className="space-y-4">
                  {[
                    { num: '0', label: 'The Axiom', insight: 'The marginal cost of reproducible cognitive labor is approaching zero.', color: 'text-[#EF4B4C]', border: 'border-[#EF4B4C]/20' },
                    { num: '1', label: 'Generation ≠ Validation', insight: 'Generation costs trend to zero. Validation costs do not. Budget for both.', color: 'text-amber-400', border: 'border-amber-500/20' },
                    { num: '2', label: 'Value → Irreproducible', insight: 'What AI can reproduce has no durable value. Point the transformation at what it cannot.', color: 'text-blue-400', border: 'border-blue-500/20' },
                    { num: '3', label: 'The Frontier Moves', insight: 'Irreproducible is a shrinking frontier. The technology is ahead of institutions. The adoption gap is the opportunity.', color: 'text-rose-400', border: 'border-rose-500/20' },
                    { num: '4', label: 'Feedback Loops Compound', insight: 'Transforming is what builds the moat. The data flywheel starts when AI goes live.', color: 'text-purple-400', border: 'border-purple-500/20' },
                    { num: '5', label: 'New Agent, New Architecture', insight: 'Workflows encode human constraints. AI has different ones. Redesign, don\'t bolt on.', color: 'text-cyan-400', border: 'border-cyan-500/20' },
                    { num: '6', label: 'Direction > Execution', insight: 'When building is free, knowing what to build is the scarcity. Domain experts lead.', color: 'text-emerald-400', border: 'border-emerald-500/20' },
                  ].map((p) => (
                    <div key={p.num} className={`flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg border ${p.border}`}>
                      <span className={`text-lg font-black ${p.color} w-6 text-center shrink-0`}>{p.num}</span>
                      <div>
                        <span className={`text-sm font-bold ${p.color}`}>{p.label}</span>
                        <p className="text-sm text-gray-500 mt-0.5">{p.insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar note */}
              <div className="md:col-span-2">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">About This Document</h3>
                <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                  <p>
                    A principle is added only if it is irreducible, not derivable from existing principles, and governs the outcome of transformation.
                  </p>
                  <p>
                    Everything else — taxonomies, frameworks, transition methodologies, portfolio applications — belongs in derived documents.
                  </p>
                  <p className="text-gray-600 text-xs">
                    Jeff Frazier · March 2026
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
