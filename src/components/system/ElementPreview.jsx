import { useState } from "react"

export default function ElementPreview({
  Component,
  variants = [],
  states = [],
}) {
  const [activeVariant, setActiveVariant] = useState(
    variants[0] || "default"
  )

  const [activeState, setActiveState] = useState(
    states[0] || "default"
  )

  console.log("ACTIVE VARIANT:", activeVariant)
  console.log("ACTIVE STATE:", activeState)

return <div style={{ color: "red" }}>THIS IS ELEMENT PREVIEW</div>
  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center gap-10">
        <div className="flex flex-wrap gap-2">
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setActiveVariant(v)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeVariant === v
                  ? "bg-blue-600 text-[#e7e3e4]"
                  : "bg-white/10 text-[#e7e3e4]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {states.map((s) => (
            <button
              key={s}
              onClick={() => setActiveState(s)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeState === s
                  ? "bg-blue-600 text-[#e7e3e4]"
                  : "bg-white/10 text-[#e7e3e4]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Box */}
      <div className="h-[300px] flex items-center justify-center rounded-2xl border border-white/10">
        <Component
          variant={activeVariant}
          forcedState={activeState}
        />
      </div>
    </div>
  )
}
