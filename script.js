// ===== OPPORTUNITY DATA =====
const opportunities = [
  // ——— Scholarships ———
  {
    title: "Google Generation Scholarship",
    description:
      "Awarded to women excelling in computer science & related fields. Includes $10,000 USD tuition grant, Google networking retreat, and an online community of past recipients.",
    category: "scholarship",
    link: "https://buildyourfuture.withgoogle.com/scholarships",
  },
  {
    title: "Adobe Women-in-Technology Scholarship",
    description:
      "Up to $10,000 for female undergraduates studying CS, data science, or UX. Recipients also get a year-long Adobe mentorship and potential internship placement.",
    category: "scholarship",
    link: "https://www.adobe.com/corporate-responsibility/education/women-in-tech.html",
  },
  {
    title: "AAUW International Fellowships",
    description:
      "Prestigious fellowships for women who are not U.S. citizens pursuing full-time graduate or postdoctoral research in the United States. Grants range from $20K–$50K.",
    category: "scholarship",
    link: "https://www.aauw.org/resources/programs/fellowships-grants/",
  },

  // ——— Free Courses ———
  {
    title: "Google Data Analytics Certificate",
    description:
      "A beginner-friendly professional certificate by Google. Covers spreadsheets, SQL, Tableau, and R — with hands-on projects. 100% online, on your own schedule.",
    category: "course",
    link: "https://grow.google/certificates/data-analytics/",
  },
  {
    title: "Python for Everybody",
    description:
      "Learn Python from scratch with Dr. Chuck's world-famous free course from the University of Michigan. Perfect first step into data science & backend development.",
    category: "course",
    link: "https://www.py4e.com/",
  },
  {
    title: "freeCodeCamp — Full-Stack Web Dev",
    description:
      "Over 3,000 hours of free curriculum covering HTML, CSS, JavaScript, React, Node.js, databases, and more. Earn free verified certifications as you go.",
    category: "course",
    link: "https://www.freecodecamp.org/",
  },

  // ——— Remote Jobs ———
  {
    title: "Remote Data Analyst",
    description:
      "Work-from-home data analyst openings at top companies. Roles include building dashboards, writing SQL queries, and turning raw data into business insights.",
    category: "job",
    link: "https://remotewoman.com/",
  },
  {
    title: "Junior Web Developer (Remote)",
    description:
      "Entry-level remote positions for front-end & full-stack developers. Companies hiring women in tech with mentorship programs and flexible schedules.",
    category: "job",
    link: "https://powertofly.com/",
  },
  {
    title: "Remote UX/UI Designer",
    description:
      "Curated remote design roles for women — from wireframing to high-fidelity prototypes. Companies that champion diversity-first hiring practices.",
    category: "job",
    link: "https://www.flexjobs.com/",
  },

  // ——— Helplines ———
  {
    title: "National Commission for Women (India)",
    description:
      "Register complaints online related to domestic violence, harassment, and other issues. 24/7 helpline: 7827-170-170.",
    category: "helpline",
    link: "http://ncw.nic.in/",
  },
  {
    title: "Women Against Abuse Hotline",
    description:
      "24/7 confidential hotline providing crisis counseling, safety planning, and shelter referrals for survivors of domestic abuse.",
    category: "helpline",
    link: "https://www.womenagainstabuse.org/",
  },
];

// ===== SVG ICONS PER CATEGORY =====
const categoryIcons = {
  scholarship: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>`,
  course: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  job: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M12 12v.01"/></svg>`,
  helpline: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.05z"/></svg>`,
};

// ===== DOM ELEMENTS =====
const cardGrid = document.getElementById("cardGrid");
const noResults = document.getElementById("noResults");
const categoryButtons = document.querySelectorAll(".category-card");
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

// ===== UPDATE CATEGORY COUNTS =====
function updateCategoryCounts() {
  document.querySelectorAll(".cat-count").forEach((el) => {
    const cat = el.dataset.cat;
    const count =
      cat === "all"
        ? opportunities.length
        : opportunities.filter((o) => o.category === cat).length;
    el.textContent = `${count} items`;
  });
}

