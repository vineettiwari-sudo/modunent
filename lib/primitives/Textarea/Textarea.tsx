import type { TextareaHTMLAttributes } from "react"
import { forwardRef, useId } from "react"
import { cn } from "../../utils"

export type TextareaSize = "sm" | "md" | "lg"

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextareaSize
  label?: string
  error?: string
}

const minHeightClasses: Record<TextareaSize, string> = {
  sm: "min-h-[24px]",
  md: "min-h-[36px]",
  lg: "min-h-[44px]",
}

const textClasses: Record<TextareaSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = "md",
      label,
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
        <textarea
          ref={ref}
          id={id}
          aria-invalid={hasError}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-[var(--radius-md)] resize-y",
            "border bg-surface text-foreground placeholder:text-muted",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface transition-shadow duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            minHeightClasses[size],
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
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
