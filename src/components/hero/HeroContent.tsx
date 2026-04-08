import Button from "@/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center justify-center h-full pointer-events-none">
      <h1 
        className="font-black tracking-tighter mb-8 text-white mix-blend-difference drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]" 
        style={{ 
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(2.5rem, 8vw, 6rem)", 
          lineHeight: 1.05, 
          letterSpacing: "-0.05em" 
        }}
      >
        Distraction-free Instagram <br />
        <span className="text-cyan inline-block mt-2" style={{ textShadow: "0 0 20px rgba(0, 229, 255, 0.4)" }}>
          for real connection.
        </span>
      </h1>
      
      <p className="max-w-2xl text-lg sm:text-2xl text-white/80 font-medium mb-12 flex-shrink-0 tracking-wide font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] mix-blend-plus-lighter pointer-events-auto">
        iRetardgram is a focused Instagram client that blocks infinite feeds and reels while keeping messages, stories, search, and notifications intact.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto items-center justify-center mt-4">
        <Button href="https://github.com/brittytino/iRetardgram/releases/latest" variant="primary" size="lg" glow>
          Download APK
        </Button>
        <Button href="https://github.com/brittytino/iRetardgram" variant="secondary" size="lg">
          View Source
        </Button>
        <Button href="/docs" variant="ghost" size="lg">
          Documentation
        </Button>
      </div>
    </div>
  );
}
