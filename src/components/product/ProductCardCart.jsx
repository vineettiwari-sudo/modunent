import { useEffect, useState } from "react"
import QuantitySelector from "../quantity/QuantitySelector"
import styles from "./productCard.module.css"

const formatCurrency = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return null

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)
}

function ProductCardCart({ product, forcedState = "", onRemove, onQuantityChange }) {
  const [quantity, setQuantity] = useState(product?.quantity ?? 1)

  useEffect(() => {
    setQuantity(product?.quantity ?? 1)
  }, [product?.quantity])

  const isDisabled = forcedState === "disabled"
  const isLoading = forcedState === "loading"

  const cardClassName = [
    styles.card,
    styles.cartCard,
    forcedState === "hover" ? styles.isHover : "",
    forcedState === "active" ? styles.isActive : "",
    isDisabled ? styles.isDisabled : "",
    isLoading ? styles.isLoading : "",
  ]
    .filter(Boolean)
    .join(" ")

  const subtotal = typeof product?.price === "number" ? product.price * quantity : null

  return (
    <article className={cardClassName}>
      <div className={styles.cartMedia}>
        <img src={product?.images?.primary} alt={product?.title ?? "Product"} className={styles.image} loading="lazy" />
      </div>

      <div className={styles.cartContent}>
        <h3 className={styles.title}>{product?.title}</h3>
        {product?.variantInfo ? <p className={styles.variantInfo}>{product.variantInfo}</p> : null}

        <div className={styles.cartMetaRow}>
          <QuantitySelector
            value={quantity}
            min={1}
            max={99}
            disabled={isDisabled}
            loading={isLoading}
            onChange={(nextValue) => {
              setQuantity(nextValue)
              onQuantityChange?.(product, nextValue)
            }}
          />
          <span className={styles.price}>{formatCurrency(product?.price)}</span>
          <button type="button" className={styles.linkButton} disabled={isDisabled || isLoading} onClick={() => onRemove?.(product)}>
            Remove
          </button>
        </div>

        {subtotal !== null ? <p className={styles.subtotal}>Subtotal: {formatCurrency(subtotal)}</p> : null}
      </div>
    </article>
  )
}

export default ProductCardCart
