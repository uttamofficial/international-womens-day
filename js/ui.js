/* =============================================
   UI MODULE
   Animations, scroll effects, parallax, tilt
   ============================================= */

// ===== DETECT TOUCH DEVICES =====
const isTouchDevice = window.matchMedia(
  "(hover: none) and (pointer: coarse)",
).matches;

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      navbar.classList.toggle("scrolled", scrollY > 50);

      // Show/hide back-to-top button
      if (backToTop) {
        backToTop.classList.toggle("visible", scrollY > 500);
      }
    },
    { passive: true },
  );
}

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ===== MOBILE NAV TOGGLE =====
function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Hamburger click
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("active");
  });

  // Close when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
    }
  });

  // Close on scroll
  window.addEventListener(
    "scroll",
    () => {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
      }
    },
    { passive: true },
  );
}

// ===== SCROLL REVEAL (Intersection Observer) =====
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ===== ANIMATED COUNTERS =====
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]");
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

function initCounterObserver() {
  const heroStats = document.querySelector(".hero-stats");
  if (heroStats) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    statsObserver.observe(heroStats);
  }
}

// ===== ACTIVE NAV HIGHLIGHTING =====
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a:not(.nav-cta)");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach((a) => {
            a.classList.toggle(
              "active-link",
              a.getAttribute("href") === `#${id}`,
            );
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

// ===== PARALLAX HERO ORBS (desktop only) =====
function initParallaxOrbs() {
  if (isTouchDevice) return;

  const hero = document.querySelector(".hero");
  const orbs = document.querySelectorAll(".hero-orb");

  if (!hero || !orbs.length) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 15;
      const rotateX = y * 5;
      const rotateY = -x * 5;
      orb.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate3d(${rotateX}, ${rotateY}, 0, ${(i + 1) * 2}deg)`;
    });
  });

  hero.addEventListener("mouseleave", () => {
    orbs.forEach((orb) => {
      orb.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      orb.style.transform = "translate(0, 0)";
      setTimeout(() => {
        orb.style.transition = "";
      }, 800);
    });
  });
}

// ===== CARD TILT EFFECT (desktop only) =====
function initCardTilt() {
  if (isTouchDevice) return;

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (0.5 - y) * 8;
      const tiltY = (x - 0.5) * 8;
      card.style.transform = `translateY(-10px) scale(1.015) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      card.style.setProperty("--mouse-x", `${x * 100}%`);
      card.style.setProperty("--mouse-y", `${y * 100}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.removeProperty("--mouse-x");
      card.style.removeProperty("--mouse-y");
    });
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ===== NAVBAR HIDE/SHOW ON SCROLL (desktop only) =====
function initNavbarHideOnScroll() {
  if (isTouchDevice) return;

  const navbar = document.getElementById("navbar");
  let navLastScroll = 0;

  window.addEventListener(
    "scroll",
    () => {
      const current = window.scrollY;
      if (current > 300 && current > navLastScroll) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }
      navLastScroll = current;
    },
    { passive: true },
  );
}
