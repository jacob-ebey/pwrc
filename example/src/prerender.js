import path from "path";

import { prerender } from "@pwrc/prerender";

const paths = ["/", "/about", "404.html"];

console.log("🚀 Rendering paths", paths);

let assetPrefix = typeof SUB_PATH === "undefined" ? "" : SUB_PATH;
assetPrefix = assetPrefix.endsWith("/")
  ? assetPrefix.slice(0, -1)
  : assetPrefix;

const query = `?ts=${Date.now()}`;

prerender({
  paths,
  outdir: path.resolve(process.cwd(), "public"),
  styles: [assetPrefix + "/static/main.css" + query],
  scripts: [assetPrefix + "/static/main.js" + query],
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
