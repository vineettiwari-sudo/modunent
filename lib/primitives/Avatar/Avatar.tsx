import type { ReactNode } from "react"
import { cn } from "../../utils"

export type AvatarSize = "sm" | "md" | "lg"

export interface AvatarProps {
  src?: string | null
  alt?: string
  fallback?: ReactNode
  size?: AvatarSize
  className?: string
}

const sizeClasses = {
  sm: "h-[24px] w-[24px] text-xs",
  md: "h-[36px] w-[36px] text-sm",
  lg: "h-[44px] w-[44px] text-base",
}

export function Avatar({ src, alt = "", fallback, size = "md", className }: AvatarProps) {
  const showImg = src && src.length > 0

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-foreground font-medium",
        sizeClasses[size],
        className
      )}
      role="img"
      aria-label={alt || undefined}
    >
      {showImg ? (
        <img src={src!} alt={alt} className="h-full w-full object-cover" />
      ) : (
        fallback ?? <span className="leading-none">?</span>
      )}
    </span>
  )
}
