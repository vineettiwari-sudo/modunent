import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { cn } from "../../utils"

export interface ProductCardAnimatedProps {
  imageUrl: string
  discount?: string
  category: string
  title: string
  rating: number
  reviewCount: number
  salePrice: string
  originalPrice: string
  onAddToCart?: () => void
  className?: string
}

const MAX_STARS = 5

export function ProductCardAnimated({
  imageUrl,
  discount = "20% OFF",
  category,
  title,
  rating,
  reviewCount,
  salePrice,
  originalPrice,
  onAddToCart,
  className,
}: ProductCardAnimatedProps) {
  const [isHovered, setIsHovered] = useState(false)
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <motion.article
      className={cn("group relative flex flex-col rounded-lg bg-card border border-border overflow-hidden", className)}
      initial={false}
      whileHover={{
        y: -4,
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Aspect ~3/4 container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        {/* Image with zoom on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Discount pill - top left */}
        {discount && (
          <div className="absolute left-2 top-2 z-10">
            <span className="inline-flex items-center rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              {discount}
            </span>
          </div>
        )}

        {/* Add to Cart - slides up on card hover */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 p-2"
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 16,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart?.()
            }}
            className="w-full rounded-md bg-black py-2.5 text-sm font-medium text-[#e7e3e4] transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {category}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
          {title}
        </h3>

        {/* Star rating */}
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: MAX_STARS }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < fullStars
                  ? "fill-amber-400 text-amber-400"
                  : hasHalf && i === fullStars
                    ? "fill-amber-400/50 text-amber-400"
                    : "text-muted"
              )}
            />
          ))}
          <span className="ml-1.5 text-xs text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-foreground">{salePrice}</span>
          <span className="text-sm text-muted-foreground line-through">
            {originalPrice}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
