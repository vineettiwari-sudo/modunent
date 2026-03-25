import ProductCard from "./ProductCard"
import styles from "./productCard.module.css"

function ProductGrid({
  products,
  columns = 4,
  variant = "plp",
  forcedState = "",
  onAddToCart,
  onRemove,
  onQuantityChange,
}) {
  const normalizedColumns = columns === 3 || columns === 2 ? columns : 4

  const gridClassName = [
    styles.grid,
    normalizedColumns === 4 ? styles.columns4 : "",
    normalizedColumns === 3 ? styles.columns3 : "",
    normalizedColumns === 2 ? styles.columns2 : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <section className={gridClassName}>
      {products?.map((product) => (
        <ProductCard
          key={product.id ?? product.slug ?? product.title}
          product={product}
          variant={variant}
          forcedState={forcedState}
          onAddToCart={onAddToCart}
          onRemove={onRemove}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </section>
  )
}

export default ProductGrid
