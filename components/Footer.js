"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-16"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-6xl"
      >
        {/* Top section */}

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

          {/* Brand */}

          <div className="max-w-md">
            <h2 className="text-3xl font-semibold tracking-[0.2em] text-white">
              ITZFIZZ
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Building digital experiences that combine
              creativity, technology and performance.
            </p>
          </div>


          {/* Navigation */}

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">

            <a
              href="#work"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              Work
            </a>

            <a
              href="#approach"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              Approach
            </a>

            <a
              href="#contact"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              Contact
            </a>

            <a
              href="https://www.instagram.com/itzfizz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-white"
            >
              Instagram
            </a>

          </div>

        </div>


        {/* Divider */}

        <div className="my-12 h-px w-full bg-white/10" />


        {/* Bottom section */}

        <div className="flex flex-col gap-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} ITZFIZZ. All rights reserved.
          </p>


          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 transition-colors duration-300 hover:text-white"
          >
            <span>
              Back to top
            </span>

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}