"use client";

import Button from "@/components/ui/button";
import { Profile } from "@/types/types";
import SmartLink from "@/components/ui/smart-link";

import { ArrowRight, Mail, Github } from "lucide-react";

export default function SiteHeader({ profile }: { profile: Profile }) {
  const links = profile.links;
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
      <SmartLink href="/" className="group inline-flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <span className="text-sm font-semibold">{(profile.name || "?").slice(0, 1).toUpperCase()}</span>
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight">{profile.name}</div>
          <div className="text-xs text-white/60">{profile.role}</div>
        </div>
        <span className="ml-2 hidden rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60 group-hover:text-white/80 md:inline">
          open to collabs
        </span>
      </SmartLink>


      <nav className="hidden items-center gap-2 md:flex">
        <Button href={links.projects} variant="ghost">
          Projects
        </Button>
        <Button href={links.experience} variant="ghost">
          Experience
        </Button>
        <Button href={links.resume} variant="ghost">
          Resume
        </Button>
        <Button href={links.email} variant="primary" className="rounded-2xl">
          Contact <ArrowRight className="h-4 w-4" />
        </Button>
      </nav>


      <div className="flex items-center gap-2 md:hidden">
        <Button href={links.github} size="icon" variant="ghost" ariaLabel="GitHub">
          <Github className="h-5 w-5" />
        </Button>
        <Button href={links.email} size="icon" variant="ghost" ariaLabel="Email">
          <Mail className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
