import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
  className?: string
}

export function Breadcrumb({
  items,
  separator = "/",
  className,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center flex-wrap gap-1.5 text-sm", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-muted select-none" aria-hidden>
                {separator}
              </span>
            )}
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm"
              >
                {item.label}
              </a>
            ) : (
              <span className={cn(isLast && "font-medium text-foreground", !isLast && "text-muted")}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
