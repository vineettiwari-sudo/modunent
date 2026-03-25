import { useEffect, useMemo, useState } from "react"

function GradientButton({ variant = "primary", state = "idle", className = "" }) {
  const [pressed, setPressed] = useState(false)

  const forcedClasses = useMemo(() => className.split(" ").filter(Boolean), [className])
  const isForcedLoading = forcedClasses.includes("is-loading")
  const isForcedDisabled = forcedClasses.includes("is-disabled")
  const isDisabled = state === "disabled" || isForcedDisabled || isForcedLoading

  useEffect(() => {
    if (isDisabled) {
      setPressed(false)
    }
  }, [isDisabled])

  const handleClick = () => {
    if (isDisabled) return
    setPressed(true)
    setTimeout(() => setPressed(false), 180)
  }

  return (
    <div className="lib-card lib-gradient-button" aria-label="Gradient button preview">
      <button
        type="button"
        className={`lib-gradient-cta lib-gradient-${variant} ${pressed ? "is-pressed" : ""} ${className}`.trim()}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {isForcedLoading ? (
          <>
            <span className="lib-gradient-spinner" aria-hidden="true" />
            Loading...
          </>
        ) : (
          <>{isDisabled ? "Disabled" : "Launch component"}</>
        )}
      </button>
    </div>
  )
}

export default GradientButton
