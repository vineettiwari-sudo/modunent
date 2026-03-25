import type { ReactNode } from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { cn } from "../../utils"

export type AccordionType = "single" | "multiple"

export interface AccordionContextValue {
  type: AccordionType
  value: string | string[]
  setValue: (v: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion components must be used within Accordion")
  return ctx
}

const AccordionItemContext = createContext<string>("")

function useAccordionItem() {
  return useContext(AccordionItemContext)
}

export interface AccordionProps {
  type?: AccordionType
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: ReactNode
  className?: string
}

export function Accordion({
  type = "single",
  defaultValue = type === "single" ? "" : [],
  value: controlledValue,
  onValueChange,
  children,
  className,
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolled] = useState<string | string[]>(
    defaultValue
  )
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = useCallback(
    (itemValue: string) => {
      if (type === "single") {
        const next = itemValue
        if (!isControlled) setUncontrolled(next)
        onValueChange?.(next)
      } else {
        const arr = Array.isArray(value) ? value : []
        const next = arr.includes(itemValue)
          ? arr.filter((v) => v !== itemValue)
          : [...arr, itemValue]
        if (!isControlled) setUncontrolled(next)
        onValueChange?.(next)
      }
    },
    [type, value, isControlled, onValueChange]
  )

  return (
    <AccordionContext.Provider value={{ type, value, setValue }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export interface AccordionItemProps {
  value: string
  children: ReactNode
  className?: string
}

export function AccordionItem({
  value: itemValue,
  children,
  className,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={itemValue}>
      <div
        className={cn("border-b border-border last:border-b-0", className)}
        data-accordion-item
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export interface AccordionTriggerProps {
  children: ReactNode
  className?: string
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { value, setValue } = useAccordion()
  const itemValue = useAccordionItem()
  const isOpen =
    typeof value === "string"
      ? value === itemValue
      : Array.isArray(value) && value.includes(itemValue)

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground",
        "hover:bg-muted/30 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
        className
      )}
      onClick={() => setValue(itemValue)}
      aria-expanded={isOpen}
    >
      {children}
      <span
        className={cn(
          "shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
        aria-hidden
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
  )
}

export interface AccordionContentProps {
  children: ReactNode
  className?: string
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { value } = useAccordion()
  const itemValue = useAccordionItem()
  const isOpen =
    typeof value === "string"
      ? value === itemValue
      : Array.isArray(value) && value.includes(itemValue)

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200 ease-out",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      <div className={cn("px-4 py-3 pt-0 text-sm text-muted", className)}>
        {children}
      </div>
    </div>
  )
}
