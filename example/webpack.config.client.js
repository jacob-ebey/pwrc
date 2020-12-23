const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SizePlugin = require("size-plugin");
const { merge } = require("webpack-merge");

const PWRCPlugin = require("@pwrc/plugin");

const common = require("./webpack.config.common");

module.exports = merge(common, {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve("./public/static"),
    publicPath: process.env.SUB_PATH
      ? (process.env.SUB_PATH.endsWith("/")
          ? process.env.SUB_PATH.slice(0, -1)
          : process.env.SUB_PATH) + "/static/"
      : "/static/",
  },
  performance: {
    assetFilter: function (assetFilename) {
      return !assetFilename.endsWith("stats.json");
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new SizePlugin({ writeFile: false }),
    new PWRCPlugin({
      server: false,
      filename: "stats.json",
    }),
  ],
  module: {
    rules: [
      {
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
});
