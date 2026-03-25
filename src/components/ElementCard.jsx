function ElementCard({ element, onOpen }) {
  return (
    <article className="element-card">
      <button type="button" className="element-card-button" onClick={() => onOpen(element.id)}>
        <div className={`element-card-preview element-preview-${element.previewType}`} aria-hidden="true">
          <span className="element-preview-chip">{element.category}</span>
          <div className="element-preview-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="element-card-body">
          <h2>{element.title}</h2>
          <p>{element.description}</p>
        </div>
      </button>
    </article>
  )
}

export default ElementCard
