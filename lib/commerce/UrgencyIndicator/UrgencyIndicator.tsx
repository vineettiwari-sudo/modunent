import { cn } from "../../utils"

export interface UrgencyIndicatorProps {
  message: string
  variant?: "default" | "warning"
  className?: string
}

export function UrgencyIndicator({
  message,
  variant = "default",
  className,
}: UrgencyIndicatorProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium transition-colors",
        variant === "warning" ? "text-amber-600 dark:text-amber-400" : "text-foreground",
        className
      )}
    >
      {message}
    </p>
  )
}
