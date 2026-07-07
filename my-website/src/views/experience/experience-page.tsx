import Timeline from "@/components/sections/experience/timeline";
import Footer from "@/components/sections/experience/footer";
import Education from "@/components/sections/experience/education";
import Title from "@/components/sections/experience/title";


export default function ExperiencePage() {

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur md:p-10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-300/10 blur-3xl" />
      </div>

      <Title />
      <Timeline />
      <Education />

      <Footer />

    </section>
  );
}


