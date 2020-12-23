import path from "path";

import glob from "tiny-glob";

import filesize from "rollup-plugin-filesize";

const plugins = [filesize()];

function createConfig(filename) {
  return {
    input: `src/${filename}`,
    external,
    output: [
      {
        file: `./dist/cjs/${filename}`,
        format: "cjs",
        name: "pwrc-express",
      },
      {
        file: `./dist/esm/${filename}`,
        format: "es",
      },
    ],
    plugins,
  };
}

const external = [
  "fs",
  "path",
  "preact",
  "preact/hooks",
  "preact-iso/router",
  "preact-render-to-string",
  "hoofd/preact",
  "html-minifier-terser",
  "@pwrc/preact",
  "@pwrc/preact/dist/esm/server",
  "@pwrc/app",
];

export default async function () {
  const files = await glob("./src/**/*.{js}");

  const basepath = path.resolve(__dirname, "src");
  return files.map((file) =>
    createConfig(path.resolve(file).substr(basepath.length + 1))
  );
}
