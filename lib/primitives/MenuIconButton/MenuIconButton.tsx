import { useState } from "react"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "../../utils"

export interface MenuIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  "aria-label": string
}

const lineClasses = "h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ease-in-out"

export function MenuIconButton({
  open: controlledOpen,
  onOpenChange,
  className,
  "aria-label": ariaLabel,
  onClick,
  ...props
}: MenuIconButtonProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = controlledOpen ?? internalOpen

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (controlledOpen === undefined) setInternalOpen((prev) => !prev)
    onOpenChange?.(!isOpen)
    onClick?.(e)
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "hover:bg-muted active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        "h-11 w-11 min-h-[44px] min-w-[44px]",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="relative flex flex-col justify-center items-center">
        <span className={cn(lineClasses, "absolute", isOpen ? "translate-y-0 rotate-45" : "-translate-y-2")} />
        <span className={cn(lineClasses, isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100")} />
        <span className={cn(lineClasses, "absolute", isOpen ? "translate-y-0 -rotate-45" : "translate-y-2")} />
      </div>
    </button>
  )
}
