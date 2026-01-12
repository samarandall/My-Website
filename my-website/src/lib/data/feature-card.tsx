"use client";

import { FeatureCardModel, Profile } from "@/types/types";
import { Sparkles, Code2, Rocket } from "lucide-react";
import getProfileData from "./profile";

export default function getFeatureData() {
  const profile: Profile = getProfileData();

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
        href: profile.links.experience
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

  return featureCards;
}
