import type { ReactNode } from "react"
import { cn } from "../../utils"
import { Checkbox } from "../../primitives/Checkbox"

export interface FilterOption {
  value: string
  label: string
  count?: number
}

export interface FilterGroup {
  id: string
  label: string
  options: FilterOption[]
}

export interface SidebarFiltersProps {
  groups: FilterGroup[]
  selected: Record<string, string[]>
  onSelectionChange: (groupId: string, values: string[]) => void
  className?: string
}

export function SidebarFilters({
  groups,
  selected,
  onSelectionChange,
  className,
}: SidebarFiltersProps) {
  const toggle = (groupId: string, value: string) => {
    const current = selected[groupId] ?? []
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    onSelectionChange(groupId, next)
  }

  return (
    <aside className={cn("w-full space-y-6", className)}>
      {groups.map((group) => (
        <div key={group.id} className="border-b border-border pb-4 last:border-b-0">
          <h3 className="text-sm font-semibold text-foreground mb-3">{group.label}</h3>
          <ul className="space-y-2">
            {group.options.map((opt) => {
              const checked = (selected[group.id] ?? []).includes(opt.value)
              return (
                <li key={opt.value}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      size="sm"
                      checked={checked}
                      onChange={() => toggle(group.id, opt.value)}
                    />
                    <span className="text-sm text-foreground">{opt.label}</span>
                    {opt.count != null && (
                      <span className="text-muted text-xs ml-auto">({opt.count})</span>
                    )}
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </aside>
  )
}
