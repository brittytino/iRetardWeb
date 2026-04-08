import { useRef } from "react";
import { useScrollPipeline } from "@/lib/animations/presets";

export default function Pipeline() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  useScrollPipeline(pipelineRef, ".pipeline-step", ".pipeline-line-fill", ".pipeline-line-fill-mobile");

  return (
    <section ref={pipelineRef} className="pipeline-container relative py-48 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-sm font-bold text-center mb-32 tracking-[0.4em] uppercase text-white/30">The Pipeline</h2>
        
        <div className="relative flex flex-col max-w-4xl mx-auto pl-16 sm:pl-0">
          <div className="absolute left-[50%] top-4 bottom-4 w-px bg-white/5 -translate-x-1/2 hidden sm:block" />
          <div className="pipeline-line-fill absolute left-[50%] top-4 w-px bg-cyan shadow-[0_0_15px_#00e5ff] -translate-x-1/2 hidden sm:block z-20" />
          
          <div className="absolute left-8 top-4 bottom-4 w-px bg-white/5 sm:hidden" />
          <div className="pipeline-line-fill-mobile absolute left-8 top-4 w-px bg-cyan shadow-[0_0_15px_#00e5ff] sm:hidden z-20" />

          {[
            { step: "Tag", desc: "Automated trigger off repository tagging." },
            { step: "Build", desc: "Fetches base Instagram APK & applies our semantic patches." },
            { step: "Sign", desc: "Keystore secures the package against tampering." },
            { step: "Ship", desc: "Published directly to GitHub Releases." }
          ].map((item, i) => (
            <div key={i} className={`pipeline-step relative flex sm:w-[50%] mb-24 ${i % 2 === 0 ? "sm:pr-24 sm:self-start sm:text-right" : "sm:pl-24 sm:self-end sm:text-left"} pl-8 sm:pl-0 w-full`}>
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-black border-[3px] border-cyan shadow-[0_0_15px_rgba(0,229,255,0.6)] ${i % 2 === 0 ? "right-[-8px]" : "left-[-8px]"} sm:block hidden z-30`} />
              <div className="absolute left-[-24px] top-2 w-4 h-4 rounded-full bg-black border-[3px] border-cyan shadow-[0_0_15px_rgba(0,229,255,0.6)] sm:hidden z-30" />

              <div className="w-full">
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">{item.step}.</h3>
                <p className="text-white/40 text-xl font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
