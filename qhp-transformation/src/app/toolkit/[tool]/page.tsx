import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeftIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  PresentationChartBarIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  HeartIcon,
  BanknotesIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';

interface PageProps {
  params: Promise<{ tool: string }>;
}

// ============================================
// RFP AUTOMATION PAGE COMPONENT
// ============================================
function RFPAutomationContent() {
  const companies = [
    { name: 'Catalyst Clinical Research', useCase: 'CRO bid responses', impact: '30% faster' },
    { name: 'Clinical Ink', useCase: 'Technology proposals', impact: 'Higher wins' },
    { name: 'Lexitas', useCase: 'Ophthalmology study bids', impact: 'Lower overhead' },
    { name: 'AutoCruitment', useCase: 'Recruitment proposals', impact: 'Scale ready' },
    { name: 'Bend Bioscience', useCase: 'CDMO service quotes', impact: 'Competitive edge' },
    { name: 'COPILOT', useCase: 'Hub services RFPs', impact: 'Better margins' },
    { name: 'InformedDNA', useCase: 'Testing service bids', impact: 'Market growth' },
    { name: 'Vector Clinical Trials', useCase: 'Site proposals', impact: 'Volume ready' },
  ];

  return (
    <div className="space-y-24">
      {/* Opening Statement */}
      <section className="max-w-3xl">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Clinical research organizations, CDMOs, and service providers in the QHP portfolio respond to 
          <span className="text-white font-semibold"> dozens of RFPs monthly</span>. Each response is a 
          high-stakes opportunity that demands precision, speed, and institutional knowledge.
        </p>
      </section>

      {/* THE BOTTLENECK - Visual */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/Hourglass%20with%20sand%20stuck%20and%20overflowing%2C%20documents%20piling%20up%20around%20it%2C%20time%20pressure%20visualization%2C%20dark%20industrial%20background%2C%20dramatic%20spotlight%2C%20stress%20and%20bottleneck%20concept%2C%203D%20render%2C%20cinematic%20lighting%2C%20gritty%20textures%2C%20high%20contrast?width=1200&height=400&nologo=true"
          alt="The RFP Bottleneck"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center p-8">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">The Problem</span>
            <div className="mt-4 flex items-baseline gap-4">
              <span className="text-7xl font-black text-white">40-80</span>
              <span className="text-xl text-gray-400">hours per major RFP</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Big Number */}
      <section>
        <p className="text-lg text-gray-500 max-w-2xl">
          With significant variation in quality. Your best people are stuck in document assembly 
          instead of strategic positioning.
        </p>
      </section>

      {/* What Each Response Requires */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Every Response Requires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: DocumentTextIcon, text: 'Extract requirements from complex documents' },
            { icon: BriefcaseIcon, text: 'Pull relevant experience and case studies' },
            { icon: CalculatorIcon, text: 'Customize pricing and timelines' },
            { icon: ShieldCheckIcon, text: 'Ensure compliance language is current' },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5">
              <item.icon className="w-8 h-8 text-gray-600 mb-4" />
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Solution - Pull Quote */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent rounded-2xl" />
        <div className="relative px-12">
          <SparklesIcon className="w-10 h-10 text-emerald-400 mb-6" />
          <h2 className="text-4xl font-bold text-white mb-8">The AI Solution</h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            An intelligent RFP response system that transforms your proposal process from a 
            <span className="text-emerald-400 font-semibold"> bottleneck into a competitive advantage</span>.
          </p>
        </div>
      </section>

      {/* Four Capabilities */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              num: '01', 
              title: 'Parses Incoming RFPs', 
              desc: 'Automatically extracts requirements, evaluation criteria, and deadlines',
              color: 'text-blue-400'
            },
            { 
              num: '02', 
              title: 'Retrieves Relevant Content', 
              desc: 'Pulls from a knowledge base of past responses, case studies, and capabilities',
              color: 'text-purple-400'
            },
            { 
              num: '03', 
              title: 'Generates Draft Responses', 
              desc: 'Creates first-draft sections with appropriate tone and detail level',
              color: 'text-emerald-400'
            },
            { 
              num: '04', 
              title: 'Ensures Compliance', 
              desc: 'Flags missing requirements and suggests standard language',
              color: 'text-amber-400'
            },
          ].map((item) => (
            <div key={item.num} className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-white/10 transition-all">
              <span className={`text-5xl font-black ${item.color} opacity-30`}>{item.num}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applicable Companies */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Deployment Across Portfolio</h2>
        <p className="text-3xl font-bold text-white mb-8">8 of 11 Companies Ready</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {companies.map((company) => (
            <div key={company.name} className="p-4 bg-[#1a1a1a] rounded-lg border border-white/5 group hover:border-emerald-500/30 transition-all">
              <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-emerald-400 transition-colors">{company.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{company.useCase}</p>
              <span className="text-xs text-emerald-400 font-medium">{company.impact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Timeline */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Implementation Timeline</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />
          <div className="space-y-12">
            {[
              { phase: 'Phase 1', weeks: 'Weeks 1-4', title: 'Knowledge Base', desc: 'Build knowledge base from historical RFPs and responses', color: 'bg-blue-500' },
              { phase: 'Phase 2', weeks: 'Weeks 5-8', title: 'AI Deployment', desc: 'Deploy AI parsing and draft generation capabilities', color: 'bg-purple-500' },
              { phase: 'Phase 3', weeks: 'Weeks 9-12', title: 'Integration', desc: 'Integrate with CRM and proposal management systems', color: 'bg-emerald-500' },
            ].map((phase) => (
              <div key={phase.phase} className="flex gap-6 items-start">
                <div className={`w-3 h-3 rounded-full ${phase.color} ring-4 ring-[#0d0d0d] relative z-10 mt-2`} />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gray-600 uppercase">{phase.phase}</span>
                    <span className="text-xs text-gray-500">{phase.weeks}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                  <p className="text-gray-500">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes - Big Stats */}
      <section className="py-16 px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/5">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-12 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: '5-15%', label: 'Win Rate Uplift', sub: 'More deals closed' },
            { value: '30-50%', label: 'Faster Turnaround', sub: 'Response time reduction' },
            { value: '100%', label: 'Quality Consistency', sub: 'Standardized output' },
            { value: '∞', label: 'Strategic Focus', sub: 'Team on strategy, not assembly' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// BOARD REPORTING PAGE COMPONENT
// ============================================
function BoardReportingContent() {
  return (
    <div className="space-y-24">
      {/* Opening Statement */}
      <section className="max-w-3xl">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Every portfolio company prepares monthly board packages. Every month. 
          <span className="text-white font-semibold"> The same cycle of data gathering, formatting, and narrative writing</span>—repeated 
          across 11 companies, 132 times per year.
        </p>
      </section>

      {/* THE MONTHLY GRIND - Visual */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/Endless%20cycle%20visualization%2C%20circular%20conveyor%20belt%20of%20spreadsheets%20and%20reports%20repeating%20forever%2C%20Sisyphus%20pushing%20boulder%20of%20documents%2C%20dark%20industrial%20factory%20background%2C%20repetitive%20labor%20concept%2C%203D%20render%2C%20cinematic%20dramatic%20lighting%2C%20gritty%20textures?width=1200&height=400&nologo=true"
          alt="The Monthly Grind"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center p-8">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Current Reality</span>
            <div className="mt-4 flex items-baseline gap-4">
              <span className="text-7xl font-black text-white">3-5</span>
              <span className="text-xl text-gray-400">days per month</span>
            </div>
            <p className="mt-4 text-gray-500 max-w-md">
              CFOs trapped in a monthly ritual of manual data pulls and last-minute scrambling.
            </p>
          </div>
        </div>
      </section>

      {/* What Goes Into a Board Package */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Every Board Package Includes</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ChartBarIcon, title: 'Financial Performance', desc: 'Actual vs. budget with variance analysis' },
            { icon: ArrowTrendingUpIcon, title: 'Operational KPIs', desc: 'Trends, anomalies, and leading indicators' },
            { icon: BriefcaseIcon, title: 'Market & Competitive', desc: 'Intelligence updates and positioning' },
            { icon: RocketLaunchIcon, title: 'Strategic Initiatives', desc: 'Progress tracking and milestone updates' },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5 flex gap-5">
              <item.icon className="w-10 h-10 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Solution */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-transparent rounded-2xl" />
        <div className="relative px-12">
          <PresentationChartBarIcon className="w-10 h-10 text-cyan-400 mb-6" />
          <h2 className="text-4xl font-bold text-white mb-8">Automated Board Intelligence</h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            A system that doesn't just pull data—it <span className="text-cyan-400 font-semibold">thinks about it</span>. 
            Generating narratives, explaining variances, and surfacing insights before you even ask.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              num: '01', 
              title: 'Automatic Data Pulls', 
              desc: 'Connects directly to ERP, CRM, and operational systems. No more manual exports.',
              color: 'text-cyan-400'
            },
            { 
              num: '02', 
              title: 'AI-Generated Narratives', 
              desc: 'Creates executive summaries that explain the "why" behind every variance.',
              color: 'text-blue-400'
            },
            { 
              num: '03', 
              title: 'Portfolio Consistency', 
              desc: 'Standardized reporting format so QHP can compare apples to apples.',
              color: 'text-purple-400'
            },
            { 
              num: '04', 
              title: 'Interactive Drill-Down', 
              desc: 'Click into any number. Get the full story. Perfect for board discussions.',
              color: 'text-emerald-400'
            },
          ].map((item) => (
            <div key={item.num} className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5">
              <span className={`text-5xl font-black ${item.color} opacity-30`}>{item.num}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Universal Applicability - Full Width */}
      <section className="py-12 px-8 bg-[#1a1a1a] rounded-2xl border border-emerald-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Universal Applicability</h3>
            <p className="text-emerald-400 font-medium">All 11 portfolio companies</p>
          </div>
        </div>
        <p className="text-gray-400 max-w-3xl">
          Every company has a board. Every board expects reports. This solution is not industry-specific—it's 
          a fundamental upgrade to how QHP operates across the entire portfolio.
        </p>
      </section>

      {/* QHP Firm Benefits */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Beyond Company Efficiency</h2>
        <p className="text-3xl font-bold text-white mb-8">Firm-Level Superpowers</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Portfolio Visibility', desc: 'Real-time performance dashboard across all companies' },
            { title: 'Pattern Recognition', desc: 'AI identifies cross-portfolio trends before humans do' },
            { title: 'LP Reporting', desc: 'Aggregated data flows directly into quarterly LP updates' },
            { title: 'Early Warning System', desc: 'Automated alerts when metrics trend toward danger zones' },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-black/30 rounded-xl border border-white/5">
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/5">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-12 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: '25-40', unit: 'hrs/mo', label: 'Saved Per Company', sub: 'Across 11 companies = 275-440 hours' },
            { value: '90%', unit: '', label: 'Fewer Errors', sub: 'Automated data = no manual mistakes' },
            { value: '1', unit: 'click', label: 'LP Report Generation', sub: 'Aggregate portfolio view instantly' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-black text-white mb-1">
                {stat.value}<span className="text-2xl text-gray-500">{stat.unit}</span>
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// RECRUITING HR PAGE COMPONENT
// ============================================
function RecruitingHRContent() {
  return (
    <div className="space-y-24">
      {/* Opening */}
      <section className="max-w-3xl">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Growing healthcare companies face 
          <span className="text-white font-semibold"> intense competition for talent</span>. 
          Clinical research professionals, regulatory experts, sales teams, and technical talent—everyone 
          is fighting for the same people.
        </p>
      </section>

      {/* THE WAR FOR TALENT - Visual */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/Tug%20of%20war%20over%20human%20silhouettes%2C%20competing%20corporate%20hands%20reaching%20for%20talent%2C%20people%20being%20pulled%20in%20multiple%20directions%2C%20dark%20industrial%20background%2C%20dramatic%20spotlight%2C%20competition%20for%20workforce%20concept%2C%203D%20render%2C%20cinematic%20lighting%2C%20gritty%20textures?width=1200&height=400&nologo=true"
          alt="The War for Talent"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center p-8">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">The Talent Battlefield</span>
            <h3 className="text-3xl font-black text-white mt-2">Everyone Wants the Same People</h3>
            <p className="mt-2 text-gray-500 max-w-md text-sm">
              The best candidates are gone in 72 hours. If you're not fast, you're last.
            </p>
          </div>
        </div>
      </section>

      {/* The Talent Gap */}
      <section className="grid md:grid-cols-4 gap-4">
        {[
          { icon: AcademicCapIcon, role: 'Clinical Research', desc: 'CRAs, PMs, Medical Writers' },
          { icon: ShieldCheckIcon, role: 'Regulatory & Quality', desc: 'RA, QA, Compliance' },
          { icon: BriefcaseIcon, role: 'Sales & Commercial', desc: 'Territory, Account, Marketing' },
          { icon: BoltIcon, role: 'Technical & Data', desc: 'Engineers, Scientists, Analysts' },
        ].map((item) => (
          <div key={item.role} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5 text-center">
            <item.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-1">{item.role}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Current State Quote */}
      <section className="relative py-12 px-12 bg-gradient-to-r from-red-500/10 via-transparent to-transparent rounded-2xl border-l-4 border-red-500">
        <p className="text-2xl text-gray-300 italic">
          "High recruiting costs, long time-to-fill, and turnover rates are 
          <span className="text-red-400 font-semibold not-italic"> directly impacting growth plans</span> 
          across the portfolio."
        </p>
      </section>

      {/* AI SCREENING - Visual */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/Futuristic%20holographic%20interface%20scanning%20human%20candidates%2C%20profiles%20with%20data%20overlays%2C%20AI%20talent%20detection%2C%20green%20checkmarks%20and%20red%20flags%2C%20dark%20industrial%20background%2C%20cyberpunk%20recruitment%20system%2C%203D%20render%2C%20purple%20and%20blue%20lighting?width=1200&height=400&nologo=true"
          alt="AI Talent Screening"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end p-8">
          <div className="text-right">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">The Intelligence Upgrade</span>
            <h3 className="text-3xl font-black text-white mt-2">AI Sees What Humans Miss</h3>
            <p className="mt-2 text-gray-500 max-w-md text-sm">
              Non-obvious qualifications. Culture fit. Retention risk. All scored before the interview.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-2xl" />
        <div className="relative px-12">
          <UserGroupIcon className="w-10 h-10 text-purple-400 mb-6" />
          <h2 className="text-4xl font-bold text-white mb-8">Talent Intelligence Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            An integrated system that doesn't just find candidates—it 
            <span className="text-purple-400 font-semibold"> predicts success, culture fit, and retention risk</span> 
            before you make the offer.
          </p>
        </div>
      </section>

      {/* Four Capabilities */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              num: '01', 
              title: 'AI Candidate Screening', 
              desc: 'Parse resumes against requirements. Score on multiple dimensions. Surface non-obvious qualifications.',
              color: 'text-purple-400'
            },
            { 
              num: '02', 
              title: 'Culture Fit Prediction', 
              desc: 'Analyze communication style and values alignment before the first interview.',
              color: 'text-pink-400'
            },
            { 
              num: '03', 
              title: 'Retention Forecasting', 
              desc: 'Identify flight risk factors. Recommend interventions. Track program effectiveness.',
              color: 'text-blue-400'
            },
            { 
              num: '04', 
              title: 'Compensation Intelligence', 
              desc: 'Real-time market data analysis ensures competitive offers without overpaying.',
              color: 'text-emerald-400'
            },
          ].map((item) => (
            <div key={item.num} className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5">
              <span className={`text-5xl font-black ${item.color} opacity-30`}>{item.num}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section className="space-y-8">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Feature Deep Dives</h2>
        
        {/* Interview Intelligence */}
        <div className="p-8 bg-gradient-to-r from-[#1a1a1a] to-black/50 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <LightBulbIcon className="w-6 h-6 text-yellow-400" />
            Interview Intelligence
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-400">Generate role-specific interview questions based on job requirements and candidate background</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-400">Analyze candidate responses in real-time for key signals and red flags</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-400">Provide interviewers with smart follow-up suggestions during conversations</p>
            </div>
          </div>
        </div>

        {/* Retention Analytics */}
        <div className="p-8 bg-gradient-to-r from-[#1a1a1a] to-black/50 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <HeartIcon className="w-6 h-6 text-red-400" />
            Retention Analytics
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-400">Identify flight risk based on engagement signals, tenure patterns, and market conditions</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-400">Recommend personalized intervention strategies for high-value employees</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-400">Track effectiveness of retention programs and optimize investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal */}
      <section className="py-12 px-8 bg-[#1a1a1a] rounded-2xl border border-emerald-500/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Universal Applicability</h3>
            <p className="text-emerald-400 font-medium">All 11 portfolio companies</p>
          </div>
        </div>
        <p className="text-gray-400 max-w-3xl">
          Every company is in growth mode. Every company needs talent. Every company has lean HR teams 
          relative to hiring needs. This is a universal accelerator.
        </p>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/5">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-12 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: '20-30%', label: 'Lower Recruiting Costs', sub: 'Efficiency at scale' },
            { value: '25-40%', label: 'Faster Time-to-Fill', sub: 'Speed to productivity' },
            { value: '10-20%', label: 'Reduced Turnover', sub: 'Retention improvement' },
            { value: '↑', label: 'Manager Satisfaction', sub: 'Better candidate quality' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// FINANCIAL FORECASTING PAGE COMPONENT
// ============================================
function FinancialForecastingContent() {
  return (
    <div className="space-y-24">
      {/* Opening */}
      <section className="max-w-3xl">
        <p className="text-2xl text-gray-300 leading-relaxed">
          Portfolio company CFOs are stuck in a world of 
          <span className="text-white font-semibold"> Excel-based models with limited scenario capability</span>. 
          In volatile markets, that's not just inefficient—it's dangerous.
        </p>
      </section>

      {/* REARVIEW MIRROR - Visual */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/Driver%20looking%20in%20rearview%20mirror%20while%20crash%20is%20happening%20ahead%2C%20car%20speeding%20toward%20disaster%2C%20historical%20data%20in%20mirror%2C%20blind%20to%20future%2C%20dark%20dramatic%20scene%2C%203D%20render%2C%20cinematic%20lighting%2C%20danger%20concept?width=1200&height=400&nologo=true"
          alt="Looking in the Rearview Mirror"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center p-8">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">The Danger Zone</span>
            <h3 className="text-3xl font-black text-white mt-2">Driving by Looking Backward</h3>
            <p className="mt-2 text-gray-500 max-w-md text-sm">
              "Our forecasting is only as good as last month's actuals." — Every CFO
            </p>
          </div>
        </div>
      </section>

      {/* CFO Struggles */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">The CFO Struggle</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { problem: 'Forecast Accuracy', desc: 'Volatile markets make historical patterns unreliable' },
            { problem: 'Scenario Planning', desc: 'What-if analysis takes days, not minutes' },
            { problem: 'Cash Flow Prediction', desc: 'Daily/weekly visibility is a manual nightmare' },
            { problem: 'Operational Integration', desc: 'Financial models disconnected from operational drivers' },
          ].map((item) => (
            <div key={item.problem} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5">
              <h3 className="font-bold text-white mb-2">{item.problem}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MULTIPLE FUTURES - Visual */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/Branching%20timeline%20paths%20diverging%20into%20multiple%20futures%2C%20holographic%20scenario%20modeling%2C%20parallel%20financial%20outcomes%2C%20golden%20and%20red%20paths%2C%20dark%20industrial%20background%2C%20decision%20tree%20visualization%2C%203D%20render%2C%20cinematic%20dramatic%20lighting?width=1200&height=400&nologo=true"
          alt="Multiple Scenario Futures"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end p-8">
          <div className="text-right">
            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">The Solution</span>
            <h3 className="text-3xl font-black text-white mt-2">See All the Futures at Once</h3>
            <p className="mt-2 text-gray-500 max-w-md text-sm">
              Unlimited scenarios. Instant comparison. From historians to strategists.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent rounded-2xl" />
        <div className="relative px-12">
          <BanknotesIcon className="w-10 h-10 text-green-400 mb-6" />
          <h2 className="text-4xl font-bold text-white mb-8">Intelligent FP&A Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            A system that <span className="text-green-400 font-semibold">learns from your history, incorporates external signals, 
            and enables rapid scenario analysis</span>—turning your finance team from historians into strategists.
          </p>
        </div>
      </section>

      {/* Four Capabilities */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              num: '01', 
              title: 'Learns From History', 
              desc: 'ML models trained on company-specific patterns, seasonality, and anomalies.',
              color: 'text-green-400'
            },
            { 
              num: '02', 
              title: 'External Data Integration', 
              desc: 'Market trends, economic indicators, and competitor signals automatically incorporated.',
              color: 'text-blue-400'
            },
            { 
              num: '03', 
              title: 'Rapid Scenario Modeling', 
              desc: 'What-if analysis in minutes, not days. Unlimited scenarios, instant comparison.',
              color: 'text-purple-400'
            },
            { 
              num: '04', 
              title: 'Cash Flow Prediction', 
              desc: 'Daily and weekly forecasting with confidence intervals and alert triggers.',
              color: 'text-amber-400'
            },
          ].map((item) => (
            <div key={item.num} className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5">
              <span className={`text-5xl font-black ${item.color} opacity-30`}>{item.num}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenario Types */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Scenario Modeling Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Revenue */}
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-black/50 rounded-xl border border-green-500/20">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <ArrowTrendingUpIcon className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-bold text-white mb-4">Revenue Scenarios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Customer acquisition rate variations</li>
              <li>• Pricing and mix changes</li>
              <li>• Market expansion timing</li>
            </ul>
          </div>
          {/* Cost */}
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-black/50 rounded-xl border border-red-500/20">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
              <CalculatorIcon className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-bold text-white mb-4">Cost Scenarios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Hiring plan alternatives</li>
              <li>• Vendor cost fluctuations</li>
              <li>• Regulatory compliance investments</li>
            </ul>
          </div>
          {/* Integration */}
          <div className="p-6 bg-gradient-to-b from-[#1a1a1a] to-black/50 rounded-xl border border-blue-500/20">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <BriefcaseIcon className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-4">M&A Scenarios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Target modeling</li>
              <li>• Synergy realization timing</li>
              <li>• Integration cost ranges</li>
            </ul>
          </div>
        </div>
      </section>

      {/* QHP Firm Benefits */}
      <section className="py-12 px-8 bg-[#1a1a1a] rounded-2xl">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">QHP Firm-Level Benefits</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: ChartBarIcon, title: 'Better LP Projections', desc: 'Improved accuracy = credibility' },
            { icon: BoltIcon, title: 'Faster IC Decisions', desc: 'Instant scenario analysis' },
            { icon: ShieldCheckIcon, title: 'Risk Visibility', desc: 'Downside scenarios portfolio-wide' },
            { icon: SparklesIcon, title: 'Value Tracking', desc: 'Model initiative impact' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/5">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-12 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: '15-25%', label: 'Forecast Accuracy', sub: 'vs. manual methods' },
            { value: '30-50%', label: 'Planning Cycle Reduction', sub: 'Time to budget' },
            { value: '5-10%', label: 'Working Capital Improvement', sub: 'Better cash management' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// MAIN PAGE DATA & COMPONENT
// ============================================
const toolkitMeta: Record<string, { 
  title: string; 
  image: string; 
  description: string; 
  applicability: string;
  investment: string;
  timeline: string;
  savings: string;
}> = {
  'rfp-automation': {
    title: 'RFP & Proposal Automation',
    image: '/icons/rfp-automation.jpg',
    description: 'AI-powered response generation for faster, higher-quality bids',
    applicability: '8 of 11 portfolio companies',
    investment: '$180K-250K',
    timeline: '12 weeks',
    savings: '$400K-800K/year',
  },
  'board-reporting': {
    title: 'Board Reporting & Analytics',
    image: '/icons/board-reporting.jpg',
    description: 'Automated KPI dashboards and narrative generation',
    applicability: 'All 11 portfolio companies',
    investment: '$120K-180K',
    timeline: '8 weeks',
    savings: '$200K-400K/year',
  },
  'recruiting-hr': {
    title: 'Recruiting & HR Intelligence',
    image: '/icons/recruiting-hr.jpg',
    description: 'Candidate screening, culture fit analysis, retention prediction',
    applicability: 'All 11 portfolio companies',
    investment: '$100K-150K',
    timeline: '10 weeks',
    savings: '$300K-500K/year',
  },
  'financial-forecasting': {
    title: 'Financial Planning & Forecasting',
    image: '/icons/financial-forecasting.jpg',
    description: 'AI-enhanced FP&A with scenario modeling',
    applicability: 'All 11 portfolio companies',
    investment: '$150K-220K',
    timeline: '14 weeks',
    savings: '$250K-450K/year',
  }
};

export async function generateStaticParams() {
  return Object.keys(toolkitMeta).map((tool) => ({ tool }));
}

export default async function ToolkitPage({ params }: PageProps) {
  const { tool } = await params;
  const data = toolkitMeta[tool];
  
  if (!data) {
    notFound();
  }

  // Select the right content component
  const ContentComponent = {
    'rfp-automation': RFPAutomationContent,
    'board-reporting': BoardReportingContent,
    'recruiting-hr': RecruitingHRContent,
    'financial-forecasting': FinancialForecastingContent,
  }[tool];

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header */}
      <div className="relative h-64 overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/80 to-transparent" />
        
        <Link 
          href="/" 
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Cross-Portfolio Toolkit
            </span>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2">{data.title}</h1>
            <p className="text-xl text-gray-300">{data.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <BuildingOffice2Icon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Applicability</div>
                <div className="text-sm font-bold text-white">{data.applicability}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CurrencyDollarIcon className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Investment</div>
                <div className="text-sm font-bold text-white">{data.investment}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Timeline</div>
                <div className="text-sm font-bold text-white">{data.timeline}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Est. Savings</div>
                <div className="text-sm font-bold text-white">{data.savings}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        {ContentComponent && <ContentComponent />}

      </div>
    </div>
  );
}
