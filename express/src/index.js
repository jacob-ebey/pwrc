import { render } from "@pwrc/prerender";

/**
 * @typedef {object} PWRCExpressOptions
 * @property {string[]} scripts
 * @property {string[]} styles
 */

/**
 * @param {PWRCExpressOptions} options
 */

function pwrcExpress(options) {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async function pwrcExpressHandler(req, res, next) {
    try {
      let path = req.baseUrl + req.path;
      if (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
      }
      const html = await render(path, options);

      res.send(html);
    } catch (error) {
      next(error);
    }
  }

  return pwrcExpressHandler;
}

export default pwrcExpress;
