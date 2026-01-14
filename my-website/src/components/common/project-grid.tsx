"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/types";
import { motionItem } from "@/lib/motion/variants";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/card-content";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button"
import { ArrowRight } from "lucide-react";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <motion.div key={p.name} variants={motionItem}>
          <Card className="group transition hover:bg-white/[0.06]">
            <CardContent>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-base font-semibold tracking-tight">{p.name}</div>
                    <Badge>{p.tags}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 opacity-70 transition group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              {p?.links?.forEach((ele) => {
                <Button href={ele.href ?? ''} variant="ghost" className="mt-4 px-0">
                  Open
                </Button>
              }) ?? null}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
