import { useParams, useSearchParams } from "react-router-dom"
import Topbar from "../components/layout/Topbar"
import Sidebar from "../components/layout/Sidebar"
import ElementsGrid from "../components/elements/ElementsGrid"
import { elementRegistry } from "../../lib/registry"

const SLUG_TO_TITLE = {
  showcase: "Showcase",
  "product-cards": "Product Cards",
  buttons: "Buttons",
  "quantity-selectors": "Quantity Selectors",
  tags: "Tags",
  "discount-pills": "Discount Pills",
  badges: "Badges",
  "input-fields": "Input Fields",
  navigation: "Navigation",
  announcements: "Announcements",
  "filters-sorting": "Filters & Sorting",
}

function Elements() {
  const { category: categorySlug } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("q")?.trim() ?? ""

  const title = categorySlug ? (SLUG_TO_TITLE[categorySlug] ?? categorySlug) : "All"
  const categoryName = categorySlug ? SLUG_TO_TITLE[categorySlug] ?? categorySlug : null

  let items = categoryName
    ? elementRegistry.filter((item) => item.category === categoryName)
    : elementRegistry

  if (searchQuery) {
    const q = searchQuery.toLowerCase()
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
    )
  }

  const hasItems = items.length > 0
  const pageTitle = searchQuery ? `Results for "${searchQuery}"` : title

  return (
    <div className="min-h-screen flex flex-col app-elements-page">
      <Topbar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 overflow-auto min-w-0" style={{ padding: 32 }}>
          <div className="w-full">
            <div style={{ marginBottom: 24 }}>
              <h1 className="text-3xl font-bold">{pageTitle}</h1>
              {searchQuery && (
                <p className="text-sm opacity-60 mt-1">
                  {items.length} result{items.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>
            {!hasItems ? (
              <div className="flex flex-col items-center justify-center py-24 opacity-60">
                <svg className="w-12 h-12 mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
                </svg>
                <p className="text-base font-medium">No elements found</p>
                {searchQuery && <p className="text-sm mt-1">Try a different search term</p>}
              </div>
            ) : (
              <ElementsGrid items={items} />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Elements
