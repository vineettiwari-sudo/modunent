import { cn } from "../../utils"

export interface StepperStep {
  id: string
  label: string
  optional?: boolean
}

export interface StepperProps {
  steps: StepperStep[]
  current: number
  onStepClick?: (index: number) => void
  className?: string
}

export function Stepper({ steps, current, onStepClick, className }: StepperProps) {
  return (
    <nav aria-label="Progress" className={cn("w-full", className)}>
      <ol className="flex items-center gap-2 flex-wrap">
        {steps.map((step, index) => {
          const isActive = index === current
          const isPast = index < current
          const isClickable = onStepClick && index <= current
          return (
            <li key={step.id} className={cn("flex items-center shrink-0", index > 0 && "flex-1 min-w-0")}>
              {index > 0 && (
                <span className={cn("mx-1 h-px w-4 shrink-0 bg-border", isPast && "bg-primary")} aria-hidden />
              )}
              <button
                type="button"
                onClick={() => isClickable && onStepClick(index)}
                disabled={!isClickable}
                className={cn(
                  "inline-flex items-center gap-2 rounded-[var(--radius-md)] px-2 py-1.5 text-sm font-medium min-h-[36px]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isActive && "bg-primary text-primary-foreground",
                  isPast && !isActive && "text-foreground hover:bg-muted/50",
                  !isPast && !isActive && "text-muted",
                  isClickable ? "cursor-pointer" : "cursor-default"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex h-[24px] w-[24px] items-center justify-center rounded-full text-xs font-semibold border-2",
                    isActive && "border-primary-foreground bg-primary-foreground/20",
                    isPast && !isActive && "border-primary bg-primary text-primary-foreground",
                    !isPast && !isActive && "border-border bg-surface"
                  )}
                >
                  {isPast && !isActive ? "✓" : index + 1}
                </span>
                {step.label}
                {step.optional && <span className="text-muted text-xs">(optional)</span>}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
