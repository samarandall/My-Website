import Link from "next/link";

// Rendered inside the root layout (dark site chrome: header, <main>, footer),
// so this only supplies the on-brand 404 body. Next marks /404 noindex automatically.
export default function NotFound() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur md:p-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl" />
      </div>

      <p className="text-sm font-semibold tracking-widest text-white/50">404</p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-white/70">
        The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s get you back on track.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-medium text-zinc-950 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Back home
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          View projects
        </Link>
      </div>
    </section>
  );
}
