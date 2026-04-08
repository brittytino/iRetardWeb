"use client";

import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useAnimatedCounter(
  ref: RefObject<HTMLElement | null>,
  end: number,
  duration: number = 2,
  suffix: string = ""
) {
  const [displayed, setDisplayed] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return end.toLocaleString() + suffix;
    }
    return "0" + suffix;
  });

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return;
    }

    const obj = { val: 0 };
    const trigger: ScrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            setDisplayed(Math.round(obj.val).toLocaleString() + suffix);
          },
        });
      },
    });

    return () => {
      trigger?.kill();
    };
  }, [ref, end, duration, suffix]);

  return displayed;
}
