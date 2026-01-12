"use client";

import Hero from "@/components/sections/home/hero";
import FeaturedWork from "@/components/sections/home/featured-work";
import CallToAction from "@/components/sections/home/cta";
import getProfileData from "@/lib/data/profile";
import getProjectData from "@/lib/data/featured-projects";
import getFeatureData from "@/lib/data/feature-card";

export default function HomePage() {

  const profile = getProfileData();
  const projects = getProjectData();
  const featureCards = getFeatureData();

  return (
    <>
      <Hero profile={profile} featureCards={featureCards} />
      <FeaturedWork projects={projects} projectsHref={profile.links.projects} />
      <CallToAction emailHref={profile.links.email} projectsHref={profile.links.projects} />
    </>
  );
}
