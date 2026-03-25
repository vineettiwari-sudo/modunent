import type { ReactNode } from "react"
import { useState } from "react"
import { cn } from "../../utils"

export interface AnnouncementBarProps {
  message: string
  link?: { href: string; label: string }
  dismissible?: boolean
  onDismiss?: () => void
  variant?: "default" | "accent" | "success" | "error" | "promo"
  countdown?: ReactNode
  className?: string
}

export function AnnouncementBar({
  message,
  link,
  dismissible = false,
  onDismiss,
  variant = "default",
  countdown,
  className,
}: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true)

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-2 text-sm text-foreground",
        variant === "accent" && "bg-primary/10 text-primary-foreground",
        variant === "success" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        variant === "error" && "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        variant === "promo" && "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
        (variant === "default" || !variant) && "bg-muted/50 text-foreground",
        className
      )}
      role="banner"
    >
      <span className="flex-1 text-center">{message}</span>
      {countdown && <span className="shrink-0 flex items-center gap-1">{countdown}</span>}
      {link && (
        <a
          href={link.href}
          className="shrink-0 font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          {link.label}
        </a>
      )}
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className="h-[36px] w-[36px] shrink-0 flex items-center justify-center rounded-[var(--radius-md)] text-foreground hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Dismiss"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}
