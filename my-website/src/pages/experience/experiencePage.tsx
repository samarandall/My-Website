"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Rocket,
  Settings,
  Wrench,
} from "lucide-react";
import getProfileData from "@/lib/data/profile";
import { motionContainer, motionItem } from "@/lib/motion/variants";
import Button from "@/components/ui/button";
import Pill from "@/components/ui/pill";
import Separator from "@/components/ui/seperator";
import { Experience, Education } from "@/types/types";
import getExperienceData from "@/lib/data/experience";
// If your project already has a Badge component (like in your Hero), keep using it.
// Otherwise, you can swap this with Pill or a simple <span>.
import { Badge } from "lucide-react"; // <-- matches your existing Hero import pattern



type ExperiencePageProps = {
  links?: {
    projects?: string;
    resume?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
};

;

const education: Education = {
  school: "Texas State University",
  degree: "Bachelor of Science in Computer Science; Minor in Applied Mathematics",
  location: "San Marcos, TX",
  date: "Dec 2023",
  details: [
    "Relevant coursework: Data Structures and Algorithms, Object-Oriented Design, Software Engineering, Internet Software Development, Computer System Security, Machine Learning, Data Mining.",
  ],
};

const skills: string[] = [
  "TypeScript/JavaScript",
  "Python",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git/GitHub",
  "AWS (EC2, S3, CloudFront)",
  "Docker",
  "CI/CD pipelines",
];

// Feature cards specifically for the Experience page
const experienceFeatureCards = [
  {
    title: "Production Frontend",
    description:
      "Design and development of responsive, accessible UIs using React, Next.js, and TypeScript with a focus on maintainability and performance.",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: "Design to Code",
    description:
      "Translate Figma and UX specifications into polished, pixel accurate interfaces that adapt cleanly across devices and browsers.",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "API Integration",
    description:
      "Close collaboration with backend teams to integrate REST APIs, handle edge cases, and ensure frontend architecture aligns with backend systems.",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    title: "Performance Focus",
    description:
      "Optimize rendering, data flow, and network usage to deliver fast load times and smooth user experiences at scale.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

function classNames(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ring =
    exp.emphasis === "primary"
      ? "ring-1 ring-white/10"
      : exp.emphasis === "secondary"
        ? "ring-1 ring-white/8"
        : "ring-1 ring-white/8";

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

export default function ExperiencePage() {
  const links = getProfileData().links;
  const experiences = getExperienceData();

  return (
    <motion.section
      variants={motionContainer}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur md:p-10"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-300/10 blur-3xl" />
      </div>

      <motion.h1
        variants={motionItem}
        className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Shipping software from
        <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
          {" "}prototype → production
        </span>
        .
      </motion.h1>

      <motion.p variants={motionItem} className="mt-4 max-w-3xl text-pretty text-base text-white/70 md:text-lg">
        A timeline of roles and the kinds of systems I&apos;ve built: enterprise web apps, AWS deployments, payments,
        automation tooling, and iOS + Bluetooth interfaces.
      </motion.p>

      <motion.div variants={motionItem} className="mt-8">
        <Separator />
      </motion.div>

      {/* Experience timeline */}
      <div className="mt-10 grid gap-4">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={`${exp.company}-${exp.role}-${exp.dates}`} exp={exp} index={idx} />
        ))}
      </div>

      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>

      {/* Education + Skills */}
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

      {/* Footer CTA */}
      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>

      <motion.div variants={motionItem} className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>
            <Briefcase className="h-3.5 w-3.5 text-white/70" />
            <span>Open to building great stuff</span>
          </Pill>
          <Pill>
            <MapPin className="h-3.5 w-3.5 text-white/70" />
            <span>Austin, TX · Remote</span>
          </Pill>
        </div>

        <div className="flex items-center gap-2">
          {links?.linkedin ? (
            <Button href={links.linkedin} variant="outline" size="md" className="rounded-2xl">
              LinkedIn
            </Button>
          ) : null}
          {links?.github ? (
            <Button href={links.github} variant="outline" size="md" className="rounded-2xl">
              GitHub
            </Button>
          ) : null}
          {links?.email ? (
            <Button href={links.email} variant="primary" size="md" className="rounded-2xl">
              Contact
            </Button>
          ) : null}
        </div>
      </motion.div>
    </motion.section>
  );
}


