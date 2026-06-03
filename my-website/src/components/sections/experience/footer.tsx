"use client";

import {
  Briefcase,
  MapPin,
} from "lucide-react";
import Button from "@/components/ui/button";
import Pill from "@/components/ui/pill";
import Separator from "@/components/ui/separator";
import getProfileData from "@/lib/data/profile";


export default function Footer() {
  const links = getProfileData().links;

  return (
    <>
      <div className="mt-10 reveal">
        <Separator />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 reveal">
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
      </div>
    </>
  )
}
