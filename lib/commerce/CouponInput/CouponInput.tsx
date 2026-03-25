import { useState } from "react"
import { cn } from "../../utils"
import { Input } from "../../primitives/Input"
import { Button } from "../../primitives/Button"

export interface CouponInputProps {
  onApply?: (code: string) => void
  appliedCode?: string | null
  onRemove?: () => void
  placeholder?: string
  className?: string
}

export function CouponInput({
  onApply,
  appliedCode,
  onRemove,
  placeholder = "Coupon code",
  className,
}: CouponInputProps) {
  const [value, setValue] = useState("")

  const handleApply = () => {
    if (value.trim()) onApply?.(value.trim())
  }

  if (appliedCode) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="text-sm text-foreground flex-1 min-w-0 truncate">{appliedCode}</span>
        {onRemove && (
          <Button type="button" variant="ghost" size="md" onClick={onRemove}>
            Remove
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex gap-2", className)}>
      <Input
        size="md"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 min-w-0"
      />
      <Button type="button" size="md" variant="secondary" onClick={handleApply}>
        Apply
      </Button>
    </div>
  )
}
