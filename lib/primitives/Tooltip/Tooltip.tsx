import type { ReactNode } from "react"
import { useState } from "react"
import { cn } from "../../utils"

export type TooltipPlacement = "top" | "bottom" | "left" | "right"

export interface TooltipProps {
  children: ReactNode
  content: ReactNode
  side?: TooltipPlacement
  className?: string
  contentClassName?: string
}

const positionClasses: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
}

const enterTranslate: Record<TooltipPlacement, string> = {
  top: "translate-y-1",
  bottom: "-translate-y-1",
  left: "translate-x-1",
  right: "-translate-x-1",
}

export function Tooltip({
  children,
  content,
  side = "top",
  className,
  contentClassName,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <span
        role="tooltip"
        className={cn(
          "absolute z-50 px-2 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium",
          "bg-foreground text-primary-foreground whitespace-nowrap",
          "transition-all duration-200 ease-out",
          positionClasses[side],
          visible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 pointer-events-none",
          !visible && enterTranslate[side],
          contentClassName
        )}
      >
        {content}
      </span>
    </span>
  )
}
