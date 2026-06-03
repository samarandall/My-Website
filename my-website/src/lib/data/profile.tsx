import { Profile } from "@/types/types";

export default function getProfileData(
  overrides?: Partial<Profile>
): Profile {
  const profile: Profile = {
    name: "Sam Randall",
    role: "Software Engineer",
    location: "Texas, USA",
    blurb:
      "I like engineering polished experiences with clean architecture.",
    highlights: ["TypeScript", "React / Next.js", "Python", "C++", "AWS", "Docker"],
    ...overrides,
    links: {
      ...(overrides?.links ?? {}),
      email: overrides?.links?.email ?? "mailto:samrandall100@gmail.com",
      github: overrides?.links?.github ?? "https://github.com/samarandall",
      linkedin: overrides?.links?.linkedin ?? "https://www.linkedin.com/in/sam-randall",
      resume: overrides?.links?.resume ?? "/Resume.pdf",
      projects: overrides?.links?.projects ?? "/projects",
      experience: overrides?.links?.experience ?? "/experience",
    },
  };

  return profile;
}

