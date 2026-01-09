"use client";
import SiteFooter from '@/components/common/site-footer';
import SiteHeader from '@/components/common/site-header';
import GlowGrid from '@/components/ui/glow-grid';
import getProfileData from '@/lib/data/profile';

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const profile = getProfileData();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <GlowGrid />
      <SiteHeader profile={profile} />
      <br /><br /><br />
      <main className="mx-auto w-full max-w-6xl px-5 pb-20">
        {children}
        <SiteFooter profile={profile} />
      </main>
    </div>
  );
}

