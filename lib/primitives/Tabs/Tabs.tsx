import type { ReactNode } from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { cn } from "../../utils"

export type TabsSize = "sm" | "md" | "lg"
export type TabsVariant = "default" | "bordered" | "fill"

const sizeClasses: Record<TabsSize, string> = {
  sm: "text-xs gap-4 pb-1.5",
  md: "text-sm gap-6 pb-2",
  lg: "text-base gap-8 pb-2.5",
}

export interface TabsContextValue {
  value: string
  setValue: (v: string) => void
  size: TabsSize
  variant: TabsVariant
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error("Tabs components must be used within Tabs")
  return ctx
}

export interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  size?: TabsSize
  variant?: TabsVariant
  children: ReactNode
  className?: string
}

export function Tabs({
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  size = "md",
  variant = "default",
  children,
  className,
}: TabsProps) {
  const [uncontrolledValue, setUncontrolled] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = useCallback(
    (v: string) => {
      if (!isControlled) setUncontrolled(v)
      onValueChange?.(v)
    },
    [isControlled, onValueChange]
  )

  return (
    <TabsContext.Provider value={{ value, setValue, size, variant }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export interface TabsListProps {
  children: ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  const { size, variant } = useTabs()
  return (
    <div
      role="tablist"
      className={cn(
        "flex border-b border-border",
        variant === "bordered" && "border border-border rounded-[var(--radius-md)] p-1 bg-elevated border-b-0",
        variant === "fill" && "border-0 gap-1 p-1 bg-elevated rounded-[var(--radius-md)]",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}

export interface TabsTriggerProps {
  value: string
  children: ReactNode
  className?: string
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { value: selected, setValue, size, variant } = useTabs()
  const isSelected = selected === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      data-state={isSelected ? "active" : "inactive"}
      onClick={() => setValue(value)}
      onKeyDown={(e) => {
        const list = e.currentTarget.parentElement
        if (!list) return
        const triggers = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
        const i = triggers.indexOf(e.currentTarget)
        if (e.key === "ArrowRight" && i < triggers.length - 1) {
          e.preventDefault()
          triggers[i + 1].focus()
          setValue(triggers[i + 1].dataset.value ?? "")
        } else if (e.key === "ArrowLeft" && i > 0) {
          e.preventDefault()
          triggers[i - 1].focus()
          setValue(triggers[i - 1].dataset.value ?? "")
        } else if (e.key === "Home") {
          e.preventDefault()
          triggers[0].focus()
          setValue(triggers[0].dataset.value ?? "")
        } else if (e.key === "End") {
          e.preventDefault()
          triggers[triggers.length - 1].focus()
          setValue(triggers[triggers.length - 1].dataset.value ?? "")
        }
      }}
      data-value={value}
      className={cn(
        "inline-flex items-center justify-center font-medium text-muted transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm",
        "hover:text-foreground active:opacity-90",
        isSelected && "text-foreground",
        variant === "default" && isSelected && "border-b-2 border-primary -mb-[2px]",
        variant === "bordered" && isSelected && "bg-surface text-foreground shadow-sm",
        variant === "fill" && isSelected && "bg-foreground text-surface shadow-sm",
        size === "sm" && "px-3 py-1.5",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-5 py-2.5",
        className
      )}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps {
  value: string
  children: ReactNode
  className?: string
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: selected } = useTabs()
  if (selected !== value) return null
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={cn("pt-4 focus:outline-none", className)}
    >
      {children}
    </div>
  )
}
