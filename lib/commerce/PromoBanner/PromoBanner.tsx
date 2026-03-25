import type { ReactNode } from "react"
import { useState } from "react"
import { cn } from "../../utils"

export interface PromoBannerProps {
  title: string
  description?: string
  cta?: { label: string; href?: string; onClick?: () => void }
  dismissible?: boolean
  onDismiss?: () => void
  variant?: "default" | "highlight"
  className?: string
  children?: ReactNode
}

export function PromoBanner({
  title,
  description,
  cta,
  dismissible = false,
  onDismiss,
  variant = "default",
  className,
  children,
}: PromoBannerProps) {
  const [visible, setVisible] = useState(true)

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  if (!visible) return null

  const CtaButton = cta?.href ? (
    <a
      href={cta.href}
      className="inline-flex items-center justify-center h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {cta.label}
    </a>
  ) : cta?.onClick ? (
    <button
      type="button"
      onClick={cta.onClick}
      className="inline-flex items-center justify-center h-[36px] px-4 rounded-[var(--radius-md)] text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {cta.label}
    </button>
  ) : null

  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-border p-4",
        variant === "highlight" && "bg-primary/5 border-primary/20",
        variant === "default" && "bg-surface",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {description && <p className="mt-1 text-sm text-muted">{description}</p>}
          {children}
          {cta && <div className="mt-3">{CtaButton}</div>}
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className="h-[36px] w-[36px] shrink-0 flex items-center justify-center rounded-[var(--radius-md)] text-muted hover:text-foreground hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Dismiss"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
