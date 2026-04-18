import Button from "@/components/ui/Button";
import { ArrowDown, BookOpen, Puzzle, Smartphone } from "lucide-react";

export default function HeroContent() {
  return (
    <section className="relative z-10 w-full min-h-screen px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center h-full pointer-events-none">
        
        {/* Premium Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md pointer-events-auto shadow-[0_0_20px_rgba(255,0,127,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_10px_#00e5ff]" />
          <span className="text-sm font-medium tracking-wide text-white/80">Reclaim Your Attention</span>
        </div>

        <h1 
          className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-2xl" 
          style={{ 
            fontFamily: "var(--font-outfit)",
            fontSize: "clamp(3rem, 8vw, 7rem)", 
            lineHeight: 1, 
            letterSpacing: "-0.04em" 
          }}
        >
          Distraction-free <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#ff007f] filter drop-shadow-[0_0_20px_rgba(255,0,127,0.3)]">
            Instagram Client.
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-white/70 font-medium mb-12 flex-shrink-0 tracking-wide font-sans leading-relaxed pointer-events-auto">
          Break free from the algorithm. iRetardgram blocks infinite feeds and reels while keeping the essential features like messaging and stories intact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto items-center justify-center w-full sm:w-auto">
          <Button href="https://github.com/brittytino/iRetardgram/releases/latest" variant="primary" size="lg" glow className="w-full sm:w-auto font-bold tracking-wide">
            Download APK
          </Button>
          <Button href="https://github.com/brittytino/iRetardgram" variant="secondary" size="lg" className="w-full sm:w-auto glass hover:bg-white/10 transition-all font-medium">
            View Source
          </Button>
        </div>

        <div className="mt-16 sm:mt-24 pointer-events-auto">
          <p className="text-sm uppercase tracking-widest text-white/30 font-semibold mb-6">Open Source & Secure</p>
        </div>
      </div>
    </section>
  );
}