import { h } from "preact";
import { useMeta } from "hoofd/preact";

import PromiseContext from "./use-fetch/context";

export default function wrap(vnode) {
  const ctx = {};
  const Wrapped = () => {
    return (
      <PromiseContext.Provider value={ctx}>{vnode}</PromiseContext.Provider>
    );
  };

  Wrapped.html = () => {
    return `<script>window.PROMISE_CONTEXT=JSON.parse(${JSON.stringify(
      JSON.stringify(ctx)
    )});</script>`;
  };

  return Wrapped;
}
