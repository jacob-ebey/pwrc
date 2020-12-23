const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");
const { DefinePlugin, ProgressPlugin } = require("webpack");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[id].[contenthash].js"
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015",
      }),
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new ESBuildPlugin(),
    new DefinePlugin({
      SUB_PATH: JSON.stringify(process.env.SUB_PATH || ""),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        include: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "jsx",
              target: "es2015",
              jsxFactory: "h",
              jsxFragment: "Fragment",
            },
          },
        ],
      },
    ],
  },
};
