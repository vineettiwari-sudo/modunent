import { cn } from "../../utils"

export interface VariantOption {
  value: string
  label: string
  disabled?: boolean
}

export interface VariantSelectorProps {
  label: string
  options: VariantOption[]
  value: string | null
  onChange: (value: string) => void
  type?: "size" | "color"
  className?: string
}

export function VariantSelector({
  label,
  options,
  value,
  onChange,
  type = "size",
  className,
}: VariantSelectorProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = value === opt.value
          const isColor = type === "color"
          return (
            <button
              key={opt.value}
              type="button"
              disabled={opt.disabled}
              onClick={() => !opt.disabled && onChange(opt.value)}
              className={cn(
                "min-w-[36px] h-[36px] px-3 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-200 inline-flex items-center justify-center",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                isColor ? "rounded-full border-2 p-0.5" : "border-2 border-border bg-surface text-foreground hover:border-primary/50",
                isSelected && isColor && "border-primary ring-2 ring-primary ring-offset-2 ring-offset-surface",
                isSelected && !isColor && "border-primary bg-primary/10 text-foreground"
              )}
              style={isColor ? { backgroundColor: opt.value } : undefined}
              title={opt.label}
            >
              {isColor ? (opt.value.startsWith("#") || opt.value.startsWith("rgb") ? null : <span className="text-foreground text-xs">{opt.label}</span>) : opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
