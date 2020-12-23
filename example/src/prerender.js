import path from "path";

import { prerender } from "@pwrc/prerender";

const paths = ["/", "/about", "404.html"];

console.log("🚀 Rendering paths", paths);

prerender({
  paths,
  outdir: path.resolve(process.cwd(), "public"),
  styles: ["/static/main.css"],
  scripts: ["/static/main.js"],
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
