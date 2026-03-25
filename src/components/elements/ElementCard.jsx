import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ElementCard({ id, name, category, preview, component: Component, defaultVariant, compactPreview }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(id ? `/elements/card/${id}` : "/elements")
  }

  const handleGetCode = (e) => {
    e.stopPropagation()
    navigate(id ? `/elements/card/${id}` : "/elements")
  }

  const previewContent =
    (defaultVariant && defaultVariant.preview) ||
    (Component ? <Component /> : preview)

  const previewScale = compactPreview ? "scale-[0.55]" : "scale-[0.85]"

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCardClick() } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block group w-full cursor-pointer"
    >
      <div className="element-card rounded-xl overflow-hidden flex flex-col w-full transition-all duration-300">
        {/* Preview area */}
        <div className="relative flex items-center justify-center overflow-hidden p-5" style={{ minHeight: 180, background: 'rgba(240, 246, 255, 0.7)' }}>
          <div className={`${previewScale} origin-center [&_img]:max-h-[160px] pointer-events-none`}>
            {previewContent}
          </div>

          {/* Hover overlay: Get code */}
          <div
            className={`absolute inset-0 flex items-end justify-center transition-opacity duration-200 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: 'linear-gradient(to top, rgba(64,96,240,0.18) 0%, transparent 60%)' }}
          >
            <button
              type="button"
              onClick={handleGetCode}
              className="mb-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm border transition-colors"
              style={{ background: 'rgba(255,255,255,0.85)', color: '#4060f0', borderColor: 'rgba(64,96,240,0.3)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Get code
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.9)', borderTop: '1px solid rgba(64,96,240,0.1)' }}>
          <span className="text-xs font-medium truncate" style={{ color: '#0f172a' }}>{name}</span>
          <span className="text-[10px] shrink-0 ml-2" style={{ color: '#64748b' }}>{category}</span>
        </div>
      </div>
    </div>
  )
}

export default ElementCard
