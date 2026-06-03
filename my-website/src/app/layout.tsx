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
    default: "Sam Randall, Software Engineer",
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
    // No `title` here: Next falls back to each route's resolved <title>, so
    // shared links to /projects and /experience get page-specific OG titles.
    description:
      "Portfolio of projects and experience from software engineer Sam Randall.",
  },
  twitter: {
    card: "summary_large_image",
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

// schema.org Person: helps search engines build a knowledge-graph entity for Sam.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sam Randall",
  jobTitle: "Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  sameAs: [
    "https://github.com/samarandall",
    "https://www.linkedin.com/in/sam-randall",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
