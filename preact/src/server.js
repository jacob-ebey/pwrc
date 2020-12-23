import { h, cloneElement } from "preact";
import renderToString from "preact-render-to-string";

/**
 * @param {ReturnType<h>} vnode The root JSX element to render (eg: `<App />`)
 * @param {object} [options]
 * @param {number} [options.maxDepth = 10] The maximum number of nested asynchronous operations to wait for before flushing
 * @param {object} [options.props] Additional props to merge into the root JSX element
 * @param {(res: any) => void} [options.onSuspenseResolve] A callback that occurs when a suspense promise resolves
 * @returns {Promise<string>}
 */
export async function renderToStringAsync(vnode, options) {
  options = options || {};

  const maxDepth = options.maxDepth || 10;
  const props = options.props;
  const onSuspenseResolve = options.onSuspenseResolve;
  let tries = 0;

  if (typeof vnode === "function") {
    vnode = h(vnode, props);
  } else if (props) {
    vnode = cloneElement(vnode, props);
  }

  const render = () => {
    if (++tries > maxDepth) return;
    try {
      return renderToString(vnode);
    } catch (e) {
      if (e && e.then)
        return e.then((res) => {
          if (onSuspenseResolve) onSuspenseResolve(res);

          return render();
        });
      throw e;
    }
  };

  const html = await render();

  return html;
}
