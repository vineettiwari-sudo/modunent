import { useEffect, useMemo, useState } from "react"

const levels = ["w-18", "w-30", "w-42", "w-56", "w-68", "w-82", "w-94"]

const stateToLevel = {
  low: 1,
  medium: 3,
  high: 5,
}

function ProgressBar({ variant = "default", state = "running", className = "" }) {
  const [levelIndex, setLevelIndex] = useState(stateToLevel.medium)

  const forcedClasses = useMemo(() => className.split(" ").filter(Boolean), [className])
  const isForcedLoading = forcedClasses.includes("is-loading")
  const resolvedState = isForcedLoading ? "running" : state

  useEffect(() => {
    if (resolvedState !== "running") {
      setLevelIndex(stateToLevel[resolvedState] ?? stateToLevel.medium)
      return undefined
    }

    const timer = setInterval(() => {
      setLevelIndex((prev) => (prev === levels.length - 1 ? 0 : prev + 1))
    }, 420)

    return () => clearInterval(timer)
  }, [resolvedState])

  const progressLabel = levels[levelIndex].replace("w-", "")

  return (
    <div className={`lib-card lib-progress lib-progress-${variant} ${className}`.trim()} aria-label="Progress bar preview">
      <div className="lib-progress-track">
        <span className={`lib-progress-fill ${levels[levelIndex]}`} />
      </div>
      <p className="lib-caption">{progressLabel}% synced</p>
    </div>
  )
}

export default ProgressBar
