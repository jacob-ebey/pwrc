import { ErrorBoundary, lazy } from "@pwrc/preact";
import { h } from "preact";
import { Router } from "preact-iso/router";
import { useLang, useTitleTemplate } from "hoofd/preact";

import Shell from "./components/shell";

const assetPrefix = typeof SUB_PATH === "undefined" ? false : SUB_PATH;

const Home = lazy(() => import("./pages/home"), { route: true });
const About = lazy(() => import("./pages/about"), { route: true });
const NotFound = lazy(() => import("./pages/_404"), { route: true });

function routePath(path) {
  if (typeof window === "undefined" || !assetPrefix) {
    return path;
  }

  console.log((assetPrefix.endsWith("/") ? assetPrefix.slice(0, -1) : assetPrefix) + path);
  return (
    (assetPrefix.endsWith("/") ? assetPrefix.slice(0, -1) : assetPrefix) + path
  );
}

export default function App() {
  useLang("en-us");
  useTitleTemplate("%s | Example");

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
