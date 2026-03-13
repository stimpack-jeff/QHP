import { NextResponse } from "next/server";
import { submitWorkshopLeaderboardEntry, type LeaderboardSubmission } from "@/lib/workshop-leaderboard";

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeaderboardSubmission>;
    const clientId = sanitizeText(body.clientId, 80);
    const firstName = sanitizeText(body.firstName, 40);
    const companyName = sanitizeText(body.companyName, 80);
    const quizSelections = typeof body.quizSelections === "object" && body.quizSelections ? body.quizSelections : {};
    const revealedExercises = typeof body.revealedExercises === "object" && body.revealedExercises ? body.revealedExercises : {};

    if (!clientId || !firstName || !companyName) {
      return NextResponse.json(
        { error: "Missing required participant information." },
        { status: 400 },
      );
    }

    const entry = await submitWorkshopLeaderboardEntry({
      clientId,
      firstName,
      companyName,
      quizSelections,
      revealedExercises,
    });

    return NextResponse.json({ ok: true, entry });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit workshop score right now." },
      { status: 500 },
    );
  }
}