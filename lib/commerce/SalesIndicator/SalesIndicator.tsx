import { cn } from "../../utils"

export interface SalesIndicatorProps {
  label: string
  variant?: "default" | "urgent"
  className?: string
}

export function SalesIndicator({ label, variant = "default", className }: SalesIndicatorProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium",
        variant === "urgent" && "bg-red-500/20 text-red-600 dark:text-red-400",
        variant === "default" && "bg-primary/10 text-foreground",
        className
      )}
    >
      {label}
    </span>
  )
}
