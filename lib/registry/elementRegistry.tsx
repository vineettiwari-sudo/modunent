import type { ElementItem } from "./types"
import { useState } from "react"
import { Button, getButtonClasses } from "../primitives/Button"
import { IconButton, getIconButtonClasses } from "../primitives/IconButton"
import { Checkbox } from "../primitives/Checkbox"
import { Radio } from "../primitives/Radio"
import { ToggleSwitch } from "../primitives/ToggleSwitch"
import { Input } from "../primitives/Input"
import { Textarea } from "../primitives/Textarea"
import { Select } from "../primitives/Select"
import { Badge } from "../primitives/Badge"
import { Tag } from "../primitives/Tag"
import { Spinner } from "../primitives/Spinner"
import { Alert } from "../primitives/Alert"
import { Tooltip } from "../primitives/Tooltip"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../primitives/Tabs"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../primitives/DropdownMenu"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../primitives/Modal"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../primitives/Accordion"
import { Pagination } from "../primitives/Pagination"
import { Breadcrumb } from "../primitives/Breadcrumb"
import { Skeleton } from "../primitives/Skeleton"
import { ToastProvider, useToast } from "../primitives/Toast"
import { ProgressBar } from "../primitives/ProgressBar"
import {
  ProductCard,
  VariantSelector,
  QuickViewModal,
  WishlistToggle,
  SidebarFilters,
  RangeSlider,
  SortDropdown,
  ActiveFilterPills,
  GridListToggle,
  CartItem,
  QuantityStepper,
  QuantitySelector,
  CartSummary,
  CouponInput,
  TrustBadgeRow,
  CountdownTimer,
  UrgencyIndicator,
  AnnouncementBar,
  PromoBanner,
  DiscountPill,
  QuantityField,
  AnnouncementTicker,
  AnnouncementCarousel,
  LandingPopup,
  MembershipCallout,
  OfferCallout,
  UrgencyCallout,
  FiltersDrawer,
  ClearAllButton,
  ProductCardShowcase,
  ProductCardSkeleton,
} from "../commerce"
import { MenuIconButton } from "../primitives/MenuIconButton"
import { ProductCardClassic } from "../../src/components/ui/ProductCardClassic"
import {
  ShowcaseRadio,
  ShowcaseBars,
  ShowcaseLightningButton,
  ShowcaseGetStarted,
  ShowcaseTealButton,
  ShowcaseOutlineButton,
  ShowcaseMorning,
  ShowcaseMessageBox,
  ShowcaseEarlyAccess,
  ShowcaseCheckList,
  ShowcaseGithub,
  ShowcaseExplore,
  ShowcaseRealism,
  ShowcaseApply,
  ShowcaseVolume,
  ShowcaseSpinner,
  ShowcaseLoadingBar,
  ShowcaseProgressBar,
  ShowcaseTerminal,
  ShowcaseCapsButton,
  ShowcasePlusButton,
  ShowcaseModernButton,
  ShowcaseToggle,
} from "../../src/components/showcase/ShowcasePreviews"

const DEMO_IMAGE = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop"
const DEMO_IMAGE_2 = "https://images.unsplash.com/photo-1581655353564-df123a107eb6?w=200&h=250&fit=crop"
const DEMO_IMAGE_SHOE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=250&fit=crop"
const DEMO_IMAGE_SALE = "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=250&fit=crop"
const DEMO_IMAGE_SOLD = "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&h=250&fit=crop"

function ToggleDemo({ size, initialChecked }: { size?: "sm" | "md" | "lg"; initialChecked?: boolean }) {
  const [checked, setChecked] = useState(initialChecked ?? false)
  return <ToggleSwitch size={size ?? "md"} checked={checked} onCheckedChange={setChecked} aria-label="Toggle" />
}

function PaginationDemo() {
  const [page, setPage] = useState(1)
  return <Pagination page={page} totalPages={10} onPageChange={setPage} />
}

function ModalDemoWithTrigger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button size="md" onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onOpenChange={setOpen} size="md">
        <ModalHeader><span className="font-semibold text-foreground">Dialog</span></ModalHeader>
        <ModalBody>Click outside or press ESC to close.</ModalBody>
        <ModalFooter><Button size="sm" variant="secondary" onClick={() => setOpen(false)}>Close</Button></ModalFooter>
      </Modal>
    </>
  )
}

function ToastDemo() {
  const { addToast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" onClick={() => addToast({ message: "Success!", variant: "success" })}>Success</Button>
      <Button size="sm" variant="destructive" onClick={() => addToast({ message: "Error", variant: "error" })}>Error</Button>
      <Button size="sm" variant="outline" onClick={() => addToast({ message: "Info", variant: "info" })}>Info</Button>
      <Button size="sm" variant="secondary" onClick={() => addToast({ message: "No auto-dismiss", variant: "info", duration: 0, dismissible: true })}>Manual dismiss</Button>
    </div>
  )
}

const REFERENCE_CARD_PROPS = {
  title: "Premium Wireless Headphones",
  brand: "AudioTech",
  price: "$299.99",
  originalPrice: "$399.99",
  memberPrice: "$279.99",
  category: "Electronics",
  rating: 4,
  ratingCount: 1243,
  discount: "25% OFF",
  imageUrl: DEMO_IMAGE,
  hoverImageUrl: DEMO_IMAGE_2,
}

function ProductCardWithQuickView() {
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [wishlist, setWishlist] = useState(false)
  return (
    <>
      <div className="w-[200px]">
        <ProductCard
          title="Premium Cotton T-Shirt"
          price="$7.99"
          imageUrl={DEMO_IMAGE}
          hoverImageUrl={DEMO_IMAGE_2}
          discount="20% off"
          onQuickView={() => setQuickViewOpen(true)}
          wishlistActive={wishlist}
          onWishlistToggle={() => setWishlist(!wishlist)}
        />
      </div>
      <QuickViewModal
        open={quickViewOpen}
        onOpenChange={setQuickViewOpen}
        title="Premium Cotton T-Shirt"
        price="$7.99"
        imageUrl={DEMO_IMAGE}
      />
    </>
  )
}

function ProductCardInteractiveDemo() {
  const addToCartWithErrorSim = (_id: number) => () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => (Math.random() < 0.2 ? reject(new Error("Simulated error")) : resolve()), 800)
    })
  }
  return (
    <div className="flex flex-wrap gap-4">
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className="w-[200px]">
          <ProductCard
            {...REFERENCE_CARD_PROPS}
            title={`Product ${id}`}
            onAddToCart={addToCartWithErrorSim(id)}
            onWishlistToggle={() => {}}
          />
        </div>
      ))}
    </div>
  )
}

function SortDropdownDemo() {
  const [sort, setSort] = useState("newest")
  return (
    <SortDropdown
      options={[{ value: "newest", label: "Newest" }, { value: "price-asc", label: "Price: Low to High" }, { value: "price-desc", label: "Price: High to Low" }]}
      value={sort}
      onChange={setSort}
    />
  )
}

function RangeSliderDemo() {
  const [range, setRange] = useState<[number, number]>([20, 80])
  return <RangeSlider min={0} max={100} value={range} onChange={setRange} label="Price range" />
}

function GridListToggleDemo() {
  const [view, setView] = useState<"grid" | "list">("grid")
  return <GridListToggle value={view} onChange={setView} />
}

function CartItemDemo() {
  const [qty, setQty] = useState(2)
  return <CartItem title="Premium Cotton T-Shirt" price="$7.99" imageUrl={DEMO_IMAGE} quantity={qty} onQuantityChange={setQty} onRemove={() => {}} />
}

function CouponInputDemo() {
  const [code, setCode] = useState<string | null>(null)
  return <CouponInput onApply={setCode} appliedCode={code} onRemove={() => setCode(null)} />
}

function LandingPopupDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button size="md" onClick={() => setOpen(true)}>Open popup</Button>
      <LandingPopup open={open} onClose={() => setOpen(false)}>
        <div className="p-6 text-foreground">
          <h3 className="font-semibold text-lg">Welcome</h3>
          <p className="text-sm text-muted mt-2">Content here. Escape or click outside to close.</p>
        </div>
      </LandingPopup>
    </>
  )
}

function FiltersDrawerDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button size="md" onClick={() => setOpen(true)}>Open filters</Button>
      <FiltersDrawer open={open} onClose={() => setOpen(false)} title="Filters">
        <p className="text-sm text-muted">Filter options go here.</p>
      </FiltersDrawer>
    </>
  )
}

function LiveCountdownDemo() {
  const end = new Date(Date.now() + 24 * 60 * 60 * 1000 + 5000)
  return <CountdownTimer endDate={end} label="Ends in" />
}

function VariantSizeDemo() {
  const [v, setV] = useState<string | null>("M")
  return <VariantSelector label="Size" options={[{ value: "S", label: "S" }, { value: "M", label: "M" }, { value: "L", label: "L" }]} value={v} onChange={(x) => setV(x)} type="size" />
}

function VariantColorDemo() {
  const [v, setV] = useState<string | null>("#3b82f6")
  return <VariantSelector label="Color" options={[{ value: "#3b82f6", label: "Blue" }, { value: "#ef4444", label: "Red" }, { value: "#22c55e", label: "Green" }]} value={v} onChange={(x) => setV(x)} type="color" />
}

function QuickViewDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button size="md" onClick={() => setOpen(true)}>Quick view</Button>
      <QuickViewModal
        open={open}
        onOpenChange={setOpen}
        title="Minimal Everyday Sneakers"
        price="$24.99"
        imageUrl={DEMO_IMAGE_SHOE}
      />
    </>
  )
}

function SidebarFiltersDemo() {
  const [sel, setSel] = useState<Record<string, string[]>>({})
  return <SidebarFilters groups={[{ id: "cat", label: "Category", options: [{ value: "a", label: "Option A", count: 12 }, { value: "b", label: "Option B", count: 8 }] }]} selected={sel} onSelectionChange={(id, vals) => setSel((s) => ({ ...s, [id]: vals }))} />
}

function ActiveFilterPillsDemo() {
  const [pills, setPills] = useState([{ id: "1", label: "Size: M" }, { id: "2", label: "Color: Blue" }])
  return <ActiveFilterPills pills={pills} onRemove={(id) => setPills((p) => p.filter((x) => x.id !== id))} onClearAll={() => setPills([])} />
}

function QuantityStepperDemo() {
  const [q, setQ] = useState(1)
  return <QuantityStepper value={q} min={1} max={10} onChange={setQ} />
}

function QuantitySelectorDemo() {
  const [q, setQ] = useState(1)
  return <QuantitySelector value={q} min={1} max={10} onChange={setQ} />
}

function QuantityFieldDemo(props: {
  labelPosition?: "top" | "left"
  helperText?: string
  error?: string
  loading?: boolean
  value?: number
}) {
  const [q, setQ] = useState(props.value ?? 1)
  const value = props.value !== undefined ? props.value : q
  return (
    <QuantityField
      value={value}
      min={1}
      max={10}
      onChange={setQ}
      label={props.labelPosition ? "Quantity" : undefined}
      labelPosition={props.labelPosition}
      helperText={props.helperText}
      error={props.error}
      loading={props.loading}
    />
  )
}

const SNIPPET_THEME_BLOCK = `:root {
  --control-sm: 24px;
  --control-md: 36px;
  --control-lg: 44px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --surface: 255 255 255;
  --elevated: 245 245 245;
  --foreground: 24 24 27;
  --border: 228 228 231;
  --primary: 59 130 246;
  --primary-foreground: 255 255 255;
  --secondary: 100 116 139;
  --muted: 226 232 240;
}
.dark {
  --surface: 24 24 27;
  --elevated: 39 39 42;
  --foreground: 244 244 245;
  --border: 63 63 70;
  --primary: 96 165 250;
  --primary-foreground: 24 24 27;
  --secondary: 148 163 184;
  --muted: 51 65 85;
}`

const CS_BTN_BASE = `.cs-btn {
  border: none;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.cs-btn:hover { transform: scale(1.05); }`

const CHECKBOX_BOX: Record<string, string> = { sm: "h-[24px] w-[24px]", md: "h-[36px] w-[36px]", lg: "h-[44px] w-[44px]" }
const CHECKBOX_ICON: Record<string, string> = { sm: "w-[12px] h-[12px]", md: "w-[16px] h-[16px]", lg: "w-[18px] h-[18px]" }
const CHECKBOX_LABEL_MIN: Record<string, string> = { sm: "min-h-[24px]", md: "min-h-[36px]", lg: "min-h-[44px]" }
const CHECKBOX_BASE_INPUT =
  "peer appearance-none rounded-[var(--radius-md)] border-2 border-border bg-surface transition-colors checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"
const CHECKBOX_SPAN_CLASS = "text-sm text-foreground"

function getCheckboxSnippet(opts: {
  size?: "sm" | "md" | "lg"
  checked?: boolean
  disabled?: boolean
  label?: string
}) {
  const { size = "md", checked = false, disabled = false, label } = opts
  const inputClass = `${CHECKBOX_BASE_INPUT} ${CHECKBOX_BOX[size]}`
  const svgClass = `pointer-events-none absolute ${CHECKBOX_ICON[size]} text-primary-foreground opacity-0 transition-opacity duration-200 peer-checked:opacity-100`
  const labelClass = `flex items-center gap-3 cursor-pointer select-none ${CHECKBOX_LABEL_MIN[size]}`
  const inputAttrs = [
    'type="checkbox"',
    `class="${inputClass}"`,
    ...(checked ? ["checked"] : []),
    ...(disabled ? ["disabled"] : []),
  ].join(" ")
  const svgMarkup = `<svg class="${svgClass}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 10l3 3 7-7" /></svg>`
  const labelContent = [
    `<div class="relative flex items-center justify-center shrink-0">`,
    `  <input ${inputAttrs} />`,
    `  ${svgMarkup}`,
    `</div>`,
    ...(label ? [`  <span class="${CHECKBOX_SPAN_CLASS}">${label}</span>`] : []),
  ].join("\n")
  return `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<label class="${labelClass}">\n${labelContent}\n</label>`
}

/* ── Tag snippet helper ── */
function getTagSnippet(opts: { variant?: string; size?: string; label: string }) {
  const { variant = "default", size = "default", label } = opts
  const sizeClass = size === "compact" ? "h-[28px] min-h-[28px]" : "h-[36px] min-h-[36px]"
  const base = `inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border px-2 py-0.5 text-xs font-medium transition-colors duration-200 ${sizeClass}`
  const variantMap: Record<string, string> = {
    default: "border-border bg-surface text-foreground",
    outline: "border-border bg-transparent text-foreground",
    filled: "border-transparent bg-foreground text-surface",
    selectable: "border-border bg-surface text-foreground cursor-pointer hover:bg-muted/50",
    "selectable-selected": "bg-foreground text-surface border-foreground cursor-pointer",
    removable: "border-border bg-surface text-foreground",
  }
  const vc = variantMap[variant] ?? variantMap.default
  const isBtn = variant === "selectable" || variant === "selectable-selected"
  const tag = isBtn ? "button" : "span"
  const typeAttr = isBtn ? ' type="button"' : ""
  const removeSvg = variant === "removable"
    ? ` <button type="button" aria-label="Remove" class="ml-1 p-0.5 rounded hover:bg-black/10"><svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>`
    : ""
  return `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<${tag}${typeAttr} class="${base} ${vc}">${label}${removeSvg}</${tag}>`
}

/* ── Badge snippet helper ── */
function getBadgeSnippet(opts: { variant?: string; size?: string; label: string }) {
  const { variant = "default", size = "md", label } = opts
  const sizeMap: Record<string, string> = {
    sm: "h-[20px] min-h-[20px] px-1.5 text-[10px]",
    md: "h-[24px] min-h-[24px] px-2 text-xs",
    lg: "h-[28px] min-h-[28px] px-2.5 text-sm",
  }
  const sc = sizeMap[size] ?? sizeMap.md
  const base = `inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] py-0.5 font-medium ${sc}`
  const variantMap: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    neutral: "bg-muted text-foreground",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    error: "bg-red-100 text-red-800",
    highlight: "bg-purple-100 text-purple-800",
    outline: "border border-border bg-transparent text-foreground",
  }
  const vc = variantMap[variant] ?? variantMap.default
  return `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="${base} ${vc}">${label}</span>`
}

/* ── DiscountPill snippet helper ── */
function getDiscountPillSnippet(opts: { variant?: string; size?: string; value?: number; label?: string; expired?: boolean }) {
  const { variant = "percent", size = "md", value, label, expired } = opts
  const sizeMap: Record<string, string> = {
    sm: "h-[28px] min-h-[28px] px-2 text-[10px]",
    md: "h-[36px] min-h-[36px] px-2.5 text-xs",
    lg: "h-[44px] min-h-[44px] px-3 text-sm",
  }
  const sc = sizeMap[size] ?? sizeMap.md
  const base = `inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors duration-200 ${sc}`
  const variantMap: Record<string, { cls: string; text: string }> = {
    percent: { cls: "bg-red-600 border-red-600 text-white", text: `${value ?? 20}% OFF` },
    flat: { cls: "bg-amber-500 border-amber-500 text-white", text: `$${value ?? 10} OFF` },
    bogo: { cls: "bg-green-600 border-green-600 text-white", text: label ?? "Buy 1 Get 1" },
    member: { cls: "bg-purple-600 border-purple-600 text-white", text: label ?? "Member Save 10%" },
    outline: { cls: "border-red-500 bg-transparent text-red-500", text: `${value ?? 20}% OFF` },
    highlight: { cls: "bg-amber-100 border-amber-200 text-amber-800", text: label ?? "Sale Today Only" },
  }
  const v = variantMap[variant] ?? variantMap.percent
  const expiredClass = expired ? " opacity-60 grayscale" : ""
  const disabledAttr = expired ? ' aria-disabled="true"' : ""
  return `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="${base} ${v.cls}${expiredClass}"${disabledAttr}>${v.text}</span>`
}

const RADIO_BOX: Record<string, string> = { sm: "h-[24px] w-[24px]", md: "h-[36px] w-[36px]", lg: "h-[44px] w-[44px]" }
const RADIO_DOT: Record<string, string> = { sm: "w-[12px] h-[12px]", md: "w-[16px] h-[16px]", lg: "w-[18px] h-[18px]" }
const RADIO_LABEL_MIN: Record<string, string> = { sm: "min-h-[24px]", md: "min-h-[36px]", lg: "min-h-[44px]" }
const RADIO_BASE_INPUT =
  "peer appearance-none rounded-full border-2 border-border bg-surface transition-colors checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"
const RADIO_SPAN_CLASS = "text-sm text-foreground"

function getRadioSnippet(opts: {
  size?: "sm" | "md" | "lg"
  checked?: boolean
  disabled?: boolean
  label?: string
}) {
  const { size = "md", checked = false, disabled = false, label } = opts
  const inputClass = `${RADIO_BASE_INPUT} ${RADIO_BOX[size]}`
  const dotClass = `pointer-events-none absolute rounded-full ${RADIO_DOT[size]} bg-primary-foreground opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100`
  const labelClass = `flex items-center gap-3 cursor-pointer select-none ${RADIO_LABEL_MIN[size]}`
  const inputAttrs = [
    'type="radio"',
    `class="${inputClass}"`,
    ...(checked ? ["checked"] : []),
    ...(disabled ? ["disabled"] : []),
  ].join(" ")
  return `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<label class="${labelClass}">\n  <div class="relative flex items-center justify-center shrink-0">\n    <input ${inputAttrs} />\n    <span class="${dotClass}"></span>\n  </div>\n${label ? `  <span class="${RADIO_SPAN_CLASS}">${label}</span>\n` : ""}</label>`
}

