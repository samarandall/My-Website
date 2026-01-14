"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { motionItem } from "@/lib/motion/variants";
import Pill from "@/components/ui/pill";
import { Experience } from "@/types/types";
import { Calendar } from "lucide-react";


export default function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ring =
    exp.emphasis === "primary"
      ? "ring-1 ring-white/10"
      : exp.emphasis === "secondary"
        ? "ring-1 ring-white/8"
        : "ring-1 ring-white/8";

  function classNames(...v: Array<string | false | null | undefined>) {
    return v.filter(Boolean).join(" ");
  }
  return (
    <motion.div
      variants={motionItem}
      className={classNames(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
        ring
      )}
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={classNames(
            "absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full blur-3xl",
            exp.emphasis === "primary"
              ? "bg-gradient-to-br from-indigo-400/20 to-cyan-400/20"
              : "bg-gradient-to-br from-fuchsia-400/15 to-amber-300/10"
          )}
        />
        <div className="absolute bottom-[-140px] left-[-140px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-indigo-400/10 to-fuchsia-300/10 blur-3xl" />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-[240px]">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80">
              {exp.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
              <p className="text-sm text-white/70">{exp.company}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>
              <MapPin className="h-3.5 w-3.5 text-white/70" />
              <span>{exp.location}</span>
            </Pill>
            <Pill>
              <Calendar className="h-3.5 w-3.5 text-white/70" />
              <span>{exp.dates}</span>
            </Pill>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <ul className="space-y-2 text-sm text-white/75 md:text-[15px]">
            {exp.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <span className="text-pretty">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* subtle index marker */}
      <div className="pointer-events-none absolute right-5 top-5 hidden rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/40 md:block">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

