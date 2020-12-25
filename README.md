# PWRC - Preact Webpack Render Container

Deployed Examples:
Static Site: https://jacob-ebey.js.org/pwrc/
SSR'd Site: https://pwrc-test.vercel.app/

A webpack plugin and preact lazy loading solution that takes care of all that nasty code-splitting in a manageable way.

On a client build, this will generate a json file with the info required for preloading chunks.

On a server build, this will generate a bundle with a "renderAsync" function capable of SSR'ing your application.

## Usage

**client.webpack.config.js**

```js
const PWRCPlugin = require("@pwrc/plugin");

module.exports = {
  // ...
  plugins: [
    new PWRCPlugin({
      server: false,
      filename: "stats.json",
    }),
  ],
};
```

**server.webpack.config.js**

```js
const PWRCPlugin = require("pwrc/plugin");

module.exports = {
  // ...
  plugins: [
    new PWRCPlugin({
      server: true,
      filename: path.resolve("./public/static/stats.json"),
      app: path.resolve("./src/app.jsx"),
    }),
  ],
};
```
