import type { ComponentType, ReactNode } from "react"

export interface ElementVariant {
  name: string
  preview: ReactNode
  code: string
}

export interface ElementItem {
  id: string
  title: string
  category: string
  component: ComponentType<any>
  variants: ElementVariant[]
  description?: string
}
