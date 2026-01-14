"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Settings,
} from "lucide-react";
import { motionItem } from "@/lib/motion/variants";
import getEducation from "@/lib/data/education";
import getSkills from "@/lib/data/skills";


export default function Education() {
  const education = getEducation();
  const skills = getSkills();

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      <motion.div
        variants={motionItem}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
      >
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80">
            <GraduationCap className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Education</h2>
            <p className="text-sm text-white/70">{education.date}</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm text-white/80 md:text-[15px]">
            <span className="font-semibold text-white/90">{education.school}</span>
            <span className="text-white/60"> · {education.location}</span>
          </p>
          <p className="mt-2 text-sm text-white/70 md:text-[15px]">{education.degree}</p>
          {(education.details ?? []).length ? (
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {education.details?.map((d) => (
                <li key={d} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <span className="text-pretty">{d}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </motion.div>

      <motion.div
        variants={motionItem}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
      >
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80">
            <Settings className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
            <p className="text-sm text-white/70">Toolbox</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-white/70">
            My default mode: clean UI, reliable backend, careful error handling, and performance-minded data flows.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
