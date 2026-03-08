/* =============================================
   MAIN — App Initialization
   Loads data, renders UI, starts all modules
   ============================================= */

/**
 * Initialize the entire application.
 * 1. Fetch opportunity data from JSON
 * 2. Render cards and update counts
 * 3. Set up all UI interactions
 */
async function initApp() {
  // --- Load opportunity data ---
  await fetchOpportunities();

  // --- Render cards & category counts ---
  renderCards();
  updateCategoryCounts();

  // --- Initialize category filter ---
  initCategoryFilter();

  // --- Initialize UI interactions ---
  initNavbarScroll();
  initBackToTop();
  initMobileNav();
  initScrollReveal();
  initCounterObserver();
  initActiveNavHighlight();
  initSmoothScroll();

  // --- Desktop-only effects ---
  initParallaxOrbs();
  initCardTilt();
  initNavbarHideOnScroll();
}

// ===== START THE APP WHEN DOM IS READY =====
document.addEventListener("DOMContentLoaded", initApp);
