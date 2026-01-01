"use client";

import type { LucideIcon } from "lucide-react";

export type ProfileLinks = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  projects: string;
  blog: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  blurb: string;
  links: ProfileLinks;
  highlights: string[];
};

export type FeatureCardModel = {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: { label: string; href: string };
};

export type ProjectCardModel = {
  name: string;
  tag: string;
  desc: string;
  href: string;
};
