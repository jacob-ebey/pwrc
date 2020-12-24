import pwrcVercel from "@pwrc/vercel";

const query = `?ts=${Date.now()}`;

let assetPrefix = typeof SUB_PATH === "undefined" ? "" : SUB_PATH;
assetPrefix = assetPrefix.endsWith("/")
  ? assetPrefix.slice(0, -1)
  : assetPrefix;

export default pwrcVercel({
  styles: [assetPrefix + "/static/main.css" + query],
  scripts: [assetPrefix + "/static/main.js" + query],
});
