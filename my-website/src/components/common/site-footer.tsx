"use client";

import SmartLink from "@/components/ui/smart-link";
import { Profile } from "@/types/types";

export default function SiteFooter({ profile }: { profile: Profile }) {
  const links = profile.links;
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-xs text-white/60 md:flex-row">
      {/* suppressHydrationWarning: this client component is statically prerendered,
          so the build-time year can differ from the client's year across a New Year
          boundary; let React patch it silently instead of warning. */}
      <div suppressHydrationWarning>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </div>
      <div className="flex items-center gap-4">
        <SmartLink className="hover:text-white" href={links.experience}>
          Experience
        </SmartLink>
        <SmartLink className="hover:text-white" href={links.projects}>
          Projects
        </SmartLink>
        <SmartLink className="hover:text-white" href={links.resume}>
          Resume
        </SmartLink>
      </div>
    </footer>
  );
}
