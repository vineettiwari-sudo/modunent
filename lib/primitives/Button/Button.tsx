import type { ButtonHTMLAttributes } from "react"
import { cn } from "../../utils"
import { Spinner } from "../Spinner"

export type ButtonSize = "sm" | "md" | "lg"
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "destructive"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:opacity-90 hover:shadow focus:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:opacity-95",
  secondary:
    "bg-elevated text-foreground border border-border hover:bg-muted/50 focus:ring-border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:bg-muted/70",
  ghost:
    "bg-transparent text-foreground hover:bg-muted/50 focus:ring-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:bg-muted/70",
  outline:
    "bg-transparent text-foreground border-2 border-border hover:bg-muted/30 focus:ring-border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:bg-muted/50",
  destructive:
    "bg-red-600 text-[#e7e3e4] shadow-sm hover:bg-red-700 hover:shadow focus:ring-red-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:bg-red-800",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[24px] px-3 text-xs",
  md: "h-[36px] px-4 text-sm",
  lg: "h-[44px] px-6 text-base",
}

const spinnerSize: Record<ButtonSize, "sm" | "md" | "lg"> = {
  sm: "sm",
  md: "sm",
  lg: "md",
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"

export function getButtonClasses(opts: {
  variant?: ButtonVariant
  size?: ButtonSize
}) {
  const { variant = "primary", size = "md" } = opts
  return cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant]
  )
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      className={cn(
        getButtonClasses({ variant, size }),
        loading && "cursor-wait",
        loading && size === "sm" && "min-w-[24px]",
        loading && size === "md" && "min-w-[36px]",
        loading && size === "lg" && "min-w-[44px]",
        className
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <Spinner size={spinnerSize[size]} className="shrink-0" aria-hidden />
      ) : (
        children
      )}
    </button>
  )
}
