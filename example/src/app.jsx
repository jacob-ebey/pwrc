import { ErrorBoundary, lazy } from "@pwrc/preact";
import { h } from "preact";
import { Router } from "preact-iso/router";
import { useLang, useMeta, useTitleTemplate } from "hoofd/preact";

import Shell from "./components/shell";
import { routePath } from "./utils";

const Home = lazy(() => import("./pages/home"), { route: true });
const About = lazy(() => import("./pages/about"), { route: true });
const NotFound = lazy(() => import("./pages/_404"), { route: true });

export default function App() {
  useLang("en-us");
  useTitleTemplate("%s | Example");
  useMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  });
  useMeta({
    name: "manifest",
    content: "/manifest.json",
  });

  return (
    <Shell>
      <ErrorBoundary>
        <Router>
          <Home path={routePath("/")} />
          <About path={routePath("/about")} />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </Shell>
  );
}
