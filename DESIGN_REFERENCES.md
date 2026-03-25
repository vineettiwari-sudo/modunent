# Design References

Modunent uses two primary sources for styling and behavior:

1. **uiverse.io/buttons** – Functional and visual inspiration for button patterns (hover, active, loading, variants). Use for interaction patterns and variety; avoid copying single implementations so the library stays consistent with the Figma system.
2. **Figma design system (UI Elements / Design System v1.0)** – Canonical source for colors, variants, sizes, and states. All primitives should match the Figma specs.

**→ Exact code ↔ Figma ↔ uiverse mapping: [FIGMA_UIVERSE_MAPPING.md](./FIGMA_UIVERSE_MAPPING.md)** (every variant and behavior tied to a specific Figma screen and uiverse pattern.)

---

## Button (from Figma + uiverse)

- **Primary:** Solid blue/dark fill, white text (e.g. “Add to Cart”). High emphasis.
- **Secondary:** Gray/muted fill, dark text. Medium emphasis.
- **Ghost:** Transparent background, colored text (e.g. blue). No border. Subtle hover background.
- **Outline:** Transparent background, colored border and matching text (e.g. blue).
- **Destructive:** Red fill, white text. For remove/delete actions.
- **Social:** Distinct style for social actions (e.g. purple or brand colors); can support icon + text.

**Behavior (uiverse-style):** Clear hover/active feedback (e.g. slight darken or scale), loading state with spinner, disabled state with reduced opacity and no hover. No glow shadows (per PROJECT_CONTEXT).

**Sizing (PROJECT_CONTEXT):** h-12 (48px), px-6 (24px), rounded-xl (12px), text-base (16px), font-medium (500).

---

## Badge (from Figma)

- **Variants:** Neutral (gray), Success (green), Warning (orange), Error (red), Highlight (blue), Outline (border, light bg).
- **Use:** Non-interactive labels for status (In Stock, Verified, Low Stock, Out of Stock, New Arrival).
- **Sizes (Figma):** Small, Medium, Large.
- **With icons:** Optional leading icon (e.g. truck, checkmark) for context.

---

## Tag (from Figma)

- **Variants:** Default (light gray), Selected (dark fill, white text), Removable (with X), Outline (border), Filled, Compact.
- **States:** Default, Hover, Selected, Active, Disabled, Selected & Removable.
- **Use:** Filters, size selection, applied filters, search chips.

---

## Discount Pill (from Figma)

- **Variants:** Percentage (red), Amount (orange), BOGO (green), Member (purple), Outline (red border, white bg), Highlight (yellow, dark text).
- **States:** Default, Hover, Expired (grayed), Disabled.
- **With icons:** Optional leading icon (e.g. fire, money, crown) per variant.

---

## Implementation plan

### Phase 1 – Button (Figma + uiverse)

- **Files:** `src/components/primitives/Button.jsx`, `src/pages/ComponentDetail.jsx`
- Align Button variant colors with Figma: Primary → blue (use theme primary); Secondary → gray; Ghost → transparent + primary text; Outline → primary border + text; Destructive → red (theme danger); Social → purple or neutral with border.
- Keep PROJECT_CONTEXT rules: h-12, px-6, rounded-xl, text-base, font-medium; no glow shadows.
- Remove temporary `console.log` from Button and ComponentDetail.
- Optional: add `focus-visible:` ring for accessibility (uiverse-style focus feedback).

### Phase 2 – Badge

- **Files:** `src/components/primitives/Badge.jsx`, `src/data/registry.js`
- Add **highlight** variant (light blue bg, dark blue text) to match Figma “New Arrival” / “Best Seller”.
- Add to registry variants if missing: `["neutral", "success", "warning", "error", "highlight", "outline"]`.
- Use Tailwind classes that align with theme tokens where possible (e.g. blue-100/700 for highlight).

### Phase 3 – DiscountPill

- **Files:** `src/components/primitives/DiscountPill.jsx`, `src/data/registry.js`
- Add **outline** variant: red border, white (or light) background, red text (“15% OFF” style from Figma).
- Ensure **expired** state uses gray/muted styling; **disabled** uses reduced opacity. Match Figma “Expired” / “Expired Amount” / “Expired Highlight”.
- Add `outline` to registry variants array.

### Phase 4 – Tag

- **Files:** `src/components/primitives/Tag.jsx`
- Ensure **default** (light gray), **selected** (dark fill), **outline** (border only), **compact** match Figma.
- If design shows **removable** with an X icon, add optional `onRemove` prop or icon slot; style the chip to match “Applied Filters” / “Removable” in Figma.

### Phase 5 – Design tokens

- **Files:** `src/styles/tokens.css`, primitives
- Add `--radius-xl: 0.75rem` (12px) to tokens if desired for consistency with PROJECT_CONTEXT.
- Prefer CSS variables from `themes.css` (e.g. `--color-primary`, `--color-danger`) when introducing new variant colors so light/dark theme stays consistent.

### Reference checklist

- [ ] Button: variant colors from Figma; no glow; sizing from PROJECT_CONTEXT; debug logs removed.
- [ ] Badge: highlight variant; registry updated.
- [ ] DiscountPill: outline variant; expired/disabled states; registry updated.
- [ ] Tag: variants and states match Figma; removable UX if specified.
- [ ] Tokens: radius/semantic colors used in primitives where possible.
