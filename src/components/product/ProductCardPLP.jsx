import { useMemo, useState } from "react"
import Badge from "../badges/Badge"
import DiscountPill from "../discount/DiscountPill"
import styles from "./productCard.module.css"

const formatCurrency = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return null

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)
}

function ProductCardPLP({ product, forcedState = "", onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false)

  const isHover = forcedState === "hover"
  const isActive = forcedState === "active"
  const isDisabled = forcedState === "disabled"
  const isLoading = forcedState === "loading"

  const outOfStock = product?.stock?.status === "outOfStock"
  const lowStock = product?.stock?.status === "lowStock"
  const showHoverImage = Boolean(product?.images?.hover) && (isHovered || isHover)

  const cardClassName = [
    styles.card,
    isHover ? styles.isHover : "",
    isActive ? styles.isActive : "",
    isDisabled ? styles.isDisabled : "",
    isLoading ? styles.isLoading : "",
    outOfStock ? styles.outOfStock : "",
  ]
    .filter(Boolean)
    .join(" ")

  const price = formatCurrency(product?.price)
  const compareAtPrice = formatCurrency(product?.compareAtPrice)
  const showComparePrice =
    typeof product?.price === "number" &&
    typeof product?.compareAtPrice === "number" &&
    product.compareAtPrice > product.price

  const stockMessage =
    lowStock && typeof product?.stock?.quantity === "number"
      ? `Only ${product.stock.quantity} left`
      : lowStock
        ? "Low stock"
        : null

  return (
    <article
      className={cardClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        {product?.discount ? (
          <div className={styles.discountArea}>
            <DiscountPill type={product.discount.type} value={product.discount.value} state={product.discount.state} />
          </div>
        ) : null}

        {Array.isArray(product?.badges) && product.badges.length ? (
          <div className={styles.badgeStack}>
            {product.badges.map((badge, index) => (
              <Badge key={`${badge.label ?? "badge"}-${index}`} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>
        ) : null}

        <img
          src={showHoverImage ? product.images.hover : product?.images?.primary}
          alt={product?.title ?? "Product"}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        {product?.brand ? <p className={styles.brand}>{product.brand}</p> : null}
        <h3 className={styles.title}>{product?.title}</h3>

        {product?.rating?.value ? (
          <div className={styles.rating}>
            <span>{product.rating.value.toFixed(1)}</span>
            <span>({product?.rating?.count ?? 0})</span>
          </div>
        ) : null}

        <div className={styles.priceRow}>
          {price ? <span className={styles.price}>{price}</span> : null}
          {showComparePrice ? <span className={styles.comparePrice}>{compareAtPrice}</span> : null}
        </div>

        {stockMessage ? <p className={styles.lowStock}>{stockMessage}</p> : null}
        {outOfStock ? <p className={styles.outOfStock}>Out of Stock</p> : null}
      </div>

      <button
        type="button"
        className={styles.button}
        disabled={isDisabled || isLoading || outOfStock}
        onClick={() => {
          if (isDisabled || isLoading || outOfStock) return
          onAddToCart?.(product)
        }}
      >
        {isLoading ? "Loading..." : "Add to Cart"}
      </button>
    </article>
  )
}

export default ProductCardPLP
