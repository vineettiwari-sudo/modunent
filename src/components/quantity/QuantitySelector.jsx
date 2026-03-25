import styles from "./quantitySelector.module.css"

function QuantitySelector({
  value,
  min = 1,
  max = 99,
  disabled = false,
  error = false,
  loading = false,
  onChange,
}) {
  const isBlocked = disabled || loading

  const rootClassName = [
    styles.root,
    error ? styles.error : "",
    isBlocked ? styles.disabled : "",
    loading ? styles.loading : "",
  ]
    .filter(Boolean)
    .join(" ")

  const decrement = () => {
    if (isBlocked) return
    const nextValue = Math.max(min, value - 1)
    if (nextValue !== value) onChange?.(nextValue)
  }

  const increment = () => {
    if (isBlocked) return
    const nextValue = Math.min(max, value + 1)
    if (nextValue !== value) onChange?.(nextValue)
  }

  return (
    <div className={rootClassName} aria-busy={loading}>
      <button type="button" className={styles.button} onClick={decrement} disabled={isBlocked || value <= min}>
        -
      </button>
      <span className={styles.value}>{value}</span>
      <button type="button" className={styles.button} onClick={increment} disabled={isBlocked || value >= max}>
        +
      </button>
    </div>
  )
}

export default QuantitySelector
