# 💜 Women Opportunity Hub

> _"Empowering Women, Transforming Futures"_ — Happy International Women's Day 2026 🌸

A modern, modular web platform built for **International Women's Day** to help women discover scholarships, free tech courses, remote jobs, and important helpline resources — all in one place.

---

## 📖 Project Description

**Women Opportunity Hub** is a beautifully designed, responsive website that curates hand-picked opportunities for women looking to grow in tech, education, and careers. It also provides critical safety resources including women's helpline numbers and emergency contacts.

The project follows a **clean, modular architecture** — HTML for structure, CSS split by section, JavaScript split by responsibility, and opportunity data stored in a separate JSON file. This makes the codebase easy to read, maintain, and extend.

---

## 📁 Project Structure

```
international-womens-day/
│
├── index.html                  ← Main HTML page (layout & sections only)
│
├── css/
│   ├── style.css               ← Master stylesheet (imports + base reset + responsive)
│   ├── navbar.css              ← Glassmorphism navbar, logo, hamburger menu
│   ├── hero.css                ← Hero section, floating orbs, badge, stats
│   ├── cards.css               ← Categories, opportunity cards, helpline section
│   └── footer.css              ← Footer, links, heartbeat animation, back-to-top
│
├── js/
│   ├── main.js                 ← App entry point (initializes everything on DOMContentLoaded)
│   ├── opportunities.js        ← Fetches JSON data, renders cards, category filtering
│   └── ui.js                   ← Scroll effects, parallax, card tilt, counters, nav hide
│
├── data/
│   └── opportunities.json      ← All 11 opportunity cards stored as JSON data
│
└── README.md                   ← You are here
```

---

## 🧩 File-by-File Breakdown

### `index.html`

The single HTML page containing all layout sections:

- **Navbar** — Fixed glassmorphism navigation with logo, links, and hamburger toggle
- **Hero** — Full-screen gradient hero with animated floating orbs, shimmer title, trust stats (11+ opportunities, 10K+ women helped, 4 categories), and dual CTA buttons
- **Categories** — 5-column grid of filter buttons (All, Scholarships, Free Courses, Remote Jobs, Helplines)
- **Opportunities** — Card grid dynamically rendered by JavaScript from JSON data
- **Helpline** — 3 emergency cards (1091, 112, 1930) + safety tips banner
- **Footer** — Gradient message, nav links, copyright, heartbeat animation

### `css/style.css`

Master stylesheet that:

- Imports all section CSS files (`navbar.css`, `hero.css`, `cards.css`, `footer.css`)
- Defines CSS custom properties (colors, shadows, radius, transitions)
- Contains base reset, container, scroll-reveal animations, shared button styles
- Contains all responsive breakpoints (1024px, 768px, 480px, 360px, 1400px+, touch devices, landscape)

### `css/navbar.css`

- Fixed position glassmorphism navbar with `backdrop-filter: blur(20px)`
- Shrinks on scroll (`.scrolled` class)
- Gradient logo with hover rotate
- Animated underline on nav link hover
- Hamburger → X animation for mobile

### `css/hero.css`

- Full-screen gradient background with `gradientShift` animation
- 4 floating orbs with `orbFloat` keyframe
- Badge pill with pulsing dot
- Shimmer gradient text on the title
- Scroll-down indicator with animated line

### `css/cards.css`

- Section headings with animated underline accent
- 5-column category grid with color-coded icons
- Opportunity cards with gradient top-border reveal, radial cursor glow, spring-bounce hover
- Card icon/badge with category-specific colors (pink for scholarships, blue for courses, green for jobs, orange for helplines)
- Helpline section with dark gradient background, glassmorphism cards, glowing numbers, emergency pulse animation
- Safety tips banner

### `css/footer.css`

- Dark plum background footer
- Gradient text message
- Link hover underlines
- Heartbeat animation on heart icon
- Fixed back-to-top button with gradient background and float animation

### `js/main.js`

App entry point — runs on `DOMContentLoaded`:

1. Fetches opportunity data from `data/opportunities.json`
2. Renders cards and updates category counts
3. Initializes all UI modules (navbar scroll, mobile nav, scroll reveal, counters, parallax, card tilt, smooth scroll, nav hide)

### `js/opportunities.js`

- `fetchOpportunities()` — Loads card data from JSON using `fetch()`
- `renderCards(filter)` — Generates card HTML with icons, badges, descriptions, and Apply Now buttons
- `updateCategoryCounts()` — Updates item counts on category buttons
- `initCategoryFilter()` — Handles category button click events
- `categoryIcons` — SVG icon map per category
- `formatCategory()` — Maps category keys to display labels

### `js/ui.js`

