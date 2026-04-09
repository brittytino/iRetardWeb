import Button from "@/components/ui/Button";
import { ArrowDown, BookOpen, Puzzle, Smartphone } from "lucide-react";

export default function HeroContent() {
  return (
    <section className="relative z-10 w-full min-h-screen px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="mb-6 px-3 py-1.5 rounded-full border border-lime-300/20 bg-lime-300/10 text-[10px] uppercase tracking-[0.2em] text-lime-300 backdrop-blur-sm">
          Designed for focus
        </div>

        {/* Headline */}
        <h1
          className="text-white font-semibold tracking-tight leading-[1.1]"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Instagram,
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            without the distractions.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed">
          iRetard removes infinite feeds and recommendation loops, while keeping
          messaging, stories, and essential features intact.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2 items-center justify-center">
          <Button
            href="https://github.com/brittytino/iRetardgram/releases/latest"
            variant="primary"
            size="lg"
            glow
          >
            <span className="flex items-center gap-2">
              Download APK
              <ArrowDown size={16} />
            </span>
          </Button>

          <Button href="/docs" variant="ghost" size="lg">
            <span className="flex items-center gap-2">
              Documentation
              <BookOpen size={16} />
            </span>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          
          {/* Mobile */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 text-left">
            <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-[0.2em] mb-3">
              <Smartphone size={14} />
              Mobile App
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">
              Focused experience
            </h3>

            <p className="text-white/60 text-sm leading-relaxed">
              Feed and reels are removed, while messages, stories, and profiles remain fully usable.
            </p>
          </div>

          {/* Extension */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 text-left">
            <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-[0.2em] mb-3">
              <Puzzle size={14} />
              Chrome Extension
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">
              Controlled usage
            </h3>

            <p className="text-white/60 text-sm leading-relaxed">
              A strict browsing layer that limits time and removes algorithm-driven content.
            </p>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-10 text-xs text-white/30 tracking-wide">
          Open source • No tracking • No engagement algorithms
        </div>
      </div>
    </section>
  );
}