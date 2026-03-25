import { cn } from "../../utils"

export interface ProgressBarProps {
  value?: number
  striped?: boolean
  className?: string
}

export function ProgressBar({
  value,
  striped = false,
  className,
}: ProgressBarProps) {
  const isIndeterminate = value === undefined || value === null
  const percent = isIndeterminate ? 0 : Math.min(100, Math.max(0, value))

  return (
    <div
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
    >
      {isIndeterminate ? (
        <div
          className="h-full w-1/3 rounded-full bg-primary"
          style={{
            animation: "progress-indeterminate 1.5s ease-in-out infinite",
          }}
        />
      ) : (
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
          style={{
            width: `${percent}%`,
            ...(striped
              ? {
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent, transparent 6px, rgb(255 255 255 / 0.12) 6px, rgb(255 255 255 / 0.12) 12px)",
                }
              : {}),
          }}
        />
      )}
    </div>
  )
}
