"use client";

import {
  ArrowUpRight,
  Code2,
  Layers,
} from "lucide-react";

import Button from "@/components/ui/button";
import Pill from "@/components/ui/pill";
interface Props {
  links?: {
    github?: string;
    projects?: string;
  };
}
export default function Footer({
  links
}: Props) {
  return (
    <>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 reveal">
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
      </div>
    </>

  )
}