// ===== RENDER CARDS =====
function renderCards(filter = "all") {
  const filtered =
    filter === "all"
      ? opportunities
      : opportunities.filter((o) => o.category === filter);

  if (filtered.length === 0) {
    cardGrid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  cardGrid.innerHTML = filtered
    .map(
      (item, i) => `
    <div class="card" style="animation-delay: ${i * 0.07}s">
      <div class="card-icon ${item.category}">
        ${categoryIcons[item.category]}
      </div>
      <span class="card-badge ${item.category}">${formatCategory(item.category)}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a class="card-apply" href="${item.link}" target="_blank" rel="noopener noreferrer">
        <span>Apply Now</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  `,
    )
    .join("");
}

function formatCategory(cat) {
  const map = {
    scholarship: "Scholarship",
    course: "Free Course",
    job: "Remote Job",
    helpline: "Helpline",
  };
  return map[cat] || cat;
}

// ===== CATEGORY FILTER =====
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.filter);
  });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle("scrolled", scrollY > 50);

  // Back to top visibility
  if (backToTop) {
    backToTop.classList.toggle("visible", scrollY > 500);
  }

  lastScroll = scrollY;
});

// ===== BACK TO TOP =====
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== MOBILE NAV TOGGLE =====
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("active");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
  });
});

// Close mobile nav when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
  }
});

// ===== SCROLL REVEAL (Intersection Observer) =====
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

// Trigger counters when hero stats are visible
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

// ===== SMOOTH ACTIVE NAV HIGHLIGHTING =====
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

// ===== INITIAL RENDER =====
updateCategoryCounts();
renderCards();

// ===== PARALLAX HERO ORBS ON MOUSE MOVE =====
const hero = document.querySelector(".hero");
const orbs = document.querySelectorAll(".hero-orb");

// Detect touch device
const isTouchDevice = window.matchMedia(
  "(hover: none) and (pointer: coarse)",
).matches;

if (hero && orbs.length && !isTouchDevice) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 15; // deeper movement for each orb
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

// ===== CARD TILT EFFECT ON HOVER (desktop only) =====
function initCardTilt() {
  if (isTouchDevice) return; // Skip on mobile/touch
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (0.5 - y) * 8; // max 4deg tilt
      const tiltY = (x - 0.5) * 8;
      card.style.transform = `translateY(-10px) scale(1.015) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      // Update mouse position for radial glow
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

// Re-initialize tilt after card rendering
const originalRenderCards = renderCards;
// Monkey-patch to re-apply tilt after new cards are inserted
const _origRender = window.renderCards || renderCards;

// Override renderCards to always re-initialize tilt
(function () {
  const origInner = cardGrid
    ? function (filter) {
        const filtered =
          filter === "all" || !filter
            ? opportunities
            : opportunities.filter((o) => o.category === filter);

        if (filtered.length === 0) {
          cardGrid.innerHTML = "";
          noResults.style.display = "block";
          return;
        }

        noResults.style.display = "none";

        cardGrid.innerHTML = filtered
          .map(
            (item, i) => `
      <div class="card" style="animation-delay: ${i * 0.07}s">
        <div class="card-icon ${item.category}">
          ${categoryIcons[item.category]}
        </div>
        <span class="card-badge ${item.category}">${formatCategory(item.category)}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a class="card-apply" href="${item.link}" target="_blank" rel="noopener noreferrer">
          <span>Apply Now</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `,
          )
          .join("");

        // Re-initialize tilt effect on new cards
        requestAnimationFrame(() => initCardTilt());
      }
    : function () {};

  // Replace the global render
  window.renderCards = origInner;

  // Re-bind category buttons
  document.querySelectorAll(".category-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".category-card")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      window.renderCards(btn.dataset.filter);
    });
  });

  // Initial render with tilt
  window.renderCards();
  updateCategoryCounts();
})();

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
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

// ===== NAVBAR HIDE/SHOW ON SCROLL DIRECTION (desktop only) =====
let navLastScroll = 0;
if (!isTouchDevice) {
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

// ===== CLOSE MOBILE NAV ON SCROLL =====
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
