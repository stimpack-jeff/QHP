"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  closingTakeaways,
  tomorrowDownloadBundles,
  type Exercise,
  tomorrowWorkshopExercises,
} from "@/lib/workshop-data";

type QuizSelections = Record<string, number | undefined>;
type RevealState = Record<string, boolean>;

type StoredQuizState = {
  version: number;
  quizSelections: QuizSelections;
  revealedExercises: RevealState;
};

type ParticipantProfile = {
  clientId: string;
  firstName: string;
  companyName: string;
};

const QUIZ_STORAGE_KEY = "qhp-workshop-quiz-state-v1";
const QUIZ_STORAGE_VERSION = 1;
const PROFILE_STORAGE_KEY = "qhp-workshop-profile-v1";

const accentPanels = [
  "from-[#3282B8] via-[#123b5e] to-[#0C2D48]",
  "from-[#FF7F11] via-[#123b5e] to-[#0C2D48]",
  "from-[#F44336] via-[#123b5e] to-[#0C2D48]",
  "from-[#3282B8] via-[#0C2D48] to-[#FF7F11]",
] as const;

const accentChips = [
  "border-[#4692c5] bg-[#3282B8] text-[#F5F5F5] shadow-[0_12px_30px_rgba(50,130,184,0.24)]",
  "border-[#ff922d] bg-[#FF7F11] text-[#0C2D48] shadow-[0_12px_30px_rgba(255,127,17,0.24)]",
  "border-[#f6675d] bg-[#F44336] text-[#F5F5F5] shadow-[0_12px_30px_rgba(244,67,54,0.22)]",
  "border-[#4692c5] bg-[#3282B8] text-[#F5F5F5] shadow-[0_12px_30px_rgba(50,130,184,0.24)]",
] as const;

const primaryActionClass =
  "inline-flex items-center gap-2 rounded-full border border-[#ff922d] bg-[#FF7F11] px-4 py-2 text-sm font-semibold text-[#0C2D48] shadow-[0_14px_30px_rgba(255,127,17,0.28)] transition hover:border-[#ffab54] hover:bg-[#ff921f] hover:text-[#09243b]";

const coralActionClass =
  "inline-flex items-center gap-2 rounded-full border border-[#f6675d] bg-[#F44336] px-4 py-2 text-sm font-semibold text-[#F5F5F5] shadow-[0_14px_30px_rgba(244,67,54,0.26)] transition hover:border-[#ff8178] hover:bg-[#ff574a]";

function createClientId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `participant-${Math.random().toString(36).slice(2, 10)}`;
}

function getQuestionKey(exerciseId: string, questionId: string) {
  return `${exerciseId}::${questionId}`;
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF7F11]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#f6fbff] md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-[#d7e4ef] md:text-lg">{description}</p>
    </div>
  );
}

