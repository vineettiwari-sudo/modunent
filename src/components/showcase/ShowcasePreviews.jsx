import { useEffect, useState } from "react"

/** Shared preview components: same elements as home page showcase. Used in registry and home. */

function barLevelClass(height) {
  const level = Math.max(2, Math.min(9, Math.round(height / 10)))
  return `h-${level}`
}

export function ShowcaseRadio() {
  const [on, setOn] = useState(false)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOn((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn((p) => !p) } }}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className={`cs-radio ${on ? "is-on" : ""}`}>
        <div className="cs-radio-inner" />
      </div>
    </div>
  )
}

export function ShowcaseBars() {
  const [bars, setBars] = useState([32, 70, 84, 60, 38])
  const shuffle = () => setBars((prev) => prev.map(() => Math.round(20 + Math.random() * 70)))
  return (
    <div className="cs-bars-wrap" style={{ width: "180px" }} onClick={shuffle} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") shuffle() }}>
      <div className="cs-bars">
        {bars.map((height, index) => (
          <span
            key={`bar-${index}`}
            className={`cs-bar ${height > 55 ? "is-high" : "is-low"} ${barLevelClass(height)}`}
          />
        ))}
      </div>
      <div className="cs-bars-footer">
        <span className="cs-dot-red" />
        <span className="cs-bars-line" />
      </div>
    </div>
  )
}

export function ShowcaseLightningButton() {
  return <button type="button" className="cs-btn cs-btn-lightning">⚡ button</button>
}

export function ShowcaseGetStarted() {
  return <button type="button" className="cs-btn cs-btn-start">Get started</button>
}

export function ShowcaseTealButton() {
  return <button type="button" className="cs-btn cs-btn-teal">Button</button>
}

export function ShowcaseOutlineButton() {
  return <button type="button" className="cs-btn cs-btn-outline">Button ▶</button>
}

export function ShowcaseMorning() {
  const [on, setOn] = useState(false)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOn((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn((p) => !p) } }}
      className="cs-morning"
      style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <span className={`cs-morning-box ${on ? "is-on" : ""}`} />
      <span className={`cs-morning-text ${on ? "is-on" : ""}`}>Morning</span>
    </div>
  )
}

export function ShowcaseMessageBox() {
  return (
    <div className="cs-msg-box">
      <button type="button" className="cs-msg-icon">⊕</button>
      <input className="cs-msg-input" placeholder="Message..." aria-label="Message" />
      <button type="button" className="cs-msg-send">➜</button>
    </div>
  )
}

export function ShowcaseEarlyAccess() {
  const [joined, setJoined] = useState(false)
  useEffect(() => {
    if (!joined) return
    const t = setTimeout(() => setJoined(false), 2000)
    return () => clearTimeout(t)
  }, [joined])
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setJoined(true)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setJoined(true) } }}
      style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <p className="cs-early">
        {joined ? <>You&apos;re <strong>in</strong>! 🎉</> : <>Get ear<strong>ly</strong> access</>}
      </p>
    </div>
  )
}

export function ShowcaseCheckList() {
  const [checks, setChecks] = useState([false, true, false, false])
  const toggle = (idx) => setChecks((prev) => prev.map((c, i) => (i === idx ? !c : c)))
  return (
    <div className="cs-check-list">
      {checks.map((checked, idx) => (
        <label key={`c-${idx}`} className={`cs-check-row ${idx === 1 ? "is-blue" : ""}`}>
          <input type="checkbox" checked={checked} onChange={() => toggle(idx)} />
          <span>{`Checkbox ${idx + 1}`}</span>
        </label>
      ))}
    </div>
  )
}

