"use client";
import { motion } from "framer-motion";
import Separator from "@/components/ui/separator";
import { motionItem } from "@/lib/motion/variants";
import Pill from "@/components/ui/pill";
import {
  Badge,
  Sparkles
} from "lucide-react";


export default function Title() {
  return (
    <>
      <motion.div variants={motionItem} className="flex flex-wrap items-center gap-2">
        <Pill>
          <Sparkles className="h-3.5 w-3.5 text-white/70" />
          <span>Experience</span>
        </Pill>
        <Pill>
          <Badge className="h-3.5 w-3.5 text-white/70" />
          <span>Full-Stack Development</span>
        </Pill>
      </motion.div>
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
        automation tooling, and iOS + Android Bluetooth interfaces.
      </motion.p>

      <motion.div variants={motionItem} className="mt-8">
        <Separator />
      </motion.div>
    </>
  );
}
