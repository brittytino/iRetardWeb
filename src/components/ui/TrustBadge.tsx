"use client";

import { useRef } from "react";
import { useAnimatedCounter } from "@/lib/animations/useAnimatedCounter";

interface TrustBadgeProps {
  icon: string;
  label: string;
  value?: number;
  valueSuffix?: string;
  displayValue?: string;
}

export default function TrustBadge({
  icon,
  label,
  value,
  valueSuffix = "",
  displayValue,
}: TrustBadgeProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const displayed = useAnimatedCounter(counterRef, value ?? 0, 2, valueSuffix);

  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-cyan/20 transition-all duration-300 group">
      <span className="text-2xl">{icon}</span>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        {value !== undefined ? (
          <span ref={counterRef}>{displayed}</span>
        ) : (
          displayValue || "—"
        )}
      </span>
      <span className="text-xs text-muted uppercase tracking-widest">{label}</span>
    </div>
  );
}
