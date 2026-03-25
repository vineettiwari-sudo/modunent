import type { ReactNode } from "react"
import { spacing } from "../../tokens"

export interface InputProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "error" | "success"
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  helperText?: string
  errorMessage?: string
  fullWidth?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  id?: string
  name?: string
  type?: "text" | "email" | "password" | "search"
  "aria-invalid"?: boolean
  "aria-describedby"?: string
}

export const INPUT_HEIGHTS = {
  sm: 36,
  md: 44,
  lg: 52,
} as const

export const INPUT_PADDING_X = {
  sm: spacing.md,
  md: spacing.lg,
  lg: spacing.xl,
} as const
