import path from "path";

import express from "express";

import pwrcExpress from "@pwrc/express";

import wrap from "./wrap";

let assetPrefix = typeof SUB_PATH === "undefined" ? "" : SUB_PATH;
assetPrefix = assetPrefix.endsWith("/")
  ? assetPrefix.slice(0, -1)
  : assetPrefix;

const query = `?ts=${Date.now()}`;

const app = express();

app.use("/", express.static(path.resolve(process.cwd(), "public")));

app.use(
  "/*",
  pwrcExpress({
    styles: [assetPrefix + "/static/main.css" + query],
    scripts: [assetPrefix + "/static/main.js" + query],
    wrap,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 App started on port http://localhost:${port}`);
});
