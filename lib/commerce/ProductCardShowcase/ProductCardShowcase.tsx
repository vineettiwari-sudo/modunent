import { useState } from "react"
import { cn } from "../../utils"
import { ProductCard } from "../ProductCard"
import { ProductCardSkeleton } from "../ProductCardSkeleton"
import { GridListToggle, type ViewMode } from "../GridListToggle"

const MOCK_PRODUCTS = [
  {
    id: "1",
    title: "Premium Cotton T-Shirt",
    brand: "Modunent",
    category: "Tops",
    price: "$29.99",
    originalPrice: "$39.99",
    discount: "25% OFF",
    rating: 4.5,
    ratingCount: 128,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop",
    hoverImageUrl: "https://images.unsplash.com/photo-1581655353564-df123a107eb6?w=200&h=250&fit=crop",
    outOfStock: false,
    loading: false,
  },
  {
    id: "2",
    title: "Minimal Everyday Sneakers",
    brand: "Modunent",
    category: "Footwear",
    price: "$89.99",
    originalPrice: "$120.00",
    discount: "20% off",
    rating: 4.7,
    ratingCount: 342,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=250&fit=crop",
    hoverImageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=250&fit=crop",
    outOfStock: false,
    loading: false,
  },
  {
    id: "3",
    title: "Designer Backpack",
    brand: "Modunent",
    category: "Bags",
    price: "$89.99",
    originalPrice: "$399.99",
    rating: 4.2,
    ratingCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200&h=250&fit=crop",
    outOfStock: true,
    loading: false,
  },
  {
    id: "4",
    title: "Leisure Hoodie",
    brand: "Modunent",
    category: "Tops",
    price: "$59.99",
    memberPrice: "$54.99",
    rating: 4.8,
    ratingCount: 201,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=250&fit=crop",
    outOfStock: false,
    loading: false,
  },
  {
    id: "5",
    title: "Classic Watch",
    brand: "Modunent",
    category: "Accessories",
    price: "$149.99",
    originalPrice: "$199.99",
    discount: "25% OFF",
    rating: 4.6,
    ratingCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop",
    lowStock: "Only 3 left!",
    outOfStock: false,
    loading: false,
  },
  {
    id: "6",
    title: "Loading…",
    price: "—",
    imageUrl: "",
    outOfStock: false,
    loading: true,
  },
]

const CATEGORY_CHIPS = [
  { id: "all", label: "All" },
  { id: "tops", label: "Tops" },
  { id: "footwear", label: "Footwear" },
  { id: "bags", label: "Bags" },
  { id: "accessories", label: "Accessories" },
] as const

export interface ProductCardShowcaseProps {
  className?: string
}

export function ProductCardShowcase({ className }: ProductCardShowcaseProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filtered =
    selectedCategory === "all"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.category?.toLowerCase() === selectedCategory)

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground">Product cards</h3>
        <div className="flex items-center gap-3">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Category filter">
            {CATEGORY_CHIPS.map((chip) => (
              <button
                key={chip.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === chip.id}
                onClick={() => setSelectedCategory(chip.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  selectedCategory === chip.id
                    ? "bg-foreground text-surface"
                    : "bg-muted/60 text-foreground hover:bg-muted"
                )}
              >
                {chip.label}
              </button>
            ))}
          </div>
          <GridListToggle value={viewMode} onChange={setViewMode} />
        </div>
      </div>

      {viewMode === "grid" ? (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 transition-[grid-template-columns] duration-200"
          role="list"
        >
          {filtered.map((p) =>
            p.loading ? (
              <ProductCardSkeleton key={p.id} />
            ) : (
              <div key={p.id} className="min-w-0 w-full max-w-[240px] mx-auto">
                <ProductCard
                  title={p.title}
                  price={p.price}
                  originalPrice={p.originalPrice}
                  discount={p.discount}
                  imageUrl={p.imageUrl}
                  hoverImageUrl={p.hoverImageUrl}
                  category={p.category}
                  brand={p.brand}
                  rating={p.rating}
                  ratingCount={p.ratingCount}
                  memberPrice={p.memberPrice}
                  lowStock={p.lowStock}
                  outOfStock={p.outOfStock}
                  loading={p.loading}
                  onAddToCart={p.outOfStock ? undefined : () => {}}
                  onQuickView={() => {}}
                  onWishlistToggle={() => {}}
                  variant={p.id === "4" ? "detailed" : p.id === "5" ? "compact" : "default"}
                />
              </div>
            )
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3" role="list">
          {filtered.map((p) =>
            p.loading ? (
              <ProductCardSkeleton key={p.id} layout="horizontal" />
            ) : (
              <div key={p.id} className="w-full max-w-2xl">
                <ProductCard
                  title={p.title}
                  price={p.price}
                  originalPrice={p.originalPrice}
                  discount={p.discount}
                  imageUrl={p.imageUrl}
                  hoverImageUrl={p.hoverImageUrl}
                  category={p.category}
                  brand={p.brand}
                  rating={p.rating}
                  ratingCount={p.ratingCount}
                  memberPrice={p.memberPrice}
                  lowStock={p.lowStock}
                  outOfStock={p.outOfStock}
                  loading={p.loading}
                  onAddToCart={p.outOfStock ? undefined : () => {}}
                  onQuickView={() => {}}
                  onWishlistToggle={() => {}}
                  variant="horizontal"
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
