"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/types";
import { motionItem } from "@/lib/motion/variants";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/card-content";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button"
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {projects
        .filter((p) => p?.featured)
        .map((p) => (
          <motion.div key={p.name} variants={motionItem}>
            <Card className="group transition hover:bg-white/[0.06]">
              <CardContent>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight">
                        {p.name}
                      </h3>
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <p className="mt-2 text-sm text-white/70">{p.description}</p>
                  </div>

                  <Button href="/projects">                  
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 opacity-70 transition group-hover:opacity-100">
                      <ArrowRight  className="h-4 w-4" />
                    </div>
                  </Button>

                </div>

                {p.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((link) => (
                      <Button
                        key={link.href ?? link.label ?? p.name}
                        href={link.href ?? ""}
                        variant="ghost"
                        className="px-0"
                      >
                        {link.label ?? "Open"}
                      </Button>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        ))}
    </div>
  );
}
