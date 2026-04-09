"use client";

import { useRef } from "react";
import { useRevealStagger } from "@/lib/animations/presets";
import { MessageCircle, MonitorPlay, UserCircle, Search, Bell, Film, Puzzle, Smartphone, Wrench } from "lucide-react";

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

  const products = [
    {
      title: "Mobile Instagram Application",
      icon: Smartphone,
      glow: "text-cyan",
      border: "border-cyan/20",
      bg: "bg-cyan/5",
      text: "A patched Instagram client focused on utility over addiction loops.",
    },
    {
      title: "Open-Source Chrome Extension",
      icon: Puzzle,
      glow: "text-lime",
      border: "border-lime/20",
      bg: "bg-lime/5",
      text: "Distributed as unpacked/local install. No store spend, just source and skills.",
    },
  ];

  return (
    <section ref={worksContainerRef} className="works-container relative py-40 px-6 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.03),transparent_60%)]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl ml-auto text-left lg:text-right mb-14 reveal-section">
          <h2 className="font-space-grotesk font-black text-5xl sm:text-[5rem] tracking-tighter mb-6 text-white leading-[0.9]">
            Two Sharp <br/>
            <span className="text-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Products</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 font-sans tracking-wide leading-relaxed lg:ml-auto max-w-2xl">
            Keep what matters. Remove what manipulates. The mobile app and browser extension both push toward intentional use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          {products.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`rounded-3xl border ${item.border} ${item.bg} p-6 sm:p-8 backdrop-blur-sm`}>
                <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold ${item.glow}`}>
                  <Icon className="w-4 h-4" />
                  Product
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl text-white font-black tracking-tight">{item.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-white/10 p-5 sm:p-6 mb-16 bg-gradient-to-r from-white/[0.02] to-white/[0.01] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 mb-2">Extension distribution policy</div>
            <p className="text-white/75 leading-relaxed">We are not spending money for browser store publishing right now. Use unpacked extension mode from local files.</p>
          </div>
          <div className="inline-flex items-center gap-2 text-lime text-sm font-semibold">
            <Wrench className="w-4 h-4" />
            Local install workflow in docs
          </div>
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
