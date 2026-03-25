import { Link } from "react-router-dom"
import GradientButton from "./GradientButton"

function ExploreCta() {
  return (
    <section className="explore-cta-section" aria-label="Explore all elements">
      <div className="container explore-cta-container">
        <Link to="/elements" className="explore-cta-link" aria-label="Explore all elements">
          <GradientButton text="🚀 Explore All Elements" />
        </Link>
      </div>
    </section>
  )
}

export default ExploreCta
