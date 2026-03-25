import type { ReactNode } from "react"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../utils"

export type ModalSize = "sm" | "md" | "lg"

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-[360px] w-full",
  md: "max-w-[480px] w-full",
  lg: "max-w-[560px] w-full",
}

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  size?: ModalSize
  children: ReactNode
  className?: string
}

export function Modal({
  open,
  onOpenChange,
  size = "md",
  children,
  className,
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onOpenChange])

  if (!open) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onOpenChange(false)
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-200"
        onClick={handleBackdropClick}
        aria-hidden
      />
      <div
        ref={ref}
        className={cn(
          "relative rounded-[var(--radius-lg)] border border-border bg-surface shadow-xl transition-all duration-200",
          sizeClasses[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

export interface ModalHeaderProps {
  children: ReactNode
  className?: string
}

export function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 py-4 border-b border-border",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface ModalBodyProps {
  children: ReactNode
  className?: string
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={cn("px-6 py-4 text-foreground text-sm", className)}>{children}</div>
}

export interface ModalFooterProps {
  children: ReactNode
  className?: string
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 px-6 py-4 border-t border-border",
        className
      )}
    >
      {children}
    </div>
  )
}
