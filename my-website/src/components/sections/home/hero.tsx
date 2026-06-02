"use client";

import { motionContainer, motionItem } from "@/lib/motion/variants";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  MapPin,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { FeatureCardModel, Profile } from "@/types/types";
import Pill from "@/components/ui/pill";
import Badge from "@/components/ui/badge";
import Separator from "@/components/ui/separator";
import FeatureCards from "@/components/common/feature-cards";

export default function Hero({ profile, featureCards }: { profile: Profile; featureCards: FeatureCardModel[] }) {
  const links = profile.links;

  return (
    <motion.section
      variants={motionContainer}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur md:p-10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-300/10 blur-3xl" />
      </div>


      <motion.div variants={motionItem} className="flex flex-wrap items-center gap-2">
        <Pill>
          <Sparkles className="h-3.5 w-3.5 text-white/70" />
          <span>Now building: Unreal tooling + clean web UI</span>
        </Pill>
        <Pill>
          <MapPin className="h-3.5 w-3.5 text-white/70" />
          <span>{profile.location}</span>
        </Pill>
      </motion.div>


      <motion.h1 variants={motionItem} className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        I build{" "}
        <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">fast</span>,
        <br className="hidden md:block" />
        reliable software.
      </motion.h1>


      <motion.p variants={motionItem} className="mt-5 max-w-2xl text-pretty text-base text-white/70 md:text-lg">
        {profile.blurb}
      </motion.p>


      <motion.div variants={motionItem} className="mt-6 flex flex-wrap gap-2">
        {(profile.highlights ?? []).map((h) => (
          <Badge key={h}>{h}</Badge>
        ))}
      </motion.div>


      <motion.div variants={motionItem} className="mt-8 flex flex-wrap items-center gap-3">
        <Button href={links.projects} variant="primary" size="lg" className="rounded-2xl">
          Explore projects <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href={links.resume} variant="outline" size="lg" className="rounded-2xl">
          <FileText className="h-4 w-4" /> Resume
        </Button>


        <div className="ml-0 flex items-center gap-1 md:ml-2">
          <Button href={links.github} size="icon" variant="ghost" ariaLabel="GitHub">
            <Github className="h-5 w-5" />
          </Button>
          <Button href={links.linkedin} size="icon" variant="ghost" ariaLabel="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button href={links.email} size="icon" variant="ghost" ariaLabel="Email">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>


      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>


      <FeatureCards cards={featureCards} />
    </motion.section>
  );
}
