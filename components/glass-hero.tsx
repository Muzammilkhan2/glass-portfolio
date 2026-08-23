"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

export default function GlassHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // All animation state in refs — never trigger React re-renders
  const rawX = useRef(-999);
  const rawY = useRef(-999);
  const smoothX = useRef(-999);
  const smoothY = useRef(-999);
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTouch = useRef(false);
  const frameId = useRef<number>(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = containerRef.current;
    if (!el) return;

    const setVars = () => {
      if (!revealRef.current) return;
      revealRef.current.style.setProperty("--reveal-x", `${smoothX.current}px`);
      revealRef.current.style.setProperty("--reveal-y", `${smoothY.current}px`);
      revealRef.current.style.setProperty(
        "--reveal-radius",
        `${currentRadius.current}px`
      );
    };

    const tick = () => {
      const posFactor = reducedMotion.current ? 1 : 0.14;
      const radFactor = reducedMotion.current ? 1 : 0.12;

      smoothX.current += (rawX.current - smoothX.current) * posFactor;
      smoothY.current += (rawY.current - smoothY.current) * posFactor;
      currentRadius.current +=
        (targetRadius.current - currentRadius.current) * radFactor;

      setVars();
      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);

    // --- Pointer (mouse) handlers ---
    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isTouch.current = false;
      const rect = el.getBoundingClientRect();
      rawX.current = e.clientX - rect.left;
      rawY.current = e.clientY - rect.top;
      targetRadius.current =
        window.innerWidth < 768 ? MOBILE_RADIUS : DESKTOP_RADIUS;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = el.getBoundingClientRect();
      rawX.current = e.clientX - rect.left;
      rawY.current = e.clientY - rect.top;
    };

    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      targetRadius.current = 0;
    };

    // --- Touch handlers ---
    const onTouchStart = (e: TouchEvent) => {
      isTouch.current = true;
      const touch = e.touches[0];
      if (!touch) return;
      const rect = el.getBoundingClientRect();
      rawX.current = touch.clientX - rect.left;
      rawY.current = touch.clientY - rect.top;
      targetRadius.current = MOBILE_RADIUS;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const rect = el.getBoundingClientRect();
      rawX.current = touch.clientX - rect.left;
      rawY.current = touch.clientY - rect.top;
    };

    const onTouchEnd = () => {
      targetRadius.current = 0;
    };

    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);

    // Resize: keep radius sensible
    const onResize = () => {
      if (targetRadius.current > 0) {
        targetRadius.current =
          window.innerWidth < 768 ? MOBILE_RADIUS : DESKTOP_RADIUS;
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId.current);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden select-none"
      aria-label="Hero portrait with liquid glass reveal"
    >
      {/* ========== LAYER 1: Base portrait ========== */}
      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-base-in hero-bg-base" aria-hidden="true" />

      {/* ========== LAYER 2: Reveal portrait (masked) ========== */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-center bg-no-repeat bg-cover pointer-events-none hero-bg-reveal"
        aria-hidden="true"
      />

      {/* ========== LAYER 3: Technical grid + large circle ========== */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="tech-grid absolute inset-0 opacity-60" />
        <div className="tech-circle absolute hero-circle-size" />
      </div>

      {/* ========== LAYER 4: Navigation ========== */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between animate-nav-in hero-header">
        <div className="flex items-center gap-3">
          {/* Angular M mark */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 22V6L10 16L14 8L18 16L24 6V22"
              stroke="#0f172a"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[15px] font-medium tracking-tight text-slate-900">
            Muzammil
          </span>
        </div>

        {/* Mobile nav button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-900 md:hidden transition hover:bg-slate-100"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          <a
            href="#about"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] flex items-center"
          >
            About
          </a>
            <a
              href="#work"
              className="text-[13px] font-medium text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] flex items-center"
            >
              Work
            </a>
            <a
              href="#analytics"
              className="text-[13px] font-medium text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] flex items-center"
            >
              Analytics
            </a>
            <a
              href="#process"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] flex items-center"
          >
            Process
          </a>
          <a
            href="#experiments"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] flex items-center"
          >
            Experiments
          </a>
          <a
            href="#contact"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900 transition-colors min-h-[44px] flex items-center"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/muzammil-khan-041193271"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-[13px] font-medium px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow min-h-[44px] border border-slate-200/80"
        >
          Let&apos;s talk
        </a>
      </header>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-20 rounded-[2rem] border border-slate-200/80 bg-white/95 p-4 shadow-2xl shadow-slate-900/10 mobile-nav-backdrop md:hidden animate-fade-up"
        >
          <nav className="space-y-3" aria-label="Mobile primary">
              {[
                { label: "About", href: "#about" },
                { label: "Work", href: "#work" },
                { label: "Analytics", href: "#analytics" },
                { label: "Process", href: "#process" },
                { label: "Experiments", href: "#experiments" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      {/* ========== LAYER 5: Headline + copy ========== */}
      <div className="absolute z-20 hero-headline">
        <h1 className="font-sans font-medium text-slate-900 leading-[0.93] tracking-[-0.085em] animate-heading">
          <span className="block hero-headline-text">Building</span>
          <span className="block hero-headline-text">Beyond</span>
          <span className="block hero-headline-text">Possible.</span>
        </h1>
      </div>

      {/* Bottom-left intro + button */}
      <div className="absolute z-20 animate-intro hero-intro">
        <p className="text-[15px] leading-relaxed text-slate-700 mb-5">
          I build useful products, experiment with emerging technology, and turn
          the process into stories worth sharing.
        </p>
        <a
          href="#work"
          className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-[13px] font-medium px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow min-h-[44px] border border-slate-200/80"
        >
          Explore my work
        </a>
      </div>

      {/* Right-side manifesto */}
      <div className="absolute z-20 hidden sm:block animate-manifesto hero-manifesto">
        <p className="font-mono text-[11px] leading-[1.7] tracking-[0.12em] text-slate-500 uppercase text-right">
          BUILDING THE
          <br />
          NEXT VERSION
          <br />
          IN PUBLIC
        </p>
      </div>

    </section>
  );
}

