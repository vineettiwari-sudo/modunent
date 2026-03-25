import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "../../utils"

export type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "dot"
  | "numeric"
  | "label"
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "highlight"

export type BadgeSize = "sm" | "md" | "lg"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  count?: number
  icon?: ReactNode
}

const semanticVariantClasses: Record<string, string> = {
  neutral: "bg-surface text-foreground border border-border",
  success: "bg-green-100 text-green-800 border-transparent dark:bg-green-900/30 dark:text-green-400",
  warning: "bg-amber-100 text-amber-800 border-transparent dark:bg-amber-900/30 dark:text-amber-400",
  error: "bg-red-100 text-red-800 border-transparent dark:bg-red-900/30 dark:text-red-400",
  highlight: "bg-blue-100 text-blue-800 border-transparent dark:bg-blue-900/30 dark:text-blue-400",
  default: "bg-primary text-primary-foreground border-transparent",
  secondary: "bg-elevated text-foreground border border-border",
  outline: "bg-transparent text-foreground border border-border",
  dot: "bg-elevated text-foreground border border-border gap-1.5",
  numeric: "bg-primary text-primary-foreground min-w-[20px] justify-center border-transparent",
  label: "bg-elevated text-foreground border border-border",
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: "h-[20px] min-h-[20px] px-1.5 text-[10px]",
  md: "h-[24px] min-h-[24px] px-2 text-xs",
  lg: "h-[28px] min-h-[28px] px-2.5 text-sm",
}

export function Badge({
  variant = "default",
  size = "md",
  count,
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const variantClass = semanticVariantClasses[variant] ?? semanticVariantClasses.default

  if (variant === "dot") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 font-medium",
          variantClass,
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden />
        {children}
      </span>
    )
  }
  if (variant === "numeric" && count != null) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-sm)] px-1.5 py-0.5 font-medium tabular-nums",
          variantClass,
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {count > 99 ? "99+" : count}
      </span>
    )
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] py-0.5 font-medium",
        variantClass,
        sizeClasses[size],
        icon && "pl-2",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="shrink-0 [&>svg]:w-3 [&>svg]:h-3 flex items-center" aria-hidden>
          {icon}
        </span>
      )}
      {children}
    </span>
  )
}
