export const PUBLIC_PATH_PREFIXES = ["/workshop"];

export function isPublicPath(pathname: string | null): boolean {
  if (!pathname) {
    return false;
  }

  return PUBLIC_PATH_PREFIXES.some((prefix) => {
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}