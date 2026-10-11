"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        labelRef.current,
        headingRef.current,
        textRef.current,
        buttonRef.current,
      ];

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".contact-glow", {
        scale: 1.2,
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-6 py-32"
    >
      {/* Background glow */}
      <div className="contact-glow pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center">
        
        {/* Label */}
        <p
          ref={labelRef}
          className="text-xs uppercase tracking-[0.4em] text-gray-500"
        >
          Let's work together
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          Let's build something
          <br />
          worth experiencing.
        </h2>

        {/* Description */}
        <p
          ref={textRef}
          className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
        >
          Have an idea, a project or simply want to explore
          what's possible? Let's create something meaningful
          together.
        </p>

        {/* Button */}
        <div ref={buttonRef} className="mt-12">
          <a
            href="mailto:hello@itzfizz.com"
            className="group inline-flex items-center gap-4 rounded-full border border-white/20 bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-500 hover:gap-6 hover:bg-gray-200"
          >
            <span>Start a conversation</span>

            <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>

      {/* Bottom line */}
      <div className="absolute bottom-10 left-6 right-6 mx-auto max-w-6xl border-t border-white/10" />
    </section>
  );
}