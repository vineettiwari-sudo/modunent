import type { ReactNode } from "react"
import { cn } from "../../utils"

export type MembershipCalloutVariant = "inline" | "banner" | "badge"

export interface MembershipCalloutProps {
  variant?: MembershipCalloutVariant
  title?: string
  description?: string
  cta?: ReactNode
  className?: string
}

export function MembershipCallout(p: MembershipCalloutProps) {
  const { variant = "inline", title = "Member benefits", description, cta, className } = p
  if (variant === "badge") {
    return (
      <span className={cn("inline-flex rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium", className)}>
        {title}
      </span>
    )
  }
  if (variant === "banner") {
    return (
      <div className={cn("rounded-[var(--radius-md)] border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground", className)}>
        <p className="font-medium">{title}</p>
        {description && <p className="mt-1 text-muted-foreground">{description}</p>}
        {cta && <div className="mt-2">{cta}</div>}
      </div>
    )
  }
  return (
    <div className={cn("inline-flex flex-wrap items-center gap-2 rounded-[var(--radius-md)] bg-muted/50 px-3 py-2 text-sm text-foreground", className)}>
      <span className="font-medium">{title}</span>
      {description && <span className="text-muted-foreground">{description}</span>}
      {cta && <span className="shrink-0">{cta}</span>}
    </div>
  )
}
