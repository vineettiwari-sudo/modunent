import styles from "./productCard.module.css"

const formatCurrency = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return null

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)
}

function ProductCardWishlist({ product, forcedState = "", onAddToCart, onRemove }) {
  const isDisabled = forcedState === "disabled"
  const isLoading = forcedState === "loading"

  const cardClassName = [
    styles.card,
    styles.wishlistCard,
    forcedState === "hover" ? styles.isHover : "",
    forcedState === "active" ? styles.isActive : "",
    isDisabled ? styles.isDisabled : "",
    isLoading ? styles.isLoading : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <article className={cardClassName}>
      <div className={styles.wishlistMedia}>
        <img src={product?.images?.primary} alt={product?.title ?? "Product"} className={styles.image} loading="lazy" />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product?.title}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatCurrency(product?.price)}</span>
        </div>
      </div>

      <div className={styles.actionsRow}>
        <button type="button" className={styles.secondaryButton} disabled={isDisabled || isLoading} onClick={() => onRemove?.(product)}>
          Remove
        </button>
        <button type="button" className={styles.button} disabled={isDisabled || isLoading} onClick={() => onAddToCart?.(product)}>
          {isLoading ? "Loading..." : "Add to Cart"}
        </button>
      </div>
    </article>
  )
}

export default ProductCardWishlist
