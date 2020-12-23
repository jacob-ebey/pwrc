import { h } from "preact";

export default function CodeSplit({ clientOnly }) {
  return <h2>I'm a code-split{clientOnly ? " client-only" : ""} component!</h2>;
}
