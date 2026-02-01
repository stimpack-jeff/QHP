import Link from 'next/link';
import { 
  ArrowLeftIcon,
  ChartBarSquareIcon,
  BellAlertIcon,
  ArrowPathIcon,
  EyeIcon,
  DocumentChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartPieIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';

export default function PortfolioManagementPage() {
  const monitoringCapabilities = [
    {
      num: '01',
      title: 'Real-Time KPI Dashboards',
      desc: 'Automated data pulls from ERP, CRM, and operational systems. No more waiting for monthly reports.',
      color: 'text-emerald-400',
      icon: ChartBarSquareIcon
    },
    {
      num: '02',
      title: 'Early Warning System',
      desc: 'AI detects anomalies and trend shifts before they become problems. Proactive, not reactive.',
      color: 'text-amber-400',
      icon: BellAlertIcon
    },
    {
      num: '03',
      title: 'Cross-Portfolio Benchmarking',
      desc: 'Compare performance across all 11 companies. Identify best practices. Spot outliers instantly.',
      color: 'text-blue-400',
      icon: ArrowPathIcon
    },
    {
      num: '04',
      title: 'Predictive Analytics',
      desc: 'Forecast performance trajectories. Model intervention scenarios. Know the future before it happens.',
      color: 'text-purple-400',
      icon: EyeIcon
    },
  ];

  const valueCreationTools = [
    {
      title: 'Playbook Automation',
      desc: 'Codify the 100-day plan. Track execution. Ensure nothing falls through the cracks.',
      icon: DocumentChartBarIcon
    },
    {
      title: 'Best Practice Dissemination',
      desc: 'What works at Azurity should propagate to Catalyst. AI identifies and distributes winning patterns.',
      icon: LightBulbIcon
    },
    {
      title: 'Board Meeting Prep',
      desc: 'Auto-generated decks, variance explanations, and discussion points. 2 days → 2 hours.',
      icon: PresentationChartBarIcon
    },
    {
      title: 'Initiative Tracking',
      desc: 'Every value creation initiative, tracked. Progress visible. Blockers surfaced automatically.',
      icon: ArrowTrendingUpIcon
    },
  ];

  const portfolioCompanies = [
    'Azurity Pharmaceuticals',
    'Catalyst Clinical Research',
    'Clinical Ink',
    'Bend Bioscience',
    'Applied StemCell',
    'AutoCruitment',
    'COPILOT',
    'InformedDNA',
    'Lexitas',
    'Univo IRB',
    'Vector Clinical Trials'
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header with Image */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src="/icons/portfolio-management.jpg" 
          alt="Portfolio Management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/80 to-transparent" />
        
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
              <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                Post-Acquisition Value Creation
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-2">AI-Powered Portfolio Management</h1>
              <p className="text-xl text-gray-300">Real-time monitoring, early warning systems, and value creation acceleration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <BuildingOffice2Icon className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Companies</div>
                <div className="text-sm font-bold text-white">11 Portfolio</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Visibility</div>
                <div className="text-sm font-bold text-white">Real-Time</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BellAlertIcon className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Alerts</div>
                <div className="text-sm font-bold text-white">Proactive</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowTrendingUpIcon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Value Creation</div>
                <div className="text-sm font-bold text-white">Accelerated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-24">

          {/* Opening Statement */}
          <section className="max-w-3xl">
            <p className="text-2xl text-gray-300 leading-relaxed">
              QHP manages 11 portfolio companies. Each with its own financials, KPIs, initiatives, and challenges. 
              <span className="text-white font-semibold"> Today, visibility is quarterly. Reaction is slow. Patterns go unnoticed.</span>
            </p>
          </section>

          {/* FLYING BLIND - Visual */}
          <section className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://image.pollinations.ai/prompt/Airplane%20cockpit%20with%20all%20instruments%20dark%20and%20broken%2C%20flying%20through%20storm%20clouds%2C%20emergency%20warning%20lights%20flashing%2C%20flying%20blind%20concept%2C%20dramatic%20cinematic%20lighting%2C%20danger%20and%20uncertainty%2C%203D%20render%2C%20gritty%20industrial%20aesthetic%2C%20high%20contrast?width=1200&height=400&nologo=true"
              alt="Flying Blind"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Current State</span>
                <h2 className="text-3xl font-bold text-white mt-2">Flying Blind Between Board Meetings</h2>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { problem: 'Quarterly Visibility', desc: 'By the time you see the data, the moment has passed' },
                  { problem: 'Manual Aggregation', desc: 'Partners spend days compiling portfolio updates' },
                  { problem: 'Siloed Information', desc: 'Best practices trapped inside individual companies' },
                ].map((item) => (
                  <div key={item.problem} className="p-5 bg-[#1a1a1a] rounded-xl border border-red-500/20">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-400 mb-3" />
                    <h4 className="font-bold text-white mb-2">{item.problem}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
          </section>

          {/* THE COMMAND CENTER - Visual */}
          <section className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://image.pollinations.ai/prompt/Futuristic%20mission%20control%20center%20with%20multiple%20holographic%20screens%20showing%20real-time%20data%2C%20blue%20and%20purple%20glow%2C%20operators%20monitoring%20dashboards%2C%20NASA%20style%20command%20room%2C%20dark%20industrial%20aesthetic%2C%203D%20render%2C%20cinematic%20lighting%2C%20portfolio%20monitoring?width=1200&height=450&nologo=true"
              alt="Command Center"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <ChartBarSquareIcon className="w-10 h-10 text-purple-400 mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">The Portfolio Command Center</h2>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Every portfolio company's vital signs in real-time. 
                <span className="text-purple-400 font-semibold"> Anomalies flagged. Trends highlighted. Opportunities surfaced.</span>
              </p>
            </div>
          </section>

          {/* Four Monitoring Capabilities */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Monitoring Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {monitoringCapabilities.map((item) => (
                <div key={item.num} className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0`} />
                    <div>
                      <span className={`text-4xl font-black ${item.color} opacity-30`}>{item.num}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Early Warning Deep Dive */}
          <section className="relative py-12 px-12 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent rounded-2xl border-l-4 border-amber-500">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">Early Warning System</h3>
            <p className="text-2xl text-gray-300 leading-relaxed mb-6">
              AI monitors hundreds of signals across your portfolio. When something deviates from expected patterns, 
              <span className="text-amber-400 font-semibold"> you know before the CEO does.</span>
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Revenue trending below forecast',
                'Cash burn accelerating unexpectedly',
                'Customer churn spiking',
                'Key employee departures',
                'Competitive threats emerging',
                'Regulatory risk indicators',
              ].map((signal, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                  <BellAlertIcon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{signal}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Value Creation Tools */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Beyond Monitoring</h2>
            <p className="text-3xl font-bold text-white mb-8">Active Value Creation</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {valueCreationTools.map((tool) => (
                <div key={tool.title} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <tool.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{tool.title}</h4>
                      <p className="text-sm text-gray-500">{tool.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-Portfolio Intelligence */}
          <section className="py-12 px-8 bg-[#1a1a1a] rounded-2xl border border-blue-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ArrowPathIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Cross-Portfolio Intelligence</h3>
                <p className="text-blue-400 font-medium">The network effect of portfolio data</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              When you have 11 healthcare companies, patterns emerge. What works. What doesn't. 
              AI identifies these patterns and propagates winning strategies across the portfolio.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Vendor Negotiations', desc: 'Leverage combined spend' },
                { title: 'Talent Sharing', desc: 'Move expertise between companies' },
                { title: 'Technology Reuse', desc: 'Build once, deploy everywhere' },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-black/30 rounded-lg text-center">
                  <h5 className="font-bold text-white text-sm mb-1">{item.title}</h5>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The 11 Companies */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Unified View</h2>
            <p className="text-3xl font-bold text-white mb-8">11 Companies, One Command Center</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {portfolioCompanies.map((company) => (
                <div key={company} className="p-4 bg-[#1a1a1a] rounded-lg border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-sm font-medium text-white">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LP Reporting */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Downstream Benefits</h2>
            <div className="p-8 bg-gradient-to-r from-[#1a1a1a] to-black/50 rounded-2xl border border-white/5">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <TableCellsIcon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">LP Reporting Supercharged</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    When portfolio data is clean, connected, and real-time, LP reports write themselves. 
                    Quarterly updates become a button click, not a week-long scramble.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Automated fund reports', 'Performance attribution', 'Benchmark comparison', 'Exit readiness scoring'].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expected Outcomes */}
          <section className="py-16 px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/5">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-12 text-center">Expected Outcomes</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: 'Real-Time', label: 'Visibility', sub: 'vs. quarterly today' },
                { value: '70%', label: 'Faster Reporting', sub: 'Board & LP materials' },
                { value: '2-4 Weeks', label: 'Earlier Detection', sub: 'Of problems & opportunities' },
                { value: '∞', label: 'Pattern Recognition', sub: 'Cross-portfolio insights' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Link to Portfolio Matrix */}
          <section>
            <Link href="/portfolio" className="block group">
              <div className="p-8 bg-[#1a1a1a] rounded-2xl border border-white/10 hover:border-[#EF4B4C]/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EF4B4C]/20 flex items-center justify-center">
                      <ChartPieIcon className="w-6 h-6 text-[#EF4B4C]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#EF4B4C] transition-colors">Explore the Portfolio Matrix</h3>
                      <p className="text-gray-500">See AI transformation opportunities for each of the 11 companies →</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
