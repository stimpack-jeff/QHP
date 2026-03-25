"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  LockClosedIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const proofPoints = [
  {
    label: "Portfolio reach",
    value: "9 companies",
    detail: "AI transformation plans spanning pharma services, CRO, recruitment, genetics, and clinical operations.",
  },
  {
    label: "Demo proof",
    value: "12 candidates",
    detail: "Azurity's O2E engine surfaced 12 board-ready drug opportunities while saving 126 analyst hours.",
  },
  {
    label: "Operating model",
    value: "90-day wins",
    detail: "Workshop material is structured around deployable AI moves with measurable revenue, cost, or cycle-time impact.",
  },
];

const workshopTracks = [
  {
    title: "Firm Operations",
    description: "Deal sourcing, diligence acceleration, portfolio monitoring, and LP reporting workflows that AI can compress.",
    icon: PresentationChartLineIcon,
    accent: "blue",
  },
  {
    title: "Portfolio Value Creation",
    description: "Cross-portfolio use cases prioritized by feasibility, time-to-value, and repeatability across QHP companies.",
    icon: RocketLaunchIcon,
    accent: "emerald",
  },
  {
    title: "Executive AI",
    description: "The partner and CEO enablement layer that drives adoption, creates demand-pull, and speeds organizational change.",
    icon: SparklesIcon,
    accent: "amber",
  },
];

const audience = [
  "Partners and operating leaders evaluating QHP's AI transformation thesis",
  "Portfolio company executives reviewing near-term deployment opportunities",
  "Workshop attendees who need a frictionless public entry point before deeper platform access",
];

function accentClasses(accent: string): string {
  if (accent === "emerald") {
    return "border-emerald-500/20 bg-emerald-500/10 text-emerald-300";
  }

  if (accent === "amber") {
    return "border-amber-500/20 bg-amber-500/10 text-amber-300";
  }

  return "border-blue-500/20 bg-blue-500/10 text-blue-300";
}

export default function WorkshopPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,75,76,0.16),transparent_32%),radial-gradient(circle_at_20%_25%,rgba(74,144,217,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <section className="relative border-b border-white/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              QHP Research Workshop Access
            </p>
            <h1 className="mt-2 text-lg font-semibold text-white md:text-xl">
              Public demonstration section for tomorrow&apos;s session
            </h1>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Private platform
            <LockClosedIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative px-6 pb-10 pt-14 md:px-10 md:pb-16 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EF4B4C]/25 bg-[#EF4B4C]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[#ff8a8b]">
              Open Access Route
              <span className="h-1.5 w-1.5 rounded-full bg-[#EF4B4C]" />
              /workshop
            </div>

            <div className="space-y-5">
              <h2 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                QHP&apos;s AI transformation story, without the login wall.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                This section gives workshop attendees a direct public URL on the existing QHP Research domain while the core research platform remains protected behind the current authentication layer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 rounded-full bg-[#EF4B4C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d84243]"
              >
                View workshop flow
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              <Link
                href="http://107.172.187.251/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                Azurity O2E live demo
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <div className="flex items-center gap-3 text-sm text-white/65">
              <UserGroupIcon className="h-5 w-5 text-[#EF4B4C]" />
              Audience fit
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/78">
              {audience.map((item) => (
                <li key={item} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-10 md:px-10 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {proofPoints.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-[#131313] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="tracks" className="relative px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">Workshop Structure</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A public front door for the workshop, with a clear handoff into protected materials.
            </h3>
            <p className="mt-4 text-base leading-7 text-white/65">
              The public route can be shared freely. Anything sensitive can stay inside the existing authenticated platform and be opened only when you choose.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {workshopTracks.map((track, index) => {
              const Icon = track.icon;

              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.18 + index * 0.06 }}
                  className="rounded-3xl border border-white/10 bg-[#151515] p-6"
                >
                  <div className={`inline-flex rounded-2xl border p-3 ${accentClasses(track.accent)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-xl font-semibold text-white">{track.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/62">{track.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-4 md:px-10 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-linear-to-br from-white/6 via-white/3 to-transparent p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">Access Model</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                What is public versus what stays protected.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-500/15 bg-emerald-500/8 p-5">
                <p className="text-sm font-semibold text-emerald-300">Public</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The workshop landing page at /workshop is reachable without the current client-side login gate.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold text-white">Protected</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The main research platform, portfolio deep dives, firm ops material, and all other existing routes still require authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}