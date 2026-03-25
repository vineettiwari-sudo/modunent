/**
 * Badge – variants from Figma "Badges (Passive Indicators)": Neutral, Success, Warning, Error, Highlight, Outline.
 * Mapping: FIGMA_UIVERSE_MAPPING.md
 */
export default function Badge({ variant = "neutral" }) {
  const styles = {
    neutral: "bg-gray-200 text-gray-700",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    error: "bg-red-100 text-red-800",
    highlight: "bg-blue-100 text-blue-800",
    outline: "bg-transparent border border-gray-300 text-gray-700",
  }

  return <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${styles[variant] ?? styles.neutral}`}>{variant}</span>
}
