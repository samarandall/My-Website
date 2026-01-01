"use client";

import React from "react";
import cn from '@/lib/utils/cn';

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl border border-white/10 bg-white/[0.04] shadow-sm", className)}>{children}</div>;
}
