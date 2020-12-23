import fs from "fs";
import path from "path";

import { render } from "./render";

/**
 * @typedef {object} PrerenderOptions
 * @property {string} outdir
 * @property {string[]} paths
 * @property {string[]} scripts
 * @property {string[]} styles
 */

/**
 * @param {PrerenderOptions} options
 */
export async function prerender(options) {
  const { paths, outdir, scripts, styles } = options;

  for (const route of paths) {
    const html = await render(route, { scripts, styles });

    let filepath = route.startsWith("/") ? route.slice(1) : route;
    let filename = path.resolve(outdir, filepath);
    if (!filepath.endsWith(".html")) {
      await fs.promises.mkdir(filename, { recursive: true });

      filename = path.resolve(filename, "index.html");
    }

    await fs.promises.writeFile(filename, html, "utf-8");
  }
}
