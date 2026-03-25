import type { ReactNode } from "react"
import { useEffect } from "react"
import { cn } from "../../utils"

export interface LandingPopupProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function LandingPopup({
  open,
  onClose,
  children,
  className,
}: LandingPopupProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
        aria-hidden
        onClick={onClose}
      />
      <div
        className={cn(
          "relative rounded-[var(--radius-lg)] border border-border bg-surface shadow-lg max-w-md w-full max-h-[90vh] overflow-auto animate-[landing-popup-scale_0.25s_ease-out]",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
