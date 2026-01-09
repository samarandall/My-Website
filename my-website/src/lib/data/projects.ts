"use client";

import { ProjectCardModel, Profile } from "@/types/types";
import getProfileData from "./profile";

export default function getProjectData() {
  const profile: Profile = getProfileData();

  const projects: ProjectCardModel[] = [
    {
      name: "MyProject (UE)",
      tag: "Unreal C++",
      desc: "A starter project with clean modules, clangd tooling, and a focused gameplay loop.",
      href: profile.links.projects,
    },
    {
      name: "Personal Site",
      tag: "Next.js",
      desc: "A fast, tasteful home on the internet—content, projects, and experiments.",
      href: profile.links.projects,
    },
  ];


  return projects;
}
