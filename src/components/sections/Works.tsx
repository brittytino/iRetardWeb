"use client";

import { useRef } from "react";
import { useRevealStagger } from "@/lib/animations/presets";
import { MessageCircle, MonitorPlay, UserCircle, Search, Bell, Film } from "lucide-react";

export default function Works() {
  const worksContainerRef = useRef<HTMLDivElement>(null);
  useRevealStagger(worksContainerRef, ".reveal-section", { y: 60, duration: 1.2 });
  useRevealStagger(worksContainerRef, ".smooth-item", { x: -20, y: 0, stagger: 0.1, duration: 1.0 });

  const features = [
    { name: "Direct messages", icon: MessageCircle },
    { name: "Stories", icon: MonitorPlay },
    { name: "Profile", icon: UserCircle },
    { name: "Search", icon: Search },
    { name: "Notifications", icon: Bell },
    { name: "Reels shared in DMs", icon: Film },
  ];

  return (
    <section ref={worksContainerRef} className="works-container relative py-40 px-6 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.03),transparent_60%)]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl ml-auto text-left lg:text-right mb-24 reveal-section">
          <h2 className="font-space-grotesk font-black text-5xl sm:text-[5rem] tracking-tighter mb-6 text-white leading-[0.9]">
            Keep The <br/>
            <span className="text-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Connection</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 font-sans tracking-wide leading-relaxed lg:ml-auto max-w-2xl">
            We preserve human communication. Everything you actually care about continues to function flawlessly with zero distraction or friction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="smooth-item group border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-500 hover:border-cyan/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-cyan/10 group-hover:border-cyan/20 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-white/50 group-hover:text-cyan transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-space-grotesk font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