- `initNavbarScroll()` — Adds `.scrolled` class on scroll, toggles back-to-top visibility
- `initBackToTop()` — Smooth scroll to top on click
- `initMobileNav()` — Hamburger toggle, close on link click / outside click / scroll
- `initScrollReveal()` — IntersectionObserver for `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`
- `animateCounters()` — RequestAnimationFrame counter with ease-out curve
- `initActiveNavHighlight()` — Highlights current section's nav link
- `initParallaxOrbs()` — Mouse-follow parallax on hero orbs (desktop only)
- `initCardTilt()` — 3D tilt effect on card hover with radial glow (desktop only)
- `initSmoothScroll()` — Smooth scrolling for all anchor links
- `initNavbarHideOnScroll()` — Auto-hide navbar on scroll down, show on scroll up (desktop only)
- Touch device detection via `matchMedia("(hover: none) and (pointer: coarse)")`

### `data/opportunities.json`

Array of 11 opportunity objects, each with:

```json
{
  "title": "...",
  "description": "...",
  "category": "scholarship | course | job | helpline",
  "link": "https://..."
}
```

**Categories:** 3 scholarships (Google, Adobe, AAUW), 3 free courses (Google Data Analytics, Python, freeCodeCamp), 3 remote jobs (Data Analyst, Web Developer, UX/UI Designer), 2 helplines (NCW India, Women Against Abuse).

---

## ✨ Features

| Feature                | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Opportunity Cards**  | Browse 11 hand-picked scholarships, courses, jobs & helplines with Apply Now buttons           |
| **Category Filtering** | One-click filter by Scholarships, Free Courses, Remote Jobs, or Helplines                      |
| **Women's Helpline**   | Dedicated section with **1091** (24/7), **112** (Emergency), **1930** (Cyber Crime)            |
| **Animated Hero**      | Gradient background, floating orbs, shimmer text, animated stat counters                       |
| **Glassmorphism UI**   | Frosted glass navbar, card hover tilt, scroll-reveal transitions                               |
| **Responsive Design**  | Optimized for desktop, tablet (1024px), mobile (768px), small phone (480px), and touch devices |
| **Parallax & Tilt**    | Mouse-follow orb parallax and 3D card tilt on desktop (disabled on touch)                      |
| **Back to Top**        | Floating gradient button appears after scrolling 500px                                         |
| **Safety Banner**      | Emergency SOS tip displayed below helpline cards                                               |

---

## 🛠️ Tech Stack

| Technology             | Purpose                                                            |
| ---------------------- | ------------------------------------------------------------------ |
| **HTML5**              | Semantic page structure                                            |
| **CSS3**               | Modular styling, animations, glassmorphism, responsive breakpoints |
| **Vanilla JavaScript** | Data fetching, DOM rendering, scroll effects, IntersectionObserver |
| **Google Fonts**       | Poppins font family (weights 300–800)                              |
| **JSON**               | External opportunity data storage                                  |

No frameworks, no libraries, no build tools — **100% vanilla HTML, CSS, and JavaScript**.

---

## 🚀 How to Run

1. **Clone** the repository:

   ```bash
   git clone https://github.com/uttamofficial/international-womens-day.git
   ```

2. **Open** with a local server (required for `fetch()` to load JSON data):

   **Option A — VS Code Live Server (recommended):**

   ```
   1. Open the project folder in VS Code
   2. Install the "Live Server" extension
   3. Right-click index.html → "Open with Live Server"
   ```

   **Option B — Python:**

   ```bash
   cd international-womens-day
   python -m http.server 8000
   # Open http://localhost:8000
   ```

   **Option C — Node.js:**

   ```bash
   npx serve .
   ```

> **Note:** Double-clicking `index.html` won't work because `fetch()` requires a server to load the JSON file. Use any of the options above.

---

## 🔮 Future Improvements

- [ ] Add a search bar to filter opportunities by keyword
- [ ] Include more categories (Mentorship, Grants, Internships)
- [ ] Add a dark mode toggle
- [ ] Integrate a real backend/API for dynamic listings
- [ ] Add user accounts to save/bookmark opportunities
- [ ] Multi-language support (Hindi, Spanish, French, etc.)
- [ ] Add testimonials/success stories from women

---

## 👩‍💻 Author

**[uttamofficial](https://github.com/uttamofficial)** — Built with 💜 on International Women's Day 2026

---

## 💐 A Message for Women's Day

> _Every woman deserves access to opportunity — whether it's education, a career, or simply knowing that help is one call away. This project is a small step toward making those opportunities visible and accessible to all._
>
> **#EachForEqual #WomensDay2026 #SheInspires**

---

⭐ If you found this project useful, give it a star and share it with the women in your life!
