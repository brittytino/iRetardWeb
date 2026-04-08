"use client";

import { useRef } from "react";
import { useGlitchReveal, useRevealStagger } from "@/lib/animations/presets";
import { Ban, EyeOff, ShieldAlert, NavigationOff, Regex } from "lucide-react";

export default function Blocked() {
  const blockContainerRef = useRef<HTMLDivElement>(null);
  useGlitchReveal(blockContainerRef, ".glitch-item");
  useRevealStagger(blockContainerRef, ".reveal-section", { y: 60, duration: 1.2 });

  const blockedItems = [
    { title: "Home feed timeline", icon: Ban },
    { title: "Explore feed", icon: EyeOff },
    { title: "Reels discovery", icon: NavigationOff },
    { title: "Blend recommendations", icon: Regex },
    { title: "Telemetry-heavy tracking", icon: ShieldAlert },
  ];

  return (
    <section ref={blockContainerRef} className="blocked-container relative py-32 px-6 bg-[#020202] z-20 border-t border-t-white/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:items-center">
        
        <div className="lg:w-1/2 reveal-section relative">
          <div className="absolute -left-12 -top-12 w-32 h-32 bg-red-600/5 blur-3xl rounded-full" />
          <h2 
            className="font-space-grotesk font-black text-6xl sm:text-[5.5rem] tracking-tighter uppercase leading-[0.9] mb-8 text-transparent" 
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
          >
            Cut The <br/>
            <span className="text-red-500" style={{ WebkitTextStroke: "0px", textShadow: "0 0 40px rgba(239,68,68,0.2)" }}>Noise</span>
          </h2>
          
          <div className="h-[2px] w-24 bg-red-500/80 mb-10 shadow-[0_0_15px_rgba(239,68,68,0.4)]"></div>
          
          <p className="text-lg sm:text-xl text-white/60 max-w-md font-sans leading-relaxed tracking-wide">
            Algorithmic manipulation ends here. We forcefully isolate recommendation signals at the network level, dropping toxic payloads before they render.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4 relative">
          {/* Subtle grid background for the list to look like a system control panel */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 mask-image-linear pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }} />
          
          {blockedItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="glitch-item relative overflow-hidden bg-gradient-to-r from-red-950/10 to-transparent hover:from-red-900/20 transition-colors border-l-2 border-red-500/80 p-5 sm:p-6 flex items-center justify-between opacity-0 translate-y-12 backdrop-blur-sm group"
              >
                {/* Glitch sub-line style */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-red-500/0 via-red-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-red-500/70" strokeWidth={1.5} />
                  <span className="font-space-grotesk text-lg sm:text-xl text-white/90 font-medium tracking-tight">{item.title}</span>
                </div>
                
                <span className="text-red-500/80 font-mono text-xs tracking-[0.2em] px-3 py-1 bg-red-500/10 rounded-sm border border-red-500/20">
                  [ BLOCKED ]
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
