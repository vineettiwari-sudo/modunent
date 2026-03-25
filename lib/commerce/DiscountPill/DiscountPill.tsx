import type { ReactNode } from "react"
import { cn } from "../../utils"

export type DiscountPillVariant =
  | "percent"
  | "flat"
  | "limited"
  | "bogo"
  | "member"
  | "outline"
  | "highlight"

export type DiscountPillSize = "sm" | "md" | "lg"

export interface DiscountPillProps {
  variant?: DiscountPillVariant
  size?: DiscountPillSize
  value?: string | number
  label?: string
  disabled?: boolean
  expired?: boolean
  icon?: ReactNode
  className?: string
}

const variantClasses: Record<DiscountPillVariant, string> = {
  percent: "bg-red-600 text-[#e7e3e4] border-transparent dark:bg-red-500",
  flat: "bg-amber-500 text-[#e7e3e4] border-transparent dark:bg-amber-400",
  limited: "bg-primary text-primary-foreground border-transparent",
  bogo: "bg-green-600 text-[#e7e3e4] border-transparent dark:bg-green-500",
  member: "bg-purple-600 text-[#e7e3e4] border-transparent dark:bg-purple-500",
  outline: "bg-surface text-red-600 dark:text-red-400 border-2 border-red-500 dark:border-red-400",
  highlight: "bg-amber-200 text-foreground border-transparent dark:bg-amber-900/50 dark:text-foreground",
}

const sizeClasses: Record<DiscountPillSize, string> = {
  sm: "h-[28px] min-h-[28px] px-2 text-[10px]",
  md: "h-[36px] min-h-[36px] px-2.5 text-xs",
  lg: "h-[44px] min-h-[44px] px-3 text-sm",
}

function getDisplayText(
  variant: DiscountPillVariant,
  value: string | number | undefined,
  label: string | undefined
): string {
  switch (variant) {
    case "percent":
      return value != null ? `${value}% OFF` : "20% OFF"
    case "flat":
      return value != null ? `$${value} OFF` : "$10 OFF"
    case "limited":
      return label ?? "Limited time"
    case "bogo":
      return label ?? "Buy 1 Get 1"
    case "member":
      return label ?? "Member Save 10%"
    case "outline":
      return value != null ? `${value}% OFF` : "20% OFF"
    case "highlight":
      return label ?? "Sale Today Only"
    default:
      return ""
  }
}

export function DiscountPill({
  variant = "percent",
  size = "md",
  value,
  label,
  disabled = false,
  expired = false,
  icon,
  className,
}: DiscountPillProps) {
  const display = getDisplayText(variant, value, label)

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        "focus-within:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        disabled && "opacity-50 cursor-not-allowed",
        expired && "opacity-60 grayscale saturate-50",
        !disabled && !expired && variant !== "outline" && variant !== "highlight" && "hover:opacity-90 active:opacity-95",
        className
      )}
      aria-disabled={disabled}
    >
      {icon && (
        <span className="shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 flex items-center" aria-hidden>
          {icon}
        </span>
      )}
      {display}
    </span>
  )
}
