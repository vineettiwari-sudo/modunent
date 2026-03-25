import type { ComponentType } from "react"
import ToggleSwitch from "../components/system/ToggleSwitch"
import GradientButton from "../components/system/GradientButton"
import CheckboxGroup from "../components/system/CheckboxGroup"
import StickyNavbar from "../components/system/StickyNavbar"
import ProgressBar from "../components/system/ProgressBar"

type ComponentCategory = "buttons" | "inputs" | "layouts" | "navigation" | "feedback"

type RegistryItem = {
  id: string
  title: string
  category: ComponentCategory
  description: string
  component: ComponentType<any>
  props: Record<string, unknown>
  tags: string[]
  likes: number
  views: number
  createdAt: string
  variants: number
  variantOptions?: string[]
  stateOptions?: string[]
  code: {
    jsx: string
    css?: string
  }
}

const elements: RegistryItem[] = [
  {
    id: "toggle-switch",
    title: "Toggle Switch",
    category: "inputs",
    description: "Animated toggle switches with smooth transitions and multiple states",
    component: ToggleSwitch,
    props: { variant: "default", state: "on" },
    tags: ["toggle", "switch", "state", "animation"],
    likes: 321,
    views: 12480,
    createdAt: "2026-01-18",
    variants: 6,
    variantOptions: ["default", "compact"],
    stateOptions: ["on", "off"],
    code: {
      jsx: `import ToggleSwitch from "../components/system/ToggleSwitch"\n\nexport default function Example() {\n  return <ToggleSwitch variant="default" state="on" />\n}`,
    },
  },
  {
    id: "checkbox-group",
    title: "Checkbox Group",
    category: "inputs",
    description: "Accessible checkbox groups with custom visuals and controlled states",
    component: CheckboxGroup,
    props: { variant: "default", state: "mixed" },
    tags: ["checkbox", "forms", "selection", "accessibility"],
    likes: 278,
    views: 10310,
    createdAt: "2026-01-22",
    variants: 5,
    variantOptions: ["default", "compact"],
    stateOptions: ["mixed", "all", "none"],
    code: {
      jsx: `import CheckboxGroup from "../components/system/CheckboxGroup"\n\nexport default function Example() {\n  return <CheckboxGroup state="mixed" />\n}`,
    },
  },
  {
    id: "search-input",
    title: "Search Input",
    category: "inputs",
    description: "Modern search fields with icon actions and focus ring behavior",
    component: GradientButton,
    props: { variant: "ghost", state: "idle" },
    tags: ["input", "search", "form", "field"],
    likes: 198,
    views: 8450,
    createdAt: "2025-12-30",
    variants: 4,
    code: {
      jsx: `<div className="search-input">\n  <input type="search" placeholder="Search components..." />\n  <button type="button">Search</button>\n</div>`,
    },
  },
  {
    id: "gradient-button",
    title: "Gradient Button",
    category: "buttons",
    description: "Primary gradient CTA buttons with hover lift and glow treatments",
    component: GradientButton,
    props: { variant: "primary", state: "idle" },
    tags: ["button", "cta", "gradient", "hover"],
    likes: 412,
    views: 15970,
    createdAt: "2026-02-08",
    variants: 8,
    variantOptions: ["primary", "ghost"],
    stateOptions: ["idle", "disabled"],
    code: {
      jsx: `<GradientButton variant="primary" />`,
    },
  },
  {
    id: "icon-button-set",
    title: "Icon Button Set",
    category: "buttons",
    description: "Compact icon actions for cart, wishlist, search, and utility controls",
    component: GradientButton,
    props: { variant: "ghost", state: "idle" },
    tags: ["button", "icon", "actions", "compact"],
    likes: 236,
    views: 9680,
    createdAt: "2026-01-04",
    variants: 7,
    code: {
      jsx: `<div className="icon-button-set">\n  <button aria-label="Cart">🛒</button>\n  <button aria-label="Wishlist">♡</button>\n  <button aria-label="Search">🔍</button>\n</div>`,
    },
  },
  {
    id: "hero-layout",
    title: "Hero Layout",
    category: "layouts",
    description: "Balanced hero scaffolds with headline, supporting copy, and action rows",
    component: StickyNavbar,
    props: { variant: "wide", state: "overview" },
    tags: ["layout", "hero", "marketing", "landing"],
    likes: 189,
    views: 7420,
    createdAt: "2025-12-12",
    variants: 3,
    variantOptions: ["compact", "wide"],
    stateOptions: ["overview", "docs", "pricing"],
    code: {
      jsx: `<section className="hero-layout">\n  <h1>Build faster interfaces</h1>\n  <p>Production-ready layout primitives.</p>\n</section>`,
    },
  },
  {
    id: "feature-grid",
    title: "Feature Grid",
    category: "layouts",
    description: "Responsive feature grids for value props, highlights, and quick comparisons",
    component: StickyNavbar,
    props: { variant: "compact", state: "docs" },
    tags: ["layout", "grid", "features", "responsive"],
    likes: 207,
    views: 8010,
    createdAt: "2026-01-27",
    variants: 5,
    variantOptions: ["compact", "wide"],
    stateOptions: ["overview", "docs", "pricing"],
    code: {
      jsx: `<section className="feature-grid">\n  <article>Fast setup</article>\n  <article>Accessible</article>\n  <article>Responsive</article>\n</section>`,
    },
  },
  {
    id: "sticky-navbar",
    title: "Sticky Navbar",
    category: "navigation",
    description: "Translucent sticky navigation bars with compact CTA alignment",
    component: StickyNavbar,
    props: { variant: "compact", state: "overview" },
    tags: ["navbar", "navigation", "sticky", "header"],
    likes: 364,
    views: 14780,
    createdAt: "2026-02-02",
    variants: 6,
    variantOptions: ["compact", "wide"],
    stateOptions: ["overview", "docs", "pricing"],
    code: {
      jsx: `<StickyNavbar variant="compact" state="overview" />`,
    },
  },
  {
    id: "tab-navigation",
    title: "Tab Navigation",
    category: "navigation",
    description: "Interactive tab systems for category filtering and section switching",
    component: StickyNavbar,
    props: { variant: "wide", state: "pricing" },
    tags: ["tabs", "navigation", "segmented", "switcher"],
    likes: 221,
    views: 9150,
    createdAt: "2025-12-22",
    variants: 4,
    variantOptions: ["compact", "wide"],
    stateOptions: ["overview", "docs", "pricing"],
    code: {
      jsx: `<div className="tab-navigation">\n  <button className="active">Overview</button>\n  <button>Components</button>\n  <button>Pricing</button>\n</div>`,
    },
  },
  {
    id: "toast-alert",
    title: "Toast Alert",
    category: "feedback",
    description: "Stackable toast notifications with severity states and motion",
    component: ProgressBar,
    props: { variant: "default", state: "medium" },
    tags: ["toast", "feedback", "alert", "notification"],
    likes: 252,
    views: 11040,
    createdAt: "2026-01-09",
    variants: 5,
    stateOptions: ["low", "medium", "high"],
    code: {
      jsx: `<div className="toast-alert" role="status">\n  Saved successfully\n</div>`,
    },
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    category: "feedback",
    description: "Animated progress bars for loading, step completion, and upload states",
    component: ProgressBar,
    props: { variant: "thin", state: "running" },
    tags: ["progress", "feedback", "loading", "status"],
    likes: 287,
    views: 11990,
    createdAt: "2026-02-10",
    variants: 7,
    variantOptions: ["default", "thin"],
    stateOptions: ["running", "low", "medium", "high"],
    code: {
      jsx: `<ProgressBar variant="thin" state="running" />`,
    },
  },
]

export default elements
