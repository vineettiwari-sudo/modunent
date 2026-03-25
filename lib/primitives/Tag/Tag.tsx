import type { ReactNode } from "react"
import { cn } from "../../utils"

export type TagVariant = "default" | "removable" | "colored" | "selectable" | "outline" | "filled"
export type TagSize = "default" | "compact"

export interface TagProps {
  children: React.ReactNode
  variant?: TagVariant
  size?: TagSize
  color?: "primary" | "green" | "amber" | "red"
  selected?: boolean
  onRemove?: () => void
  onSelect?: () => void
  disabled?: boolean
  icon?: ReactNode
  className?: string
}

export function Tag({
  children,
  variant = "default",
  size = "default",
  color,
  selected = false,
  onRemove,
  onSelect,
  disabled = false,
  icon,
  className,
}: TagProps) {
  const isSelectable = variant === "selectable" && onSelect != null
  const isRemovable = variant === "removable" && onRemove != null
  const isOutline = variant === "outline"
  const isFilled = variant === "filled"
  const isCompact = size === "compact"

  const colorClass =
    variant === "colored" && color
      ? color === "primary"
        ? "bg-primary/15 text-primary border-border"
        : color === "green"
        ? "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30"
        : color === "amber"
        ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
        : color === "red"
        ? "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30"
        : "bg-elevated text-foreground border-border"
      : isOutline
      ? "bg-surface text-foreground border-border"
      : isFilled
      ? "bg-elevated text-foreground border-border"
      : "bg-elevated text-foreground border-border"

  const rootClass = cn(
    "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border px-2 py-0.5 text-xs font-medium transition-colors duration-200",
    isCompact ? "h-[28px] min-h-[28px]" : "h-[36px] min-h-[36px]",
    colorClass,
    isSelectable && "cursor-pointer hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:opacity-90",
    isSelectable && selected && "bg-foreground text-surface border-foreground",
    disabled && "opacity-50 cursor-not-allowed",
    className
  )

  const content = (
    <>
      {icon && <span className="shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 flex items-center">{icon}</span>}
      {children}
      {isRemovable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          disabled={disabled}
          className="ml-0.5 -mr-0.5 p-0.5 rounded hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Remove"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </>
  )

  if (isSelectable) {
    return (
      <button type="button" className={rootClass} onClick={onSelect} disabled={disabled}>
        {content}
      </button>
    )
  }

  return <span className={rootClass}>{content}</span>
}
