import Link from 'next/link';
import { 
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  CubeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BoltIcon,
  SparklesIcon,
  DocumentTextIcon,
  BuildingOffice2Icon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
  GlobeAltIcon,
  BanknotesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default async function FirmAuditPage() {
  const tiers = [
    {
      tier: '0',
      title: 'Blueflame Foundation',
      subtitle: 'General PE Workflows',
      investment: '$150K-200K/yr',
      value: '3,000+ partner hours saved',
      timeline: 'Months 1-3',
      color: 'gray',
      status: 'In Progress',
      components: ['Expert call summaries', 'CIM analysis & Q&A', 'LP meeting prep', 'Knowledge management']
    },
    {
      tier: '1',
      title: 'Healthcare Deal Sourcing',
      subtitle: 'Proprietary Target Identification',
      investment: '$300K + $50K/yr',
      value: '3-5x qualified targets',
      timeline: 'Months 2-4',
      color: 'blue',
      status: 'Planned',
      components: ['Thesis validation engine', 'FDA/CMS intelligence', 'Market timing signals', 'Relationship mapping']
    },
    {
      tier: '2',
      title: 'Due Diligence Acceleration',
      subtitle: 'Healthcare-Specific Risk Assessment',
      investment: '$400K + $75K/yr',
      value: '40% faster DD cycles',
      timeline: 'Months 3-6',
      color: 'cyan',
      status: 'Planned',
      components: ['Regulatory pathway analysis', 'HIPAA compliance', 'Payor mix intelligence', '340B exposure analysis']
    },
    {
      tier: '3',
      title: 'Portfolio Monitoring',
      subtitle: 'Real-Time Visibility',
      investment: '$500K + $100K/yr',
      value: 'Quarterly → real-time',
      timeline: 'Months 4-8',
      color: 'emerald',
      status: 'Planned',
      components: ['Automated KPI dashboards', 'Early warning system', 'Cross-portfolio benchmarking', 'Board prep automation']
    },
    {
      tier: '4',
      title: 'LP/IR Intelligence',
      subtitle: 'Investor Relations Automation',
      investment: '$250K + $50K/yr',
      value: '60-80% time reduction',
      timeline: 'Months 5-9',
      color: 'purple',
      status: 'Planned',
      components: ['Automated quarterly reports', 'LP propensity modeling', 'Conference optimization', 'Performance attribution']
    },
    {
      tier: '5',
      title: 'Healthcare Market Intelligence',
      subtitle: 'Sector-Specific Platform',
      investment: '$600K + $150K/yr',
      value: 'Competitive advantage',
      timeline: 'Months 6-12',
      color: 'amber',
      status: 'Planned',
      components: ['FDA approval tracking', 'CMS reimbursement trends', 'Clinical trials dynamics', 'Precision medicine landscape']
    },
  ];

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    gray: { border: 'border-gray-500/30', bg: 'bg-gray-500/10', text: 'text-gray-400' },
    blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400' },
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
    emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400' },
    amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400' },
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header with Image */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src="/icons/deal-evaluation.jpg" 
          alt="Deal Evaluation" 
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
              <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                Firm-Level AI Transformation
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Deal Evaluation & Firm Operations</h1>
              <p className="text-xl text-gray-300">AI-powered deal sourcing, screening, due diligence, and portfolio intelligence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <MagnifyingGlassIcon className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Stage</div>
                <div className="text-sm font-bold text-white">Pre-Acquisition</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Due Diligence</div>
                <div className="text-sm font-bold text-white">50% Faster</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Risk Detection</div>
                <div className="text-sm font-bold text-white">Enhanced</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ChartBarIcon className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Deal Flow</div>
                <div className="text-sm font-bold text-white">AI-Sourced</div>
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
              QHP Capital has <span className="text-white font-semibold">significant strategic content</span> for 
              firm-level AI transformation. But it's scattered across documents. It's not tiered. It's not actionable.
            </p>
          </section>

          {/* THE SCATTERED STATE - Visual */}
          <section className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://image.pollinations.ai/prompt/Scattered%20documents%20and%20papers%20exploding%20outward%20in%20chaos%2C%20dark%20industrial%20warehouse%20background%2C%20papers%20floating%20in%20disarray%2C%20dramatic%20spotlight%20from%20above%2C%20information%20overload%20visualization%2C%20gritty%20textures%2C%203D%20render%2C%20cinematic%20lighting%2C%20dust%20particles?width=1200&height=400&nologo=true"
              alt="Information Scattered"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Audit Finding</span>
                <h2 className="text-3xl font-bold text-white mt-2">Foundation Exists. Structure Doesn't.</h2>
              </div>
            </div>
          </section>

          {/* The Audit Finding */}
          <section className="relative">
              <div className="grid md:grid-cols-2 gap-6">
                {/* What Exists */}
                <div className="p-6 bg-[#1a1a1a] rounded-xl border border-emerald-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckBadgeIcon className="w-6 h-6 text-emerald-400" />
                    <h3 className="font-bold text-white">What Exists</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      '597-line AI Transformation Strategy',
                      '554-line GP Enhancement Strategy',
                      '660-line Operational AI Playbook',
                      'Individual partner enhancement plans',
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Missing */}
                <div className="p-6 bg-[#1a1a1a] rounded-xl border border-red-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-400" />
                    <h3 className="font-bold text-white">What's Missing</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'No consolidated QHP website section',
                      'No tiered prioritization framework',
                      'No clear messaging framework',
                      'No financial models by tier',
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-red-400">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </section>

          {/* THE DEAL RADAR - Visual */}
          <section className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://image.pollinations.ai/prompt/Futuristic%20holographic%20radar%20screen%20scanning%20for%20targets%2C%20blue%20scanning%20beam%20sweeping%20across%20data%20points%2C%20dark%20control%20room%20environment%2C%20deal%20sourcing%20visualization%2C%20military%20grade%20interface%2C%20glowing%20target%20indicators%2C%203D%20render%2C%20cinematic%20lighting%2C%20industrial%20gritty%20aesthetic?width=1200&height=450&nologo=true"
              alt="Deal Sourcing Radar"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Tier 1-2: Deal Intelligence</span>
              <h2 className="text-3xl font-bold text-white mt-2">Finding Needles. Faster.</h2>
            </div>
          </section>

          {/* Three-Layer Framework */}
          <section className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent rounded-2xl" />
            <div className="relative px-12">
              <CubeIcon className="w-10 h-10 text-blue-400 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-8">The Three-Layer Framework</h2>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
                A structured approach to AI transformation that builds from 
                <span className="text-blue-400 font-semibold"> individual partner capabilities</span> up to 
                firm-wide competitive advantage.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-black/30 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-yellow-400 opacity-30 mb-2">L1</div>
                  <h4 className="font-bold text-white mb-2">Strategic AI</h4>
                  <p className="text-sm text-gray-500">Partner decision-making & differentiation</p>
                </div>
                <div className="p-6 bg-black/30 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-blue-400 opacity-30 mb-2">L2</div>
                  <h4 className="font-bold text-white mb-2">Operational AI</h4>
                  <p className="text-sm text-gray-500">Deal sourcing, DD, monitoring, IR</p>
                </div>
                <div className="p-6 bg-black/30 rounded-xl border border-white/10 text-center">
                  <div className="text-4xl font-black text-emerald-400 opacity-30 mb-2">L3</div>
                  <h4 className="font-bold text-white mb-2">Portfolio AI</h4>
                  <p className="text-sm text-gray-500">Portfolio company value creation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Tiers */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Proposed Transformation Tiers</h2>
            <p className="text-3xl font-bold text-white mb-8">Six Phases of Firm-Level AI</p>
            
            <div className="space-y-6">
              {tiers.map((tier) => {
                const colors = colorClasses[tier.color];
                return (
                  <div key={tier.tier} className={`p-6 bg-[#1a1a1a] rounded-xl border ${colors.border} hover:border-opacity-50 transition-all`}>
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Tier Number */}
                      <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-3xl font-black ${colors.text}`}>{tier.tier}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                            <p className="text-sm text-gray-500">{tier.subtitle}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} flex-shrink-0`}>
                            {tier.status}
                          </span>
                        </div>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <CurrencyDollarIcon className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-400">{tier.investment}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ArrowTrendingUpIcon className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-400">{tier.value}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ClockIcon className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-400">{tier.timeline}</span>
                          </div>
                        </div>
                        
                        {/* Components */}
                        <div className="flex flex-wrap gap-2">
                          {tier.components.map((component, i) => (
                            <span key={i} className="px-2 py-1 bg-black/30 rounded text-xs text-gray-500">
                              {component}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Build vs Buy */}
          <section className="relative py-12 px-12 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent rounded-2xl border-l-4 border-purple-500">
            <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4">Strategic Positioning</h3>
            <h2 className="text-3xl font-bold text-white mb-6">Build vs. Buy Framework</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-black/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-blue-400" />
                  <h4 className="font-bold text-white">Blueflame AI</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">General PE workflows—already implementing</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Expert network call summaries</li>
                  <li>• CIM analysis & document Q&A</li>
                  <li>• LP meeting prep automation</li>
                </ul>
              </div>
              
              <div className="p-6 bg-black/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SparklesIcon className="w-6 h-6 text-emerald-400" />
                  <h4 className="font-bold text-white">Jeff Frazier Custom Builds</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">Healthcare-specific AI capabilities</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• FDA/CMS regulatory intelligence</li>
                  <li>• Clinical trials market dynamics</li>
                  <li>• Healthcare-specific due diligence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Total Investment Overview */}
          <section className="py-16 px-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/5">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-12 text-center">Full Transformation Investment</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '$2.2M+', label: 'Total Build Investment', sub: 'Year 1 development' },
                { value: '$475K', label: 'Annual Operations', sub: 'Ongoing maintenance' },
                { value: '6-12', label: 'Month Timeline', sub: 'Full deployment' },
                { value: '10x+', label: 'Expected ROI', sub: 'Partner time leverage' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Recommended Action</h2>
            <div className="p-8 bg-[#1a1a1a] rounded-2xl border border-emerald-500/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <RocketLaunchIcon className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Create Parallel Content Structure</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Create a "QHP Firm Operations AI Transformation" section that mirrors the depth and sophistication 
                    of the portfolio company transformation work. Tiered. Prioritized. Actionable.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Consolidate scattered content', 'Apply tier framework', 'Build financial models', 'Create messaging'].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
