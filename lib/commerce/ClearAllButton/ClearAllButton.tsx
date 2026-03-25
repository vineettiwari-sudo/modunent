import { cn } from "../../utils"

export interface ClearAllButtonProps {
  onClick: () => void
  visible?: boolean
  compact?: boolean
  className?: string
}

export function ClearAllButton({
  onClick,
  visible = true,
  compact = false,
  className,
}: ClearAllButtonProps) {
  if (!visible) return null

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-sm text-muted-foreground hover:text-foreground underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded",
        compact ? "px-2 py-1" : "h-[36px] px-3",
        className
      )}
    >
      Clear all
    </button>
  )
}
