import { h } from "preact";
import { useMeta, useTitle } from "hoofd/preact";

export default function About() {
  useTitle("About");
  useMeta({
    name: "description",
    content: "PWRC example about page",
  });

  return <h1>About Page :D</h1>;
}
