import { h } from "preact";
import { useMemo } from "preact/hooks";

const assetPrefix = typeof SUB_PATH === "undefined" ? false : SUB_PATH;

export default function Link({ as = "a", href, ...rest }) {
  const url = useMemo(() => {
    if (assetPrefix) {
      return (
        (assetPrefix.endsWith("/") ? assetPrefix.slice(0, -1) : assetPrefix) +
        href
      );
    }

    return href;
  }, [href]);

  const Component = as;

  return <Component href={url} {...rest} />;
}
