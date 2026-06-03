"use client";

import Separator from "@/components/ui/separator";
import ExperienceCard from "@/components/cards/experience-card";
import getExperienceData from "@/lib/data/experience";


export default function Timeline() {
  const experiences = getExperienceData();
  return (
    <>
      < div className="mt-10 grid gap-4" >
        {
          experiences.map((exp, idx) => (
            <ExperienceCard key={`${exp.company}-${exp.role}-${exp.dates}`} exp={exp} index={idx} />
          ))
        }
      </div >

      <div className="mt-10 reveal">
        <Separator />
      </div>
    </>
  );
}
