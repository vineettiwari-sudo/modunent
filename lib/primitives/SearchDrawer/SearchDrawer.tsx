import type { ReactNode } from "react"
import { useEffect } from "react"
import { cn } from "../../utils"
import { SearchBar } from "../SearchBar"

export interface SearchDrawerOption {
  id: string
  label: string
  subtitle?: string
}

export interface SearchDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  onChange: (value: string) => void
  onSearch?: (value: string) => void
  options?: SearchDrawerOption[]
  onSelect?: (option: SearchDrawerOption) => void
  placeholder?: string
  title?: string
  children?: ReactNode
  className?: string
}

export function SearchDrawer({
  open,
  onOpenChange,
  value,
  onChange,
  onSearch,
  options = [],
  onSelect,
  placeholder = "Search…",
  title = "Search",
  children,
  className,
}: SearchDrawerProps) {
  useEffect(() => {
    if (open) {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false)
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
      return () => {
        document.removeEventListener("keydown", onKey)
        document.body.style.overflow = ""
      }
    }
  }, [open, onOpenChange])

  if (!open) return null

  const filtered = value.trim()
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(value.toLowerCase()) ||
          (o.subtitle && o.subtitle.toLowerCase().includes(value.toLowerCase()))
      )
    : options

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50"
        aria-hidden
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm flex flex-col border-l border-border bg-surface shadow-xl",
          className
        )}
        <div className="flex items-center justify-between gap-2 border-b border-border p-4">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-[36px] w-[36px] flex items-center justify-center rounded-[var(--radius-md)] text-foreground hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close search"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <SearchBar
            value={value}
            onChange={onChange}
            onSearch={onSearch}
            placeholder={placeholder}
            size="md"
            className="mb-4"
          />
          {children ?? (
            <ul className="space-y-0">
              {filtered.map((opt) => (
                <li key={opt.id}>
                  <button
                    type="button"
                    className="flex w-full flex-col gap-0.5 px-2 py-2.5 text-left text-sm text-foreground hover:bg-muted/50 rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => {
                      onSelect?.(opt)
                      onOpenChange(false)
                    }}
                  >
                    <span className="font-medium">{opt.label}</span>
                    {opt.subtitle && <span className="text-xs text-muted">{opt.subtitle}</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
