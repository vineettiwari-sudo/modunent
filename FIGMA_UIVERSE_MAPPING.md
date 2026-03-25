# Figma & uiverse → Code Mapping

This file maps every primitive and variant to the **exact** Figma and uiverse sources so you can verify the implementation against the references.

---

## Where to find the references

| Source | URL / Location |
|--------|----------------|
| **uiverse buttons** | https://uiverse.io/buttons |
| **Figma designs** | Your screenshots: UI Elements, Design System v1.0 (Discount Pills, Badges, Tags, Navigation, Announcement & Promotion, Quantity Selectors, Filters & Sorting, Buttons, Product Card System) |

---

## Button (`src/components/primitives/Button.jsx`)

| Variant | Figma reference | uiverse reference | Code (Tailwind) |
|---------|-----------------|-------------------|-----------------|
| **primary** | Announcement & Promotion – "Available Variants" / "Display Variants": **Primary** (blue pill). Product Card System / Filters: **Add to Cart** (dark, white text). | Solid CTA style; high contrast. | `bg-blue-600 text-white`, hover `bg-blue-700` |
| **secondary** | Same screens: **Secondary** (gray pill). Navigation: inactive category pills (light gray, dark text). | Muted secondary action. | `bg-gray-200 text-gray-700`, hover `bg-gray-300` |
| **ghost** | Announcement: **Ghost** (blue text, no bg/border). Navigation: text links like "VIEW MY LISTS", "Shop Now >". | Text-only / transparent; hover tint. | `bg-transparent text-blue-600`, hover `bg-blue-50` |
| **outline** | Announcement: **Outline** (blue border + blue text). Discount Pills: Outline variant (red border, white bg). Buttons screenshot: outline examples. | Bordered, no fill; hover fill. | `border-2 border-blue-600 text-blue-600`, hover `bg-blue-50` |
| **destructive** | Announcement: **Destructive** (red). Legacy Called: "Previewed Button" – "Remove Product" (red). Buttons screenshot: destructive/red buttons. | Danger/delete pattern. | `bg-red-600 text-white`, hover `bg-red-700` |
| **social** | Announcement: **Social** (purple pill). Buttons screenshot: Google/Facebook/Twitter style (brand colors, icon + text). | Social login / brand style. | `bg-violet-100 text-violet-700 border border-violet-300` |

**Behavior**

| Behavior | Figma reference | uiverse reference | Code |
|----------|-----------------|-------------------|------|
| Hover | States sections: "Hover (hover to see)" | Hover feedback on cards | `current.hover` classes (darker/lighter bg) |
| Active | "Active (click to see)" | Click/press feedback | `scale-95` |
| Loading | Component states across designs | Buttons with spinner | `Loader` + `forcedState === "loading"` |
| Disabled | "Disabled" state pills/tags | Disabled style | `opacity-50 pointer-events-none` |
| Focus | — | Focus ring on tab | `focus-visible:ring-2 ring-blue-500 ring-offset-2` |

---

## Badge (`src/components/primitives/Badge.jsx`)

| Variant | Figma reference | Code |
|---------|-----------------|------|
| **neutral** | Badges – **Neutral**: "In Stock" (light grey, dark text) | `bg-gray-200 text-gray-700` |
| **success** | **Success**: "Verified" (light green, dark green text) | `bg-green-100 text-green-800` |
| **warning** | **Warning**: "Low Stock" (light orange/yellow, dark text) | `bg-amber-100 text-amber-800` |
| **error** | **Error**: "Out of Stock" (light red, dark red text) | `bg-red-100 text-red-800` |
| **highlight** | **Highlight**: "New Arrival" (light blue, dark blue text). With Icons: "Best Seller". | `bg-blue-100 text-blue-800` |
| **outline** | **Outline**: "New Arrival" (white bg, grey border, grey text) | `bg-transparent border border-gray-300 text-gray-700` |

---

## Tag (`src/components/primitives/Tag.jsx`)

| Variant | Figma reference | Code |
|---------|-----------------|------|
| **default** | Tags – **Default**: "Electronics" (light grey pill, dark text) | `bg-gray-100 text-gray-700 border-gray-300` |
| **selected** | **Selected**: "On Sale" (dark fill, white text) | `bg-gray-800 text-white border-gray-800` |
| **removable** | **Removable**: "Color: Blue" with X icon. Applied Filters row. | Same as default + `onRemove` + × button |
| **outline** | **Outline**: "Free Shipping" (white bg, grey border) | `bg-transparent text-gray-700 border-gray-400` |
| **compact** | **Compact**: "Compact Size" (smaller pill) | `px-2 py-0.5 text-xs` + gray styles |

---

## Discount Pill (`src/components/primitives/DiscountPill.jsx`)

| Variant | Figma reference | Code |
|---------|-----------------|------|
| **percentage** | Discount Pills – **Percentage**: "20% OFF" (red, white text) | `bg-red-600 text-white` |
| **amount** | **Amount**: "SAVE $500" (orange, white text) | `bg-orange-600 text-white` |
| **bogo** | **BOGO**: "BUY 2 GET 1" (green, white text) | `bg-green-600 text-white` |
| **member** | **Member**: "Member Save 10%" (purple, white text) | `bg-purple-600 text-white` |
| **highlight** | **Highlight**: "50% Today Only" (yellow, dark text) | `bg-yellow-400 text-black` |
| **outline** | **Outline**: "15% OFF" (red border, white bg, red text) | `bg-white text-red-600 border-2 border-red-600` |

| State | Figma reference | Code |
|-------|-----------------|------|
| **expired** | "Expired" (grey pill), "Expired Amount", "Expired Highlight" | `bg-gray-200 text-gray-500 border border-gray-300` + grayscale for colored variants |
| **disabled** | "Disabled": "10% OFF" (lighter red/pink) | `opacity-50` on current variant |

---

## Quick checklist: "Is this matched?"

- **Button** – Compare `/elements/buttons` variant pills to Figma "Available Variants" / "Display Variants" and uiverse solid/outline/ghost examples.
- **Badge** – Compare `/elements/badge` to Figma "Badges (Passive Indicators)" Variants section.
- **Tag** – Compare `/elements/tag` to Figma "Tags (Interactive Chips)" Variants and States.
- **Discount Pill** – Compare `/elements/discount-pill` to Figma "Discount Pills" Variants and States.

If a variant or state in the app doesn’t match the table above, this doc is the single place to update the intended Figma/uiverse source and the code that implements it.
