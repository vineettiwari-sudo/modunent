import { useEffect, useMemo, useState } from "react"

function ToggleSwitch({ variant = "default", state = "on", className = "" }) {
  const [enabled, setEnabled] = useState(state !== "off")

  const forcedClasses = useMemo(() => className.split(" ").filter(Boolean), [className])
  const isBlocked = forcedClasses.includes("is-disabled") || forcedClasses.includes("is-loading")

  useEffect(() => {
    setEnabled(state !== "off")
  }, [state])

  return (
    <div className="lib-card lib-toggle" aria-label="Toggle switch preview">
      <button
        type="button"
        className={`lib-toggle-track lib-toggle-${variant} ${enabled ? "is-on" : ""} ${className}`.trim()}
        onClick={() => {
          if (isBlocked) return
          setEnabled((prev) => !prev)
        }}
        aria-pressed={enabled}
        disabled={isBlocked}
      >
        <span className="lib-toggle-thumb" />
      </button>
      <p className="lib-caption">{enabled ? "Enabled" : "Disabled"}</p>
    </div>
  )
}

export default ToggleSwitch
