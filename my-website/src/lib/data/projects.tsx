import { Project } from "@/types/types";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

export default function getProjects(): Project[] {
  const projects: Project[] = [
    {
      slug: "veridical-web",
      name: "Veridical Web",
      blurb: "Next.js app deployed on AWS with Stripe payments.",
      description:
        "A production web application with a reusable UI system, payments integration, and performance-minded data flows.",
      year: "2025",
      featured: true,
      role: "Frontend + Full-stack",
      stack: ["Next.js", "TypeScript", "React", "Tailwind", "AWS", "Stripe"],
      tags: ["UI", "Payments", "AWS"],
      metrics: [
        { label: "Focus", value: "Performance + UX" },
        { label: "Delivery", value: "Production" },
      ],
      links: [
        { label: "Live", href: "www.veridicalmanufacturing.com", icon: <ExternalLink className="h-4 w-4" /> },
        { label: "Repo", href: "#", icon: <Github className="h-4 w-4" /> },
      ],
    },
    {
      slug: "my-website",
      name: "My Website",
      blurb: "Next Js app deployed on AWS",
      description:
        "A lightweight automation that aggregates data from multiple locations and produces consistent output for stakeholders.",
      year: "2025",
      role: "Developer",
      stack: ["Python"],
      tags: ["Automation", "Reporting"],
      links: [{ label: "Case study", href: "#", icon: <ArrowUpRight className="h-4 w-4" /> }],
    },
    {
      slug: "hospital-reports",
      name: "Hospital Monitoring Reports",
      blurb: "Automation tool that generates scheduled reports.",
      description:
        "A lightweight automation that aggregates data from multiple locations and produces consistent output for stakeholders.",
      year: "2025",
      role: "Developer",
      stack: ["Python"],
      tags: ["Automation", "Reporting"],
      links: [{ label: "Case study", href: "#", icon: <ArrowUpRight className="h-4 w-4" /> }],
    },
  ];

  return projects;
}
