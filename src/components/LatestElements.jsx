import { Link } from "react-router-dom"
import { elementRegistry } from "../../lib/registry"

// Pick the last 3 non-Showcase elements as "latest"
const latestElements = elementRegistry
  .filter((item) => item.category !== "Showcase")
  .slice(-3)
  .reverse()

function LatestElements() {
  return (
    <section className="latest-section" aria-labelledby="latest-title">
      <div className="container latest-container">
        <div className="latest-header">
          <h2 id="latest-title">Latest New Elements</h2>
          <Link to="/elements" className="latest-view-all">
            View all →
          </Link>
        </div>

        <div className="latest-grid">
          {latestElements.map((element) => (
            <Link
              key={element.id}
              to={`/elements/card/${element.id}`}
              className="latest-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="latest-preview latest-preview-generic">
                <div className="latest-preview-inner" style={{ transform: "scale(0.75)", transformOrigin: "center center" }}>
                  {element.variants?.[0]?.preview ?? null}
                </div>
              </div>
              <div className="latest-card-body">
                <span className="latest-dot" />
                <h3>{element.title}</h3>
                <p>{element.description ?? `A ${element.category.toLowerCase()} component.`}</p>
                <span className="latest-read-link">
                  View component →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestElements
