"use client";

import { motion } from "framer-motion";
import { 
  ArrowTopRightOnSquareIcon, 
  ChevronRightIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ChartBarSquareIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { partnerData } from "@/lib/partner-data";

// Cross-portfolio toolkit items - things that apply to multiple companies
const toolkitItems = [
  { 
    id: 'rfp', 
    title: 'RFP & Proposal Automation', 
    description: 'AI-powered response generation for faster, higher-quality bids',
    applicability: '8 of 11 companies',
    icon: DocumentTextIcon,
    image: '/icons/rfp-automation.jpg',
    href: '/toolkit/rfp-automation'
  },
  { 
    id: 'board', 
    title: 'Board Reporting & Analytics', 
    description: 'Automated KPI dashboards and narrative generation',
    applicability: 'All 11 companies',
    icon: PresentationChartBarIcon,
    image: '/icons/board-reporting.jpg',
    href: '/toolkit/board-reporting'
  },
  { 
    id: 'recruiting', 
    title: 'Recruiting & HR Intelligence', 
    description: 'Candidate screening, culture fit analysis, retention prediction',
    applicability: 'All 11 companies',
    icon: UserGroupIcon,
    image: '/icons/recruiting-hr.jpg',
    href: '/toolkit/recruiting-hr'
  },
  { 
    id: 'forecasting', 
    title: 'Financial Planning & Forecasting', 
    description: 'AI-enhanced FP&A with scenario modeling',
    applicability: 'All 11 companies',
    icon: CurrencyDollarIcon,
    image: '/icons/financial-forecasting.jpg',
    href: '/toolkit/financial-forecasting'
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 pb-6">
      
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-100 tracking-tight">QHP Capital <span className="text-[#EF4B4C]">AI Transformation</span></h1>
        <p className="text-base text-gray-400 max-w-3xl">
          A systematic approach to deploying AI across firm operations and the portfolio.
        </p>
      </div>

      {/* Leadership - All 5 partners */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Leadership</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {partnerData.map((partner) => (
            <Link 
              href={`/partners/${partner.id}`} 
              key={partner.id}
              className="group"
            >
              <div className="relative h-32 rounded-lg overflow-hidden bg-black border border-white/5 hover:border-white/20 transition-all">
                {partner.image && (
                  <img 
                    src={partner.image}
                    alt={partner.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 p-3">
                  <h4 className="text-sm font-bold text-white leading-tight">{partner.name}</h4>
                  <p className="text-[10px] text-gray-400">{partner.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 1: Demo (1 col) + QHP Transformation (3 categories) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* Azurity Demo - Compact 1 col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/10 group hover:border-emerald-500/30 transition-all cursor-pointer"
          onClick={() => window.open("http://107.172.187.251/", "_blank")}
        >
          <div className="p-5 flex flex-col h-full">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider w-fit mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Demo
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-1">Azurity O2E Platform</h3>
              <p className="text-xs text-gray-500 mb-3">Drug opportunity engine using FDA/CMS data</p>
            </div>
            <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
              <img src="/icons/azurity-demo.jpg" alt="Azurity O2E" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center text-xs font-medium text-emerald-400 group-hover:text-emerald-300">
              Launch Demo
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Executive AI */}
        <Link href="/strategy/phase-0-executive-ai" className="block group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-yellow-500/30 transition-all p-5"
          >
            <div className="flex flex-col h-full">
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-2">QHP Transformation</span>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Executive AI</h3>
              <p className="text-xs text-gray-500 mb-3 flex-1">C-Suite augmented intelligence for partners and CEOs</p>
              <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                <img src="/icons/executive-ai.jpg" alt="Executive AI" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-400">Immediate leverage</span>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Deal Evaluation */}
        <Link href="/strategy/firm-audit" className="block group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-blue-500/30 transition-all p-5"
          >
            <div className="flex flex-col h-full">
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-2">QHP Transformation</span>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Deal Evaluation</h3>
              <p className="text-xs text-gray-500 mb-3 flex-1">AI-powered deal sourcing, screening, and due diligence</p>
              <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                <img src="/icons/deal-evaluation.jpg" alt="Deal Evaluation" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-400">Pre-acquisition</span>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Portfolio Management */}
        <Link href="/strategy/portfolio-management" className="block group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-purple-500/30 transition-all p-5"
          >
            <div className="flex flex-col h-full">
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-2">QHP Transformation</span>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Portfolio Management</h3>
              <p className="text-xs text-gray-500 mb-3 flex-1">Value creation and monitoring for portfolio companies</p>
              <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                <img src="/icons/portfolio-management.jpg" alt="Portfolio Management" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <ChartBarSquareIcon className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-gray-400">Post-acquisition</span>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Row 2: Cross-Portfolio Toolkit */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Cross-Portfolio Toolkit</h3>
          <span className="text-xs text-gray-600">Quick wins deployable across multiple companies</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {toolkitItems.map((item, index) => (
            <Link href={item.href} key={item.id} className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="p-3 bg-[#1a1a1a] rounded-lg border border-white/5 hover:border-white/15 transition-all h-full"
              >
                <div className="w-full h-12 rounded-lg overflow-hidden mb-2">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-1">{item.description}</p>
                <div className="text-[10px] text-emerald-400/70 font-medium">{item.applicability}</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 3: Portfolio Matrix CTA */}
      <Link href="/portfolio" className="block group">
        <div className="rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-[#EF4B4C]/50 transition-all overflow-hidden">
          <div className="relative h-20 overflow-hidden">
            <img src="/icons/portfolio-matrix.jpg" alt="Portfolio Matrix" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Portfolio Intelligence Matrix</h3>
                <p className="text-sm text-gray-300">11 companies analyzed with AI transformation opportunities prioritized by impact</p>
              </div>
              <div className="px-5 py-2.5 bg-[#EF4B4C] group-hover:bg-[#d63a3b] text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                Explore Matrix
                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
