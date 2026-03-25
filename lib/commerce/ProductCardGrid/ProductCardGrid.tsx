import { cn } from "../../utils"
import { ProductCard } from "../ProductCard"

const DEMO_IMAGE = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop"
const DEMO_IMAGE_2 = "https://images.unsplash.com/photo-1581655353564-df123a107eb6?w=200&h=250&fit=crop"
const DEMO_IMAGE_SHOE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=250&fit=crop"
const DEMO_IMAGE_SALE = "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=250&fit=crop"

const CARDS = [
  { title: "Premium Cotton T-Shirt", price: "$29.99", originalPrice: "$39.99", imageUrl: DEMO_IMAGE, hoverImageUrl: DEMO_IMAGE_2, category: "Tops", onAddToCart: () => {} },
  { title: "Minimal Everyday Sneakers", price: "$89.99", originalPrice: "$120.00", imageUrl: DEMO_IMAGE_SHOE, category: "Footwear", onAddToCart: () => {} },
  { title: "Leisure Hoodie", price: "$59.99", imageUrl: DEMO_IMAGE_2, category: "Tops", onAddToCart: () => {} },
  { title: "Classic Watch", price: "$149.99", imageUrl: DEMO_IMAGE_SALE, category: "Accessories", onAddToCart: () => {} },
]

export interface ProductCardGridProps {
  className?: string
}

/** Responsive grid: 2 cols mobile, 3 cols tablet, 4 cols desktop. One element per card. */
export function ProductCardGrid({ className }: ProductCardGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl",
        className
      )}
    >
      {CARDS.map((card, i) => (
        <div key={i} className="min-w-0 w-full">
          <ProductCard
            title={card.title}
            price={card.price}
            originalPrice={card.originalPrice}
            imageUrl={card.imageUrl}
            hoverImageUrl={card.hoverImageUrl}
            category={card.category}
            onAddToCart={card.onAddToCart}
          />
        </div>
      ))}
    </div>
  )
}
