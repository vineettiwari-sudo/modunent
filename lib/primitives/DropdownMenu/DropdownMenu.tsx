import type { ReactNode } from "react"
import { createContext, useContext, useState, useRef, useEffect } from "react"
import { cn } from "../../utils"

export interface DropdownMenuContextValue {
  open: boolean
  setOpen: (v: boolean) => void
}

const DropdownContext = createContext<DropdownMenuContextValue | null>(null)

function useDropdown() {
  const ctx = useContext(DropdownContext)
  if (!ctx) throw new Error("Dropdown components must be used within DropdownMenu")
  return ctx
}

export interface DropdownMenuProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
  className?: string
}

export function DropdownMenu({
  open: controlledOpen,
  onOpenChange,
  children,
  className,
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolled] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = (v: boolean) => {
    if (!isControlled) setUncontrolled(v)
    onOpenChange?.(v)
  }

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative inline-block", className)}>{children}</div>
    </DropdownContext.Provider>
  )
}

export interface DropdownMenuTriggerProps {
  children: ReactNode
  className?: string
}

export function DropdownMenuTrigger({ children, className }: DropdownMenuTriggerProps) {
  const { open, setOpen } = useDropdown()
  return (
    <div
      data-dropdown-trigger
      className={cn("inline-block", className)}
      onClick={() => setOpen(!open)}
    >
      {children}
    </div>
  )
}

export interface DropdownMenuContentProps {
  children: ReactNode
  className?: string
  align?: "start" | "end" | "center"
}

export function DropdownMenuContent({
  children,
  className,
  align = "start",
}: DropdownMenuContentProps) {
  const { open, setOpen } = useDropdown()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      const content = ref.current
      if (!content) return
      const root = content.closest(".relative")
      const trigger = root?.querySelector("[data-dropdown-trigger]")
      if (content.contains(e.target as Node) || (trigger && (trigger as HTMLElement).contains(e.target as Node))) return
      setOpen(false)
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, setOpen])

  if (!open) return null

  const alignClasses = {
    start: "left-0",
    end: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }

  return (
    <div
      ref={ref}
      role="menu"
      className={cn(
        "absolute z-50 mt-2 min-w-[160px] rounded-[var(--radius-md)] border border-border bg-surface shadow-lg py-1",
        "transition-all duration-200 opacity-100",
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  )
}

export interface DropdownMenuItemProps {
  children: ReactNode
  disabled?: boolean
  onSelect?: () => void
  className?: string
}

export function DropdownMenuItem({
  children,
  disabled = false,
  onSelect,
  className,
}: DropdownMenuItemProps) {
  const { setOpen } = useDropdown()

  return (
    <div
      role="menuitem"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        "px-4 py-2 text-sm text-foreground cursor-pointer transition-colors duration-150",
        "hover:bg-muted/50 focus:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      onClick={() => {
        if (!disabled) {
          onSelect?.()
          setOpen(false)
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          if (!disabled) {
            onSelect?.()
            setOpen(false)
          }
        }
      }}
    >
      {children}
    </div>
  )
}
