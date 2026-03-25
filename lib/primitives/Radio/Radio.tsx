import * as React from "react"
import { cn } from "../../utils"

export type RadioSize = "sm" | "md" | "lg"

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  size?: RadioSize
}

const boxSizeClasses: Record<RadioSize, string> = {
  sm: "h-[24px] w-[24px]",
  md: "h-[36px] w-[36px]",
  lg: "h-[44px] w-[44px]",
}

const dotSizeClasses: Record<RadioSize, string> = {
  sm: "w-[12px] h-[12px]",
  md: "w-[16px] h-[16px]",
  lg: "w-[18px] h-[18px]",
}

const labelMinHeight: Record<RadioSize, string> = {
  sm: "min-h-[24px]",
  md: "min-h-[36px]",
  lg: "min-h-[44px]",
}

const baseInputClasses =
  "peer appearance-none rounded-full border-2 border-border bg-surface transition-colors checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed"

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            className={cn(baseInputClasses, boxSizeClasses[size], className)}
            {...props}
          />
          <span
            className={cn(
              "pointer-events-none absolute rounded-full bg-primary-foreground opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100",
              dotSizeClasses[size]
            )}
          />
        </div>
        {label != null && label !== "" && (
          <span className="text-sm text-foreground select-none">{label}</span>
        )}
      </label>
    )
  }
)

Radio.displayName = "Radio"
