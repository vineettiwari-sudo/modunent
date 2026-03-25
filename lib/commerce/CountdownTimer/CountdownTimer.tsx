import { useState, useEffect } from "react"
import { cn } from "../../utils"

export interface CountdownTimerProps {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
  endDate?: Date
  label?: string
  variant?: "banner" | "inline" | "withLabels" | "noLabels"
  showLabels?: boolean
  className?: string
}

function Pad({ n }: { n: number }) {
  return n < 10 ? `0${n}` : String(n)
}

function getRemaining(endDate: Date) {
  const now = Date.now()
  const end = endDate.getTime()
  if (end <= now) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  let diff = Math.floor((end - now) / 1000)
  const seconds = diff % 60
  diff = Math.floor(diff / 60)
  const minutes = diff % 60
  diff = Math.floor(diff / 60)
  const hours = diff % 24
  const days = Math.floor(diff / 24)
  return { days, hours, minutes, seconds }
}

export function CountdownTimer({
  days: daysProp,
  hours: hoursProp,
  minutes: minutesProp,
  seconds: secondsProp,
  endDate,
  label,
  variant = "inline",
  showLabels = true,
  className,
}: CountdownTimerProps) {
  const fromEndDate = endDate != null
  const [live, setLive] = useState(
    fromEndDate ? getRemaining(endDate) : { days: daysProp ?? 0, hours: hoursProp ?? 0, minutes: minutesProp ?? 0, seconds: secondsProp ?? 0 }
  )

  useEffect(() => {
    if (!endDate) return
    const t = setInterval(() => setLive(getRemaining(endDate)), 1000)
    return () => clearInterval(t)
  }, [endDate])

  const { days, hours, minutes, seconds } = live
  const isZero = days === 0 && hours === 0 && minutes === 0 && seconds === 0

  const boxClass =
    variant === "banner"
      ? "inline-flex flex-col items-center rounded-[var(--radius-md)] bg-elevated px-3 py-2 min-w-[44px]"
      : "inline-flex flex-col items-center rounded-[var(--radius-sm)] bg-elevated px-2 py-1 min-w-[36px]"
  const labelClass = "text-xs text-muted"
  const valueClass = "text-sm font-semibold text-foreground tabular-nums"

  return (
    <div className={cn("inline-flex items-center gap-2", variant === "banner" && "rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2", className)}>
      {label && showLabels !== false && <span className="text-sm text-foreground">{label}</span>}
      <div className="flex gap-1.5" role="timer" aria-live="polite">
        {days > 0 && (
          <span className={boxClass}>
            <span className={valueClass}><Pad n={days} /></span>
            {(showLabels || variant === "withLabels") && <span className={labelClass}>d</span>}
          </span>
        )}
        <span className={boxClass}>
          <span className={valueClass}><Pad n={hours} /></span>
          {(showLabels || variant === "withLabels") && <span className={labelClass}>h</span>}
        </span>
        <span className={boxClass}>
          <span className={valueClass}><Pad n={minutes} /></span>
          {(showLabels || variant === "withLabels") && <span className={labelClass}>m</span>}
        </span>
        <span className={boxClass}>
          <span className={valueClass}><Pad n={seconds} /></span>
          {(showLabels || variant === "withLabels") && <span className={labelClass}>s</span>}
        </span>
      </div>
      {isZero && fromEndDate && <span className="text-xs text-muted">Ended</span>}
    </div>
  )
}
