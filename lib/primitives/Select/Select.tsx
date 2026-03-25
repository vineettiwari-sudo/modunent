import type { SelectHTMLAttributes } from "react"
import { cn } from "../../utils"

export type SelectSize = "sm" | "md" | "lg"

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  size?: SelectSize
}

const heightClasses: Record<SelectSize, string> = {
  sm: "h-[24px] min-h-[24px]",
  md: "h-[36px] min-h-[36px]",
  lg: "h-[44px] min-h-[44px]",
}

const textClasses: Record<SelectSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
}

export function Select({
  size = "md",
  className,
  disabled,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        "w-full border border-border bg-surface text-foreground px-4 rounded-[var(--radius-md)]",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "appearance-none bg-no-repeat bg-[length:1rem] bg-[right_0.5rem_center]",
        heightClasses[size],
        textClasses[size],
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </select>
  )
}
