export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Prefix public asset paths with Next.js basePath (GitHub Pages: /Portfolio). */
export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base) return path;
  return path === "/" ? `${base}/` : `${base}${path}`;
}
