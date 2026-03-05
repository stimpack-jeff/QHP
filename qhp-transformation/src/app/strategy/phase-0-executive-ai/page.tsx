import Link from 'next/link';
import { 
  ArrowLeftIcon,
  SparklesIcon,
  BoltIcon,
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
  CalculatorIcon,
  DocumentMagnifyingGlassIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

export default async function Phase0Page() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header with Image */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src="/icons/executive-ai.jpg" 
          alt="Executive AI" 
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
              <span className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
                The Limitless Upgrade
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Executive AI</h1>
              <p className="text-xl text-gray-300">C-Suite augmented intelligence for partners and portfolio CEOs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <SparklesIcon className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Priority</div>
                <div className="text-sm font-bold text-white">Immediate</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BoltIcon className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Impact</div>
                <div className="text-sm font-bold text-white">10x Leverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <UserGroupIcon className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Users</div>
                <div className="text-sm font-bold text-white">Partners + CEOs</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LightBulbIcon className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Deployment</div>
                <div className="text-sm font-bold text-white">2-4 Weeks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-24">

          {/* THE COGNITIVE UPGRADE - Big Visual */}
          <section className="relative rounded-2xl overflow-hidden">
            <img 
              src="/icons/limitless.webp"
              alt="The Cognitive Upgrade"
              className="w-full h-64 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">The Transformation</span>
              <h2 className="text-3xl font-bold text-white mt-2">From Human Intelligence to Augmented Intelligence</h2>
            </div>
          </section>

          {/* Why This Matters - Moved to top */}
          <section className="relative py-12 px-12 bg-gradient-to-r from-red-500/10 via-transparent to-transparent rounded-2xl border-l-4 border-red-500">
            <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-4">Why This Matters</h3>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Most PE firms try to "transform" their portfolio companies from the <span className="text-white font-semibold">bottom up</span>.
            </p>
            <p className="text-xl text-red-400 font-bold mt-4">It fails.</p>
            <p className="text-gray-500 mt-4 max-w-2xl">
              Because the CEOs don't deeply understand the capability. They're reading McKinsey slides. They're not power users.
            </p>
          </section>

          {/* Two Pillars */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">The Strategy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Pillar 1: AI Bootcamp */}
              <div className="p-8 bg-gradient-to-b from-[#1a1a1a] to-black/50 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <CommandLineIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Bootcamp</h3>
                <p className="text-gray-400 mb-6">
                  Hands-on sessions for QHP Partners and Portfolio CEOs. 
                  <span className="text-emerald-400 font-semibold"> Get set up. Get dangerous.</span>
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-400">Set up your personal AI agents tuned to your specific role and challenges</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-400">Learn to wield Claude, ChatGPT, and specialized tools like a power user</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-400">Walk out transformed—ready to 10x your leverage immediately</p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Executive Decision Assistant */}
              <div className="p-8 bg-gradient-to-b from-[#1a1a1a] to-black/50 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Executive Decision Assistant</h3>
                <p className="text-gray-400 mb-6">
                  Every leader gets a <span className="text-blue-400 font-semibold">bespoke AI instance</span> tuned to their reality.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-black/30 rounded-lg flex items-start gap-4">
                    <PresentationChartBarIcon className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">For the CEO</p>
                      <p className="text-xs text-gray-500">A "Board Prep" bot that knows every prior board deck and KPI</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg flex items-start gap-4">
                    <CalculatorIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">For the CFO</p>
                      <p className="text-xs text-gray-500">A "Cash Flow Simulator" that predicts liquidity crunches</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg flex items-start gap-4">
                    <DocumentMagnifyingGlassIcon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">For the Deal Partner</p>
                      <p className="text-xs text-gray-500">A "Thesis Validator" that reads CIMs and checks against QHP's criteria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THE OLD WAY CRUMBLING - Visual (Philosophy) */}
          <section className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://image.pollinations.ai/prompt/Crumbling%20concrete%20wall%20with%20text%20DATA%20LAKE%20PROJECT%20shattering%20into%20fragments%2C%20golden%20light%20breaking%20through%20cracks%2C%20destruction%20of%20old%20ways%2C%20dark%20industrial%20background%2C%20debris%20and%20dust%20particles%2C%203D%20render%2C%20cinematic%20dramatic%20lighting%2C%20high%20contrast?width=1200&height=400&nologo=true"
              alt="The Old Way Crumbling"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">The Philosophy</span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-4">We don't start with a data lake project.</h2>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  We start by giving the Generals better weapons.
                </p>
              </div>
            </div>
          </section>

          {/* The Three Outcomes */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Transform the Executives First</h2>
            <p className="text-3xl font-bold text-white mb-8">Three Things Happen</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5 text-center">
                <div className="text-6xl font-black text-yellow-400 opacity-30 mb-4">01</div>
                <h4 className="text-xl font-bold text-white mb-2">You "Get It"</h4>
                <p className="text-gray-500 text-sm">You will understand the ROI intuitively. Not from a spreadsheet. From building something yourself.</p>
              </div>
              <div className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5 text-center">
                <div className="text-6xl font-black text-blue-400 opacity-30 mb-4">02</div>
                <h4 className="text-xl font-bold text-white mb-2">Speed</h4>
                <p className="text-gray-500 text-sm">You will spot opportunities 10x faster. Your pattern recognition gets augmented. Permanently.</p>
              </div>
              <div className="p-8 bg-[#1a1a1a] rounded-xl border border-white/5 text-center">
                <div className="text-6xl font-black text-emerald-400 opacity-30 mb-4">03</div>
                <h4 className="text-xl font-bold text-white mb-2">Credibility</h4>
                <p className="text-gray-500 text-sm">When you tell a Founder to use AI, you aren't reading a slide. You're speaking as a power user.</p>
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8">Implementation Timeline</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500 via-blue-500 to-emerald-500" />
              <div className="space-y-12">
                
                <div className="flex gap-6 items-start">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-[#0d0d0d] relative z-10 mt-2" />
                  <div className="flex-1 p-6 bg-[#1a1a1a] rounded-xl border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <PlayCircleIcon className="w-5 h-5 text-yellow-400" />
                      <span className="text-xs font-bold text-yellow-400 uppercase">Day 1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Partner Workshop</h3>
                    <p className="text-gray-500">"Build Your First App" — 2-hour intensive session with QHP Partners</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#0d0d0d] relative z-10 mt-2" />
                  <div className="flex-1 p-6 bg-[#1a1a1a] rounded-xl border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDaysIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-xs font-bold text-blue-400 uppercase">Week 2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Executive Assistants Deployed</h3>
                    <p className="text-gray-500">Secure, private AI instances customized for each partner's workflow</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#0d0d0d] relative z-10 mt-2" />
                  <div className="flex-1 p-6 bg-[#1a1a1a] rounded-xl border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AcademicCapIcon className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-bold text-emerald-400 uppercase">Month 1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Portfolio CEO Summit</h3>
                    <p className="text-gray-500">The Limitless Rollout — transforming all 11 portfolio company leaders</p>
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
