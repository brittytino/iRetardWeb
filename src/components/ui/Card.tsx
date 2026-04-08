"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/lib/animations/useGsapReveal";

interface CardProps {
  icon: string;
  title: string;
  description?: string;
  variant?: "blocked" | "allowed" | "neutral";
  index?: number;
}

const variantStyles = {
  blocked: "border-red-500/20 hover:border-red-500/40",
  allowed: "border-cyan/20 hover:border-cyan/40",
  neutral: "border-border hover:border-border",
};

const iconBgStyles = {
  blocked: "bg-red-500/10 text-red-400",
  allowed: "bg-cyan/10 text-cyan",
  neutral: "bg-surface-light text-muted",
};

export default function Card({
  icon,
  title,
  description,
  variant = "neutral",
  index = 0,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { delay: index * 0.08 });

  return (
    <div
      ref={ref}
      className={`
        group relative overflow-hidden
        rounded-2xl border p-6
        bg-surface/50 backdrop-blur-sm
        transition-all duration-300
        hover:bg-surface-light/50
        hover:shadow-lg
        ${variantStyles[variant]}
      `}
    >
      <div
        className={`
        w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4
        ${iconBgStyles[variant]}
      `}
      >
        {icon}
      </div>
      <h3 className="font-bold text-base text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
