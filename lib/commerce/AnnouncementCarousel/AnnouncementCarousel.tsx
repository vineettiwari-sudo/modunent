import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { cn } from "../../utils"

export interface AnnouncementCarouselSlide {
  id: string
  content: ReactNode
}

export interface AnnouncementCarouselProps {
  slides: AnnouncementCarouselSlide[]
  autoSlideIntervalMs?: number
  className?: string
}

export function AnnouncementCarousel({
  slides,
  autoSlideIntervalMs = 5000,
  className,
}: AnnouncementCarouselProps) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  useEffect(() => {
    if (count <= 1) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), autoSlideIntervalMs)
    return () => clearInterval(t)
  }, [count, autoSlideIntervalMs])

  if (count === 0) return null

  const goPrev = () => setIndex((i) => (i - 1 + count) % count)
  const goNext = () => setIndex((i) => (i + 1) % count)
  const transform = `translateX(-${index * 100}%)`

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-2 text-sm text-foreground bg-muted/50 rounded-[var(--radius-md)]",
        className
      )}
      role="region"
      aria-label="Announcement carousel"
    >
      {count > 1 && (
        <button
          type="button"
          onClick={goPrev}
          className="h-[36px] w-[36px] shrink-0 flex items-center justify-center rounded-[var(--radius-md)] text-foreground hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      <div className="flex-1 min-w-0 text-center overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0 px-2">
              {slide.content}
            </div>
          ))}
        </div>
      </div>
      {count > 1 && (
        <button
          type="button"
          onClick={goNext}
          className="h-[36px] w-[36px] shrink-0 flex items-center justify-center rounded-[var(--radius-md)] text-foreground hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      {count > 1 && (
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors duration-200",
                i === index ? "bg-primary" : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
              )}
              aria-label={"Go to slide " + (i + 1)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
