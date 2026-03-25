import { useEffect, useRef, useState } from "react"

function SortDropdown({ value, options, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  const selectedOption = options.find((option) => option.value === value) ?? options[0]

  return (
    <div className="sort-dropdown" ref={containerRef}>
      <button
        type="button"
        className={`sort-dropdown-trigger ${open ? "is-open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedOption.label}</span>
        <span className={`sort-dropdown-chevron ${open ? "is-open" : ""}`}>⌄</span>
      </button>

      <div className={`sort-dropdown-menu ${open ? "is-open" : ""}`} role="listbox">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`sort-dropdown-option ${value === option.value ? "is-active" : ""}`}
            onClick={() => {
              onChange(option.value)
              setOpen(false)
            }}
            role="option"
            aria-selected={value === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SortDropdown
