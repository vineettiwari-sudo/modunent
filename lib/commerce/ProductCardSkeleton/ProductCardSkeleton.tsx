import { motion } from "framer-motion"
import { cn } from "../../utils"

export interface ProductCardSkeletonProps {
  layout?: "vertical" | "horizontal"
  className?: string
}

/** Matches default ProductCard: 256px width, aspect-square image, p-3 content with 8px gap. */
export function ProductCardSkeleton({ layout = "vertical", className }: ProductCardSkeletonProps) {
  const isHorizontal = layout === "horizontal"
  if (isHorizontal) {
    return (
      <div
        className={cn(
          "flex w-[256px] rounded-lg border border-border overflow-hidden bg-card flex-row",
          className
        )}
      >
        <motion.div
          className="relative bg-muted shrink-0 w-36 aspect-square"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent product-card-skeleton-shimmer" />
        </motion.div>
        <div className="flex flex-1 flex-col p-3 min-w-0 justify-center" style={{ gap: "8px" }}>
          <div className="flex justify-between gap-2">
            <div className="h-3 w-16 rounded bg-muted" />
            <div className="h-5 w-14 rounded-full bg-muted" />
          </div>
          <div className="h-4 w-full rounded bg-muted" />
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-3 w-3 rounded bg-muted" />
            ))}
            <div className="h-3 w-4 rounded bg-muted ml-1" />
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-16 rounded bg-muted" />
            <div className="h-3 w-12 rounded bg-muted" />
          </div>
          <div className="h-11 w-full rounded-lg bg-muted mt-1" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={cn(
        "flex flex-col w-[256px] bg-background rounded-lg overflow-hidden border border-border shadow-sm",
        className
      )}
    >
      <motion.div
        className="relative bg-muted aspect-square w-full"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent product-card-skeleton-shimmer" />
      </motion.div>
      <div className="p-3 flex flex-col min-w-0" style={{ gap: "8px" }}>
        <div className="flex items-center justify-between gap-2">
          <div className="h-3 w-20 rounded bg-muted shrink-0" />
          <div className="h-6 w-20 rounded-full bg-muted shrink-0" />
        </div>
        <div className="h-4 w-full rounded bg-muted" />
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-3 w-3 rounded bg-muted" />
            ))}
          </div>
          <div className="h-3 w-10 rounded bg-muted" />
        </div>
        <div className="flex flex-col" style={{ gap: "4px" }}>
          <div className="flex items-baseline gap-2">
            <div className="h-5 w-20 rounded bg-muted" />
            <div className="h-3 w-14 rounded bg-muted" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-12 rounded bg-muted" />
            <div className="h-4 w-16 rounded bg-muted" />
          </div>
        </div>
        <div className="h-11 w-full rounded-lg bg-muted" />
      </div>
    </div>
  )
}
