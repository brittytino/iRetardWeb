"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

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
  const counter = value !== undefined ? useAnimatedCounter(value, 2, valueSuffix) : null;

  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-cyan/20 transition-all duration-300 group">
      <span className="text-2xl">{icon}</span>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        {counter ? (
          <span ref={counter.ref}>{counter.displayed}</span>
        ) : (
          displayValue || "—"
        )}
      </span>
      <span className="text-xs text-muted uppercase tracking-widest">{label}</span>
    </div>
  );
}
