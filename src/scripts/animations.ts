const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

let revealObserver: IntersectionObserver | undefined;

function initReveal() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );

  if (!elements.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver?.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  elements.forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      revealObserver?.observe(element);
    }
  });
}

function setupAccordion(details: HTMLDetailsElement) {
  if (details.dataset.accordionReady === "true") return;

  const summary = details.querySelector("summary");
  const body = details.querySelector<HTMLElement>(".acordeon-body");
  if (!summary || !body || typeof body.animate !== "function") return;

  details.dataset.accordionReady = "true";
  if (reduceMotion) return;

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    if (details.dataset.animating === "true") return;

    details.dataset.animating = "true";
    const finish = () => {
      details.dataset.animating = "false";
    };

    if (details.open) {
      const height = body.offsetHeight;
      const animation = body.animate(
        [
          { height: `${height}px`, opacity: 1 },
          { height: "0px", opacity: 0 },
        ],
        {
          duration: 280,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
      );
      animation.onfinish = () => {
        details.open = false;
        finish();
      };
      return;
    }

    details.open = true;
    const height = body.scrollHeight;
    const animation = body.animate(
      [
        { height: "0px", opacity: 0 },
        { height: `${height}px`, opacity: 1 },
      ],
      {
        duration: 320,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
    animation.onfinish = finish;
  });
}

function initAccordions() {
  document
    .querySelectorAll<HTMLDetailsElement>(".acordeon-item")
    .forEach(setupAccordion);
}

function initAnimations() {
  initReveal();
  initAccordions();
}

document.addEventListener("astro:page-load", initAnimations);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnimations);
} else {
  initAnimations();
}
