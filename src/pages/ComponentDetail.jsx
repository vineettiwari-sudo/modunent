import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { registry } from "../data/registry"

function ComponentDetail() {
  const { slug } = useParams()
  const entry = registry[slug]

  const [selectedVariant, setSelectedVariant] = useState("default")
  const [selectedState, setSelectedState] = useState("default")
  const [previewTheme, setPreviewTheme] = useState("dark")

  useEffect(() => {
    if (!entry) return
    setSelectedVariant(entry.variants?.[0] ?? "default")
    setSelectedState("default")
  }, [entry])

  if (!entry) {
    return (
      <main className="container">
        <Link to="/elements">← Back to elements</Link>
        <h1>Component not found</h1>
      </main>
    )
  }

  const FullComponent = entry.component

  return (
    <main>
      <section className="component-detail-page">
        <div className="container component-detail-wrap">

          <Link to="/elements" className="component-back">
            ← Back to elements
          </Link>

          <header>
            <h1>{entry.title}</h1>
            <p>{entry.description}</p>
          </header>

          <div className="component-detail-controls">

            <div className="component-pill-group">
              <span>Variant</span>
              <div className="component-pill-row">
                {entry.variants.map((variant) => (
                  <button
                    type="button"
                    key={variant}
                    className={`component-pill ${selectedVariant === variant ? "is-active" : ""}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="component-pill-group">
              <span>State</span>
              <div className="component-pill-row">
                {entry.states.map((state) => (
                  <button
                    type="button"
                    key={state}
                    className={`component-pill ${selectedState === state ? "is-active" : ""}`}
                    onClick={() => setSelectedState(state)}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="component-preview">
            <div
              className="component-preview-wrapper"
              data-theme={previewTheme}
            >

              <button
                className="component-preview-theme-icon"
                onClick={() =>
                  setPreviewTheme((prev) =>
                    prev === "dark" ? "light" : "dark"
                  )
                }
              >
                {previewTheme === "dark" ? "🌞" : "🌙"}
              </button>

              <div className="component-preview-content">
                <FullComponent
                  key={`${selectedVariant}-${selectedState}`}
                  variant={selectedVariant}
                  forcedState={selectedState}
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default ComponentDetail
