import { Project } from "@/types/types";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";
import Pill from "@/components/ui/pill";
import Button from "@/components/ui/button";



function classNames(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-1 text-sm font-semibold tracking-tight text-white/90">{value}</p>
    </div>
  );
}


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={classNames(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
        project.featured && "ring-1 ring-white/10"
      )}
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-300/10 blur-3xl" />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
              <p className="text-sm text-white/70">{project.blurb}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.year ? (
              <Pill>
                <Star className="h-3.5 w-3.5 text-white/70" />
                <span>{project.year}</span>
              </Pill>
            ) : null}
            {project.role ? (
              <Pill>
                <Code2 className="h-3.5 w-3.5 text-white/70" />
                <span>{project.role}</span>
              </Pill>
            ) : null}
            {project.featured ? (
              <Pill>
                <Sparkles className="h-3.5 w-3.5 text-white/70" />
                <span>Featured</span>
              </Pill>
            ) : null}
          </div>
        </div>

        {project.links?.length ? (
          <div className="flex flex-wrap items-center gap-2">
            {project.links.map((l) => (
              <Button
                key={l.href}
                href={l.href}
                variant={l.label.toLowerCase().includes("live") ? "primary" : "outline"}
                size="md"
                className="rounded-2xl"
              >
                {l.icon ?? <ArrowUpRight className="h-4 w-4" />}
                {l.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <p className="mt-5 max-w-3xl text-pretty text-sm text-white/75 md:text-[15px]">{project.description}</p>

      {project.metrics?.length ? (
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {project.metrics.map((m) => (
            <Metric key={`${project.slug}-${m.label}`} label={m.label} value={m.value} />
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={`${project.slug}-${s}`}
            className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Pill key={`${project.slug}-${t}`}>
            <Tag className="h-3.5 w-3.5 text-white/70" />
            <span>{t}</span>
          </Pill>
        ))}
      </div>
    </div>
  );
}

