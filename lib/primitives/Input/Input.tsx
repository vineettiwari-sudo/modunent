import type { InputHTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { cn } from "../../utils"

export type InputSize = "sm" | "md" | "lg"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize
  label?: string
  helperText?: string
  error?: string
}

const heightClasses: Record<InputSize, string> = {
  sm: "h-[24px] min-h-[24px]",
  md: "h-[36px] min-h-[36px]",
  lg: "h-[44px] min-h-[44px]",
}

const textClasses: Record<InputSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      label,
      helperText,
      error,
      id: idProp,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const id = idProp ?? generatedId
    const hasError = Boolean(error)

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          className={cn(
            "w-full border bg-surface text-foreground placeholder:text-muted px-4 rounded-[var(--radius-md)]",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface transition-shadow duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            heightClasses[size],
            textClasses[size],
            hasError
              ? "border-red-500 focus:ring-red-500"
              : "border-border focus:ring-primary",
            className
          )}
          disabled={disabled}
          {...props}
        />
        {error && (
          <p
            id={`${id}-error`}
            className="mt-1.5 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${id}-helper`} className="mt-1.5 text-sm text-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
