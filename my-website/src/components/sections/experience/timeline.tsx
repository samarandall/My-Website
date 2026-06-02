import Separator from "@/components/ui/separator";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/cards/experience-card";
import { motionItem } from "@/lib/motion/variants";
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

      <motion.div variants={motionItem} className="mt-10">
        <Separator />
      </motion.div>
    </>
  );
}
