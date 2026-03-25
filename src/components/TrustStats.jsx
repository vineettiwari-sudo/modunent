import { elementRegistry } from "../../lib/registry"

const totalElements = elementRegistry.length
const totalVariants = elementRegistry.reduce((sum, item) => sum + (item.variants?.length ?? 0), 0)
const totalCategories = new Set(elementRegistry.map((item) => item.category)).size

const stats = [
  { value: `${totalElements}+`, label: "Elements" },
  { value: `${totalVariants}+`, label: "Variants" },
  { value: `${totalCategories}`, label: "Categories" },
  { value: "Free", label: "Forever" },
]

function TrustStats() {
  return (
    <section className="trust-section" aria-label="Trust markers">
      <div className="container trust-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="trust-item">
            <p className="trust-value">{stat.value}</p>
            <p className="trust-label">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrustStats
