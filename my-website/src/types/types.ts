"use client";

import type { LucideIcon } from "lucide-react";

export type ProfileLinks = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  projects: string;
  experience: string;
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


export type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  tags: string[];
  icon: React.ReactNode;
  emphasis?: "primary" | "secondary";
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  date: string;
  details?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  year?: string;
  featured?: boolean;
  role?: string;
  stack: string[];
  tags: string[];
  metrics?: Array<{ label: string; value: string }>;
  links?: ProjectLink[];
};


