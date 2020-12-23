import { h, Component } from "preact";
import { useRef, useState } from "preact/hooks";

let rewindCount = 0;

/**
 * @typedef {object} LazyOptions
 * @property {boolean} route
 * @property {boolean} ssr
 */

/**
 * @param {() => Promise<any>)} load
 * @param {LazyOptions} options
 */
export function lazy(load, options, _) {
  let promise, component;
  let count = rewindCount;
  const skipSsr = options && options.ssr === false;
  const isRoute = options && options.route;

  const Component = (props) => {
    if (typeof window === "undefined" && skipSsr) {
      return null;
    }

    if (rewindCount !== count) {
      count = rewindCount;
      promise = undefined;
      component = undefined;
    }

    if (!promise) {
      promise = load().then((mod) => {
        const result = (component = (mod && mod.default) || mod);

        if (_) {
          return _(result) || result;
        }

        return result;
      });
    }

    const [, update] = useState(0);
    const ref = useRef(promise);

    if (!ref.current || !isRoute) {
      ref.current = promise.then(() => update(1));
    }

    if (typeof component === "undefined") throw promise;

    return h(component, props);
  };

  if (!isRoute) {
    return (props) => h(ErrorBoundary, {}, h(Component, props));
  }

  return Component;
}

lazy.rewind = () => {
  rewindCount = rewindCount + 1;
};

export class ErrorBoundary extends Component {
  componentDidCatch(err) {
    if (err && err.then) this.__d = true;
    else if (this.props.onError) this.props.onError(err);
    else console.error(err);
  }
  render() {
    return this.props.children;
  }
}

function absorb(err) {}
