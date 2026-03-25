import type { HTMLAttributes } from "react"
import { useState } from "react"
import { cn } from "../../utils"

export type AlertVariant = "success" | "error" | "warning" | "info" | "default"

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  dismissible?: boolean
  onDismiss?: () => void
}

const variantClasses: Record<AlertVariant, string> = {
  default: "bg-elevated border-border text-foreground",
  success: "bg-green-500/10 border-green-500/30 text-foreground",
  error: "bg-red-500/10 border-red-500/30 text-foreground",
  warning: "bg-amber-500/10 border-amber-500/30 text-foreground",
  info: "bg-primary/10 border-primary/30 text-foreground",
}

export function Alert({
  variant = "default",
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  if (!visible) return null

  return (
    <div
      role="alert"
      className={cn(
        "rounded-[var(--radius-md)] border px-4 py-3 text-sm transition-opacity duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">{children}</div>
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className="shrink-0 p-1 rounded-md text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Dismiss"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
