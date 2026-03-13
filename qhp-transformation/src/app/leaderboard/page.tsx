import { revalidatePath } from "next/cache";
import LeaderboardRefresh from "@/app/leaderboard/LeaderboardRefresh";
import { getWorkshopLeaderboard, resetWorkshopLeaderboard } from "@/lib/workshop-leaderboard";

export const dynamic = "force-dynamic";

async function resetLeaderboardAction() {
  "use server";

  await resetWorkshopLeaderboard();
  revalidatePath("/leaderboard");
  revalidatePath("/workshop");
}

function formatTimestamp(timestamp: string | null) {
  if (!timestamp) {
    return "Not yet reset";
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp));
}

const ROOM_VIEW_LIMIT = 40;

function splitEntriesForColumns<T>(entries: T[], columnCount: number) {
  const columns = Array.from({ length: columnCount }, () => [] as T[]);

  entries.forEach((entry, index) => {
    const columnIndex = Math.floor(index / Math.ceil(entries.length / columnCount));
    columns[Math.min(columnIndex, columnCount - 1)].push(entry);
  });

  return columns;
}

export default async function LeaderboardPage() {
  const leaderboard = await getWorkshopLeaderboard();
  const roomViewEntries = leaderboard.entries.slice(0, ROOM_VIEW_LIMIT);
  const leaderboardColumns = splitEntriesForColumns(roomViewEntries, 4);

  return (
    <div className="min-h-screen bg-[#0C2D48] text-[#F5F5F5]">
      <main className="mx-auto flex min-h-screen w-full max-w-[99vw] flex-col gap-2 px-2 py-2 md:px-3 md:py-3">
        <section className="rounded-[20px] border border-[#2b5e87] bg-linear-to-r from-[#12395c] to-[#0f3350] px-3 py-2 shadow-[0_18px_44px_rgba(7,11,27,0.24)] md:px-4">
          <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 flex-wrap items-center gap-2 md:gap-3">
              <h1 className="text-base font-semibold tracking-tight text-[#f6fbff] md:text-lg">
                Workshop Leaderboard
              </h1>
              <div className="rounded-full border border-[#2b5e87] bg-[#0f3350] px-2.5 py-1 text-xs font-semibold text-[#F5F5F5] md:text-sm">
                {leaderboard.entries.length} competitors
              </div>
              <div className="rounded-full border border-[#2b5e87] bg-[#0f3350] px-2.5 py-1 text-xs text-[#d7e4ef] md:text-sm">
                Showing top {roomViewEntries.length}
              </div>
              <div className="rounded-full border border-[#2b5e87] bg-[#0f3350] px-2.5 py-1 text-xs text-[#d7e4ef] md:text-sm">
                Reset {formatTimestamp(leaderboard.lastResetAt)}
              </div>
            </div>

            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <LeaderboardRefresh resetAction={resetLeaderboardAction} />
            </div>
          </div>
        </section>

        <section className="flex-1 rounded-[24px] border border-[#2b5e87] bg-[#12395c] px-2 py-2 shadow-[0_18px_44px_rgba(7,11,27,0.24)] md:px-3 md:py-3">
          {roomViewEntries.length === 0 ? (
            <div className="rounded-[24px] border border-[#2b5e87] bg-[#0f3350] px-6 py-16 text-center text-lg text-[#d7e4ef]">
              No scores submitted yet.
            </div>
          ) : (
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
              {leaderboardColumns.map((columnEntries, columnIndex) => (
                <div key={columnIndex} className="rounded-[18px] border border-[#2b5e87] bg-[#0f3350] px-2 py-1.5 md:px-2.5 md:py-2">
                  <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_3.5rem] items-center border-b border-[#2b5e87] px-1.5 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8fb4cf] md:grid-cols-[3rem_minmax(0,1fr)_4rem]">
                    <span>Rank</span>
                    <span>Name</span>
                    <span className="text-right">Score</span>
                  </div>

                  <div className="mt-1 space-y-px">
                    {columnEntries.map((entry, index) => {
                      const absoluteIndex = columnIndex * Math.ceil(roomViewEntries.length / 4) + index;

                      return (
                        <div
                          key={entry.clientId}
                          className="grid grid-cols-[2.75rem_minmax(0,1fr)_3.5rem] items-center gap-1.5 rounded-[12px] px-1.5 py-1 md:grid-cols-[3rem_minmax(0,1fr)_4rem]"
                        >
                          <div className="flex items-center">
                            <span className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold md:h-7 md:min-w-7 md:text-xs ${
                              absoluteIndex === 0
                                ? "bg-[#FF7F11] text-[#0C2D48]"
                                : absoluteIndex === 1
                                  ? "bg-[#3282B8] text-[#F5F5F5]"
                                  : absoluteIndex === 2
                                    ? "bg-[#F44336] text-[#F5F5F5]"
                                    : "bg-[#1a4c73] text-[#F5F5F5]"
                            }`}>
                              {absoluteIndex + 1}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-[15px] font-semibold leading-tight text-[#f6fbff] md:text-base xl:text-[17px]">
                              {entry.firstName}
                            </p>
                            <p className="truncate text-[11px] leading-tight text-[#8fb4cf] md:text-xs">
                              {entry.companyName}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-[15px] font-semibold leading-tight text-[#f6fbff] md:text-base xl:text-[17px]">
                              {entry.totalCorrect}/{entry.totalQuestions}
                            </p>
                            <p className="text-[10px] text-[#8fb4cf] md:text-[11px]">{entry.scorePercent}%</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}