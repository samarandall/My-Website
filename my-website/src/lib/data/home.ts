"use client";

import { FeatureCardModel, ProjectCardModel, Profile } from "@/types/types";
import { Sparkles, Code2, Rocket } from "lucide-react";

export default function makeDefaultHomeData(overrides?: Partial<Profile>) {
  const profile: Profile = {
    name: "Sam",
    role: "Builder • Unreal C++ • Web",
    location: "Chicago, IL",
    blurb:
      "I ship polished experiences—from game systems to modern web apps. I like clean architecture, fast feedback loops, and a little bit of ✨.",
    highlights: ["Unreal Engine", "C++", "Next.js", "TypeScript", "Systems", "UI/UX"],
    ...overrides,
    links: {
      ...(overrides?.links ?? {}),
      email: overrides?.links?.email ?? "mailto:sam@example.com",
      github: overrides?.links?.github ?? "https://github.com/",
      linkedin: overrides?.links?.linkedin ?? "https://www.linkedin.com/",
      resume: overrides?.links?.resume ?? "/resume",
      projects: overrides?.links?.projects ?? "/projects",
      blog: overrides?.links?.blog ?? "/blog",
    },
  };

  const featureCards: FeatureCardModel[] = [
    {
      icon: Code2,
      title: "Engineering",
      desc: "Gameplay systems, tooling, and performance-minded code that scales.",
      cta: {
        label: "See projects",
        href: profile.links.projects
      },
    },
    {
      icon: Sparkles,
      title: "Design taste",
      desc: "Interfaces that feel crisp—motion, typography, and spacing done right.",
      cta: {
        label: "Read the blog",
        href: profile.links.blog
      },
    },
    {
      icon: Rocket,
      title: "Shipping mindset",
      desc: "I bias toward action: prototypes → iterations → real releases.",
      cta: {
        label: "Get in touch",
        href: profile.links.email
      },
    },
  ];


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


  return { profile, featureCards, projects };
}
