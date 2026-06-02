import type { Metadata } from "next";
import ExperiencePage from "@/views/experience/experience-page";

export const metadata: Metadata = {
  title: "Experience",
  description: "Sam Randall's professional experience, roles, and education.",
  alternates: { canonical: "/experience" },
};

export default function page() {
  return (
    <ExperiencePage />
  );
}
