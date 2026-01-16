"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/types";
import { motionItem, motionContainer } from "@/lib/motion/variants";
import Button from "@/components/ui/button"
import FeaturedProjects from "@/components/common/featured-projects";

export default function FeaturedWork({ projects, projectsHref }: { projects: Project[]; projectsHref: string; }) {
  return (
    <motion.section
      variants={motionContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-10"
    >
      <motion.div variants={motionItem} className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Featured work</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">A couple things I’m proud of.</p>
        </div>
        <div className="hidden md:block">
          <Button href={projectsHref} variant="outline" className="rounded-2xl">
            View all
          </Button>
        </div>
      </motion.div>


      <FeaturedProjects projects={projects} />
    </motion.section>
  );
}
