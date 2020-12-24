import { render } from "@pwrc/prerender";

/**
 * @typedef {object} PWRCVercelOptions
 * @property {string[]} scripts
 * @property {string[]} styles
 */

/**
 * @param {PWRCVercelOptions} options
 */

function pwrcVercel(options) {
  /**
   *
   * @param {import("@vercel/node").NowRequest} req
   * @param {import("@vercel/node").NowResponse} res
   */
  async function pwrcVercelHandler(req, res) {
    try {
      let path = req.url;
      if (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
      }
      const html = await render(path, options);

      res.status(200).send(html);
    } catch (error) {
      res.status(500).send("");
    }
  }

  return pwrcVercelHandler;
}

export default pwrcVercel;
