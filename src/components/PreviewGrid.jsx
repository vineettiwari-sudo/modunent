const cards = [
  { title: "Product Showcase", tag: "UI Block", tone: "alpha" },
  { title: "Cart Summary", tag: "Checkout", tone: "beta" },
  { title: "Category Strip", tag: "Catalog", tone: "gamma" },
  { title: "Pricing Toggle", tag: "Pricing", tone: "delta" },
  { title: "Review Feed", tag: "Social", tone: "alpha" },
  { title: "Promo Layout", tag: "Campaign", tone: "beta" },
  { title: "Mini Dashboard", tag: "Analytics", tone: "gamma" },
  { title: "Shipping Steps", tag: "Flow", tone: "delta" },
]

function PreviewGrid() {
  return (
    <section className="preview-section" aria-labelledby="preview-title">
      <div className="container preview-container">
        <h2 id="preview-title" className="preview-title">
          Explore screen previews
        </h2>
        <div className="preview-grid">
          {cards.map((card) => (
            <article key={card.title} className={`preview-card preview-card-${card.tone}`}>
              <header className="preview-card-header">
                <span className="preview-tag">{card.tag}</span>
                <button type="button" className="preview-menu" aria-label={`${card.title} menu`}>
                  ...
                </button>
              </header>

              <div className="preview-surface">
                <div className="preview-surface-line preview-surface-line-long" />
                <div className="preview-surface-line preview-surface-line-mid" />
                <div className="preview-chip-row">
                  <span className="preview-mini-chip">Fast</span>
                  <span className="preview-mini-chip">Responsive</span>
                </div>
              </div>

              <div className="preview-controls">
                <button type="button" className="preview-ghost-btn">
                  Preview
                </button>
                <label className="preview-switch" aria-label="Toggle demo state">
                  <input type="checkbox" defaultChecked />
                  <span className="preview-slider" />
                </label>
              </div>

              <footer className="preview-footer">
                <p className="preview-card-title">{card.title}</p>
                <button type="button" className="preview-primary-btn">
                  Open
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreviewGrid
