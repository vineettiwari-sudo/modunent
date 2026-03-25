import { cn } from "../../utils"
import { Checkbox } from "../../primitives/Checkbox"

export interface CheckboxFilterOption {
  value: string
  label: string
  count?: number
}

export interface CheckboxFilterProps {
  label: string
  options: CheckboxFilterOption[]
  value: string[]
  onChange: (value: string[]) => void
  className?: string
}

export function CheckboxFilter({
  label,
  options,
  value,
  onChange,
  className,
}: CheckboxFilterProps) {
  const toggle = (optValue: string) => {
    const next = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue]
    onChange(next)
  }

  return (
    <fieldset className={cn("border-0 p-0 m-0 min-w-0", className)}>
      <legend className="block text-sm font-medium text-foreground mb-2">
        {label}
      </legend>
      <ul className="space-y-2">
        {options.map((opt) => (
          <li key={opt.value}>
            <label className="flex items-center gap-2 cursor-pointer min-h-[36px]">
              <Checkbox
                size="md"
                checked={value.includes(opt.value)}
                onChange={() => toggle(opt.value)}
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
