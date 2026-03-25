import type { ReactNode } from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "../../utils"
import { SearchBar } from "../SearchBar"

export interface SearchDropdownOption {
  id: string
  label: string
  subtitle?: string
}

export interface SearchDropdownProps {
  value: string
  onChange: (value: string) => void
  onSearch?: (value: string) => void
  options: SearchDropdownOption[]
  onSelect?: (option: SearchDropdownOption) => void
  placeholder?: string
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  emptyMessage?: string
  className?: string
}

export function SearchDropdown({
  value,
  onChange,
  onSearch,
  options,
  onSelect,
  placeholder = "Search…",
  size = "md",
  disabled = false,
  emptyMessage = "No results",
  className,
}: SearchDropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const showPanel = open && (value.length > 0 || options.length > 0)
  const filtered = value.trim()
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(value.toLowerCase()) ||
          (o.subtitle && o.subtitle.toLowerCase().includes(value.toLowerCase()))
      )
    : options

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-full", className)}>
      <SearchBar
        value={value}
        onChange={(v) => { onChange(v); setOpen(true) }}
        onSearch={onSearch}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
        inputProps={{ onFocus: () => setOpen(true) }}
        className="w-full"
      />
      {showPanel && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[280px] overflow-auto rounded-[var(--radius-md)] border border-border bg-surface shadow-lg"
          role="listbox"
        >
          {filtered.length === 0 ? (
            <div className="px-4 py-3 text-sm text-muted">{emptyMessage}</div>
          ) : (
            filtered.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="option"
                className="flex w-full flex-col gap-0.5 px-4 py-2.5 text-left text-sm text-foreground hover:bg-muted/50 focus:bg-muted/50 focus:outline-none"
                onClick={() => { onSelect?.(opt); setOpen(false) }}
              >
                <span className="font-medium">{opt.label}</span>
                {opt.subtitle && <span className="text-xs text-muted">{opt.subtitle}</span>}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
