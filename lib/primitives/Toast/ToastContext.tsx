import type { ReactNode } from "react"
import { createContext, useCallback, useContext, useState } from "react"
import { cn } from "../../utils"

export type ToastVariant = "success" | "error" | "warning" | "info"

export interface ToastItem {
  id: string
  message: string
  variant: ToastVariant
  duration?: number
  dismissible?: boolean
}

export interface ToastContextValue {
  toasts: ToastItem[]
  addToast: (opts: Omit<ToastItem, "id">) => string
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}

export interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = useCallback(
    (opts: Omit<ToastItem, "id">) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      const item: ToastItem = { ...opts, id }
      setToasts((prev) => [...prev, item])
      if (opts.duration !== 0 && (opts.duration ?? 5000) > 0) {
        const ms = opts.duration ?? 5000
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id))
        }, ms)
      }
      return id
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

const variantClasses: Record<ToastVariant, string> = {
  success: "bg-green-500/10 border-green-500/30 text-foreground",
  error: "bg-red-500/10 border-red-500/30 text-foreground",
  warning: "bg-amber-500/10 border-amber-500/30 text-foreground",
  info: "bg-primary/10 border-primary/30 text-foreground",
}

function ToastContainer() {
  const { toasts, removeToast } = useToast()
  if (toasts.length === 0) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-[360px] w-full pointer-events-none"
      aria-live="polite"
      aria-label="Notifications"
    >
      <div className="flex flex-col gap-2 pointer-events-auto">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-[var(--radius-md)] border px-4 py-3 text-sm shadow-lg",
              "animate-[toast-in_0.3s_ease-out]",
              variantClasses[t.variant]
            )}
            role="alert"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="flex-1 min-w-0">{t.message}</p>
              {t.dismissible !== false && (
                <button
                  type="button"
                  onClick={() => removeToast(t.id)}
                  className="shrink-0 p-1 rounded-md text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Dismiss"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
