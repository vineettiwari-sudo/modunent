import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface TrustBadge {
  id: string
  icon?: ReactNode
  label: string
}

export interface TrustBadgeRowProps {
  badges: TrustBadge[]
  className?: string
}

export function TrustBadgeRow({ badges, className }: TrustBadgeRowProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6 text-sm text-foreground", className)}>
      {badges.map((b) => (
        <span key={b.id} className="inline-flex items-center gap-2">
          {b.icon}
          <span>{b.label}</span>
        </span>
      ))}
    </div>
  )
}
