"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HEADLINE_CHARS = "WELCOME ITZFIZZ".split("");

const STATS = [
  { value: "96%", label: "Scroll completion rate" },
  { value: "88%", label: "Interaction quality score" },
  { value: "73%", label: "Return visitor uplift" },
  { value: "41%", label: "Bounce-rate drop" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTimeline
        .from(".hero-kicker", { y: 18, autoAlpha: 0, duration: 0.55 })
        .from(
          ".hero-char",
          {
            yPercent: 120,
            autoAlpha: 0,
            duration: 0.85,
            stagger: 0.04,
          },
          0.08,
        )
        .from(
          ".hero-divider",
          { scaleX: 0, transformOrigin: "0% 50%", duration: 0.75 },
          0.24,
        )
        .from(
          ".hero-stat",
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.11,
          },
          0.34,
        )
        .from(
          ".hero-scroll-note",
          {
            y: 12,
            autoAlpha: 0,
            duration: 0.4,
          },
          0.8,
        );

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        })
        .to(
          ".hero-vehicle",
          {
            xPercent: 56,
            yPercent: -26,
            rotate: 9,
            scale: 1.05,
          },
          0,
        )
        .to(
          ".hero-wheel-front, .hero-wheel-back",
          {
            rotate: 760,
          },
          0,
        )
        .to(
          ".hero-hill-back",
          {
            xPercent: -12,
            yPercent: 8,
          },
          0,
        )
        .to(
          ".hero-hill-front",
          {
            xPercent: -18,
            yPercent: -8,
          },
          0,
        )
        .to(
          ".hero-road-lines",
          {
            xPercent: -35,
          },
          0,
        )
        .to(
          ".hero-sun",
          {
            xPercent: -20,
            yPercent: 16,
            scale: 1.14,
            opacity: 0.95,
          },
          0,
        )
        .to(
          ".hero-fog",
          {
            xPercent: 24,
            opacity: 0.92,
          },
          0,
        )
        .to(
          ".hero-dust",
          {
            xPercent: 18,
            opacity: 0.94,
          },
          0,
        )
        .to(
          ".hero-visual-stage",
          {
            scale: 1.03,
          },
          0,
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="hero-shell">
      <section ref={heroRef} className="hero-track">
        <div className="hero-stage sticky top-0">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Scroll-Synced Hero Motion</p>

              <h1 className="hero-title" aria-label="WELCOME ITZFIZZ">
                {HEADLINE_CHARS.map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    className={`hero-char${char === " " ? " hero-char-space" : ""}`}
                    aria-hidden="true"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>

              <div className="hero-divider" />

              <div className="hero-stats">
                {STATS.map((stat) => (
                  <article key={stat.label} className="hero-stat">
                    <p className="hero-stat-value">{stat.value}</p>
                    <p className="hero-stat-label">{stat.label}</p>
                  </article>
                ))}
              </div>

              <p className="hero-scroll-note">Scroll to drive the hero scene</p>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-visual">
                <div className="hero-visual-stage">
                  <div className="hero-sky" />
                  <div className="hero-sun" />
                  <div className="hero-fog" />
                  <div className="hero-hill hero-hill-back" />
                  <div className="hero-hill hero-hill-front" />
                  <div className="hero-road">
                    <div className="hero-road-lines" />
                  </div>
                  <div className="hero-dust" />

                  <div className="hero-vehicle">
                    <div className="hero-vehicle-top">
                      <div className="hero-window hero-window-left" />
                      <div className="hero-window hero-window-right" />
                    </div>
                    <div className="hero-vehicle-body">
                      <span className="hero-headlamp" />
                    </div>
                    <div className="hero-wheel hero-wheel-back" />
                    <div className="hero-wheel hero-wheel-front" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-after">
        <h2>Smooth, Scroll-Tied Animation</h2>
        <p>
          Intro motion is timeline-based for controlled staging. Scene movement is
          tied to scroll progress with GSAP ScrollTrigger and scrub interpolation,
          using transform-only updates to keep animation responsive and fluid.
        </p>
      </section>
    </main>
  );
}
