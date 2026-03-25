import type { ReactNode } from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../utils"

export type OfferCalloutVariant = "simple" | "collapsible" | "bordered"

export interface OfferCalloutProps {
  variant?: OfferCalloutVariant
  title: string
  children?: ReactNode
  defaultOpen?: boolean
  className?: string
}

export function OfferCallout({
  variant = "simple",
  title,
  children,
  defaultOpen = true,
  className,
}: OfferCalloutProps) {
  const [open, setOpen] = useState(defaultOpen)

  if (variant === "bordered") {
    return (
      <div
        className={cn(
          "rounded-[var(--radius-md)] border-2 border-amber-500/50 bg-amber-500/5 px-4 py-3 text-sm text-foreground",
          className
        )}
      >
        <p className="font-medium">{title}</p>
        {children && <div className="mt-1">{children}</div>}
      </div>
    )
  }
  if (variant === "collapsible") {
    return (
      <div className={cn("rounded-[var(--radius-md)] border border-border bg-elevated overflow-hidden", className)}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
        >
          {title}
          <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", open && "rotate-180")} />
        </button>
        <div className={cn("overflow-hidden transition-[height] duration-200 ease-in-out", open ? "max-h-[200px]" : "max-h-0")}>
          <div className="px-4 pb-3 text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    )
  }
  return (
    <div className={cn("rounded-[var(--radius-md)] bg-elevated px-4 py-3 text-sm text-foreground", className)}>
      <p className="font-medium">{title}</p>
      {children && <div className="mt-1 text-muted-foreground">{children}</div>}
    </div>
  )
}
