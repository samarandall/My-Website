"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import { Profile } from "@/types/types";
import SmartLink from "@/components/ui/smart-link";

import { ArrowRight, Mail, Github, Menu, X } from "lucide-react";

export default function SiteHeader({ profile }: { profile: Profile }) {
  const links = profile.links;
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
      <SmartLink href="/" className="group inline-flex items-center gap-2">
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight">{profile.name}</div>
          <div className="text-xs text-white/60">{profile.role}</div>
        </div>
      </SmartLink>


      <nav className="hidden items-center gap-2 md:flex">
        <Button href={links.experience} variant="ghost">
          Experience
        </Button>
        <Button href={links.projects} variant="ghost">
          Projects
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
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-10 w-10 place-items-center rounded-xl text-white/80 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>


      {open ? (
        <nav
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-50 mx-3 mt-1 flex flex-col gap-1 rounded-2xl border border-white/10 bg-zinc-900/95 p-2 shadow-xl backdrop-blur md:hidden"
        >
          <Button href={links.experience} variant="ghost" className="w-full justify-start" onClick={close}>
            Experience
          </Button>
          <Button href={links.projects} variant="ghost" className="w-full justify-start" onClick={close}>
            Projects
          </Button>
          <Button href={links.resume} variant="ghost" className="w-full justify-start" onClick={close}>
            Resume
          </Button>
          <Button href={links.email} variant="primary" className="w-full justify-start" onClick={close}>
            Contact <ArrowRight className="h-4 w-4" />
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
