"use client";

import { motion } from "framer-motion";
import { 
  ArrowTopRightOnSquareIcon, 
  ChevronRightIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  BookOpenIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { partnerData } from "@/lib/partner-data";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-6">
      
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-100 tracking-tight">QHP Capital <span className="text-[#EF4B4C]">AI Transformation</span></h1>
        <p className="text-base text-gray-400 max-w-3xl">
          Deploying AI that creates measurable value — across the firm and the portfolio.
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

      {/* ─── FOUNDATION ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Foundation</h3>
        <Link href="/strategy/first-principles" className="block group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-[#EF4B4C]/30 transition-all p-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EF4B4C]/20 to-transparent flex items-center justify-center flex-shrink-0">
                <LightBulbIcon className="w-8 h-8 text-[#EF4B4C]/60" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#EF4B4C] transition-colors">AI First Principles</h3>
                <p className="text-sm text-gray-500 mt-1">The irreducible truths governing AI transformation — 1 Governing Premise + 6 Principles. Every decision passes through these.</p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-[#EF4B4C] group-hover:translate-x-0.5 transition-all" />
            </div>
          </motion.div>
        </Link>
      </div>

      {/* ─── VALUE CREATION ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Value Creation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Playbook */}
          <Link href="/value-creation" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30 transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <BookOpenIcon className="w-6 h-6 text-emerald-400/60" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">Transformation Playbook</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">Assess, transform, invest, execute — the system for deploying AI across portfolio companies</p>
                  <div className="flex flex-wrap gap-2">
                    {['Collapsibility', 'Workflow Redesign', 'Expert Knowledge', 'Data Flywheel'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400/70 text-[10px] font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Portfolio */}
          <Link href="/portfolio" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30 transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <RocketLaunchIcon className="w-6 h-6 text-emerald-400/60" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">Portfolio Companies</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">AI transformation plans for each company — opportunities prioritized by impact and feasibility</p>
                  <div className="flex flex-wrap gap-2">
                    {['Azurity', 'COPILOT', 'Bend', 'AutoCruitment', '+5 more'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400/70 text-[10px] font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* ─── FIRM OPERATIONS ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Firm Operations</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Firm AI & Deal Intel */}
          <Link href="/firm-ops" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-blue-500/30 transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-blue-400/60" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">Firm AI & Deal Intelligence</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">AI for QHP itself — deal sourcing, due diligence, portfolio monitoring, LP reporting</p>
                  <div className="flex flex-wrap gap-2">
                    {['Deal Screening', 'Collapsibility Scoring', 'Portfolio Monitoring', 'LP Reporting'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400/70 text-[10px] font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Phase 0: Executive AI */}
          <Link href="/strategy/phase-0-executive-ai" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="h-full rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-yellow-500/30 transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-6 h-6 text-yellow-400/60" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">Phase 0: Executive AI</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">Deploy AI to every partner and portfolio CEO — the single highest-leverage first move</p>
                  <div className="flex flex-wrap gap-2">
                    {['3x Adoption Multiplier', 'Demand-Pull', 'Immediate'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400/70 text-[10px] font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* ─── DEMONSTRATION ─── */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Demonstration</h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30 transition-all overflow-hidden cursor-pointer group"
          onClick={() => window.open("http://107.172.187.251/", "_blank")}
        >
          <div className="relative h-24 overflow-hidden">
            <img src="/icons/azurity-demo.jpg" alt="Azurity O2E" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Azurity O2E Platform</h3>
                  <p className="text-sm text-gray-400">AI drug opportunity engine — 12 board-ready candidates, 126 analyst hours saved</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 font-medium text-sm">
                Launch Demo
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
