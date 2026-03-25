import { createElement } from "react"
import {
  ToggleSwitchPreview,
  HeroLayoutPreview,
  TabNavigationPreview,
  ToggleSwitchFull,
  HeroLayoutFull,
  TabNavigationFull,
} from "../components/elements/ElementRegistryComponents"
import Button from "../components/primitives/Button"
import Badge from "../components/primitives/Badge"
import DiscountPill from "../components/primitives/DiscountPill"
import Tag from "../components/primitives/Tag"

const ButtonPreview = () => createElement(Button, { variant: "primary" }, "Preview")
const BadgePreview = () => createElement(Badge, { variant: "success" })
const DiscountPillPreview = () => createElement(DiscountPill, { variant: "percentage" })
const TagPreview = () => createElement(Tag, { variant: "selected" })

export const registry = {
  "toggle-switch": {
    title: "Toggle Switch",
    description: "Animated toggle switch with smooth transitions.",
    preview: ToggleSwitchPreview,
    component: ToggleSwitchFull,
    category: "inputs",
    variants: ["default", "compact"],
    states: ["default", "hover", "active", "disabled", "loading"],
  },
  "hero-layout": {
    title: "Hero Layout",
    description: "Balanced hero section layout.",
    preview: HeroLayoutPreview,
    component: HeroLayoutFull,
    category: "layouts",
    variants: ["default"],
    states: ["default"],
  },
  "tab-navigation": {
    title: "Tab Navigation",
    description: "Interactive tab switching system.",
    preview: TabNavigationPreview,
    component: TabNavigationFull,
    category: "navigation",
    variants: ["default"],
    states: ["default", "active", "hover", "disabled"],
  },
  buttons: {
    title: "Buttons",
    description: "Flexible action button with loading and disabled support.",
    preview: ButtonPreview,
    component: Button,
    category: "buttons",
    variants: ["primary", "secondary", "ghost", "outline", "outline-cyan", "destructive", "social", "icon-square", "icon-circle"],
    states: ["default", "hover", "active", "disabled", "loading"],
  },
  badge: {
    title: "Badge",
    description: "Status badge primitive for semantic labeling.",
    preview: BadgePreview,
    component: Badge,
    category: "feedback",
    variants: ["neutral", "success", "warning", "error", "highlight", "outline"],
    states: ["default"],
  },
  "discount-pill": {
    title: "Discount Pill",
    description: "Promotional pill for discount campaigns and offers.",
    preview: DiscountPillPreview,
    component: DiscountPill,
    category: "marketing",
    variants: ["percentage", "amount", "bogo", "member", "highlight", "outline"],
    states: ["default", "expired", "disabled"],
  },
  tag: {
    title: "Tag",
    description: "Interactive chip for filtering and selection flows.",
    preview: TagPreview,
    component: Tag,
    category: "filters",
    variants: ["default", "selected", "removable", "outline", "compact"],
    states: ["default", "disabled"],
  },
}
