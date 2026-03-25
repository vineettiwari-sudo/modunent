import * as React from "react"
import { cn } from "../../utils"

export type CheckboxSize = "sm" | "md" | "lg"

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  size?: CheckboxSize
}

const boxSizeClasses: Record<CheckboxSize, string> = {
  sm: "h-[24px] w-[24px]",
  md: "h-[36px] w-[36px]",
  lg: "h-[44px] w-[44px]",
}

const iconSizeClasses: Record<CheckboxSize, string> = {
  sm: "w-[12px] h-[12px]",
  md: "w-[16px] h-[16px]",
  lg: "w-[18px] h-[18px]",
}

const labelMinHeight: Record<CheckboxSize, string> = {
  sm: "min-h-[24px]",
  md: "min-h-[36px]",
  lg: "min-h-[44px]",
}

const baseInputClasses =
  "peer appearance-none rounded-[var(--radius-md)] border-2 border-border bg-surface transition-colors checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size = "md", ...props }, ref) => {
    return (
      <label
        className={cn(
          "flex items-center gap-3 cursor-pointer select-none",
          labelMinHeight[size]
        )}
      >
        <div className="relative flex items-center justify-center shrink-0">
          <input
            ref={ref}
            type="checkbox"
            className={cn(baseInputClasses, boxSizeClasses[size], className)}
            {...props}
          />
          <svg
            className={cn(
              "pointer-events-none absolute text-primary-foreground opacity-0 transition-opacity duration-200 peer-checked:opacity-100",
              iconSizeClasses[size]
            )}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M5 10l3 3 7-7" />
          </svg>
        </div>
        {label != null && label !== "" && (
          <span className="text-sm text-foreground select-none">{label}</span>
        )}
      </label>
    )
  }
)

Checkbox.displayName = "Checkbox"
