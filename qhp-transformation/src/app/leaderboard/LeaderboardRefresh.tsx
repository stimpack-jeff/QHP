"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function LeaderboardRefresh({
  resetAction,
}: {
  resetAction: () => Promise<void>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const interval = window.setInterval(() => {
      router.refresh();
    }, 4000);

    return () => window.clearInterval(interval);
  }, [router]);

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <div className="rounded-full border border-[#2b5e87] bg-[#0C2D48] px-2 py-1 text-xs text-[#d7e4ef] md:text-sm">
        Live
      </div>

      <button
        type="button"
        onClick={() => router.refresh()}
        className="inline-flex items-center justify-center rounded-full border border-[#2b5e87] px-2 py-1 text-xs font-semibold text-[#F5F5F5] transition hover:border-[#FF7F11] hover:text-[#FF7F11] md:text-sm"
      >
        Refresh
      </button>

      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          if (!window.confirm("Reset the leaderboard and dump every participant score? This cannot be undone.")) {
            return;
          }

          startTransition(async () => {
            await resetAction();
            router.refresh();
          });
        }}
        className="inline-flex items-center justify-center rounded-full bg-[#F44336] px-2 py-1 text-xs font-semibold text-[#F5F5F5] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
      >
        {isPending ? "Resetting..." : "Hard reset"}
      </button>
    </div>
  );
}