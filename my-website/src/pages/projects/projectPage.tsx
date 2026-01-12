"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Filter,
  Github,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";

import { motionContainer, motionItem } from "@/lib/motion/variants";
import Button from "@/components/ui/button";
import Pill from "@/components/ui/pill";
import Separator from "@/components/ui/seperator";
import { Project } from "@/types/types";
import getProjects from "@/lib/data/projects";
import ProjectCard from "@/components/cards/project-card";

type ProjectPageProps = {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  links?: {
    github?: string;
    projects?: string;
  };
};

export default function ProjectsPage({
  title = "Projects",
  subtitle = "A curated set of builds across UI, cloud, and automation.",
  links,
}: ProjectPageProps) {
  const projects = getProjects();

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

      {/* Header */}
      <motion.div variants={motionItem} className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>
            <Sparkles className="h-3.5 w-3.5 text-white/70" />
            <span>{title}</span>
          </Pill>
          <Pill>
            <Filter className="h-3.5 w-3.5 text-white/70" />
            <span>UI · Performance · Shipping</span>
          </Pill>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {links?.github ? (
            <Button href={links.github} variant="outline" size="md" className="rounded-2xl">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          ) : null}
          {links?.projects ? (
            <Button href={links.projects} variant="primary" size="md" className="rounded-2xl">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </motion.div>

      <motion.h1
        variants={motionItem}
        className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Built for speed,
        <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
          {" "}designed for clarity
        </span>
        .
      </motion.h1>

      <motion.p variants={motionItem} className="mt-4 max-w-3xl text-pretty text-base text-white/70 md:text-lg">
        {subtitle}
      </motion.p>

      {/* Controls */}
      <motion.div variants={motionItem} className="mt-8">
        <Separator />
      </motion.div>

      <motion.div variants={motionItem} className="mt-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-2 pl-9 pr-3 text-sm text-white/80 outline-none placeholder:text-white/40 focus:border-white/20"
            placeholder="Search projects (template UI only)"
            aria-label="Search projects"
          />
        </div>

        <Button href="" variant="outline" size="md" className="rounded-2xl">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </motion.div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div key={p.slug} variants={motionItem}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>

      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>

      {/* Footer */}
      <motion.div variants={motionItem} className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>
            <Layers className="h-3.5 w-3.5 text-white/70" />
            <span>Case studies + shipped features</span>
          </Pill>
          <Pill>
            <Code2 className="h-3.5 w-3.5 text-white/70" />
            <span>Next.js · TypeScript · React</span>
          </Pill>
        </div>

        <div className="flex items-center gap-2">
          {links?.github ? (
            <Button href={links.github} variant="outline" size="md" className="rounded-2xl">
              View code <ArrowUpRight className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </motion.div>
    </motion.section>
  );
}

