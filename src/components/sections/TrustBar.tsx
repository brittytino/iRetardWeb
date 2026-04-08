"use client";

import { useRef } from "react";
import { useScrollParallax } from "@/lib/animations/presets";
import { Code2, ShieldCheck, Download, MessageSquare } from "lucide-react";
import { useAnimatedCounter } from "@/lib/animations/useAnimatedCounter";
import type { LucideIcon } from "lucide-react";

interface CounterItemProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  delayVal?: number;
}

function CounterItem({ icon: Icon, value, suffix, label, delayVal = 0 }: CounterItemProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const displayed = useAnimatedCounter(counterRef, value, 2, suffix);
  return (
    <div className="trust-metric flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300" style={{ transform: `translateY(${delayVal}px)` }}>
      <Icon className="w-8 h-8 text-cyan/70 mb-4 stroke-[1.5px]" />
      <div className="text-4xl sm:text-5xl font-black text-white font-space-grotesk tracking-tighter">
        <span ref={counterRef}>{displayed}</span>
      </div>
      <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-3">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  const trustBarRef = useRef<HTMLDivElement>(null);
  useScrollParallax(trustBarRef, ".trust-metric", { yVal: 40, scrub: 0.8 });

  return (
    <section ref={trustBarRef} className="relative py-24 px-6 max-w-[1200px] mx-auto z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
        <CounterItem icon={Code2} value={100} suffix="%" label="Open Source" delayVal={0} />
        <div className="trust-metric flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white/[0.02] border border-lime/10 shadow-[0_0_40px_rgba(198,255,0,0.03)] backdrop-blur-sm" style={{ transform: `translateY(${-20}px)` }}>
          <ShieldCheck className="w-8 h-8 text-lime/70 mb-4 stroke-[1.5px]" />
          <div className="text-4xl sm:text-5xl font-black text-white font-space-grotesk tracking-tighter">Auto</div>
          <div className="text-lime/60 text-xs font-bold uppercase tracking-[0.2em] mt-3">Signed APKs</div>
        </div>
        <CounterItem icon={Download} value={10} suffix="k+" label="Downloads" delayVal={40} />
        <div className="trust-metric flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm" style={{ transform: `translateY(${-10}px)` }}>
          <MessageSquare className="w-8 h-8 text-white/40 mb-4 stroke-[1.5px]" />
          <div className="text-4xl sm:text-5xl font-black text-white font-space-grotesk tracking-tighter">24/7</div>
          <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-3">Discord</div>
        </div>
      </div>
    </section>
  );
}
