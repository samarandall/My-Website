"use client";

import React from "react";
import Link from "next/link";
import isExternalHref from "@/lib/utils/links";

export default function SmartLink({
  href,
  className,
  children,
  ariaLabel,
  onClick,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  // Safety: never throw if href is temporarily empty while you customize.
  if (!href) return <span className={className}>{children}</span>;


  if (isExternalHref(href)) {
    const isHttp = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }


  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  );
}
