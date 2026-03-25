import type { ReactNode } from "react"
import { cn } from "../../utils"

export interface CartSummaryProps {
  subtotal: string
  shipping?: string
  total: string
  couponSlot?: ReactNode
  className?: string
}

export function CartSummary({ subtotal, shipping, total, couponSlot, className }: CartSummaryProps) {
  return (
    <div className={cn("rounded-[var(--radius-md)] border border-border bg-surface p-4 space-y-3", className)}>
      {couponSlot}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-foreground"><span>Subtotal</span><span>{subtotal}</span></div>
        {shipping != null && <div className="flex justify-between text-foreground"><span>Shipping</span><span>{shipping}</span></div>}
        <div className="flex justify-between font-semibold text-foreground pt-2 border-t border-border"><span>Total</span><span>{total}</span></div>
      </div>
    </div>
  )
}
