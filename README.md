# Portfolio

A single-page portfolio site for Duc Thai built with semantic HTML, modular CSS, and ES modules.

## Structure

- `index.html` — Single page markup
- `css/`
  - `base.css` — Variables, resets, animations
  - `layout.css` — Header, sections, footer layout
  - `components.css` — Navbar, cards, forms, utilities
  - `sections/`
    - `projects.css` — Projects section styles
    - `experience.css` — Timeline & cards
    - `about.css`, `contact.css` — Optional overrides
- `js/`
  - `main.js` — App entry (type=module)
  - `modules/` — Feature modules (navbar, menu, particles, animations, smooth scroll)
- Images live in project root for simplicity

## Local Run
Open `index.html` in a browser. No build tools required.

## Adding a Project Card
1. Add image file to repository root (e.g., `my-project.png`).
2. Insert a `.project-card` in `#projectsGrid` following the existing structure.
3. Add Demo and Code links, and tech tags.

## Notes
- `particles.js` is loaded via CDN before `js/main.js`.
- Legacy `styles.css` and `index.js` are retained but not used; keep for reference or delete when comfortable.
