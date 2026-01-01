"use client";

import React from "react";
import cn from "@/lib/utils/cn";

export default function CardContent({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}
