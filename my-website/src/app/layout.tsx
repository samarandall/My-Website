import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "./page-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://samarandall.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sam Randall — Software Engineer",
    template: "%s · Sam Randall",
  },
  description:
    "Sam Randall is a software engineer who builds polished, well-architected products. Portfolio of projects and experience.",
  keywords: [
    "Sam Randall",
    "Software Engineer",
    "Portfolio",
    "TypeScript",
    "Next.js",
    "Systems Design",
  ],
  authors: [{ name: "Sam Randall" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sam Randall",
    title: "Sam Randall — Software Engineer",
    description:
      "Portfolio of projects and experience from software engineer Sam Randall.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Randall — Software Engineer",
    description:
      "Portfolio of projects and experience from software engineer Sam Randall.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Without JS, framer-motion never runs its entrance animation, so the
            content would stay at its initial opacity:0. Force it visible. */}
        <noscript>
          <style>{`*{opacity:1!important;filter:none!important}`}</style>
        </noscript>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
