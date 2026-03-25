import ElementCard from "./ElementCard"
import ElementGridLayout from "./ElementGridLayout"

function ElementsGrid({ items }) {
  if (!items || items.length === 0) return null
  return (
    <ElementGridLayout>
      {items.map((item) => (
        <ElementCard
          key={item.id}
          id={item.id}
          name={item.title}
          category={item.category}
          component={item.component}
          defaultVariant={item.variants[0]}
          compactPreview={item.category === "Product Cards"}
        />
      ))}
    </ElementGridLayout>
  )
}

export default ElementsGrid
