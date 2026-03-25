import ProductCardPLP from "./ProductCardPLP"
import ProductCardWishlist from "./ProductCardWishlist"
import ProductCardCart from "./ProductCardCart"

function ProductCard({
  product,
  variant = "plp",
  forcedState = "",
  onAddToCart,
  onRemove,
  onQuantityChange,
}) {
  if (variant === "wishlist") {
    return (
      <ProductCardWishlist
        product={product}
        forcedState={forcedState}
        onAddToCart={onAddToCart}
        onRemove={onRemove}
      />
    )
  }

  if (variant === "cart") {
    return (
      <ProductCardCart
        product={product}
        forcedState={forcedState}
        onRemove={onRemove}
        onQuantityChange={onQuantityChange}
      />
    )
  }

  return <ProductCardPLP product={product} forcedState={forcedState} onAddToCart={onAddToCart} />
}

export default ProductCard
