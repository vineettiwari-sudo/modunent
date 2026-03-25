import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface RadioGroupOption {
  value: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  name: string
  legend?: string
  value: string
  onChange: (value: string) => void
  options: RadioGroupOption[]
  size?: "sm" | "md" | "lg"
  children?: ReactNode
  className?: string
}

export function RadioGroup({
  name,
  legend,
  value,
  onChange,
  options,
  size = "md",
  children,
  className,
}: RadioGroupProps) {
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
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                disabled={opt.disabled}
                className="h-[36px] w-[36px] rounded-full border-2 border-border bg-surface checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
              <span className="text-sm text-foreground">{opt.label}</span>
            </label>
          ))}
      </div>
    </fieldset>
  )
}
