import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface CheckboxGroupOption {
  value: string
  label: string
  disabled?: boolean
}

export interface CheckboxGroupProps {
  name: string
  legend?: string
  value: string[]
  onChange: (value: string[]) => void
  options: CheckboxGroupOption[]
  size?: "sm" | "md" | "lg"
  children?: ReactNode
  className?: string
}

export function CheckboxGroup({
  name,
  legend,
  value,
  onChange,
  options,
  size = "md",
  children,
  className,
}: CheckboxGroupProps) {
  const toggle = (optValue: string) => {
    const next = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue]
    onChange(next)
  }

  return (
    <fieldset className={cn("border-0 p-0 m-0 min-w-0", className)}>
      {legend && (
        <legend className="block text-sm font-medium text-foreground mb-2">
          {legend}
        </legend>
      )}
      <div className="space-y-2">
        {children ??
          options.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                name={name}
                value={opt.value}
                checked={value.includes(opt.value)}
                onChange={() => toggle(opt.value)}
                disabled={opt.disabled}
                className="h-[36px] w-[36px] rounded-[var(--radius-md)] border-2 border-border bg-surface checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
              <span className="text-sm text-foreground">{opt.label}</span>
            </label>
          ))}
      </div>
    </fieldset>
  )
}
