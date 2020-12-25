import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useMeta, useTitle } from "hoofd/preact";

import { lazy } from "@pwrc/preact";

// import useStaticResult from "preact-webpack-prerender/useStaticResult";
import Button from "../../components/button";
import { useFetch } from "../../use-fetch";

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

  const [todoId, setTodoId] = useState(1);

  const [todo, reloadTodos] = useFetch(
    "todos",
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  return (
    <>
      <h1>Home Page :D</h1>

      <p>Use Fetch Data</p>
      <p>TODO ID: {todoId}</p>
      <p>
        <Button onClick={reloadTodos}>Reload</Button>
        <Button onClick={() => setTodoId(todoId - 1)}>{"-"}</Button>
        <Button onClick={() => setTodoId(todoId + 1)}>{"+"}</Button>
      </p>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>

      <CodeSplit />
      <ClientOnlyCodeSplit clientOnly={true} />
    </>
  );
}
