import { useNavigate } from "react-router-dom"

function Hero() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const q = e.target.elements.query.value.trim()
    if (q) {
      navigate(`/elements?q=${encodeURIComponent(q)}`)
    } else {
      navigate("/elements")
    }
  }

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-glow" />
      <div className="container hero-container">
        <p className="hero-badge">FREE E-COMMERCE UI LIBRARY</p>
        <h1 id="hero-title" className="hero-title">
          <span>Build e-commerce</span>
          <span>interfaces faster</span>
        </h1>
        <p className="hero-description">
          Production-ready sections and blocks crafted to help teams launch modern storefronts
          with speed and consistency.
        </p>
        <form className="hero-search" role="search" aria-label="Search components" onSubmit={handleSearch}>
          <label htmlFor="hero-search-input" className="hero-search-label">
            Search library
          </label>
          <input
            id="hero-search-input"
            name="query"
            type="search"
            className="hero-search-input"
            placeholder="Search components, sections, templates..."
          />
          <button type="submit" className="hero-search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
