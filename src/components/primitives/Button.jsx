/**
 * Button – token-based; matches Figma: Add to Cart (primary), Dismiss (secondary), icon square (X), icon circle (heart).
 * Variants: primary, secondary, ghost, outline, destructive, social, icon-square, icon-circle.
 * See FIGMA_UIVERSE_MAPPING.md and design-tokens.css.
 */
import Loader from "../system/Loader"

/* ONLY sm | md | lg. sm=24px px-3 text-xs, md=36px px-4 text-sm, lg=44px px-6 text-base. Icon: 12px, 16px, 18px */
const SIZE_CLASS = {
  sm: "btn-size-small",
  md: "btn-size-default",
  lg: "btn-size-large",
}
const ICON_SIZE_CLASS = {
  sm: "btn-icon-small",
  md: "btn-icon-default",
  lg: "btn-icon-large",
}

export function getButtonClasses({ variant = "primary", size = "md", forcedState = "default" } = {}) {
  const isLoading = forcedState === "loading"
  const isDisabled = forcedState === "disabled"
  const isHover = forcedState === "hover"
  const isActive = forcedState === "active"

  const isIconSquare = variant === "icon-square"
  const isIconCircle = variant === "icon-circle"

  const isOutlineCyan = variant === "outline-cyan"
  const btnSizeClass = SIZE_CLASS[size] ?? SIZE_CLASS.md
  const base =
    isOutlineCyan
      ? "relative inline-flex items-center justify-center text-base font-semibold transition-all duration-300 focus-visible:outline focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
      : `relative inline-flex items-center justify-center ${btnSizeClass} text-base font-medium transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2`
  const baseRect = isOutlineCyan ? "px-6 py-2 rounded-lg" : "rounded-xl"
  const iconSizeClass = ICON_SIZE_CLASS[size] ?? ICON_SIZE_CLASS.md
  const baseIconSquare = `px-0 rounded-xl ${iconSizeClass}`
  const baseIconCircle = `px-0 rounded-full ${iconSizeClass}`

  const variants = {
    "outline-cyan": {
      base: "border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-black",
      hover: "bg-cyan-400 text-black",
      active: "scale-95",
    },
    primary: {
      base: "bg-[var(--color-primary)] text-[var(--color-neutral-0)] shadow-[var(--shadow-soft)]",
      hover: "bg-[var(--color-primary-hover)]",
      active: "scale-95",
    },
    secondary: {
      base: "bg-[var(--color-neutral-200)] text-[var(--color-neutral-600)] shadow-[var(--shadow-subtle)]",
      hover: "bg-[var(--color-neutral-300)]",
      active: "scale-95",
    },
    ghost: {
      base: "bg-transparent text-[var(--color-primary)]",
      hover: "bg-[var(--color-neutral-100)]",
      active: "scale-95",
    },
    outline: {
      base: "bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)]",
      hover: "bg-[var(--color-neutral-100)]",
      active: "scale-95",
    },
    destructive: {
      base: "bg-[var(--color-danger)] text-[var(--color-neutral-0)] shadow-[var(--shadow-soft)]",
      hover: "bg-[var(--color-danger-hover)]",
      active: "scale-95",
    },
    social: {
      base: "bg-[var(--color-neutral-100)] border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)]",
      hover: "bg-[var(--color-neutral-200)]",
      active: "scale-95",
    },
    "icon-square": {
      base: "bg-[var(--color-neutral-200)] text-[var(--color-neutral-600)]",
      hover: "bg-[var(--color-neutral-300)]",
      active: "scale-95",
    },
    "icon-circle": {
      base: "bg-[var(--color-neutral-200)] text-[var(--color-neutral-600)]",
      hover: "bg-[var(--color-neutral-300)]",
      active: "scale-95",
    },
  }

  const current = variants[variant] || variants.primary
  const sizeClass = isIconSquare ? baseIconSquare : isIconCircle ? baseIconCircle : baseRect

  let computed = `${base} ${sizeClass} ${current.base}`.trim()

  if (!isDisabled && !isLoading) {
    if (isHover) computed += ` ${current.hover}`
    if (isActive) computed += ` ${current.active}`
  }

  if (isDisabled) {
    computed += " opacity-50 cursor-not-allowed pointer-events-none"
  }

  if (isLoading) {
    computed += " cursor-wait pointer-events-none"
  }

  return computed
}

export default function Button({
  variant = "primary",
  size = "md",
  forcedState = "default",
  children = "Button",
}) {
  const isLoading = forcedState === "loading"
  const isDisabled = forcedState === "disabled"
  const isIconSquare = variant === "icon-square"
  const isIconCircle = variant === "icon-circle"
  const isIconOnly = isIconSquare || isIconCircle

  const computed = getButtonClasses({ variant, size, forcedState })

  const content =
    isLoading
      ? null
      : variant === "outline-cyan" && children === "Button"
        ? "HOVER ME"
        : variant === "primary" && children === "Button"
          ? "Add to Cart"
          : variant === "secondary" && children === "Button"
            ? "Dismiss"
            : isIconSquare && children === "Button"
              ? "×"
              : isIconCircle && children === "Button"
                ? "♥"
                : children

  return (
    <button disabled={isDisabled || isLoading} className={computed}>
      <span className={isLoading ? "opacity-0" : "opacity-100"}>{content}</span>

      {isLoading && (
        <div className="absolute">
          <Loader size={18} />
        </div>
      )}
    </button>
  )
}
