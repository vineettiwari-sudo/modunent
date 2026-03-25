import { cn } from "../../utils"

export interface WishlistToggleProps {
  active?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
  "aria-label"?: string
}

export function WishlistToggle({
  active = false,
  onClick,
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: WishlistToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? (active ? "Remove from wishlist" : "Add to wishlist")}
      className={cn(
        "inline-flex items-center justify-center h-[36px] w-[36px] rounded-full border border-border bg-surface text-foreground",
        "hover:bg-elevated transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        active && "border-primary/50 text-primary",
        className
      )}
    >
      {active ? (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )}
    </button>
  )
}
