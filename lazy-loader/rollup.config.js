import path from "path";

import glob from "tiny-glob";

import json from "@rollup/plugin-json";
import filesize from "rollup-plugin-filesize";

const plugins = [json(), filesize()];

function createConfig(filename) {
  return {
    input: `src/${filename}`,
    external,
    output: [
      {
        file: `./dist/cjs/${filename}`,
        format: "cjs",
        name: "pwrc-lazy-loader",
        exports: "auto",
      },
    ],
    plugins,
  };
}

const external = [
  "fs",
  "path",
  "webpack",
  "acorn",
  "acorn-walk",
  "@jacob-ebey/astring",
  "source-map",
];

export default async function () {
  const files = await glob("./src/**/*.{js}");

  const basepath = path.resolve(__dirname, "src");
  return files.map((file) =>
    createConfig(path.resolve(file).substr(basepath.length + 1))
  );
}
