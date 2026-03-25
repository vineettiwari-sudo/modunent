import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface GuaranteeBlockProps {
  title: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function GuaranteeBlock({ title, description, icon, className }: GuaranteeBlockProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-border bg-surface p-4 flex gap-3",
        className
      )}
    >
      {icon && (
        <div className="h-[36px] w-[36px] shrink-0 flex items-center justify-center text-foreground">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {description && <p className="mt-0.5 text-sm text-muted">{description}</p>}
      </div>
    </div>
  )
}
