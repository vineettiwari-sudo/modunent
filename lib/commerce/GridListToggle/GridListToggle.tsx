import { cn } from "../../utils"

export type ViewMode = "grid" | "list"

export interface GridListToggleProps {
  value: ViewMode
  onChange: (value: ViewMode) => void
  className?: string
}

export function GridListToggle({ value, onChange, className }: GridListToggleProps) {
  return (
    <div className={cn("inline-flex rounded-[var(--radius-md)] border border-border bg-surface p-0.5", className)} role="group" aria-label="View mode">
      <button
        type="button"
        onClick={() => onChange("grid")}
        aria-pressed={value === "grid"}
        aria-label="Grid view"
        className={cn(
          "h-[36px] w-[36px] rounded-[6px] flex items-center justify-center text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
          value === "grid" ? "bg-elevated" : "hover:bg-muted/50"
        )}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => onChange("list")}
        aria-pressed={value === "list"}
        aria-label="List view"
        className={cn(
          "h-[36px] w-[36px] rounded-[6px] flex items-center justify-center text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
          value === "list" ? "bg-elevated" : "hover:bg-muted/50"
        )}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
