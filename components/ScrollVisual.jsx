"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVisual() {
  const visualRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const visual = visualRef.current;
      const glow = glowRef.current;

      const isMobile = window.innerWidth < 768;

      // Main scroll-driven animation
      gsap.to(visual, {
        x: isMobile ? 60 : 220,
        y: isMobile ? 20 : 40,
        rotation: isMobile ? 6 : 10,
        scale: isMobile ? 1.02 : 1.1,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.25,
        },
      });

      // Soft breathing glow
      gsap.to(glow, {
        scale: 1.25,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={visualRef}
      className="absolute left-1/2 top-[70%] -translate-x-1/2"
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
      />

      {/* Main Visual */}
      <div className="relative h-52 w-80 rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-3 shadow-2xl backdrop-blur-xl">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

          <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full border border-white/10" />

          {/* Center glow */}
          <div className="absolute h-24 w-24 rounded-full bg-white/10 blur-2xl" />

          {/* Text */}
          <div className="relative z-10 text-center">
            <p className="text-2xl font-semibold tracking-[0.35em] text-white">
              ITZFIZZ
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.5em] text-gray-500">
              Digital Innovation
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}