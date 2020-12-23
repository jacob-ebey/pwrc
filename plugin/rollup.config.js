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
        exports: "default",
      },
    ],
    plugins,
  };
}

const external = [
  "path",
  "webpack",
  "webpack-stats-plugin",
  "@pwrc/loader/dist/cjs/plugin",
];

export default async function () {
  const files = await glob("./src/**/*.{js}");

  const basepath = path.resolve(__dirname, "src");
  return files.map((file) =>
    createConfig(path.resolve(file).substr(basepath.length + 1))
  );
}
