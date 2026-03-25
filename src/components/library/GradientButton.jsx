import { useState } from "react"

function GradientButton() {
  const [pressed, setPressed] = useState(false)

  const handleClick = () => {
    setPressed(true)
    setTimeout(() => setPressed(false), 180)
  }

  return (
    <div className="lib-card lib-gradient-button" aria-label="Gradient button preview">
      <button type="button" className={`lib-gradient-cta ${pressed ? "is-pressed" : ""}`} onClick={handleClick}>
        Launch component
      </button>
    </div>
  )
}

export default GradientButton
