"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";
import { ArrowLongRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// Impact badge styling
const impactStyles = {
  High: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Medium: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Low: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
};

export default function PortfolioMatrix() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Header with Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src="/icons/portfolio-matrix.jpg" 
          alt="Portfolio Matrix" 
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
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                Portfolio Management
              </span>
              <h1 className="text-4xl font-bold text-white tracking-tight">Portfolio <span className="text-[#EF4B4C]">Intelligence Matrix</span></h1>
              <p className="text-lg text-gray-300 mt-2">
                AI transformation opportunities across the QHP portfolio, prioritized by value creation potential.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-6">
        {/* Legend */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500">Impact Rating:</span>
          <span className="text-[10px] px-2 py-0.5 rounded border bg-emerald-500/15 text-emerald-400 border-emerald-500/30">High</span>
          <span className="text-[10px] px-2 py-0.5 rounded border bg-amber-500/15 text-amber-400 border-amber-500/30">Medium</span>
          <span className="text-[10px] px-2 py-0.5 rounded border bg-gray-500/15 text-gray-400 border-gray-500/30">Low</span>
        </div>

      {/* Matrix View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((company, index) => (
          <Link href={company.path} key={company.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="h-full bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-white/20 hover:bg-[#242424] transition-all group p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {company.industry}
                  </div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${impactStyles[company.impactScore]}`}>
                    {company.impactScore}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {company.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider block mb-1">Primary Opportunity</span>
                    <p className="text-gray-300 text-sm">
                      {company.aiOpportunity}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider block mb-1">90-Day Quick Win</span>
                    <p className="text-gray-500 text-sm">
                      {company.quickWin}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                View Deep Dive <ArrowLongRightIcon className="w-5 h-5 ml-2" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
