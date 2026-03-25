import { cn } from "../../utils"

export type UrgencyCalloutVariant = "default" | "warning" | "error" | "success"

export interface UrgencyCalloutProps {
  message: string
  variant?: UrgencyCalloutVariant
  pulse?: boolean
  className?: string
}

const variantClasses: Record<UrgencyCalloutVariant, string> = {
  default: "bg-muted text-foreground",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
}

export function UrgencyCallout({
  message,
  variant = "default",
  pulse = false,
  className,
}: UrgencyCalloutProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-opacity duration-200",
        variantClasses[variant],
        pulse && "animate-[urgency-pulse_2s_ease-in-out_infinite]",
        className
      )}
    >
      {message}
    </span>
  )
}
