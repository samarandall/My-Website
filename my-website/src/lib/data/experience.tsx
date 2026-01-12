import { Experience } from "@/types/types"
import {
  Briefcase,
  Building2,
  Rocket,
  Wrench,
} from "lucide-react";

export default function getExperienceData(): Experience[] {
  const experiences: Experience[] = [
    {
      role: "Software Engineer",
      company: "Veridical",
      location: "Austin, TX",
      dates: "Apr 2025 – Present",
      bullets: [
        "Built and launched a full-stack web application on AWS (EC2, S3, CloudFront) ensuring scalability and uptime.",
        "Developing an iOS app using SwiftUI that interfaces with Bluetooth for Veridical products.",
        "Developed a Next.js + TypeScript frontend with reusable, responsive components improving development time.",
        "Integrated Stripe Checkout and Payment Intents, reducing billing errors and streamlining checkout.",
        "Containerized builds with Docker and implemented CI/CD pipelines for AWS deployment, cutting manual deployment time and post-release bugs.",
        "Collaborated with stakeholders to convert business requirements into enterprise software aligned with company goals.",
        "Leveraged React, Tailwind CSS, HTML, AWS, and MySQL to deliver secure, maintainable code.",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind",
        "AWS",
        "Stripe",
        "Docker",
        "CI/CD",
        "MySQL",
        "SwiftUI",
        "Bluetooth",
      ],
      icon: <Rocket className="h-4 w-4" />,
      emphasis: "primary",
    },
    {
      role: "Software Engineer (Freelance)",
      company: "Monitoring & Report Generator",
      location: "Remote",
      dates: "May 2025 – Jun 2025",
      bullets: [
        "Built a Python automation tool to aggregate multi-location hospital temperature data and generate scheduled reports, eliminating manual compilation and saving hours weekly.",
      ],
      tags: ["Python", "Automation", "Reporting"],
      icon: <Wrench className="h-4 w-4" />,
      emphasis: "secondary",
    },
    {
      role: "Software Engineer",
      company: "Paycom",
      location: "Dallas, TX",
      dates: "Jan 2024 – Mar 2025",
      bullets: [
        "Developed and maintained enterprise HR/payroll applications using PHP, React, TypeScript, and MySQL while following Agile Methods, supporting thousands of daily active users.",
        "Redesigned and optimized high-traffic batch-processing pages by improving MySQL queries and optimizing front-end data exchange, making load times up to 2× faster.",
        "Implemented scalable server-side logic with robust error handling, enhancing performance and system reliability.",
        "Created modular, reusable React components improving maintainability and accelerating feature delivery.",
        "Contributed to daily code reviews and refactoring sessions to reduce defects and uphold clean code standards.",
      ],
      tags: ["PHP", "React", "TypeScript", "MySQL", "Agile", "Performance"],
      icon: <Building2 className="h-4 w-4" />,
    },
    {
      role: "Software Engineer Intern",
      company: "Paycom",
      location: "Dallas, TX",
      dates: "May 2023 – Aug 2023",
      bullets: [
        "Developed an internal event-planning web app using a C#/.NET backend and React/TypeScript frontend, improving recruiter workflow efficiency through automated scheduling.",
        "Co-developed a C# + TypeScript hackathon project, earning first place and demonstrating full-stack delivery.",
      ],
      tags: ["C#", ".NET", "React", "TypeScript"],
      icon: <Briefcase className="h-4 w-4" />,
    },
  ]

  return experiences;
}