export const elementRegistry: ElementItem[] = [
  { id: "showcase-radio", title: "Radio", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseRadio />, code: `<style>
.cs-radio {
  width: 2rem; height: 2rem; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.22);
  display: flex; align-items: center; justify-content: center;
  padding: 6px; flex-shrink: 0;
  transition: border-color 0.22s ease; cursor: pointer;
}
.cs-radio-inner {
  width: 0; height: 0; border-radius: 50%;
  background: #10b981;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}
.cs-radio.is-on { border-color: #10b981; }
.cs-radio.is-on .cs-radio-inner { width: 1rem; height: 1rem; }
</style>

<div role="button" tabindex="0" style="display:flex;align-items:center;justify-content:center">
  <div class="cs-radio">
    <div class="cs-radio-inner"></div>
  </div>
</div>` }] },
  { id: "showcase-bars", title: "Bar Chart & Slider", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseBars />, code: `<style>
.cs-bars-wrap { width: 180px; display: flex; flex-direction: column; gap: 0.38rem; cursor: pointer; }
.cs-bars { height: 3.4rem; display: flex; align-items: flex-end; gap: 0.25rem; }
.cs-bar { flex: 1; border-radius: 0.18rem 0.18rem 0 0; transition: height 0.45s ease; }
.cs-bar.is-high { background: #3b56e8; }
.cs-bar.is-low { background: #1d2540; }
.cs-bar.h-2 { height: 20%; } .cs-bar.h-3 { height: 30%; } .cs-bar.h-4 { height: 40%; }
.cs-bar.h-5 { height: 50%; } .cs-bar.h-6 { height: 60%; } .cs-bar.h-7 { height: 70%; }
.cs-bar.h-8 { height: 80%; } .cs-bar.h-9 { height: 90%; }
.cs-bars-footer { display: flex; align-items: center; gap: 0.35rem; }
.cs-dot-red { width: 0.44rem; height: 0.44rem; border-radius: 50%; background: #e53e3e; box-shadow: 0 0 8px rgba(229,62,62,0.8); }
.cs-bars-line { flex: 1; height: 0.3rem; border-radius: 999px; background: #151e30; }
</style>

<div class="cs-bars-wrap" role="button" tabindex="0">
  <div class="cs-bars">
    <span class="cs-bar is-low h-3"></span>
    <span class="cs-bar is-high h-7"></span>
    <span class="cs-bar is-high h-8"></span>
    <span class="cs-bar is-high h-6"></span>
    <span class="cs-bar is-low h-4"></span>
  </div>
  <div class="cs-bars-footer">
    <span class="cs-dot-red"></span>
    <span class="cs-bars-line"></span>
  </div>
</div>` }] },
  { id: "showcase-lightning", title: "⚡ Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseLightningButton />, code: `<style>
${CS_BTN_BASE}
.cs-btn-lightning {
  background: #5740f0;
  color: #e7e3e4;
  padding: 0.68rem 1.28rem;
  border-radius: 0.45rem;
  font-size: 0.79rem;
}
</style>

<button type="button" class="cs-btn cs-btn-lightning">⚡ button</button>` }] },
  { id: "showcase-get-started", title: "Get Started Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseGetStarted />, code: `<style>
${CS_BTN_BASE}
.cs-btn-start {
  background: linear-gradient(90deg, #8e22e9, #7020d6);
  color: #e7e3e4;
  padding: 0.68rem 1.42rem;
  border-radius: 0.45rem;
  font-size: 0.79rem;
}
</style>

<button type="button" class="cs-btn cs-btn-start">Get started</button>` }] },
  { id: "showcase-teal", title: "Teal Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseTealButton />, code: `<style>
${CS_BTN_BASE}
.cs-btn-teal {
  background: #0c8f84;
  color: #e7e3e4;
  padding: 0.68rem 1.5rem;
  border-radius: 0.45rem;
  font-size: 0.79rem;
}
</style>

<button type="button" class="cs-btn cs-btn-teal">Button</button>` }] },
  { id: "showcase-outline", title: "Outline Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseOutlineButton />, code: `<style>
${CS_BTN_BASE}
.cs-btn-outline {
  background: transparent;
  color: #cdd5ee;
  border: 1px solid rgba(255,255,255,0.18);
  padding: 0.64rem 1.15rem;
  border-radius: 0.45rem;
  font-size: 0.79rem;
}
.cs-btn-outline:hover {
  border-color: rgba(255,255,255,0.44);
  background: rgba(255,255,255,0.04);
}
</style>

<button type="button" class="cs-btn cs-btn-outline">Button ▶</button>` }] },
  { id: "showcase-morning", title: "Morning Checkbox", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseMorning />, code: `<style>
.cs-morning { display: flex; align-items: center; gap: 0.56rem; cursor: pointer; }
.cs-morning-box {
  width: 0.94rem; height: 0.94rem; border-radius: 0.2rem;
  border: 1.5px solid rgba(255,255,255,0.2);
  transition: all 0.2s ease;
}
.cs-morning-box.is-on { background: #10b981; border-color: #10b981; }
.cs-morning-text { font-size: 0.79rem; color: rgba(185,198,230,0.8); transition: color 0.2s ease; }
.cs-morning-text.is-on { color: #e7e3e4; }
</style>

<div role="button" tabindex="0" class="cs-morning" style="display:flex;align-items:center;justify-content:center">
  <span class="cs-morning-box"></span>
  <span class="cs-morning-text">Morning</span>
</div>` }] },
  { id: "showcase-message", title: "Message Input", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseMessageBox />, code: `<style>
.cs-msg-box {
  width: 90%; display: flex; align-items: center; gap: 0.5rem;
  background: #131928; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 0.5rem; padding: 0.56rem 0.8rem;
}
.cs-msg-icon, .cs-msg-send { border: none; background: transparent; color: #3d4d6a; cursor: pointer; }
.cs-msg-input { flex: 1; min-width: 0; border: none; background: transparent; outline: none; color: #cdd5ee; font-size: 0.76rem; }
.cs-msg-input::placeholder { color: #2d3a55; }
</style>

<div class="cs-msg-box">
  <button type="button" class="cs-msg-icon">⊕</button>
  <input class="cs-msg-input" placeholder="Message..." aria-label="Message" />
  <button type="button" class="cs-msg-send">➜</button>
</div>` }] },
  { id: "showcase-early-access", title: "Get Early Access", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseEarlyAccess />, code: `<style>
.cs-early { font-size: 0.82rem; color: rgba(175,190,228,0.85); text-align: center; line-height: 1.45; cursor: pointer; }
.cs-early strong { color: #e8edf8; }
</style>

<div role="button" tabindex="0" style="display:flex;align-items:center;justify-content:center">
  <p class="cs-early">Get ear<strong>ly</strong> access</p>
</div>` }] },
  { id: "showcase-check-list", title: "Checkbox List", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseCheckList />, code: `<style>
.cs-check-list { display: flex; flex-direction: column; gap: 0.46rem; }
.cs-check-row { display: flex; align-items: center; gap: 0.46rem; font-size: 0.7rem; color: rgba(135,152,198,0.75); cursor: pointer; }
.cs-check-row input { width: 0.78rem; height: 0.78rem; accent-color: #10b981; }
.cs-check-row.is-blue { color: #6b7fff; font-weight: 600; }
</style>

<div class="cs-check-list">
  <label class="cs-check-row"><input type="checkbox" /><span>Checkbox 1</span></label>
  <label class="cs-check-row is-blue"><input type="checkbox" checked /><span>Checkbox 2</span></label>
  <label class="cs-check-row"><input type="checkbox" /><span>Checkbox 3</span></label>
  <label class="cs-check-row"><input type="checkbox" /><span>Checkbox 4</span></label>
</div>` }] },
  { id: "showcase-github", title: "Star on GitHub", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseGithub />, code: `<style>
.cs-github {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #131a2c;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 0.58rem 0.7rem;
  border-radius: 0.44rem;
  font-size: 0.68rem;
  color: rgba(205,215,238,0.9);
  font-weight: 600;
  cursor: pointer;
}
.cs-github svg { width: 0.75rem; height: 0.75rem; fill: rgba(200,210,235,0.55); }
.cs-star { color: #f59e0b; transition: transform 0.3s ease, color 0.2s ease; }
.cs-star.is-on { color: #fcd34d; transform: scale(1.5) rotate(12deg); }
.cs-star-count { color: rgba(125,145,192,0.8); }
</style>

<div role="button" tabindex="0" style="display:flex;align-items:center;justify-content:center">
  <div class="cs-github">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.79 8.2 11.39.6.1.82-.26.82-.57 0-.28-.01-1.23-.01-2.24-3.02.56-3.8-.73-4.04-1.41-.13-.35-.72-1.41-1.23-1.69-.42-.23-1.02-.78-.01-.8.95-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.31 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a10.37 10.37 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.44.38.81 1.1.81 2.22 0 1.61-.01 2.89-.01 3.3 0 .31.22.69.82.57A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
    <span>Star on GitHub</span>
    <span class="cs-star">★</span>
    <span class="cs-star-count">6</span>
  </div>
</div>` }] },
  { id: "showcase-explore", title: "Explore Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseExplore />, code: `<style>
${CS_BTN_BASE}
.cs-btn-explore {
  background: #15a34a;
  color: #052e16;
  border-radius: 999px;
  padding: 0.68rem 1.15rem;
  font-size: 0.79rem;
  font-weight: 800;
}
.cs-btn-explore:hover {
  box-shadow: 0 0 24px rgba(21,163,74,0.5);
  filter: brightness(1.06);
}
</style>

<button type="button" class="cs-btn cs-btn-explore">🧩 Explore</button>` }] },
  { id: "showcase-realism", title: "Realism Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseRealism />, code: `<style>
${CS_BTN_BASE}
.cs-btn-realism {
  background: #0d1221;
  color: #e8edf8;
  border: 1px solid rgba(255,255,255,0.14);
  padding: 0.68rem 1.28rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 18px rgba(0,0,0,0.6);
}
</style>

<button type="button" class="cs-btn cs-btn-realism">Realism</button>` }] },
  { id: "showcase-apply", title: "Apply Now", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseApply />, code: `<style>
${CS_BTN_BASE}
.cs-btn-apply {
  background: #4060f0;
  color: #e7e3e4;
  border-radius: 0.5rem;
  padding: 0.66rem 0.86rem;
  font-size: 0.76rem;
  display: inline-flex;
  align-items: center;
  gap: 0.46rem;
}
.cs-btn-apply.is-done { background: #15a34a; }
.cs-apply-plus { font-size: 0.96rem; display: inline-block; transition: transform 0.35s ease; }
.cs-btn-apply.is-done .cs-apply-plus { transform: rotate(45deg); }
</style>

<span role="button" tabindex="0" class="cs-btn cs-btn-apply">
  <span>Apply Now</span>
  <span class="cs-apply-plus">⊕</span>
</span>` }] },
  { id: "showcase-volume", title: "Volume Slider", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseVolume />, code: `<style>
.cs-volume-wrap { display: flex; align-items: center; justify-content: center; gap: 0.9rem; }
.cs-volume-icon { font-size: 0.9rem; opacity: 0.7; }
.cs-volume-range {
  -webkit-appearance: none; appearance: none;
  width: 120px; height: 2.5rem;
  transform: rotate(-90deg); background: transparent;
}
.cs-volume-range::-webkit-slider-runnable-track {
  height: 0.85rem; background: #1a2133; border-radius: 999px;
}
.cs-volume-range::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  margin-top: -5px; width: 1.5rem; height: 1.5rem;
  border-radius: 0.55rem; border: none;
  background: #e7e3e4; box-shadow: 0 3px 14px rgba(0,0,0,0.55);
}
</style>

<div class="cs-volume-wrap">
  <span class="cs-volume-icon">🔈</span>
  <input type="range" min="0" max="100" value="50" class="cs-volume-range" aria-label="Volume" />
</div>` }] },
  { id: "showcase-spinner", title: "Loading Spinner", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseSpinner />, code: `<style>
.cs-square {
  width: 2.5rem; height: 2.5rem;
  border: 2px solid rgba(255,255,255,0.12);
  border-radius: 0.56rem;
  transition: border-color 0.3s ease; cursor: pointer;
}
.cs-square.is-spin {
  border-color: #10b981 transparent transparent transparent;
  border-radius: 50%;
  animation: cs-square-spin 0.7s linear infinite;
}
@keyframes cs-square-spin { to { transform: rotate(360deg); } }
</style>

<div role="button" tabindex="0" style="display:flex;align-items:center;justify-content:center">
  <div class="cs-square"></div>
</div>` }] },
  { id: "showcase-loading-bar", title: "Loading Bar", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseLoadingBar />, code: `<style>
.cs-loading-box { width: 86%; cursor: pointer; }
.cs-loading-label {
  display: block; margin-bottom: 0.45rem;
  color: #a6b4d1; font-size: 0.72rem;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.cs-loading-track { height: 0.5rem; border-radius: 999px; background: #1b2539; overflow: hidden; }
.cs-loading-fill { display: block; height: 100%; width: 35%; border-radius: 999px; background: #10b981; }
.cs-loading-fill.is-animating { animation: cs-loading-slide 1.7s ease-in-out infinite; }
@keyframes cs-loading-slide {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(270%); }
}
</style>

<div role="button" tabindex="0" class="cs-loading-box">
  <span class="cs-loading-label">Loading</span>
  <div class="cs-loading-track">
    <span class="cs-loading-fill is-animating"></span>
  </div>
</div>` }] },
  { id: "showcase-progress-bar", title: "Progress Bar", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseProgressBar />, code: `<style>
.cs-progress-box { width: 86%; cursor: pointer; }
.cs-progress-label {
  display: block; margin-bottom: 0.45rem;
  color: #a6b4d1; font-size: 0.72rem;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.cs-progress-track { height: 0.5rem; border-radius: 999px; background: #1b2539; overflow: hidden; }
.cs-progress-fill { display: block; height: 100%; width: 12%; border-radius: 999px; background: #10b981; }
.cs-progress-fill.is-animating { animation: cs-progress-grow 2.4s ease-in-out infinite; }
@keyframes cs-progress-grow {
  0% { width: 12%; }
  50% { width: 86%; }
  100% { width: 22%; }
}
</style>

<div role="button" tabindex="0" class="cs-progress-box">
  <span class="cs-progress-label">Progress</span>
  <div class="cs-progress-track">
    <span class="cs-progress-fill is-animating"></span>
  </div>
</div>` }] },
  { id: "showcase-terminal", title: "Status / Terminal", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseTerminal />, code: `<style>
.cs-terminal { width: 88%; max-width: 9.2rem; }
.cs-terminal-top {
  background: #181f32; border-radius: 0.38rem 0.38rem 0 0;
  padding: 0.28rem 0.56rem; display: flex; align-items: center;
  justify-content: space-between; color: rgba(125,145,192,0.8); font-size: 0.6rem;
}
.cs-terminal-dots { display: flex; gap: 0.24rem; }
.cs-terminal-dots i { width: 0.42rem; height: 0.42rem; border-radius: 50%; }
.cs-terminal-dots .is-red { background: #ff5f57; }
.cs-terminal-dots .is-yellow { background: #febc2e; }
.cs-terminal-dots .is-green { background: #28c840; }
.cs-terminal-body {
  background: #090e1c; border-radius: 0 0 0.38rem 0.38rem;
  padding: 0.5rem 0.62rem; min-height: 2.1rem;
  display: flex; align-items: center; gap: 0.3rem;
  color: #1dd5a8; font-family: ui-monospace, monospace; font-size: 0.68rem;
}
.cs-status-dot {
  width: 0.36rem; height: 0.36rem; border-radius: 50%;
  background: #1dd5a8; animation: cs-status-pulse 1.4s ease-in-out infinite;
}
.cs-cursor { animation: cs-cursor-blink 0.75s step-end infinite; }
@keyframes cs-status-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 rgba(29,213,168,0); }
  50% { opacity: 0.6; box-shadow: 0 0 10px rgba(29,213,168,0.65); }
}
@keyframes cs-cursor-blink { 50% { opacity: 0; } }
</style>

<div class="cs-terminal">
  <div class="cs-terminal-top">
    <span>Status</span>
    <div class="cs-terminal-dots">
      <i class="is-red"></i>
      <i class="is-yellow"></i>
      <i class="is-green"></i>
    </div>
  </div>
  <div class="cs-terminal-body">
    <span class="cs-status-dot"></span>
    <span>system online</span>
    <span class="cs-cursor">|</span>
  </div>
</div>` }] },
  { id: "showcase-caps-button", title: "Caps Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseCapsButton />, code: `<style>
${CS_BTN_BASE}
.cs-btn-caps {
  border: 1.5px solid rgba(255,255,255,0.2);
  color: #cdd5ee;
  background: transparent;
  padding: 0.6rem 1.22rem;
  border-radius: 0.45rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}
.cs-btn-caps:hover {
  border-color: rgba(255,255,255,0.44);
  background: rgba(255,255,255,0.04);
}
</style>

<button type="button" class="cs-btn cs-btn-caps">BUTTON</button>` }] },
  { id: "showcase-plus-button", title: "Plus Icon Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcasePlusButton />, code: `<style>
${CS_BTN_BASE}
.cs-btn-plus {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: transparent;
  color: rgba(200,210,235,0.7);
  font-size: 1.4rem;
}
.cs-btn-plus:hover {
  border-color: #10b981;
  color: #10b981;
  transform: rotate(90deg);
  box-shadow: 0 0 18px rgba(16,185,129,0.32);
}
</style>

<button type="button" class="cs-btn cs-btn-plus">+</button>` }] },
  { id: "showcase-modern-button", title: "Modern Button", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseModernButton />, code: `<style>
${CS_BTN_BASE}
.cs-btn-modern {
  border: 1.5px solid #22c55e;
  background: transparent;
  color: #22c55e;
  padding: 0.55rem 0.88rem;
  border-radius: 0.45rem;
  font-size: 0.72rem;
}
.cs-btn-modern:hover {
  background: rgba(34,197,94,0.1);
  box-shadow: 0 0 18px rgba(34,197,94,0.24);
}
</style>

<button type="button" class="cs-btn cs-btn-modern">Modern Button →</button>` }] },
  { id: "showcase-toggle", title: "Toggle Switch", category: "Showcase", component: null, variants: [{ name: "Default", preview: <ShowcaseToggle />, code: `<div role="button" tabindex="0" style="display:inline-flex;align-items:center;justify-content:center">
  <div class="cs-toggle cs-toggle-medium">
    <div class="cs-toggle-knob"></div>
  </div>
</div>` }] },
  {
    id: "button",
    title: "Button",
    category: "Buttons",
    component: Button,
    variants: [
      { name: "Primary", preview: <Button variant="primary" size="md">Primary</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "primary", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Primary</button>` },
      { name: "Secondary", preview: <Button variant="secondary" size="md">Secondary</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "secondary", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Secondary</button>` },
      { name: "Ghost", preview: <Button variant="ghost" size="md">Ghost</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "ghost", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Ghost</button>` },
      { name: "Outline", preview: <Button variant="outline" size="md">Outline</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "outline", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Outline</button>` },
      { name: "Destructive", preview: <Button variant="destructive" size="md">Destructive</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "destructive", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Destructive</button>` },
      { name: "Small", preview: <Button variant="primary" size="sm">Small</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "primary", size: "sm" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Small</button>` },
      { name: "Medium", preview: <Button variant="primary" size="md">Medium</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "primary", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Medium</button>` },
      { name: "Large", preview: <Button variant="primary" size="lg">Large</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "primary", size: "lg" })} disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100">Large</button>` },
      { name: "Loading", preview: <Button variant="primary" size="md" loading>Loading…</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "primary", size: "md" })} disabled aria-busy="true" cursor-wait min-w-[36px]">\n  <span role="status" aria-hidden class="inline-block animate-spin rounded-full border-2 border-border border-t-primary h-4 w-4 shrink-0"></span>\n</button>` },
      { name: "Disabled", preview: <Button variant="primary" size="md" disabled>Disabled</Button>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button class="${getButtonClasses({ variant: "primary", size: "md" })} disabled>Disabled</button>` },
    ],
  },
  {
    id: "icon-button",
    title: "Icon Button",
    category: "Buttons",
    component: IconButton,
    variants: [
      { name: "Primary (square)", preview: <IconButton variant="primary" size="md" shape="square" aria-label="Add"><svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "primary", size: "md", shape: "square" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Add"><svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></button>` },
      { name: "Primary (circle)", preview: <IconButton variant="primary" size="md" shape="circle" aria-label="Add"><svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "primary", size: "md", shape: "circle" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Add"><svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></button>` },
      { name: "Secondary", preview: <IconButton variant="secondary" size="md" aria-label="Close"><svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "secondary", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Close"><svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button>` },
      { name: "Ghost", preview: <IconButton variant="ghost" size="md" aria-label="Settings"><svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "ghost", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Settings"><svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></button>` },
      { name: "Outline", preview: <IconButton variant="outline" size="md" aria-label="Edit"><svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "outline", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Edit"><svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>` },
      { name: "Small", preview: <IconButton variant="primary" size="sm" aria-label="Add"><svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "primary", size: "sm" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Add"><svg class="w-[12px] h-[12px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></button>` },
      { name: "Medium", preview: <IconButton variant="primary" size="md" aria-label="Add"><svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "primary", size: "md" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Add"><svg class="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></button>` },
      { name: "Large", preview: <IconButton variant="primary" size="lg" aria-label="Add"><svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></IconButton>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getIconButtonClasses({ variant: "primary", size: "lg" })} disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Add"><svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></button>` },
    ],
  },
  {
    id: "input",
    title: "Input Field",
    category: "Input Fields",
    component: Input,
    variants: [
      { name: "Default", preview: <Input size="md" placeholder="Placeholder" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<input type="text" placeholder="Placeholder" class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed h-[36px] min-h-[36px] text-sm" />` },
      { name: "With label", preview: <Input size="md" label="Email" placeholder="you@example.com" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full"><label for="email" class="block text-sm font-medium text-foreground mb-1.5">Email</label><input id="email" type="text" placeholder="you@example.com" class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface h-[36px] min-h-[36px] text-sm" /></div>` },
      { name: "Helper text", preview: <Input size="md" placeholder="Username" helperText="Choose a unique username." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full"><input type="text" placeholder="Username" class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface h-[36px] min-h-[36px] text-sm" /><p class="mt-1.5 text-sm text-muted">Choose a unique username.</p></div>` },
      { name: "Error state", preview: <Input size="md" placeholder="Email" error="Please enter a valid email." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full"><input type="text" placeholder="Email" aria-invalid="true" class="w-full border border-red-500 bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 h-[36px] min-h-[36px] text-sm" /><p class="mt-1.5 text-sm text-red-600" role="alert">Please enter a valid email.</p></div>` },
      { name: "Small", preview: <Input size="sm" placeholder="Placeholder" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<input type="text" placeholder="Placeholder" class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface h-[24px] min-h-[24px] text-xs" />` },
      { name: "Medium", preview: <Input size="md" placeholder="Placeholder" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<input type="text" placeholder="Placeholder" class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface h-[36px] min-h-[36px] text-sm" />` },
      { name: "Large", preview: <Input size="lg" placeholder="Placeholder" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<input type="text" placeholder="Placeholder" class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface h-[44px] min-h-[44px] text-base" />` },
      { name: "Disabled", preview: <Input placeholder="Placeholder" disabled />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<input type="text" placeholder="Placeholder" disabled class="w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed h-[36px] min-h-[36px] text-sm" />` },
    ],
  },
  {
    id: "checkbox",
    title: "Checkbox",
    category: "Checkboxes",
    component: Checkbox,
    variants: [
      { name: "Default", preview: <Checkbox size="md" />, code: getCheckboxSnippet({ size: "md" }) },
      { name: "Small", preview: <Checkbox size="sm" />, code: getCheckboxSnippet({ size: "sm" }) },
      { name: "Medium", preview: <Checkbox size="md" />, code: getCheckboxSnippet({ size: "md" }) },
      { name: "Large", preview: <Checkbox size="lg" />, code: getCheckboxSnippet({ size: "lg" }) },
      { name: "Checked", preview: <Checkbox size="md" defaultChecked />, code: getCheckboxSnippet({ size: "md", checked: true }) },
      { name: "With label", preview: <Checkbox size="md" label="Accept terms" />, code: getCheckboxSnippet({ size: "md", label: "Accept terms" }) },
      { name: "Disabled", preview: <Checkbox size="md" disabled />, code: getCheckboxSnippet({ size: "md", disabled: true }) },
    ],
  },
  {
    id: "radio",
    title: "Radio",
    category: "Radio Buttons",
    component: Radio,
    variants: [
      { name: "Default", preview: <Radio name="r" size="md" />, code: getRadioSnippet({ size: "md" }) },
      { name: "Small", preview: <Radio name="r" size="sm" />, code: getRadioSnippet({ size: "sm" }) },
      { name: "Medium", preview: <Radio name="r" size="md" />, code: getRadioSnippet({ size: "md" }) },
      { name: "Large", preview: <Radio name="r" size="lg" />, code: getRadioSnippet({ size: "lg" }) },
      { name: "Checked", preview: <Radio name="r" size="md" defaultChecked />, code: getRadioSnippet({ size: "md", checked: true }) },
      { name: "With label", preview: <Radio name="r" size="md" label="Option" />, code: getRadioSnippet({ size: "md", label: "Option" }) },
      { name: "Disabled", preview: <Radio name="r" size="md" disabled />, code: getRadioSnippet({ size: "md", disabled: true }) },
    ],
  },
  {
    id: "toggle",
    title: "Toggle Switch",
    category: "Toggle switches",
    component: ToggleSwitch,
    variants: [
      { name: "Default", preview: <ToggleDemo size="md" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" role="switch" aria-checked="false" aria-label="Toggle" class="relative inline-flex shrink-0 rounded-full border-2 border-border bg-surface transition-colors h-[36px] w-[52px] min-w-[52px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"><span class="pointer-events-none block h-[16px] w-[16px] rounded-full bg-muted shadow transition-transform translate-x-0.5"></span></button>` },
      { name: "Small", preview: <ToggleDemo size="sm" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" role="switch" aria-checked="false" aria-label="Toggle" class="relative inline-flex shrink-0 rounded-full border-2 border-border bg-surface transition-colors h-[24px] w-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"><span class="pointer-events-none block h-[12px] w-[12px] rounded-full bg-muted shadow transition-transform translate-x-0.5"></span></button>` },
      { name: "Medium", preview: <ToggleDemo size="md" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" role="switch" aria-checked="false" aria-label="Toggle" class="relative inline-flex shrink-0 rounded-full border-2 border-border bg-surface transition-colors h-[36px] w-[52px] min-w-[52px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"><span class="pointer-events-none block h-[16px] w-[16px] rounded-full bg-muted shadow transition-transform translate-x-0.5"></span></button>` },
      { name: "Large", preview: <ToggleDemo size="lg" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" role="switch" aria-checked="false" aria-label="Toggle" class="relative inline-flex shrink-0 rounded-full border-2 border-border bg-surface transition-colors h-[44px] w-[60px] min-w-[60px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"><span class="pointer-events-none block h-[18px] w-[18px] rounded-full bg-muted shadow transition-transform translate-x-0.5"></span></button>` },
      { name: "On", preview: <ToggleDemo size="md" initialChecked />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" role="switch" aria-checked="true" aria-label="Toggle" class="relative inline-flex shrink-0 rounded-full border-2 border-primary bg-primary transition-colors h-[36px] w-[52px] min-w-[52px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"><span class="pointer-events-none block h-[16px] w-[16px] rounded-full bg-primary-foreground shadow transition-transform translate-x-[38px]"></span></button>` },
      { name: "Disabled", preview: <ToggleSwitch disabled aria-label="Toggle" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" role="switch" aria-checked="false" aria-label="Toggle" disabled class="relative inline-flex shrink-0 rounded-full border-2 border-border bg-surface transition-colors h-[36px] w-[52px] min-w-[52px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"><span class="pointer-events-none block h-[16px] w-[16px] rounded-full bg-muted shadow transition-transform translate-x-0.5"></span></button>` },
    ],
  },
  {
    id: "textarea",
    title: "Textarea",
    category: "Input Fields",
    component: Textarea,
    variants: [
      { name: "Default", preview: <Textarea size="md" placeholder="Message..." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<textarea placeholder="Message..." class="w-full min-h-[36px] px-4 py-3 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed resize-y"></textarea>` },
      { name: "With label", preview: <Textarea size="md" label="Message" placeholder="Type here..." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full"><label for="msg" class="block text-sm font-medium text-foreground mb-1.5">Message</label><textarea id="msg" placeholder="Type here..." class="w-full min-h-[36px] px-4 py-3 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface resize-y"></textarea></div>` },
      { name: "Error state", preview: <Textarea size="md" placeholder="Description" error="This field is required." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full"><textarea placeholder="Description" aria-invalid="true" class="w-full min-h-[36px] px-4 py-3 rounded-[var(--radius-md)] text-sm border border-red-500 bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 resize-y"></textarea><p class="mt-1.5 text-sm text-red-600" role="alert">This field is required.</p></div>` },
      { name: "Small", preview: <Textarea size="sm" placeholder="Message..." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<textarea placeholder="Message..." class="w-full min-h-[24px] px-4 py-3 rounded-[var(--radius-md)] text-xs border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-y"></textarea>` },
      { name: "Medium", preview: <Textarea size="md" placeholder="Message..." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<textarea placeholder="Message..." class="w-full min-h-[36px] px-4 py-3 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-y"></textarea>` },
      { name: "Large", preview: <Textarea size="lg" placeholder="Message..." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<textarea placeholder="Message..." class="w-full min-h-[44px] px-4 py-3 rounded-[var(--radius-md)] text-base border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-y"></textarea>` },
      { name: "Disabled", preview: <Textarea placeholder="Message..." disabled />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<textarea placeholder="Message..." disabled class="w-full min-h-[36px] px-4 py-3 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed resize-y"></textarea>` },
    ],
  },
  {
    id: "select",
    title: "Select",
    category: "Forms",
    component: Select,
    variants: [
      { name: "Default", preview: <Select size="md"><option>Choose...</option><option>Option A</option><option>Option B</option></Select>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<select class="w-full h-[36px] min-h-[36px] px-4 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-[length:1rem] bg-[right_0.5rem_center]">\n  <option>Choose...</option>\n  <option>Option A</option>\n  <option>Option B</option>\n</select>` },
      { name: "Small", preview: <Select size="sm"><option>Choose...</option><option>Option A</option><option>Option B</option></Select>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<select class="w-full h-[24px] min-h-[24px] px-4 rounded-[var(--radius-md)] text-xs border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-[length:1rem] bg-[right_0.5rem_center]">\n  <option>Choose...</option>\n  <option>Option A</option>\n  <option>Option B</option>\n</select>` },
      { name: "Medium", preview: <Select size="md"><option>Choose...</option><option>Option A</option><option>Option B</option></Select>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<select class="w-full h-[36px] min-h-[36px] px-4 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-[length:1rem] bg-[right_0.5rem_center]">\n  <option>Choose...</option>\n  <option>Option A</option>\n  <option>Option B</option>\n</select>` },
      { name: "Large", preview: <Select size="lg"><option>Choose...</option><option>Option A</option><option>Option B</option></Select>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<select class="w-full h-[44px] min-h-[44px] px-4 rounded-[var(--radius-md)] text-base border border-border bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-[length:1rem] bg-[right_0.5rem_center]">\n  <option>Choose...</option>\n  <option>Option A</option>\n  <option>Option B</option>\n</select>` },
    ],
  },
  {
    id: "tags",
    title: "Tags",
    category: "Tags",
    component: Tag,
    variants: [
      { name: "Default", preview: <Tag>Electronics</Tag>, code: getTagSnippet({ label: "Electronics" }) },
      { name: "Selected", preview: <Tag variant="selectable" selected onSelect={() => {}}>On Sale</Tag>, code: getTagSnippet({ variant: "selectable-selected", label: "On Sale" }) },
      { name: "Removable", preview: <Tag variant="removable" onRemove={() => {}}>Color: Blue</Tag>, code: getTagSnippet({ variant: "removable", label: "Color: Blue" }) },
      { name: "Outline", preview: <Tag variant="outline">Free Shipping</Tag>, code: getTagSnippet({ variant: "outline", label: "Free Shipping" }) },
      { name: "Filled", preview: <Tag variant="filled">New Arrival</Tag>, code: getTagSnippet({ variant: "filled", label: "New Arrival" }) },
      { name: "Compact", preview: <Tag size="compact">Compact</Tag>, code: getTagSnippet({ size: "compact", label: "Compact" }) },

      /* ── States ── */
      {
        name: "Hover",
        preview: (
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "2px 12px", fontSize: "0.875rem", fontWeight: 500, borderRadius: "9999px", border: "1px solid #9ca3af", background: "#e5e7eb", color: "#374151", transform: "scale(1.05)", boxShadow: "0 2px 6px rgba(0,0,0,0.12)", transition: "all 0.2s", cursor: "pointer" }}
          >
            Hover
          </span>
        ),
        code: `<style>\n${`/* paste your :root theme block here */`}\n\n.tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 2px 12px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: 9999px;\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tag:hover {\n  background: #e5e7eb;\n  transform: scale(1.05);\n  box-shadow: 0 2px 6px rgba(0,0,0,0.12);\n}\n</style>\n\n<span class="tag">Hover</span>`,
      },
      {
        name: "Active",
        preview: <Tag variant="selected">Active</Tag>,
        code: getTagSnippet({ variant: "selectable-selected", label: "Active" }),
      },
      {
        name: "Disabled",
        preview: <Tag forcedState="disabled">Disabled</Tag>,
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700 opacity-50 cursor-not-allowed pointer-events-none">Disabled</span>`,
      },
      {
        name: "Selected + Removable",
        preview: <Tag variant="removable" onRemove={() => {}}>Selected &amp; Removable</Tag>,
        code: getTagSnippet({ variant: "removable", label: "Selected &amp; Removable" }),
      },

      /* ── With Leading Icons ── */
      {
        name: "With Icon",
        preview: <Tag><span>⚡</span> Trending</Tag>,
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700"><span>⚡</span> Trending</span>`,
      },
      {
        name: "Shipping Tag",
        preview: <Tag variant="outline"><span>📦</span> Free Shipping</Tag>,
        code: getTagSnippet({ variant: "outline", label: "📦 Free Shipping" }),
      },
      {
        name: "Promo Tag",
        preview: <Tag variant="filled"><span>🎁</span> Free Gift</Tag>,
        code: getTagSnippet({ variant: "filled", label: "🎁 Free Gift" }),
      },

      /* ── Common Use Cases ── */
      {
        name: "Applied Filters",
        preview: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Tag variant="removable" onRemove={() => {}}>Color: Blue</Tag>
            <Tag variant="removable" onRemove={() => {}}>Size: Large</Tag>
            <Tag variant="removable" onRemove={() => {}}>Brand: Nike</Tag>
            <Tag variant="removable" onRemove={() => {}}>Price: $50–$100</Tag>
          </div>
        ),
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<div style="display:flex;flex-wrap:wrap;gap:8px;">\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Color: Blue <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Size: Large <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Brand: Nike <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Price: $50–$100 <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n</div>`,
      },
      {
        name: "Size Selection",
        preview: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Tag variant="default">XS</Tag>
            <Tag variant="default">S</Tag>
            <Tag variant="selected">M</Tag>
            <Tag variant="default">L</Tag>
            <Tag variant="default">XL</Tag>
            <Tag variant="default">XXL</Tag>
          </div>
        ),
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<div style="display:flex;flex-wrap:wrap;gap:8px;">\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">XS</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">S</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-800 bg-gray-800 text-white">M</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">L</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">XL</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">XXL</span>\n</div>`,
      },
      {
        name: "Product Attributes",
        preview: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Tag variant="filled"><span>⚡</span> New Arrival</Tag>
            <Tag variant="filled"><span>★</span> Best Seller</Tag>
            <Tag variant="outline"><span>🏷️</span> Limited Edition</Tag>
            <Tag variant="outline"><span>📦</span> Free Shipping</Tag>
          </div>
        ),
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<div style="display:flex;flex-wrap:wrap;gap:8px;">\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white"><span>⚡</span> New Arrival</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white"><span>★</span> Best Seller</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-400 bg-transparent text-gray-700"><span>🏷️</span> Limited Edition</span>\n  <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-400 bg-transparent text-gray-700"><span>📦</span> Free Shipping</span>\n</div>`,
      },
      {
        name: "Category Tags (Compact)",
        preview: (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Toys", "Beauty", "Automotive"].map((cat) => (
              <Tag key={cat} size="compact">{cat}</Tag>
            ))}
          </div>
        ),
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<div style="display:flex;flex-wrap:wrap;gap:6px;">\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Electronics</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Fashion</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Home &amp; Garden</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Sports</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Books</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Toys</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Beauty</span>\n  <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Automotive</span>\n</div>`,
      },
      {
        name: "Search Results Filters",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>Showing results for:</span>
              <Tag variant="removable" onRemove={() => {}}>wireless headphones</Tag>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "0.75rem", color: "#6b7280", alignSelf: "center" }}>Active filters:</span>
              <Tag variant="removable" onRemove={() => {}}>Under $100</Tag>
              <Tag variant="removable" onRemove={() => {}}>4★ &amp; above</Tag>
              <Tag variant="removable" onRemove={() => {}}>In Stock</Tag>
            </div>
          </div>
        ),
        code: `<style>\n${`/* paste your :root theme block here */`}\n</style>\n\n<div style="display:flex;flex-direction:column;gap:10px;">\n  <div style="display:flex;align-items:center;gap:8px;">\n    <span style="font-size:0.75rem;color:#6b7280;">Showing results for:</span>\n    <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">wireless headphones <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n  </div>\n  <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">\n    <span style="font-size:0.75rem;color:#6b7280;">Active filters:</span>\n    <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">Under $100 <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n    <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">4★ &amp; above <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n    <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border border-gray-300 bg-gray-100 text-gray-700">In Stock <button type="button" aria-label="Remove" class="ml-0.5 rounded p-0.5 hover:bg-gray-300/50 text-xs leading-none">×</button></span>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "badge",
    title: "Badge",
    category: "Badges",
    component: Badge,
    variants: [
      { name: "Default", preview: <Badge>New</Badge>, code: getBadgeSnippet({ label: "New" }) },
      { name: "Neutral", preview: <Badge variant="neutral">In Stock</Badge>, code: getBadgeSnippet({ variant: "neutral", label: "In Stock" }) },
      { name: "Success", preview: <Badge variant="success">Verified</Badge>, code: getBadgeSnippet({ variant: "success", label: "Verified" }) },
      { name: "Warning", preview: <Badge variant="warning">Low Stock</Badge>, code: getBadgeSnippet({ variant: "warning", label: "Low Stock" }) },
      { name: "Error", preview: <Badge variant="error">Out of Stock</Badge>, code: getBadgeSnippet({ variant: "error", label: "Out of Stock" }) },
      { name: "Highlight", preview: <Badge variant="highlight">Reduced</Badge>, code: getBadgeSnippet({ variant: "highlight", label: "Reduced" }) },
      { name: "Outline", preview: <Badge variant="outline">New Arrival</Badge>, code: getBadgeSnippet({ variant: "outline", label: "New Arrival" }) },
      { name: "Small", preview: <Badge size="sm">Small</Badge>, code: getBadgeSnippet({ size: "sm", label: "Small" }) },
      { name: "Large", preview: <Badge size="lg">Large</Badge>, code: getBadgeSnippet({ size: "lg", label: "Large" }) },
    ],
  },
  {
    id: "discount-pill",
    title: "Discount Pill",
    category: "Discount Pills",
    component: DiscountPill,
    variants: [
      { name: "Percent", preview: <DiscountPill variant="percent" value={20} />, code: getDiscountPillSnippet({ variant: "percent", value: 20 }) },
      { name: "Flat", preview: <DiscountPill variant="flat" value={10} />, code: getDiscountPillSnippet({ variant: "flat", value: 10 }) },
      { name: "BOGO", preview: <DiscountPill variant="bogo" label="Buy 1 Get 1" />, code: getDiscountPillSnippet({ variant: "bogo", label: "Buy 1 Get 1" }) },
      { name: "Member", preview: <DiscountPill variant="member" label="Member Save 10%" />, code: getDiscountPillSnippet({ variant: "member", label: "Member Save 10%" }) },
      { name: "Outline", preview: <DiscountPill variant="outline" value={20} />, code: getDiscountPillSnippet({ variant: "outline", value: 20 }) },
      { name: "Highlight", preview: <DiscountPill variant="highlight" label="Sale Today Only" />, code: getDiscountPillSnippet({ variant: "highlight", label: "Sale Today Only" }) },
      { name: "Expired", preview: <DiscountPill variant="percent" value={20} expired />, code: getDiscountPillSnippet({ variant: "percent", value: 20, expired: true }) },
      { name: "Small", preview: <DiscountPill variant="percent" size="sm" value={20} />, code: getDiscountPillSnippet({ variant: "percent", size: "sm", value: 20 }) },
      { name: "Large", preview: <DiscountPill variant="percent" size="lg" value={20} />, code: getDiscountPillSnippet({ variant: "percent", size: "lg", value: 20 }) },
      // ── Sizes ──
      { name: "Medium (PDP)", preview: <DiscountPill variant="percent" size="md" value={20} />, code: getDiscountPillSnippet({ variant: "percent", size: "md", value: 20 }) },
      // ── States ──
      {
        name: "Hover",
        preview: (
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", borderRadius: "9999px", border: "1px solid transparent", fontWeight: 600, fontSize: "12px", padding: "0 10px", height: "36px", background: "#dc2626", color: "#e7e3e4", transform: "scale(1.05)", transition: "opacity 0.2s, transform 0.2s" }}>
            Hover to see
          </span>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n.dp-hover { display:inline-flex; align-items:center; gap:6px; border-radius:9999px; border:1px solid transparent; font-weight:600; font-size:12px; padding:0 10px; height:36px; background:#dc2626; color:#e7e3e4; transition:opacity 0.2s, transform 0.2s; }\n.dp-hover:hover { opacity:0.9; transform:scale(1.05); }\n</style>\n\n<span class="dp-hover">Hover to see</span>`,
      },
      {
        name: "Disabled",
        preview: <DiscountPill variant="percent" value={10} disabled />,
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-red-600 text-white opacity-50 cursor-not-allowed" aria-disabled="true">10% OFF</span>`,
      },
      {
        name: "Expired Amount",
        preview: <DiscountPill variant="flat" label="₹500 OFF" expired />,
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-amber-500 text-white opacity-60 grayscale" aria-disabled="true">₹500 OFF</span>`,
      },
      {
        name: "Expired Highlight",
        preview: <DiscountPill variant="highlight" label="Flash Sale" expired />,
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-amber-200 text-gray-700 opacity-60 grayscale" aria-disabled="true">Flash Sale</span>`,
      },
      // ── With Icons ──
      {
        name: "Percentage + Icon",
        preview: (
          <DiscountPill
            variant="percent"
            value={20}
            icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="5" cy="5" r="2" /><circle cx="11" cy="11" r="2" /><line x1="3" y1="13" x2="13" y2="3" /></svg>}
          />
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-red-600 text-white"><svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="5" cy="5" r="2"/><circle cx="11" cy="11" r="2"/><line x1="3" y1="13" x2="13" y2="3"/></svg>20% OFF</span>`,
      },
      {
        name: "Amount + Icon",
        preview: (
          <DiscountPill
            variant="flat"
            label="Save ₹500"
            icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M2 2h2l2.4 10.4M6 6h8l-1.5 6H6" /><circle cx="6" cy="14" r="1" /><circle cx="13" cy="14" r="1" /></svg>}
          />
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-amber-500 text-white"><svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 2h2l2.4 10.4M6 6h8l-1.5 6H6"/><circle cx="6" cy="14" r="1"/><circle cx="13" cy="14" r="1"/></svg>Save ₹500</span>`,
      },
      {
        name: "BOGO + Icon",
        preview: (
          <DiscountPill
            variant="bogo"
            label="Buy 2 Get 1"
            icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M8 2a2 2 0 0 1 2 2v1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a2 2 0 0 1 2-2z" /></svg>}
          />
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-green-600 text-white"><svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 2a2 2 0 0 1 2 2v1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a2 2 0 0 1 2-2z"/></svg>Buy 2 Get 1</span>`,
      },
      {
        name: "Member + Icon",
        preview: (
          <DiscountPill
            variant="member"
            label="Members Save 10%"
            icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polygon points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6" /></svg>}
          />
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-purple-600 text-white"><svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6"/></svg>Members Save 10%</span>`,
      },
      {
        name: "Highlight + Icon",
        preview: (
          <DiscountPill
            variant="highlight"
            label="Flash Sale 40%"
            icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 1L4 9h5l-2 6 7-8H9z" /></svg>}
          />
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-amber-200 text-gray-800"><svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 1L4 9h5l-2 6 7-8H9z"/></svg>Flash Sale 40%</span>`,
      },
      {
        name: "Outline + Icon",
        preview: (
          <DiscountPill
            variant="outline"
            label="Early Access 10%"
            icon={<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="8" cy="8" r="6" /><path d="M8 5v3.5l2 2" /></svg>}
          />
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center gap-1.5 rounded-full border-2 border-red-500 bg-transparent font-medium h-[36px] px-2.5 text-xs text-red-500"><svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 2"/></svg>Early Access 10%</span>`,
      },
      // ── Real-world examples ──
      {
        name: "PLP Card",
        preview: (
          <div style={{ position: "relative", width: 140, borderRadius: 10, overflow: "hidden", border: "1px solid #e4e4e7", background: "#fff" }}>
            <div style={{ width: "100%", height: 100, background: "#f4f4f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#71717a" }}>Image</div>
            <div style={{ position: "absolute", top: 8, left: 8 }}>
              <DiscountPill variant="percent" size="sm" value={30} />
            </div>
            <div style={{ padding: "8px 10px", fontSize: 12, color: "#18181b" }}>Product Name</div>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="position:relative;width:140px;border-radius:10px;overflow:hidden;border:1px solid #e4e4e7;background:#fff;">\n  <div style="width:100%;height:100px;background:#f4f4f5;display:flex;align-items:center;justify-content:center;font-size:11px;color:#71717a;">Image</div>\n  <span style="position:absolute;top:8px;left:8px;" class="inline-flex items-center rounded-full border border-transparent font-medium h-[28px] px-2 text-[10px] bg-red-600 text-white">30% OFF</span>\n  <div style="padding:8px 10px;font-size:12px;color:#18181b;">Product Name</div>\n</div>`,
      },
      {
        name: "Cart Item",
        preview: (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "10px 14px", borderRadius: 8, border: "1px solid #e4e4e7", background: "#fff", minWidth: 260 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#18181b" }}>Blue Sneakers</span>
              <DiscountPill variant="percent" size="sm" label="Extra 10%" />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#18181b" }}>₹1,350</span>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-radius:8px;border:1px solid #e4e4e7;background:#fff;">\n  <div style="display:flex;flex-direction:column;gap:4px;">\n    <span style="font-size:13px;font-weight:600;color:#18181b;">Blue Sneakers</span>\n    <span class="inline-flex items-center rounded-full border border-transparent font-medium h-[28px] px-2 text-[10px] bg-red-600 text-white">Extra 10%</span>\n  </div>\n  <span style="font-size:14px;font-weight:700;color:#18181b;">₹1,350</span>\n</div>`,
      },
      {
        name: "Hero Banner",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, padding: "20px 24px", borderRadius: 12, background: "linear-gradient(135deg,#1e1b4b,#312e81)", minWidth: 240 }}>
            <DiscountPill variant="highlight" size="lg" label="MEGA SALE 50%" />
            <span style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>Shop the Season</span>
            <span style={{ fontSize: 12, color: "#c7d2fe" }}>Deals ending soon. Don&apos;t miss out.</span>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:flex;flex-direction:column;align-items:flex-start;gap:10px;padding:20px 24px;border-radius:12px;background:linear-gradient(135deg,#1e1b4b,#312e81);">\n  <span class="inline-flex items-center rounded-full border border-transparent font-medium h-[44px] px-3 text-sm bg-amber-200 text-gray-800">MEGA SALE 50%</span>\n  <span style="font-size:20px;font-weight:800;color:#fff;line-height:1.2;">Shop the Season</span>\n  <span style="font-size:12px;color:#c7d2fe;">Deals ending soon. Don't miss out.</span>\n</div>`,
      },
      {
        name: "Urgency Messaging",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "12px 16px", borderRadius: 8, border: "1px solid #fca5a5", background: "#fef2f2", minWidth: 220 }}>
            <DiscountPill variant="percent" size="sm" label="Flash Deal 40%" />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#b91c1c" }}>Limited Stock Alert</span>
            <span style={{ fontSize: 11, color: "#6b7280" }}>Only 3 left at this price</span>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:flex;flex-direction:column;gap:6px;padding:12px 16px;border-radius:8px;border:1px solid #fca5a5;background:#fef2f2;">\n  <span class="inline-flex items-center rounded-full border border-transparent font-medium h-[28px] px-2 text-[10px] bg-red-600 text-white">Flash Deal 40%</span>\n  <span style="font-size:13px;font-weight:700;color:#b91c1c;">Limited Stock Alert</span>\n  <span style="font-size:11px;color:#6b7280;">Only 3 left at this price</span>\n</div>`,
      },
      {
        name: "BOGO Offer",
        preview: (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, padding: "14px 24px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #86efac", minWidth: 260 }}>
            <DiscountPill variant="bogo" size="md" label="Buy 2 Get 1 FREE" />
            <span style={{ fontSize: 12, color: "#15803d", fontWeight: 600 }}>Auto-applied at checkout</span>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:flex;align-items:center;justify-content:center;gap:12px;padding:14px 24px;border-radius:8px;background:#f0fdf4;border:1px solid #86efac;">\n  <span class="inline-flex items-center rounded-full border border-transparent font-medium h-[36px] px-2.5 text-xs bg-green-600 text-white">Buy 2 Get 1 FREE</span>\n  <span style="font-size:12px;color:#15803d;font-weight:600;">Auto-applied at checkout</span>\n</div>`,
      },
      {
        name: "Stacked Discounts",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "12px 14px", borderRadius: 8, border: "1px solid #e4e4e7", background: "#fff", alignItems: "flex-start" }}>
            <DiscountPill variant="percent" size="sm" value={50} />
            <DiscountPill variant="flat" size="sm" label="Extra ₹200" />
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:8px;border:1px solid #e4e4e7;background:#fff;align-items:flex-start;">\n  <span class="inline-flex items-center rounded-full border border-transparent font-medium h-[28px] px-2 text-[10px] bg-red-600 text-white">50% OFF</span>\n  <span class="inline-flex items-center rounded-full border border-transparent font-medium h-[28px] px-2 text-[10px] bg-amber-500 text-white">Extra ₹200</span>\n</div>`,
      },
    ],
  },
  {
    id: "spinner",
    title: "Spinner",
    category: "Loaders",
    component: Spinner,
    variants: [
      { name: "Small", preview: <Spinner size="sm" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span role="status" aria-label="Loading" class="inline-block animate-spin rounded-full border-2 border-border border-t-primary h-4 w-4"></span>` },
      { name: "Medium", preview: <Spinner size="md" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span role="status" aria-label="Loading" class="inline-block animate-spin rounded-full border-2 border-border border-t-primary h-6 w-6"></span>` },
      { name: "Large", preview: <Spinner size="lg" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span role="status" aria-label="Loading" class="inline-block animate-spin rounded-full border-[3px] border-border border-t-primary h-8 w-8"></span>` },
    ],
  },
  {
    id: "alert",
    title: "Alert",
    category: "System",
    component: Alert,
    variants: [
      { name: "Default", preview: <Alert>Default alert message.</Alert>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-elevated border-border text-foreground">Default alert message.</div>` },
      { name: "Success", preview: <Alert variant="success">Operation completed successfully.</Alert>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-green-500/10 border-green-500/30 text-foreground">Operation completed successfully.</div>` },
      { name: "Error", preview: <Alert variant="error">Something went wrong.</Alert>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-red-500/10 border-red-500/30 text-foreground">Something went wrong.</div>` },
      { name: "Warning", preview: <Alert variant="warning">Please review before continuing.</Alert>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-amber-500/10 border-amber-500/30 text-foreground">Please review before continuing.</div>` },
      { name: "Info", preview: <Alert variant="info">Here's some helpful information.</Alert>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-primary/10 border-primary/30 text-foreground">Here's some helpful information.</div>` },
      { name: "Dismissible", preview: <Alert dismissible>You can close this alert.</Alert>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-elevated border-border text-foreground flex items-start justify-between gap-3"><div class="flex-1 min-w-0">You can close this alert.</div><button type="button" aria-label="Dismiss" class="shrink-0 p-1 rounded-md text-foreground/70 hover:text-foreground hover:bg-black/5">×</button></div>` },
    ],
  },
  {
    id: "tooltip",
    title: "Tooltip",
    category: "Navigation",
    component: Tooltip,
    variants: [
      {
        name: "Default (top)",
        preview: (
          <Tooltip content="Tooltip text" side="top">
            <button type="button" className="h-[36px] px-4 rounded-[var(--radius-md)] border border-border bg-surface text-foreground text-sm font-medium">Hover me</button>
          </Tooltip>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="relative inline-flex">\n  <button type="button" class="h-[36px] px-4 rounded-[var(--radius-md)] border border-border bg-surface text-foreground text-sm font-medium">Hover me</button>\n  <span role="tooltip" class="absolute z-50 px-2 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium bg-foreground text-primary-foreground whitespace-nowrap bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-200">Tooltip text</span>\n</span>`,
      },
      { name: "Bottom", preview: <Tooltip content="Below" side="bottom"><span className="text-sm text-foreground underline cursor-default">Hover</span></Tooltip>, code: `<span class="relative inline-flex"><span class="text-sm text-foreground underline">Hover</span><span role="tooltip" class="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium bg-foreground text-primary-foreground">Below</span></span>` },
      { name: "Left", preview: <Tooltip content="Left side" side="left"><Button size="sm">Hover</Button></Tooltip>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="relative inline-flex">\n  <button type="button" class="h-[24px] px-3 rounded-[var(--radius-md)] text-xs font-medium bg-primary text-primary-foreground">Hover</button>\n  <span role="tooltip" class="absolute z-50 right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium bg-foreground text-primary-foreground whitespace-nowrap">Left side</span>\n</span>` },
      { name: "Right", preview: <Tooltip content="Right side" side="right"><Button size="sm">Hover</Button></Tooltip>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="relative inline-flex">\n  <button type="button" class="h-[24px] px-3 rounded-[var(--radius-md)] text-xs font-medium bg-primary text-primary-foreground">Hover</button>\n  <span role="tooltip" class="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium bg-foreground text-primary-foreground whitespace-nowrap">Right side</span>\n</span>` },
    ],
  },
  {
    id: "tabs",
    title: "Tabs",
    category: "Navigation",
    component: Tabs,
    variants: [
      {
        name: "Default",
        preview: (
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Content for tab 1.</TabsContent>
            <TabsContent value="tab2">Content for tab 2.</TabsContent>
            <TabsContent value="tab3">Content for tab 3.</TabsContent>
          </Tabs>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div role="tablist" class="flex border-b border-border text-sm gap-6 pb-2">\n    <button role="tab" type="button" class="px-4 py-2 font-medium text-foreground border-b-2 border-primary -mb-[2px] rounded-sm">Tab 1</button>\n    <button role="tab" type="button" class="px-4 py-2 font-medium text-muted hover:text-foreground rounded-sm">Tab 2</button>\n    <button role="tab" type="button" class="px-4 py-2 font-medium text-muted hover:text-foreground rounded-sm">Tab 3</button>\n  </div>\n  <div role="tabpanel" class="pt-4">Content for tab 1.</div>\n</div>`,
      },
      {
        name: "Bordered",
        preview: (
          <Tabs defaultValue="a" variant="bordered">
            <TabsList>
              <TabsTrigger value="a">Tab A</TabsTrigger>
              <TabsTrigger value="b">Tab B</TabsTrigger>
            </TabsList>
            <TabsContent value="a">Panel A</TabsContent>
            <TabsContent value="b">Panel B</TabsContent>
          </Tabs>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div role="tablist" class="flex rounded-[var(--radius-md)] border border-border bg-surface text-sm overflow-hidden">\n    <button role="tab" type="button" class="flex-1 px-4 py-2 font-medium text-foreground bg-elevated border-b-2 border-primary">Tab A</button>\n    <button role="tab" type="button" class="flex-1 px-4 py-2 font-medium text-muted hover:text-foreground border-b-2 border-transparent">Tab B</button>\n  </div>\n  <div role="tabpanel" class="pt-4 text-sm text-foreground">Panel A</div>\n</div>`,
      },
      {
        name: "Fill",
        preview: (
          <Tabs defaultValue="all" variant="fill">
            <TabsList>
              <TabsTrigger value="all">All (200)</TabsTrigger>
              <TabsTrigger value="active">Active (11)</TabsTrigger>
              <TabsTrigger value="completed">Completed (34)</TabsTrigger>
            </TabsList>
            <TabsContent value="all">All items</TabsContent>
            <TabsContent value="active">Active</TabsContent>
            <TabsContent value="completed">Completed</TabsContent>
          </Tabs>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div role="tablist" class="flex rounded-[var(--radius-md)] bg-elevated p-1 text-sm gap-1">\n    <button role="tab" type="button" class="flex-1 px-4 py-2 rounded-[var(--radius-sm)] font-medium bg-surface text-foreground shadow-sm">All (200)</button>\n    <button role="tab" type="button" class="flex-1 px-4 py-2 rounded-[var(--radius-sm)] font-medium text-muted hover:text-foreground">Active (11)</button>\n    <button role="tab" type="button" class="flex-1 px-4 py-2 rounded-[var(--radius-sm)] font-medium text-muted hover:text-foreground">Completed (34)</button>\n  </div>\n  <div role="tabpanel" class="pt-4 text-sm text-foreground">All items</div>\n</div>`,
      },
      { name: "Small", preview: <Tabs defaultValue="1" size="sm"><TabsList><TabsTrigger value="1">S</TabsTrigger><TabsTrigger value="2">M</TabsTrigger></TabsList><TabsContent value="1">Small tabs</TabsContent><TabsContent value="2">—</TabsContent></Tabs>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div role="tablist" class="flex border-b border-border text-xs gap-4 pb-1">\n    <button role="tab" type="button" class="px-3 py-1.5 font-medium text-foreground border-b-2 border-primary -mb-[1px]">S</button>\n    <button role="tab" type="button" class="px-3 py-1.5 font-medium text-muted hover:text-foreground">M</button>\n  </div>\n  <div role="tabpanel" class="pt-3 text-xs text-foreground">Small tabs</div>\n</div>` },
      { name: "Large", preview: <Tabs defaultValue="1" size="lg"><TabsList><TabsTrigger value="1">Large</TabsTrigger><TabsTrigger value="2">Tabs</TabsTrigger></TabsList><TabsContent value="1">Large size</TabsContent><TabsContent value="2">—</TabsContent></Tabs>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div role="tablist" class="flex border-b border-border text-base gap-8 pb-3">\n    <button role="tab" type="button" class="px-4 py-2.5 font-medium text-foreground border-b-2 border-primary -mb-[3px]">Large</button>\n    <button role="tab" type="button" class="px-4 py-2.5 font-medium text-muted hover:text-foreground">Tabs</button>\n  </div>\n  <div role="tabpanel" class="pt-4 text-base text-foreground">Large size</div>\n</div>` },
    ],
  },
  {
    id: "dropdown-menu",
    title: "Dropdown Menu",
    category: "Navigation",
    component: DropdownMenu,
    variants: [
      {
        name: "Default",
        preview: (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" size="md">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => {}}>Edit</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>Duplicate</DropdownMenuItem>
              <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="relative inline-block">\n  <button class="...">Open menu</button>\n  <div role="menu" class="absolute z-50 mt-2 min-w-[160px] rounded-[var(--radius-md)] border border-border bg-surface shadow-lg py-1 left-0">\n    <div role="menuitem" class="px-4 py-2 text-sm text-foreground cursor-pointer hover:bg-muted/50">Edit</div>\n    <div role="menuitem" class="px-4 py-2 text-sm text-foreground cursor-pointer hover:bg-muted/50">Duplicate</div>\n    <div role="menuitem" aria-disabled="true" class="px-4 py-2 text-sm opacity-50 cursor-not-allowed">Disabled</div>\n    <div role="menuitem" class="px-4 py-2 text-sm text-foreground cursor-pointer hover:bg-muted/50">Delete</div>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "modal",
    title: "Modal / Dialog",
    category: "Navigation",
    component: Modal,
    variants: [
      {
        name: "With trigger",
        preview: <ModalDemoWithTrigger />,
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getButtonClasses({ variant: "primary", size: "md" })}">Open modal</button>\n\n<!-- Modal (shown when open) -->\n<div class="fixed inset-0 z-50 flex items-center justify-center">\n  <div class="fixed inset-0 bg-black/50" aria-hidden="true"></div>\n  <div role="dialog" aria-modal="true" class="relative w-full max-w-md rounded-[var(--radius-lg)] border border-border bg-surface shadow-xl">\n    <div class="px-6 pt-5"><span class="font-semibold text-foreground">Dialog</span></div>\n    <div class="px-6 py-4 text-sm text-foreground">Click outside or press ESC to close.</div>\n    <div class="flex justify-end gap-2 px-6 pb-5">\n      <button type="button" class="${getButtonClasses({ variant: "secondary", size: "sm" })}">Close</button>\n    </div>\n  </div>\n</div>`,
      },
      {
        name: "Default",
        preview: (
          <Modal open={false} onOpenChange={() => {}} size="md">
            <ModalHeader><span className="font-semibold text-foreground">Title</span></ModalHeader>
            <ModalBody>Modal body content goes here.</ModalBody>
            <ModalFooter><Button size="sm" variant="secondary">Cancel</Button><Button size="sm">Confirm</Button></ModalFooter>
          </Modal>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="dialog" aria-modal="true" class="relative w-full max-w-md rounded-[var(--radius-lg)] border border-border bg-surface shadow-xl">\n  <div class="px-6 pt-5"><span class="font-semibold text-foreground">Title</span></div>\n  <div class="px-6 py-4 text-sm text-foreground">Modal body content goes here.</div>\n  <div class="flex justify-end gap-2 px-6 pb-5">\n    <button type="button" class="${getButtonClasses({ variant: "secondary", size: "sm" })}">Cancel</button>\n    <button type="button" class="${getButtonClasses({ variant: "primary", size: "sm" })}">Confirm</button>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "accordion",
    title: "Accordion",
    category: "Navigation",
    component: Accordion,
    variants: [
      {
        name: "Single",
        preview: (
          <Accordion type="single" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Section 1</AccordionTrigger>
              <AccordionContent>Content for section 1.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Section 2</AccordionTrigger>
              <AccordionContent>Content for section 2.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Section 3</AccordionTrigger>
              <AccordionContent>Content for section 3.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div class="border-b border-border"><button type="button" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground">Section 1</button><div class="px-4 py-3 pt-0 text-sm text-muted">Content for section 1.</div></div>\n  <div class="border-b border-border"><button type="button" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-muted">Section 2</button></div>\n  <div class="border-b border-border"><button type="button" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-muted">Section 3</button></div>\n</div>`,
      },
      {
        name: "Multiple",
        preview: (
          <Accordion type="multiple" defaultValue={["m1"]}>
            <AccordionItem value="m1">
              <AccordionTrigger>Item A</AccordionTrigger>
              <AccordionContent>Multiple panels can be open.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="m2">
              <AccordionTrigger>Item B</AccordionTrigger>
              <AccordionContent>Content B.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-full">\n  <div class="border-b border-border">\n    <button type="button" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground">Item A</button>\n    <div class="px-4 py-3 pt-0 text-sm text-muted">Multiple panels can be open.</div>\n  </div>\n  <div class="border-b border-border">\n    <button type="button" class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-muted">Item B</button>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "pagination",
    title: "Pagination",
    category: "Navigation",
    component: Pagination,
    variants: [
      { name: "Default", preview: <PaginationDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<nav role="navigation" aria-label="Pagination" class="inline-flex items-center gap-1">\n  <button type="button" aria-label="Previous" disabled class="h-[36px] w-[36px] rounded-[var(--radius-md)] border border-border bg-surface text-foreground opacity-50">←</button>\n  <button type="button" aria-current="page" class="min-w-[36px] h-[36px] px-3 rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">1</button>\n  <button type="button" class="min-w-[36px] h-[36px] px-3 rounded-[var(--radius-md)] text-sm border border-border bg-surface">2</button>\n  <button type="button" aria-label="Next" class="h-[36px] w-[36px] rounded-[var(--radius-md)] border border-border bg-surface">→</button>\n</nav>` },
    ],
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    category: "Navigation",
    component: Breadcrumb,
    variants: [
      { name: "Default", preview: <Breadcrumb items={[{ label: "Home" }, { label: "Products", href: "#" }, { label: "Current" }]} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<nav aria-label="Breadcrumb" class="flex items-center flex-wrap gap-1.5 text-sm">\n  <span class="font-medium text-foreground">Home</span>\n  <span class="text-muted">/</span>\n  <a href="#" class="text-foreground hover:text-primary">Products</a>\n  <span class="text-muted">/</span>\n  <span class="font-medium text-foreground">Current</span>\n</nav>` },
      { name: "Custom separator", preview: <Breadcrumb items={[{ label: "A" }, { label: "B", href: "#" }, { label: "C" }]} separator="›" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<nav aria-label="Breadcrumb" class="flex items-center flex-wrap gap-1.5 text-sm">\n  <span class="font-medium text-foreground">A</span>\n  <span class="text-muted">›</span>\n  <a href="#" class="text-foreground hover:text-primary">B</a>\n  <span class="text-muted">›</span>\n  <span class="font-medium text-foreground">C</span>\n</nav>` },
    ],
  },
  {
    id: "skeleton",
    title: "Skeleton",
    category: "System",
    component: Skeleton,
    variants: [
      { name: "Text", preview: <div className="w-[200px] space-y-2"><Skeleton variant="text" /><Skeleton variant="text" className="!w-[80%]" /><Skeleton variant="text" className="!w-[60%]" /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] bg-muted animate-pulse h-4 w-full" aria-hidden></div>` },
      { name: "Avatar", preview: <Skeleton variant="avatar" />, code: `<div class="rounded-[var(--radius-md)] bg-muted animate-pulse h-[36px] w-[36px] rounded-full" aria-hidden></div>` },
      { name: "Card", preview: <div className="w-[200px]"><Skeleton variant="card" /></div>, code: `<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4"><div class="rounded-[var(--radius-md)] bg-muted animate-pulse h-4 w-[75%] mb-3"></div><div class="rounded-[var(--radius-md)] bg-muted animate-pulse h-3 w-full mb-2"></div><div class="rounded-[var(--radius-md)] bg-muted animate-pulse h-3 w-[85%]"></div></div>` },
    ],
  },
  {
    id: "toast",
    title: "Toast",
    category: "System",
    component: ToastProvider,
    variants: [
      {
        name: "With trigger",
        preview: <ToastProvider><ToastDemo /></ToastProvider>,
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<!-- Toast container (fixed position) -->\n<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 min-w-[280px]">\n  <div role="alert" class="rounded-[var(--radius-md)] border px-4 py-3 text-sm bg-green-500/10 border-green-500/30 text-foreground shadow-lg">\n    Success!\n  </div>\n</div>\n\n<!-- Trigger buttons -->\n<div class="flex flex-wrap gap-2">\n  <button type="button" class="${getButtonClasses({ variant: "primary", size: "sm" })}">Success</button>\n  <button type="button" class="${getButtonClasses({ variant: "destructive", size: "sm" })}">Error</button>\n  <button type="button" class="${getButtonClasses({ variant: "outline", size: "sm" })}">Info</button>\n</div>`,
      },
    ],
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    category: "System",
    component: ProgressBar,
    variants: [
      { name: "Determinate", preview: <div className="w-[200px]"><ProgressBar value={60} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="h-2 w-full overflow-hidden rounded-full bg-muted">\n  <div class="h-full rounded-full bg-primary transition-all duration-300 ease-out" style="width: 60%"></div>\n</div>` },
      { name: "Indeterminate", preview: <div className="w-[200px]"><ProgressBar /></div>, code: `<div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="h-2 w-full overflow-hidden rounded-full bg-muted">\n  <div class="h-full w-1/3 rounded-full bg-primary" style="animation: progress-indeterminate 1.5s ease-in-out infinite"></div>\n</div>` },
      { name: "Striped", preview: <div className="w-[200px]"><ProgressBar value={75} striped /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="h-2 w-full overflow-hidden rounded-full bg-muted">\n  <div class="h-full rounded-full bg-primary transition-all duration-300 ease-out" style="width: 75%; background-image: repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.15) 6px, rgba(255,255,255,0.15) 12px)"></div>\n</div>` },
    ],
  },
  {
    id: "product-card-classic",
    title: "Product Card Classic",
    category: "Product Cards",
    component: ProductCardClassic,
    variants: [
      { name: "Default", preview: <div className="w-[200px]"><ProductCardClassic imageUrl={DEMO_IMAGE} brand="Modunent" productName="Premium Cotton T-Shirt" price="$29.99" /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="group w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden transition-transform hover:-translate-y-1.5">\n  <div class="relative aspect-[4/5] overflow-hidden bg-muted/30">\n    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop" alt="Product" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.08]" />\n    <div class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">\n      <button type="button" class="w-full py-2 text-xs font-medium bg-primary text-primary-foreground text-center">Add to Cart</button>\n    </div>\n  </div>\n  <div class="p-3">\n    <p class="text-[10px] text-muted uppercase tracking-wider">Modunent</p>\n    <h3 class="text-sm font-medium text-foreground mt-0.5 line-clamp-2">Premium Cotton T-Shirt</h3>\n    <p class="text-sm font-semibold text-foreground mt-1">$29.99</p>\n  </div>\n</div>` },
      { name: "With discount", preview: <div className="w-[200px]"><ProductCardClassic imageUrl={DEMO_IMAGE_SALE} brand="Modunent" productName="Minimal Sneakers" price="$24.99" discount="20% OFF" /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="group w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden transition-transform hover:-translate-y-1.5">\n  <div class="relative aspect-[4/5] overflow-hidden bg-muted/30">\n    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=250&fit=crop" alt="Product" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.08]" />\n    <span class="absolute top-2 left-2 rounded-full bg-red-600 text-white text-[10px] font-medium px-2 py-0.5">20% OFF</span>\n    <div class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">\n      <button type="button" class="w-full py-2 text-xs font-medium bg-primary text-primary-foreground text-center">Add to Cart</button>\n    </div>\n  </div>\n  <div class="p-3">\n    <p class="text-[10px] text-muted uppercase tracking-wider">Modunent</p>\n    <h3 class="text-sm font-medium text-foreground mt-0.5 line-clamp-2">Minimal Sneakers</h3>\n    <p class="text-sm font-semibold text-foreground mt-1">$24.99</p>\n  </div>\n</div>` },
    ],
  },
  {
    id: "product-card",
    title: "Product Card",
    category: "Product Cards",
    component: ProductCard,
    variants: [
      { name: "Default", preview: <div className="w-[200px]"><ProductCard {...REFERENCE_CARD_PROPS} onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n    <span class="absolute top-2 left-2 rounded-full bg-red-600 text-white text-[10px] font-medium px-2 py-0.5">25% OFF</span>\n  </div>\n  <div class="p-3 space-y-1">\n    <p class="text-[10px] text-muted uppercase">Electronics</p>\n    <h3 class="text-sm font-medium text-foreground line-clamp-2">Premium Wireless Headphones</h3>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$299.99</span>\n      <span class="text-xs text-muted line-through">$399.99</span>\n    </div>\n    <button type="button" class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">Add to cart</button>\n  </div>\n</div>` },
      { name: "Compact", preview: <div className="w-[200px]"><ProductCard {...REFERENCE_CARD_PROPS} variant="compact" onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-square bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n  </div>\n  <div class="p-2">\n    <h3 class="text-xs font-medium text-foreground truncate">Premium Wireless Headphones</h3>\n    <span class="text-xs font-semibold text-foreground">$299.99</span>\n  </div>\n</div>` },
      { name: "Detailed", preview: <div className="w-[200px]"><ProductCard {...REFERENCE_CARD_PROPS} variant="detailed" rating={4.5} ratingCount={128} onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n    <span class="absolute top-2 left-2 rounded-full bg-red-600 text-white text-[10px] font-medium px-2 py-0.5">25% OFF</span>\n  </div>\n  <div class="p-3 space-y-1">\n    <p class="text-[10px] text-muted uppercase">Electronics</p>\n    <h3 class="text-sm font-medium text-foreground">Premium Wireless Headphones</h3>\n    <div class="flex items-center gap-1">\n      <span class="text-xs text-amber-500">★★★★½</span>\n      <span class="text-xs text-muted">(128)</span>\n    </div>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$299.99</span>\n      <span class="text-xs text-muted line-through">$399.99</span>\n    </div>\n    <button type="button" class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">Add to cart</button>\n  </div>\n</div>` },
      { name: "Horizontal", preview: <div className="w-full max-w-md"><ProductCard {...REFERENCE_CARD_PROPS} variant="horizontal" rating={4.5} ratingCount={128} onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="flex rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden max-w-md">\n  <div class="w-[160px] shrink-0 bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n  </div>\n  <div class="p-4 min-w-0 flex-1 space-y-1">\n    <p class="text-[10px] text-muted uppercase">Electronics</p>\n    <h3 class="text-sm font-medium text-foreground">Premium Wireless Headphones</h3>\n    <div class="flex items-center gap-1">\n      <span class="text-xs text-amber-500">★★★★½</span>\n      <span class="text-xs text-muted">(128)</span>\n    </div>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$299.99</span>\n      <span class="text-xs text-muted line-through">$399.99</span>\n    </div>\n    <button type="button" class="mt-2 h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">Add to cart</button>\n  </div>\n</div>` },
      { name: "Out of stock", preview: <div className="w-[200px]"><ProductCard title="Designer Backpack" price="$89.99" imageUrl={DEMO_IMAGE_SOLD} outOfStock originalPrice="$399.99" category="Electronics" /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden opacity-75">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE_SOLD}" alt="Product" class="h-full w-full object-cover grayscale" />\n    <span class="absolute top-2 left-2 rounded-full bg-muted text-foreground text-[10px] font-medium px-2 py-0.5">Out of Stock</span>\n  </div>\n  <div class="p-3 space-y-1">\n    <h3 class="text-sm font-medium text-foreground">Designer Backpack</h3>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$89.99</span>\n      <span class="text-xs text-muted line-through">$399.99</span>\n    </div>\n    <button type="button" disabled class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-muted text-muted cursor-not-allowed">Sold out</button>\n  </div>\n</div>` },
      { name: "Loading", preview: <div className="w-[200px]"><ProductCard title="Loading…" price="—" loading /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="aspect-[4/5] bg-muted animate-pulse"></div>\n  <div class="p-3 space-y-2">\n    <div class="h-3 w-3/4 bg-muted animate-pulse rounded"></div>\n    <div class="h-3 w-1/2 bg-muted animate-pulse rounded"></div>\n    <div class="h-[36px] w-full bg-muted animate-pulse rounded-[var(--radius-md)] mt-2"></div>\n  </div>\n</div>` },
      { name: "With badge", preview: <div className="w-[200px]"><ProductCard {...REFERENCE_CARD_PROPS} discount="25% OFF" onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n    <span class="absolute top-2 left-2 rounded-full bg-red-600 text-white text-[10px] font-medium px-2 py-0.5">25% OFF</span>\n  </div>\n  <div class="p-3 space-y-1">\n    <h3 class="text-sm font-medium text-foreground">Premium Wireless Headphones</h3>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$299.99</span>\n      <span class="text-xs text-muted line-through">$399.99</span>\n    </div>\n    <button type="button" class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">Add to cart</button>\n  </div>\n</div>` },
      { name: "With old price + discount", preview: <div className="w-[200px]"><ProductCard title="Minimal Everyday Sneakers" price="$24.99" originalPrice="$39.99" imageUrl={DEMO_IMAGE_SALE} discount="20% off" onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE_SALE}" alt="Product" class="h-full w-full object-cover" />\n    <span class="absolute top-2 left-2 rounded-full bg-red-600 text-white text-[10px] font-medium px-2 py-0.5">20% off</span>\n  </div>\n  <div class="p-3 space-y-1">\n    <h3 class="text-sm font-medium text-foreground">Minimal Everyday Sneakers</h3>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$24.99</span>\n      <span class="text-xs text-muted line-through">$39.99</span>\n    </div>\n    <button type="button" class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">Add to cart</button>\n  </div>\n</div>` },
      { name: "Interactive", preview: <ProductCardWithQuickView />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n    <button type="button" aria-label="Add to wishlist" class="absolute top-2 right-2 h-[28px] w-[28px] rounded-full border border-border bg-surface/80 backdrop-blur-sm text-foreground text-xs hover:bg-elevated">♡</button>\n    <button type="button" class="absolute bottom-2 left-2 right-2 h-[28px] rounded-[var(--radius-sm)] text-xs font-medium bg-surface/80 backdrop-blur-sm text-foreground border border-border hover:bg-elevated">Quick view</button>\n  </div>\n  <div class="p-3 space-y-1">\n    <h3 class="text-sm font-medium text-foreground">Premium Cotton T-Shirt</h3>\n    <span class="text-sm font-semibold text-foreground">$7.99</span>\n  </div>\n</div>` },
    ],
  },
  {
    id: "product-card-low-stock",
    title: "Product Card - Low stock",
    category: "Product Cards",
    component: ProductCard,
    variants: [
      { name: "Default", preview: <div className="w-[200px]"><ProductCard {...REFERENCE_CARD_PROPS} title="Vintage Analog Watch" price="$149.99" originalPrice="$199.99" category="TimeClassic" lowStock="Only 3 left!" onAddToCart={() => {}} /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE}" alt="Product" class="h-full w-full object-cover" />\n  </div>\n  <div class="p-3 space-y-1">\n    <p class="text-[10px] text-muted uppercase">TimeClassic</p>\n    <h3 class="text-sm font-medium text-foreground">Vintage Analog Watch</h3>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$149.99</span>\n      <span class="text-xs text-muted line-through">$199.99</span>\n    </div>\n    <p class="text-xs font-medium text-amber-600">Only 3 left!</p>\n    <button type="button" class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground">Add to cart</button>\n  </div>\n</div>` },
    ],
  },
  {
    id: "product-card-out-of-stock",
    title: "Product Card - Out of Stock",
    category: "Product Cards",
    component: ProductCard,
    variants: [
      { name: "Default", preview: <div className="w-[200px]"><ProductCard title="Designer Backpack" price="$89.99" imageUrl={DEMO_IMAGE_SOLD} outOfStock originalPrice="$399.99" category="Electronics" /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden opacity-75">\n  <div class="relative aspect-[4/5] bg-muted/30">\n    <img src="${DEMO_IMAGE_SOLD}" alt="Product" class="h-full w-full object-cover grayscale" />\n    <span class="absolute top-2 left-2 rounded-full bg-muted text-foreground text-[10px] font-medium px-2 py-0.5">Out of Stock</span>\n  </div>\n  <div class="p-3 space-y-1">\n    <h3 class="text-sm font-medium text-foreground">Designer Backpack</h3>\n    <div class="flex items-baseline gap-2">\n      <span class="text-sm font-semibold text-foreground">$89.99</span>\n      <span class="text-xs text-muted line-through">$399.99</span>\n    </div>\n    <button type="button" disabled class="w-full mt-2 h-[36px] rounded-[var(--radius-md)] text-sm font-medium bg-muted text-muted cursor-not-allowed">Sold out</button>\n  </div>\n</div>` },
    ],
  },
  {
    id: "product-card-loading",
    title: "Product Card - Loading",
    category: "Product Cards",
    component: ProductCardSkeleton,
    variants: [
      { name: "Default", preview: <div className="w-[256px]"><ProductCardSkeleton /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[256px] rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <div class="aspect-[4/5] bg-muted animate-pulse"></div>\n  <div class="p-3 space-y-2">\n    <div class="h-3 w-3/4 bg-muted animate-pulse rounded"></div>\n    <div class="h-3 w-1/2 bg-muted animate-pulse rounded"></div>\n    <div class="h-3 w-1/3 bg-muted animate-pulse rounded"></div>\n    <div class="h-[36px] w-full bg-muted animate-pulse rounded-[var(--radius-md)] mt-2"></div>\n  </div>\n</div>` },
    ],
  },
  {
    id: "product-card-premium",
    title: "Product Card - Premium",
    category: "Product Cards",
    component: ProductCard,
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ width: 220, borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 24px rgba(64,96,240,0.12)', border: '1px solid rgba(64,96,240,0.12)' }}>
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%)', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" alt="Product" style={{ width: 130, height: 130, objectFit: 'contain', borderRadius: 8 }} />
              <span style={{ position: 'absolute', top: 10, left: 10, background: '#4060f0', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>NEW</span>
              <button type="button" style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(64,96,240,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, cursor: 'pointer' }}>♡</button>
            </div>
            <div style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 10, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Luxury Brand</span>
                <span style={{ fontSize: 10, color: '#f59e0b' }}>★★★★★</span>
                <span style={{ fontSize: 10, color: '#94a3b8' }}>(247)</span>
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>Premium Swiss Watch</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#0f172a' }}>$299</span>
                <span style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'line-through' }}>$449</span>
              </div>
              <button type="button" style={{ width: '100%', height: 36, borderRadius: 8, background: '#4060f0', color: '#fff', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[220px] rounded-2xl overflow-hidden bg-surface shadow-lg border border-border/50">\n  <div class="relative h-[200px] flex items-center justify-center" style="background:linear-gradient(135deg,#f0f4ff,#e8f0fe)">\n    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" alt="Product" class="w-[130px] h-[130px] object-contain rounded-lg" />\n    <span class="absolute top-2.5 left-2.5 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>\n    <button type="button" aria-label="Wishlist" class="absolute top-2.5 right-2.5 h-8 w-8 rounded-full bg-surface/90 border border-border/50 flex items-center justify-center text-foreground/70 hover:text-red-500 text-base">♡</button>\n  </div>\n  <div class="p-3.5">\n    <div class="flex items-center gap-1 mb-1">\n      <span class="text-[10px] text-muted uppercase tracking-wide">Luxury Brand</span>\n      <span class="text-[10px] text-amber-500">★★★★★</span>\n      <span class="text-[10px] text-muted">(247)</span>\n    </div>\n    <h3 class="text-sm font-semibold text-foreground mb-2 leading-snug">Premium Swiss Watch</h3>\n    <div class="flex items-baseline gap-2 mb-3">\n      <span class="text-lg font-bold text-foreground">$299</span>\n      <span class="text-sm text-muted line-through">$449</span>\n    </div>\n    <button type="button" class="w-full h-[36px] rounded-[var(--radius-md)] bg-primary text-primary-foreground text-sm font-semibold">Add to Cart</button>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "product-card-video",
    title: "Product Card - Video",
    category: "Product Cards",
    component: ProductCard,
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ width: 200, borderRadius: 12, overflow: 'hidden', background: '#fff', border: '1px solid rgba(64,96,240,0.15)' }}>
            <div style={{ position: 'relative', height: 180, background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=180&fit=crop" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
                  <svg width="18" height="18" fill="#4060f0" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <span style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: 10, padding: '2px 6px', borderRadius: 4 }}>0:45</span>
            </div>
            <div style={{ padding: '10px 12px' }}>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 6 }}>Premium Headphones</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>$149.99</span>
                <button type="button" style={{ height: 30, padding: '0 12px', borderRadius: 6, background: '#4060f0', color: '#fff', fontSize: 12, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Add</button>
              </div>
            </div>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-xl overflow-hidden bg-surface border border-border/50">\n  <div class="relative h-[180px] bg-foreground">\n    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=180&fit=crop" alt="Product" class="absolute inset-0 w-full h-full object-cover opacity-70" />\n    <div class="absolute inset-0 flex items-center justify-center">\n      <div class="h-11 w-11 rounded-full bg-surface/90 flex items-center justify-center shadow-lg">\n        <svg class="w-[18px] h-[18px] ml-0.5" fill="#4060f0" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>\n      </div>\n    </div>\n    <span class="absolute bottom-2 right-2 text-[10px] bg-black/60 text-white px-1.5 py-0.5 rounded">0:45</span>\n  </div>\n  <div class="p-3">\n    <h3 class="text-sm font-semibold text-foreground mb-1.5">Premium Headphones</h3>\n    <div class="flex items-center justify-between">\n      <span class="text-[15px] font-bold text-foreground">$149.99</span>\n      <button type="button" class="h-[30px] px-3 rounded-md bg-primary text-primary-foreground text-xs font-semibold">Add</button>\n    </div>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "product-card-delivery",
    title: "Product Card - Express Delivery",
    category: "Product Cards",
    component: ProductCard,
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ width: 200, borderRadius: 12, overflow: 'hidden', background: '#fff', border: '1px solid rgba(64,96,240,0.15)' }}>
            <div style={{ position: 'relative', height: 160, background: 'rgba(240,246,255,0.6)' }}>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=160&fit=crop" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '10px 12px' }}>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>Running Sneakers</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>$89.99</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 10, fontWeight: 600, color: '#10b981', background: '#ecfdf5', padding: '2px 6px', borderRadius: 4 }}>
                  ⚡ Express delivery
                </span>
              </div>
              <p style={{ fontSize: 10, color: '#64748b', marginBottom: 8 }}>📦 Get it by <strong>Tomorrow, 6pm</strong></p>
              <button type="button" style={{ width: '100%', height: 34, borderRadius: 8, background: '#4060f0', color: '#fff', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="w-[200px] rounded-xl overflow-hidden bg-surface border border-border/50">\n  <div class="relative h-[160px] bg-surface/60">\n    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=160&fit=crop" alt="Product" class="w-full h-full object-cover" />\n  </div>\n  <div class="p-3">\n    <h3 class="text-sm font-semibold text-foreground mb-1">Running Sneakers</h3>\n    <div class="flex items-center gap-1.5 mb-2">\n      <span class="text-[15px] font-bold text-foreground">$89.99</span>\n      <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-green-700 bg-green-50 px-1.5 py-0.5 rounded">⚡ Express</span>\n    </div>\n    <p class="text-[10px] text-muted mb-2">📦 Get it by <strong class="text-foreground">Tomorrow, 6pm</strong></p>\n    <button type="button" class="w-full h-[34px] rounded-[var(--radius-md)] bg-primary text-primary-foreground text-sm font-semibold">Add to Cart</button>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "variant-selector",
    title: "Variant Selector",
    category: "Buttons",
    component: VariantSelector,
    variants: [
      { name: "Size", preview: <VariantSizeDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="space-y-2"><span class="text-sm font-medium text-foreground">Size</span><div class="flex flex-wrap gap-2"><button type="button" class="min-w-[36px] h-[36px] px-3 rounded-[var(--radius-md)] text-sm font-medium border-2 border-primary bg-primary/10 text-foreground">M</button><button type="button" class="min-w-[36px] h-[36px] px-3 rounded-[var(--radius-md)] text-sm border-2 border-border bg-surface text-foreground">L</button></div></div>` },
      { name: "Color", preview: <VariantColorDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="space-y-2"><span class="text-sm font-medium text-foreground">Color</span><div class="flex flex-wrap gap-2"><button type="button" class="h-[36px] w-[36px] rounded-full border-2 border-primary p-0.5" style="background-color:#3b82f6"></button><button type="button" class="h-[36px] w-[36px] rounded-full border-2 border-border p-0.5" style="background-color:#ef4444"></button></div></div>` },
    ],
  },
  {
    id: "quantity-selector",
    title: "Quantity Selector",
    category: "Quantity Selectors",
    component: QuantitySelector,
    variants: [
      { name: "Default", preview: <QuantitySelectorDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <button type="button" aria-label="Decrease quantity" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n  <button type="button" aria-label="Increase quantity" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n</div>` },
      { name: "Compact", preview: <QuantitySelector value={1} min={1} max={10} onChange={() => {}} compact />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <button type="button" aria-label="Decrease" class="h-[28px] w-[28px] flex items-center justify-center text-foreground border-r border-border text-sm hover:bg-muted/50">−</button>\n  <span class="h-[28px] min-w-[28px] flex items-center justify-center text-xs font-medium text-foreground border-r border-border px-1.5">1</span>\n  <button type="button" aria-label="Increase" class="h-[28px] w-[28px] flex items-center justify-center text-foreground text-sm hover:bg-muted/50">+</button>\n</div>` },
      { name: "Disabled", preview: <QuantitySelector value={1} min={1} max={10} onChange={() => {}} disabled />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden opacity-50 pointer-events-none">\n  <button type="button" aria-label="Decrease" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n  <button type="button" aria-label="Increase" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n</div>` },
      { name: "Min Reached", preview: <QuantitySelector value={1} min={1} max={10} onChange={() => {}} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <button type="button" aria-label="Decrease" disabled class="h-[36px] w-[36px] flex items-center justify-center text-muted border-r border-border opacity-40 cursor-not-allowed">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n  <button type="button" aria-label="Increase" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n</div>` },
      { name: "Max Reached", preview: <QuantitySelector value={10} min={1} max={10} onChange={() => {}} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <button type="button" aria-label="Decrease" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">10</span>\n  <button type="button" aria-label="Increase" disabled class="h-[36px] w-[36px] flex items-center justify-center text-muted opacity-40 cursor-not-allowed">+</button>\n</div>` },
      {
        name: "With Label",
        preview: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#0f172a' }}>Quantity</span>
            <QuantitySelector value={1} min={1} max={10} onChange={() => {}} />
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:flex;flex-direction:column;gap:6px;">\n  <label class="text-sm font-medium text-foreground">Quantity</label>\n  <div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n    <button type="button" aria-label="Decrease" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n    <button type="button" aria-label="Increase" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n</div>`,
      },
    ],
  },
  {
    id: "quick-view-modal",
    title: "Quick View Modal",
    category: "Buttons",
    component: QuickViewModal,
    variants: [
      { name: "With trigger", preview: <QuickViewDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<!-- Wrap in state: const [open, setOpen] = useState(false) -->\n<div role="dialog" aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center">\n  <div class="fixed inset-0 bg-black/50" aria-hidden></div>\n  <div class="relative rounded-[var(--radius-lg)] border border-border bg-surface p-4 shadow-lg max-w-[480px] w-full">\n    <header class="font-semibold text-foreground text-sm mb-4">Quick view</header>\n    <div class="flex gap-4">\n      <div class="aspect-square w-[160px] shrink-0 rounded-[var(--radius-md)] bg-muted/30"></div>\n      <div><h2 class="text-base font-medium text-foreground">Product name</h2><p class="mt-1 text-sm font-medium text-foreground">$29.99</p></div>\n    </div>\n    <footer class="mt-4 flex justify-end gap-2">\n      <button type="button" class="h-[36px] px-4 rounded-[var(--radius-md)] text-sm border border-border bg-surface text-foreground">Close</button>\n      <button type="button" class="h-[36px] px-4 rounded-[var(--radius-md)] text-sm bg-primary text-primary-foreground">Add to cart</button>\n    </footer>\n  </div>\n</div>` },
    ],
  },
  {
    id: "wishlist-toggle",
    title: "Wishlist Toggle",
    category: "Buttons",
    component: WishlistToggle,
    variants: [
      { name: "Default", preview: <WishlistToggle />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" aria-label="Add to wishlist" class="h-[36px] w-[36px] rounded-full border border-border bg-surface text-foreground hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">♡</button>` },
      { name: "Active", preview: <WishlistToggle active />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" aria-label="Remove from wishlist" aria-pressed="true" class="h-[36px] w-[36px] rounded-full border border-red-500 bg-red-500/10 text-red-500 hover:bg-red-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">♥</button>` },
    ],
  },
  {
    id: "button-group",
    title: "Button Group",
    category: "Buttons",
    description: "A set of related buttons joined together with shared borders.",
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ display: "inline-flex" }}>
            <button type="button" style={{ height: 36, padding: "0 16px", fontSize: 14, fontWeight: 500, border: "1px solid var(--color-border)", borderRight: "none", borderRadius: "var(--radius-md) 0 0 var(--radius-md)", background: "var(--color-surface)", color: "var(--color-foreground)", cursor: "pointer" }}>Previous</button>
            <button type="button" style={{ height: 36, padding: "0 16px", fontSize: 14, fontWeight: 500, border: "1px solid var(--color-border)", borderRight: "none", background: "var(--color-elevated)", color: "var(--color-foreground)", cursor: "pointer" }}>Current</button>
            <button type="button" style={{ height: 36, padding: "0 16px", fontSize: 14, fontWeight: 500, border: "1px solid var(--color-border)", borderRadius: "0 var(--radius-md) var(--radius-md) 0", background: "var(--color-surface)", color: "var(--color-foreground)", cursor: "pointer" }}>Next</button>
          </div>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-primary-foreground: #ffffff;
  --color-surface: #ffffff;
  --color-elevated: #f3f4f6;
  --color-foreground: #111827;
  --color-border: #e5e7eb;
  --radius-md: 6px;
}
</style>

<div style="display:inline-flex;">
  <button type="button" style="height:36px;padding:0 16px;font-size:14px;font-weight:500;border:1px solid var(--color-border);border-right:none;border-radius:var(--radius-md) 0 0 var(--radius-md);background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">Previous</button>
  <button type="button" style="height:36px;padding:0 16px;font-size:14px;font-weight:500;border:1px solid var(--color-border);border-right:none;background:var(--color-elevated);color:var(--color-foreground);cursor:pointer;">Current</button>
  <button type="button" style="height:36px;padding:0 16px;font-size:14px;font-weight:500;border:1px solid var(--color-border);border-radius:0 var(--radius-md) var(--radius-md) 0;background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">Next</button>
</div>`,
      },
      {
        name: "Icon Group",
        preview: (
          <div style={{ display: "inline-flex" }}>
            <button type="button" aria-label="Grid view" style={{ height: 36, width: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--color-border)", borderRight: "none", borderRadius: "var(--radius-md) 0 0 var(--radius-md)", background: "var(--color-elevated)", color: "var(--color-foreground)", cursor: "pointer" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
            <button type="button" aria-label="List view" style={{ height: 36, width: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--color-border)", borderRight: "none", background: "var(--color-surface)", color: "var(--color-foreground)", cursor: "pointer" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <button type="button" aria-label="Filter" style={{ height: 36, width: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--color-border)", borderRadius: "0 var(--radius-md) var(--radius-md) 0", background: "var(--color-surface)", color: "var(--color-foreground)", cursor: "pointer" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M10 20h4" /></svg>
            </button>
          </div>
        ),
        code: `<style>
:root {
  --color-surface: #ffffff;
  --color-elevated: #f3f4f6;
  --color-foreground: #111827;
  --color-border: #e5e7eb;
  --radius-md: 6px;
}
</style>

<div style="display:inline-flex;">
  <button type="button" aria-label="Grid view" style="height:36px;width:36px;display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-right:none;border-radius:var(--radius-md) 0 0 var(--radius-md);background:var(--color-elevated);color:var(--color-foreground);cursor:pointer;">
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
  </button>
  <button type="button" aria-label="List view" style="height:36px;width:36px;display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-right:none;background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
  </button>
  <button type="button" aria-label="Filter" style="height:36px;width:36px;display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-radius:0 var(--radius-md) var(--radius-md) 0;background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M7 12h10M10 20h4"/></svg>
  </button>
</div>`,
      },
      {
        name: "Segmented",
        preview: (
          <div style={{ display: "inline-flex", background: "var(--color-elevated)", borderRadius: 999, padding: 3, gap: 2 }}>
            <button type="button" style={{ height: 30, padding: "0 16px", fontSize: 13, fontWeight: 600, borderRadius: 999, border: "none", background: "var(--color-surface)", color: "var(--color-foreground)", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>All</button>
            <button type="button" style={{ height: 30, padding: "0 16px", fontSize: 13, fontWeight: 500, borderRadius: 999, border: "none", background: "transparent", color: "var(--color-muted)", cursor: "pointer" }}>Active</button>
            <button type="button" style={{ height: 30, padding: "0 16px", fontSize: 13, fontWeight: 500, borderRadius: 999, border: "none", background: "transparent", color: "var(--color-muted)", cursor: "pointer" }}>Paused</button>
          </div>
        ),
        code: `<style>
:root {
  --color-surface: #ffffff;
  --color-elevated: #f3f4f6;
  --color-foreground: #111827;
  --color-muted: #6b7280;
}
</style>

<div style="display:inline-flex;background:var(--color-elevated);border-radius:999px;padding:3px;gap:2px;">
  <button type="button" style="height:30px;padding:0 16px;font-size:13px;font-weight:600;border-radius:999px;border:none;background:var(--color-surface);color:var(--color-foreground);cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.1);">All</button>
  <button type="button" style="height:30px;padding:0 16px;font-size:13px;font-weight:500;border-radius:999px;border:none;background:transparent;color:var(--color-muted);cursor:pointer;">Active</button>
  <button type="button" style="height:30px;padding:0 16px;font-size:13px;font-weight:500;border-radius:999px;border:none;background:transparent;color:var(--color-muted);cursor:pointer;">Paused</button>
</div>`,
      },
    ],
  },
  {
    id: "state-button",
    title: "State Button",
    category: "Buttons",
    description: "A button that reflects async action states: idle, loading, and success.",
    variants: [
      {
        name: "Add to Cart",
        preview: (
          <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 40, padding: "0 20px", fontSize: 14, fontWeight: 600, borderRadius: "var(--radius-md)", border: "none", background: "var(--color-primary)", color: "var(--color-primary-foreground)", cursor: "pointer" }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Add to Cart
          </button>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-primary-foreground: #ffffff;
  --radius-md: 6px;
}
</style>

<button type="button" style="display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 20px;font-size:14px;font-weight:600;border-radius:var(--radius-md);border:none;background:var(--color-primary);color:var(--color-primary-foreground);cursor:pointer;">
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
  Add to Cart
</button>`,
      },
      {
        name: "Adding",
        preview: (
          <button type="button" disabled style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 40, padding: "0 20px", fontSize: 14, fontWeight: 600, borderRadius: "var(--radius-md)", border: "none", background: "var(--color-primary)", color: "var(--color-primary-foreground)", cursor: "wait", opacity: 0.8 }}>
            <span style={{ display: "inline-block", width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.7s linear infinite" }} />
            Adding...
          </button>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-primary-foreground: #ffffff;
  --radius-md: 6px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>

<button type="button" disabled aria-busy="true" style="display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 20px;font-size:14px;font-weight:600;border-radius:var(--radius-md);border:none;background:var(--color-primary);color:var(--color-primary-foreground);cursor:wait;opacity:0.8;">
  <span style="display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;animation:spin 0.7s linear infinite;"></span>
  Adding...
</button>`,
      },
      {
        name: "Added",
        preview: (
          <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 40, padding: "0 20px", fontSize: 14, fontWeight: 600, borderRadius: "var(--radius-md)", border: "none", background: "#16a34a", color: "#fff", cursor: "default" }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            Added!
          </button>
        ),
        code: `<style>
:root { --radius-md: 6px; }
</style>

<button type="button" style="display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 20px;font-size:14px;font-weight:600;border-radius:var(--radius-md);border:none;background:#16a34a;color:#fff;cursor:default;">
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
  Added!
</button>`,
      },
      {
        name: "Interactive Demo",
        preview: (() => {
          function StateButtonDemo() {
            const [state, setState] = useState<"idle" | "loading" | "done">("idle")
            function handleClick() {
              if (state !== "idle") return
              setState("loading")
              setTimeout(() => setState("done"), 1500)
              setTimeout(() => setState("idle"), 3000)
            }
            const bgColor = state === "done" ? "#16a34a" : "var(--color-primary)"
            const fgColor = state === "done" ? "#fff" : "var(--color-primary-foreground)"
            return (
              <button
                type="button"
                onClick={handleClick}
                disabled={state === "loading"}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 40, padding: "0 20px", fontSize: 14, fontWeight: 600, borderRadius: "var(--radius-md)", border: "none", background: bgColor, color: fgColor, cursor: state === "loading" ? "wait" : "pointer", transition: "background 0.3s", minWidth: 150, justifyContent: "center" }}
              >
                {state === "idle" && (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Add to Cart
                  </>
                )}
                {state === "loading" && (
                  <>
                    <span style={{ display: "inline-block", width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.7s linear infinite" }} />
                    Adding...
                  </>
                )}
                {state === "done" && (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    Added!
                  </>
                )}
              </button>
            )
          }
          return <StateButtonDemo />
        })(),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-primary-foreground: #ffffff;
  --radius-md: 6px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>

<button type="button" id="stateBtn"
  style="display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 20px;font-size:14px;font-weight:600;border-radius:var(--radius-md);border:none;background:var(--color-primary);color:var(--color-primary-foreground);cursor:pointer;min-width:150px;justify-content:center;transition:background 0.3s;">
  Add to Cart
</button>
<script>
  const btn = document.getElementById('stateBtn');
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.style.cursor = 'wait';
    btn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;animation:spin 0.7s linear infinite;"></span> Adding...';
    setTimeout(() => {
      btn.style.background = '#16a34a';
      btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Added!';
    }, 1500);
    setTimeout(() => {
      btn.disabled = false;
      btn.style.cursor = 'pointer';
      btn.style.background = 'var(--color-primary)';
      btn.innerHTML = 'Add to Cart';
    }, 3000);
  });
</script>`,
      },
    ],
  },
  {
    id: "toggle-group",
    title: "Toggle Group",
    category: "Buttons",
    description: "A set of mutually exclusive toggle buttons for selecting one option.",
    variants: [
      {
        name: "Size Selector",
        preview: (
          <div style={{ display: "inline-flex", gap: 6 }}>
            {(["XS", "S", "M", "L", "XL"] as const).map((s) => (
              <button key={s} type="button" style={{ height: 36, minWidth: 40, padding: "0 10px", fontSize: 13, fontWeight: s === "M" ? 700 : 500, borderRadius: 999, border: s === "M" ? "2px solid var(--color-primary)" : "1px solid var(--color-border)", background: s === "M" ? "var(--color-primary)" : "var(--color-surface)", color: s === "M" ? "var(--color-primary-foreground)" : "var(--color-foreground)", cursor: "pointer" }}>{s}</button>
            ))}
          </div>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-primary-foreground: #ffffff;
  --color-surface: #ffffff;
  --color-foreground: #111827;
  --color-border: #e5e7eb;
}
</style>

<div style="display:inline-flex;gap:6px;">
  <button type="button" style="height:36px;min-width:40px;padding:0 10px;font-size:13px;font-weight:500;border-radius:999px;border:1px solid var(--color-border);background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">XS</button>
  <button type="button" style="height:36px;min-width:40px;padding:0 10px;font-size:13px;font-weight:500;border-radius:999px;border:1px solid var(--color-border);background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">S</button>
  <button type="button" aria-pressed="true" style="height:36px;min-width:40px;padding:0 10px;font-size:13px;font-weight:700;border-radius:999px;border:2px solid var(--color-primary);background:var(--color-primary);color:var(--color-primary-foreground);cursor:pointer;">M</button>
  <button type="button" style="height:36px;min-width:40px;padding:0 10px;font-size:13px;font-weight:500;border-radius:999px;border:1px solid var(--color-border);background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">L</button>
  <button type="button" style="height:36px;min-width:40px;padding:0 10px;font-size:13px;font-weight:500;border-radius:999px;border:1px solid var(--color-border);background:var(--color-surface);color:var(--color-foreground);cursor:pointer;">XL</button>
</div>`,
      },
      {
        name: "View Toggle",
        preview: (
          <div style={{ display: "inline-flex", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
            <button type="button" aria-pressed="true" style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 14px", fontSize: 13, fontWeight: 600, border: "none", borderRight: "1px solid var(--color-border)", background: "var(--color-elevated)", color: "var(--color-foreground)", cursor: "pointer" }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Grid view
            </button>
            <button type="button" aria-pressed="false" style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 14px", fontSize: 13, fontWeight: 500, border: "none", background: "var(--color-surface)", color: "var(--color-muted)", cursor: "pointer" }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              List view
            </button>
          </div>
        ),
        code: `<style>
:root {
  --color-surface: #ffffff;
  --color-elevated: #f3f4f6;
  --color-foreground: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --radius-md: 6px;
}
</style>

<div style="display:inline-flex;border-radius:var(--radius-md);border:1px solid var(--color-border);overflow:hidden;">
  <button type="button" aria-pressed="true" style="display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;font-size:13px;font-weight:600;border:none;border-right:1px solid var(--color-border);background:var(--color-elevated);color:var(--color-foreground);cursor:pointer;">
    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
    Grid view
  </button>
  <button type="button" aria-pressed="false" style="display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;font-size:13px;font-weight:500;border:none;background:var(--color-surface);color:var(--color-muted);cursor:pointer;">
    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    List view
  </button>
</div>`,
      },
      {
        name: "Sort Options",
        preview: (
          <div style={{ display: "inline-flex", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
            <button type="button" aria-pressed="true" style={{ height: 36, padding: "0 14px", fontSize: 13, fontWeight: 600, border: "none", borderRight: "1px solid var(--color-border)", background: "var(--color-elevated)", color: "var(--color-foreground)", cursor: "pointer" }}>Price: Low</button>
            <button type="button" aria-pressed="false" style={{ height: 36, padding: "0 14px", fontSize: 13, fontWeight: 500, border: "none", borderRight: "1px solid var(--color-border)", background: "var(--color-surface)", color: "var(--color-muted)", cursor: "pointer" }}>Price: High</button>
            <button type="button" aria-pressed="false" style={{ height: 36, padding: "0 14px", fontSize: 13, fontWeight: 500, border: "none", background: "var(--color-surface)", color: "var(--color-muted)", cursor: "pointer" }}>Newest</button>
          </div>
        ),
        code: `<style>
:root {
  --color-surface: #ffffff;
  --color-elevated: #f3f4f6;
  --color-foreground: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --radius-md: 6px;
}
</style>

<div style="display:inline-flex;border-radius:var(--radius-md);border:1px solid var(--color-border);overflow:hidden;">
  <button type="button" aria-pressed="true" style="height:36px;padding:0 14px;font-size:13px;font-weight:600;border:none;border-right:1px solid var(--color-border);background:var(--color-elevated);color:var(--color-foreground);cursor:pointer;">Price: Low</button>
  <button type="button" aria-pressed="false" style="height:36px;padding:0 14px;font-size:13px;font-weight:500;border:none;border-right:1px solid var(--color-border);background:var(--color-surface);color:var(--color-muted);cursor:pointer;">Price: High</button>
  <button type="button" aria-pressed="false" style="height:36px;padding:0 14px;font-size:13px;font-weight:500;border:none;background:var(--color-surface);color:var(--color-muted);cursor:pointer;">Newest</button>
</div>`,
      },
    ],
  },
  {
    id: "radio-group",
    title: "Radio Group",
    category: "Buttons",
    description: "Accessible radio button groups in multiple visual styles.",
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { id: "std", label: "Standard Delivery", checked: true },
              { id: "exp", label: "Express Delivery", checked: false },
              { id: "pck", label: "Pickup", checked: false },
            ].map(({ id, label, checked }) => (
              <label key={id} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, color: "var(--color-foreground)" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", border: checked ? "5px solid var(--color-primary)" : "2px solid var(--color-border)", display: "inline-block", background: "var(--color-surface)", flexShrink: 0 }} />
                {label}
              </label>
            ))}
          </div>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-surface: #ffffff;
  --color-foreground: #111827;
  --color-border: #e5e7eb;
}
</style>

<fieldset style="border:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
  <legend class="sr-only">Delivery method</legend>
  <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:var(--color-foreground);">
    <input type="radio" name="delivery" value="standard" checked style="accent-color:var(--color-primary);width:18px;height:18px;" />
    Standard Delivery
  </label>
  <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:var(--color-foreground);">
    <input type="radio" name="delivery" value="express" style="accent-color:var(--color-primary);width:18px;height:18px;" />
    Express Delivery
  </label>
  <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:var(--color-foreground);">
    <input type="radio" name="delivery" value="pickup" style="accent-color:var(--color-primary);width:18px;height:18px;" />
    Pickup
  </label>
</fieldset>`,
      },
      {
        name: "Card Radio",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 280 }}>
            {[
              { id: "std", title: "Standard Delivery", desc: "3–5 business days · Free", checked: true },
              { id: "exp", title: "Express Delivery", desc: "1–2 business days · $9.99", checked: false },
              { id: "pck", title: "Pickup", desc: "Ready in 2 hours · Free", checked: false },
            ].map(({ id, title, desc, checked }) => (
              <label key={id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", borderRadius: "var(--radius-md)", border: checked ? "2px solid var(--color-primary)" : "1px solid var(--color-border)", background: checked ? "color-mix(in srgb, var(--color-primary) 6%, var(--color-surface))" : "var(--color-surface)", cursor: "pointer" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", border: checked ? "5px solid var(--color-primary)" : "2px solid var(--color-border)", display: "inline-block", background: "var(--color-surface)", flexShrink: 0, marginTop: 1 }} />
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-foreground)" }}>{title}</span>
                  <span style={{ fontSize: 12, color: "var(--color-muted)" }}>{desc}</span>
                </span>
              </label>
            ))}
          </div>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
  --color-surface: #ffffff;
  --color-foreground: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --radius-md: 6px;
}
</style>

<fieldset style="border:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;width:280px;">
  <legend class="sr-only">Delivery method</legend>
  <label style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border-radius:var(--radius-md);border:2px solid var(--color-primary);background:color-mix(in srgb,var(--color-primary) 6%,var(--color-surface));cursor:pointer;">
    <input type="radio" name="delivery-card" value="standard" checked style="accent-color:var(--color-primary);width:18px;height:18px;margin-top:1px;flex-shrink:0;" />
    <span style="display:flex;flex-direction:column;gap:2px;">
      <span style="font-size:14px;font-weight:600;color:var(--color-foreground);">Standard Delivery</span>
      <span style="font-size:12px;color:var(--color-muted);">3–5 business days · Free</span>
    </span>
  </label>
  <label style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border-radius:var(--radius-md);border:1px solid var(--color-border);background:var(--color-surface);cursor:pointer;">
    <input type="radio" name="delivery-card" value="express" style="accent-color:var(--color-primary);width:18px;height:18px;margin-top:1px;flex-shrink:0;" />
    <span style="display:flex;flex-direction:column;gap:2px;">
      <span style="font-size:14px;font-weight:600;color:var(--color-foreground);">Express Delivery</span>
      <span style="font-size:12px;color:var(--color-muted);">1–2 business days · $9.99</span>
    </span>
  </label>
  <label style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border-radius:var(--radius-md);border:1px solid var(--color-border);background:var(--color-surface);cursor:pointer;">
    <input type="radio" name="delivery-card" value="pickup" style="accent-color:var(--color-primary);width:18px;height:18px;margin-top:1px;flex-shrink:0;" />
    <span style="display:flex;flex-direction:column;gap:2px;">
      <span style="font-size:14px;font-weight:600;color:var(--color-foreground);">Pickup</span>
      <span style="font-size:12px;color:var(--color-muted);">Ready in 2 hours · Free</span>
    </span>
  </label>
</fieldset>`,
      },
      {
        name: "Color Swatch",
        preview: (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[
              { label: "Red", color: "#ef4444", checked: false },
              { label: "Blue", color: "#3b82f6", checked: true },
              { label: "Green", color: "#22c55e", checked: false },
              { label: "Black", color: "#111827", checked: false },
            ].map(({ label, color, checked }) => (
              <label key={label} aria-label={label} title={label} style={{ cursor: "pointer" }}>
                <span style={{ display: "block", width: 32, height: 32, borderRadius: "50%", background: color, border: checked ? "3px solid var(--color-primary)" : "2px solid transparent", outline: checked ? "2px solid var(--color-primary)" : "2px solid transparent", outlineOffset: 2 }} />
              </label>
            ))}
          </div>
        ),
        code: `<style>
:root {
  --color-primary: #2563eb;
}
.swatch-radio { display: none; }
.swatch-radio:checked + .swatch-dot {
  border: 3px solid var(--color-primary);
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
.swatch-dot {
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
}
</style>

<div style="display:flex;gap:10px;align-items:center;" role="radiogroup" aria-label="Color">
  <label aria-label="Red" title="Red">
    <input type="radio" name="color" value="red" class="swatch-radio" />
    <span class="swatch-dot" style="background:#ef4444;"></span>
  </label>
  <label aria-label="Blue" title="Blue">
    <input type="radio" name="color" value="blue" class="swatch-radio" checked />
    <span class="swatch-dot" style="background:#3b82f6;"></span>
  </label>
  <label aria-label="Green" title="Green">
    <input type="radio" name="color" value="green" class="swatch-radio" />
    <span class="swatch-dot" style="background:#22c55e;"></span>
  </label>
  <label aria-label="Black" title="Black">
    <input type="radio" name="color" value="black" class="swatch-radio" />
    <span class="swatch-dot" style="background:#111827;"></span>
  </label>
</div>`,
      },
    ],
  },
  {
    id: "sidebar-filters",
    title: "Sidebar Filters",
    category: "Filters & Sorting",
    component: SidebarFilters,
    variants: [
      { name: "Default", preview: <SidebarFiltersDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<aside class="w-full space-y-6">\n  <div class="border-b border-border pb-4">\n    <h3 class="text-sm font-semibold text-foreground mb-3">Category</h3>\n    <ul class="space-y-2">\n      <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="h-[24px] w-[24px] rounded-[var(--radius-md)] border-2 border-border bg-surface" /><span class="text-sm text-foreground">Option A</span><span class="text-muted text-xs ml-auto">(12)</span></label></li>\n      <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="h-[24px] w-[24px] rounded-[var(--radius-md)] border-2 border-border bg-surface" /><span class="text-sm text-foreground">Option B</span><span class="text-muted text-xs ml-auto">(8)</span></label></li>\n    </ul>\n  </div>\n</aside>` },
    ],
  },
  {
    id: "range-slider",
    title: "Range Slider",
    category: "Filters & Sorting",
    component: RangeSlider,
    variants: [
      { name: "Default", preview: <RangeSliderDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="space-y-2">\n  <span class="text-sm font-medium text-foreground">Price range</span>\n  <div class="flex items-center gap-3">\n    <input type="number" min="0" max="500" value="50" class="h-[36px] w-20 rounded-[var(--radius-md)] border border-border bg-surface text-foreground text-sm px-2 focus:outline-none focus:ring-2 focus:ring-primary" />\n    <span class="text-muted text-sm">–</span>\n    <input type="number" min="0" max="500" value="200" class="h-[36px] w-20 rounded-[var(--radius-md)] border border-border bg-surface text-foreground text-sm px-2 focus:outline-none focus:ring-2 focus:ring-primary" />\n  </div>\n</div>` },
    ],
  },
  {
    id: "sort-dropdown",
    title: "Sort Dropdown",
    category: "Filters & Sorting",
    component: SortDropdown,
    variants: [
      { name: "Default", preview: <SortDropdownDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="relative inline-block">\n  <button type="button" class="inline-flex items-center justify-center gap-2 h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-elevated text-foreground border border-border">Sort by: Newest <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></button>\n  <!-- Dropdown panel with options; use DropdownMenu primitive for full behavior -->\n</div>` },
    ],
  },
  {
    id: "active-filter-pills",
    title: "Active Filter Pills",
    category: "Filters & Sorting",
    component: ActiveFilterPills,
    variants: [
      { name: "Default", preview: <ActiveFilterPillsDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="flex flex-wrap items-center gap-2">\n  <span class="inline-flex items-center gap-1.5 h-[36px] pl-3 pr-1 rounded-[var(--radius-md)] border border-border bg-surface text-sm text-foreground">\n    Size: M <button type="button" class="p-1.5 rounded-md hover:bg-muted/50 text-muted hover:text-foreground" aria-label="Remove">×</button>\n  </span>\n  <span class="inline-flex items-center gap-1.5 h-[36px] pl-3 pr-1 rounded-[var(--radius-md)] border border-border bg-surface text-sm text-foreground">\n    Color: Blue <button type="button" class="p-1.5 rounded-md hover:bg-muted/50 text-muted hover:text-foreground" aria-label="Remove">×</button>\n  </span>\n  <button type="button" class="h-[36px] px-3 text-sm text-muted hover:text-foreground underline">Clear all</button>\n</div>` },
    ],
  },
  {
    id: "grid-list-toggle",
    title: "Grid / List Toggle",
    category: "Filters & Sorting",
    component: GridListToggle,
    variants: [
      { name: "Default", preview: <GridListToggleDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n  <button type="button" aria-label="Grid view" aria-pressed="true" class="h-[36px] w-[36px] flex items-center justify-center bg-elevated text-foreground border-r border-border">\n    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>\n  </button>\n  <button type="button" aria-label="List view" aria-pressed="false" class="h-[36px] w-[36px] flex items-center justify-center text-muted hover:text-foreground">\n    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>\n  </button>\n</div>` },
    ],
  },
  {
    id: "filters-drawer",
    title: "Filters Drawer",
    category: "Filters & Sorting",
    component: FiltersDrawer,
    variants: [
      { name: "With trigger", preview: <FiltersDrawerDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getButtonClasses({ variant: "primary", size: "md" })}">Open filters</button>\n\n<!-- Drawer (shown when open) -->\n<div class="fixed inset-0 z-50 flex justify-end">\n  <div class="fixed inset-0 bg-black/50" aria-hidden="true"></div>\n  <aside class="relative w-full max-w-sm bg-surface border-l border-border shadow-xl overflow-y-auto">\n    <div class="flex items-center justify-between px-4 py-3 border-b border-border">\n      <h2 class="text-sm font-semibold text-foreground">Filters</h2>\n      <button type="button" aria-label="Close" class="h-[36px] w-[36px] flex items-center justify-center rounded-[var(--radius-md)] hover:bg-muted/50">&times;</button>\n    </div>\n    <div class="p-4 text-sm text-muted">Filter options go here.</div>\n  </aside>\n</div>` },
    ],
  },
  {
    id: "clear-all-button",
    title: "Clear All Button",
    category: "Filters & Sorting",
    component: ClearAllButton,
    variants: [
      { name: "Default", preview: <ClearAllButton onClick={() => {}} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="h-[36px] px-3 text-sm text-muted hover:text-foreground underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Clear all</button>` },
      { name: "Compact", preview: <ClearAllButton onClick={() => {}} compact />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="px-2 py-1 text-sm text-muted hover:text-foreground underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Clear all</button>` },
    ],
  },
  {
    id: "menu-icon-button",
    title: "Menu Icon Button",
    category: "Navigation",
    component: MenuIconButton,
    variants: [
      { name: "Closed", preview: <MenuIconButton aria-label="Open menu" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" aria-label="Open menu" aria-expanded="false" class="inline-flex items-center justify-center rounded-[var(--radius-md)] hover:bg-muted active:scale-95 h-11 w-11 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">\n  <div class="relative flex flex-col justify-center items-center gap-1.5">\n    <span class="h-0.5 w-6 bg-foreground rounded-full transition-all"></span>\n    <span class="h-0.5 w-6 bg-foreground rounded-full transition-all"></span>\n    <span class="h-0.5 w-6 bg-foreground rounded-full transition-all"></span>\n  </div>\n</button>` },
      { name: "Open", preview: <MenuIconButton open aria-label="Close menu" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" aria-label="Close menu" aria-expanded="true" class="inline-flex items-center justify-center rounded-[var(--radius-md)] hover:bg-muted active:scale-95 h-11 w-11 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">\n  <div class="relative flex flex-col justify-center items-center">\n    <span class="h-0.5 w-6 bg-foreground rounded-full absolute rotate-45 transition-all"></span>\n    <span class="h-0.5 w-6 bg-foreground rounded-full opacity-0 transition-all"></span>\n    <span class="h-0.5 w-6 bg-foreground rounded-full absolute -rotate-45 transition-all"></span>\n  </div>\n</button>` },
    ],
  },
  {
    id: "cart-item",
    title: "Cart Item",
    category: "Product Cards",
    component: CartItem,
    variants: [
      { name: "Default", preview: <CartItemDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="flex gap-4 py-4 border-b border-border">\n  <div class="h-[80px] w-[80px] shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-muted/30"></div>\n  <div class="min-w-0 flex-1">\n    <h3 class="text-sm font-medium text-foreground line-clamp-2">Product name</h3>\n    <p class="mt-0.5 text-sm font-medium text-foreground">$29.99</p>\n    <div class="mt-2 flex items-center gap-3">\n      <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n        <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border">−</button>\n        <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground">1</span>\n        <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground">+</button>\n      </div>\n      <button type="button" class="text-sm text-muted hover:text-foreground underline">Remove</button>\n    </div>\n  </div>\n</div>` },
    ],
  },
  {
    id: "quantity-stepper",
    title: "Quantity Stepper",
    category: "Quantity Selectors",
    component: QuantityStepper,
    variants: [
      { name: "Default", preview: <QuantityStepperDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n  <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n  <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground">+</button>\n</div>` },
      { name: "Compact Size", preview: <div style={{ display: "inline-flex", transform: "scale(0.8)", transformOrigin: "left center" }}><QuantityStepperDemo /></div>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex rounded-[var(--radius-sm)] border border-border bg-surface">\n  <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground border-r border-border text-xs hover:bg-muted/50">−</button>\n  <span class="h-[28px] min-w-[28px] flex items-center justify-center text-xs font-medium text-foreground border-r border-border px-1">1</span>\n  <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground text-xs hover:bg-muted/50">+</button>\n</div>` },
      { name: "Disabled State", preview: <QuantityStepper value={1} min={1} max={10} onChange={() => {}} disabled />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface opacity-50 cursor-not-allowed" aria-disabled="true">\n  <button type="button" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border cursor-not-allowed">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n  <button type="button" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground cursor-not-allowed">+</button>\n</div>` },
      { name: "Min Reached", preview: <QuantityStepper value={1} min={1} max={10} onChange={() => {}} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n  <button type="button" disabled aria-label="Decrease quantity" class="h-[36px] w-[36px] flex items-center justify-center text-muted border-r border-border opacity-40 cursor-not-allowed">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n  <button type="button" aria-label="Increase quantity" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n</div>` },
      { name: "Max Reached", preview: (<div style={{ display: "inline-flex", flexDirection: "column", gap: "6px" }}><QuantityStepper value={10} min={1} max={10} onChange={() => {}} /><span style={{ fontSize: "12px", color: "var(--color-muted, #888)" }}>Maximum quantity</span></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex flex-col gap-1.5">\n  <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n    <button type="button" aria-label="Decrease quantity" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">10</span>\n    <button type="button" disabled aria-label="Increase quantity" class="h-[36px] w-[36px] flex items-center justify-center text-muted opacity-40 cursor-not-allowed">+</button>\n  </div>\n  <p class="text-xs text-muted">Maximum quantity</p>\n</div>` },
      { name: "In Stock Product", preview: (<div style={{ border: "1px solid var(--color-border, #e5e7eb)", borderRadius: "8px", padding: "16px", maxWidth: "280px", background: "var(--color-surface, #fff)" }}><div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px", color: "var(--color-foreground, #111)" }}>Premium Wireless Headphones</div><div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px", color: "var(--color-foreground, #111)" }}>$299.99</div><div style={{ fontSize: "13px", color: "#16a34a", marginBottom: "12px", fontWeight: 500 }}>&#10003; In stock</div><QuantityStepperDemo /></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4 max-w-[280px]">\n  <h3 class="text-sm font-semibold text-foreground mb-1">Premium Wireless Headphones</h3>\n  <p class="text-lg font-bold text-foreground mb-1.5">$299.99</p>\n  <p class="text-sm font-medium text-green-600 mb-3">&#10003; In stock</p>\n  <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n</div>` },
      { name: "Low Stock Product", preview: (<div style={{ border: "1px solid var(--color-border, #e5e7eb)", borderRadius: "8px", padding: "16px", maxWidth: "280px", background: "var(--color-surface, #fff)" }}><div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px", color: "var(--color-foreground, #111)" }}>Premium Wireless Headphones</div><div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px", color: "var(--color-foreground, #111)" }}>$299.99</div><div style={{ fontSize: "13px", color: "#d97706", marginBottom: "12px", fontWeight: 500 }}>&#9888; Only 3 left in stock!</div><QuantityStepperDemo /></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4 max-w-[280px]">\n  <h3 class="text-sm font-semibold text-foreground mb-1">Premium Wireless Headphones</h3>\n  <p class="text-lg font-bold text-foreground mb-1.5">$299.99</p>\n  <p class="text-sm font-medium text-amber-600 mb-3">&#9888; Only 3 left in stock!</p>\n  <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n</div>` },
      { name: "Out of Stock", preview: (<div style={{ border: "1px solid var(--color-border, #e5e7eb)", borderRadius: "8px", padding: "16px", maxWidth: "280px", background: "var(--color-surface, #fff)" }}><div style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px", color: "var(--color-foreground, #111)" }}>Premium Wireless Headphones</div><div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px", color: "var(--color-foreground, #111)" }}>$299.99</div><div style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "12px", fontWeight: 500 }}>&#10005; Out of stock</div><div style={{ opacity: 0.4 }}><QuantityStepper value={1} min={1} max={10} onChange={() => {}} disabled /></div></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4 max-w-[280px]">\n  <h3 class="text-sm font-semibold text-foreground mb-1">Premium Wireless Headphones</h3>\n  <p class="text-lg font-bold text-foreground mb-1.5">$299.99</p>\n  <p class="text-sm font-medium text-muted mb-3">&#10005; Out of stock</p>\n  <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface opacity-40 cursor-not-allowed" aria-disabled="true">\n    <button type="button" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border cursor-not-allowed">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n    <button type="button" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground cursor-not-allowed">+</button>\n  </div>\n</div>` },
      { name: "PDP Layout", preview: (<div style={{ border: "1px solid var(--color-border, #e5e7eb)", borderRadius: "10px", padding: "20px", maxWidth: "360px", background: "var(--color-surface, #fff)", display: "flex", gap: "16px" }}><div style={{ width: "120px", minWidth: "120px", height: "120px", borderRadius: "8px", background: "var(--color-muted, #f3f4f6)", flexShrink: 0 }} /><div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px", color: "var(--color-foreground, #111)" }}>Premium Wireless Headphones</div><div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", color: "var(--color-foreground, #111)" }}>$299.99</div><div style={{ fontSize: "12px", marginBottom: "6px", fontWeight: 500, color: "var(--color-muted, #888)" }}>Quantity</div><div style={{ marginBottom: "10px" }}><QuantityStepperDemo /></div><div style={{ fontSize: "12px", color: "var(--color-muted, #888)", marginBottom: "10px" }}>Free shipping on orders over $50</div><button type="button" style={{ width: "100%", height: "36px", borderRadius: "8px", background: "var(--color-primary, #111)", color: "var(--color-primary-foreground, #fff)", border: "none", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>Add to Cart</button></div></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-lg)] border border-border bg-surface p-5 flex gap-4 max-w-[360px]">\n  <div class="w-[120px] h-[120px] shrink-0 rounded-[var(--radius-md)] bg-muted/30"></div>\n  <div class="flex-1 min-w-0">\n    <h1 class="text-sm font-bold text-foreground mb-1">Premium Wireless Headphones</h1>\n    <p class="text-lg font-bold text-foreground mb-2.5">$299.99</p>\n    <label class="text-xs font-medium text-muted block mb-1.5">Quantity</label>\n    <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface mb-2.5">\n      <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n      <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border">1</span>\n      <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n    </div>\n    <p class="text-xs text-muted mb-2.5">Free shipping on orders over $50</p>\n    <button type="button" class="w-full h-[36px] rounded-[var(--radius-md)] bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">Add to Cart</button>\n  </div>\n</div>` },
      { name: "Cart Items", preview: (<div style={{ border: "1px solid var(--color-border, #e5e7eb)", borderRadius: "10px", padding: "16px", maxWidth: "360px", background: "var(--color-surface, #fff)" }}><div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "12px", color: "var(--color-foreground, #111)" }}>Shopping Cart</div><div style={{ display: "flex", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid var(--color-border, #e5e7eb)", marginBottom: "12px", alignItems: "flex-start" }}><div style={{ width: "56px", height: "56px", borderRadius: "6px", background: "var(--color-muted, #f3f4f6)", flexShrink: 0 }} /><div style={{ flex: 1 }}><div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "2px", color: "var(--color-foreground, #111)" }}>Wireless Headphones</div><div style={{ fontSize: "13px", color: "var(--color-foreground, #111)", marginBottom: "6px" }}>$299.99</div><QuantityStepperDemo /></div></div><div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><div style={{ width: "56px", height: "56px", borderRadius: "6px", background: "var(--color-muted, #f3f4f6)", flexShrink: 0 }} /><div style={{ flex: 1 }}><div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "2px", color: "var(--color-foreground, #111)" }}>Smart Watch</div><div style={{ fontSize: "13px", color: "var(--color-foreground, #111)", marginBottom: "6px" }}>$199.99</div><QuantityStepperDemo /></div></div></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-lg)] border border-border bg-surface p-4 max-w-[360px]">\n  <h2 class="text-sm font-bold text-foreground mb-3">Shopping Cart</h2>\n  <!-- Item 1 -->\n  <div class="flex gap-3 pb-3 border-b border-border mb-3 items-start">\n    <div class="w-14 h-14 shrink-0 rounded-[var(--radius-md)] bg-muted/30"></div>\n    <div class="flex-1 min-w-0">\n      <p class="text-xs font-semibold text-foreground mb-0.5">Wireless Headphones</p>\n      <p class="text-xs text-foreground mb-1.5">$299.99</p>\n      <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n        <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground border-r border-border text-xs hover:bg-muted/50">−</button>\n        <span class="h-[28px] min-w-[28px] flex items-center justify-center text-xs font-medium text-foreground border-r border-border">1</span>\n        <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground text-xs hover:bg-muted/50">+</button>\n      </div>\n    </div>\n  </div>\n  <!-- Item 2 -->\n  <div class="flex gap-3 items-start">\n    <div class="w-14 h-14 shrink-0 rounded-[var(--radius-md)] bg-muted/30"></div>\n    <div class="flex-1 min-w-0">\n      <p class="text-xs font-semibold text-foreground mb-0.5">Smart Watch</p>\n      <p class="text-xs text-foreground mb-1.5">$199.99</p>\n      <div class="inline-flex rounded-[var(--radius-md)] border border-border bg-surface">\n        <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground border-r border-border text-xs hover:bg-muted/50">−</button>\n        <span class="h-[28px] min-w-[28px] flex items-center justify-center text-xs font-medium text-foreground border-r border-border">1</span>\n        <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground text-xs hover:bg-muted/50">+</button>\n      </div>\n    </div>\n  </div>\n</div>` },
    ],
  },
  {
    id: "quantity-field",
    title: "Quantity Field",
    category: "Quantity Selectors",
    component: QuantityField,
    variants: [
      { name: "Label top", preview: <QuantityFieldDemo labelPosition="top" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="space-y-1.5">\n  <label class="text-sm font-medium text-foreground">Quantity</label>\n  <div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n</div>` },
      { name: "Label left", preview: <QuantityFieldDemo labelPosition="left" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="flex items-center gap-3">\n  <label class="text-sm font-medium text-foreground">Quantity</label>\n  <div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n</div>` },
      { name: "With helper", preview: <QuantityFieldDemo helperText="Only 5 left in stock." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="space-y-1.5">\n  <div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden">\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-border px-2">1</span>\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n  <p class="text-sm text-muted">Only 5 left in stock.</p>\n</div>` },
      { name: "Error state", preview: <QuantityFieldDemo error="Max quantity reached." value={10} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="space-y-1.5">\n  <div class="inline-flex items-center rounded-[var(--radius-md)] border border-red-500 bg-surface overflow-hidden">\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-red-500 hover:bg-muted/50">−</button>\n    <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm font-medium text-foreground border-r border-red-500 px-2">10</span>\n    <button type="button" class="h-[36px] w-[36px] flex items-center justify-center text-foreground hover:bg-muted/50">+</button>\n  </div>\n  <p class="text-sm text-red-600" role="alert">Max quantity reached.</p>\n</div>` },
      { name: "Loading", preview: <QuantityFieldDemo loading />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden opacity-60">\n  <button type="button" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border cursor-not-allowed">−</button>\n  <span class="h-[36px] min-w-[36px] flex items-center justify-center text-sm px-2">\n    <span class="inline-block animate-spin rounded-full border-2 border-border border-t-primary h-4 w-4"></span>\n  </span>\n  <button type="button" disabled class="h-[36px] w-[36px] flex items-center justify-center text-foreground cursor-not-allowed">+</button>\n</div>` },
      { name: "Compact with Label", preview: (<div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}><label style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-foreground, #111)", whiteSpace: "nowrap" }}>Quantity</label><div style={{ display: "inline-flex", transform: "scale(0.8)", transformOrigin: "left center" }}><QuantityStepperDemo /></div></div>), code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center gap-2">\n  <label class="text-xs font-medium text-foreground whitespace-nowrap">Quantity</label>\n  <div class="inline-flex rounded-[var(--radius-sm)] border border-border bg-surface">\n    <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground border-r border-border text-xs hover:bg-muted/50">−</button>\n    <span class="h-[28px] min-w-[28px] flex items-center justify-center text-xs font-medium text-foreground border-r border-border px-1">1</span>\n    <button type="button" class="h-[28px] w-[28px] flex items-center justify-center text-foreground text-xs hover:bg-muted/50">+</button>\n  </div>\n</div>` },
    ],
  },
  {
    id: "cart-summary",
    title: "Cart Summary",
    category: "Product Cards",
    component: CartSummary,
    variants: [
      { name: "Default", preview: <CartSummary subtotal="$120.00" shipping="$10.00" total="$130.00" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4 space-y-3">\n  <div class="space-y-2 text-sm">\n    <div class="flex justify-between text-foreground"><span>Subtotal</span><span>$120.00</span></div>\n    <div class="flex justify-between text-foreground"><span>Shipping</span><span>$10.00</span></div>\n    <div class="flex justify-between font-semibold text-foreground pt-2 border-t border-border"><span>Total</span><span>$130.00</span></div>\n  </div>\n</div>` },
      { name: "With coupon", preview: <CartSummary subtotal="$100.00" total="$100.00" couponSlot={<CouponInputDemo />} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4 space-y-3">\n  <div class="flex gap-2">\n    <input type="text" placeholder="Coupon code" class="flex-1 min-w-0 border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] h-[36px] text-sm focus:outline-none focus:ring-2 focus:ring-primary" />\n    <button type="button" class="h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-elevated text-foreground border border-border">Apply</button>\n  </div>\n  <div class="space-y-2 text-sm">\n    <div class="flex justify-between text-foreground"><span>Subtotal</span><span>$100.00</span></div>\n    <div class="flex justify-between font-semibold text-foreground pt-2 border-t border-border"><span>Total</span><span>$100.00</span></div>\n  </div>\n</div>` },
    ],
  },
  {
    id: "coupon-input",
    title: "Coupon Input",
    category: "Product Cards",
    component: CouponInput,
    variants: [
      { name: "Default", preview: <CouponInput />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="flex gap-2">\n  <input type="text" placeholder="Coupon code" class="flex-1 min-w-0 w-full border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] h-[36px] min-h-[36px] text-sm focus:outline-none focus:ring-2 focus:ring-primary" />\n  <button type="button" class="h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-elevated text-foreground border border-border">Apply</button>\n</div>` },
      { name: "With state", preview: <CouponInputDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<!-- Before applying -->\n<div class="flex gap-2">\n  <input type="text" placeholder="Coupon code" class="flex-1 min-w-0 border border-border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)] h-[36px] text-sm focus:outline-none focus:ring-2 focus:ring-primary" />\n  <button type="button" class="h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-elevated text-foreground border border-border">Apply</button>\n</div>\n\n<!-- After applying -->\n<div class="flex items-center gap-2">\n  <span class="inline-flex items-center gap-1.5 h-[36px] pl-3 pr-1 rounded-[var(--radius-md)] border border-green-500/30 bg-green-500/10 text-sm text-foreground">\n    SAVE20 <button type="button" class="p-1.5 rounded-md hover:bg-black/10 text-muted" aria-label="Remove">×</button>\n  </span>\n</div>` },
    ],
  },
  {
    id: "trust-badge-row",
    title: "Trust Badge Row",
    category: "System",
    component: TrustBadgeRow,
    variants: [
      { name: "Default", preview: <TrustBadgeRow badges={[{ id: "1", label: "Free shipping" }, { id: "2", label: "Secure payment" }, { id: "3", label: "Returns" }]} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="flex flex-wrap items-center justify-center gap-4 py-3">\n  <span class="inline-flex items-center gap-2 text-xs text-muted">\n    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\n    Free shipping\n  </span>\n  <span class="inline-flex items-center gap-2 text-xs text-muted">\n    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\n    Secure payment\n  </span>\n  <span class="inline-flex items-center gap-2 text-xs text-muted">\n    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\n    Returns\n  </span>\n</div>` },
    ],
  },
  {
    id: "countdown-timer",
    title: "Countdown Timer",
    category: "Announcements",
    component: CountdownTimer,
    variants: [
      { name: "With labels", preview: <CountdownTimer label="Ends in" days={1} hours={5} minutes={30} seconds={45} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center gap-2">\n  <span class="text-sm text-foreground">Ends in</span>\n  <div class="flex gap-1.5" role="timer" aria-live="polite">\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">1</span>\n      <span class="text-xs text-muted">d</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">05</span>\n      <span class="text-xs text-muted">h</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">30</span>\n      <span class="text-xs text-muted">m</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">45</span>\n      <span class="text-xs text-muted">s</span>\n    </span>\n  </div>\n</div>` },
      { name: "Banner style", preview: <CountdownTimer variant="banner" label="Ends in" days={0} hours={2} minutes={15} seconds={0} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2">\n  <span class="text-sm text-foreground">Ends in</span>\n  <div class="flex gap-1.5" role="timer">\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-md)] bg-elevated px-3 py-2 min-w-[44px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">02</span>\n      <span class="text-xs text-muted">h</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-md)] bg-elevated px-3 py-2 min-w-[44px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">15</span>\n      <span class="text-xs text-muted">m</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-md)] bg-elevated px-3 py-2 min-w-[44px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">00</span>\n      <span class="text-xs text-muted">s</span>\n    </span>\n  </div>\n</div>` },
      { name: "Inline compact", preview: <CountdownTimer showLabels={false} days={0} hours={1} minutes={30} seconds={0} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex items-center gap-1.5" role="timer">\n  <span class="inline-flex items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px] justify-center">\n    <span class="text-sm font-semibold text-foreground tabular-nums">01</span>\n  </span>\n  <span class="text-muted">:</span>\n  <span class="inline-flex items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px] justify-center">\n    <span class="text-sm font-semibold text-foreground tabular-nums">30</span>\n  </span>\n  <span class="text-muted">:</span>\n  <span class="inline-flex items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px] justify-center">\n    <span class="text-sm font-semibold text-foreground tabular-nums">00</span>\n  </span>\n</div>` },
      { name: "Live (endDate)", preview: <LiveCountdownDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<!-- Pass endDate prop for live countdown -->\n<div class="inline-flex items-center gap-2">\n  <span class="text-sm text-foreground">Ends in</span>\n  <div class="flex gap-1.5" role="timer" aria-live="polite">\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">23</span>\n      <span class="text-xs text-muted">h</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">59</span>\n      <span class="text-xs text-muted">m</span>\n    </span>\n    <span class="inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]">\n      <span class="text-sm font-semibold text-foreground tabular-nums">59</span>\n      <span class="text-xs text-muted">s</span>\n    </span>\n  </div>\n</div>` },
    ],
  },
  {
    id: "urgency-indicator",
    title: "Urgency Indicator",
    category: "System",
    component: UrgencyIndicator,
    variants: [
      { name: "Default", preview: <UrgencyIndicator message="Only 3 left in stock" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<p class="text-sm font-medium text-foreground">Only 3 left in stock</p>` },
      { name: "Warning", preview: <UrgencyIndicator message="Selling fast!" variant="warning" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<p class="text-sm font-medium text-amber-600">Selling fast!</p>` },
    ],
  },
  {
    id: "announcement-bar",
    title: "Announcement Bar",
    category: "Announcements",
    component: AnnouncementBar,
    variants: [
      { name: "Simple", preview: <AnnouncementBar message="Free shipping on orders over $50" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-muted/50 text-foreground">\n  <span class="flex-1 text-center">Free shipping on orders over $50</span>\n</div>` },
      { name: "With CTA", preview: <AnnouncementBar message="Summer sale" link={{ href: "#", label: "Shop now" }} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-muted/50 text-foreground">\n  <span class="flex-1 text-center">Summer sale</span>\n  <a href="#" class="shrink-0 font-medium underline hover:no-underline">Shop now</a>\n</div>` },
      { name: "Dismissible", preview: <AnnouncementBar message="Limited time offer" dismissible />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-muted/50 text-foreground">\n  <span class="flex-1 text-center">Limited time offer</span>\n  <button type="button" aria-label="Dismiss" class="h-[36px] w-[36px] shrink-0 flex items-center justify-center rounded-[var(--radius-md)] hover:bg-black/10">\n    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\n  </button>\n</div>` },
      { name: "Success", preview: <AnnouncementBar message="Order confirmed" variant="success" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-green-100 text-green-800">\n  <span class="flex-1 text-center">Order confirmed</span>\n</div>` },
      { name: "Error", preview: <AnnouncementBar message="Payment failed" variant="error" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-red-100 text-red-800">\n  <span class="flex-1 text-center">Payment failed</span>\n</div>` },
      { name: "Promo", preview: <AnnouncementBar message="Flash sale today" variant="promo" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-amber-100 text-amber-800">\n  <span class="flex-1 text-center">Flash sale today</span>\n</div>` },
      { name: "With countdown", preview: <AnnouncementBar message="Sale ends in" countdown={<CountdownTimer endDate={new Date(Date.now() + 3600000)} />} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div role="banner" class="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-muted/50 text-foreground">\n  <span class="flex-1 text-center">Sale ends in</span>\n  <span class="shrink-0 flex items-center gap-1" role="timer">\n    <span class="rounded-[var(--radius-sm)] bg-elevated px-2 py-1 text-sm font-semibold tabular-nums">01</span>:\n    <span class="rounded-[var(--radius-sm)] bg-elevated px-2 py-1 text-sm font-semibold tabular-nums">00</span>:\n    <span class="rounded-[var(--radius-sm)] bg-elevated px-2 py-1 text-sm font-semibold tabular-nums">00</span>\n  </span>\n</div>` },
    ],
  },
  {
    id: "announcement-ticker",
    title: "Announcement Ticker",
    category: "Announcements",
    component: AnnouncementTicker,
    variants: [
      { name: "Default", preview: <AnnouncementTicker items={[{ id: "1", content: "Free shipping over $50" }, { id: "2", content: "New arrivals" }]} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n\n@keyframes ticker {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n</style>\n\n<div class="overflow-hidden bg-muted/50 py-2 text-sm text-foreground">\n  <div class="flex whitespace-nowrap" style="animation: ticker 20s linear infinite">\n    <span class="px-8">Free shipping over $50</span>\n    <span class="px-8">New arrivals</span>\n    <span class="px-8">Free shipping over $50</span>\n    <span class="px-8">New arrivals</span>\n  </div>\n</div>` },
      { name: "With separator", preview: <AnnouncementTicker items={[{ id: "1", content: "Offer 1" }, { id: "2", content: "Offer 2" }]} separator="•" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n\n@keyframes ticker {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n</style>\n\n<div class="overflow-hidden bg-muted/50 py-2 text-sm text-foreground">\n  <div class="flex whitespace-nowrap" style="animation: ticker 20s linear infinite">\n    <span class="px-4">Offer 1</span><span class="text-muted">•</span>\n    <span class="px-4">Offer 2</span><span class="text-muted">•</span>\n    <span class="px-4">Offer 1</span><span class="text-muted">•</span>\n    <span class="px-4">Offer 2</span>\n  </div>\n</div>` },
    ],
  },
  {
    id: "announcement-carousel",
    title: "Announcement Carousel",
    category: "Announcements",
    component: AnnouncementCarousel,
    variants: [
      { name: "Default", preview: <AnnouncementCarousel slides={[{ id: "1", content: "Slide 1" }, { id: "2", content: "Slide 2" }, { id: "3", content: "Slide 3" }]} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="relative overflow-hidden bg-muted/50 py-2">\n  <div class="flex items-center justify-center text-sm text-foreground px-10">\n    <span>Slide 1</span>\n  </div>\n  <button type="button" aria-label="Previous" class="absolute left-1 top-1/2 -translate-y-1/2 h-[28px] w-[28px] rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-elevated">‹</button>\n  <button type="button" aria-label="Next" class="absolute right-1 top-1/2 -translate-y-1/2 h-[28px] w-[28px] rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-elevated">›</button>\n  <div class="flex justify-center gap-1.5 mt-2">\n    <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>\n    <span class="h-1.5 w-1.5 rounded-full bg-muted"></span>\n    <span class="h-1.5 w-1.5 rounded-full bg-muted"></span>\n  </div>\n</div>` },
    ],
  },
  {
    id: "landing-popup",
    title: "Landing Popup",
    category: "Announcements",
    component: LandingPopup,
    variants: [
      { name: "With trigger", preview: <LandingPopupDemo />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<button type="button" class="${getButtonClasses({ variant: "primary", size: "md" })}">Open popup</button>\n\n<!-- Popup (shown when open) -->\n<div class="fixed inset-0 z-50 flex items-center justify-center">\n  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true"></div>\n  <div class="relative w-full max-w-md rounded-[var(--radius-lg)] border border-border bg-surface shadow-xl">\n    <button type="button" aria-label="Close" class="absolute top-3 right-3 h-[36px] w-[36px] flex items-center justify-center rounded-[var(--radius-md)] hover:bg-muted/50 text-muted">&times;</button>\n    <div class="p-6 text-foreground">\n      <h3 class="font-semibold text-lg">Welcome</h3>\n      <p class="text-sm text-muted mt-2">Content here. Escape or click outside to close.</p>\n    </div>\n  </div>\n</div>` },
    ],
  },
  {
    id: "membership-callout",
    title: "Membership Callout",
    category: "Announcements",
    component: MembershipCallout,
    variants: [
      { name: "Inline", preview: <MembershipCallout variant="inline" title="Member benefits" description="Save 10%" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="inline-flex flex-wrap items-center gap-2 rounded-[var(--radius-md)] bg-muted/50 px-3 py-2 text-sm text-foreground">\n  <span class="font-medium">Member benefits</span>\n  <span class="text-muted">Save 10%</span>\n</div>` },
      { name: "Banner", preview: <MembershipCallout variant="banner" title="Join for free shipping" description="Sign up today." />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">\n  <p class="font-medium">Join for free shipping</p>\n  <p class="mt-1 text-muted">Sign up today.</p>\n</div>` },
      { name: "Badge", preview: <MembershipCallout variant="badge" title="Member" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium">Member</span>` },
    ],
  },
  {
    id: "offer-callout",
    title: "Offer Callout",
    category: "Announcements",
    component: OfferCallout,
    variants: [
      { name: "Simple", preview: <OfferCallout title="Get 20% off" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] bg-elevated px-4 py-3 text-sm text-foreground">\n  <p class="font-medium">Get 20% off</p>\n</div>` },
      { name: "Collapsible", preview: <OfferCallout variant="collapsible" title="Terms" defaultOpen={false}>Details here.</OfferCallout>, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-elevated overflow-hidden">\n  <button type="button" class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-black/5">\n    Terms\n    <svg class="h-4 w-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>\n  </button>\n  <div class="px-4 pb-3 text-sm text-muted">Details here.</div>\n</div>` },
      { name: "Bordered", preview: <OfferCallout variant="bordered" title="Limited offer" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border-2 border-amber-500/50 bg-amber-500/5 px-4 py-3 text-sm text-foreground">\n  <p class="font-medium">Limited offer</p>\n</div>` },
    ],
  },
  {
    id: "urgency-callout",
    title: "Urgency Callout",
    category: "Announcements",
    component: UrgencyCallout,
    variants: [
      { name: "Default", preview: <UrgencyCallout message="Only 3 left" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-muted text-foreground">Only 3 left</span>` },
      { name: "Warning", preview: <UrgencyCallout message="Selling fast" variant="warning" />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800">Selling fast</span>` },
      { name: "With pulse", preview: <UrgencyCallout message="Ends soon" variant="error" pulse />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n\n@keyframes urgency-pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.7; }\n}\n</style>\n\n<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-800" style="animation: urgency-pulse 2s ease-in-out infinite">Ends soon</span>` },
    ],
  },
  {
    id: "promo-banner",
    title: "Promo Banner",
    category: "Announcements",
    component: PromoBanner,
    variants: [
      { name: "Default", preview: <PromoBanner title="Get 20% off" description="Use code SAVE20 at checkout." cta={{ label: "Apply" }} />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4">\n  <div class="min-w-0 flex-1">\n    <h3 class="text-sm font-semibold text-foreground">Get 20% off</h3>\n    <p class="mt-1 text-sm text-muted">Use code SAVE20 at checkout.</p>\n    <div class="mt-3">\n      <button type="button" class="inline-flex items-center justify-center h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground hover:opacity-90">Apply</button>\n    </div>\n  </div>\n</div>` },
      { name: "Dismissible", preview: <PromoBanner title="New arrival" description="Check out the latest collection." dismissible />, code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div class="rounded-[var(--radius-md)] border border-border bg-surface p-4">\n  <div class="flex items-start justify-between gap-4">\n    <div class="min-w-0 flex-1">\n      <h3 class="text-sm font-semibold text-foreground">New arrival</h3>\n      <p class="mt-1 text-sm text-muted">Check out the latest collection.</p>\n    </div>\n    <button type="button" aria-label="Dismiss" class="h-[36px] w-[36px] shrink-0 flex items-center justify-center rounded-[var(--radius-md)] text-muted hover:text-foreground hover:bg-muted/50">\n      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\n    </button>\n  </div>\n</div>` },
    ],
  },
  {
    id: "star-rating",
    title: "Star Rating",
    category: "Buttons",
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i <= 4 ? "#f59e0b" : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:inline-flex;align-items:center;gap:2px;" role="img" aria-label="4 out of 5 stars">\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n</div>`,
      },
      {
        name: "Small",
        preview: (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= 3 || (i === 4 && false) ? (i <= 3 ? "#f59e0b" : "#e2e8f0") : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:inline-flex;align-items:center;gap:2px;" role="img" aria-label="3.5 out of 5 stars">\n  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="14" height="14" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="14" height="14" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n</div>`,
      },
      {
        name: "Large with count",
        preview: (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill={i <= 4 ? "#f59e0b" : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: "14px", color: "var(--color-muted, #64748b)", fontWeight: 500 }}>128 reviews</span>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:inline-flex;align-items:center;gap:6px;">\n  <div style="display:inline-flex;align-items:center;gap:2px;" role="img" aria-label="4.5 out of 5 stars">\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  </div>\n  <span style="font-size:14px;color:var(--color-muted,#64748b);font-weight:500;">128 reviews</span>\n</div>`,
      },
      {
        name: "Read Only",
        preview: (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "2px", pointerEvents: "none" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i <= 3 ? "#cbd5e1" : "#cbd5e1"} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="display:inline-flex;align-items:center;gap:2px;pointer-events:none;" role="img" aria-label="3 out of 5 stars">\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n</div>`,
      },
      {
        name: "Interactive",
        preview: (() => {
          function StarRatingDemo() {
            const [hovered, setHovered] = useState<number>(0)
            const [selected, setSelected] = useState<number>(0)
            const active = hovered || selected
            return (
              <div style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={i <= active ? "#f59e0b" : "#e2e8f0"}
                    style={{ cursor: "pointer", transition: "fill 0.1s" }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setSelected(i)}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            )
          }
          return <StarRatingDemo />
        })(),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n\n.star-rating { display:inline-flex; align-items:center; gap:2px; }\n.star-rating svg { cursor:pointer; transition:fill 0.1s; }\n.star-rating svg:hover ~ svg { fill:#e2e8f0 !important; }\n.star-rating:hover svg { fill:#f59e0b; }\n.star-rating:hover svg:hover ~ svg { fill:#e2e8f0; }\n</style>\n\n<div class="star-rating" role="radiogroup" aria-label="Rate this product">\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n</div>`,
      },
    ],
  },
  {
    id: "review-card",
    title: "Review Card",
    category: "Product Cards",
    variants: [
      {
        name: "Default",
        preview: (
          <div style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(64,96,240,0.12)", borderRadius: "12px", padding: "16px", maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(64,96,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "14px", color: "var(--color-text, #0f172a)", flexShrink: 0 }}>JS</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text, #0f172a)" }}>Jane Smith</div>
                <div style={{ fontSize: "12px", color: "var(--color-muted, #64748b)" }}>March 12, 2025</div>
              </div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "2px", marginBottom: "8px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= 4 ? "#f59e0b" : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text, #0f172a)", margin: 0, lineHeight: "1.5" }}>Great product! Really happy with the quality and fast shipping. Would definitely recommend to others.</p>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="background:rgba(255,255,255,0.82);border:1px solid rgba(64,96,240,0.12);border-radius:12px;padding:16px;max-width:340px;">\n  <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">\n    <div style="width:40px;height:40px;border-radius:50%;background:rgba(64,96,240,0.12);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;color:var(--color-text,#0f172a);flex-shrink:0;">JS</div>\n    <div>\n      <div style="font-weight:600;font-size:14px;color:var(--color-text,#0f172a);">Jane Smith</div>\n      <div style="font-size:12px;color:var(--color-muted,#64748b);">March 12, 2025</div>\n    </div>\n  </div>\n  <div style="display:inline-flex;align-items:center;gap:2px;margin-bottom:8px;" role="img" aria-label="4 out of 5 stars">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  </div>\n  <p style="font-size:14px;color:var(--color-text,#0f172a);margin:0;line-height:1.5;">Great product! Really happy with the quality and fast shipping. Would definitely recommend to others.</p>\n</div>`,
      },
      {
        name: "With Photo",
        preview: (
          <div style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(64,96,240,0.12)", borderRadius: "12px", padding: "16px", maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(64,96,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "14px", color: "var(--color-text, #0f172a)", flexShrink: 0 }}>MK</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text, #0f172a)" }}>Mike K.</div>
                  <div style={{ fontSize: "12px", color: "var(--color-muted, #64748b)" }}>Feb 3, 2025</div>
                </div>
              </div>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "#f0f6ff", flexShrink: 0 }} />
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "2px", marginBottom: "8px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= 4 ? "#f59e0b" : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text, #0f172a)", margin: 0, lineHeight: "1.5" }}>Looks exactly like the photo. Very sturdy and well made.</p>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="background:rgba(255,255,255,0.82);border:1px solid rgba(64,96,240,0.12);border-radius:12px;padding:16px;max-width:340px;">\n  <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;">\n    <div style="display:flex;align-items:center;gap:10px;flex:1;">\n      <div style="width:40px;height:40px;border-radius:50%;background:rgba(64,96,240,0.12);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;color:var(--color-text,#0f172a);flex-shrink:0;">MK</div>\n      <div>\n        <div style="font-weight:600;font-size:14px;color:var(--color-text,#0f172a);">Mike K.</div>\n        <div style="font-size:12px;color:var(--color-muted,#64748b);">Feb 3, 2025</div>\n      </div>\n    </div>\n    <div style="width:48px;height:48px;border-radius:8px;background:#f0f6ff;flex-shrink:0;"></div>\n  </div>\n  <div style="display:inline-flex;align-items:center;gap:2px;margin-bottom:8px;" role="img" aria-label="4 out of 5 stars">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  </div>\n  <p style="font-size:14px;color:var(--color-text,#0f172a);margin:0;line-height:1.5;">Looks exactly like the photo. Very sturdy and well made.</p>\n</div>`,
      },
      {
        name: "Verified Purchase",
        preview: (
          <div style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(64,96,240,0.12)", borderRadius: "12px", padding: "16px", maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(64,96,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "14px", color: "var(--color-text, #0f172a)", flexShrink: 0 }}>AL</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-text, #0f172a)" }}>Alex L.</div>
                <div style={{ fontSize: "12px", color: "var(--color-muted, #64748b)" }}>Jan 20, 2025</div>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: "rgba(34,197,94,0.1)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "9999px", padding: "2px 8px", fontSize: "11px", fontWeight: 500, whiteSpace: "nowrap" }}>✓ Verified Purchase</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "2px", marginBottom: "8px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= 4 ? "#f59e0b" : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "var(--color-text, #0f172a)", margin: 0, lineHeight: "1.5" }}>Exactly as described. Shipping was fast and packaging was perfect.</p>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="background:rgba(255,255,255,0.82);border:1px solid rgba(64,96,240,0.12);border-radius:12px;padding:16px;max-width:340px;">\n  <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">\n    <div style="width:40px;height:40px;border-radius:50%;background:rgba(64,96,240,0.12);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;color:var(--color-text,#0f172a);flex-shrink:0;">AL</div>\n    <div style="flex:1;">\n      <div style="font-weight:600;font-size:14px;color:var(--color-text,#0f172a);">Alex L.</div>\n      <div style="font-size:12px;color:var(--color-muted,#64748b);">Jan 20, 2025</div>\n    </div>\n    <span style="display:inline-flex;align-items:center;gap:4px;background:rgba(34,197,94,0.1);color:#16a34a;border:1px solid rgba(34,197,94,0.2);border-radius:9999px;padding:2px 8px;font-size:11px;font-weight:500;white-space:nowrap;">&#10003; Verified Purchase</span>\n  </div>\n  <div style="display:inline-flex;align-items:center;gap:2px;margin-bottom:8px;" role="img" aria-label="4 out of 5 stars">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n  </div>\n  <p style="font-size:14px;color:var(--color-text,#0f172a);margin:0;line-height:1.5;">Exactly as described. Shipping was fast and packaging was perfect.</p>\n</div>`,
      },
      {
        name: "Compact",
        preview: (
          <div style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(64,96,240,0.12)", borderRadius: "10px", padding: "10px 12px", maxWidth: "300px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(64,96,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "11px", color: "var(--color-text, #0f172a)", flexShrink: 0 }}>RP</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: "13px", color: "var(--color-text, #0f172a)" }}>R. Patel</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= 5 ? "#f59e0b" : "#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: "11px", color: "var(--color-muted, #64748b)", flexShrink: 0 }}>Dec 2024</div>
            </div>
            <p style={{ fontSize: "12px", color: "var(--color-text, #0f172a)", margin: 0, lineHeight: "1.4" }}>Love it. Quick delivery and well packaged.</p>
          </div>
        ),
        code: `<style>\n${SNIPPET_THEME_BLOCK}\n</style>\n\n<div style="background:rgba(255,255,255,0.82);border:1px solid rgba(64,96,240,0.12);border-radius:10px;padding:10px 12px;max-width:300px;">\n  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">\n    <div style="width:32px;height:32px;border-radius:50%;background:rgba(64,96,240,0.12);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:11px;color:var(--color-text,#0f172a);flex-shrink:0;">RP</div>\n    <div style="flex:1;min-width:0;">\n      <div style="font-weight:600;font-size:13px;color:var(--color-text,#0f172a);">R. Patel</div>\n      <div style="display:inline-flex;align-items:center;gap:2px;" role="img" aria-label="5 out of 5 stars">\n        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\n      </div>\n    </div>\n    <div style="font-size:11px;color:var(--color-muted,#64748b);flex-shrink:0;">Dec 2024</div>\n  </div>\n  <p style="font-size:12px;color:var(--color-text,#0f172a);margin:0;line-height:1.4;">Love it. Quick delivery and well packaged.</p>\n</div>`,
      },
    ],
  },
]
