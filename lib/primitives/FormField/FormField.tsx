import type { ReactNode } from "react"
import { useId } from "react"
import { cn } from "../../utils"

export interface FormFieldProps {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  htmlFor?: string
  children: ReactNode
  className?: string
}

export function FormField({
  label,
  error,
  helperText,
  required,
  htmlFor: htmlForProp,
  children,
  className,
}: FormFieldProps) {
  const id = useId()
  const htmlFor = htmlForProp ?? id

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5" aria-hidden>*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-muted">{helperText}</p>
      )}
    </div>
  )
}
