const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(src: string) {
  if (
    !src ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  if (!basePath || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}
