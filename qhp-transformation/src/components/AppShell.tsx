"use client";

import { usePathname } from "next/navigation";
import AuthGate from "@/components/AuthGate";
import { isPublicPath } from "@/lib/public-paths";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublic = isPublicPath(pathname);

  const content = isPublic ? (
    <div className="min-h-screen bg-[#0d0d0d]">{children}</div>
  ) : (
    <div className="min-h-screen bg-[#0d0d0d]">
      <main className="overflow-auto p-6 md:p-8">{children}</main>
    </div>
  );

  if (isPublic) {
    return content;
  }

  return <AuthGate>{content}</AuthGate>;
}