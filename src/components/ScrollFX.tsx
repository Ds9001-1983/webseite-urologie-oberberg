"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Zentrale Scroll-Orchestrierung der Startseite:
 * Lenis Smooth-Scroll, GSAP-ScrollTrigger-Reveals über data-Attribute,
 * Hero-Load-Timeline, Parallax, Counter, Scroll-Spy und Progressbar.
 *
 * data-API:
 *   data-reveal[="left"|"right"|"scale"]  Einzel-Reveal beim Scrollen
 *   data-stagger                          Kinder gestaffelt einblenden
 *   data-hero / -bg / -title / -item / -content   Hero-Animationen
 *   data-parallax-img                     sanfter Bild-Parallax (scrub)
 *   data-counter="20" data-suffix="+"     Zähler-Animation
 *   data-nav (Navbar-Links)               Scroll-Spy (.nav-active)
 */
export default function ScrollFX() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    if (!prefersReduced) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // Anker-Klicks über Lenis scrollen (mit Offset für die fixe Navbar)
    const onClick = (e: MouseEvent) => {
      if (!lenis) return; // ohne Lenis: nativer Sprung + scroll-padding-top
      const anchor = (e.target as HTMLElement).closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      // Skip-Link nativ springen lassen — nur so wandert der Fokus mit
      if (!anchor || anchor.hasAttribute("data-skip-link")) return;
      const hash = anchor.getAttribute("href") ?? "#";
      if (hash === "#") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -88, duration: 1.2 });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
      const ease = "power3.out";

      // Generische Reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const dir = el.dataset.reveal;
        const from =
          dir === "left"
            ? { x: -60 }
            : dir === "right"
              ? { x: 60 }
              : dir === "scale"
                ? { scale: 0.94 }
                : { y: 40 };
        gsap.fromTo(
          el,
          { ...from, autoAlpha: 0 },
          {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.9,
            ease,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // Gestaffelte Grids/Listen
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((parent) => {
        gsap.fromTo(
          parent.children,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease,
            stagger: 0.09,
            scrollTrigger: { trigger: parent, start: "top 82%", once: true },
          }
        );
      });

      // Hero: Load-Timeline + Scroll-Parallax
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const bgImg = hero.querySelector("[data-hero-bg] img");
        const title = hero.querySelector<HTMLElement>("[data-hero-title]");
        const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]", hero);

        const startTimeline = () => {
          const tl = gsap.timeline({ defaults: { ease } });
          if (bgImg) {
            tl.fromTo(
              bgImg,
              { scale: 1.28 },
              { scale: 1.15, duration: 1.8, ease: "power2.out" },
              0
            );
          }
          if (title) {
            const split = SplitText.create(title, { type: "words" });
            gsap.set(title, { autoAlpha: 1 });
            tl.fromTo(
              split.words,
              { yPercent: 60, autoAlpha: 0 },
              {
                yPercent: 0,
                autoAlpha: 1,
                duration: 0.9,
                ease: "power4.out",
                stagger: 0.07,
              },
              0.15
            );
          }
          tl.fromTo(
            items,
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 },
            0.4
          );
        };
        // Erst nach Font-Load splitten, sonst bricht der Umbruch mitten in der Animation
        document.fonts.ready.then(() => ctx.add(startTimeline));

        if (bgImg) {
          gsap.to(bgImg, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
        const content = hero.querySelector("[data-hero-content]");
        if (content) {
          gsap.to(content, {
            autoAlpha: 0.25,
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      // Bild-Parallax (About)
      gsap.utils
        .toArray<HTMLElement>("[data-parallax-img]")
        .forEach((wrapper) => {
          const img = wrapper.querySelector("img");
          if (!img) return;
          gsap.set(img, { scale: 1.15 });
          gsap.fromTo(
            img,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

      // Zähler (z. B. "20+ Jahre")
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.dataset.counter ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const proxy = { v: 0 };
        gsap.to(proxy, {
          v: target,
          duration: 1.6,
          ease: "power1.out",
          snap: { v: 1 },
          onUpdate: () => {
            el.textContent = `${Math.round(proxy.v)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Scroll-Spy: aktive Section in der Navbar markieren
      ["praxis", "team", "leistungen", "sprechzeiten", "karriere", "kontakt"].forEach(
        (id) => {
          const sec = document.getElementById(id);
          if (!sec) return;
          ScrollTrigger.create({
            trigger: sec,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              document
                .querySelectorAll(`a[data-nav][href="#${id}"]`)
                .forEach((a) => a.classList.toggle("nav-active", self.isActive));
            },
          });
        }
      );

      // Scroll-Progressbar
      gsap.fromTo(
        "[data-progress]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        }
      );
    });

    // Nach vollständigem Laden (Bilder) Trigger-Positionen neu berechnen
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("click", onClick);
      mm.revert();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return (
    <div
      aria-hidden
      data-progress
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-light"
    />
  );
}
