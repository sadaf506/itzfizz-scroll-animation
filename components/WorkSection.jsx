"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    const animation = gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      number: "01",
      category: "Web Experience",
      title: "Digital Commerce",
      description:
        "A modern digital commerce experience focused on speed, usability and conversion.",
      type: "commerce",
    },
    {
      number: "02",
      category: "Interactive Platform",
      title: "Next Generation",
      description:
        "An interactive platform combining clean design, motion and intelligent technology.",
      type: "platform",
    },
    {
      number: "03",
      category: "Brand Experience",
      title: "Future Forward",
      description:
        "A bold digital identity designed to create memorable and engaging experiences.",
      type: "brand",
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION INTRO */}

        <div className="max-w-3xl">

          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            Selected work
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
            Ideas brought
            <br />
            to life.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
            We design and build digital experiences that combine
            technology, creativity and meaningful interaction.
          </p>

        </div>


        {/* PROJECT CARDS */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={project.number}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-white/25 hover:bg-white/[0.05]"
            >

              {/* ABSTRACT VISUAL */}

              <div className="absolute inset-x-0 top-0 h-64 overflow-hidden">

                {project.type === "commerce" && (
                  <>
                    <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

                    <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full border border-white/10 transition-transform duration-700 group-hover:rotate-45" />

                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  </>
                )}

                {project.type === "platform" && (
                  <>
                    <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rotate-12 rounded-3xl border border-white/15 bg-white/[0.03] transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" />

                    <div className="absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 -rotate-12 rounded-3xl border border-white/10 transition-transform duration-700 group-hover:-rotate-6" />
                  </>
                )}

                {project.type === "brand" && (
                  <>
                    <div className="absolute left-1/2 top-10 h-44 w-44 -translate-x-1/2 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

                    <div className="absolute left-1/2 top-20 h-24 w-24 -translate-x-1/2 rounded-full bg-white/[0.05] blur-xl transition-transform duration-700 group-hover:scale-150" />

                    <div className="absolute left-1/2 top-32 h-px w-56 -translate-x-1/2 bg-white/10" />
                  </>
                )}

              </div>


              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />


              {/* NUMBER */}

              <p className="relative z-10 text-sm text-gray-500">
                {project.number}
              </p>


              {/* CONTENT */}

              <div className="absolute bottom-8 left-8 right-8 z-10">

                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {project.category}
                </p>

                <h3 className="mt-4 text-3xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {project.description}
                </p>


                {/* VIEW PROJECT */}

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">

                  <span className="text-xs uppercase tracking-[0.25em] text-gray-500 transition-colors duration-300 group-hover:text-white">
                    View project
                  </span>

                  <span className="text-xl text-gray-500 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                    →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}