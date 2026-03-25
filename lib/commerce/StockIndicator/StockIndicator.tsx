import { cn } from "../../utils"

export type StockLevel = "in_stock" | "low_stock" | "out_of_stock"

export interface StockIndicatorProps {
  level: StockLevel
  count?: number
  lowThreshold?: number
  className?: string
}

export function StockIndicator({
  level,
  count,
  lowThreshold = 5,
  className,
}: StockIndicatorProps) {
  const isLow = level === "low_stock" || (count != null && count > 0 && count <= lowThreshold)
  const isOut = level === "out_of_stock" || (count != null && count === 0)

  const label = isOut
    ? "Out of stock"
    : isLow
    ? count != null
      ? `Only ${count} left`
      : "Low stock"
    : "In stock"

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-sm",
        isOut && "text-muted",
        isLow && !isOut && "text-amber-600 dark:text-amber-400",
        !isLow && !isOut && "text-foreground",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full shrink-0",
          isOut && "bg-muted",
          isLow && !isOut && "bg-amber-500",
          !isLow && !isOut && "bg-green-500"
        )}
        aria-hidden
      />
      {label}
    </span>
  )
}
