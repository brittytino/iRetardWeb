import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[880px] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.12),transparent_48%),radial-gradient(ellipse_at_bottom_right,rgba(198,255,0,0.1),transparent_35%)]">
      <HeroScene />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/35 to-black/90">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-300/10 via-transparent to-lime-300/10" />
      </div>
      <HeroContent />
    </section>
  );
}
