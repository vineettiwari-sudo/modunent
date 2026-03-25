import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

/** Element registry IDs: same elements as in library Showcase category. */
const CARD_TO_ELEMENT_ID = {
  radio: "showcase-radio",
  bars: "showcase-bars",
  lightning: "showcase-lightning",
  getStarted: "showcase-get-started",
  teal: "showcase-teal",
  outline: "showcase-outline",
  morning: "showcase-morning",
  message: "showcase-message",
  earlyAccess: "showcase-early-access",
  checkList: "showcase-check-list",
  github: "showcase-github",
  explore: "showcase-explore",
  realism: "showcase-realism",
  apply: "showcase-apply",
  volume: "showcase-volume",
  spinner: "showcase-spinner",
  loadingBar: "showcase-loading-bar",
  progressBar: "showcase-progress-bar",
  terminal: "showcase-terminal",
  capsButton: "showcase-caps-button",
  plusButton: "showcase-plus-button",
  modernButton: "showcase-modern-button",
  toggle: "showcase-toggle",
}

function stopPropagation(e) {
  e.preventDefault()
  e.stopPropagation()
}

function ComponentShowcase() {
  const [radioOn, setRadioOn] = useState(false)
  const [bars, setBars] = useState([32, 70, 84, 60, 38])
  const [morningOn, setMorningOn] = useState(false)
  const [joinedEarly, setJoinedEarly] = useState(false)
  const [checks, setChecks] = useState([false, true, false, false])
  const [starred, setStarred] = useState(false)
  const [applied, setApplied] = useState(false)
  const [spinSquare, setSpinSquare] = useState(false)
  const [toggleMedium, setToggleMedium] = useState(false)
  const [volume, setVolume] = useState(50)
  const [loadingOn, setLoadingOn] = useState(true)
  const [progressOn, setProgressOn] = useState(true)

  const barLevelClass = (height) => {
    const level = Math.max(2, Math.min(9, Math.round(height / 10)))
    return `h-${level}`
  }

  useEffect(() => {
    if (!joinedEarly) return undefined

    const timer = setTimeout(() => {
      setJoinedEarly(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [joinedEarly])

  useEffect(() => {
    if (!spinSquare) return undefined

    const timer = setTimeout(() => {
      setSpinSquare(false)
    }, 1400)

    return () => clearTimeout(timer)
  }, [spinSquare])

  const shuffleBars = () => {
    setBars((prev) =>
      prev.map(() => {
        const next = Math.round(20 + Math.random() * 70)
        return next
      }),
    )
  }

  const toggleCheck = (idx) => {
    setChecks((prev) => prev.map((checked, index) => (index === idx ? !checked : checked)))
  }

  return (
    <section className="showcase-section" aria-label="Interactive component showcase">
      <div className="container showcase-wrap">
        <div className="showcase-grid preview-light-theme">
          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.radio}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setRadioOn((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setRadioOn((prev) => !prev) } }}
              className={`cs-radio ${radioOn ? "is-on" : ""}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div className="cs-radio-inner" />
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.bars}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); shuffleBars() }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); shuffleBars() } }}
              className="cs-bars-wrap"
              style={{ minHeight: "100%" }}
            >
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
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.lightning}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-lightning" onClick={stopPropagation}>
              ⚡ button
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.getStarted}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-start" onClick={stopPropagation}>
              Get started
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.teal}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-teal" onClick={stopPropagation}>
              Button
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.outline}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-outline" onClick={stopPropagation}>
              Button ▶
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.morning}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setMorningOn((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setMorningOn((prev) => !prev) } }}
              className="cs-morning"
              style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <span className={`cs-morning-box ${morningOn ? "is-on" : ""}`} />
              <span className={`cs-morning-text ${morningOn ? "is-on" : ""}`}>Morning</span>
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.message}`} className="showcase-card">
            <div className="cs-msg-box" onClick={stopPropagation}>
              <button type="button" className="cs-msg-icon">
                ⊕
              </button>
              <input className="cs-msg-input" placeholder="Message..." aria-label="Message" />
              <button type="button" className="cs-msg-send">
                ➜
              </button>
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.earlyAccess}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setJoinedEarly(true) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setJoinedEarly(true) } }}
              style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
            <p className="cs-early">
              {joinedEarly ? (
                <>
                  You&apos;re <strong>in</strong>! 🎉
                </>
              ) : (
                <>
                  Get ear<strong>ly</strong> access
                </>
              )}
            </p>
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.checkList}`} className="showcase-card">
            <div className="cs-check-list" onClick={stopPropagation}>
              {checks.map((checked, idx) => (
                <label key={`check-${idx}`} className={`cs-check-row ${idx === 1 ? "is-blue" : ""}`}>
                  <input type="checkbox" checked={checked} onChange={() => toggleCheck(idx)} />
                  <span>{`Checkbox ${idx + 1}`}</span>
                </label>
              ))}
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.github}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setStarred((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setStarred((prev) => !prev) } }}
              style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
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
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.explore}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-explore" onClick={stopPropagation}>
              🧩 Explore
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.realism}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-realism" onClick={stopPropagation}>
              Realism
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.apply}`} className="showcase-card">
            <span
              role="button"
              tabIndex={0}
              className={`cs-btn cs-btn-apply ${applied ? "is-done" : ""}`}
              onClick={(e) => { stopPropagation(e); setApplied((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setApplied((prev) => !prev) } }}
            >
              <span>{applied ? "Applied ✓" : "Apply Now"}</span>
              <span className="cs-apply-plus">⊕</span>
            </span>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.volume}`} className="showcase-card showcase-card-tall">
            <div className="cs-volume-wrap" onClick={stopPropagation}>
              <span className="cs-volume-icon">🔈</span>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="cs-volume-range"
                aria-label="Volume"
              />
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.spinner}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setSpinSquare(true) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setSpinSquare(true) } }}
              style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
            <div className={`cs-square ${spinSquare ? "is-spin" : ""}`} />
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.loadingBar}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setLoadingOn((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setLoadingOn((prev) => !prev) } }}
              className="cs-loading-box"
              style={{ minHeight: "100%", width: "100%" }}
            >
              <span className="cs-loading-label">Loading</span>
              <div className="cs-loading-track">
                <span className={`cs-loading-fill ${loadingOn ? "is-animating" : ""}`} />
              </div>
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.progressBar}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setProgressOn((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setProgressOn((prev) => !prev) } }}
              className="cs-progress-box"
              style={{ minHeight: "100%", width: "100%" }}
            >
              <span className="cs-progress-label">Progress</span>
              <div className="cs-progress-track">
                <span className={`cs-progress-fill ${progressOn ? "is-animating" : ""}`} />
              </div>
            </div>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.terminal}`} className="showcase-card">
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
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.capsButton}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-caps" onClick={stopPropagation}>
              BUTTON
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.plusButton}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-plus" onClick={stopPropagation}>+</button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.modernButton}`} className="showcase-card">
            <button type="button" className="cs-btn cs-btn-modern" onClick={stopPropagation}>
              Modern Button →
            </button>
          </Link>

          <Link to={`/elements/card/${CARD_TO_ELEMENT_ID.toggle}`} className="showcase-card">
            <div
              role="button"
              tabIndex={0}
              onClick={(e) => { stopPropagation(e); setToggleMedium((prev) => !prev) }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { stopPropagation(e); setToggleMedium((prev) => !prev) } }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div className={`cs-toggle cs-toggle-medium ${toggleMedium ? "is-on" : ""}`}>
                <div className="cs-toggle-knob" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ComponentShowcase
