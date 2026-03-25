import { useState } from "react"

const items = ["Overview", "Docs", "Pricing"]

function StickyNavbar() {
  const [active, setActive] = useState("Overview")

  return (
    <div className="lib-card lib-sticky-navbar" aria-label="Sticky navbar preview">
      <div className="lib-sticky-shell">
        <span className="lib-sticky-logo">Modunent</span>
        <div className="lib-sticky-items">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className={`lib-sticky-item ${active === item ? "is-active" : ""}`}
              onClick={() => setActive(item)}
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
