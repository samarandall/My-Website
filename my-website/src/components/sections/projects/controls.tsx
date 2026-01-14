"use client";

import { motion } from "framer-motion";
import {
  Filter,
  Search,
} from "lucide-react";

import { motionItem } from "@/lib/motion/variants";
import Button from "@/components/ui/button";
import Separator from "@/components/ui/seperator";


export default function Controls() {
  return (
    <>
      <motion.div variants={motionItem} className="mt-8">
        <Separator />
      </motion.div>

      <motion.div variants={motionItem} className="mt-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-2 pl-9 pr-3 text-sm text-white/80 outline-none placeholder:text-white/40 focus:border-white/20"
            placeholder="Search projects (template UI only)"
            aria-label="Search projects"
          />
        </div>

        <Button href="" variant="outline" size="md" className="rounded-2xl">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </motion.div>
    </>

  )
}
