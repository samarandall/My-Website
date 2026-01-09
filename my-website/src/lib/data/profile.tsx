import { Profile } from "@/types/types";

export default function getProfileData(
  overrides?: Partial<Profile>
): Profile {
  const profile: Profile = {
    name: "Sam",
    role: "Software Engineer",
    location: "Texas, USA",
    blurb:
      "I like engineering polished experiences and clean architecture solutions.",
    highlights: ["Unreal Engine", "C++", "Next.js", "TypeScript", "Systems", "UI/UX"],
    ...overrides,
    links: {
      ...(overrides?.links ?? {}),
      email: overrides?.links?.email ?? "mailto:samarandall@proton.me",
      github: overrides?.links?.github ?? "https://github.com/samarandall",
      linkedin: overrides?.links?.linkedin ?? "https://www.linkedin.com/in/sam-randall",
      resume: overrides?.links?.resume ?? "/Resume.pdf",
      projects: overrides?.links?.projects ?? "/projects",
      blog: overrides?.links?.blog ?? "/blog",
    },
  };

  return profile;
}

