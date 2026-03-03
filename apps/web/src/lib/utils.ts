/** Utility: merge class names (simple version, swap for clsx/tailwind-merge later) */
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
