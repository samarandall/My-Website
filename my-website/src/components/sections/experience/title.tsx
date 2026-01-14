"use client";
import { motion } from "framer-motion";
import Separator from "@/components/ui/seperator";
import { motionItem } from "@/lib/motion/variants";


export default function Title() {
  return (
    <>
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
    </>
  );
}
