import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <HeroScene />
      <HeroContent />
    </section>
  );
}
