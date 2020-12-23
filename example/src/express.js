import path from "path";

import express from "express";

import pwrcExpress from "@pwrc/express";

const app = express();

app.use(
  "/static",
  express.static(path.resolve(process.cwd(), "public/static"))
);

app.use(
  "/*",
  pwrcExpress({
    styles: ["/static/main.css"],
    scripts: ["/static/main.js"],
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 App started on port ${port}`);
});
