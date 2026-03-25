import { cn } from "../../utils"

export interface FilterPill {
  id: string
  label: string
}

export interface ActiveFilterPillsProps {
  pills: FilterPill[]
  onRemove: (id: string) => void
  onClearAll?: () => void
  className?: string
}

export function ActiveFilterPills({
  pills,
  onRemove,
  onClearAll,
  className,
}: ActiveFilterPillsProps) {
  if (pills.length === 0) return null

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {pills.map((p) => (
        <span
          key={p.id}
          className="inline-flex items-center gap-1.5 h-[36px] pl-3 pr-1 rounded-[var(--radius-md)] border border-border bg-surface text-sm text-foreground"
        >
          {p.label}
          <button
            type="button"
            onClick={() => onRemove(p.id)}
            className="p-1.5 rounded-md hover:bg-muted/50 text-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Remove ${p.label}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      ))}
      {onClearAll && (
        <button
          type="button"
          onClick={onClearAll}
          className="h-[36px] px-3 text-sm text-muted hover:text-foreground underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[var(--radius-md)]"
        >
          Clear all
        </button>
      )}
    </div>
  )
}
