"use client";

import { motionContainer, motionItem } from "@/lib/motion/variants";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ emailHref, projectsHref }: { emailHref: string; projectsHref: string }) {
  return (
    <motion.section
      variants={motionContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="mt-10"
    >
      <motion.div
        variants={motionItem}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent p-6 md:p-10"
      >
        <div className="absolute right-[-140px] top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/15 via-indigo-400/10 to-fuchsia-400/15 blur-3xl" />
        <div className="relative">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Want to build something together?</h3>
          <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
            If you’re working on a game, a tool, or a web product and want a thoughtful collaborator, I’m down.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={emailHref} variant="primary" size="lg" className="rounded-2xl">
              Email me <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={projectsHref} variant="outline" size="lg" className="rounded-2xl">
              Browse work
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
