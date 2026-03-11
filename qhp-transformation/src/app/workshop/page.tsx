"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  BoltIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  agenda,
  bonusExercise,
  closingTakeaways,
  companyFacts,
  downloadBundles,
  drawLineTasks,
  executives,
  exercises,
  intelligenceTypes,
  optionLabels,
  setupChecklist,
  testingNotes,
  workshopStats,
} from "@/lib/workshop-data";

type DrawOption = (typeof optionLabels)[number];

const sectionLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#framework", label: "Framework" },
  { href: "#setup", label: "Setup" },
  { href: "#exercises", label: "Exercises" },
  { href: "#downloads", label: "Downloads" },
];

const bandStyles = {
  ai: "border-emerald-500/20 bg-emerald-500/8 text-emerald-200",
  contested: "border-amber-500/20 bg-amber-500/10 text-amber-100",
  human: "border-[#d7bf78]/20 bg-[#d7bf78]/10 text-[#f0dfab]",
};

const optionStyleMap: Record<DrawOption, string> = {
  "FULL AI": "border-emerald-500/20 bg-emerald-500/10 text-emerald-100",
  "AI + HUMAN": "border-sky-500/20 bg-sky-500/10 text-sky-100",
  "HUMAN + AI": "border-amber-500/20 bg-amber-500/10 text-amber-100",
  "HUMAN ONLY": "border-rose-500/20 bg-rose-500/10 text-rose-100",
};

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
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7bf78]/70">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-white/68 md:text-lg">{description}</p>
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
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1824] shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Participant Prompt
          </p>
          <p className="mt-1 text-sm text-white/55">Ready to paste into Claude, ChatGPT, or Gemini.</p>
        </div>
        <button
          type="button"
          onClick={() => void onCopy(promptId, prompt)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ClipboardDocumentCheckIcon className="h-4 w-4" />
          {copiedPrompt === promptId ? "Copied" : "Copy prompt"}
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 text-sm leading-7 text-white/80 whitespace-pre-wrap">
        {prompt}
      </pre>
    </div>
  );
}

