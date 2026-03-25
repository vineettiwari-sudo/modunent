import { cn } from "../../utils"

export interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const canPrev = page > 1
  const canNext = page < totalPages

  const getVisiblePages = () => {
    const delta = 1
    const range: number[] = []
    const rangeWithDots: (number | "ellipsis")[] = []
    const left = page - delta
    const right = page + delta
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        range.push(i)
      }
    }
    let l: number | null = null
    for (const i of range) {
      if (l !== null && i - l > 1) rangeWithDots.push("ellipsis")
      rangeWithDots.push(i)
      l = i
    }
    return rangeWithDots
  }

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("inline-flex items-center gap-1", className)}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={!canPrev}
        onClick={() => canPrev && onPageChange(page - 1)}
        className={cn(
          "inline-flex items-center justify-center h-[36px] w-[36px] rounded-[var(--radius-md)] text-sm font-medium",
          "text-foreground border border-border bg-surface",
          "hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface transition-colors",
          !canPrev && "opacity-50 cursor-not-allowed"
        )}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex items-center gap-1">
        {getVisiblePages().map((p, i) =>
          p === "ellipsis" ? (
            <span key={`ellipsis-${i}`} className="px-2 text-muted" aria-hidden>
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              onClick={() => onPageChange(p)}
              className={cn(
                "min-w-[36px] h-[36px] px-3 rounded-[var(--radius-md)] text-sm font-medium transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                p === page
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground border border-border bg-surface hover:bg-muted/50"
              )}
            >
              {p}
            </button>
          )
        )}
      </div>
      <button
        type="button"
        aria-label="Next page"
        disabled={!canNext}
        onClick={() => canNext && onPageChange(page + 1)}
        className={cn(
          "inline-flex items-center justify-center h-[36px] w-[36px] rounded-[var(--radius-md)] text-sm font-medium",
          "text-foreground border border-border bg-surface",
          "hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface transition-colors",
          !canNext && "opacity-50 cursor-not-allowed"
        )}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  )
}
