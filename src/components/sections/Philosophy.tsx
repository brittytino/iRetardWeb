import { useRef } from "react";
import { useRevealStagger } from "@/lib/animations/presets";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  useRevealStagger(containerRef, ".reveal-section", { y: 60, duration: 1.2 });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center py-32 px-6 bg-black text-center reveal-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto z-10 w-full">
        <h2 className="text-[3.5rem] sm:text-[6rem] lg:text-[8rem] font-serif italic mb-20 text-white/90 leading-[0.9] tracking-tighter font-light select-none">
          Attention is <br/>
          <span className="font-sans font-black not-italic text-lime tracking-tight inline-block mt-4" style={{ textShadow: "0 0 40px rgba(198,255,0,0.3)" }}>infrastructure.</span>
        </h2>
        <div className="flex flex-col gap-6 text-xl sm:text-3xl text-white/40 font-medium max-w-2xl mx-auto tracking-tight">
          <p>No dark patterns.</p>
          <p>No dopamine treadmill.</p>
          <p className="text-white/90 mt-8 font-bold">Only intentional communication.</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-px h-32 bg-gradient-to-b from-white/20 to-transparent" />
    </section>
  );
}
