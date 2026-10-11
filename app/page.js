"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollVisual from "@/components/ScrollVisual";
import FeatureCards from "@/components/FeatureCards";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        labelRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      )
      .fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        statsRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <main className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}

      <section
        ref={heroRef}
        className="hero-section relative min-h-[150vh] overflow-hidden px-6"
      >

        {/* Hero Content */}

        <div className="flex min-h-screen flex-col items-center justify-center">

          {/* Small Label */}

          <p
            ref={labelRef}
            className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-400"
          >
            Digital Experience Studio
          </p>


          {/* Main Heading */}

          <h1
            ref={headingRef}
            className="flex flex-wrap items-center justify-center gap-x-10 text-center text-3xl font-semibold tracking-[0.18em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span>W E L C O M E</span>
            <span>I T Z F I Z Z</span>
          </h1>


          {/* Description */}

          <p
            ref={descriptionRef}
            className="mt-8 max-w-2xl text-center text-sm leading-7 text-gray-400 sm:text-base"
          >
            Building digital experiences that combine creativity,
            technology and performance.
          </p>


          {/* Scroll-driven label */}

          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-600">
            <span className="h-px w-8 bg-gray-700" />

            <span>
              Scroll-driven experience
            </span>

            <span className="h-px w-8 bg-gray-700" />
          </div>


          {/* ================= STATISTICS ================= */}

          <div
            ref={statsRef}
            className="hero-stats mt-16 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-20"
          >

            {/* Statistic 1 */}

            <div>
              <h2 className="text-4xl font-semibold sm:text-5xl">
                95%
              </h2>

              <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
                Performance
              </p>
            </div>


            {/* Statistic 2 */}

            <div>
              <h2 className="text-4xl font-semibold sm:text-5xl">
                85%
              </h2>

              <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
                Growth
              </p>
            </div>


            {/* Statistic 3 */}

            <div>
              <h2 className="text-4xl font-semibold sm:text-5xl">
                90%
              </h2>

              <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
                Satisfaction
              </p>
            </div>

          </div>

        </div>


        {/* ================= SCROLL VISUAL ================= */}

        <ScrollVisual />


        {/* ================= SCROLL INDICATOR ================= */}

        <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500">

          <span>
            Scroll
          </span>

          <span className="text-lg">
            ↓
          </span>

        </div>

      </section>


      {/* ================= SECOND SECTION ================= */}
{/* SECOND SECTION */}
<section className="features-section relative min-h-screen overflow-hidden bg-zinc-950 px-6 py-32">

  <div className="mx-auto max-w-6xl">

    {/* Section heading */}
    <div className="max-w-2xl">

      <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
        What we build
      </p>

      <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
        Digital experiences
        <br />
        built to move.
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
        From high-performance websites to interactive digital
        experiences, we combine technology, design and motion
        to create products that stand out.
      </p>

    </div>

    {/* Feature Cards */}
    <FeatureCards />

  </div>

</section>

{/* ================= WORK SECTION ================= */}

<WorkSection />

{/* ================= ABOUT / APPROACH ================= */}

<AboutSection />

{/* ================= CONTACT SECTION ================= */}

<ContactSection />

 {/* ================= FOOTER ================= */}

      <Footer />

    </main>
  );
}