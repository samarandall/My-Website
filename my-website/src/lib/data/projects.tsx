import { Project } from "@/types/types";
import {
  ExternalLink,
  Github,
} from "lucide-react";

export default function getProjects(): Project[] {
  const projects: Project[] = [
    {
      slug: "raid",
      name: "Raid",
      blurb:
        "A deep-space multiplayer FPS in Unreal Engine 5 with a custom procedural terrain toolchain.",
      description:
        "A \"cowboys in space\" multiplayer first-person shooter built in Unreal Engine 5 with C++ across 18 gameplay modules. A server-authoritative Rust backend (Axum + PostgreSQL) handles auth, inventory, matchmaking and persistence, alongside the Gameplay Ability System and StateTree-driven AI. Includes a custom Python terrain-generation tool that builds 16-bit heightmaps from fBm / ridged-multifractal noise with C++-accelerated thermal & hydraulic erosion, 21 biomes, and SDF / marching-cubes cave meshing, with assets authored in Blender.",
      year: "2025",
      featured: true,
      role: "Solo Developer: gameplay, tools & backend",
      stack: [
        "Unreal Engine 5",
        "C++",
        "Blueprints",
        "Python",
        "Rust",
        "PostgreSQL",
        "Blender",
      ],
      tags: ["Unreal Engine 5", "C++", "Procedural Gen", "Multiplayer"],
      metrics: [
        { label: "Engine", value: "UE 5.7 · C++" },
        { label: "Built", value: "Custom terrain generator" },
      ],
    },
    {
      slug: "veridical-web",
      name: "Veridical Manufacturing",
      blurb: "Production e-commerce platform with a hardened Stripe payments stack.",
      description:
        "A full-stack manufacturing e-commerce platform built with Next.js 15, React 19 and TypeScript. Server-authoritative catalog, pricing and tax; a Stripe checkout hardened for production with idempotency keys, Stripe Tax, and cart-aware shipping rates. Redesigned around a shared design system of reusable UI primitives, with full technical SEO: per-page metadata, Open Graph / Twitter cards, JSON-LD structured data, canonical URLs and generated sitemaps. Shipped via a check-gated deploy pipeline (types, lint, build) and multi-stage Docker to AWS ECR / EC2 behind Caddy with automatic TLS.",
      year: "2025 – 2026",
      featured: true,
      role: "Full-stack Engineer",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Stripe",
        "Docker",
        "AWS",
        "Caddy",
      ],
      tags: ["Next.js", "Stripe", "AWS"],
      metrics: [
        { label: "Focus", value: "Payments + Reliability" },
        { label: "Delivery", value: "Production" },
      ],
      links: [
        {
          label: "Live",
          href: "https://www.veridicalmanufacturing.com",
          icon: <ExternalLink className="h-4 w-4" />,
        },
      ],
    },
    {
      slug: "dealership-web",
      name: "Honest & Reliable Motors",
      blurb:
        "Marketing + lead-gen platform for a Texas used-car dealership, with a custom admin panel and email inbox.",
      description:
        "A production marketing and lead-generation website for Honest & Reliable Motors, a Texas used-car dealership built around a vehicle-finder service. Next.js 16 (App Router), React 19, TypeScript and Tailwind v4, backed by SQLite (better-sqlite3) with Litestream streaming replication to S3 for point-in-time restore. Includes runtime-editable inventory, lead-capture forms, and a custom admin panel with HMAC-signed cookie sessions — inventory CRUD plus an integrated email inbox where inbound mail (SES → S3) is parsed and indexed into SQLite, with reply and compose. Deployed as a hardened Docker container behind Caddy with automatic TLS on EC2, using least-privilege IAM policies and a documented deploy runbook.",
      year: "2026",
      featured: true,
      role: "Full-stack Engineer (Freelance)",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "SQLite",
        "Litestream",
        "AWS SES",
        "Docker",
        "AWS",
        "Caddy",
      ],
      tags: ["Next.js", "SQLite", "AWS"],
      metrics: [
        { label: "Focus", value: "Lead-gen + Admin tooling" },
        { label: "Delivery", value: "Production" },
      ],
      links: [
        {
          label: "Live",
          href: "https://honestandreliablemotors.com",
          icon: <ExternalLink className="h-4 w-4" />,
        },
      ],
    },
    {
      slug: "veridical-mobile",
      name: "Veridical Mobile Apps",
      blurb:
        "Native iOS & Android BLE controllers for trailer lighting and power-jack hardware.",
      description:
        "Native companion apps on both platforms, SwiftUI (iOS) and Kotlin / Jetpack Compose (Android), that pair with 6-channel BLE relay hardware over the HC-08 UART profile to control trailer lighting and hydraulic power-jack systems. Includes a checksummed binary command protocol, latching and momentary (press-and-hold) controls, live RSSI display, and Android 12+ runtime permission handling.",
      year: "2025",
      featured: true,
      role: "Mobile Engineer (iOS + Android)",
      stack: [
        "Swift",
        "SwiftUI",
        "Kotlin",
        "Jetpack Compose",
        "CoreBluetooth",
        "BLE / GATT",
      ],
      tags: ["SwiftUI", "Kotlin", "BLE"],
      metrics: [
        { label: "Platforms", value: "iOS + Android" },
        { label: "Hardware", value: "6-channel BLE relay" },
      ],
    },
    {
      slug: "lighthouse-person-detection",
      name: "Lighthouse: Person Detection",
      blurb: "Real-time person detection streaming YOLOv11 over WebSockets.",
      description:
        "A real-time person-detection web app: a FastAPI + OpenCV service ingests webcam / RTSP / video streams, a YOLOv11 model performs detection, and a Django + Channels backend pushes live stats over WebSockets to a Vue 3 / Vuetify frontend. Multi-service, GPU-aware, and containerized with Docker Compose.",
      year: "2025",
      featured: true,
      role: "AI & Full-stack Engineer",
      stack: [
        "Python",
        "Django",
        "Vue.js",
        "FastAPI",
        "OpenCV",
        "YOLOv11",
        "WebSocket",
        "Docker",
      ],
      tags: ["YOLOv11", "Django", "Vue"],
      links: [
        {
          label: "Repo",
          href: "https://github.com/samarandall/lighthouse-person-detection",
          icon: <Github className="h-4 w-4" />,
        },
      ],
    },
    {
      slug: "my-website",
      name: "This Portfolio",
      blurb: "The site you're on: Next.js, shipped via Docker to AWS behind Caddy.",
      description:
        "This portfolio: a static Next.js (App Router) site with Tailwind CSS, hardened with a strict Content-Security-Policy and security headers, and deployed as a non-root Docker container to AWS (ECR / EC2) behind a Caddy reverse proxy with automatic HTTPS.",
      year: "2026",
      role: "Developer",
      stack: ["Next.js", "TypeScript", "Tailwind", "Docker", "AWS", "Caddy"],
      tags: ["Next.js", "Docker"],
      featured: false,
    },
  ];

  return projects;
}
