import { Experience } from "@/types/types"
import {
  Activity,
  Briefcase,
  Building2,
  Car,
  Rocket,
} from "lucide-react";

export default function getExperienceData(): Experience[] {
  const experiences: Experience[] = [
    {
      role: "Software Engineer",
      company: "Veridical",
      location: "Austin, TX",
      dates: "Apr 2025 – Present",
      bullets: [
        "Architected and shipped Veridical's full-stack e-commerce platform, a Next.js 15 / React 19 / TypeScript app with a server-authoritative pricing, tax, and catalog layer so client-submitted data is never trusted.",
        "Built the payments stack on Stripe Checkout Sessions and Payment Intents with Stripe Tax, idempotency keys, and signature-verified webhooks processed exactly-once via PostgreSQL event de-duplication.",
        "Designed the PostgreSQL order schema (JSONB line items, indexed payment/shipping status, payment-intent logging) that backs fulfillment and reporting.",
        "Built native companion apps for both platforms, SwiftUI (iOS) and Kotlin / Jetpack Compose (Android), that drive 6-channel BLE relay hardware over the HC-08 UART profile to control trailer lighting and hydraulic power-jack systems, using a checksummed binary command protocol with latching and momentary controls.",
        "Containerized the platform with multi-stage, non-root Docker builds (Next.js standalone output) and shipped it through AWS ECR to EC2 behind a Caddy reverse proxy with automatic TLS, wiring up CI/CD to cut manual deploy time and post-release defects.",
        "Redesigned the storefront around a shared design system of reusable UI primitives and shipped full technical SEO: per-page metadata, Open Graph / Twitter cards, JSON-LD structured data, canonical URLs, and generated sitemaps.",
        "Translated stakeholder requirements into maintainable, type-safe features end-to-end with a reusable UI system and React Hook Form + Zod validation.",
      ],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "PostgreSQL",
        "Stripe",
        "Docker",
        "AWS",
        "Caddy",
        "CI/CD",
        "SwiftUI",
        "Kotlin",
        "BLE",
      ],
      icon: <Rocket className="h-4 w-4" />,
      emphasis: "primary",
    },
    {
      role: "Software Engineer (Freelance)",
      company: "Honest & Reliable Motors",
      location: "Liberty Hill, TX",
      dates: "Jun 2026",
      bullets: [
        "Built and launched honestandreliablemotors.com, a marketing and lead-generation platform for a Texas used-car dealership: Next.js 16 (App Router), React 19, TypeScript, and Tailwind v4.",
        "Implemented runtime-editable inventory and lead capture on SQLite (better-sqlite3) with Litestream streaming replication to S3 for point-in-time restore and disaster recovery.",
        "Built a custom admin panel secured with HMAC-signed cookie sessions: inventory CRUD plus an integrated email inbox where inbound mail (SES → S3) is parsed and indexed into SQLite, with reply and compose.",
        "Deployed as a hardened Docker container behind Caddy with automatic TLS on EC2, provisioned with least-privilege IAM policies and a documented deploy runbook.",
      ],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "SQLite",
        "Litestream",
        "AWS SES",
        "Docker",
        "Caddy",
      ],
      icon: <Car className="h-4 w-4" />,
    },
    {
      role: "Software Engineer (Freelance)",
      company: "Monitoring & Report Generator",
      location: "Remote",
      dates: "May 2025 – Jun 2025",
      bullets: [
        "Built a Python automation tool that aggregates multi-location hospital temperature data and generates scheduled reports, eliminating manual data compilation and saving staff hours every week.",
        "Designed the pipeline for unattended, scheduled runs that produce consistent, audit-ready output for stakeholders.",
      ],
      tags: ["Python", "Automation", "Reporting"],
      icon: <Activity className="h-4 w-4" />,
    },
    {
      role: "Software Engineer",
      company: "Paycom",
      location: "Dallas, TX",
      dates: "Jan 2024 – Mar 2025",
      bullets: [
        "Developed and maintained enterprise HR/payroll applications using PHP, React, TypeScript, and MySQL while following Agile methods, supporting thousands of daily active users.",
        "Redesigned and optimized high-traffic batch-processing pages by improving MySQL queries and front-end data exchange, making load times up to 2× faster.",
        "Implemented scalable server-side logic with robust error handling, enhancing performance and system reliability.",
        "Created modular, reusable React components improving maintainability and accelerating feature delivery.",
        "Contributed to daily code reviews and refactoring sessions to reduce defects and uphold clean-code standards.",
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
