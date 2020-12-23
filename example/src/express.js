import path from "path";

import express from "express";

import pwrcExpress from "@pwrc/express";

let assetPrefix = typeof SUB_PATH === "undefined" ? "" : SUB_PATH;
assetPrefix = assetPrefix.endsWith("/")
  ? assetPrefix.slice(0, -1)
  : assetPrefix;

const app = express();

app.use(
  "/static",
  express.static(path.resolve(process.cwd(), "public/static"))
);

app.use(
  "/*",
  pwrcExpress({
    styles: [assetPrefix + "/static/main.css"],
    scripts: [assetPrefix + "/static/main.js"],
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 App started on port ${port}`);
});
