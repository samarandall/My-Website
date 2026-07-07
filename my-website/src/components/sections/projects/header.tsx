import {
  ArrowUpRight,
  Github,
  Sparkles,
  Zap,
} from "lucide-react";

import Button from "@/components/ui/button";
import Pill from "@/components/ui/pill";

interface Props {
  title?: string;
  subtitle?: string;
  links?: {
    github?: string;
    projects?: string;
  };
}
export default function Header({
  title = "Projects",
  subtitle = "A curated set of builds across UI, cloud, and automation.",
  links
}: Props) {
  return (
    <>    <div className="flex flex-wrap items-center justify-between gap-3 reveal">
      <div className="flex flex-wrap items-center gap-2">
        <Pill>
          <Sparkles className="h-3.5 w-3.5 text-white/70" />
          <span>{title}</span>
        </Pill>
        <Pill>
          <Zap className="h-3.5 w-3.5 text-white/70" />
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
    </div>

      <h1
        className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-5xl reveal"
      >
        Built for speed,
        <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
          {" "}designed for clarity
        </span>
        .
      </h1>

      <p className="mt-4 max-w-3xl text-pretty text-base text-white/70 md:text-lg reveal">
        {subtitle}
      </p>
    </>

  );
}