function ExerciseSection({
  exercise,
  copiedPrompt,
  onCopy,
}: {
  exercise: (typeof exercises)[number] | typeof bonusExercise;
  copiedPrompt: string | null;
  onCopy: (promptId: string, prompt: string) => Promise<void>;
}) {
  return (
    <article className="grid gap-6 rounded-4xl border border-white/10 bg-[#101722] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d7bf78]/20 bg-[#d7bf78]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ecdca6]">
              {exercise.duration}
            </span>
            <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              {exercise.files}
            </span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">{exercise.title}</h3>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">{exercise.intelligence}</p>
          <p className="text-base leading-7 text-white/68">{exercise.description}</p>
        </div>

        <div className="rounded-3xl border border-white/8 bg-black/18 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">Why it matters</p>
          <p className="mt-3 text-sm leading-7 text-white/72">{exercise.objective}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/8 bg-black/18 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">Expected Outputs</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/74">
              {exercise.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/8 bg-black/18 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">What To Watch For</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/74">
              {exercise.watchFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <LightBulbIcon className="mt-0.5 h-5 w-5 flex-none text-[#ecdca6]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={exercise.downloadHref}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          {exercise.downloadLabel}
          <span className="text-white/45">{exercise.downloadSize}</span>
        </a>
      </div>

      <PromptCard
        promptId={exercise.id}
        prompt={exercise.prompt}
        copiedPrompt={copiedPrompt}
        onCopy={onCopy}
      />
    </article>
  );
}

export default function WorkshopPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [selections, setSelections] = useState<Record<number, DrawOption | undefined>>({});
  const [answersVisible, setAnswersVisible] = useState(false);

  async function handleCopy(promptId: string, prompt: string) {
    await navigator.clipboard.writeText(prompt);
    setCopiedPrompt(promptId);

    window.setTimeout(() => {
      setCopiedPrompt((current) => (current === promptId ? null : current));
    }, 1800);
  }

  return (
    <div className="relative overflow-hidden bg-[#08101a] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 -top-16 h-72 w-72 rounded-full bg-[#0f5e83]/25 blur-3xl" />
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-[#c39231]/18 blur-3xl" />
        <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-[#0f7b5e]/18 blur-3xl" />
      </div>

      <section className="relative border-b border-white/8 bg-[#060c13]/70 px-6 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7bf78]/70">
              QHP Capital Workshop
            </p>
            <p className="mt-2 text-sm text-white/60">
              Public access route for tomorrow&apos;s hands-on finance lab.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#downloads"
              className="hidden rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/12 hover:text-white md:inline-flex"
            >
              Workshop materials
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
            >
              Private platform
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="overview" className="relative px-6 pb-12 pt-14 md:px-10 md:pb-18 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7bf78]/20 bg-[#d7bf78]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ecdca6]">
              Finance Workflow Demonstration
              <span className="h-1.5 w-1.5 rounded-full bg-[#d7bf78]" />
              March 2026
            </div>

            <div className="space-y-5">
              <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Finance workflow demonstration for life sciences leadership teams.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                This page supports a 30-minute workshop built around a fictional but realistic life sciences company. Participants run AP processing, accrual analysis, and policy review exercises in current AI tools and discuss where human review should begin.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#exercises"
                className="inline-flex items-center gap-2 rounded-full bg-[#d7bf78] px-5 py-3 text-sm font-semibold text-[#08101a] transition hover:bg-[#e6cf8a]"
              >
                Explore the exercises
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              <a
                href="#framework"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
              >
                View the intelligence framework
              </a>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.34)] md:p-8">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <UserGroupIcon className="h-5 w-5 text-[#d7bf78]" />
              Workshop profile
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/76">
              <li className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3">
                Prepared as workshop material rather than marketing collateral.
              </li>
              <li className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3">
                Intended for CFOs and senior finance leaders at life sciences companies.
              </li>
              <li className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3">
                Laptops required. Participants work directly in Claude, ChatGPT, or Gemini.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workshopStats.map((stat) => (
            <div key={stat.label} className="rounded-[26px] border border-white/10 bg-[#0d1621] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/62">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sticky top-0 z-20 border-y border-white/8 bg-[#08101a]/85 px-6 py-3 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white/72 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section id="framework" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="The Intellectual Backbone"
            title="Jeff Frazier's six intelligence types provide the operating model for the workshop."
            description="This framework organizes the exercises around where model-driven processing ends, where judgment begins, and which questions remain strategic or managerial."
          />

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <CpuChipIcon className="h-6 w-6 text-emerald-300" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Waterline</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Below Creative, AI handles most of the structured processing work.</h3>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {intelligenceTypes.map((item, index) => (
                  <div key={item.id}>
                    {index === 4 ? (
                      <div className="my-5 rounded-full border border-[#d7bf78]/20 bg-[#d7bf78]/8 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#ecdca6]">
                        Waterline: human accountability begins here
                      </div>
                    ) : null}

                    <div className={`rounded-3xl border p-5 ${bandStyles[item.band]}`}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl border border-current/25 text-sm font-semibold">
                          {item.shortLabel}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="mt-2 text-sm leading-6 text-current/78">{item.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2 text-xs text-current/80">
                            {item.examples.map((example) => (
                              <span key={example} className="rounded-full border border-current/20 px-3 py-1">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <ScaleIcon className="h-6 w-6 text-[#d7bf78]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Interpretation</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Judgment operates on menus. Wisdom questions the menu itself.</h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">AI + Human</p>
                    <p className="mt-3 text-sm leading-7 text-amber-50/88">
                      AI can recommend whether to approve, reject, dispute, or escalate. A human still owns the consequence-bearing choice.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#d7bf78]/20 bg-[#d7bf78]/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0dfab]/85">Human territory</p>
                    <p className="mt-3 text-sm leading-7 text-[#f7ecc4]/88">
                      Wisdom asks whether the trial, CRO relationship, or operating policy should exist in its current form at all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <SparklesIcon className="h-6 w-6 text-sky-300" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Session framing</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">How to use the workshop</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm leading-7 text-white/72">
                  <p>
                    The session is intended as a working demonstration with realistic documents and explicit decision points.
                  </p>
                  <p>
                    The goal is to let participants inspect the outputs, compare model behavior, and discuss where tasks should remain automated, reviewed, or fully human.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Setup"
            title="One fictional company and three finance workflows for the demonstration."
            description="Each exercise uses Nexus BioTherapeutics so the discussion stays in one consistent operating context rather than jumping between unrelated examples."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <BeakerIcon className="h-6 w-6 text-sky-300" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Nexus BioTherapeutics</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Fictional company, realistic finance context.</h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {companyFacts.map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-white/8 bg-black/18 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">{item.label}</p>
                      <p className="mt-3 text-sm leading-6 text-white/82">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-white/8 bg-black/18 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">Key executives</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-white/74">
                    {executives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <BoltIcon className="h-6 w-6 text-emerald-300" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">What participants need</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Participant setup</h3>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-white/72">
                  {setupChecklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-[22px] border border-white/8 bg-black/18 px-4 py-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-6 w-6 text-[#d7bf78]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Workshop agenda</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Thirty-minute agenda</h3>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {agenda.map((item, index) => (
                  <div key={item.title} className="grid gap-4 rounded-3xl border border-white/8 bg-black/18 p-5 md:grid-cols-[140px_1fr_auto] md:items-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">{item.time}</p>
                      <p className="mt-2 text-sm font-medium text-[#ecdca6]">Step {index + 1}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/68">{item.format}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/72">
                      {item.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="exercises" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Exercises"
            title="Three core exercises that move from automated workflow to explicit human accountability."
            description="Each prompt is copy-ready. Each download links to the participant-facing source files. The room sees the same question from three angles: what AI can do, where AI should stop, and what management work remains."
          />

          <div className="space-y-8">
            {exercises.map((exercise) => (
              <ExerciseSection
                key={exercise.id}
                exercise={exercise}
                copiedPrompt={copiedPrompt}
                onCopy={handleCopy}
              />
            ))}
          </div>

          <div className="rounded-4xl border border-dashed border-white/15 bg-[#0d1621] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <ExclamationTriangleIcon className="h-6 w-6 text-[#ecdca6]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Optional if time permits</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Bonus exercise for fast rooms</h3>
              </div>
            </div>

            <ExerciseSection
              exercise={bonusExercise}
              copiedPrompt={copiedPrompt}
              onCopy={handleCopy}
            />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Interactive Discussion"
            title="Draw the line before the answer key appears."
            description="Participants place each finance task into the right operating model. Answers stay hidden until you reveal them, which keeps the discussion honest and consistent with the workshop brief."
          />

          <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-5 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Exercise 3</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Full AI, AI + Human, Human + AI, or Human Only?</h3>
              </div>
              <button
                type="button"
                onClick={() => setAnswersVisible((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
              >
                <HandRaisedIcon className="h-4 w-4" />
                {answersVisible ? "Hide answer key" : "Reveal answer key"}
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {drawLineTasks.map((task) => (
                <div key={task.id} className="rounded-[26px] border border-white/8 bg-black/18 p-5">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">Task {task.id}</p>
                      <h4 className="mt-2 text-lg font-semibold text-white">{task.task}</h4>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                      {optionLabels.map((option) => {
                        const selected = selections[task.id] === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setSelections((current) => ({
                                ...current,
                                [task.id]: option,
                              }))
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                              selected
                                ? optionStyleMap[option]
                                : "border-white/10 bg-white/6 text-white/72 hover:border-white/20 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {answersVisible ? (
                    <div className="mt-5 rounded-[22px] border border-[#d7bf78]/20 bg-[#d7bf78]/10 p-4 text-sm leading-7 text-[#f7ecc4]">
                      <p className="font-semibold text-white">
                        Recommended answer: {task.answer}
                        {selections[task.id]
                          ? selections[task.id] === task.answer
                            ? " · You matched it"
                            : ` · You chose ${selections[task.id]}`
                          : ""}
                      </p>
                      <p className="mt-2 text-[#f7ecc4]/88">{task.intelligenceType}</p>
                      <p className="mt-2 text-[#f7ecc4]/88">{task.rationale}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="What The Models Did"
            title="Model variance is part of the comparison."
            description="Participants can compare how different models handle the same workflow and where their recommendations begin to diverge near the judgment boundary."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {testingNotes.map((note) => (
              <div key={note.title} className="rounded-[26px] border border-white/10 bg-[#0d1621] p-6">
                <div className="inline-flex rounded-2xl border border-sky-500/20 bg-sky-500/10 p-3 text-sky-200">
                  <PresentationChartLineIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{note.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="downloads" className="relative px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Downloads"
            title="Participant-facing source files are bundled and ready."
            description="These are the clean workshop materials only. Facilitator files and explicit anomaly notes are intentionally excluded from the public route."
          />

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {downloadBundles.map((bundle) => (
              <a
                key={bundle.title}
                href={bundle.href}
                download
                className="group rounded-[28px] border border-white/10 bg-[#0d1621] p-6 transition hover:border-white/20 hover:bg-[#101c29]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">{bundle.fileCount}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{bundle.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">{bundle.description}</p>
                  </div>
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/8 p-3 text-white/80 group-hover:text-white">
                    <ArrowDownTrayIcon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-white/54">
                  <span>{bundle.size}</span>
                  <span className="font-medium text-[#ecdca6]">Download</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-4xl border border-white/10 bg-[#0d1621] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-6 w-6 text-[#d7bf78]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Discussion prompt</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">How should finance teams use time saved on repetitive work?</h3>
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
              {closingTakeaways.map((item) => (
                <li key={item} className="rounded-[22px] border border-white/8 bg-black/18 px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-white/10 bg-linear-to-br from-[#d7bf78]/10 via-[#0d1621] to-[#0d1621] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-6 w-6 text-[#ecdca6]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Hosted by</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">QHP Capital</h3>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/74">
              <p>
                The workshop is hosted by Jeff Frazier, Operating Partner - AI, and prepared for life sciences finance leaders.
              </p>
              <p>
                This public route is intended for workshop participants. The broader QHP research platform remains behind the existing authentication layer.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/workshop-downloads/all-workshop-materials.zip"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[#d7bf78] px-5 py-3 text-sm font-semibold text-[#08101a] transition hover:bg-[#e6cf8a]"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download all materials
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white/82 transition hover:border-white/20 hover:bg-white/12 hover:text-white"
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