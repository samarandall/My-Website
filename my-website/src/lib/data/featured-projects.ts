"use client";

import { ProjectCardModel, Profile } from "@/types/types";
import getProfileData from "./profile";

export default function getProjectData() {
  const profile: Profile = getProfileData();

  const projects: ProjectCardModel[] = [
    {
      name: "Personal Site",
      tag: "Next.js",
      desc: "A fast, tasteful website",
      href: profile.links.projects,
    },
    {
      name: "Veridical Manufacturing",
      tag: "Next.js",
      desc: "Production website deployed on AWS using stripe payments",
      href: profile.links.projects,
    },
  ];


  return projects;
}
