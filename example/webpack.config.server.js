const path = require("path");

const PWRCPlugin = require("@pwrc/plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.config.common");

module.exports = merge(common, {
  target: "node",
  externals: [{ express: "commonjs express" }],
  entry: {
    express: "./src/express.js",
    prerender: "./src/prerender.js",
  },
  output: {
    path: path.resolve("./dist"),
  },
  performance: false,
  plugins: [
    new PWRCPlugin({
      server: true,
      filename: path.resolve("./public/static/stats.json"),
      app: path.resolve("./src/app.jsx"),
    }),
  ],
  module: {
    rules: [
      {
        include: /\.module\.css$/,
        use: {
          loader: "css-loader",
          options: {
            modules: { exportOnlyLocals: true },
          },
        },
      },
    ],
  },
});
