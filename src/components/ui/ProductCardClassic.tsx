import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

export interface ProductCardClassicProps {
  imageUrl: string
  brand?: string
  productName: string
  price: string
  discount?: string
}

export function ProductCardClassic({
  imageUrl,
  brand,
  productName,
  price,
  discount,
}: ProductCardClassicProps) {
  const [isHovered, setIsHovered] = useState(false)
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current)
      leaveTimeoutRef.current = null
    }
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    leaveTimeoutRef.current = setTimeout(() => setIsHovered(false), 100)
  }, [])

  return (
    <motion.article
      className="flex flex-col w-full overflow-visible"
      style={{ aspectRatio: "3/4" }}
      animate={{ y: isHovered ? -6 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: isHovered ? 0 : 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: isHovered ? 0 : 0.1 }}
        >
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        {discount != null && discount !== "" && (
          <span className="absolute top-2 left-2 bg-black text-[#e7e3e4] rounded-full p-3 text-xs font-medium">
            {discount}
          </span>
        )}
        <motion.button
          type="button"
          className="absolute bottom-0 left-0 right-0 w-full bg-black text-[#e7e3e4] font-medium border-0 cursor-pointer rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{ height: "40px" }}
          animate={{ y: isHovered ? 0 : 48 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: isHovered ? 0.05 : 0.1 }}
        >
          Add to Cart
        </motion.button>
      </div>
      <div className="mt-3 text-left" style={{ gap: "12px" }}>
        {brand != null && brand !== "" && (
          <p className="text-[11px] uppercase tracking-wide font-medium text-foreground">
            {brand}
          </p>
        )}
        <p className="text-sm font-normal text-foreground" style={{ fontSize: "14px" }}>
          {productName}
        </p>
        <p className="text-sm font-bold text-foreground" style={{ fontSize: "14px" }}>
          {price}
        </p>
      </div>
    </motion.article>
  )
}
