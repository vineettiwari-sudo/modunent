import type { FormHTMLAttributes, InputHTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "../../utils"

export type SearchBarSize = "sm" | "md" | "lg"

export interface SearchBarProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "children"> {
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  placeholder?: string
  size?: SearchBarSize
  disabled?: boolean
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  className?: string
  "aria-label"?: string
}

const sizeClasses = {
  sm: "h-[24px] text-xs",
  md: "h-[36px] text-sm",
  lg: "h-[44px] text-base",
}

const iconSize = { sm: 12, md: 16, lg: 18 } as const

export const SearchBar = forwardRef<HTMLFormElement, SearchBarProps>(
  (
    {
      value = "",
      onChange,
      onSearch,
      placeholder = "Search…",
      size = "md",
      disabled = false,
      inputProps,
      className,
      "aria-label": ariaLabel = "Search",
      ...formProps
    },
    ref
  ) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSearch?.(value)
    }

    const px = size === "sm" ? "pl-8 pr-3" : size === "md" ? "pl-10 pr-4" : "pl-11 pr-5"

    return (
      <form
        ref={ref}
        role="search"
        onSubmit={handleSubmit}
        className={cn("relative w-full max-w-full", className)}
        {...formProps}
      >
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" aria-hidden>
          <svg
            className={cn("text-foreground/70")}
            width={iconSize[size]}
            height={iconSize[size]}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="search"
          aria-label={ariaLabel}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full rounded-[var(--radius-md)] border border-border bg-surface text-foreground placeholder:text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            sizeClasses[size],
            px,
            inputProps?.className
          )}
          {...inputProps}
        />
      </form>
    )
  }
)

SearchBar.displayName = "SearchBar"