function PromptCard({
  promptId,
  prompt,
  copiedPrompt,
  onCopy,
}: {
  promptId: string;
  prompt: string;
  copiedPrompt: string | null;
  onCopy: (promptId: string, prompt: string) => Promise<void>;
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#2b5e87] bg-[#12395c] shadow-[0_20px_60px_rgba(7,11,27,0.32)]">
      <div className="flex items-center justify-between gap-4 border-b border-[#2b5e87] px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
            Participant Prompt
          </p>
          <p className="mt-1 text-sm text-[#c4d6e5]">
            Ready to paste into Claude, ChatGPT, or Gemini.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void onCopy(promptId, prompt)}
          className={primaryActionClass}
        >
          <ClipboardDocumentCheckIcon className="h-4 w-4" />
          {copiedPrompt === promptId ? "Copied" : "Copy prompt"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-5 py-5 text-sm leading-7 text-[#F5F5F5]">
        {prompt}
      </pre>
    </div>
  );
}

function getOptionClass({
  isSelected,
  isCorrect,
  isWrongSelection,
  revealed,
}: {
  isSelected: boolean;
  isCorrect: boolean;
  isWrongSelection: boolean;
  revealed: boolean;
}) {
  if (!revealed) {
    return isSelected
      ? "border-[#ff922d] bg-[#FF7F11] text-[#0C2D48] shadow-[0_14px_30px_rgba(255,127,17,0.28)]"
      : "border-[#4692c5] bg-[#1a4c73] text-[#F5F5F5] hover:border-[#67a6d1] hover:bg-[#24618f] hover:text-white";
  }

  if (isCorrect) {
    return "border-[#4692c5] bg-[#3282B8] text-[#F5F5F5] shadow-[0_14px_30px_rgba(50,130,184,0.26)]";
  }

  if (isWrongSelection) {
    return "border-[#f6675d] bg-[#F44336] text-[#F5F5F5] shadow-[0_14px_30px_rgba(244,67,54,0.24)]";
  }

  return "border-[#2b5e87] bg-[#12395c] text-[#a8c5dc]";
}

function ExerciseCard({
  exercise,
  index,
  nextExercise,
  copiedPrompt,
  onCopy,
  selections,
  revealed,
  onSelect,
  onReveal,
}: {
  exercise: Exercise;
  index: number;
  nextExercise?: Exercise;
  copiedPrompt: string | null;
  onCopy: (promptId: string, prompt: string) => Promise<void>;
  selections: QuizSelections;
  revealed: boolean;
  onSelect: (exerciseId: string, questionId: string, optionIndex: number) => void;
  onReveal: (exerciseId: string) => void;
}) {
  const panelStyle = accentPanels[index % accentPanels.length];
  const chipStyle = accentChips[index % accentChips.length];
  const answeredCount = exercise.quizQuestions.filter(
    (question) => selections[question.id] !== undefined,
  ).length;
  const correctCount = exercise.quizQuestions.filter(
    (question) => selections[question.id] === question.correctOption,
  ).length;
  const reviewCues = exercise.watchFor.slice(0, 2);

  return (
    <article id={exercise.id} className={`workshop-panel workshop-panel-energetic rounded-[34px] border border-[#2b5e87] bg-linear-to-br p-6 shadow-[0_26px_72px_rgba(8,12,30,0.34)] md:p-8 ${panelStyle}`}>
      <div className="mb-6 rounded-3xl border border-[#2b5e87] bg-[#12395c] p-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-sm">
            <div className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] ${
              index === 0
                ? "bg-[#FF7F11] text-[#0C2D48] shadow-[0_14px_30px_rgba(255,127,17,0.30)]"
                : "border border-[#4692c5] bg-[#1a4c73] text-[#F5F5F5]"
            }`}>
              {index === 0 ? "Start Here" : `Step ${index + 1} Of ${tomorrowWorkshopExercises.length}`}
            </div>
            <p className="mt-3 text-sm leading-7 text-[#d7e4ef]">
              Copy the prompt into Claude, ChatGPT, Gemini, or another model, review the response, then lock the quiz once the room has discussed what happened.
            </p>
          </div>

          <div className="grid gap-3 xl:max-w-xl xl:flex-1">
            <div className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F5F5] md:grid-cols-3">
              <div className="rounded-[18px] border border-[#ff922d] bg-[#FF7F11] px-3 py-3 text-center text-[#0C2D48] shadow-[0_12px_26px_rgba(255,127,17,0.26)]">1 Copy prompt into AI</div>
              <div className="rounded-[18px] border border-[#4692c5] bg-[#3282B8] px-3 py-3 text-center text-[#F5F5F5] shadow-[0_12px_26px_rgba(50,130,184,0.24)]">2 Review the result</div>
              <div className="rounded-[18px] border border-[#f6675d] bg-[#F44336] px-3 py-3 text-center text-[#F5F5F5] shadow-[0_12px_26px_rgba(244,67,54,0.24)]">3 Take the quiz and lock it</div>
            </div>

            <div className="rounded-[20px] border border-[#2b5e87] bg-[#12395c] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                What To Look For
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#d7e4ef]">
                {reviewCues.map((item) => (
                  <li key={item} className="flex gap-3">
                    <LightBulbIcon className="mt-0.5 h-4 w-4 flex-none text-[#FF7F11]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#2b5e87] bg-[#12395c] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F5F5F5]">
              {exercise.category}
            </span>
            <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${chipStyle}`}>
              {exercise.duration}
            </span>
            <span className="rounded-full border border-[#2b5e87] bg-[#12395c] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b7cedf]">
              {exercise.fileCount}
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
              Exercise {index + 1}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#f6fbff] md:text-[2.25rem]">
              {exercise.title}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#9fc0d9]">
              {exercise.intelligence}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#d7e4ef] md:text-lg">
              {exercise.description}
            </p>
          </div>

          <div className="rounded-3xl border border-[#2b5e87] bg-[#12395c] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
              Objective
            </p>
            <p className="mt-3 text-sm leading-7 text-[#d7e4ef]">{exercise.objective}</p>
          </div>

          <div className="rounded-3xl border border-[#2b5e87] bg-linear-to-br from-[#19476d] to-[#0f3350] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
              Source Files
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exercise.sourceFiles.map((fileName) => (
                <span
                  key={fileName}
                  className="inline-flex items-center gap-2 rounded-full border border-[#2b5e87] bg-[#0f3350] px-3 py-2 text-sm text-[#F5F5F5] shadow-[0_10px_24px_rgba(10,14,34,0.2)]"
                >
                  <PresentationChartLineIcon className="h-4 w-4 flex-none text-[#3282B8]" />
                  {fileName}
                </span>
              ))}
            </div>
          </div>

          <details className="rounded-3xl border border-[#2b5e87] bg-linear-to-br from-[#19476d] to-[#0f3350] p-5">
            <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
              Facilitator Notes And Expected Outputs
            </summary>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                  Expected Outputs
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d7e4ef]">
                  {exercise.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-[#3282B8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                  Watch For
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d7e4ef]">
                  {exercise.watchFor.map((item) => (
                    <li key={item} className="flex gap-3">
                      <LightBulbIcon className="mt-0.5 h-5 w-5 flex-none text-[#FF7F11]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>

          <a
            href={exercise.downloadHref}
            download
            className={`${primaryActionClass} px-5 py-3`}
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            {exercise.downloadLabel}
            <span className="text-[#d6e1ea]">{exercise.downloadSize}</span>
          </a>

          {nextExercise ? (
            <a
              href={`#${nextExercise.id}`}
              className={`${coralActionClass} px-5 py-3`}
            >
              Next: {nextExercise.shortTitle}
            </a>
          ) : (
            <a
              href="#scorecard"
              className={`${coralActionClass} px-5 py-3`}
            >
              Finish at scorecard
            </a>
          )}
        </div>

        <div className="space-y-6">
          <PromptCard
            promptId={exercise.id}
            prompt={exercise.prompt}
            copiedPrompt={copiedPrompt}
            onCopy={onCopy}
          />

          <div className="rounded-[28px] border border-[#2b5e87] bg-[#12395c] p-5 shadow-[0_20px_50px_rgba(8,12,30,0.32)] md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                  Quiz
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-[#f6fbff]">
                  Check your understanding
                </h4>
                <p className="mt-2 text-sm leading-7 text-[#d7e4ef]">{exercise.quizIntro}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-[#2b5e87] bg-[#0f3350] px-4 py-2 text-sm font-semibold text-[#F5F5F5]">
                  {revealed
                    ? `${correctCount}/${exercise.quizQuestions.length} locked`
                    : `${answeredCount}/${exercise.quizQuestions.length} answered`}
                </div>
                <button
                  type="button"
                  onClick={() => onReveal(exercise.id)}
                  disabled={revealed || answeredCount !== exercise.quizQuestions.length}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    revealed
                      ? "cursor-not-allowed border-[#4692c5] bg-[#3282B8] text-[#F5F5F5]"
                      : answeredCount === exercise.quizQuestions.length
                        ? "border-[#ff922d] bg-[#FF7F11] text-[#0C2D48] hover:border-[#ffab54] hover:bg-[#ff921f]"
                        : "cursor-not-allowed border-[#2b5e87] bg-[#0f3350] text-[#a8c5dc]"
                  }`}
                >
                  {revealed ? "Quiz locked" : "Reveal answers and lock"}
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {exercise.quizQuestions.map((question, questionIndex) => {
                const selectedOption = selections[question.id];

                return (
                  <div
                    key={question.id}
                    className="rounded-3xl border border-[#2b5e87] bg-linear-to-r from-[#19476d] to-[#0f3350] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                      Question {questionIndex + 1}
                    </p>
                    <h5 className="mt-2 text-lg font-semibold text-[#f6fbff]">{question.question}</h5>

                    <div className="mt-5 grid gap-2">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selectedOption === optionIndex;
                        const isCorrect = question.correctOption === optionIndex;
                        const isWrongSelection = isSelected && !isCorrect;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => onSelect(exercise.id, question.id, optionIndex)}
                            disabled={revealed}
                            className={`rounded-[18px] border px-4 py-3 text-left text-sm leading-6 transition ${revealed ? "cursor-not-allowed" : "cursor-pointer"} ${getOptionClass({
                              isSelected,
                              isCorrect,
                              isWrongSelection,
                              revealed,
                            })}`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {revealed ? (
                      <div className="mt-4 rounded-[18px] border border-[#2b5e87] bg-[#0f3350] p-4 text-sm leading-7 text-[#d7e4ef]">
                        <p className="font-semibold text-[#f6fbff]">
                          {selectedOption === question.correctOption ? "Correct." : "Answer key."}
                        </p>
                        <p className="mt-2">{question.explanation}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-[20px] border border-[#2b5e87] bg-[#0f3350] px-4 py-3 text-sm text-[#d7e4ef]">
              {revealed
                ? "Answers are revealed and this quiz is now locked on this browser. Participants cannot change selections after seeing the key."
                : answeredCount === exercise.quizQuestions.length
                  ? "All questions answered. Reveal answers to lock this quiz into the official competition score. If this is your first locked exercise, you will be asked for first name and company for the leaderboard."
                  : `Answered ${answeredCount} of ${exercise.quizQuestions.length}. Finish every question before the score can be locked.`}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WorkshopPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [quizSelections, setQuizSelections] = useState<QuizSelections>({});
  const [revealedExercises, setRevealedExercises] = useState<RevealState>({});
  const [currentExerciseId, setCurrentExerciseId] = useState<string>(tomorrowWorkshopExercises[0]?.id ?? "");
  const [participantProfile, setParticipantProfile] = useState<ParticipantProfile | null>(null);
  const [pendingExerciseId, setPendingExerciseId] = useState<string | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileDraftFirstName, setProfileDraftFirstName] = useState("");
  const [profileDraftCompanyName, setProfileDraftCompanyName] = useState("");
  const [profileError, setProfileError] = useState<string | null>(null);
  const [leaderboardSyncState, setLeaderboardSyncState] = useState<"idle" | "syncing" | "synced" | "error">("idle");
  const submissionFingerprintRef = useRef<string>("");
  const retryTimeoutRef = useRef<number | null>(null);
  useEffect(() => {
    try {
      const rawState = window.localStorage.getItem(QUIZ_STORAGE_KEY);
      const rawProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY);

      if (rawProfile) {
        const parsedProfile = JSON.parse(rawProfile) as ParticipantProfile;

        if (parsedProfile.clientId && parsedProfile.firstName && parsedProfile.companyName) {
          setParticipantProfile(parsedProfile);
          setProfileDraftFirstName(parsedProfile.firstName);
          setProfileDraftCompanyName(parsedProfile.companyName);
        }
      }

      if (!rawState) {
        return;
      }

      const parsedState = JSON.parse(rawState) as StoredQuizState;

      if (parsedState.version !== QUIZ_STORAGE_VERSION) {
        window.localStorage.removeItem(QUIZ_STORAGE_KEY);
        return;
      }

      setQuizSelections(parsedState.quizSelections ?? {});
      setRevealedExercises(parsedState.revealedExercises ?? {});
    } catch {
      window.localStorage.removeItem(QUIZ_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    try {
      const stateToStore: StoredQuizState = {
        version: QUIZ_STORAGE_VERSION,
        quizSelections,
        revealedExercises,
      };

      window.localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(stateToStore));
    } catch {
      // Ignore persistence failures in restricted browser contexts.
    }
  }, [quizSelections, revealedExercises]);

  useEffect(() => {
    if (!participantProfile) {
      return;
    }

    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(participantProfile));
  }, [participantProfile]);

  useEffect(() => {
    if (!participantProfile || !participantProfile.clientId) {
      return;
    }

    const lockedSelections = Object.entries(quizSelections).reduce<QuizSelections>((result, [questionKey, value]) => {
      const exerciseId = questionKey.split("::")[0];

      if (revealedExercises[exerciseId]) {
        result[questionKey] = value;
      }

      return result;
    }, {});

    const fingerprint = JSON.stringify({
      participantProfile,
      quizSelections: lockedSelections,
      revealedExercises,
    });

    if (fingerprint === submissionFingerprintRef.current) {
      return;
    }

    async function submitScore() {
      setLeaderboardSyncState("syncing");

      try {
        const response = await fetch("/api/workshop/leaderboard/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...participantProfile,
            quizSelections: lockedSelections,
            revealedExercises,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to sync leaderboard");
        }

        submissionFingerprintRef.current = fingerprint;
        setLeaderboardSyncState("synced");
      } catch {
        setLeaderboardSyncState("error");
        retryTimeoutRef.current = window.setTimeout(() => {
          submissionFingerprintRef.current = "";
          setLeaderboardSyncState("idle");
        }, 5000);
      }
    }

    void submitScore();

    return () => {
      if (retryTimeoutRef.current) {
        window.clearTimeout(retryTimeoutRef.current);
      }
    };
  }, [participantProfile, quizSelections, revealedExercises]);

  useEffect(() => {
    function updateCurrentExercise() {
      const viewportAnchor = 220;
      let nextCurrentExerciseId = tomorrowWorkshopExercises[0]?.id ?? "";

      for (const exercise of tomorrowWorkshopExercises) {
        const element = document.getElementById(exercise.id);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
          nextCurrentExerciseId = exercise.id;
          break;
        }

        if (rect.top <= viewportAnchor) {
          nextCurrentExerciseId = exercise.id;
        }
      }

      setCurrentExerciseId((current) =>
        current === nextCurrentExerciseId ? current : nextCurrentExerciseId,
      );
    }

    updateCurrentExercise();
    window.addEventListener("scroll", updateCurrentExercise, { passive: true });
    window.addEventListener("resize", updateCurrentExercise);

    return () => {
      window.removeEventListener("scroll", updateCurrentExercise);
      window.removeEventListener("resize", updateCurrentExercise);
    };
  }, []);

  const totalQuestions = tomorrowWorkshopExercises.reduce(
    (total, exercise) => total + exercise.quizQuestions.length,
    0,
  );
  const answeredQuestions = tomorrowWorkshopExercises.reduce(
    (total, exercise) =>
      total + exercise.quizQuestions.filter((question) => quizSelections[getQuestionKey(exercise.id, question.id)] !== undefined).length,
    0,
  );
  const lockedExercises = tomorrowWorkshopExercises.filter((exercise) => revealedExercises[exercise.id]).length;
  const lockedQuestions = tomorrowWorkshopExercises.reduce(
    (total, exercise) => total + (revealedExercises[exercise.id] ? exercise.quizQuestions.length : 0),
    0,
  );
  const correctAnswers = tomorrowWorkshopExercises.reduce(
    (total, exercise) =>
      total + (revealedExercises[exercise.id]
        ? exercise.quizQuestions.filter(
            (question) => quizSelections[getQuestionKey(exercise.id, question.id)] === question.correctOption,
          ).length
        : 0),
    0,
  );
  const currentExerciseIndex = tomorrowWorkshopExercises.findIndex((exercise) => exercise.id === currentExerciseId);
  const currentExercise = currentExerciseIndex >= 0 ? tomorrowWorkshopExercises[currentExerciseIndex] : tomorrowWorkshopExercises[0];
  const nextExercise = currentExerciseIndex >= 0 ? tomorrowWorkshopExercises[currentExerciseIndex + 1] : undefined;

  async function handleCopy(promptId: string, prompt: string) {
    await navigator.clipboard.writeText(prompt);
    setCopiedPrompt(promptId);

    window.setTimeout(() => {
      setCopiedPrompt((current) => (current === promptId ? null : current));
    }, 1800);
  }

  function handleSelect(exerciseId: string, questionId: string, optionIndex: number) {
    if (revealedExercises[exerciseId]) {
      return;
    }

    setQuizSelections((current) => ({
      ...current,
      [getQuestionKey(exerciseId, questionId)]: optionIndex,
    }));
  }

  function lockExercise(exerciseId: string) {
    setRevealedExercises((current) => ({
      ...current,
      [exerciseId]: true,
    }));
  }

  function revealAnswers(exerciseId: string) {
    if (revealedExercises[exerciseId]) {
      return;
    }

    const exercise = tomorrowWorkshopExercises.find((item) => item.id === exerciseId);

    if (!exercise) {
      return;
    }

    const allAnswered = exercise.quizQuestions.every(
      (question) => quizSelections[getQuestionKey(exercise.id, question.id)] !== undefined,
    );

    if (!allAnswered) {
      return;
    }

    if (!participantProfile?.clientId || !participantProfile.firstName || !participantProfile.companyName) {
      setPendingExerciseId(exerciseId);
      setProfileDraftFirstName(participantProfile?.firstName ?? "");
      setProfileDraftCompanyName(participantProfile?.companyName ?? "");
      setProfileError(null);
      return;
    }

    lockExercise(exerciseId);
  }

  function saveParticipantProfile(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const firstName = profileDraftFirstName.trim();
    const companyName = profileDraftCompanyName.trim();

    if (!firstName || !companyName) {
      setProfileError("First name and company are both required.");
      return;
    }

    const nextProfile: ParticipantProfile = {
      clientId: participantProfile?.clientId ?? createClientId(),
      firstName,
      companyName,
    };

    setParticipantProfile(nextProfile);
    setProfileError(null);

    if (pendingExerciseId) {
      lockExercise(pendingExerciseId);
      setPendingExerciseId(null);
    }

    setIsEditingProfile(false);
  }

  function resetQuizSession() {
    const confirmed = window.confirm(
      "Reset all quiz selections and locked scores on this browser? This clears the competition state for every exercise.",
    );

    if (!confirmed) {
      return;
    }

    setQuizSelections({});
    setRevealedExercises({});
    submissionFingerprintRef.current = "";
    window.localStorage.removeItem(QUIZ_STORAGE_KEY);
  }

  const identityLabel = participantProfile
    ? `${participantProfile.firstName} · ${participantProfile.companyName}`
    : "No leaderboard identity saved yet";
  const showProfileForm = !participantProfile || isEditingProfile || Boolean(pendingExerciseId);

  const identityHelperText = pendingExerciseId
    ? "Save once to lock this exercise and post future locked scores automatically."
    : !participantProfile
      ? "Save once before you start locking scores."
      : showProfileForm
        ? "Update the displayed name if needed."
        : null;

  const syncStatusText =
    leaderboardSyncState === "syncing"
      ? "Syncing leaderboard entry..."
      : leaderboardSyncState === "synced"
        ? "Leaderboard synced."
        : leaderboardSyncState === "error"
          ? "Sync failed. Retrying automatically."
          : null;

  return (
    <div className="relative overflow-hidden bg-[#0C2D48] pb-32 text-[#F5F5F5] md:pb-24">
      <div className="fixed left-4 right-4 top-20 z-30 md:left-auto md:right-6 md:top-6 md:w-76">
        <div className="rounded-3xl border border-[#2b5e87] bg-[#12395c] p-3 shadow-[0_24px_64px_rgba(7,11,27,0.42)] md:p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                Official Competition Score
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-[#f6fbff] md:text-[2rem]">
                {correctAnswers}/{totalQuestions}
              </p>
            </div>
            <a
              href="#scorecard"
              className="inline-flex items-center gap-2 rounded-full border border-[#ff922d] bg-[#FF7F11] px-3 py-2 text-xs font-semibold text-[#0C2D48] shadow-[0_12px_24px_rgba(255,127,17,0.24)] transition hover:border-[#ffab54] hover:bg-[#ff921f]"
            >
              View scorecard
            </a>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-[#d7e4ef]">
            <div className="rounded-[18px] border border-[#2b5e87] bg-[#0f3350] px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                Locked
              </p>
              <p className="mt-1 text-lg font-semibold text-[#f6fbff]">{lockedExercises}/{tomorrowWorkshopExercises.length} exercises</p>
            </div>
            <div className="rounded-[18px] border border-[#2b5e87] bg-[#0f3350] px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                Current
              </p>
              <p className="mt-1 text-lg font-semibold text-[#f6fbff]">
                {currentExerciseIndex + 1}/{tomorrowWorkshopExercises.length}
              </p>
            </div>
          </div>

          {currentExercise ? (
            <div className="mt-2 rounded-[18px] border border-[#2b5e87] bg-[#0f3350] px-3 py-2.5 text-sm text-[#d7e4ef]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                On now
              </p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <p className="font-semibold text-[#f6fbff]">{currentExercise.shortTitle}</p>
                <a
                  href={`#${currentExercise.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#ff922d] bg-[#FF7F11] px-3 py-2 text-xs font-semibold text-[#0C2D48] shadow-[0_12px_24px_rgba(255,127,17,0.24)] transition hover:border-[#ffab54] hover:bg-[#ff921f]"
                >
                  Jump back
                </a>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {nextExercise ? (
                  <a
                    href={`#${nextExercise.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#f6675d] bg-[#F44336] px-3 py-2 text-xs font-semibold text-[#F5F5F5] shadow-[0_12px_24px_rgba(244,67,54,0.22)] transition hover:border-[#ff8178] hover:bg-[#ff574a]"
                  >
                    Next: {nextExercise.shortTitle}
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="mt-2 rounded-[18px] border border-[#2b5e87] bg-[#0f3350] px-3 py-2.5 text-sm text-[#d7e4ef]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                  Leaderboard
                </p>
                <p className="mt-1 text-sm font-medium text-[#f6fbff]">{identityLabel}</p>
              </div>
              <div className="flex items-center gap-2">
                {syncStatusText ? (
                  <span className="rounded-full border border-[#2b5e87] bg-[#12395c] px-2.5 py-1 text-[11px] font-medium text-[#b7cedf]">
                    {syncStatusText}
                  </span>
                ) : null}
                {participantProfile && !pendingExerciseId ? (
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile((current) => !current)}
                    className="rounded-full border border-[#4692c5] bg-[#12395c] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d7e4ef] transition hover:border-[#67a6d1] hover:bg-[#17476d]"
                  >
                    {showProfileForm ? "Done" : "Edit"}
                  </button>
                ) : null}
              </div>
            </div>

            {showProfileForm ? (
              <form className="mt-2 space-y-2" onSubmit={saveParticipantProfile}>
                <div className="grid gap-2 grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
                  <input
                    type="text"
                    value={profileDraftFirstName}
                    onChange={(event) => {
                      setProfileDraftFirstName(event.target.value);
                      setProfileError(null);
                    }}
                    placeholder="First name"
                    className="min-w-0 rounded-2xl border border-[#4692c5] bg-[#12395c] px-3 py-2.5 text-sm font-medium text-[#F5F5F5] outline-none transition placeholder:text-[#8cb1cb] focus:border-[#67a6d1] focus:bg-[#17476d]"
                  />
                  <input
                    type="text"
                    value={profileDraftCompanyName}
                    onChange={(event) => {
                      setProfileDraftCompanyName(event.target.value);
                      setProfileError(null);
                    }}
                    placeholder="Company"
                    className="min-w-0 rounded-2xl border border-[#4692c5] bg-[#12395c] px-3 py-2.5 text-sm font-medium text-[#F5F5F5] outline-none transition placeholder:text-[#8cb1cb] focus:border-[#67a6d1] focus:bg-[#17476d]"
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-[#ff922d] bg-[#FF7F11] px-4 py-2 text-xs font-semibold text-[#0C2D48] shadow-[0_10px_24px_rgba(255,127,17,0.24)] transition hover:border-[#ffab54] hover:bg-[#ff921f]"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : null}
            {profileError ? (
              <p className="mt-2 text-xs font-medium text-[#ffb1a8]">{profileError}</p>
            ) : null}
            <p className="mt-2 text-xs leading-5 text-[#b7cedf]">
              {identityHelperText}
            </p>
          </div>

          <p className="mt-2 text-xs leading-5 text-[#b7cedf]">Only revealed exercises count.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="workshop-float-slow absolute -left-32 -top-16 h-72 w-72 rounded-full bg-[#3282B8]/34 blur-3xl" />
        <div className="workshop-float-delay absolute -right-20 top-16 h-72 w-72 rounded-full bg-[#FF7F11]/28 blur-3xl" />
        <div className="workshop-float-slower absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-[#F44336]/24 blur-3xl" />
        <div className="workshop-grid absolute inset-0 opacity-45" />
      </div>

      <section className="relative border-b border-[#2b5e87] bg-[#0a2740] px-6 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF7F11]">
              QHP Capital Workshop
            </p>
            <p className="mt-2 text-sm text-[#b7cedf]">
              Public route for the live AI demo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#scorecard"
              className="hidden rounded-full border border-[#4692c5] bg-[#1a4c73] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition hover:border-[#67a6d1] hover:bg-[#24618f] hover:text-white md:inline-flex"
            >
              Scorecard
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#4692c5] bg-[#1a4c73] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition hover:border-[#67a6d1] hover:bg-[#24618f] hover:text-white"
            >
              Private platform
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="overview" className="relative px-6 pb-6 pt-12 md:px-10 md:pb-4 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[#f6fbff] md:text-6xl">
              <span className="bg-linear-to-r from-[#F5F5F5] via-[#3282B8] to-[#FF7F11] bg-clip-text text-transparent">
                AI Demo for CxO 2026
              </span>
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-7 text-[#d7e4ef] md:text-lg">
              Start with Exercise 1 immediately below. Each card follows the same sequence: review the files, copy the prompt, then complete and lock the quiz before moving to the next exercise.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#b7cedf] md:text-base">
              Tomorrow&apos;s live version is intentionally trimmed to five exercises so the room gets range without dragging the session.
            </p>
          </div>

          <div className="mt-8 max-w-4xl rounded-[30px] border border-[#ff922d] bg-linear-to-r from-[#FF7F11] via-[#ff8f1f] to-[#F44336] p-5 text-[#0C2D48] shadow-[0_24px_56px_rgba(255,127,17,0.24)] md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0C2D48]/75">
                  Start Here
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  Download all workshop files first.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#0C2D48]/80 md:text-base">
                  This is the participant starting point. Grab the complete source-file bundle once, then move straight into Exercise 1 below.
                </p>
              </div>

              <a
                href="/workshop-downloads/all-workshop-materials.zip"
                download
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0C2D48] bg-[#0C2D48] px-6 py-4 text-base font-semibold text-[#F5F5F5] shadow-[0_18px_36px_rgba(12,45,72,0.28)] transition hover:scale-[1.02] hover:bg-[#12395c] md:px-7 md:text-lg"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download All Workshop Files
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`#${tomorrowWorkshopExercises[0]?.id ?? "exercises"}`}
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#3282B8] via-[#FF7F11] to-[#F44336] px-5 py-3 text-sm font-semibold text-[#F5F5F5] shadow-[0_18px_40px_rgba(255,127,17,0.30)] transition hover:scale-[1.02]"
            >
              Start Exercise 1
            </a>
          </div>
        </div>
      </section>

      <section id="exercises" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Exercises"
            title="Work top to bottom. Don’t skip ahead."
            description="Each exercise is self-contained and sequenced the same way. Finish the current card before moving to the next one so the discussion and score stay coherent."
          />

          <div className="grid gap-3 rounded-[28px] border border-[#2b5e87] bg-linear-to-r from-[#0f3350] via-[#12395c] to-[#0C2D48] p-4 text-sm font-medium text-[#F5F5F5] lg:grid-cols-3">
            <div className="rounded-[20px] border border-[#ff922d] bg-[#FF7F11] px-4 py-3 text-[#0C2D48] shadow-[0_14px_28px_rgba(255,127,17,0.24)]">
              Step 1: start with Exercise 1 and work straight down the page.
            </div>
            <div className="rounded-[20px] border border-[#4692c5] bg-[#3282B8] px-4 py-3 text-[#F5F5F5] shadow-[0_14px_28px_rgba(50,130,184,0.24)]">
              Step 2: inside each card, go files -&gt; prompt -&gt; quiz.
            </div>
            <div className="rounded-[20px] border border-[#f6675d] bg-[#F44336] px-4 py-3 text-[#F5F5F5] shadow-[0_14px_28px_rgba(244,67,54,0.22)]">
              Step 3: lock the quiz before jumping to the next exercise.
            </div>
          </div>

          <div className="space-y-8">
            {tomorrowWorkshopExercises.map((exercise, index) => {
              const selections = exercise.quizQuestions.reduce<QuizSelections>((result, question) => {
                result[question.id] = quizSelections[getQuestionKey(exercise.id, question.id)];
                return result;
              }, {});

              return (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  index={index}
                  nextExercise={tomorrowWorkshopExercises[index + 1]}
                  copiedPrompt={copiedPrompt}
                  onCopy={handleCopy}
                  selections={selections}
                  revealed={Boolean(revealedExercises[exercise.id])}
                  onSelect={handleSelect}
                  onReveal={revealAnswers}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="downloads" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Downloads"
            title="Participant-facing source files are bundled and ready."
            description="Each exercise pack mirrors what appears on the page for tomorrow's curated live set."
          />

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {tomorrowDownloadBundles.map((bundle, index) => (
              <a
                key={bundle.title}
                href={bundle.href}
                download
                className={`group workshop-panel rounded-[28px] border border-[#2b5e87] bg-linear-to-br p-6 transition hover:border-[#4692c5] ${accentPanels[index % accentPanels.length]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                      {bundle.fileCount}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-[#f6fbff]">{bundle.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#d7e4ef]">{bundle.description}</p>
                  </div>
                  <div className="inline-flex rounded-2xl border border-[#ff922d] bg-[#FF7F11] p-3 text-[#0C2D48] shadow-[0_12px_26px_rgba(255,127,17,0.2)] group-hover:bg-[#ff921f] group-hover:text-[#09243b]">
                    <ArrowDownTrayIcon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-[#b7cedf]">
                  <span>{bundle.size}</span>
                  <span className="font-medium text-[#FF7F11]">Download</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="scorecard" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Scorecard"
            title="Quiz scores accumulate here across tomorrow's live set."
            description="This lets participants compare their answers across the five curated exercises instead of treating each demo as a disconnected moment."
          />

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="workshop-panel rounded-4xl border border-[#2b5e87] bg-linear-to-br from-[#3282B8] via-[#123b5e] to-[#0C2D48] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                Total Workshop Score
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-4">
                <p className="text-6xl font-semibold tracking-tight text-[#f6fbff] md:text-7xl">
                  {correctAnswers}
                </p>
                <p className="pb-2 text-lg text-[#b7cedf]">/ {totalQuestions}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#d7e4ef]">
                {lockedQuestions === totalQuestions
                  ? "Every live exercise is locked. This browser now has a final score across tomorrow's curated set."
                  : `Locked ${lockedQuestions} of ${totalQuestions} questions into the official score. Unrevealed answers remain editable until each exercise is submitted.`}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {tomorrowWorkshopExercises.map((exercise, index) => {
                const score = exercise.quizQuestions.filter(
                  (question) => quizSelections[getQuestionKey(exercise.id, question.id)] === question.correctOption,
                ).length;
                const answered = exercise.quizQuestions.filter(
                  (question) => quizSelections[getQuestionKey(exercise.id, question.id)] !== undefined,
                ).length;
                const revealed = Boolean(revealedExercises[exercise.id]);

                return (
                  <div
                    key={exercise.id}
                    className={`workshop-panel rounded-3xl border border-[#2b5e87] bg-linear-to-br p-5 ${accentPanels[index % accentPanels.length]}`}
                  >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF7F11]">
                      {exercise.shortTitle}
                    </p>
                      <p className="mt-3 text-2xl font-semibold text-[#f6fbff]">
                      {revealed ? score : 0}/{exercise.quizQuestions.length}
                    </p>
                      <p className="mt-2 text-sm text-[#c4d6e5]">
                      {revealed ? "Locked" : `${answered}/${exercise.quizQuestions.length} answered`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={resetQuizSession}
              className="rounded-full border border-[#4692c5] bg-[#1a4c73] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition hover:border-[#67a6d1] hover:bg-[#24618f] hover:text-white"
            >
              Reset quiz session on this browser
            </button>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="workshop-panel rounded-4xl border border-[#2b5e87] bg-linear-to-br from-[#3282B8] via-[#123b5e] to-[#0C2D48] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-6 w-6 text-[#FF7F11]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                  Takeaways
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#f6fbff]">
                  What the room should leave with
                </h3>
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#d7e4ef]">
              {closingTakeaways.map((item) => (
                <li
                  key={item}
                  className="rounded-[22px] border border-[#2b5e87] bg-linear-to-r from-[#19476d] to-[#0f3350] px-4 py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-[#2b5e87] bg-linear-to-br from-[#F44336] via-[#123b5e] to-[#0C2D48] p-6 shadow-[0_24px_60px_rgba(8,12,30,0.32)] md:p-8">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-[#FF7F11]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF7F11]">
                  Hosted by
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#f6fbff]">QHP Capital</h3>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#d7e4ef]">
              <p>
                The workshop is hosted by Jeff Frazier, Operating Partner - AI, and built for leaders across finance, clinical operations, quality, regulatory, and portfolio operations.
              </p>
              <p>
                This route is public for participants. The broader QHP research platform remains behind the existing authentication layer.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-[#4692c5] bg-[#1a4c73] px-5 py-3 text-sm font-semibold text-[#F5F5F5] transition hover:border-[#67a6d1] hover:bg-[#24618f] hover:text-white"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}