"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { partnerData } from "@/lib/partner-data";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function PartnerIntelligence() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">QHP <span className="text-[#EF4B4C]">Partners</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Leadership profiles and background research for the QHP Capital partnership team.
        </p>
      </div>

      {/* Partner Cards - Horizontal Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partnerData.map((partner, index) => (
          <Link href={`/partners/${partner.id}`} key={partner.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-40 bg-black rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all shadow-lg hover:shadow-xl"
            >
              {/* Image - Right Aligned */}
              {partner.image ? (
                <div className="absolute right-0 top-0 h-full w-1/2">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className={`absolute right-0 top-0 h-full w-1/3 ${partner.imageColor} opacity-20`}></div>
              )}
              
              {/* Content - Left Aligned */}
              <div className="absolute inset-0 flex flex-col justify-center p-5 max-w-[60%]">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-medium">{partner.role}</p>
                <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">{partner.name}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-1">{partner.focusArea}</p>
                
                <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
                  View Profile <ArrowLongRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Subtle private link */}
      <div className="pt-8 text-center">
        <Link href="/partners/strategy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
          Strategy Notes
        </Link>
      </div>
    </div>
  );
}
