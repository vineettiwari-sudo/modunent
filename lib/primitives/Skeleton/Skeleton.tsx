import React from "react"
import { cn } from "../../utils"

export type SkeletonVariant = "text" | "avatar" | "card"

export interface SkeletonProps {
  variant?: SkeletonVariant
  className?: string
}

export function Skeleton({ variant = "text", className }: SkeletonProps) {
  const baseClasses =
    "rounded-[var(--radius-md)] bg-muted animate-pulse"

  if (variant === "avatar") {
    return (
      <div
        className={cn(baseClasses, "h-[36px] w-[36px] rounded-full", className)}
        aria-hidden
      />
    )
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-[var(--radius-md)] border border-border bg-surface p-4",
          className
        )}
      >
        <div className={cn(baseClasses, "h-4 w-[75%] mb-3")} />
        <div className={cn(baseClasses, "h-3 w-full mb-2")} />
        <div className={cn(baseClasses, "h-3 w-[85%]")} />
      </div>
    )
  }

  return (
    <div
      className={cn(baseClasses, "h-4 w-full", className)}
      aria-hidden
    />
  )
}
