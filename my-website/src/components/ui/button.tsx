"use client";

import React from "react";
import SmartLink from "./smart-link";
import cn from "@/lib/utils/cn";

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: {
  href: string
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg" | "icon";
  className?: string;
  ariaLabel?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50";


  const sizes: Record<typeof size, string> = {
    md: "h-10 px-4 text-sm rounded-xl",
    lg: "h-11 px-5 text-sm rounded-2xl",
    icon: "h-10 w-10 rounded-xl",
  };


  const variants: Record<typeof variant, string> = {
    primary: "bg-white text-zinc-950 hover:bg-white/90",
    outline: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
  };


  return (
    <SmartLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </SmartLink>
  );
}
