"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const words = wordsRef.current;

    const textAnimation = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const wordAnimation = gsap.fromTo(
      words,
      {
        opacity: 0.15,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      textAnimation.kill();
      wordAnimation.kill();
    };
  }, []);

  const approachWords = [
    "Strategy",
    "Design",
    "Technology",
    "Motion",
    "Performance",
  ];

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative overflow-hidden bg-zinc-950 px-6 py-40 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* TOP LABEL */}

        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Our approach
        </p>


        {/* MAIN CONTENT */}

        <div
          ref={textRef}
          className="mt-10 grid gap-16 md:grid-cols-2 md:items-end"
        >

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              We don't just
              <br />
              build websites.
            </h2>

          </div>


          {/* RIGHT */}

          <div>

            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              We create digital experiences that are purposeful,
              intuitive and built to perform. Every interaction is
              carefully designed to connect technology with people.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              From the first idea to the final interaction, we focus
              on creating products that feel simple, fast and memorable.
            </p>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="mt-28 h-px w-full bg-white/10" />


        {/* APPROACH WORDS */}

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-5">

          {approachWords.map((word, index) => (
            <span
              key={word}
              ref={(el) => {
                wordsRef.current[index] = el;
              }}
              className="text-2xl font-medium text-white/50 transition-colors duration-300 hover:text-white sm:text-4xl"
            >
              {word}
            </span>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="mt-24 max-w-4xl">

          <p className="text-2xl font-medium leading-relaxed text-white sm:text-4xl">
            Technology should disappear into the experience.
            What remains is something people simply enjoy using.
          </p>

        </div>

      </div>
    </section>
  );
}