import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../primitives/DropdownMenu"
import { Button } from "../../primitives/Button"
import { cn } from "../../utils"

export interface SortOption {
  value: string
  label: string
}

export interface SortDropdownProps {
  options: SortOption[]
  value: string
  onChange: (value: string) => void
  label?: string
  className?: string
}

export function SortDropdown({
  options,
  value,
  onChange,
  label = "Sort by",
  className,
}: SortDropdownProps) {
  const current = options.find((o) => o.value === value)?.label ?? value

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary" size="md" className={cn("gap-2", className)}>
          {label}: {current}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((opt) => (
          <DropdownMenuItem key={opt.value} onSelect={() => onChange(opt.value)}>
            {opt.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
