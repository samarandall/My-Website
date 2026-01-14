"use client";

import { motion } from "framer-motion";
import { motionItem } from "@/lib/motion/variants";
import Separator from "@/components/ui/seperator";
import getProjects from "@/lib/data/projects";
import ProjectCard from "@/components/cards/project-card";


export default function Projects() {
  const projects = getProjects();

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div key={p.slug} variants={motionItem}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>

      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>
    </>
  )
}
