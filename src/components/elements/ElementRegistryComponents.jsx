import { useState } from "react"

function ToggleSwitchPreview() {
  return (
    <div className="registry-preview registry-preview-toggle" aria-hidden="true">
      <span className="track">
        <span className="thumb" />
      </span>
    </div>
  )
}

function HeroLayoutPreview() {
  return (
    <div className="registry-preview registry-preview-hero" aria-hidden="true">
      <span className="pill" />
      <span className="line lineWide" />
      <span className="line" />
    </div>
  )
}

function TabNavigationPreview() {
  return (
    <div className="registry-preview registry-preview-tabs" aria-hidden="true">
      <span className="tab active">Overview</span>
      <span className="tab">Details</span>
      <span className="tab">Specs</span>
    </div>
  )
}

function ToggleSwitchFull({ variant = "default", forcedState = "" }) {
  const [enabled, setEnabled] = useState(false)

  const isDisabled = forcedState === "isDisabled" || forcedState === "isLoading"
  const isOn = forcedState === "isActive" ? true : enabled

  return (
    <div className={`registry-full registry-full-toggle registry-${variant}`}>
      <button
        type="button"
        className={`registry-toggle-track ${forcedState} ${isOn ? "isOn" : ""}`.trim()}
        disabled={isDisabled}
        onClick={() => {
          if (isDisabled) return
          setEnabled((prev) => !prev)
        }}
      >
        <span className="registry-toggle-thumb" />
      </button>
    </div>
  )
}

function HeroLayoutFull({ forcedState = "" }) {
  return (
    <section className={`registry-full registry-full-hero ${forcedState}`.trim()}>
      <p className="badge">NEW LAYOUT</p>
      <h3>Build high-converting hero sections quickly</h3>
      <p className="meta">Clean structure, strong hierarchy, and reusable action blocks.</p>
      <button type="button" className="cta">Start Building</button>
    </section>
  )
}

function TabNavigationFull({ forcedState = "" }) {
  const [active, setActive] = useState("Overview")
  const tabs = ["Overview", "Components", "Pricing"]
  const forcedActive = forcedState === "isActive"
  const isDisabled = forcedState === "isDisabled" || forcedState === "isLoading"

  return (
    <div className={`registry-full registry-full-tabs ${forcedState}`.trim()}>
      <div className="tabRow">
        {tabs.map((tab, index) => {
          const isCurrent = forcedActive ? index === 1 : active === tab

          return (
            <button
              key={tab}
              type="button"
              className={`tabBtn ${isCurrent ? "isCurrent" : ""}`}
              onClick={() => {
                if (isDisabled) return
                setActive(tab)
              }}
              disabled={isDisabled}
            >
              {tab}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export {
  ToggleSwitchPreview,
  HeroLayoutPreview,
  TabNavigationPreview,
  ToggleSwitchFull,
  HeroLayoutFull,
  TabNavigationFull,
}
