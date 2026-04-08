"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  ease?: string;
}

export function useGsapReveal(
  ref: RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) {
  const { y = 40, x = 0, delay = 0, duration = 0.8, ease = "power3.out" } = options;

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = ref.current;

    gsap.set(el, { opacity: 0, y, x });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, x: 0, duration, delay, ease });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [ref, y, x, delay, duration, ease]);
}
