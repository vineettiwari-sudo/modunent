import type { ButtonHTMLAttributes } from "react"
import type { ButtonSize } from "../Button/Button"
import { cn } from "../../utils"

export type IconButtonShape = "circle" | "square"

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: ButtonSize
  shape?: IconButtonShape
  "aria-label": string
}

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary",
  secondary:
    "bg-elevated text-foreground border border-border hover:bg-muted/50 focus:ring-border",
  ghost: "bg-transparent text-foreground hover:bg-muted/50 focus:ring-muted",
  outline:
    "bg-transparent text-foreground border-2 border-border hover:bg-muted/30 focus:ring-border",
} as const

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[24px] w-[24px] p-0",
  md: "h-[36px] w-[36px] p-0",
  lg: "h-[44px] w-[44px] p-0",
}

const shapeClasses: Record<IconButtonShape, string> = {
  circle: "rounded-full",
  square: "rounded-md",
}

export const ICON_SIZE_PX: Record<ButtonSize, number> = {
  sm: 12,
  md: 16,
  lg: 18,
}

const baseClasses =
  "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface active:scale-95"

export function getIconButtonClasses(opts: {
  variant?: keyof typeof variantClasses
  size?: ButtonSize
  shape?: IconButtonShape
}) {
  const { variant = "primary", size = "md", shape = "square" } = opts
  return cn(
    baseClasses,
    sizeClasses[size],
    shapeClasses[shape],
    variantClasses[variant]
  )
}

export function IconButton({
  variant = "primary",
  size = "md",
  shape = "square",
  className,
  disabled,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        getIconButtonClasses({ variant, size, shape }),
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
