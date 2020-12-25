const PreactRefreshPlugin = require("@prefresh/webpack");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");

const clientConfig = require("./webpack.config.client");
const serverConfig = require("./webpack.config.server");

const devConfig = {
  mode: "development",
  devtool: "source-map",
  performance: false,
};

module.exports = [
  merge(clientConfig, devConfig, {
    plugins: [new PreactRefreshPlugin(), new HotModuleReplacementPlugin()],
  }),
  merge(serverConfig, devConfig),
];
