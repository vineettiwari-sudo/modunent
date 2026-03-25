import { useState } from "react"

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="lib-card lib-toggle" aria-label="Toggle switch preview">
      <button
        type="button"
        className={`lib-toggle-track ${enabled ? "is-on" : ""}`}
        onClick={() => setEnabled((prev) => !prev)}
        aria-pressed={enabled}
      >
        <span className="lib-toggle-thumb" />
      </button>
      <p className="lib-caption">{enabled ? "Enabled" : "Disabled"}</p>
    </div>
  )
}

export default ToggleSwitch
