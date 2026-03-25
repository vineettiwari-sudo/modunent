import { useId } from "react"
import { cn } from "../../utils"
import { Spinner } from "../../primitives/Spinner"
import { QuantityStepper } from "../QuantityStepper"

export type QuantityFieldLabelPosition = "top" | "left"

export interface QuantityFieldProps {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  label?: string
  labelPosition?: QuantityFieldLabelPosition
  helperText?: string
  error?: string
  loading?: boolean
  disabled?: boolean
  className?: string
}

export function QuantityField({
  value,
  min,
  max,
  onChange,
  label,
  labelPosition = "top",
  helperText,
  error,
  loading = false,
  disabled = false,
  className,
}: QuantityFieldProps) {
  const id = useId()
  const isDisabled = disabled || loading

  const stepper = (
    <div
      className="relative inline-flex"
      role="group"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
    >
      <QuantityStepper
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        disabled={isDisabled}
        className={cn(
          "transition-colors",
          error && "border-red-500 dark:border-red-400 ring-1 ring-red-500 dark:ring-red-400"
        )}
      />
      {loading && (
        <span
          className="absolute inset-0 flex items-center justify-center bg-surface/80 rounded-[var(--radius-md)] pointer-events-none"
          aria-hidden
        >
          <Spinner size="sm" />
        </span>
      )}
    </div>
  )

  const labelEl = label && (
    <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
      {label}
    </label>
  )

  const helperOrError = (
    <>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${id}-helper`} className="mt-1.5 text-sm text-muted">
          {helperText}
        </p>
      )}
    </>
  )

  if (labelPosition === "left") {
    return (
      <div className={cn("w-full", className)}>
        <div className="flex flex-wrap items-center gap-3">
          {label && (
            <label htmlFor={id} className="text-sm font-medium text-foreground shrink-0">
              {label}
            </label>
          )}
          {stepper}
        </div>
        {helperOrError}
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      {labelEl}
      {stepper}
      {helperOrError}
    </div>
  )
}
