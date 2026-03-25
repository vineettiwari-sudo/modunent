/**
 * Tag – variants from Figma "Tags (Interactive Chips)": Default, Selected, Removable, Outline, Compact.
 * Mapping: FIGMA_UIVERSE_MAPPING.md
 */
export default function Tag({ variant = "default", forcedState = "default", onRemove, children }) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border transition-all duration-200"

  const variants = {
    default: "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200",
    selected: "bg-gray-800 text-[#e7e3e4] border-gray-800",
    removable: "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200",
    outline: "bg-transparent text-gray-700 border-gray-400",
    compact: "px-2 py-0.5 text-xs bg-gray-100 text-gray-700 border-gray-300",
  }

  const isDisabled = forcedState === "disabled" || forcedState === "isDisabled"
  const showRemove = variant === "removable" && typeof onRemove === "function"

  return (
    <span
      className={`
        ${base}
        ${variants[variant] ?? variants.default}
        ${isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
      `}
    >
      {children ?? variant}
      {showRemove && (
        <button
          type="button"
          aria-label="Remove"
          className="ml-0.5 rounded p-0.5 hover:bg-gray-300/50"
          onClick={(e) => { e.stopPropagation(); onRemove() }}
        >
          <span className="text-xs leading-none">×</span>
        </button>
      )}
    </span>
  )
}
