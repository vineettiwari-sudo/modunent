import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface TrustBadgeItem {
  id: string
  icon?: ReactNode
  label: string
}

export interface TrustBadgesRowProps {
  badges: TrustBadgeItem[]
  className?: string
}

export function TrustBadgesRow({ badges, className }: TrustBadgesRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 text-sm text-foreground",
        className
      )}
    >
      {badges.map((b) => (
        <span key={b.id} className="inline-flex items-center gap-2">
          {b.icon}
          <span>{b.label}</span>
        </span>
      ))}
    </div>
  )
}
