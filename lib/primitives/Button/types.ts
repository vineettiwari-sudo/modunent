import type { ReactNode } from "react"

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export const SIZE_HEIGHTS = {
  sm: 36,
  md: 44,
  lg: 52,
} as const

export const SIZE_FONT = {
  sm: "14px",
  md: "16px",
  lg: "16px",
} as const

export const SIZE_PADDING_X = {
  sm: 12,
  md: 16,
  lg: 24,
} as const
