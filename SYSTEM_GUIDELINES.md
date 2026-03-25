# System Guidelines

Use this file as the source of truth for AI-assisted work on Modunent. Prefer these rules over ad-hoc decisions.

---

# General guidelines

* Prefer flexbox and grid for layout. Use absolute positioning only when necessary.
* Refactor as you go: keep components small and extract helpers into separate files when they grow.
* Do not change component APIs (props, default values) unless explicitly asked.
* When adding features, match existing patterns (e.g. registry, forcedState for previews).

---

# Design system

* **Tokens first:** Use `design-tokens.css` (and Tailwind arbitrary values like `var(--color-primary)`) for colors, radius, and shadows. Avoid hardcoded hex or one-off Tailwind colors unless a token does not exist.
* **No glow shadows.** Use `--shadow-soft` and `--shadow-subtle` only.
* **Base typography:** Font size 16px, font weight 500 for primary UI. Do not introduce arbitrary font sizes without a token or documented scale.
* **Design reference:** Figma and DESIGN_REFERENCES.md / FIGMA_UIVERSE_MAPPING.md are canonical for visuals. Match spacing and hierarchy to the defined layout rhythm.

---

# Layout rhythm

Apply consistently. Do not use random spacing (e.g. mt-8, gap-12) without mapping to this system.

| Context | Value |
|--------|--------|
| Content wrapper | `pt-16 pb-16 px-10` (64px / 40px) |
| Section separation | 48px between major blocks |
| Back link → Title | 12px |
| Title → Subtitle | 8px |
| Subtitle → Filters | 16px |
| Filters → Grid | 32px |
| Grid | `gap-x-[40px] gap-y-[48px]` |
| Card radius | `rounded-[20px]` |
| Card preview height | 240px |
| Card footer padding | 24px |
| Sidebar padding | 40px top/bottom, 20px left/right |
| Nav list | 12px between items |

Page/sidebar/card backgrounds: `#0F172A` (page), `#0B1220` (sidebar), `#111827` (card), `#0F172A` (card footer).

---

# Button (primitives)

* **Sizing:** Height 48px, horizontal padding 24px, radius 12px. Prefer tokens: `--button-height`, `--radius-md`, `--button-padding-x`.
* **Variants:** Exposed via props only (e.g. primary, secondary, ghost, outline, destructive, social, icon-square, icon-circle). No one-off classes that change variant behavior.
* **States:** Default, hover, active, disabled, loading. Disabled and loading must block hover/active. Use `forcedState` when rendering in preview/ComponentDetail.
* **Styling:** No global CSS that overrides button colors. All styling via component classes and tokens.

---

# Components and registry

* Components used in the Elements showcase are registered in `src/data/registry.js` with `variants` and `states`.
* ComponentDetail reads slug from the route and passes `selectedVariant` and `selectedState` to the rendered component. Do not bypass this for preview UIs.
* Elements page layout: Topbar + Sidebar + main content. Content wrapper is max-w-[1280px] centered. Do not change this structure when adjusting spacing or styles.

---

# Elements grid layout (use everywhere)

For any grid of element cards or element-related blocks (Elements page, ElementDetail variants, future category grids):

* **Component:** Use `ElementGridLayout` from `src/components/elements/ElementGridLayout.jsx`.
* **Default:** 1 column (mobile) → 2 (sm) → 4 (lg), 32px gap, left-aligned. Cards scale with column (square via `aspect-square` on cards).
* **3-column variant:** Pass `columns={3}` for sections that need 3 items per row (e.g. Variants & States: Default / Hover / Disabled).
* **Gap:** Always 32px (`gap-[32px]`). Do not use a different gap for element grids.
* **Future grids:** Import `ElementGridLayout` (or the shared class `ELEMENT_GRID_CLASS` if you need the raw className) and use it; do not introduce new grid column/gap values for element flows.

---

# Elements UI (buttons, filter pills, card previews)

Apply across the Elements flow (Elements page, ElementDetail, ElementCard, and all preview buttons in `buttonElements.jsx`):

* **Height:** All buttons and filter pills: **40px** (`h-10` or `min-h-[40px]`).
* **Horizontal padding:** **24px** left and right (`style={{ paddingLeft: 24, paddingRight: 24 }}` or equivalent).
* **Layout:** `inline-flex items-center justify-center` for vertical centering.
* **Shape:** Use `rounded-full` (pill) for standard buttons and filter pills unless a design explicitly requires a different radius.
* **Text:** `text-sm` for label size.
* When adding or editing element preview buttons, filters, or card actions, apply this rule consistently.

---

# Strict UI system (Elements — follow exactly)

Do not improvise. Use only these values.

**Global layout**
* Max width: 1280px. Centered container (`max-w-[1280px] mx-auto`).
* Horizontal padding: 32px (`px-8`).
* Grid gap: 32px (`gap-8`).
* Spacing scale only: 8, 16, 24, 32, 40, 48 (Tailwind: 2, 4, 6, 8, 10, 12).

**Sidebar**
* Width: 260px fixed (`w-[260px]`).
* Menu buttons: `text-sm font-medium rounded-lg`.
* Active: `bg-white/10 text-white`.
* Hover: `bg-white/5 text-white`.
* Clean vertical rhythm; no random spacing.

**Search bar**
* Height: 40–44px (`h-11` = 44px).
* `rounded-xl`. Border `border-white/5`. Focus `focus:border-white/20`.
* Internal padding: `pl-10 pr-4`.

**Cards**
* `rounded-2xl` (16px). Border `border-white/5`.
* Grid `gap-8`. Preview area fixed height 220–240px (`h-[240px]`).
* Content centered: `flex items-center justify-center`.

**Card footer**
* Only: title (`text-base font-semibold`) and "View →" aligned right.
* Remove: author, view counts, likes, metadata.

**Toggle button (card)**
* `absolute top-4 right-4`. Size 32px (`w-8 h-8`). `rounded-full`.
* One per card; works independently.

**Interactions**
* Transitions: 200–300ms ease. No layout shifts. No inconsistent rounding. No extra shadows.
* Strict vertical grid. No random paddings or margins.
