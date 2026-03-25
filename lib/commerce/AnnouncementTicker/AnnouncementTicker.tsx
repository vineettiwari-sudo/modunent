import type { ReactNode } from "react"
import { useState } from "react"
import { cn } from "../../utils"

export interface AnnouncementTickerItem {
  id: string
  content: ReactNode
}

export interface AnnouncementTickerProps {
  items: AnnouncementTickerItem[]
  separator?: ReactNode
  className?: string
}

export function AnnouncementTicker({
  items,
  separator,
  className,
}: AnnouncementTickerProps) {
  const [paused, setPaused] = useState(false)
  const duplicated = [...items, ...items]

  return (
    <div
      className={cn(
        "overflow-hidden py-2 text-sm text-foreground bg-muted/50",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={cn(
          "flex items-center gap-6 whitespace-nowrap",
          !paused && "animate-[ticker-scroll_25s_linear_infinite]"
        )}
        style={{ width: "max-content" }}
      >
        {duplicated.map((item, i) => (
          <span key={`${item.id}-${i}`} className="inline-flex items-center gap-6">
            <span className="inline-block">{item.content}</span>
            {separator != null && i < duplicated.length - 1 ? (
              <span className="text-muted-foreground shrink-0" aria-hidden>
                {separator}
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  )
}
