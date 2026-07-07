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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-950"
        >
          Skip to content
        </a>
        <GlowGrid />
        <SiteHeader profile={profile} />
        <main id="main-content" className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10">
          {children}
          <SiteFooter profile={profile} />
        </main>
      </div>
  );
}

