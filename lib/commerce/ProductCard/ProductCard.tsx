import type { ReactNode } from "react"
import { useState } from "react"
import { Star, Crown, Heart, Eye } from "lucide-react"
import { cn } from "../../utils"
import { Button } from "../../primitives/Button"
import { Badge } from "../../primitives/Badge"
import { Spinner } from "../../primitives/Spinner"

export type ProductCardVariant =
  | "default"
  | "compact"
  | "detailed"
  | "horizontal"
  | "dense"
  | "wishlist"
  | "video-first"
  | "quick-add"

export type AddToCartState = "idle" | "loading" | "error"

export interface ProductCardProps {
  title: string
  price: string
  imageUrl?: string
  hoverImageUrl?: string
  discount?: string
  outOfStock?: boolean
  loading?: boolean
  onQuickView?: () => void
  wishlistActive?: boolean
  onWishlistToggle?: () => void
  children?: ReactNode
  className?: string
  variant?: ProductCardVariant
  memberPrice?: string
  originalPrice?: string
  category?: string
  rating?: number
  ratingCount?: number
  lowStock?: string
  brand?: string
  onAddToCart?: () => void | Promise<void>
  onRemove?: () => void
  addToCartState?: AddToCartState
  videoUrl?: string
  onCompare?: () => void
}

