import { useEffect, useMemo, useState } from "react"

const items = ["Overview", "Docs", "Pricing"]

const stateToLabel = {
  overview: "Overview",
  docs: "Docs",
  pricing: "Pricing",
}

function StickyNavbar({ variant = "compact", state = "overview", className = "" }) {
  const [active, setActive] = useState(stateToLabel[state] ?? "Overview")

  const forcedClasses = useMemo(() => className.split(" ").filter(Boolean), [className])
  const isBlocked = forcedClasses.includes("is-disabled") || forcedClasses.includes("is-loading")

  useEffect(() => {
    setActive(stateToLabel[state] ?? "Overview")
  }, [state])

  return (
    <div className={`lib-card lib-sticky-navbar lib-sticky-${variant} ${className}`.trim()} aria-label="Sticky navbar preview">
      <div className="lib-sticky-shell">
        <span className="lib-sticky-logo">Modunent</span>
        <div className="lib-sticky-items">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className={`lib-sticky-item ${active === item ? "is-active" : ""}`}
              onClick={() => {
                if (isBlocked) return
                setActive(item)
              }}
              disabled={isBlocked}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StickyNavbar
