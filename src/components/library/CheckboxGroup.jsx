import { useState } from "react"

function CheckboxGroup() {
  const [items, setItems] = useState([true, false, true])

  const toggleItem = (index) => {
    setItems((prev) => prev.map((checked, idx) => (idx === index ? !checked : checked)))
  }

  return (
    <div className="lib-card lib-checkbox-group" aria-label="Checkbox group preview">
      {items.map((checked, index) => (
        <label key={`lib-checkbox-${index}`} className="lib-checkbox-row">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleItem(index)}
            aria-label={`Option ${index + 1}`}
          />
          <span className={`lib-checkbox-box ${checked ? "is-checked" : ""}`}>✓</span>
          <span className="lib-checkbox-text">Option {index + 1}</span>
        </label>
      ))}
    </div>
  )
}

export default CheckboxGroup
