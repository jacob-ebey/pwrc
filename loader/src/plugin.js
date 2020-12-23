import fs from "fs";
import path from "path";

const PLUGIN_NAME = "PWRCLoaderPlugin";

/**
 * @typedef {object} PWRCLoaderPluginOptions
 * @property {string} filename
 */

/** @type {PWRCLoaderPluginOptions} */
const defaultOptions = {
  filename: "stats.json",
};

class PWRCLoaderPlugin {
  constructor(options = defaultOptions) {
    this._filename = options.filename || defaultOptions.filename;
  }

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    const pwrc = (compiler.$pwrc = compiler.$pwrc || {});
    let statsPromise = null;

    pwrc.safeReadStats = () => {
      if (!statsPromise) {
        statsPromise = (async () => {
          try {
            const json = await fs.promises.readFile(this._filename, "utf-8");
            return JSON.parse(json);
          } catch (err) {
            console.error(err);
            return null;
          }
        })();
      }

      return statsPromise;
    };

    compiler.hooks.afterCompile.tap(PLUGIN_NAME, (compilation) => {
      compilation.fileDependencies.add(path.resolve(this._filename));

      statsPromise = null;
    });

    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.childCompiler.tap(PLUGIN_NAME, (childCompiler) => {
        childCompiler.$pwrc = pwrc;
      });
    });

    compiler.hooks.run.tap(PLUGIN_NAME, () => {
      statsPromise = null;
    });

    compiler.hooks.watchRun.tap(PLUGIN_NAME, () => {
      statsPromise = null;
    });
  }
}

export default PWRCLoaderPlugin;
