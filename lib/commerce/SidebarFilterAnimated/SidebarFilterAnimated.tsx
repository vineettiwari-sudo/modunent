import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Star } from "lucide-react"
import { cn } from "../../utils"

export interface FilterCheckboxOption {
  value: string
  label: string
  count?: number
}

export interface FilterColorOption {
  value: string
  hex: string
  count?: number
}

export interface FilterRatingOption {
  value: string
  label: string
  stars: number
}

export interface FilterSectionConfig {
  id: string
  label: string
  type: "checkbox" | "color" | "priceRange" | "rating"
  options?: FilterCheckboxOption[]
  colorOptions?: FilterColorOption[]
  ratingOptions?: FilterRatingOption[]
  min?: number
  max?: number
  step?: number
}

export interface SidebarFilterAnimatedProps {
  sections: FilterSectionConfig[]
  selectedCheckboxes: Record<string, string[]>
  selectedColors: Record<string, string[]>
  selectedRating: Record<string, string>
  priceRange: Record<string, [number, number]>
  onCheckboxChange: (sectionId: string, values: string[]) => void
  onColorChange: (sectionId: string, values: string[]) => void
  onRatingChange: (sectionId: string, value: string) => void
  onPriceRangeChange: (sectionId: string, value: [number, number]) => void
  className?: string
}

function DualHandleSlider({
  min,
  max,
  step,
  value: [low, high],
  onChange,
}: {
  min: number
  max: number
  step: number
  value: [number, number]
  onChange: (v: [number, number]) => void
}) {
  const range = max - min
  const lowPct = ((low - min) / range) * 100
  const highPct = ((high - min) / range) * 100
  const handleLow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.min(Number(e.target.value), high - step)
    onChange([v, high])
  }
  const handleHigh = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Math.max(Number(e.target.value), low + step)
    onChange([low, v])
  }
  return (
    <div className="space-y-2">
      <div className="relative h-6 flex items-center">
        <div className="absolute inset-x-0 h-2 rounded-full bg-muted" />
        <div
          className="absolute h-2 rounded-full bg-primary pointer-events-none"
          style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={low}
          onChange={handleLow}
          className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-runnable-track]:bg-transparent"
          aria-label="Min"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={high}
          onChange={handleHigh}
          className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-runnable-track]:bg-transparent"
          aria-label="Max"
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  )
}

export function SidebarFilterAnimated(props: SidebarFilterAnimatedProps) {
  const {
    sections,
    selectedCheckboxes,
    selectedColors,
    selectedRating,
    priceRange,
    onCheckboxChange,
    onColorChange,
    onRatingChange,
    onPriceRangeChange,
    className,
  } = props
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(sections.map((s) => s.id)))

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleCheckbox = (sectionId: string, value: string) => {
    const current = selectedCheckboxes[sectionId] ?? []
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    onCheckboxChange(sectionId, next)
  }

  const toggleColor = (sectionId: string, value: string) => {
    const current = selectedColors[sectionId] ?? []
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    onColorChange(sectionId, next)
  }

  return (
    <aside className={cn("flex flex-col gap-1", className)}>
      {sections.map((section) => {
        const isOpen = openIds.has(section.id)
        return (
          <div key={section.id} className="border-b border-border pb-3 last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(section.id)}
              className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-foreground hover:text-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              {section.label}
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-2">
                    {section.type === "checkbox" && section.options && (
                      <ul className="space-y-2">
                        {section.options.map((opt) => {
                          const checked = (selectedCheckboxes[section.id] ?? []).includes(opt.value)
                          return (
                            <li key={opt.value}>
                              <label className="flex cursor-pointer items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleCheckbox(section.id, opt.value)}
                                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                                />
                                <span className="text-sm text-foreground">{opt.label}</span>
                                {opt.count != null && (
                                  <span className="ml-auto text-xs text-muted-foreground">({opt.count})</span>
                                )}
                              </label>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                    {section.type === "color" && section.colorOptions && (
                      <div className="flex flex-wrap gap-2">
                        {section.colorOptions.map((opt) => {
                          const selected = (selectedColors[section.id] ?? []).includes(opt.value)
                          return (
                            <motion.button
                              key={opt.value}
                              type="button"
                              onClick={() => toggleColor(section.id, opt.value)}
                              className={cn(
                                "h-8 w-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                selected ? "border-foreground ring-2 ring-offset-2 ring-foreground/30" : "border-transparent hover:border-muted-foreground/50"
                              )}
                              style={{ backgroundColor: opt.hex }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={opt.value}
                            />
                          )
                        })}
                      </div>
                    )}
                    {section.type === "priceRange" && (
                      <DualHandleSlider
                        min={section.min ?? 0}
                        max={section.max ?? 500}
                        step={section.step ?? 10}
                        value={priceRange[section.id] ?? [section.min ?? 0, section.max ?? 500]}
                        onChange={(v) => onPriceRangeChange(section.id, v)}
                      />
                    )}
                    {section.type === "rating" && section.ratingOptions && (
                      <ul className="space-y-2">
                        {section.ratingOptions.map((opt) => {
                          const selected = selectedRating[section.id] === opt.value
                          return (
                            <li key={opt.value}>
                              <button
                                type="button"
                                onClick={() => onRatingChange(section.id, opt.value)}
                                className={cn(
                                  "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm",
                                  selected ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted/50"
                                )}
                              >
                                <span className="flex gap-0.5">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={cn("h-4 w-4", i < opt.stars ? "fill-amber-400 text-amber-400" : "text-muted")}
                                    />
                                  ))}
                                </span>
                                <span>{opt.label}</span>
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </aside>
  )
}
