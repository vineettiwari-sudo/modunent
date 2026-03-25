/**
 * ControlBase – shared constraints for interactive controls.
 * Uses CSS variables: --control-sm/md/lg, --radius-sm/md/lg.
 * Icon mapping: 32px → 14px, 36px → 16px, 44px → 18px (use --icon-sm/md/lg).
 */

export type ControlSize = "sm" | "md" | "lg"

const CONTROL_VAR = {
  sm: "var(--control-sm)",
  md: "var(--control-md)",
  lg: "var(--control-lg)",
} as const

const RADIUS_VAR = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
} as const

const PADDING_X = {
  sm: "px-3",
  md: "px-4",
  lg: "px-6",
} as const

const FONT_SIZE = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
} as const

/**
 * Returns Tailwind-compatible class string for control base.
 * Height and radius use CSS variables; no raw px for those.
 */
export function getControlBase(opts: { size?: ControlSize } = {}): string {
  const size = opts.size ?? "md"
  const h = CONTROL_VAR[size]
  const r = RADIUS_VAR[size]
  return [
    `h-[${h}]`,
    `min-h-[${h}]`,
    PADDING_X[size],
    `rounded-[${r}]`,
    "inline-flex items-center justify-center gap-2",
    FONT_SIZE[size],
    "font-medium transition",
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface",
  ].join(" ")
}

export const CONTROL_HEIGHT_PX = 36
export const CONTROL_ICON_SIZE_PX = 16
export const CONTROL_RADIUS_PX = 8

export const controlBase = getControlBase({ size: "md" })
