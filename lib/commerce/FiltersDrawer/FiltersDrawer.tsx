import type { ReactNode } from "react"
import { useEffect } from "react"
import { cn } from "../../utils"

export interface FiltersDrawerProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

export function FiltersDrawer({
  open,
  onClose,
  children,
  title = "Filters",
  className,
}: FiltersDrawerProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-full max-w-sm bg-surface border-l border-border shadow-lg flex flex-col animate-[slide-in-right_0.25s_ease-out]",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="h-[36px] w-[36px] flex items-center justify-center rounded-[var(--radius-md)] text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  )
}