export function ShowcaseGithub() {
  const [starred, setStarred] = useState(false)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setStarred((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setStarred((p) => !p) } }}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className="cs-github">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.79 8.2 11.39.6.1.82-.26.82-.57 0-.28-.01-1.23-.01-2.24-3.02.56-3.8-.73-4.04-1.41-.13-.35-.72-1.41-1.23-1.69-.42-.23-1.02-.78-.01-.8.95-.01 1.62.87 1.84 1.23 1.08 1.82 2.81 1.31 3.5.99.1-.78.42-1.3.76-1.6-2.67-.3-5.46-1.34-5.46-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a10.37 10.37 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.44.38.81 1.1.81 2.22 0 1.61-.01 2.89-.01 3.3 0 .31.22.69.82.57A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
        <span>Star on GitHub</span>
        <span className={`cs-star ${starred ? "is-on" : ""}`}>★</span>
        <span className="cs-star-count">{starred ? 7 : 6}</span>
      </div>
    </div>
  )
}

export function ShowcaseExplore() {
  return <button type="button" className="cs-btn cs-btn-explore">🧩 Explore</button>
}

export function ShowcaseRealism() {
  return <button type="button" className="cs-btn cs-btn-realism">Realism</button>
}

export function ShowcaseApply() {
  const [applied, setApplied] = useState(false)
  return (
    <span
      role="button"
      tabIndex={0}
      className={`cs-btn cs-btn-apply ${applied ? "is-done" : ""}`}
      onClick={() => setApplied((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setApplied((p) => !p) } }}
    >
      <span>{applied ? "Applied ✓" : "Apply Now"}</span>
      <span className="cs-apply-plus">⊕</span>
    </span>
  )
}

export function ShowcaseVolume() {
  const [volume, setVolume] = useState(50)
  return (
    <div className="cs-volume-wrap">
      <span className="cs-volume-icon">🔈</span>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="cs-volume-range"
        aria-label="Volume"
      />
    </div>
  )
}

export function ShowcaseSpinner() {
  const [spin, setSpin] = useState(false)
  useEffect(() => {
    if (!spin) return
    const t = setTimeout(() => setSpin(false), 1400)
    return () => clearTimeout(t)
  }, [spin])
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setSpin(true)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSpin(true) } }}
      style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className={`cs-square ${spin ? "is-spin" : ""}`} />
    </div>
  )
}

export function ShowcaseLoadingBar() {
  const [on, setOn] = useState(true)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOn((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn((p) => !p) } }}
      className="cs-loading-box"
      style={{ minHeight: "100%", width: "100%" }}
    >
      <span className="cs-loading-label">Loading</span>
      <div className="cs-loading-track">
        <span className={`cs-loading-fill ${on ? "is-animating" : ""}`} />
      </div>
    </div>
  )
}

export function ShowcaseProgressBar() {
  const [on, setOn] = useState(true)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOn((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn((p) => !p) } }}
      className="cs-progress-box"
      style={{ minHeight: "100%", width: "100%" }}
    >
      <span className="cs-progress-label">Progress</span>
      <div className="cs-progress-track">
        <span className={`cs-progress-fill ${on ? "is-animating" : ""}`} />
      </div>
    </div>
  )
}

export function ShowcaseTerminal() {
  return (
    <div className="cs-terminal">
      <div className="cs-terminal-top">
        <span>Status</span>
        <div className="cs-terminal-dots">
          <i className="is-red" />
          <i className="is-yellow" />
          <i className="is-green" />
        </div>
      </div>
      <div className="cs-terminal-body">
        <span className="cs-status-dot" />
        <span>system online</span>
        <span className="cs-cursor">|</span>
      </div>
    </div>
  )
}

export function ShowcaseCapsButton() {
  return <button type="button" className="cs-btn cs-btn-caps">BUTTON</button>
}

export function ShowcasePlusButton() {
  return <button type="button" className="cs-btn cs-btn-plus">+</button>
}

export function ShowcaseModernButton() {
  return <button type="button" className="cs-btn cs-btn-modern">Modern Button →</button>
}

export function ShowcaseToggle() {
  const [on, setOn] = useState(false)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOn((p) => !p)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn((p) => !p) } }}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className={`cs-toggle cs-toggle-medium ${on ? "is-on" : ""}`}>
        <div className="cs-toggle-knob" />
      </div>
    </div>
  )
}
