import { promises as fs } from "node:fs";
import path from "node:path";
import { tomorrowWorkshopExercises } from "@/lib/workshop-data";

export type LeaderboardProfile = {
  clientId: string;
  firstName: string;
  companyName: string;
};

export type LeaderboardSubmission = LeaderboardProfile & {
  quizSelections: Record<string, number | undefined>;
  revealedExercises: Record<string, boolean>;
};

export type ExerciseLeaderboardScore = {
  exerciseId: string;
  shortTitle: string;
  correctAnswers: number;
  totalQuestions: number;
  answeredQuestions: number;
  locked: boolean;
};

export type LeaderboardEntry = LeaderboardProfile & {
  totalCorrect: number;
  totalQuestions: number;
  lockedExercises: number;
  lockedQuestions: number;
  answeredQuestions: number;
  scorePercent: number;
  createdAt: string;
  updatedAt: string;
  exerciseScores: ExerciseLeaderboardScore[];
};

type LeaderboardStore = {
  lastResetAt: string | null;
  entries: LeaderboardEntry[];
};

const DEFAULT_STORE: LeaderboardStore = {
  lastResetAt: null,
  entries: [],
};

function getQuestionKey(exerciseId: string, questionId: string) {
  return `${exerciseId}::${questionId}`;
}

function getLeaderboardFilePath() {
  return process.env.WORKSHOP_LEADERBOARD_FILE ?? path.join(process.cwd(), "data", "workshop-leaderboard.json");
}

async function ensureStoreFile() {
  const filePath = getLeaderboardFilePath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  try {
    await fs.access(filePath);
  } catch {
    await writeStore(DEFAULT_STORE);
  }

  return filePath;
}

async function readStore(): Promise<LeaderboardStore> {
  const filePath = await ensureStoreFile();

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<LeaderboardStore>;

    return {
      lastResetAt: parsed.lastResetAt ?? null,
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
    };
  } catch {
    return DEFAULT_STORE;
  }
}

async function writeStore(store: LeaderboardStore) {
  const filePath = getLeaderboardFilePath();
  const tempPath = `${filePath}.tmp`;

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(tempPath, JSON.stringify(store, null, 2), "utf8");
  await fs.rename(tempPath, filePath);
}

function sortEntries(entries: LeaderboardEntry[]) {
  return [...entries].sort((left, right) => {
    if (right.totalCorrect !== left.totalCorrect) {
      return right.totalCorrect - left.totalCorrect;
    }

    if (right.lockedExercises !== left.lockedExercises) {
      return right.lockedExercises - left.lockedExercises;
    }

    return new Date(left.updatedAt).getTime() - new Date(right.updatedAt).getTime();
  });
}

function buildEntry(submission: LeaderboardSubmission, createdAt?: string): LeaderboardEntry {
  const exerciseScores = tomorrowWorkshopExercises.map((exercise) => {
    const answeredQuestions = exercise.quizQuestions.filter((question) => submission.quizSelections[getQuestionKey(exercise.id, question.id)] !== undefined).length;
    const correctAnswers = submission.revealedExercises[exercise.id]
      ? exercise.quizQuestions.filter(
          (question) => submission.quizSelections[getQuestionKey(exercise.id, question.id)] === question.correctOption,
        ).length
      : 0;

    return {
      exerciseId: exercise.id,
      shortTitle: exercise.shortTitle,
      correctAnswers,
      totalQuestions: exercise.quizQuestions.length,
      answeredQuestions,
      locked: Boolean(submission.revealedExercises[exercise.id]),
    } satisfies ExerciseLeaderboardScore;
  });

  const totalCorrect = exerciseScores.reduce((total, exercise) => total + exercise.correctAnswers, 0);
  const totalQuestions = exerciseScores.reduce((total, exercise) => total + exercise.totalQuestions, 0);
  const answeredQuestions = exerciseScores.reduce((total, exercise) => total + exercise.answeredQuestions, 0);
  const lockedExercises = exerciseScores.filter((exercise) => exercise.locked).length;
  const lockedQuestions = exerciseScores.reduce(
    (total, exercise) => total + (exercise.locked ? exercise.totalQuestions : 0),
    0,
  );
  const now = new Date().toISOString();

  return {
    clientId: submission.clientId,
    firstName: submission.firstName,
    companyName: submission.companyName,
    totalCorrect,
    totalQuestions,
    lockedExercises,
    lockedQuestions,
    answeredQuestions,
    scorePercent: totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1)) : 0,
    createdAt: createdAt ?? now,
    updatedAt: now,
    exerciseScores,
  };
}

export async function submitWorkshopLeaderboardEntry(submission: LeaderboardSubmission) {
  const store = await readStore();
  const existing = store.entries.find((entry) => entry.clientId === submission.clientId);
  const nextEntry = buildEntry(submission, existing?.createdAt);
  const remainingEntries = store.entries.filter((entry) => entry.clientId !== submission.clientId);
  const nextEntries = sortEntries([...remainingEntries, nextEntry]);

  await writeStore({
    ...store,
    entries: nextEntries,
  });

  return nextEntry;
}

export async function getWorkshopLeaderboard() {
  const store = await readStore();

  return {
    lastResetAt: store.lastResetAt,
    entries: sortEntries(store.entries),
  };
}

export async function resetWorkshopLeaderboard() {
  const nextStore: LeaderboardStore = {
    lastResetAt: new Date().toISOString(),
    entries: [],
  };

  await writeStore(nextStore);
  return nextStore;
}