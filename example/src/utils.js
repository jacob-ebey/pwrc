let assetPrefix = typeof SUB_PATH === "undefined" ? false : SUB_PATH;
assetPrefix = assetPrefix.endsWith("/")
  ? assetPrefix.slice(0, -1)
  : assetPrefix;

export function routePath(path) {
  if (typeof window === "undefined" || !assetPrefix) {
    return path;
  }

  if (path === "/") {
    return assetPrefix;
  }

  return assetPrefix + path;
}
