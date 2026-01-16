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
      name: "Veridical Website",
      blurb: "Next.js app deployed on AWS with Stripe payments.",
      description:
        "A production web application with a reusable UI system, payments integration, and performance-minded data flows.",
      year: "2025",
      featured: false,
      role: "Frontend + Full-stack",
      stack: ["Next.js", "TypeScript", "React", "Tailwind", "AWS", "Stripe"],
      tags: ["UI", "Payments", "AWS"],
      metrics: [
        { label: "Focus", value: "Performance + UX" },
        { label: "Delivery", value: "Production" },
      ],
      links: [
        { label: "Live", href: "https://www.veridicalmanufacturing.com", icon: <ExternalLink className="h-4 w-4" /> }
      ],
    },
    {
      slug: "ai-person-detection",
      name: "Person Detection AI Model",
      blurb: "A web app using Django, Vue js, and Ultralitics YOLO AI model",
      year: "2025",
      description: "A complete web app utilizing Django for the backend web server and video stream processor, Vue js for the frontend, and Ultralitics YOLO model for person detection.",
      featured: true,
      role: "AI and Full-Stack Engineer",
      stack: ["Vue.js", "TypeScript", "React", "Python", "Django", "Ultralitics YOLO"],
      tags: ["AI Model", "Full-Stack"],
      links: [
        { label: "Repo", href: "https://github.com/samarandall/lighthouse-person-detection", icon: <Github className="h-4 w-4" /> }
      ],
    },
    {
      slug: "my-website",
      name: "My Website",
      blurb: "Next Js app deployed on AWS",
      description:
        "A lightweight automation that aggregates data from multiple locations and produces consistent output for stakeholders.",
      year: "2025",
      featured: true,
      role: "Developer",
      stack: ["TypeScript", "Node.js", "Next.js/React", "AWS"],
      tags: ["Automation", "Reporting"],
      links: [
        { label: "Repo", href: "https://github.com/samarandall/myWebsite/", icon: <Github className="h-4 w-4" /> }
      ],
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
      featured: false,
    },
  ];

  return projects;
}
