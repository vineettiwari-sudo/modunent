import type { ReactNode } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../../primitives/Modal"
import { Button } from "../../primitives/Button"
import { cn } from "../../utils"

export interface QuickViewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  price: string
  imageUrl?: string
  size?: "sm" | "md" | "lg"
  children?: ReactNode
  className?: string
}

export function QuickViewModal({
  open,
  onOpenChange,
  title,
  price,
  imageUrl,
  size = "md",
  children,
  className,
}: QuickViewModalProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} size={size} className={cn("max-w-[480px]", className)}>
      <ModalHeader>
        <span className="font-semibold text-foreground text-sm">Quick view</span>
      </ModalHeader>
      <ModalBody className="flex flex-col gap-4 sm:flex-row">
        {imageUrl && (
          <div className="aspect-square w-full shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-muted/30 sm:w-[160px]">
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-medium text-foreground">{title}</h2>
          <p className="mt-1 text-sm font-medium text-foreground">{price}</p>
          {children}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button size="md" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
        <Button size="md">Add to cart</Button>
      </ModalFooter>
    </Modal>
  )
}
