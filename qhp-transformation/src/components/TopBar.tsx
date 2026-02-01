"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname
  const getBreadcrumbs = () => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return null;
    
    const breadcrumbs: { label: string; href: string }[] = [];
    let currentPath = "";
    
    parts.forEach((part, index) => {
      currentPath += `/${part}`;
      const label = part
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({ label, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Get page title based on route
  const getPageTitle = () => {
    if (pathname === "/" || pathname === "/opening") return "Opening";
    if (pathname === "/credibility") return "Act 1: Credibility";
    if (pathname === "/ai-wave") return "Act 3: The AI Healthcare Wave";
    if (pathname.startsWith("/portfolio")) return "Act 4: Portfolio Transformation";
    if (pathname.startsWith("/real-talk")) return "Act 5: Real Talk";
    if (pathname === "/invitation") return "Act 6: The Invitation";
    return "QHP AI Transformation";
  };

  return (
    <header className="h-12 bg-[#0d0d0d] flex items-center justify-between px-4 shrink-0 border-b border-white/5">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-medium text-gray-200">{getPageTitle()}</h1>
        
        {breadcrumbs && breadcrumbs.length > 1 && (
          <div className="flex items-center gap-1 text-[10px] text-[#E8E8EB]/40">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-1">
                {index > 0 && <span>→</span>}
                <Link 
                  href={crumb.href}
                  className={index === breadcrumbs.length - 1 
                    ? "text-[#E8E8EB]/70" 
                    : "hover:text-[#E8E8EB]/60"
                  }
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </div>
        )}
      </div>
      
      <nav className="flex items-center gap-6 text-xs">
        <Link 
          href="/opening" 
          className={pathname === "/opening" ? "text-[#EF4B4C]" : "text-[#E8E8EB]/50 hover:text-[#E8E8EB]"}
        >
          Start
        </Link>
        <Link 
          href="/portfolio" 
          className={pathname.startsWith("/portfolio") ? "text-[#EF4B4C]" : "text-[#E8E8EB]/50 hover:text-[#E8E8EB]"}
        >
          Portfolio
        </Link>
        <Link 
          href="/real-talk/economics" 
          className={pathname.includes("economics") ? "text-[#EF4B4C]" : "text-[#E8E8EB]/50 hover:text-[#E8E8EB]"}
        >
          Economics
        </Link>
        <Link 
          href="/invitation" 
          className={pathname === "/invitation" ? "text-[#EF4B4C]" : "text-[#E8E8EB]/50 hover:text-[#E8E8EB]"}
        >
          Invitation
        </Link>
      </nav>
    </header>
  );
}
