"use client";

import Separator from "@/components/ui/separator";
import getProjects from "@/lib/data/projects";
import ProjectCard from "@/components/cards/project-card";


export default function Projects() {
  const projects = getProjects();

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.slug} className="reveal">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <div className="mt-10 reveal">
        <Separator />
      </div>
    </>
  )
}
