import { cn } from "../../utils"
export interface RangeSliderProps { min: number; max: number; value: [number, number]; onChange: (v: [number, number]) => void; step?: number; label?: string; className?: string }
export function RangeSlider({ min, max, value: [low, high], onChange, step = 1, label, className }: RangeSliderProps) {
  const handleLow = (e: React.ChangeEvent<HTMLInputElement>) => onChange([Math.min(Number(e.target.value), high - step), high])
  const handleHigh = (e: React.ChangeEvent<HTMLInputElement>) => onChange([low, Math.max(Number(e.target.value), low + step)])
  return (
    <div className={cn("space-y-2", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <div className="flex items-center gap-3">
        <input type="number" min={min} max={max} step={step} value={low} onChange={handleLow} className="h-[36px] w-20 rounded-[var(--radius-md)] border border-border bg-surface text-foreground text-sm px-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        <span className="text-muted text-sm">–</span>
        <input type="number" min={min} max={max} step={step} value={high} onChange={handleHigh} className="h-[36px] w-20 rounded-[var(--radius-md)] border border-border bg-surface text-foreground text-sm px-2 focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
    </div>
  )
}
