import type { ReactNode } from "react"
import { cn } from "../../utils"
import { Avatar } from "../Avatar"

export type AvatarSize = "sm" | "md" | "lg"

export interface AvatarGroupItem {
  src?: string | null
  alt?: string
  fallback?: ReactNode
}

export interface AvatarGroupProps {
  items: AvatarGroupItem[]
  max?: number
  size?: AvatarSize
  className?: string
}

export function AvatarGroup({ items, max = 4, size = "md", className }: AvatarGroupProps) {
  const visible = items.slice(0, max)
  const overflow = items.length - max

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visible.map((item, i) => (
        <span
          key={i}
          className="rounded-full border-2 border-surface overflow-hidden shrink-0"
        >
          <Avatar
            src={item.src}
            alt={item.alt}
            fallback={item.fallback}
            size={size}
          />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full border-2 border-surface bg-muted text-foreground font-medium",
            size === "sm" && "h-[24px] w-[24px] min-w-[24px] text-xs",
            size === "md" && "h-[36px] w-[36px] min-w-[36px] text-sm",
            size === "lg" && "h-[44px] w-[44px] min-w-[44px] text-base"
          )}
        >
          +{overflow}
        </span>
      )}
    </div>
  )
}
