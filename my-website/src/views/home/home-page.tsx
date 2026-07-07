import Hero from "@/components/sections/home/hero";
import FeaturedWork from "@/components/sections/home/featured-work";
import CallToAction from "@/components/sections/home/cta";
import getProfileData from "@/lib/data/profile";
import getFeatureData from "@/lib/data/feature-card";
import getProjects from "@/lib/data/projects";

export default function HomePage() {

  const profile = getProfileData();
  const projects = getProjects();
  const featureCards = getFeatureData();

  return (
    <>
      <Hero profile={profile} featureCards={featureCards} />
      <FeaturedWork projects={projects} projectsHref={profile.links.projects} />
      <CallToAction emailHref={profile.links.email} projectsHref={profile.links.projects} />
    </>
  );
}
