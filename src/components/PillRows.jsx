const rowOne = [
  "menu",
  "navbar",
  "sidebar",
  "footer",
  "header",
  "hero",
  "section",
  "overlay",
  "button",
  "card",
  "input",
  "checkbox",
  "radio",
  "select",
  "switch",
]

const rowTwo = [
  "toggle",
  "loader",
  "spinner",
  "progress",
  "pagination",
  "breadcrumb",
  "stepper",
  "timeline",
  "calendar",
  "datepicker",
  "form",
  "table",
  "list",
  "grid",
  "carousel",
]

const rowThree = [
  "dialog",
  "toast",
  "snackbar",
  "notification",
  "kbd",
  "code",
  "copy",
  "upload",
  "rating",
  "tag",
  "chip",
  "divider",
  "separator",
  "skeleton",
  "drawer",
]

function PillTrack({ items, rowClass }) {
  return (
    <div className={`pill-row ${rowClass}`}>
      <div className="pill-track">
        {items.map((item) => (
          <span key={`${rowClass}-${item}`} className="pill-item">
            {item}
          </span>
        ))}
        {items.map((item) => (
          <span key={`${rowClass}-${item}-clone`} className="pill-item" aria-hidden="true">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function PillRows() {
  return (
    <section className="pillrows-section" aria-label="UI element categories">
      <div className="container pillrows-container">
        <PillTrack items={rowOne} rowClass="pill-row-left" />
        <PillTrack items={rowTwo} rowClass="pill-row-right" />
        <PillTrack items={rowThree} rowClass="pill-row-left" />
      </div>
    </section>
  )
}

export default PillRows
