"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      number: "01",
      title: "Development",
      description:
        "Fast, responsive and scalable web experiences built with modern technologies.",
    },
    {
      number: "02",
      title: "Performance",
      description:
        "Smooth interactions and optimized experiences across devices and screen sizes.",
    },
    {
      number: "03",
      title: "Innovation",
      description:
        "Creative digital solutions that combine technology, design and intelligent interaction.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="mt-20 grid gap-6 md:grid-cols-3"
    >
      {features.map((feature, index) => (
        <div
          key={feature.number}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className="
            group
            relative
            min-h-[280px]
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-white/25
            hover:bg-white/[0.06]
          "
        >
          {/* Hover glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-40
              w-40
              rounded-full
              bg-white/[0.08]
              blur-3xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Number */}
          <p className="relative text-sm text-gray-500">
            {feature.number}
          </p>

          {/* Title */}
          <h3
            className="
              relative
              mt-16
              text-2xl
              font-semibold
              text-white
              transition-transform
              duration-500
              group-hover:translate-x-2
            "
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p
            className="
              relative
              mt-4
              max-w-sm
              text-sm
              leading-7
              text-gray-500
              transition-colors
              duration-500
              group-hover:text-gray-300
            "
          >
            {feature.description}
          </p>

          {/* Bottom line */}
          <div
            className="
              absolute
              bottom-0
              left-8
              right-8
              h-px
              origin-left
              scale-x-0
              bg-white/30
              transition-transform
              duration-500
              group-hover:scale-x-100
            "
          />
        </div>
      ))}
    </div>
  );
}