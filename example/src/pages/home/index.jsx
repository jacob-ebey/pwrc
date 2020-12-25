import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useMeta, useTitle } from "hoofd/preact";

import { lazy } from "@pwrc/preact";

// import useStaticResult from "preact-webpack-prerender/useStaticResult";
import Button from "../../components/button";

const CodeSplit = lazy(() => import("../../components/code-split"));
const ClientOnlyCodeSplit = lazy(() => import("../../components/code-split"), {
  ssr: false,
});

export default function Home() {
  useTitle("Home");
  useMeta({
    name: "description",
    content: "PWRC example home page",
  });

  const [count, setCount] = useState(0);

  // const { hello } = useStaticResult("home-page-test", () => {
  //   return {
  //     hello: "World",
  //   };
  // });

  const hello = "World";

  return (
    <>
      <h1>Home Page :D</h1>

      <p>Hello Static, {hello}</p>

      <p>Count: {count}</p>
      <Button onClick={() => setCount(count - 1)}>{"-"}</Button>
      <Button onClick={() => setCount(count + 1)}>{"+"}</Button>

      <CodeSplit />
      <ClientOnlyCodeSplit clientOnly={true} />
    </>
  );
}
