/**
 * Standard grid layout for element cards.
 * Layout: 1 col (mobile) → 2 (sm) → 3 (md) → 4 (lg) → 5 (xl), responsive gap.
 */
export const ELEMENT_GRID_CLASS =
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"

export default function ElementGridLayout({ children, className = "", columns }) {
  const gridClass = columns === 3
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    : ELEMENT_GRID_CLASS

  return <div className={`${gridClass} ${className}`.trim()}>{children}</div>
}
