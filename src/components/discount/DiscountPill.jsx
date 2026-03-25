import styles from "./discountPill.module.css"

const typeLabel = {
  percentage: "OFF",
  amount: "SAVE",
  bogo: "BOGO",
  member: "MEMBER",
}

function DiscountPill({ type = "percentage", value, state = "default" }) {
  const rootClassName = [
    styles.pill,
    styles[type] ?? styles.percentage,
    styles[state] ?? styles.default,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <span className={rootClassName}>
      <span className={styles.label}>{typeLabel[type] ?? typeLabel.percentage}</span>
      <span className={styles.value}>{value}</span>
    </span>
  )
}

export default DiscountPill
