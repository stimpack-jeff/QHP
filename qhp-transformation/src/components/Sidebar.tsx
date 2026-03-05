"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PresentationChartBarIcon, 
  BeakerIcon, 
  BuildingOffice2Icon, 
  RocketLaunchIcon,
  Squares2X2Icon,
  UserCircleIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();
  
  // Helper to check if a path is active
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <aside className="w-64 bg-[#0d0d0d] flex flex-col shrink-0 h-full border-r border-white/5 font-sans">
      {/* Logo Area */}
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EF4B4C] to-[#C92A2A] flex items-center justify-center shadow-lg shadow-red-900/20">
          <span className="text-white font-bold text-lg">Q</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white tracking-wide">QHP CAPITAL</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">AI Transformation</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        
        {/* Dashboard / Home */}
        <NavItem 
          href="/" 
          label="Dashboard" 
          icon={<Squares2X2Icon className="w-5 h-5" />}
          active={pathname === "/"} 
        />

        <div className="pt-6 pb-2 px-3">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Demonstration</p>
        </div>

        {/* The Hook: Azurity Demo */}
        <NavItem 
          href="#" 
          label="Azurity O2E Platform" 
          icon={<PresentationChartBarIcon className="w-5 h-5" />}
          active={false}
          onClick={() => window.open("http://107.172.187.251/", "_blank")}
          external
        />

        <div className="pt-6 pb-2 px-3">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Transformation Strategy</p>
        </div>

        {/* AI First Principles */}
        <NavItem 
          href="/strategy/first-principles" 
          label="AI First Principles" 
          icon={<LightBulbIcon className="w-5 h-5" />}
          active={pathname.includes('first-principles')} 
        />

        {/* Phase 0: C-Suite Superpowers */}
        <NavItem 
          href="/strategy/phase-0-executive-ai" 
          label="Phase 0: Executive AI" 
          icon={<BeakerIcon className="w-5 h-5" />}
          active={pathname.includes('phase-0')} 
        />

        {/* Portfolio Transformation */}
        <NavItem 
          href="/portfolio" 
          label="Portfolio Matrix" 
          icon={<RocketLaunchIcon className="w-5 h-5" />}
          active={pathname.startsWith("/portfolio")} 
        />
        
        <div className="pt-6 pb-2 px-3">
          <p className="text-[10px] uppercase tracking-widest text-red-400/70 font-bold">Restricted</p>
        </div>
        
        <NavItem 
          href="/partners" 
          label="Partner Intelligence" 
          icon={<UserCircleIcon className="w-5 h-5 text-red-400/70" />}
          active={pathname.startsWith("/partners")} 
        />

      </nav>

      {/* Footer / User Info */}
      <div className="p-4 border-t border-white/5 bg-black">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
            <span className="text-xs text-white font-medium">JF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-white font-medium">Jeff Frazier</span>
            <span className="text-xs text-green-400">Operating Partner</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick?: () => void;
  external?: boolean;
}

function NavItem({ href, label, icon, active, onClick, external }: NavItemProps) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`
        group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        ${active 
          ? "bg-[#EF4B4C] text-white shadow-md shadow-red-900/20" 
          : "text-gray-400 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      <div className={`${active ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
        {icon}
      </div>
      <span className="font-medium text-sm">{label}</span>
      {external && (
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
          ↗
        </span>
      )}
    </Link>
  );
}
