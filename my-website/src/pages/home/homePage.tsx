"use client";

import GlowGrid from "@/components/ui/glow-grid";
import Hero from "@/components/sections/home/hero";
import SiteHeader from "@/components/common/site-header";
import FeaturedWork from "@/components/sections/home/featured-work";
import CallToAction from "@/components/sections/home/cta";
import SiteFooter from "@/components/common/site-footer";
import makeDefaultHomeData from "@/lib/data/home";

export default function HomePage() {
  const { profile, featureCards, projects } = makeDefaultHomeData();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <GlowGrid />
      <SiteHeader profile={profile} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-20">
        <Hero profile={profile} featureCards={featureCards} />
        <FeaturedWork projects={projects} projectsHref={profile.links.projects} />
        <CallToAction emailHref={profile.links.email} projectsHref={profile.links.projects} />
        <SiteFooter profile={profile} />
      </main>
    </div>
  );
}
