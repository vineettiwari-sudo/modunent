import { cn } from "../../utils"
import { Radio } from "../../primitives/Radio"

export interface RadioFilterOption {
  value: string
  label: string
  count?: number
}

export interface RadioFilterProps {
  label: string
  options: RadioFilterOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function RadioFilter({
  label,
  options,
  value,
  onChange,
  className,
}: RadioFilterProps) {
  return (
    <fieldset className={cn("border-0 p-0 m-0 min-w-0", className)}>
      <legend className="block text-sm font-medium text-foreground mb-2">
        {label}
      </legend>
      <ul className="space-y-2">
        {options.map((opt) => (
          <li key={opt.value}>
            <label className="flex items-center gap-2 cursor-pointer min-h-[36px]">
              <Radio
                size="md"
                name={`radio-filter-${label.replace(/\s/g, "-")}`}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
              />
              <span className="text-sm text-foreground">{opt.label}</span>
              {opt.count != null && (
                <span className="text-muted text-xs ml-auto">({opt.count})</span>
              )}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}
