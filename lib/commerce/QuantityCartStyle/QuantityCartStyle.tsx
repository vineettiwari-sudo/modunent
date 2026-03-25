import { cn } from "../../utils"

export interface QuantityCartStyleProps {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  disabled?: boolean
  className?: string
}

export function QuantityCartStyle({
  value,
  min,
  max,
  onChange,
  disabled = false,
  className,
}: QuantityCartStyleProps) {
  const canDec = value > min && !disabled
  const canInc = value < max && !disabled

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden h-[36px]",
        className
      )}
    >
      <button
        type="button"
        disabled={!canDec}
        onClick={() => canDec && onChange(value - 1)}
        aria-label="Decrease"
        className={cn(
          "h-[36px] w-[36px] flex items-center justify-center text-foreground border-r border-border",
          "hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
          !canDec && "opacity-50 cursor-not-allowed"
        )}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <span className="h-[36px] min-w-[44px] flex items-center justify-center text-sm font-medium text-foreground" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        disabled={!canInc}
        onClick={() => canInc && onChange(value + 1)}
        aria-label="Increase"
        className={cn(
          "h-[36px] w-[36px] flex items-center justify-center text-foreground",
          "hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
          !canInc && "opacity-50 cursor-not-allowed"
        )}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}
