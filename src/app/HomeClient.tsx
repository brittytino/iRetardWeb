"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Blocked from "@/components/sections/Blocked";
import Works from "@/components/sections/Works";
import HowItWorks from "@/components/sections/HowItWorks";
import Pipeline from "@/components/sections/Pipeline";
import Philosophy from "@/components/sections/Philosophy";
import { registerScrollTrigger } from "@/lib/animations/gsap";

export default function HomeClient() {
  useEffect(() => {
    registerScrollTrigger();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-hidden selection:bg-cyan/30 selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Blocked />
      <Works />
      <HowItWorks />
      <Pipeline />
      <Philosophy />
      <Footer />
    </div>
  );
}
