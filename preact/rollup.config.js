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
        name: "pwrc-preact",
      },
      {
        file: `./dist/esm/${filename}`,
        format: "es",
      },
    ],
    plugins,
  };
}

const external = ["preact", "preact/hooks", "preact-render-to-string"];

export default async function () {
  const files = await glob("./src/**/*.{js}");

  const basepath = path.resolve(__dirname, "src");
  return files
    .map((file) => createConfig(path.resolve(file).substr(basepath.length + 1)))
    .concat([
      {
        input: "src/index.js",
        external,
        output: {
          file: `./dist/umd/index.js`,
          format: "umd",
          name: "pwrc-preact",
          globals: {
            preact: "preact",
            "preact/hooks": "preactHooks",
          },
        },
      },
    ]);
}
