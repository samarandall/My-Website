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
        "A \"cowboys in space\" multiplayer first-person shooter built in Unreal Engine 5 with C++ across 18 gameplay modules. A server-authoritative Rust backend (Axum + PostgreSQL) handles auth, inventory, matchmaking and persistence, alongside the Gameplay Ability System and StateTree-driven AI. Includes a custom Python terrain-generation tool that builds 16-bit heightmaps from fBm / ridged-multifractal noise with C++-accelerated thermal & hydraulic erosion, 21 biomes, and SDF / marching-cubes cave meshing — with assets authored in Blender.",
      year: "2025",
      featured: true,
      role: "Solo Developer — gameplay, tools & backend",
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
        "A full-stack manufacturing e-commerce platform built with Next.js 15, React 19 and TypeScript. Server-authoritative catalog, pricing and tax; a Stripe stack using Checkout Sessions, Payment Intents and Stripe Tax with idempotency keys and signature-verified, exactly-once webhooks backed by PostgreSQL de-duplication. Shipped via multi-stage Docker to AWS ECR / EC2 behind Caddy with automatic TLS.",
      year: "2025",
      featured: true,
      role: "Full-stack Engineer",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "PostgreSQL",
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
      slug: "veridical-mobile",
      name: "Veridical Mobile Apps",
      blurb:
        "Native iOS & Android BLE controllers for trailer lighting and power-jack hardware.",
      description:
        "Native companion apps on both platforms — SwiftUI (iOS) and Kotlin / Jetpack Compose (Android) — that pair with 6-channel BLE relay hardware over the HC-08 UART profile to control trailer lighting and hydraulic power-jack systems. Includes a checksummed binary command protocol, latching and momentary (press-and-hold) controls, live RSSI display, and Android 12+ runtime permission handling.",
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
      name: "Lighthouse — Person Detection",
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
      slug: "hospital-reports",
      name: "Hospital Monitoring Reports",
      blurb: "Python automation that compiles multi-site data into scheduled reports.",
      description:
        "A Python automation tool that aggregates multi-location hospital temperature data and generates scheduled, audit-ready reports — replacing manual compilation and saving staff hours every week.",
      year: "2025",
      role: "Freelance Developer",
      stack: ["Python", "Automation"],
      tags: ["Python", "Automation"],
      featured: false,
    },
    {
      slug: "my-website",
      name: "This Portfolio",
      blurb: "The site you're on — Next.js, shipped via Docker to AWS behind Caddy.",
      description:
        "This portfolio: a static Next.js (App Router) site with Tailwind CSS and framer-motion, hardened with a strict Content-Security-Policy and security headers, and deployed as a non-root Docker container to AWS (ECR / EC2) behind a Caddy reverse proxy with automatic HTTPS.",
      year: "2026",
      role: "Developer",
      stack: ["Next.js", "TypeScript", "Tailwind", "Docker", "AWS", "Caddy"],
      tags: ["Next.js", "Docker"],
      featured: false,
      links: [
        {
          label: "Repo",
          href: "https://github.com/samarandall/myWebsite/",
          icon: <Github className="h-4 w-4" />,
        },
      ],
    },
  ];

  return projects;
}
