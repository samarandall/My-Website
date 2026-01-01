"use client";

import React from "react";
import cn from "@/lib/utils/cn";

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80",
        className
      )}
    >
      {children}
    </span>
  );
}