export function ProductCard({
  title,
  price,
  imageUrl = "",
  hoverImageUrl,
  discount,
  outOfStock = false,
  loading = false,
  onQuickView,
  wishlistActive = false,
  onWishlistToggle,
  children,
  className,
  variant = "default",
  memberPrice,
  originalPrice,
  category,
  rating,
  ratingCount,
  lowStock,
  brand,
  onAddToCart,
  onRemove,
  addToCartState: addToCartStateProp,
  videoUrl,
  onCompare,
}: ProductCardProps) {
  const [hover, setHover] = useState(false)
  const [localAddState, setLocalAddState] = useState<AddToCartState>("idle")
  const addToCartState = addToCartStateProp ?? localAddState
  const showHoverImage = Boolean(hoverImageUrl && hover && !loading)
  const isWishlistVariant = variant === "wishlist"
  const isQuickAdd = variant === "quick-add"
  const isVideoFirst = variant === "video-first"
  const isCompact = variant === "compact"
  const isDense = variant === "dense"
  const isDetailed = variant === "detailed"
  const isHorizontal = variant === "horizontal"

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!onAddToCart || addToCartState === "loading") return
    setLocalAddState("loading")
    try {
      await Promise.resolve(onAddToCart())
      setLocalAddState("idle")
    } catch {
      setLocalAddState("error")
      setTimeout(() => setLocalAddState("idle"), 2000)
    }
  }

  // ——— DEFAULT VARIANT: exact match to provided HTML/screenshot ———
  if (variant === "default") {
    return (
      <div
        className={cn("group relative flex flex-col w-[256px] bg-background rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md", className)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative overflow-hidden bg-muted aspect-square">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner size="md" />
            </div>
          ) : (
            <>
              <img
                src={imageUrl || ""}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {(discount || memberPrice) && (
                <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                  {discount && (
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold transition-all duration-200 h-[28px] px-2.5 text-xs rounded-full bg-red-600 text-[#e7e3e4] border border-red-600 hover:bg-red-700" role="status" aria-label={"Discount: " + discount}>
                      {discount}
                    </span>
                  )}
                  {memberPrice && (
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold transition-all duration-200 h-[28px] px-2.5 text-xs rounded-full bg-purple-600 text-[#e7e3e4] border border-purple-600 hover:bg-purple-700" role="status" aria-label="Member Price">
                      <Crown className="h-3 w-3 shrink-0" aria-hidden />
                      Member Price
                    </span>
                  )}
                </div>
              )}
              {outOfStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                  <span className="rounded-md bg-background px-3 py-1.5 text-sm font-medium text-foreground">Out of stock</span>
                </div>
              )}
              {(onWishlistToggle || onQuickView) && (
                <div className="absolute top-2 right-2 transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <div className="inline-flex items-center gap-1">
                    <div className="flex flex-col gap-2">
                      {onWishlistToggle && (
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); onWishlistToggle() }}
                          className="inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-[44px] w-[44px] bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 rounded-full"
                          aria-label={wishlistActive ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          <Heart className={cn("h-4 w-4", wishlistActive && "fill-current")} aria-hidden />
                        </button>
                      )}
                      {onQuickView && (
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); onQuickView() }}
                          className="inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-[44px] w-[44px] bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 rounded-full"
                          aria-label="Quick view"
                        >
                          <Eye className="h-4 w-4" aria-hidden />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="p-3 flex flex-col" style={{ gap: "8px" }}>
          {(brand || category) && (
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                {brand && <span className="text-xs text-muted-foreground uppercase tracking-wide truncate">{brand}</span>}
              </div>
              {category && (
                <span className="inline-flex items-center gap-1.5 font-medium whitespace-nowrap rounded-full border bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 px-[4px] py-[2px]" style={{ fontSize: "12px" }} role="status">
                  {category}
                </span>
              )}
            </div>
          )}
          <h3 className="font-medium text-foreground transition-colors group-hover:text-primary text-sm line-clamp-2">{title}</h3>
          {(rating != null || ratingCount != null) && (
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={cn("h-3 w-3 shrink-0", i <= Math.floor(rating ?? 0) ? "fill-yellow-400 text-yellow-400" : "fill-none text-border")}
                    aria-hidden
                  />
                ))}
              </div>
              {ratingCount != null && <span className="text-muted-foreground text-xs">({ratingCount})</span>}
            </div>
          )}
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-bold text-foreground text-lg">{price}</span>
              {originalPrice && <span className="text-muted-foreground line-through text-xs">{originalPrice}</span>}
            </div>
            {memberPrice && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Member:</span>
                <span className="text-sm font-semibold text-purple-600">{memberPrice}</span>
              </div>
            )}
          </div>
          {onAddToCart && !outOfStock && (
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={addToCartState === "loading"}
              className="inline-flex flex-row items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap h-11 px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm rounded-lg w-full font-medium"
            >
              {addToCartState === "loading" ? <Spinner size="sm" /> : addToCartState === "error" ? "Try again" : "Add to Cart"}
            </button>
          )}
          {children}
        </div>
      </div>
    )
  }

  // ——— ALL OTHER VARIANTS: original behavior (compact, detailed, horizontal, etc.) ———
  const contentPadding = isDense ? "p-2" : isCompact ? "p-3" : "p-4"
  const showCategory = category && !isDense
  const showRatingStars = (rating != null || isDetailed) && !isDense
  const showReviewCount = ratingCount != null && !isDense
  const showMemberPrice = memberPrice && (isDetailed || (!isDense && memberPrice))
  const showOriginalPrice = originalPrice && !isDense
  const showLowStock = lowStock && !outOfStock && !loading
  const showBrand = brand && (isDetailed || isHorizontal)
  const showAddToCart = onAddToCart && !outOfStock && !isWishlistVariant
  const showRemove = (onRemove || isWishlistVariant) && !outOfStock
  const showQuickAddHover = isQuickAdd && onAddToCart && hover && !outOfStock && !loading
  const displayRating = rating ?? 0
  const fullStars = Math.floor(displayRating)
  const hasHalf = displayRating % 1 >= 0.5

  return (
    <article
      className={cn(
        "group rounded-[var(--radius-md)] border border-border bg-surface overflow-hidden",
        "transition-[box-shadow,transform] duration-200 ease-out",
        !isHorizontal && "w-[256px] hover:shadow-lg hover:-translate-y-0.5",
        isHorizontal && "flex flex-row",
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={cn(
          "relative bg-muted/30 overflow-hidden",
          isHorizontal ? "w-36 shrink-0 aspect-square" : "aspect-[4/5]"
        )}
      >
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spinner size="md" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 transition-transform duration-200 ease-out group-hover:scale-[1.03]">
              {imageUrl && !isVideoFirst && (
                <img
                  src={imageUrl}
                  alt=""
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-200",
                    showHoverImage ? "opacity-0" : "opacity-100"
                  )}
                />
              )}
              {hoverImageUrl && !isVideoFirst && (
                <img
                  src={hoverImageUrl}
                  alt=""
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-200",
                    showHoverImage ? "opacity-100" : "opacity-0"
                  )}
                />
              )}
              {isVideoFirst && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  {imageUrl && <img src={imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />}
                  {hover && (
                    <span className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-foreground/80 text-surface">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  )}
                </div>
              )}
              {!imageUrl && !hoverImageUrl && !isVideoFirst && (
                <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">Image</div>
              )}
            </div>
            {discount && !loading && (
              <div className="absolute left-2 top-2 flex gap-1">
                <Badge variant="secondary">{discount}</Badge>
                {memberPrice && isDense && <Badge variant="outline">Member</Badge>}
              </div>
            )}
            {memberPrice && !isDense && !discount && (
              <div className="absolute left-2 top-2">
                <Badge variant="outline">Member Price</Badge>
              </div>
            )}
            {outOfStock && !loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                <span className="rounded-[var(--radius-sm)] bg-surface px-3 py-1.5 text-sm font-medium text-foreground">Out of stock</span>
              </div>
            )}
            <div className="absolute right-2 top-2 flex flex-col gap-1">
              {onCompare && (
                <button type="button" onClick={(e) => { e.preventDefault(); onCompare() }} className="h-[44px] w-[44px] rounded-full bg-surface/90 shadow border border-border flex items-center justify-center text-foreground hover:bg-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Compare">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </button>
              )}
              {onWishlistToggle && (
                <button type="button" onClick={(e) => { e.preventDefault(); onWishlistToggle() }} className="h-[44px] w-[44px] rounded-full bg-surface/90 shadow border border-border flex items-center justify-center text-foreground hover:bg-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={wishlistActive ? "Remove from wishlist" : "Add to wishlist"}>
                  {wishlistActive ? <Heart className="w-4 h-4 fill-current" aria-hidden /> : <Heart className="w-4 h-4" aria-hidden />}
                </button>
              )}
            </div>
            {onQuickView && !loading && !outOfStock && !isQuickAdd && (
              <div className="absolute bottom-2 left-2 right-2 flex flex-col opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <Button size="md" variant="secondary" className="w-full min-h-[44px]" onClick={(e) => { e.preventDefault(); onQuickView() }}>Quick view</Button>
              </div>
            )}
            {showQuickAddHover && (
              <div className="absolute bottom-2 left-2 right-2 flex flex-col opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <Button size="md" variant="secondary" className="w-full min-h-[44px]" onClick={handleAddToCart} disabled={addToCartState === "loading"}>Quick Add</Button>
              </div>
            )}
          </>
        )}
      </div>
      <div className={cn(contentPadding, "flex flex-col", isHorizontal && "flex-1 min-w-0")} style={{ gap: "8px" }}>
        {showBrand && <p className="text-xs text-muted-foreground uppercase tracking-wide">{brand}</p>}
        {showCategory && (
          <span className="inline-flex items-center w-fit font-medium whitespace-nowrap rounded-full border bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 px-[4px] py-[2px]" style={{ fontSize: "12px" }} role="status">
            {category}
          </span>
        )}
        <h3 className="text-sm font-medium text-foreground line-clamp-2">{title}</h3>
        {showRatingStars && (
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={cn("h-3.5 w-3.5 shrink-0", i <= fullStars ? "fill-amber-500 text-amber-500" : hasHalf && i === fullStars + 1 ? "fill-amber-500/50 text-amber-500" : "text-muted")}
                aria-hidden
              />
            ))}
            {showReviewCount && <span className="text-xs text-muted ml-0.5">({ratingCount})</span>}
          </div>
        )}
        {showReviewCount && !showRatingStars && <p className="text-xs text-muted">({ratingCount})</p>}
        <div className="flex flex-wrap items-baseline gap-1.5">
          <span className="text-sm font-medium text-foreground">{price}</span>
          {showOriginalPrice && <span className="text-xs text-muted line-through">{originalPrice}</span>}
          {showMemberPrice && <span className="text-xs text-foreground">Member: {memberPrice}</span>}
        </div>
        {showLowStock && <p className="text-xs text-amber-600 dark:text-amber-400">{lowStock}</p>}
        {showAddToCart && (
          <div>
            <Button size="md" variant={addToCartState === "error" ? "destructive" : "primary"} className="w-full min-h-[44px]" onClick={handleAddToCart} disabled={addToCartState === "loading"} loading={addToCartState === "loading"}>
              {addToCartState === "error" ? "Try again" : "Add to Cart"}
            </Button>
          </div>
        )}
        {showRemove && (
          <div>
            <Button size="md" variant="ghost" className="w-full min-h-[44px]" onClick={(e) => { e.preventDefault(); onRemove?.() }}>Remove</Button>
          </div>
        )}
        {children}
      </div>
    </article>
  )
}
