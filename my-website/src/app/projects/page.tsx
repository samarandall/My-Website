import type { Metadata } from "next";
import ProjectsPage from "@/views/projects/project-page";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects built by Sam Randall.",
  alternates: { canonical: "/projects" },
};

export default function page() {
  return (
    <ProjectsPage />
  );
}
