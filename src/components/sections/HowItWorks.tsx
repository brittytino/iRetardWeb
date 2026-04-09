import { useRef } from "react";
import { useRevealStagger } from "@/lib/animations/presets";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  useRevealStagger(containerRef, ".reveal-section", { y: 60, duration: 1.2 });

  return (
     <section ref={containerRef} className="relative py-32 px-6 max-w-[1400px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-0 bg-[#080808] border border-white/5 rounded-[3rem] overflow-hidden relative shadow-2xl reveal-section">
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-lime/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="flex-1 z-10 p-12 lg:p-24 pb-8 md:pb-24 border-r border-white/5 relative">
          <h2 className="text-5xl font-black mb-10 tracking-tighter text-white">How both products operate.</h2>
           <p className="text-xl text-white/50 font-medium leading-relaxed mb-6">
            On mobile, requests are filtered at the network route layer before distracting surfaces can render.
           </p>
           <p className="text-xl text-white/50 font-medium leading-relaxed">
            In the browser extension, feed-heavy UI chunks are suppressed by local script logic. No paid store pipeline needed.
           </p>
        </div>

        <div className="flex-1 flex flex-col justify-center bg-black p-12 lg:p-24 z-10">
           <div className="font-mono text-sm max-w-sm w-full bg-[#0a0a0a] p-8 rounded-2xl border border-white/[0.03] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
             <div className="text-lime/80 mb-6">→ intercepting traffic...</div>
             <div className="text-white/70 mb-2 truncate">GET /api/v1/feed/timeline/</div>
             <div className="text-red-500 font-bold mb-8 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> DROPPED (Rule 42)</div>
             
             <div className="h-px bg-white/5 w-full my-6" />
             
             <div className="text-white/70 mb-2 truncate">GET /api/v1/direct_v2/inbox/</div>
             <div className="text-cyan font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_#00e5ff]"></span> ALLOWED (Passthrough)</div>

           <div className="h-px bg-white/5 w-full my-6" />

           <div className="text-white/70 mb-2 truncate">extension/contentScript.js</div>
           <div className="text-lime font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-lime shadow-[0_0_8px_#c6ff00]"></span> LOADED (Unpacked)</div>
           </div>
        </div>
      </div>
    </section>
  );
}
