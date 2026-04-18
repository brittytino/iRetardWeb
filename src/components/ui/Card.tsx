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
  blocked: "border-[rgba(255,0,127,0.2)] hover:border-[rgba(255,0,127,0.5)] hover:shadow-[0_8px_30px_rgba(255,0,127,0.15)]",
  allowed: "border-[rgba(0,229,255,0.2)] hover:border-[rgba(0,229,255,0.5)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.15)]",
  neutral: "border-border hover:border-border-light",
};

const iconBgStyles = {
  blocked: "bg-[rgba(255,0,127,0.1)] text-[#ff007f]",
  allowed: "bg-[rgba(0,229,255,0.1)] text-[#00e5ff]",
  neutral: "bg-surface-light text-muted text-white",
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
        rounded-3xl p-8
        glass-card
        transition-all duration-500 ease-out
        hover:-translate-y-1
        ${variantStyles[variant]}
      `}
    >
      {/* Premium accent highlight on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      
      <div
        className={`
        w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-6
        transition-colors duration-300
        ${iconBgStyles[variant]}
      `}
      >
        {icon}
      </div>
      <h3 className="font-bold text-xl text-foreground font-outfit tracking-tight">{title}</h3>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed font-medium">{description}</p>
      )}
    </div>
  );
}
