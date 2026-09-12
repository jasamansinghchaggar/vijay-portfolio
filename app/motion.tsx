"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const tick = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const elements = gsap.utils.toArray<HTMLElement>(".section-head, .project-card, .service-row, .review-card, .form-layout, .contact");
    const animations = elements.map((element) => gsap.fromTo(element, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } }));
    return () => { animations.forEach((animation) => animation.kill()); lenis.destroy(); gsap.ticker.remove(tick); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, []);
  return null;
}
