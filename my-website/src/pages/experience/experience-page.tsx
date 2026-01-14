"use client";

import { motion } from "framer-motion";
import { motionContainer, motionItem } from "@/lib/motion/variants";
import Separator from "@/components/ui/seperator";
import Timeline from "@/components/sections/experience/timeline";
import Footer from "@/components/sections/experience/footer";


export default function ExperiencePage() {

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
      <Timeline />


      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>

      {/* Education + Skills */}


      <Footer />

    </motion.section>
  );
}


