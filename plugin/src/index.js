import PWRCLoaderPlugin from "@pwrc/loader/dist/cjs/plugin";
import { StatsWriterPlugin } from "webpack-stats-plugin";

const PLUGIN_NAME = "PWRCPlugin";

/**
 * @typedef {object} PWRCPluginOptions
 * @property {string} app
 * @property {string} filename
 * @property {boolean} server
 */

/** @type {PWRCPluginOptions} */
const defaultOptions = {
  filename: "stats.json",
  server: false,
};

/**
 * A webpack plugin and preact lazy loading solution that takes care of all that nasty code-splitting in a manageable way.
 */
class PWRCPlugin {
  /**
   *
   * @param {PWRCPluginOptions} options
   */
  constructor(options = defaultOptions) {
    this._app = options.app;
    this._filename = options.filename || defaultOptions.filename;
    this._server = options.server || defaultOptions.server;
  }

  /**
   *
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    const {
      NormalModule,
      util: { cleverMerge },
    } = compiler.webpack;
    if (this._app) {
      compiler.options.resolve = compiler.options.resolve || {};

      compiler.options.resolve.alias = Object.assign(
        compiler.options.resolve.alias || {},
        {
          "@pwrc/app": this._app,
        }
      );
    }

    if (!this._server) {
      if (!compiler.options.watch) {
        new StatsWriterPlugin({
          stats: {
            all: true,
          },
        }).apply(compiler);
      }
    }

    if (this._server) {
      if (!compiler.options.watch) {
        new PWRCLoaderPlugin({ filename: this._filename }).apply(compiler);

        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
          const normalModuleHooks = NormalModule.getCompilationHooks(
            compilation
          );

          normalModuleHooks.loader.tap(PLUGIN_NAME, (_, normalModule) => {
            if (
              normalModule.type &&
              normalModule.type.startsWith("javascript/")
            ) {
              normalModule.loaders.unshift({
                loader: require.resolve("@pwrc/loader"),
              });
            }
          });
        });
      }
    }
  }
}

export default PWRCPlugin;
