/**
 * DiscountPill – variants from Figma "Discount Pills": Percentage, Amount, BOGO, Member, Highlight, Outline; states Expired, Disabled.
 * Mapping: FIGMA_UIVERSE_MAPPING.md
 */
export default function DiscountPill({ variant = "percentage", forcedState = "default" }) {
  const styles = {
    percentage: "bg-red-600 text-[#e7e3e4]",
    amount: "bg-orange-600 text-[#e7e3e4]",
    bogo: "bg-green-600 text-[#e7e3e4]",
    member: "bg-purple-600 text-[#e7e3e4]",
    highlight: "bg-yellow-400 text-black",
    outline: "bg-white text-red-600 border-2 border-red-600",
  }

  const isExpired = forcedState === "expired"
  const isDisabled = forcedState === "disabled" || forcedState === "isDisabled"

  const base = "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full"
  const variantClass = styles[variant] ?? styles.percentage
  const expiredClass = "bg-gray-200 text-gray-500 border border-gray-300"
  const disabledClass = "opacity-50"

  const resolved =
    isExpired ? expiredClass : variantClass
  const extra = isDisabled && !isExpired ? disabledClass : ""
  const grayscale = isExpired && variant !== "outline" ? "grayscale" : ""

  return (
    <span className={`${base} ${resolved} ${extra} ${grayscale}`}>
      {variant.toUpperCase()}
    </span>
  )
}
