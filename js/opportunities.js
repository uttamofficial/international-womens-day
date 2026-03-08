/* =============================================
   OPPORTUNITIES MODULE
   Fetches data, renders cards, handles filtering
   ============================================= */

// ===== STATE =====
let opportunities = []; // Populated from JSON

// ===== SVG ICONS PER CATEGORY =====
const categoryIcons = {
  scholarship: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>`,
  course: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  job: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M12 12v.01"/></svg>`,
  helpline: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.05z"/></svg>`,
};

// ===== CATEGORY LABEL MAP =====
function formatCategory(cat) {
  const map = {
    scholarship: "Scholarship",
    course: "Free Course",
    job: "Remote Job",
    helpline: "Helpline",
  };
  return map[cat] || cat;
}

// ===== FETCH OPPORTUNITY DATA FROM JSON =====
async function fetchOpportunities() {
  try {
    const response = await fetch("data/opportunities.json");
    opportunities = await response.json();
  } catch (error) {
    console.error("Failed to load opportunities data:", error);
    opportunities = [];
  }
}

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

// ===== RENDER OPPORTUNITY CARDS =====
function renderCards(filter = "all") {
  const cardGrid = document.getElementById("cardGrid");
  const noResults = document.getElementById("noResults");
  if (!cardGrid) return;

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

  // Re-initialize card tilt effect after new cards are rendered
  if (typeof initCardTilt === "function") {
    requestAnimationFrame(() => initCardTilt());
  }
}

// ===== CATEGORY FILTER CLICK HANDLER =====
function initCategoryFilter() {
  const categoryButtons = document.querySelectorAll(".category-card");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
    });
  });
}
