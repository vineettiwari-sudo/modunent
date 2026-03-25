import * as React from "react"
import { cn } from "../../utils"

export type ToggleSize = "sm" | "md" | "lg"

export interface ToggleSwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  size?: ToggleSize
  "aria-label"?: string
}

const trackHeight: Record<ToggleSize, string> = {
  sm: "h-[24px]",
  md: "h-[36px]",
  lg: "h-[44px]",
}

const trackWidth: Record<ToggleSize, string> = {
  sm: "w-[44px] min-w-[44px]",
  md: "w-[52px] min-w-[52px]",
  lg: "w-[60px] min-w-[60px]",
}

const knobSize: Record<ToggleSize, string> = {
  sm: "h-[12px] w-[12px]",
  md: "h-[16px] w-[16px]",
  lg: "h-[18px] w-[18px]",
}

const knobTranslate: Record<ToggleSize, string> = {
  sm: "translate-x-[34px]",
  md: "translate-x-[38px]",
  lg: "translate-x-[44px]",
}

export const ToggleSwitch = React.forwardRef<
  HTMLButtonElement,
  ToggleSwitchProps
>(
  (
    {
      checked = false,
      onCheckedChange,
      disabled,
      size = "md",
      className,
      "aria-label": ariaLabel,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onCheckedChange?.(!checked)
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        className={cn(
          "relative inline-flex shrink-0 rounded-full border-2 border-border bg-surface transition-colors duration-200",
          trackHeight[size],
          trackWidth[size],
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          checked && "bg-primary border-primary",
          className
        )}
        data-state={checked ? "checked" : "unchecked"}
        onClick={handleClick}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block rounded-full bg-primary-foreground shadow transition-transform duration-200 translate-x-0.5",
            knobSize[size],
            checked && knobTranslate[size]
          )}
        />
      </button>
    )
  }
)

ToggleSwitch.displayName = "ToggleSwitch"
