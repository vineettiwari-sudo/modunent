import { useEffect, useMemo, useState } from "react"

const stateMap = {
  mixed: [true, false, true],
  all: [true, true, true],
  none: [false, false, false],
}

function CheckboxGroup({ variant = "default", state = "mixed", className = "" }) {
  const [items, setItems] = useState(stateMap[state] ?? stateMap.mixed)

  const forcedClasses = useMemo(() => className.split(" ").filter(Boolean), [className])
  const isBlocked = forcedClasses.includes("is-disabled") || forcedClasses.includes("is-loading")

  useEffect(() => {
    setItems(stateMap[state] ?? stateMap.mixed)
  }, [state])

  const toggleItem = (index) => {
    if (isBlocked) return
    setItems((prev) => prev.map((checked, idx) => (idx === index ? !checked : checked)))
  }

  return (
    <div
      className={`lib-card lib-checkbox-group lib-checkbox-${variant} ${className}`.trim()}
      aria-label="Checkbox group preview"
    >
      {items.map((checked, index) => (
        <label key={`lib-checkbox-${index}`} className="lib-checkbox-row">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleItem(index)}
            aria-label={`Option ${index + 1}`}
            disabled={isBlocked}
          />
          <span className={`lib-checkbox-box ${checked ? "is-checked" : ""}`}>✓</span>
          <span className="lib-checkbox-text">Option {index + 1}</span>
        </label>
      ))}
    </div>
  )
}

export default CheckboxGroup
