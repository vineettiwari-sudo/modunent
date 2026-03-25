import { cn } from "../../utils"

export interface QuantityCompactProps {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  disabled?: boolean
  className?: string
}

export function QuantityCompact({
  value,
  min,
  max,
  onChange,
  disabled = false,
  className,
}: QuantityCompactProps) {
  const canDec = value > min && !disabled
  const canInc = value < max && !disabled

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden",
        className
      )}
    >
      <button
        type="button"
        disabled={!canDec}
        onClick={() => canDec && onChange(value - 1)}
        aria-label="Decrease"
        className={cn(
          "h-[24px] w-[24px] flex items-center justify-center text-foreground border-r border-border text-xs",
          "hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
          !canDec && "opacity-50 cursor-not-allowed"
        )}
      >
        −
      </button>
      <span className="h-[24px] min-w-[24px] flex items-center justify-center text-xs font-medium text-foreground px-1" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        disabled={!canInc}
        onClick={() => canInc && onChange(value + 1)}
        aria-label="Increase"
        className={cn(
          "h-[24px] w-[24px] flex items-center justify-center text-foreground text-xs",
          "hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
          !canInc && "opacity-50 cursor-not-allowed"
        )}
      >
        +
      </button>
    </div>
  )
}
