import { useState } from "react"
import { Link, useLocation, useSearchParams, useNavigate } from "react-router-dom"
import { elementRegistry } from "../../../lib/registry"

const ITEM_TO_SLUG = {
  "All": "",
  "Showcase": "showcase",
  "Product Cards": "product-cards",
  "Buttons": "buttons",
  "Quantity Selectors": "quantity-selectors",
  "Tags": "tags",
  "Discount Pills": "discount-pills",
  "Badges": "badges",
  "Input Fields": "input-fields",
  "Navigation": "navigation",
  "Announcements": "announcements",
  "Filters & Sorting": "filters-sorting",
}

const SLUG_TO_ITEM = Object.fromEntries(
  Object.entries(ITEM_TO_SLUG).map(([k, v]) => [v, k])
)

// Pre-compute counts per category
const categoryCounts = elementRegistry.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] ?? 0) + 1
  return acc
}, {})

function Sidebar({ activeItem: activeItemProp }) {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const searchQuery = searchParams.get("q") ?? ""

  const categorySlug = pathname.startsWith("/elements/") && !pathname.startsWith("/elements/card/")
    ? pathname.replace("/elements", "").replace(/^\//, "")
    : ""
  const activeItem = activeItemProp ?? (SLUG_TO_ITEM[categorySlug] ?? "All")

  const handleSearchChange = (e) => {
    const q = e.target.value
    const params = q ? `?q=${encodeURIComponent(q)}` : ""
    navigate(`/elements${params}`, { replace: true })
  }

  const items = [
    "All",
    "Showcase",
    "Product Cards",
    "Buttons",
    "Quantity Selectors",
    "Tags",
    "Discount Pills",
    "Badges",
    "Input Fields",
    "Navigation",
    "Announcements",
    "Filters & Sorting",
  ]

  const sidebarContent = (
    <div className="flex flex-col h-full" style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <div className="relative h-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="app-sidebar-input w-full h-9 pr-4 rounded-xl border text-sm transition-colors duration-200"
            style={{ paddingLeft: 44 }}
            aria-label="Search elements"
          />
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = activeItem === item && !searchQuery
          const count = item === "All" ? elementRegistry.length : (categoryCounts[item] ?? 0)
          return (
            <Link
              key={item}
              to={ITEM_TO_SLUG[item] ? `/elements/${ITEM_TO_SLUG[item]}` : "/elements"}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between h-9 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? "app-sidebar-link-active"
                  : "app-sidebar-link"
              }`}
              style={{ minHeight: 36, paddingLeft: 12, paddingRight: 12 }}
            >
              <span>{item}</span>
              {count > 0 && (
                <span className={`text-xs tabular-nums ${isActive ? "opacity-80" : "opacity-40"}`}>
                  {count}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop sidebar — always visible, part of layout flow */}
      <aside
        className="app-sidebar hidden lg:flex w-[260px] shrink-0 min-h-[calc(100vh-4.5rem)] sticky top-[4.5rem] overflow-y-auto flex-col self-stretch border-r"
      >
        {sidebarContent}
      </aside>

      {/* Mobile sidebar — slides in from left */}
      <aside
        className={`app-sidebar lg:hidden w-[260px] shrink-0 min-h-[calc(100vh-4.5rem)] overflow-y-auto flex flex-col self-stretch border-r
          fixed top-[4.5rem] z-40 transition-transform duration-300`}
        style={{
          background: 'var(--color-bg)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {sidebarContent}
      </aside>
    </>
  )
}

export default Sidebar
