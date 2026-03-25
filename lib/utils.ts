/**
 * Merge class names. Pass strings, undefined, null, or false; falsy values are omitted.
 */
export function cn(
  ...args: (string | undefined | null | false)[]
): string {
  return args.filter(Boolean).join(" ")
}
