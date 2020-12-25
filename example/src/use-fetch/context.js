import { createContext } from "preact";

const PromiseContext = createContext(
  typeof window !== "undefined" ? window.PROMISE_CONTEXT || {} : {}
);

export default PromiseContext;
