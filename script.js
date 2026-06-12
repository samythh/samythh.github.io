/* Hallmark · atmospheric · motion: reveal-once + line-draws + scroll-progress + nav state
 * Animate transform & opacity only. One orchestrated entrance language. */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = document.getElementById("nav");
  const progress = document.getElementById("progress");

  /* Nav: solidify the pill backdrop once the user leaves the hero. */
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Top scroll-progress line — functional indicator, transform-only. */
  if (progress) {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = "scaleX(" + p + ")";
      ticking = false;
    };
    update();
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
  }

  /* Typewriter — types and clears a rotating set of roles in the hero. */
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    const words = [
      "Frontend Developer",
      "UI/UX Designer",
      "AI-Assisted Builder",
      "Video Editor",
    ];
    if (reduceMotion) {
      typedEl.textContent = words[0]; // static, no animation
    } else {
      let w = 0, c = 0, deleting = false;
      const tick = () => {
        const word = words[w];
        typedEl.textContent = word.slice(0, c);
        if (!deleting) {
          if (c < word.length) {
            c++;
            setTimeout(tick, 70);
          } else {
            deleting = true;
            setTimeout(tick, 1500); // pause on full word
          }
        } else {
          if (c > 0) {
            c--;
            setTimeout(tick, 35);
          } else {
            deleting = false;
            w = (w + 1) % words.length;
            setTimeout(tick, 300);
          }
        }
      };
      setTimeout(tick, 900); // start after hero entrance
    }
  }

  /* Elements that draw a line / fade when they enter view. */
  const lineEls = document.querySelectorAll(".head, .rule-thick");
  const revealEls = document.querySelectorAll(".reveal");

  /* Reduced motion (or no GSAP): reveal everything immediately, no animation. */
  if (reduceMotion || typeof window.gsap === "undefined") {
    revealEls.forEach((el) => el.classList.add("is-in"));
    lineEls.forEach((el) => el.classList.add("is-in"));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Hero: one orchestrated entrance on load (stagger by DOM order). */
  gsap.utils.toArray("#hero .reveal").forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      delay: 0.1 + i * 0.08,
      onStart: () => el.classList.add("is-in"),
    });
  });

  /* Below-fold content: reveal once as it scrolls into view. No parallax. */
  ScrollTrigger.batch(".reveal:not(#hero .reveal)", {
    start: "top 86%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        onStart: () => batch.forEach((el) => el.classList.add("is-in")),
      }),
  });

  /* Line-draw elements (section heads + hero divider) — toggle a class, CSS does the rest. */
  lineEls.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => el.classList.add("is-in"),
    });
  });

  /* Keep sticky panes & triggers measured correctly after fonts/images settle. */
  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
