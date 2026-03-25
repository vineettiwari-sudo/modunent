import { cn } from "../../utils"

export interface DividerProps {
  orientation?: "horizontal" | "vertical"
  label?: string
  className?: string
}

export function Divider({
  orientation = "horizontal",
  label,
  className,
}: DividerProps) {
  if (label && orientation === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3 w-full", className)}>
        <span className="flex-1 border-t border-border" />
        <span className="text-sm text-muted shrink-0">{label}</span>
        <span className="flex-1 border-t border-border" />
      </div>
    )
  }

  return (
    <hr
      className={cn(
        "border-0 border-border bg-border",
        orientation === "horizontal" && "h-px w-full border-t",
        orientation === "vertical" && "w-px h-full border-l self-stretch",
        className
      )}
    />
  )
}
