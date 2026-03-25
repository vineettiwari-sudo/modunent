import { useParams } from "react-router-dom"
import { registry } from "../data/registry"
import ElementPreview from "../components/system/ElementPreview"

export default function ComponentPage() {
  const { slug } = useParams()

  const item = registry.find((c) => c.slug === slug)

  if (!item) {
    return <div>Component not found</div>
  }

  const Component = item.component

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{item.name}</h1>

      <ElementPreview
        Component={Component}
        variants={item.variants}
        states={item.states}
      />
    </div>
  )
}