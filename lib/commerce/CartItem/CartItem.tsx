import type { ReactNode } from "react"
import { cn } from "../../utils"
import { QuantityStepper } from "../QuantityStepper"

export interface CartItemProps {
  title: string
  price: string
  imageUrl?: string
  quantity: number
  onQuantityChange: (qty: number) => void
  onRemove?: () => void
  children?: ReactNode
  className?: string
}

export function CartItem(props: CartItemProps) {
  const { title, price, imageUrl, quantity, onQuantityChange, onRemove, children, className } = props
  return (
    <div className={cn("flex gap-4 py-4 border-b border-border last:border-b-0", className)}>
      <div className="h-[80px] w-[80px] shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-muted/30">
        {imageUrl ? <img src={imageUrl} alt="" className="h-full w-full object-cover" /> : <div className="h-full w-full flex items-center justify-center text-muted text-xs">Img</div>}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-2">{title}</h3>
        <p className="mt-0.5 text-sm font-medium text-foreground">{price}</p>
        {children}
        <div className="mt-2 flex items-center gap-3">
          <QuantityStepper value={quantity} min={1} max={99} onChange={onQuantityChange} />
          {onRemove ? <button type="button" onClick={onRemove} className="text-sm text-muted hover:text-foreground underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Remove</button> : null}
        </div>
      </div>
    </div>
  )
}
